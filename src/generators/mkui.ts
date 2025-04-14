import {
  type UIColourPalette,
  type UIPalette,
  type CodePalette,
} from '@remedy/types'

interface MKUIParams {
  ui: UIPalette
  code: CodePalette
}

/**
 * Get the float representation of a channel's hex value as a range between 0 and 1 corresponding to 0x00 - 0xFF
 * @private
 */
function ch(hex: number) {
  return hex / 0xFF
}

function mkui({ ui, code }: MKUIParams): UIColourPalette {
  return {
    /**
     * Base Colours
     */
    focusBorder: ui.accent.alpha(ch(0x66)).hexa(),
    foreground: ui.text.primary.hex(),
    disabledForeground: ui.text.dimmed.hex(),
    'widget.shadow': ui.shadow.hex(),
    'selection.background': ui.text.primary.alpha(ch(0x44)).hexa(),
    descriptionForeground: ui.text.primary.hex(),
    'sash.hoverBorder': ui.border.hex(),

    /**
     * Windows
     */
    // 'window.activeBorder': '#ff0000',
    // 'window.inactiveBorder': '#ff0000',

    /**
     * Icons
     */
    'icon.foreground': ui.icon.foreground.hex(),
    'problemsErrorIcon.foreground': ui.problems.error.hex(),
    'problemsWarningIcon.foreground': ui.problems.warning.hex(),
    'problemsInfoIcon.foreground': ui.problems.info.hex(),
    'notificationsErrorIcon.foreground': ui.problems.error.hex(),
    'notificationsInfoIcon.foreground': ui.problems.info.hex(),
    'notificationsWarningIcon.foreground': ui.problems.warning.hex(),
    'symbolIcon.arrayForeground': code.punctuation,
    'symbolIcon.booleanForeground': code.primitives,
    'symbolIcon.classForeground': code.classes,
    'symbolIcon.constantForeground': code.primitives,
    'symbolIcon.constructorForeground': code.classes,
    'symbolIcon.fieldForeground': code.decoratives.raw,
    'symbolIcon.functionForeground': code.functions,
    'symbolIcon.interfaceForeground': code.types,
    'symbolIcon.methodForeground': code.functions,
    'symbolIcon.moduleForeground': code.classes,
    'symbolIcon.namespaceForeground': code.classes,
    'symbolIcon.propertyForeground': code.constants,
    'symbolIcon.stringForeground': code.strings,
    'symbolIcon.structForeground': code.types,
    'symbolIcon.variableForeground': code.escapes,
    'symbolIcon.numberForeground': code.primitives,
    'symbolIcon.snippetForeground': code.primitives,
    'symbolIcon.keywordForeground': code.language,
    'symbolIcon.nullForeground': code.primitives,
    'symbolIcon.objectForeground': code.punctuation,
    'symbolIcon.operatorForeground': code.language,
    'symbolIcon.packageForeground': code.classes,
    'symbolIcon.textForeground': code.comments,
    'symbolIcon.typeParameterForeground': code.types,
    'symbolIcon.unitForeground': code.primitives,
    // 'symbolIcon.colorForeground': '#ff0000',
    // 'symbolIcon.enumeratorForeground': '#ff0000',
    // 'symbolIcon.enumeratorMemberForeground': '#ff0000',
    // 'symbolIcon.eventForeground': '#ff0000',
    // 'symbolIcon.fileForeground': '#ff0000',
    // 'symbolIcon.folderForeground': '#ff0000',
    // 'symbolIcon.keyForeground': '#ff0000',
    // 'symbolIcon.referenceForeground': '#ff0000',

    /**
     * Lightbulb
     */
    'editorLightBulb.foreground': ui.problems.warning.hex(),
    'editorLightBulbAutoFix.foreground': ui.problems.info.hex(),

    /**
     * Text colours
     *
     * Colors inside a text document, such as the welcome page.
     */
    'textLink.activeForeground': ui.accent.hex(),
    'textLink.foreground': ui.accent.hex(),
    'textBlockQuote.background': ui.background.panel.hex(),
    'textBlockQuote.border': ui.accent.hex(),
    'textCodeBlock.background': ui.background.code.hex(),
    'textPreformat.foreground': code.decoratives.raw,
    'textPreformat.background': ui.background.panel.hex(),

    /**
     * Action colors
     *
     * A set of colors to control the interactions with actions across the workbench.
     */
    'toolbar.hoverBackground': ui.background.hover.alpha(ch(0x66)).hexa(),
    'toolbar.hoverOutline': '#0000',
    'toolbar.activeBackground': ui.background.hover.alpha(ch(0xbb)).hexa(),

    /**
     * Button Control
     *
     * A set of colors for button widgets such as Open Folder button in the Explorer of a new
     * window
     */
    'button.background': ui.button.primary.hex(),
    'button.foreground': ui.text.contrast.hex(),
    'button.secondaryBackground': ui.button.secondary.hex(),
    'button.secondaryForeground': ui.text.contrast.hex(),
    'button.hoverBackground': ui.button.primary.lighten(0.2).hex(),
    'button.secondaryHoverBackground': ui.button.secondary.lighten(0.2).hex(),
    'checkbox.background': ui.background.panel.hex(),
    'checkbox.foreground': code.primitives,
    'checkbox.border': ui.border.hex(),
    // 'button.border': ui.border.hex(),
    'radio.activeBackground': ui.button.primary.hex(),
    'radio.activeBorder': ui.border.hex(),
    'radio.activeForeground': ui.text.contrast.hex(),
    'radio.inactiveBackground': ui.background.panel.hex(),
    'radio.inactiveBorder': ui.border.hex(),
    'radio.inactiveHoverBackground': ui.highlight.hover.alpha(ch(0x11)).hexa(),

    /**
     * Dropdown Control
     *
     * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output
     * panel. Note that the Dropdown control is not used on macOS currently.
     */
    'dropdown.background': ui.background.panel.hex(),
    'dropdown.foreground': ui.text.primary.hex(),
    'dropdown.border': ui.border.hex(),
    // 'dropdown.listBackground': '#FF0000',

    /**
     * Input Control
     *
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    'input.background': ui.background.code.hex(),
    'input.border': ui.border.hex(),
    'input.placeholderForeground': ui.text.secondary.hex(),
    'inputValidation.errorBackground': ui.problems.error.hex(),
    'inputValidation.errorForeground': ui.text.contrast.hex(),
    'inputValidation.errorBorder': ui.problems.error.hex(),
    'inputValidation.warningBackground': ui.problems.warning.hex(),
    'inputValidation.warningForeground': ui.text.contrast.hex(),
    'inputValidation.warningBorder': ui.problems.warning.hex(),
    'inputValidation.infoBackground': ui.problems.info.hex(),
    'inputValidation.infoForeground': ui.text.contrast.hex(),
    'inputValidation.infoBorder': ui.problems.info.hex(),
    'inputOption.activeBorder': ui.accent.alpha(ch(0x66)).hexa(),
    // TODO(vscode): Implement inputOption.foreground colour contribution
    // 'inputOption.activeForeground': '#ff0000',
    // 'input.foreground': '#ff0000',

    /**
     * Search Editor
     */
    'searchEditor.findMatchBorder': ui.highlight.word.matches.alpha(ch(0x44)).hexa(),
    // 'searchEditor.findMatchBackground': '#ff0000',
    // 'searchEditor.textInputBorder': '#ff0000,

    /**
     * Scrollbar Control
     */
    'scrollbar.shadow': ui.shadow.hex(),
    'scrollbarSlider.activeBackground': ui.accent.alpha(ch(0x66)).hexa(),
    'scrollbarSlider.background': ui.accent.alpha(ch(0x22)).hexa(),
    'scrollbarSlider.hoverBackground': ui.accent.alpha(ch(0x44)).hexa(),

    /**
     * Badge
     *
     * Badges are small information labels, for example, search results count.
     */
    'badge.background': ui.accent.hex(),
    'badge.foreground': ui.text.contrast.hex(),

    /**
     * Progress Bar
     */
    'progressBar.background': ui.accent.hex(),

    /**
     * Lists And Trees
     *
     * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an
     * inactive does not.
     */
    'tree.indentGuidesStroke': ui.text.secondary.alpha(ch(0x99)).hexa(),
    'tree.tableColumnsBorder': ui.border.hex(),
    'list.activeSelectionBackground': ui.accent.alpha(ch(0xaa)).hexa(),
    'list.activeSelectionForeground': ui.text.primary.hex(),
    'list.hoverBackground': ui.highlight.hover.alpha(ch(0x11)).hexa(),
    'listFilterWidget.background': ui.background.panel.hex(),
    'listFilterWidget.noMatchesOutline': ui.problems.error.hex(),
    'list.inactiveSelectionBackground': ui.highlight.hover.alpha(ch(0x09)).hexa(),
    'list.highlightForeground': ui.accent.hex(),
    'list.dropBackground': ui.background.drop.alpha(ch(0x22)).hexa(),
    'list.errorForeground': ui.problems.error.hex(),
    'list.warningForeground': ui.problems.warning.hex(),
    'list.deemphasizedForeground': ui.scm.ignored.hex(),
    'list.filterMatchBackground': ui.highlight.word.matches.alpha(ch(0x44)).hexa(),
    'list.invalidItemForeground': ui.problems.error.hex(),
    'list.inactiveFocusBackground': ui.highlight.hover.alpha(ch(0x09)).hexa(),
    'quickInputList.focusBackground': ui.accent.alpha(ch(0x99)).hexa(),

    /**
     * Activity Bar
     *
     * The Activity Bar is displayed either on the far left or right of the workbench and allows
     * fast switching between views of the Side Bar.
     */
    'activityBar.activeBorder': ui.accent.hex(),
    'activityBar.dropBorder': ui.accent.hex(),
    'activityBar.background': ui.background.panel.hex(),
    'activityBar.border': ui.border.hex(),
    'activityBar.foreground': ui.icon.foreground.hex(),
    'activityBar.inactiveForeground': ui.icon.inactive.hex(),
    'activityBarTop.foreground': ui.icon.foreground.hex(),
    'activityBarTop.activeBorder': ui.accent.hex(),
    'activityBarTop.inactiveForeground': ui.icon.inactive.hex(),
    'activityBarTop.dropBorder': ui.accent.hex(),
    'activityBarTop.background': ui.background.panel.hex(),
    'activityBarTop.activeBackground': ui.background.panel.hex(),
    'activityBarBadge.background': ui.accent.hex(),
    'activityBarBadge.foreground': ui.text.contrast.hex(),
    'activityErrorBadge.background': ui.problems.error.hex(),
    'activityErrorBadge.foreground': ui.text.contrast.hex(),
    'activityWarningBadge.background': ui.problems.warning.hex(),
    'activityWarningBadge.foreground': ui.text.contrast.hex(),
    // TODO(vscode): implement panelTitle.activeBackground colour contribution
    // 'activityBar.activeBackground': ui.background.code.hex(),

    /**
     * Command Center
     */
    'commandCenter.background': ui.background.code.hex(),
    'commandCenter.border': ui.border.hex(),
    'commandCenter.foreground': ui.text.secondary.hex(),
    'commandCenter.activeForeground': ui.text.secondary.hex(),
    'commandCenter.activeBackground': ui.background.code.hex(),
    'commandCenter.activeBorder': ui.accent.hex(),
    'commandCenter.inactiveBorder': ui.border.hex(),

    /**
     * Side Bar
     *
     * The Side Bar contains views like the Explorer and Search.
     */
    'sideBar.background': ui.background.panel.hex(),
    'sideBar.border': ui.border.hex(),
    'sideBar.foreground': ui.text.primary.hex(),
    'sideBarSectionHeader.foreground': ui.text.secondary.hex(),
    'sideBarSectionHeader.background': ui.background.panel.hex(),
    'sideBarSectionHeader.border': ui.border.hex(),
    'sideBar.dropBackground': ui.background.drop.alpha(ch(0x22)).hexa(),
    'sideBarTitle.foreground': ui.text.secondary.hex(),

    /**
     * Minimap
     *
     * The Minimap shows a minified version of the current file.
     */
    'minimap.background': ui.background.panel.hex(),
    'minimap.findMatchHighlight': ui.highlight.word.matches.alpha(ch(0x44)).hexa(),
    'minimap.selectionHighlight': ui.text.primary.alpha(ch(0xaa)).hexa(),
    'minimap.errorHighlight': ui.problems.error.hex(),
    'minimap.warningHighlight': ui.problems.warning.hex(),
    'minimapGutter.addedBackground': ui.scm.added.hex(),
    'minimapGutter.modifiedBackground': ui.scm.modified.hex(),
    'minimapGutter.deletedBackground': ui.scm.deleted.hex(),
    'minimapSlider.background': ui.accent.alpha(ch(0x22)).hexa(),
    'minimapSlider.hoverBackground': ui.accent.alpha(ch(0x44)).hexa(),
    'minimapSlider.activeBackground': ui.accent.alpha(ch(0x66)).hexa(),

    /**
     * Editor Groups & Tabs
     *
     * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the
     * container of an editor. Multiple Tabs can be opened in one editor group.
     */
    'editorGroup.border': ui.border.hex(),
    'editorGroup.dropBackground': ui.background.drop.alpha(ch(0x22)).hexa(),
    'editorGroupHeader.noTabsBackground': ui.background.panel.hex(),
    'editorGroupHeader.tabsBackground': ui.background.panel.hex(),
    'tab.activeBackground': ui.background.code.hex(),
    'tab.activeBorderTop': ui.accent.hex(),
    'tab.activeForeground': ui.text.primary.hex(),
    'tab.inactiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedActiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedInactiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedHoverForeground': ui.text.primary.hex(),
    'tab.activeModifiedBorder': ui.accent.hex(),
    'tab.border': ui.background.panel.hex(),
    'tab.lastPinnedBorder': ui.border.hex(),
    'tab.inactiveBackground': ui.background.panel.hex(),
    'tab.inactiveModifiedBorder': ui.accent.alpha(ch(0x66)).hexa(),
    'tab.hoverForeground': ui.text.primary.hex(),
    'editorPane.background': ui.background.panel.hex(),
    'tab.dragAndDropBorder': ui.accent.hex(),
    'tab.selectedBackground': ui.background.panel.hex(),
    'tab.selectedBorderTop': ui.accent.hex(),
    // 'editorGroupHeader.border': ui.border.hex(),
    // 'editorGroupHeader.tabsBorder': '#FF0000',
    // 'editorGroup.emptyBackground': '#FF0000',
    // 'editorGroup.focusedEmptyBorder': '#FF0000',
    // 'tab.unfocusedActiveBackground': '#FF0000',
    // 'tab.activeBorder': '#FF0000',
    // 'tab.unfocusedActiveBorder': '#FF0000',
    // 'tab.unfocusedActiveBorderTop': '#FF0000',
    // 'tab.hoverBackground': '#FF0000',
    // 'tab.unfocusedHoverBackground': '#FF0000',
    // 'tab.hoverBorder': '#FF0000',
    // 'tab.unfocusedHoverBorder': '#FF0000',
    // 'tab.unfocusedActiveModifiedBorder': '#FF0000',
    // 'tab.unfocusedInactiveBackground': '#ff0000',
    // 'tab.unfocusedInactiveModifiedBorder': '#FF0000',

    /**
     * Editor Colours
     */
    'editor.background': ui.background.code.hex(),
    'editor.findMatchBackground': ui.highlight.word.matches.alpha(ch(0x44)).hexa(),
    'editor.findMatchBorder': ui.highlight.word.matches.alpha(ch(0xaa)).hexa(),
    'editor.findMatchHighlightBackground': ui.highlight.word.matches.alpha(ch(0x33)).hexa(),
    'editor.findRangeHighlightBackground': ui.scm.added.alpha(ch(0x11)).hexa(),
    'editor.foreground': ui.text.primary.hex(),
    'editor.foldPlaceholderForeground': ui.text.secondary.hex(),
    'editor.hoverHighlightBackground': ui.highlight.hover.alpha(ch(0x11)).hexa(),
    'editor.lineHighlightBackground': ui.highlight.line.alpha(ch(0x09)).hexa(),
    'editor.rangeHighlightBackground': ui.highlight.range.alpha(ch(0x11)).hexa(),
    'editor.selectionBackground': ui.highlight.selection.alpha(ch(0x22)).hexa(),
    'editor.selectionHighlightBackground': ui.highlight.selection.alpha(ch(0x11)).hexa(),
    'editor.wordHighlightBackground': ui.highlight.word.highlight.alpha(ch(0x11)).hexa(),
    'editor.wordHighlightStrongBackground': ui.highlight.word.source.alpha(ch(0x33)).hexa(),
    'editor.wordHighlightStrongBorder': ui.highlight.word.source.alpha(ch(0xaa)).hexa(),
    'editorBracketHighlight.foreground1': ui.terminal.bright.magenta.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.foreground2': ui.terminal.bright.red.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.foreground3': ui.terminal.bright.yellow.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.foreground4': ui.terminal.bright.cyan.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.foreground5': ui.terminal.bright.green.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.foreground6': ui.terminal.bright.blue.alpha(ch(0x88)).hexa(),
    'editorBracketHighlight.unexpectedBracket.foreground': ui.problems.warning.hex(),
    'editorCursor.background': ui.background.panel.hex(),
    'editorCursor.foreground': ui.text.primary.hex(),
    // 'editorMultiCursor.primary.background': '#ff0000',
    // 'editorMultiCursor.secondary.background': '#ff0000',
    'editorGhostText.background': ui.text.secondary.alpha(ch(0x22)).hexa(),
    'editorGhostText.foreground': ui.text.secondary.hex(),
    'editorIndentGuide.activeBackground': ui.text.secondary.alpha(ch(0x99)).hexa(),
    'editorIndentGuide.background': ui.text.secondary.alpha(ch(0x33)).hexa(),
    'editorLineNumber.activeForeground': ui.text.primary.hex(),
    'editorLineNumber.foreground': ui.text.secondary.hex(),
    'editorLink.activeForeground': ui.accent.hex(),
    'editorRuler.foreground': ui.text.secondary.alpha(ch(0x99)).hexa(),
    'editorStickyScrollHover.background': ui.highlight.line.alpha(ch(0x09)).hexa(),
    'editorWhitespace.foreground': ui.text.secondary.alpha(ch(0x99)).hexa(),
    // 'editorGhostText.border': '#FF0000',
    // 'editor.wordHighlightBorder': '#FF0000',
    // 'editor.inactiveSelectionBackground': '#FF0000',
    // 'editor.selectionHighlightBorder': '#FF0000',
    // 'editor.findMatchHighlightBorder': '#FF0000',
    // 'editor.lineHighlightBorder': '#FF0000',
    // 'editor.rangeHighlightBorder': '#FF0000',
    // 'editor.selectionForeground': '#FF0000',
    // 'editor.findRangeHighlightBorder': '#FF0000',
    // CodeLens
    'editorCodeLens.foreground': ui.text.secondary.hex(),
    // Bracket Matches
    'editorBracketMatch.background': ui.text.secondary.alpha(ch(0x33)).hexa(),
    'editorBracketMatch.border': ui.text.secondary.alpha(ch(0x66)).hexa(),
    // Overview Ruler
    'editorOverviewRuler.background': ui.background.panel.hex(),
    'editorOverviewRuler.border': ui.background.panel.hex(),
    'editorOverviewRuler.bracketMatchForeground': ui.text.secondary.hex(),
    'editorOverviewRuler.findMatchForeground': ui.highlight.word.matches.alpha(ch(0xaa)).hexa(),
    'editorOverviewRuler.wordHighlightForeground': ui.highlight.word.matches.alpha(ch(0x99)).hexa(),
    'editorOverviewRuler.wordHighlightStrongForeground': ui.highlight.word.matches.hex(),
    'editorOverviewRuler.modifiedForeground': ui.scm.modified.hex(),
    'editorOverviewRuler.addedForeground': ui.scm.added.hex(),
    'editorOverviewRuler.deletedForeground': ui.scm.deleted.hex(),
    'editorOverviewRuler.errorForeground': ui.problems.error.hex(),
    'editorOverviewRuler.warningForeground': ui.problems.warning.hex(),
    'editorOverviewRuler.infoForeground': ui.problems.info.hex(),
    'editorOverviewRuler.rangeHighlightForeground': ui.accent.alpha(ch(0xaa)).hexa(),
    // 'editorOverviewRuler.selectionHighlightForeground': '#FF0000',
    // Errors & Warnings
    'editorError.foreground': ui.problems.error.hex(),
    'editorWarning.foreground': ui.problems.warning.hex(),
    'editorInfo.foreground': ui.problems.info.hex(),
    'editorHint.foreground': ui.problems.hint.hex(),
    // 'editorError.background': '#ff0000',
    // 'editorWarning.background': '#ff0000',
    // 'editorInfo.background': '#ff0000',
    // 'editorError.border': '#FF0000',
    // 'editorWarning.border': '#FF0000',
    // 'editorInfo.border': '#FF0000',
    // 'editorHint.border': '#FF0000',
    // Unused Source Code
    'editorUnnecessaryCode.opacity': '#00000055',
    // 'editorUnnecessaryCode.border': '#FF0000',
    // Gutter
    'editorGutter.modifiedBackground': ui.scm.modified.hex(),
    'editorGutter.addedBackground': ui.scm.added.hex(),
    'editorGutter.deletedBackground': ui.scm.deleted.hex(),
    'editorGutter.foldingControlForeground': ui.text.secondary.hex(),
    'editor.foldBackground': ui.problems.info.alpha(ch(0x11)).hexa(),
    'editorGutter.commentRangeForeground': ui.text.secondary.alpha(ch(0x99)).hexa(),
    // 'editorGutter.background': '#FF0000',
    // Inlay Hints
    'editorInlayHint.foreground': ui.text.secondary.hex(),
    'editorInlayHint.background': ui.background.panel.hex(),

    /**
     * Diff Editor Colours
     */
    'diffEditor.border': ui.border.hex(),
    'diffEditor.diagonalFill': ui.text.secondary.alpha(ch(0x44)).hexa(),
    'diffEditor.insertedTextBackground': ui.scm.added.alpha(ch(0x22)).hexa(),
    'diffEditor.insertedLineBackground': ui.scm.added.alpha(ch(0x09)).hexa(),
    'diffEditor.removedTextBackground': ui.scm.deleted.alpha(ch(0x22)).hexa(),
    'diffEditor.removedLineBackground': ui.scm.deleted.alpha(ch(0x09)).hexa(),
    'diffEditor.unchangedCodeBackground': ui.scm.untracked.alpha(ch(0x22)).hexa(),
    'diffEditor.unchangedRegionForeground': ui.text.secondary.hex(),
    'multiDiffEditor.headerBackground': ui.background.panel.hex(),

    /**
     * Editor Widget Colours
     */
    'editorHoverWidget.background': ui.background.panel.hex(),
    'editorHoverWidget.border': ui.border.hex(),
    'editorSuggestWidget.background': ui.background.panel.hex(),
    'editorSuggestWidget.foreground': ui.text.primary.hex(),
    'editorSuggestWidget.highlightForeground': ui.accent.hex(),
    'editorSuggestWidget.selectedBackground': ui.accent.alpha(ch(0x66)).hexa(),
    'editorSuggestWidget.border': ui.border.hex(),
    // 'editorSuggestWidget.selectedForeground': '#ff0000',
    'editorWidget.background': ui.background.panel.hex(),
    'editorWidget.resizeBorder': ui.accent.hex(),
    'editorWidget.border': ui.border.hex(),
    // The Debug Exception widget is a peek view that shows in the editor when debug stops at an
    // exception.
    'debugExceptionWidget.background': ui.background.panel.hex(),
    'debugExceptionWidget.border': ui.accent.hex(),
    // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next
    // Error or Warning command)
    'editorMarkerNavigation.background': ui.background.panel.hex(),
    'editorMarkerNavigationError.background': ui.problems.error.alpha(ch(0x44)).hexa(),
    'editorMarkerNavigationWarning.background': ui.problems.warning.alpha(ch(0x44)).hexa(),
    'editorMarkerNavigationInfo.background': ui.problems.info.alpha(ch(0x44)).hexa(),

    /**
     * Peek View Colours
     */
    'peekView.border': ui.accent.alpha(ch(0x99)).hexa(),
    'peekViewEditor.background': ui.background.code.hex(),
    'peekViewResult.fileForeground': ui.text.primary.hex(),
    'peekViewTitleLabel.foreground': ui.text.primary.hex(),
    'peekViewEditorGutter.background': ui.background.panel.hex(),
    'peekViewEditor.matchHighlightBackground': ui.highlight.word.matches.alpha(ch(0x22)).hexa(),
    'peekViewResult.background': ui.background.panel.hex(),
    'peekViewResult.lineForeground': ui.text.primary.hex(),
    'peekViewResult.matchHighlightBackground': ui.highlight.word.matches.alpha(ch(0x99)).hexa(),
    'peekViewResult.selectionBackground': ui.accent.alpha(ch(0x99)).hexa(),
    'peekViewResult.selectionForeground': ui.text.primary.hex(),
    'peekViewTitle.background': ui.background.panel.hex(),
    'peekViewTitleDescription.foreground': ui.text.secondary.hex(),
    // 'peekViewEditor.matchHighlightBorder': '#FF0000',

    /**
     * Merge Conflicts
     */
    'merge.border': ui.border.alpha(ch(0x99)).hexa(),
    'merge.commonContentBackground': ui.scm.conflicts.common.alpha(ch(0x11)).hexa(),
    'merge.commonHeaderBackground': ui.scm.conflicts.common.alpha(ch(0x33)).hexa(),
    'merge.currentContentBackground': ui.scm.conflicts.current.alpha(ch(0x11)).hexa(),
    'merge.currentHeaderBackground': ui.scm.conflicts.current.alpha(ch(0x33)).hexa(),
    'merge.incomingContentBackground': ui.scm.conflicts.incoming.alpha(ch(0x11)).hexa(),
    'merge.incomingHeaderBackground': ui.scm.conflicts.incoming.alpha(ch(0x33)).hexa(),
    // 'editorOverviewRuler.currentContentForeground': '#FF0000',
    // 'editorOverviewRuler.incomingContentForeground': '#FF0000',
    // 'editorOverviewRuler.commonContentForeground': '#FF0000',

    /**
     * Panel Colours
     */
    'panel.background': ui.background.panel.hex(),
    'panel.border': ui.border.hex(),
    'panel.dropBorder': ui.accent.hex(),
    'panelTitle.activeBorder': ui.accent.hex(),
    'panelTitle.activeForeground': ui.text.primary.hex(),
    'panelTitle.inactiveForeground': ui.text.secondary.hex(),
    'panelSectionHeader.background': ui.background.panel.hex(),
    'panelSectionHeader.foreground': ui.text.secondary.hex(),
    'panelSectionHeader.border': ui.border.hex(),
    'panelSection.border': ui.border.hex(),
    'panelSection.dropBackground': ui.background.drop.alpha(ch(0x22)).hexa(),

    /**
     * Status Bar Colours
     */
    'statusBar.foreground': ui.background.panel.isDark()
      ? ui.text.secondary.lighten(0.4).hex()
      : ui.text.secondary.darken(0.2).hex(),
    'statusBar.background': ui.background.panel.hex(),
    'statusBar.border': ui.border.hex(),
    'statusBar.debuggingBackground': ui.debug.indicator.hex(),
    'statusBar.debuggingForeground': ui.text.complimentary.hex(),
    'statusBar.debuggingBorder': ui.border.hex(),
    'statusBar.noFolderBackground': ui.background.panel.hex(),
    'statusBar.focusBorder': ui.accent.alpha(ch(0x66)).hexa(),
    'statusBarItem.focusBorder': ui.accent.alpha(ch(0x66)).hexa(),
    'statusBarItem.activeBackground': ui.background.panel.hex(),
    'statusBarItem.hoverForeground': ui.text.primary.hex(),
    'statusBarItem.hoverBackground': '#0000',
    'statusBarItem.remoteBackground': ui.button.secondary.hex(),
    'statusBarItem.remoteForeground': ui.text.complimentary.hex(),
    'statusBarItem.remoteHoverBackground': '#0000',
    'statusBarItem.errorBackground': ui.problems.error.hex(),
    'statusBarItem.errorForeground': ui.text.complimentary.hex(),
    'statusBarItem.errorHoverBackground': '#0000',
    'statusBarItem.errorHoverForeground': ui.text.primary.hex(),
    'statusBarItem.warningBackground': ui.problems.warning.hex(),
    'statusBarItem.warningForeground': ui.text.complimentary.hex(),
    'statusBarItem.warningHoverBackground': '#0000',
    'statusBarItem.warningHoverForeground': ui.text.primary.hex(),
    'statusBarItem.compactHoverBackground': '#0000',
    'statusBarItem.prominentBackground': ui.background.hover.hex(),
    'statusBarItem.prominentForeground': ui.text.primary.hex(),
    'statusBarItem.prominentHoverBackground': '#0000',
    'statusBarItem.prominentHoverForeground': ui.text.primary.hex(),

    /**
     * Title Bar Colours
     */
    'titleBar.border': ui.border.hex(),
    'titleBar.activeBackground': ui.background.panel.hex(),
    'titleBar.inactiveBackground': ui.background.code.hex(),
    'titleBar.activeForeground': ui.text.primary.hex(),
    'titleBar.inactiveForeground': ui.text.secondary.hex(),

    /**
     * Menu Bar Colours
     */
    'menubar.selectionForeground': ui.text.primary.hex(),
    'menubar.selectionBackground': ui.accent.hex(),
    'menu.foreground': ui.text.primary.hex(),
    'menu.background': ui.background.panel.hex(),
    'menu.border': ui.accent.alpha(ch(0x66)).hexa(),
    'menu.selectionForeground': ui.text.primary.hex(),
    'menu.selectionBackground': ui.accent.alpha(ch(0x44)).hexa(),
    'menu.separatorBackground': ui.border.hex(),
    // 'menubar.selectionBorder': '#FF0000',
    // 'menu.selectionBorder': '#FF0000',

    /**
     * Notification Colours
     */
    'notifications.background': ui.background.panel.hex(),
    'notificationCenterHeader.background': ui.border.hex(),
    'notificationCenterHeader.foreground': ui.text.primary.hex(),
    'notificationCenter.border': ui.border.hex(),
    'notifications.border': ui.border.hex(),
    'notificationToast.border': ui.border.hex(),
    'notificationLink.foreground': ui.accent.hex(),
    // 'notifications.foreground': '#FF0000',

    /**
     * Extensions
     */
    'extensionButton.prominentForeground': ui.text.contrast.hex(),
    'extensionButton.prominentBackground': ui.accent.hex(),
    'extensionButton.prominentHoverBackground': ui.accent.lighten(0.25).hex(),
    'extensionIcon.starForeground': ui.accent.hex(),
    'extensionIcon.verifiedForeground': ui.icon.success.hex(),
    'extensionIcon.preReleaseForeground': ui.icon.error.hex(),

    /**
     * Quick Picker
     */
    'pickerGroup.border': ui.border.hex(),
    'pickerGroup.foreground': ui.text.primary.hex(),

    /**
     * Keybinding label colors
     *
     * Keybinding labels are shown when there is a keybinding associated with a command.
     */
    'keybindingLabel.background': ui.background.hover.alpha(ch(0x66)).hexa(),
    'keybindingLabel.foreground': ui.text.primary.hex(),
    'keybindingLabel.border': ui.border.hex(),
    'keybindingLabel.bottomBorder': ui.border.hex(),
    // Keyboard Shortcuts view
    'keybindingTable.headerBackground': ui.background.panel.hex(),
    'keybindingTable.rowsBackground': ui.background.panel.alpha(ch(0x66)).hexa(),

    /**
     * Integrated Terminal Colours
     */
    'terminal.background': ui.background.panel.hex(),
    'terminal.border': ui.border.hex(),
    'terminal.foreground': ui.text.primary.hex(),
    'terminal.tab.activeBorder': ui.accent.hex(),
    'terminal.findMatchBackground': ui.highlight.word.matches.alpha(ch(0x44)).hexa(),
    'terminal.findMatchBorder': ui.highlight.word.matches.alpha(ch(0xaa)).hexa(),
    'terminal.findMatchHighlightBackground': ui.highlight.word.matches.alpha(ch(0x33)).hexa(),
    'terminal.initialHintForeground': ui.text.dimmed.hex(),
    'terminalCursor.foreground': ui.text.primary.hex(),
    'terminal.selectionBackground': ui.text.primary.alpha(ch(0x22)).hexa(),
    'terminal.ansiBlack': ui.terminal.normal.black.hex(),
    'terminal.ansiBlue': ui.terminal.normal.blue.hex(),
    'terminal.ansiCyan': ui.terminal.normal.cyan.hex(),
    'terminal.ansiGreen': ui.terminal.normal.green.hex(),
    'terminal.ansiMagenta': ui.terminal.normal.magenta.hex(),
    'terminal.ansiRed': ui.terminal.normal.red.hex(),
    'terminal.ansiWhite': ui.terminal.normal.white.hex(),
    'terminal.ansiYellow': ui.terminal.normal.yellow.hex(),
    'terminal.ansiBrightBlack': ui.background.panel.isDark()
      ? ui.terminal.bright.black.lighten(0.5).hex()
      : ui.terminal.bright.white.darken(0.2).hex(),
    'terminal.ansiBrightBlue': ui.terminal.bright.blue.hex(),
    'terminal.ansiBrightCyan': ui.terminal.bright.cyan.hex(),
    'terminal.ansiBrightGreen': ui.terminal.bright.green.hex(),
    'terminal.ansiBrightMagenta': ui.terminal.bright.magenta.hex(),
    'terminal.ansiBrightRed': ui.terminal.bright.red.hex(),
    'terminal.ansiBrightWhite': ui.background.panel.isDark()
      ? ui.terminal.bright.white.lighten(0.2).hex()
      : ui.terminal.bright.black.lighten(0.5).hex(),
    'terminal.ansiBrightYellow': ui.terminal.bright.yellow.hex(),
    'terminalCommandDecoration.successBackground': ui.icon.success.hex(),
    'terminalCommandDecoration.errorBackground': ui.icon.error.hex(),
    'terminalCommandDecoration.defaultBackground': ui.icon.inactive.hex(),
    'terminalCommandGuide.foreground': ui.background.hover.hex(),
    'terminalStickyScrollHover.background': ui.background.hover.hexa(),
    'terminalOverviewRuler.border': ui.border.hex(),

    /**
     * Debug
     */
    'debugToolBar.background': ui.background.panel.hex(),
    'debugToolBar.border': ui.border.hex(),
    'editor.stackFrameHighlightBackground': ui.debug.frame.normal.alpha(ch(0x33)).hexa(),
    'editor.focusedStackFrameHighlightBackground': ui.debug.frame.focused.alpha(ch(0x22)).hexa(),
    'editor.inlineValuesBackground': ui.background.panel.hex(),
    'editor.inlineValuesForeground': ui.text.secondary.hex(),
    'debugIcon.breakpointForeground': ui.debug.breakpoint.active.hex(),
    'debugIcon.breakpointDisabledForeground': ui.debug.breakpoint.disabled.alpha(ch(0x66)).hexa(),
    'debugIcon.breakpointUnverifiedForeground': ui.debug.breakpoint.unverified.hex(),
    'debugIcon.breakpointStackframeForeground': ui.debug.frame.normal.alpha(ch(0x99)).hexa(),
    'debugIcon.breakpointCurrentStackframeForeground': ui.debug.frame.focused.hex(),
    'debugIcon.startForeground': ui.debug.icon.start.hex(),
    'debugIcon.continueForeground': ui.debug.icon.continue.hex(),
    'debugIcon.pauseForeground': ui.debug.icon.pause.hex(),
    'debugIcon.stepOverForeground': ui.debug.icon.next.hex(),
    'debugIcon.stepBackForeground': ui.debug.icon.back.hex(),
    'debugIcon.stepIntoForeground': ui.debug.icon.into.hex(),
    'debugIcon.stepOutForeground': ui.debug.icon.out.hex(),
    'debugIcon.stopForeground': ui.debug.icon.stop.hex(),
    'debugIcon.disconnectForeground': ui.debug.icon.stop.hex(),
    'debugIcon.restartForeground': ui.debug.icon.restart.hex(),
    'debugView.exceptionLabelForeground': ui.text.contrast.hex(),
    'debugView.exceptionLabelBackground': ui.problems.error.hex(),
    'debugView.stateLabelForeground': ui.text.contrast.hex(),
    'debugView.stateLabelBackground': ui.problems.info.hex(),
    'debugView.valueChangedHighlight': ui.problems.info.alpha(ch(0x99)).hexa(),
    'debugTokenExpression.name': code.variables,
    'debugTokenExpression.type': code.types,
    'debugTokenExpression.value': ui.text.dimmed.hex(),
    'debugTokenExpression.string': code.strings,
    'debugTokenExpression.boolean': code.primitives,
    'debugTokenExpression.number': code.primitives,
    'debugTokenExpression.error': ui.problems.error.hex(),
    'debugConsole.errorForeground': ui.problems.error.hex(),
    'debugConsole.warningForeground': ui.problems.warning.hex(),
    'debugConsole.infoForeground': ui.problems.info.hex(),
    'debugConsole.sourceForeground': ui.text.dimmed.hex(),
    'debugConsoleInputIcon.foreground': ui.text.dimmed.hex(),

    /**
     * Welcome Page
     */
    'walkThrough.embeddedEditorBackground': ui.background.panel.hex(),
    // 'welcomePage.background': '#FF0000',

    /**
     * Git Colours
     */
    'gitDecoration.ignoredResourceForeground': ui.scm.ignored.hex(),
    'gitDecoration.addedResourceForeground': ui.scm.added.hex(),
    'gitDecoration.modifiedResourceForeground': ui.scm.modified.hex(),
    'gitDecoration.deletedResourceForeground': ui.scm.deleted.hex(),
    'gitDecoration.conflictingResourceForeground': ui.scm.conflicting.hex(),
    'gitDecoration.untrackedResourceForeground': ui.scm.untracked.hex(),
    'gitDecoration.submoduleResourceForeground': ui.scm.untracked.hex(),

    /**
     * Merge Conflict Editor
     */
    'mergeEditor.conflict.unhandledUnfocused.border': ui.scm.conflicting.alpha(ch(0x22)).hexa(),
    'mergeEditor.conflict.unhandledFocused.border': ui.scm.conflicting.alpha(ch(0x66)).hexa(),
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': ui.scm.conflicting.hex(),
    'mergeEditor.conflict.handledUnfocused.border': ui.scm.modified.alpha(ch(0x22)).hexa(),
    'mergeEditor.conflict.handledFocused.border': ui.scm.modified.alpha(ch(0x66)).hexa(),
    'mergeEditor.conflict.handled.minimapOverViewRuler': ui.scm.modified.hex(),
    'mergeEditor.change.background': ui.scm.conflicting.alpha(ch(0x11)).hexa(),
    'mergeEditor.change.word.background': ui.scm.conflicting.alpha(ch(0x22)).hexa(),
    'mergeEditor.conflictingLines.background': ui.scm.conflicting.alpha(ch(0x66)).hexa(),

    /**
     * Settings Editor Colours
     */
    'settings.headerForeground': ui.text.primary.hex(),
    'settings.modifiedItemIndicator': ui.accent.hex(),
    'settings.dropdownBackground': ui.background.panel.hex(),
    'settings.checkboxBackground': ui.background.panel.hex(),
    'settings.textInputBackground': ui.background.panel.hex(),
    'settings.numberInputBackground': ui.background.panel.hex(),
    'settings.checkboxForeground': code.primitives,
    'settings.dropdownForeground': code.decoratives.raw,
    'settings.textInputForeground': code.strings,
    'settings.numberInputForeground': code.primitives,
    'settings.dropdownBorder': ui.border.hex(),
    'settings.dropdownListBorder': ui.border.hex(),
    'settings.checkboxBorder': ui.border.hex(),
    'settings.textInputBorder': ui.border.hex(),
    'settings.sashBorder': ui.border.hex(),
    'settings.numberInputBorder': ui.border.hex(),
    'settings.focusedRowBackground': ui.highlight.line.alpha(ch(0x09)).hexa(),
    'settings.focusedRowBorder': ui.accent.alpha(ch(0x66)).hexa(),

    /**
     * Breadcrumbs
     */
    'breadcrumb.foreground': ui.text.secondary.hex(),
    'breadcrumb.focusForeground': ui.text.primary.hex(),
    'breadcrumb.activeSelectionForeground': ui.text.primary.hex(),
    'breadcrumbPicker.background': ui.background.panel.hex(),
    // 'breadcrumb.background': '#FF0000',

    /**
     * Snippets
     */
    'editor.snippetTabstopHighlightBackground': ui.highlight.word.matches.alpha(0).hexa(),
    'editor.snippetFinalTabstopHighlightBackground': ui.highlight.word.matches.alpha(ch(0x33)).hexa(),
    'editor.snippetFinalTabstopHighlightBorder': ui.highlight.word.matches.alpha(ch(0x99)).hexa(),
    'editor.snippetTabstopHighlightBorder': ui.highlight.word.matches.alpha(ch(0x99)).hexa(),

    /**
     * Notebook
     */
    'notebook.cellBorderColor': ui.border.hex(),
    'notebook.cellHoverBackground': ui.highlight.line.alpha(ch(0x09)).hexa(),
    'notebook.cellInsertionIndicator': ui.accent.hex(),
    'notebook.cellStatusBarItemHoverBackground': ui.background.hover.alpha(ch(0x66)).hexa(),
    'notebook.cellToolbarSeparator': ui.border.hex(),
    'notebook.focusedCellBackground': ui.highlight.line.alpha(ch(0x09)).hexa(),
    'notebook.focusedCellBorder': ui.accent.alpha(ch(0x66)).hexa(),
    'notebook.inactiveFocusedCellBorder': ui.accent.alpha(ch(0x44)).hexa(),
    'notebook.outputContainerBackgroundColor': ui.background.panel.hex(),
    'notebookStatusErrorIcon.foreground': ui.icon.error.hex(),
    'notebookStatusRunningIcon.foreground': ui.icon.foreground.hex(),
    'notebookStatusSuccessIcon.foreground': ui.icon.success.hex(),
    'notebook.symbolHighlightBackground': ui.highlight.range.alpha(ch(0x11)).hexa(),
    'notebook.selectedCellBackground': ui.highlight.selection.alpha(ch(0x22)).hexa(),
    // 'notebook.selectedCellBorder': '#ff0000',

    // 'notebook.focusedCellShadow': '#ff0000',
    // 'notebook.focusedEditorBorder': '#ff0000',
    // 'notebook.focusedRowBorder': '#ff0000',
    // 'notebook.rowHoverBackground': '#ff0000',
    // 'notebookScrollbarSlider.activeBackground': '#ff0000',
    // 'notebookScrollbarSlider.background': '#ff0000',
    // 'notebookScrollbarSlider.hoverBackground': '#ff0000',
    // 'notebook.inactiveSelectedCellBorder': '#ff0000',

    /**
     * Charts
     */
    'charts.red': ui.terminal.normal.red.hex(),
    'charts.blue': ui.terminal.normal.blue.hex(),
    'charts.yellow': ui.terminal.bright.yellow.hex(),
    'charts.orange': ui.terminal.normal.yellow.hex(),
    'charts.green': ui.terminal.normal.green.hex(),
    'charts.purple': ui.terminal.normal.magenta.hex(),
    // 'charts.foreground': ui.text.primary.hex(),
    // 'charts.lines': ui.text.secondary.hex(),

    /**
     * SCM graph
     */
    'scmGraph.foreground1': ui.terminal.normal.cyan.hex(),
    'scmGraph.foreground2': ui.terminal.normal.blue.hex(),
    'scmGraph.foreground3': ui.terminal.normal.magenta.hex(),
    'scmGraph.foreground4': ui.terminal.bright.red.hex(),
    'scmGraph.foreground5': ui.terminal.bright.blue.hex(),
    'scmGraph.historyItemBaseRefColor': ui.terminal.bright.green.hex(),
    'scmGraph.historyItemRefColor': ui.terminal.normal.green.hex(),
    'scmGraph.historyItemRemoteRefColor': ui.terminal.normal.yellow.hex(),
    'scmGraph.historyItemHoverAdditionsForeground': ui.scm.added.hex(),
    'scmGraph.historyItemHoverDeletionsForeground': ui.scm.deleted.hex(),
    'scmGraph.historyItemHoverDefaultLabelForeground': ui.text.contrast.hex(),
    'scmGraph.historyItemHoverDefaultLabelBackground': ui.scm.modified.hex(),
    'scmGraph.historyItemHoverLabelForeground': ui.text.contrast.hex(),

    /**
     * Testing UI
     */
    'testing.iconFailed': ui.icon.error.hex(),
    'testing.iconErrored': ui.icon.error.hex(),
    'testing.iconPassed': ui.icon.success.hex(),
    'testing.iconQueued': ui.problems.info.hex(),
    'testing.iconSkipped': ui.icon.inactive.hex(),
    'testing.iconUnset': ui.problems.info.hex(),
    'testing.runAction': ui.text.secondary.hex(),
    'testing.peekBorder': ui.border.hex(),
    'testing.message.error.badgeForeground': ui.text.complimentary.hex(),
    'testing.message.info.decorationForeground': ui.text.complimentary.hex(),
    'testing.message.error.lineBackground': ui.problems.error.alpha(ch(0x66)).hexa(),
    'testing.message.info.lineBackground': ui.problems.info.alpha(ch(0x66)).hexa(),

    /**
     * Chat
     */
    'chat.requestBorder': ui.border.hex(),
    'chat.avatarForeground': ui.background.panel.hex(),
    'chat.avatarBackground': ui.text.primary.hex(),
    'chat.requestBackground': ui.background.code.hex(),
    'chat.slashCommandForeground': ui.text.contrast.hex(),
    'chat.slashCommandBackground': ui.accent.hex(),

    // EXTENSIONS

    /**
     * Remote Development
     */
    'ports.iconRunningProcessForeground': ui.icon.success.hex(),

    /**
     * GitHub Pull Requests & Issues
     */
    'issues.newIssueDecoration': ui.text.secondary.hex(),
    'issues.open': ui.icon.success.hex(),
    'issues.closed': ui.icon.error.hex(),
    'pullRequests.open': ui.scm.added.hex(),
    'pullRequests.closed': ui.scm.deleted.hex(),
    'pullRequests.draft': ui.scm.untracked.hex(),
    'pullRequests.merged': ui.scm.merged.hex(),
    'pullRequests.notification': ui.problems.info.hex(),

    /**
     * Error Lens
     */
    'errorLens.errorForeground': ui.problems.error.hex(),
    'errorLens.errorForegroundLight': ui.problems.error.hex(),
    'errorLens.warningForeground': ui.problems.warning.hex(),
    'errorLens.warningForegroundLight': ui.problems.warning.hex(),
    'errorLens.infoForeground': ui.problems.info.hex(),
    'errorLens.infoForegroundLight': ui.problems.info.hex(),
    'errorLens.hintForeground': ui.problems.hint.hex(),
    'errorLens.hintForegroundLight': ui.problems.hint.hex(),
    'errorLens.errorBackground': '#0000',
    'errorLens.errorBackgroundLight': '#0000',
    'errorLens.warningBackground': '#0000',
    'errorLens.warningBackgroundLight': '#0000',
    'errorLens.infoBackground': '#0000',
    'errorLens.infoBackgroundLight': '#0000',
    'errorLens.hintBackground': '#0000',
    'errorLens.hintBackgroundLight': '#0000',
    // 'errorLens.errorMessageBackground': '#ff0000',
    // 'errorLens.warningMessageBackground': '#ff0000',
    // 'errorLens.infoMessageBackground': '#ff0000',
    // 'errorLens.hintMessageBackground': '#ff0000',

    /**
     * GitLens
     */
    'gitlens.gutterForegroundColor': ui.text.secondary.hex(),
    'gitlens.gutterBackgroundColor': ui.background.code.hex(),
    'gitlens.gutterUncommittedForegroundColor': ui.scm.untracked.hex(),
    'gitlens.lineHighlightBackgroundColor': ui.scm.added.alpha(ch(0x11)).hexa(),
    'gitlens.lineHighlightOverviewRulerColor': ui.scm.added.alpha(ch(0x11)).hexa(),
    'gitlens.closedPullRequestIconColor': ui.icon.foreground.hex(),
    'gitlens.openPullRequestIconColor': ui.icon.foreground.hex(),
    'gitlens.mergedPullRequestIconColor': ui.icon.foreground.hex(),
    'gitlens.unpushlishedChangesIconColor': ui.icon.foreground.hex(),
    'gitlens.unpublishedCommitIconColor': ui.icon.foreground.hex(),
    'gitlens.unpulledChangesIconColor': ui.icon.foreground.hex(),
    'gitlens.decorations.addedForegroundColor': ui.scm.added.hex(),
    'gitlens.decorations.copiedForegroundColor': ui.scm.modified.hex(),
    'gitlens.decorations.deletedForegroundColor': ui.scm.deleted.hex(),
    'gitlens.decorations.ignoredForegroundColor': ui.scm.ignored.hex(),
    'gitlens.decorations.modifiedForegroundColor': ui.scm.modified.hex(),
    'gitlens.decorations.untrackedForegroundColor': ui.scm.untracked.hex(),
    'gitlens.decorations.renamedForegroundColor': ui.scm.modified.hex(),
    'gitlens.decorations.branchAheadForegroundColor': ui.scm.conflicts.incoming.hex(),
    'gitlens.decorations.branchBehindForegroundColor': ui.scm.conflicts.current.hex(),
    'gitlens.decorations.branchDivergedForegroundColor': ui.scm.conflicting.hex(),
    'gitlens.decorations.branchUpToDateForegroundColor': ui.text.primary.hex(),
    'gitlens.decorations.branchUnpublishedForegroundColor': ui.scm.untracked.hex(),
    // 'gitlens.trailingLineBackgroundColor': '#FF0000',
    // 'gitlens.trailingLineForegroundColor': '#FF0000',

    /**
     * LintLens
     */
    'lintlens.annotationColor': ui.problems.hint.alpha(ch(0x99)).hexa(),

    /**
     * Bookmarks
     */
    'bookmarks.overviewRuler': ui.problems.info.hex(),
    'bookmarks.lineBackground': ui.problems.info.alpha(ch(0x11)).hexa(),
    'bookmarks.lineBorder': ui.problems.info.alpha(ch(0x66)).hexa(),

    /**
     * Test Explorer
     */
    'testExplorer.errorDecorationBackground': ui.problems.error.alpha(ch(0x66)).hexa(),

    /**
     * SQL Tools
     */
    'sqltools.currentQueryBg': ui.highlight.word.matches.alpha(ch(0x22)).hexa(),
    'sqltools.currentQueryOutline': '#0000',

    /**
     * File Watcher
     */
    'filewatcher.error': ui.problems.error.hex(),
  }
}

export {
  mkui,
}
