# Defining shell is necessary in order to modify PATH
SHELL := sh
export PATH := node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# On CI servers, use the `npm ci` installer to avoid introducing changes to the package-lock.json
# On developer machines, prefer the generally more flexible `npm install`. 💪
NPM_I := $(if $(CI), ci, install)

# User-overridable
TSC_FLAGS := --build
ESLINT_FLAGS :=
NPM_FLAGS :=

GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))
SRCFILES := $(shell find src -type f -name "*.ts")
SRCTHEME := $(wildcard src/themes/*)
DSTTHEME :=	$(patsubst src/themes/%, themes/%-color-theme.json, $(SRCTHEME))

# Do this when make is invoked without targets
all: compile themes $(GITFILES)

# GENERIC TARGETS

tsconfig.tsbuildinfo: node_modules tsconfig.json $(SRCFILES)
	tsc $(TSC_FLAGS) && touch $@

node_modules: package-lock.json package.json
	npm $(NPM_I) $(NPM_FLAGS) && touch $@

package-lock.json: package.json

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
	cp $< $@

themes/%-color-theme.json: src/themes/% tsconfig.tsbuildinfo $(SRCFILES)
	@mkdir -p themes
	node src/bin/generate $(basename $*) $@

%.vsix: $(DSTTHEME)
	vsce package --out $@

# TASK DEFINITIONS

extension: remedy.vsix

themes: $(DSTTHEME) tsconfig.tsbuildinfo
	node src/bin/refresh-package $(SRCTHEME)

compile: tsconfig.tsbuildinfo

compile/watch: force install
	tsc $(TSC_FLAGS) --watch

install: node_modules $(GITFILES)

lint: force install
	eslint --cache $(ESLINT_FLAGS) .
	remark --quiet .

clean:
	rm -rf {.nyc_output,coverage,docs,.eslintcache} *.vsix
	find . -not -path '*/node_modules/*' -name '*.log' -print -delete

distclean: clean
	git clean -Xf src packages
	rm -rf themes tsconfig.tsbuildinfo packages/*/tsconfig.tsbuildinfo

pristine: distclean
	rm -rf node_modules

release: force
	@utils/make/release.sh

.PHONY: force

-include local.mk
