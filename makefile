# Defining shell is necessary in order to modify PATH
SHELL := sh
export PATH := node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# On CI servers, use the `npm ci` installer to avoid introducing changes to the package-lock.json
# On developer machines, prefer the generally more flexible `npm install`. 💪
NPM_I := $(if $(CI), ci, install)

BABEL_FLAGS :=
ESLINT_FLAGS :=
NPM_FLAGS :=

GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))
SRCFILES := $(shell find src packages -type f -name "*.mjs")
DSTFILES := $(patsubst %.mjs, %.js, $(SRCFILES))
SRCTHEME := $(wildcard src/themes/*)
DSTTHEME :=	$(patsubst src/themes/%, themes/%-color-theme.json, $(SRCTHEME))

# Do this when make is invoked without targets
all: precompile themes $(GITFILES)

# GENERIC TARGETS

node_modules: package.json
	npm $(NPM_I) $(NPM_FLAGS) && touch node_modules

# Default compilation target for all source files
%.js: %.mjs node_modules babel.config.js
	babel $< --out-file $@ $(BABEL_FLAGS)

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
	cp $< $@

themes/%-color-theme.json: src/themes/% $(DSTFILES)
	@mkdir -p themes
	node src/bin/generate $< $@

%.vsix: $(DSTTHEME)
	vsce package --out $@

# TASK DEFINITIONS

extension: remedy.vsix

themes: $(DSTTHEME)
	node src/bin/refresh-package $(SRCTHEME)

compile: $(DSTFILES)

precompile: install
	babel . --extensions .mjs --out-dir . $(BABEL_FLAGS)

install: node_modules $(GITFILES)

lint: force install
	eslint --cache --ext .mjs --report-unused-disable-directives $(ESLINT_FLAGS) .
	remark --quiet .

unlock: pristine
	rm -f package-lock.json
	touch package.json

clean:
	rm -rf {.nyc_output,coverage,docs,.eslintcache}
	find . -not -path '*/node_modules/*' -name '*.log' -print -delete

distclean: clean
	rm -f $(shell find src packages -type f -name "*.js")
	rm -rf themes

pristine: distclean
	rm -rf node_modules

release: force
	@utils/make/release.sh

.PHONY: force

-include local.mk
