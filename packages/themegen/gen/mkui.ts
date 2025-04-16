import { type UIColours } from '@remedy/vscode-types'
import Color from 'color'
import { type ThemeInfo } from '../index.js'

/** @private */
const transparent = new Color('#0000')

/**
 * Get the float representation of a channel's hex value as a range between 0 and 1 corresponding to 0x00 - 0xFF
 * @private
 */
function ch(hex: number) {
  return hex / 0xFF
}

function mkui(info: ThemeInfo): UIColours {
  return {
    /**
     * Base Colours
     */
    focusBorder: info.ui.accent.alpha(ch(0x66)),
    foreground: info.ui.text.primary,
    disabledForeground: info.ui.text.dimmed,
    'widget.shadow': info.ui.shadow,
    'selection.background': info.ui.text.primary.alpha(ch(0x44)),
    descriptionForeground: info.ui.text.primary,
    'sash.hoverBorder': info.ui.border,

    /**
     * Windows
     */
    // 'window.activeBorder': '#ff0000',
    // 'window.inactiveBorder': '#ff0000',

    /**
     * Icons
     */
    'icon.foreground': info.ui.icon.foreground,
    'problemsErrorIcon.foreground': info.ui.problems.error,
    'problemsWarningIcon.foreground': info.ui.problems.warning,
    'problemsInfoIcon.foreground': info.ui.problems.info,
    'notificationsErrorIcon.foreground': info.ui.problems.error,
    'notificationsInfoIcon.foreground': info.ui.problems.info,
    'notificationsWarningIcon.foreground': info.ui.problems.warning,
    'symbolIcon.arrayForeground': info.code.punctuation,
    'symbolIcon.booleanForeground': info.code.primitives,
    'symbolIcon.classForeground': info.code.classes,
    'symbolIcon.constantForeground': info.code.primitives,
    'symbolIcon.constructorForeground': info.code.classes,
    'symbolIcon.fieldForeground': info.code.decoratives.raw,
    'symbolIcon.functionForeground': info.code.functions,
    'symbolIcon.interfaceForeground': info.code.types,
    'symbolIcon.methodForeground': info.code.functions,
    'symbolIcon.moduleForeground': info.code.classes,
    'symbolIcon.namespaceForeground': info.code.classes,
    'symbolIcon.propertyForeground': info.code.constants,
    'symbolIcon.stringForeground': info.code.strings,
    'symbolIcon.structForeground': info.code.types,
    'symbolIcon.variableForeground': info.code.escapes,
    'symbolIcon.numberForeground': info.code.primitives,
    'symbolIcon.snippetForeground': info.code.primitives,
    'symbolIcon.keywordForeground': info.code.language,
    'symbolIcon.nullForeground': info.code.primitives,
    'symbolIcon.objectForeground': info.code.punctuation,
    'symbolIcon.operatorForeground': info.code.language,
    'symbolIcon.packageForeground': info.code.classes,
    'symbolIcon.textForeground': info.code.comments,
    'symbolIcon.typeParameterForeground': info.code.types,
    'symbolIcon.unitForeground': info.code.primitives,
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
    'editorLightBulb.foreground': info.ui.problems.warning,
    'editorLightBulbAutoFix.foreground': info.ui.problems.info,

    /**
     * Text colours
     *
     * Colors inside a text document, such as the welcome page.
     */
    'textLink.activeForeground': info.ui.accent,
    'textLink.foreground': info.ui.accent,
    'textBlockQuote.background': info.ui.background.panel,
    'textBlockQuote.border': info.ui.accent,
    'textCodeBlock.background': info.ui.background.code,
    'textPreformat.foreground': info.code.decoratives.raw,
    'textPreformat.background': info.ui.background.panel,

    /**
     * Action colors
     *
     * A set of colors to control the interactions with actions across the workbench.
     */
    'toolbar.hoverBackground': info.ui.background.hover.alpha(ch(0x66)),
    'toolbar.hoverOutline': transparent,
    'toolbar.activeBackground': info.ui.background.hover.alpha(ch(0xbb)),

    /**
     * Button Control
     *
     * A set of colors for button widgets such as Open Folder button in the Explorer of a new
     * window
     */
    'button.background': info.ui.button.primary,
    'button.foreground': info.ui.text.contrast,
    'button.secondaryBackground': info.ui.button.secondary,
    'button.secondaryForeground': info.ui.text.contrast,
    'button.hoverBackground': info.ui.button.primary.lighten(0.2),
    'button.secondaryHoverBackground': info.ui.button.secondary.lighten(0.2),
    'checkbox.background': info.ui.background.panel,
    'checkbox.foreground': info.code.primitives,
    'checkbox.border': info.ui.border,
    // 'button.border': info.ui.border,
    'radio.activeBackground': info.ui.button.primary,
    'radio.activeBorder': info.ui.border,
    'radio.activeForeground': info.ui.text.contrast,
    'radio.inactiveBackground': info.ui.background.panel,
    'radio.inactiveBorder': info.ui.border,
    'radio.inactiveHoverBackground': info.ui.highlight.hover.alpha(ch(0x11)),

    /**
     * Dropdown Control
     *
     * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output
     * panel. Note that the Dropdown control is not used on macOS currently.
     */
    'dropdown.background': info.ui.background.panel,
    'dropdown.foreground': info.ui.text.primary,
    'dropdown.border': info.ui.border,
    // 'dropdown.listBackground': '#FF0000',

    /**
     * Input Control
     *
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    'input.background': info.ui.background.code,
    'input.border': info.ui.border,
    'input.placeholderForeground': info.ui.text.secondary,
    'inputValidation.errorBackground': info.ui.problems.error,
    'inputValidation.errorForeground': info.ui.text.contrast,
    'inputValidation.errorBorder': info.ui.problems.error,
    'inputValidation.warningBackground': info.ui.problems.warning,
    'inputValidation.warningForeground': info.ui.text.contrast,
    'inputValidation.warningBorder': info.ui.problems.warning,
    'inputValidation.infoBackground': info.ui.problems.info,
    'inputValidation.infoForeground': info.ui.text.contrast,
    'inputValidation.infoBorder': info.ui.problems.info,
    'inputOption.activeBorder': info.ui.accent.alpha(ch(0x66)),
    // TODO(vscode): Implement inputOption.foreground colour contribution
    // 'inputOption.activeForeground': '#ff0000',
    // 'input.foreground': '#ff0000',

    /**
     * Search Editor
     */
    'searchEditor.findMatchBorder': info.ui.highlight.word.matches.alpha(ch(0x44)),
    // 'searchEditor.findMatchBackground': '#ff0000',
    // 'searchEditor.textInputBorder': '#ff0000,

    /**
     * Scrollbar Control
     */
    'scrollbar.shadow': info.ui.shadow,
    'scrollbarSlider.activeBackground': info.ui.accent.alpha(ch(0x66)),
    'scrollbarSlider.background': info.ui.accent.alpha(ch(0x22)),
    'scrollbarSlider.hoverBackground': info.ui.accent.alpha(ch(0x44)),

    /**
     * Badge
     *
     * Badges are small information labels, for example, search results count.
     */
    'badge.background': info.ui.accent,
    'badge.foreground': info.ui.text.contrast,

    /**
     * Progress Bar
     */
    'progressBar.background': info.ui.accent,

    /**
     * Lists And Trees
     *
     * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an
     * inactive does not.
     */
    'tree.indentGuidesStroke': info.ui.text.secondary.alpha(ch(0x99)),
    'tree.tableColumnsBorder': info.ui.border,
    'list.activeSelectionBackground': info.ui.accent.alpha(ch(0xaa)),
    'list.activeSelectionForeground': info.ui.text.primary,
    'list.hoverBackground': info.ui.highlight.hover.alpha(ch(0x11)),
    'listFilterWidget.background': info.ui.background.panel,
    'listFilterWidget.noMatchesOutline': info.ui.problems.error,
    'list.inactiveSelectionBackground': info.ui.highlight.hover.alpha(ch(0x09)),
    'list.highlightForeground': info.ui.accent,
    'list.dropBackground': info.ui.background.drop.alpha(ch(0x22)),
    'list.errorForeground': info.ui.problems.error,
    'list.warningForeground': info.ui.problems.warning,
    'list.deemphasizedForeground': info.ui.scm.ignored,
    'list.filterMatchBackground': info.ui.highlight.word.matches.alpha(ch(0x44)),
    'list.invalidItemForeground': info.ui.problems.error,
    'list.inactiveFocusBackground': info.ui.highlight.hover.alpha(ch(0x09)),
    'quickInputList.focusBackground': info.ui.accent.alpha(ch(0x99)),

    /**
     * Activity Bar
     *
     * The Activity Bar is displayed either on the far left or right of the workbench and allows
     * fast switching between views of the Side Bar.
     */
    'activityBar.activeBorder': info.ui.accent,
    'activityBar.dropBorder': info.ui.accent,
    'activityBar.background': info.ui.background.panel,
    'activityBar.border': info.ui.border,
    'activityBar.foreground': info.ui.icon.foreground,
    'activityBar.inactiveForeground': info.ui.icon.inactive,
    'activityBarTop.foreground': info.ui.icon.foreground,
    'activityBarTop.activeBorder': info.ui.accent,
    'activityBarTop.inactiveForeground': info.ui.icon.inactive,
    'activityBarTop.dropBorder': info.ui.accent,
    'activityBarTop.background': info.ui.background.panel,
    'activityBarTop.activeBackground': info.ui.background.panel,
    'activityBarBadge.background': info.ui.accent,
    'activityBarBadge.foreground': info.ui.text.contrast,
    'activityErrorBadge.background': info.ui.problems.error,
    'activityErrorBadge.foreground': info.ui.text.contrast,
    'activityWarningBadge.background': info.ui.problems.warning,
    'activityWarningBadge.foreground': info.ui.text.contrast,
    // TODO(vscode): implement panelTitle.activeBackground colour contribution
    // 'activityBar.activeBackground': info.ui.background.code,

    /**
     * Command Center
     */
    'commandCenter.background': info.ui.background.code,
    'commandCenter.border': info.ui.border,
    'commandCenter.foreground': info.ui.text.secondary,
    'commandCenter.activeForeground': info.ui.text.secondary,
    'commandCenter.activeBackground': info.ui.background.code,
    'commandCenter.activeBorder': info.ui.accent,
    'commandCenter.inactiveBorder': info.ui.border,

    /**
     * Side Bar
     *
     * The Side Bar contains views like the Explorer and Search.
     */
    'sideBar.background': info.ui.background.panel,
    'sideBar.border': info.ui.border,
    'sideBar.foreground': info.ui.text.primary,
    'sideBarSectionHeader.foreground': info.ui.text.secondary,
    'sideBarSectionHeader.background': info.ui.background.panel,
    'sideBarSectionHeader.border': info.ui.border,
    'sideBar.dropBackground': info.ui.background.drop.alpha(ch(0x22)),
    'sideBarTitle.foreground': info.ui.text.secondary,

    /**
     * Minimap
     *
     * The Minimap shows a minified version of the current file.
     */
    'minimap.background': info.ui.background.panel,
    'minimap.findMatchHighlight': info.ui.highlight.word.matches.alpha(ch(0x44)),
    'minimap.selectionHighlight': info.ui.text.primary.alpha(ch(0xaa)),
    'minimap.errorHighlight': info.ui.problems.error,
    'minimap.warningHighlight': info.ui.problems.warning,
    'minimapGutter.addedBackground': info.ui.scm.added,
    'minimapGutter.modifiedBackground': info.ui.scm.modified,
    'minimapGutter.deletedBackground': info.ui.scm.deleted,
    'minimapSlider.background': info.ui.accent.alpha(ch(0x22)),
    'minimapSlider.hoverBackground': info.ui.accent.alpha(ch(0x44)),
    'minimapSlider.activeBackground': info.ui.accent.alpha(ch(0x66)),

    /**
     * Editor Groups & Tabs
     *
     * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the
     * container of an editor. Multiple Tabs can be opened in one editor group.
     */
    'editorGroup.border': info.ui.border,
    'editorGroup.dropBackground': info.ui.background.drop.alpha(ch(0x22)),
    'editorGroupHeader.noTabsBackground': info.ui.background.panel,
    'editorGroupHeader.tabsBackground': info.ui.background.panel,
    'tab.activeBackground': info.ui.background.code,
    'tab.activeBorderTop': info.ui.accent,
    'tab.activeForeground': info.ui.text.primary,
    'tab.inactiveForeground': info.ui.text.secondary,
    'tab.unfocusedActiveForeground': info.ui.text.secondary,
    'tab.unfocusedInactiveForeground': info.ui.text.secondary,
    'tab.unfocusedHoverForeground': info.ui.text.primary,
    'tab.activeModifiedBorder': info.ui.accent,
    'tab.border': info.ui.background.panel,
    'tab.lastPinnedBorder': info.ui.border,
    'tab.inactiveBackground': info.ui.background.panel,
    'tab.inactiveModifiedBorder': info.ui.accent.alpha(ch(0x66)),
    'tab.hoverForeground': info.ui.text.primary,
    'editorPane.background': info.ui.background.panel,
    'tab.dragAndDropBorder': info.ui.accent,
    'tab.selectedBackground': info.ui.background.panel,
    'tab.selectedBorderTop': info.ui.accent,
    // 'editorGroupHeader.border': info.ui.border,
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
    'editor.background': info.ui.background.code,
    'editor.findMatchBackground': info.ui.highlight.word.matches.alpha(ch(0x44)),
    'editor.findMatchBorder': info.ui.highlight.word.matches.alpha(ch(0xaa)),
    'editor.findMatchHighlightBackground': info.ui.highlight.word.matches.alpha(ch(0x33)),
    'editor.findRangeHighlightBackground': info.ui.scm.added.alpha(ch(0x11)),
    'editor.foreground': info.ui.text.primary,
    'editor.foldPlaceholderForeground': info.ui.text.secondary,
    'editor.hoverHighlightBackground': info.ui.highlight.hover.alpha(ch(0x11)),
    'editor.lineHighlightBackground': info.ui.highlight.line.alpha(ch(0x09)),
    'editor.rangeHighlightBackground': info.ui.highlight.range.alpha(ch(0x11)),
    'editor.selectionBackground': info.ui.highlight.selection.alpha(ch(0x22)),
    'editor.selectionHighlightBackground': info.ui.highlight.selection.alpha(ch(0x11)),
    'editor.wordHighlightBackground': info.ui.highlight.word.highlight.alpha(ch(0x11)),
    'editor.wordHighlightStrongBackground': info.ui.highlight.word.source.alpha(ch(0x33)),
    'editor.wordHighlightStrongBorder': info.ui.highlight.word.source.alpha(ch(0xaa)),
    'editorBracketHighlight.foreground1': info.ui.terminal.bright.magenta.alpha(ch(0x88)),
    'editorBracketHighlight.foreground2': info.ui.terminal.bright.red.alpha(ch(0x88)),
    'editorBracketHighlight.foreground3': info.ui.terminal.bright.yellow.alpha(ch(0x88)),
    'editorBracketHighlight.foreground4': info.ui.terminal.bright.cyan.alpha(ch(0x88)),
    'editorBracketHighlight.foreground5': info.ui.terminal.bright.green.alpha(ch(0x88)),
    'editorBracketHighlight.foreground6': info.ui.terminal.bright.blue.alpha(ch(0x88)),
    'editorBracketHighlight.unexpectedBracket.foreground': info.ui.problems.warning,
    'editorCursor.background': info.ui.background.panel,
    'editorCursor.foreground': info.ui.text.primary,
    // 'editorMultiCursor.primary.background': '#ff0000',
    // 'editorMultiCursor.secondary.background': '#ff0000',
    'editorGhostText.background': info.ui.text.secondary.alpha(ch(0x22)),
    'editorGhostText.foreground': info.ui.text.secondary,
    'editorIndentGuide.activeBackground': info.ui.text.secondary.alpha(ch(0x99)),
    'editorIndentGuide.background': info.ui.text.secondary.alpha(ch(0x33)),
    'editorLineNumber.activeForeground': info.ui.text.primary,
    'editorLineNumber.foreground': info.ui.text.secondary,
    'editorLink.activeForeground': info.ui.accent,
    'editorRuler.foreground': info.ui.text.secondary.alpha(ch(0x99)),
    'editorStickyScrollHover.background': info.ui.highlight.line.alpha(ch(0x09)),
    'editorWhitespace.foreground': info.ui.text.secondary.alpha(ch(0x99)),
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
    'editorCodeLens.foreground': info.ui.text.secondary,
    // Bracket Matches
    'editorBracketMatch.background': info.ui.text.secondary.alpha(ch(0x33)),
    'editorBracketMatch.border': info.ui.text.secondary.alpha(ch(0x66)),
    // Overview Ruler
    'editorOverviewRuler.background': info.ui.background.panel,
    'editorOverviewRuler.border': info.ui.background.panel,
    'editorOverviewRuler.bracketMatchForeground': info.ui.text.secondary,
    'editorOverviewRuler.findMatchForeground': info.ui.highlight.word.matches.alpha(ch(0xaa)),
    'editorOverviewRuler.wordHighlightForeground': info.ui.highlight.word.matches.alpha(ch(0x99)),
    'editorOverviewRuler.wordHighlightStrongForeground': info.ui.highlight.word.matches,
    'editorOverviewRuler.modifiedForeground': info.ui.scm.modified,
    'editorOverviewRuler.addedForeground': info.ui.scm.added,
    'editorOverviewRuler.deletedForeground': info.ui.scm.deleted,
    'editorOverviewRuler.errorForeground': info.ui.problems.error,
    'editorOverviewRuler.warningForeground': info.ui.problems.warning,
    'editorOverviewRuler.infoForeground': info.ui.problems.info,
    'editorOverviewRuler.rangeHighlightForeground': info.ui.accent.alpha(ch(0xaa)),
    // 'editorOverviewRuler.selectionHighlightForeground': '#FF0000',
    // Errors & Warnings
    'editorError.foreground': info.ui.problems.error,
    'editorWarning.foreground': info.ui.problems.warning,
    'editorInfo.foreground': info.ui.problems.info,
    'editorHint.foreground': info.ui.problems.hint,
    // 'editorError.background': '#ff0000',
    // 'editorWarning.background': '#ff0000',
    // 'editorInfo.background': '#ff0000',
    // 'editorError.border': '#FF0000',
    // 'editorWarning.border': '#FF0000',
    // 'editorInfo.border': '#FF0000',
    // 'editorHint.border': '#FF0000',
    // Unused Source Code
    // 'editorUnnecessaryinfo.Code.border': '#FF0000',
    // Gutter
    'editorGutter.modifiedBackground': info.ui.scm.modified,
    'editorGutter.addedBackground': info.ui.scm.added,
    'editorGutter.deletedBackground': info.ui.scm.deleted,
    'editorGutter.foldingControlForeground': info.ui.text.secondary,
    'editor.foldBackground': info.ui.problems.info.alpha(ch(0x11)),
    'editorGutter.commentRangeForeground': info.ui.text.secondary.alpha(ch(0x99)),
    // 'editorGutter.background': '#FF0000',
    // Inlay Hints
    'editorInlayHint.foreground': info.ui.text.secondary,
    'editorInlayHint.background': info.ui.background.panel,

    /**
     * Diff Editor Colours
     */
    'diffEditor.border': info.ui.border,
    'diffEditor.diagonalFill': info.ui.text.secondary.alpha(ch(0x44)),
    'diffEditor.insertedTextBackground': info.ui.scm.added.alpha(ch(0x22)),
    'diffEditor.insertedLineBackground': info.ui.scm.added.alpha(ch(0x09)),
    'diffEditor.removedTextBackground': info.ui.scm.deleted.alpha(ch(0x22)),
    'diffEditor.removedLineBackground': info.ui.scm.deleted.alpha(ch(0x09)),
    'diffEditor.unchangedCodeBackground': info.ui.scm.untracked.alpha(ch(0x22)),
    'diffEditor.unchangedRegionForeground': info.ui.text.secondary,
    'multiDiffEditor.headerBackground': info.ui.background.panel,

    /**
     * Editor Widget Colours
     */
    'editorHoverWidget.background': info.ui.background.panel,
    'editorHoverWidget.border': info.ui.border,
    'editorSuggestWidget.background': info.ui.background.panel,
    'editorSuggestWidget.foreground': info.ui.text.primary,
    'editorSuggestWidget.highlightForeground': info.ui.accent,
    'editorSuggestWidget.selectedBackground': info.ui.accent.alpha(ch(0x66)),
    'editorSuggestWidget.border': info.ui.border,
    // 'editorSuggestWidget.selectedForeground': '#ff0000',
    'editorWidget.background': info.ui.background.panel,
    'editorWidget.resizeBorder': info.ui.accent,
    'editorWidget.border': info.ui.border,
    // The Debug Exception widget is a peek view that shows in the editor when debug stops at an
    // exception.
    'debugExceptionWidget.background': info.ui.background.panel,
    'debugExceptionWidget.border': info.ui.accent,
    // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next
    // Error or Warning command)
    'editorMarkerNavigation.background': info.ui.background.panel,
    'editorMarkerNavigationError.background': info.ui.problems.error.alpha(ch(0x44)),
    'editorMarkerNavigationWarning.background': info.ui.problems.warning.alpha(ch(0x44)),
    'editorMarkerNavigationInfo.background': info.ui.problems.info.alpha(ch(0x44)),

    /**
     * Peek View Colours
     */
    'peekView.border': info.ui.accent.alpha(ch(0x99)),
    'peekViewEditor.background': info.ui.background.code,
    'peekViewResult.fileForeground': info.ui.text.primary,
    'peekViewTitleLabel.foreground': info.ui.text.primary,
    'peekViewEditorGutter.background': info.ui.background.panel,
    'peekViewEditor.matchHighlightBackground': info.ui.highlight.word.matches.alpha(ch(0x22)),
    'peekViewResult.background': info.ui.background.panel,
    'peekViewResult.lineForeground': info.ui.text.primary,
    'peekViewResult.matchHighlightBackground': info.ui.highlight.word.matches.alpha(ch(0x99)),
    'peekViewResult.selectionBackground': info.ui.accent.alpha(ch(0x99)),
    'peekViewResult.selectionForeground': info.ui.text.primary,
    'peekViewTitle.background': info.ui.background.panel,
    'peekViewTitleDescription.foreground': info.ui.text.secondary,
    // 'peekViewEditor.matchHighlightBorder': '#FF0000',

    /**
     * Merge Conflicts
     */
    'merge.border': info.ui.border.alpha(ch(0x99)),
    'merge.commonContentBackground': info.ui.scm.conflicts.common.alpha(ch(0x11)),
    'merge.commonHeaderBackground': info.ui.scm.conflicts.common.alpha(ch(0x33)),
    'merge.currentContentBackground': info.ui.scm.conflicts.current.alpha(ch(0x11)),
    'merge.currentHeaderBackground': info.ui.scm.conflicts.current.alpha(ch(0x33)),
    'merge.incomingContentBackground': info.ui.scm.conflicts.incoming.alpha(ch(0x11)),
    'merge.incomingHeaderBackground': info.ui.scm.conflicts.incoming.alpha(ch(0x33)),
    // 'editorOverviewRuler.currentContentForeground': '#FF0000',
    // 'editorOverviewRuler.incomingContentForeground': '#FF0000',
    // 'editorOverviewRuler.commonContentForeground': '#FF0000',

    /**
     * Panel Colours
     */
    'panel.background': info.ui.background.panel,
    'panel.border': info.ui.border,
    'panel.dropBorder': info.ui.accent,
    'panelTitle.activeBorder': info.ui.accent,
    'panelTitle.activeForeground': info.ui.text.primary,
    'panelTitle.inactiveForeground': info.ui.text.secondary,
    'panelSectionHeader.background': info.ui.background.panel,
    'panelSectionHeader.foreground': info.ui.text.secondary,
    'panelSectionHeader.border': info.ui.border,
    'panelSection.border': info.ui.border,
    'panelSection.dropBackground': info.ui.background.drop.alpha(ch(0x22)),

    /**
     * Status Bar Colours
     */
    'statusBar.foreground': info.ui.background.panel.isDark()
      ? info.ui.text.secondary.lighten(0.4)
      : info.ui.text.secondary.darken(0.2),
    'statusBar.background': info.ui.background.panel,
    'statusBar.border': info.ui.border,
    'statusBar.debuggingBackground': info.ui.debug.indicator,
    'statusBar.debuggingForeground': info.ui.text.complimentary,
    'statusBar.debuggingBorder': info.ui.border,
    'statusBar.noFolderBackground': info.ui.background.panel,
    'statusBar.focusBorder': info.ui.accent.alpha(ch(0x66)),
    'statusBarItem.focusBorder': info.ui.accent.alpha(ch(0x66)),
    'statusBarItem.activeBackground': info.ui.background.panel,
    'statusBarItem.hoverForeground': info.ui.text.primary,
    'statusBarItem.hoverBackground': transparent,
    'statusBarItem.remoteBackground': info.ui.button.secondary,
    'statusBarItem.remoteForeground': info.ui.text.complimentary,
    'statusBarItem.remoteHoverBackground': transparent,
    'statusBarItem.errorBackground': info.ui.problems.error,
    'statusBarItem.errorForeground': info.ui.text.complimentary,
    'statusBarItem.errorHoverBackground': transparent,
    'statusBarItem.errorHoverForeground': info.ui.text.primary,
    'statusBarItem.warningBackground': info.ui.problems.warning,
    'statusBarItem.warningForeground': info.ui.text.complimentary,
    'statusBarItem.warningHoverBackground': transparent,
    'statusBarItem.warningHoverForeground': info.ui.text.primary,
    'statusBarItem.compactHoverBackground': transparent,
    'statusBarItem.prominentBackground': info.ui.background.hover,
    'statusBarItem.prominentForeground': info.ui.text.primary,
    'statusBarItem.prominentHoverBackground': transparent,
    'statusBarItem.prominentHoverForeground': info.ui.text.primary,

    /**
     * Title Bar Colours
     */
    'titleBar.border': info.ui.border,
    'titleBar.activeBackground': info.ui.background.panel,
    'titleBar.inactiveBackground': info.ui.background.code,
    'titleBar.activeForeground': info.ui.text.primary,
    'titleBar.inactiveForeground': info.ui.text.secondary,

    /**
     * Menu Bar Colours
     */
    'menubar.selectionForeground': info.ui.text.primary,
    'menubar.selectionBackground': info.ui.accent,
    'menu.foreground': info.ui.text.primary,
    'menu.background': info.ui.background.panel,
    'menu.border': info.ui.accent.alpha(ch(0x66)),
    'menu.selectionForeground': info.ui.text.primary,
    'menu.selectionBackground': info.ui.accent.alpha(ch(0x44)),
    'menu.separatorBackground': info.ui.border,
    // 'menubar.selectionBorder': '#FF0000',
    // 'menu.selectionBorder': '#FF0000',

    /**
     * Notification Colours
     */
    'notifications.background': info.ui.background.panel,
    'notificationCenterHeader.background': info.ui.border,
    'notificationCenterHeader.foreground': info.ui.text.primary,
    'notificationCenter.border': info.ui.border,
    'notifications.border': info.ui.border,
    'notificationToast.border': info.ui.border,
    'notificationLink.foreground': info.ui.accent,
    // 'notifications.foreground': '#FF0000',

    /**
     * Extensions
     */
    'extensionButton.prominentForeground': info.ui.text.contrast,
    'extensionButton.prominentBackground': info.ui.accent,
    'extensionButton.prominentHoverBackground': info.ui.accent.lighten(0.25),
    'extensionIcon.starForeground': info.ui.accent,
    'extensionIcon.verifiedForeground': info.ui.icon.success,
    'extensionIcon.preReleaseForeground': info.ui.icon.error,

    /**
     * Quick Picker
     */
    'pickerGroup.border': info.ui.border,
    'pickerGroup.foreground': info.ui.text.primary,

    /**
     * Keybinding label colors
     *
     * Keybinding labels are shown when there is a keybinding associated with a command.
     */
    'keybindingLabel.background': info.ui.background.hover.alpha(ch(0x66)),
    'keybindingLabel.foreground': info.ui.text.primary,
    'keybindingLabel.border': info.ui.border,
    'keybindingLabel.bottomBorder': info.ui.border,
    // Keyboard Shortcuts view
    'keybindingTable.headerBackground': info.ui.background.panel,
    'keybindingTable.rowsBackground': info.ui.background.panel.alpha(ch(0x66)),

    /**
     * Integrated Terminal Colours
     */
    'terminal.background': info.ui.background.panel,
    'terminal.border': info.ui.border,
    'terminal.foreground': info.ui.text.primary,
    'terminal.tab.activeBorder': info.ui.accent,
    'terminal.findMatchBackground': info.ui.highlight.word.matches.alpha(ch(0x44)),
    'terminal.findMatchBorder': info.ui.highlight.word.matches.alpha(ch(0xaa)),
    'terminal.findMatchHighlightBackground': info.ui.highlight.word.matches.alpha(ch(0x33)),
    'terminal.initialHintForeground': info.ui.text.dimmed,
    'terminalCursor.foreground': info.ui.text.primary,
    'terminal.selectionBackground': info.ui.text.primary.alpha(ch(0x22)),
    'terminal.ansiBlack': info.ui.terminal.normal.black,
    'terminal.ansiBlue': info.ui.terminal.normal.blue,
    'terminal.ansiCyan': info.ui.terminal.normal.cyan,
    'terminal.ansiGreen': info.ui.terminal.normal.green,
    'terminal.ansiMagenta': info.ui.terminal.normal.magenta,
    'terminal.ansiRed': info.ui.terminal.normal.red,
    'terminal.ansiWhite': info.ui.terminal.normal.white,
    'terminal.ansiYellow': info.ui.terminal.normal.yellow,
    'terminal.ansiBrightBlack': info.ui.background.panel.isDark()
      ? info.ui.terminal.bright.black.lighten(0.5)
      : info.ui.terminal.bright.white.darken(0.2),
    'terminal.ansiBrightBlue': info.ui.terminal.bright.blue,
    'terminal.ansiBrightCyan': info.ui.terminal.bright.cyan,
    'terminal.ansiBrightGreen': info.ui.terminal.bright.green,
    'terminal.ansiBrightMagenta': info.ui.terminal.bright.magenta,
    'terminal.ansiBrightRed': info.ui.terminal.bright.red,
    'terminal.ansiBrightWhite': info.ui.background.panel.isDark()
      ? info.ui.terminal.bright.white.lighten(0.2)
      : info.ui.terminal.bright.black.lighten(0.5),
    'terminal.ansiBrightYellow': info.ui.terminal.bright.yellow,
    'terminalCommandDecoration.successBackground': info.ui.icon.success,
    'terminalCommandDecoration.errorBackground': info.ui.icon.error,
    'terminalCommandDecoration.defaultBackground': info.ui.icon.inactive,
    'terminalCommandGuide.foreground': info.ui.background.hover,
    'terminalStickyScrollHover.background': info.ui.background.hover,
    'terminalOverviewRuler.border': info.ui.border,

    /**
     * Debug
     */
    'debugToolBar.background': info.ui.background.panel,
    'debugToolBar.border': info.ui.border,
    'editor.stackFrameHighlightBackground': info.ui.debug.frame.normal.alpha(ch(0x33)),
    'editor.focusedStackFrameHighlightBackground': info.ui.debug.frame.focused.alpha(ch(0x22)),
    'editor.inlineValuesBackground': info.ui.background.panel,
    'editor.inlineValuesForeground': info.ui.text.secondary,
    'debugIcon.breakpointForeground': info.ui.debug.breakpoint.active,
    'debugIcon.breakpointDisabledForeground': info.ui.debug.breakpoint.disabled.alpha(ch(0x66)),
    'debugIcon.breakpointUnverifiedForeground': info.ui.debug.breakpoint.unverified,
    'debugIcon.breakpointStackframeForeground': info.ui.debug.frame.normal.alpha(ch(0x99)),
    'debugIcon.breakpointCurrentStackframeForeground': info.ui.debug.frame.focused,
    'debugIcon.startForeground': info.ui.debug.icon.start,
    'debugIcon.continueForeground': info.ui.debug.icon.continue,
    'debugIcon.pauseForeground': info.ui.debug.icon.pause,
    'debugIcon.stepOverForeground': info.ui.debug.icon.next,
    'debugIcon.stepBackForeground': info.ui.debug.icon.back,
    'debugIcon.stepIntoForeground': info.ui.debug.icon.into,
    'debugIcon.stepOutForeground': info.ui.debug.icon.out,
    'debugIcon.stopForeground': info.ui.debug.icon.stop,
    'debugIcon.disconnectForeground': info.ui.debug.icon.stop,
    'debugIcon.restartForeground': info.ui.debug.icon.restart,
    'debugView.exceptionLabelForeground': info.ui.text.contrast,
    'debugView.exceptionLabelBackground': info.ui.problems.error,
    'debugView.stateLabelForeground': info.ui.text.contrast,
    'debugView.stateLabelBackground': info.ui.problems.info,
    'debugView.valueChangedHighlight': info.ui.problems.info.alpha(ch(0x99)),
    'debugTokenExpression.name': info.code.variables,
    'debugTokenExpression.type': info.code.types,
    'debugTokenExpression.value': info.ui.text.dimmed,
    'debugTokenExpression.string': info.code.strings,
    'debugTokenExpression.boolean': info.code.primitives,
    'debugTokenExpression.number': info.code.primitives,
    'debugTokenExpression.error': info.ui.problems.error,
    'debugConsole.errorForeground': info.ui.problems.error,
    'debugConsole.warningForeground': info.ui.problems.warning,
    'debugConsole.infoForeground': info.ui.problems.info,
    'debugConsole.sourceForeground': info.ui.text.dimmed,
    'debugConsoleInputIcon.foreground': info.ui.text.dimmed,

    /**
     * Welcome Page
     */
    'walkThrough.embeddedEditorBackground': info.ui.background.panel,
    // 'welcomePage.background': '#FF0000',

    /**
     * Git Colours
     */
    'gitDecoration.ignoredResourceForeground': info.ui.scm.ignored,
    'gitDecoration.addedResourceForeground': info.ui.scm.added,
    'gitDecoration.modifiedResourceForeground': info.ui.scm.modified,
    'gitDecoration.deletedResourceForeground': info.ui.scm.deleted,
    'gitDecoration.conflictingResourceForeground': info.ui.scm.conflicting,
    'gitDecoration.untrackedResourceForeground': info.ui.scm.untracked,
    'gitDecoration.submoduleResourceForeground': info.ui.scm.untracked,

    /**
     * Merge Conflict Editor
     */
    'mergeEditor.conflict.unhandledUnfocused.border': info.ui.scm.conflicting.alpha(ch(0x22)),
    'mergeEditor.conflict.unhandledFocused.border': info.ui.scm.conflicting.alpha(ch(0x66)),
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': info.ui.scm.conflicting,
    'mergeEditor.conflict.handledUnfocused.border': info.ui.scm.modified.alpha(ch(0x22)),
    'mergeEditor.conflict.handledFocused.border': info.ui.scm.modified.alpha(ch(0x66)),
    'mergeEditor.conflict.handled.minimapOverViewRuler': info.ui.scm.modified,
    'mergeEditor.change.background': info.ui.scm.conflicting.alpha(ch(0x11)),
    'mergeEditor.change.word.background': info.ui.scm.conflicting.alpha(ch(0x22)),
    'mergeEditor.conflictingLines.background': info.ui.scm.conflicting.alpha(ch(0x66)),

    /**
     * Settings Editor Colours
     */
    'settings.headerForeground': info.ui.text.primary,
    'settings.modifiedItemIndicator': info.ui.accent,
    'settings.dropdownBackground': info.ui.background.panel,
    'settings.checkboxBackground': info.ui.background.panel,
    'settings.textInputBackground': info.ui.background.panel,
    'settings.numberInputBackground': info.ui.background.panel,
    'settings.checkboxForeground': info.code.primitives,
    'settings.dropdownForeground': info.code.decoratives.raw,
    'settings.textInputForeground': info.code.strings,
    'settings.numberInputForeground': info.code.primitives,
    'settings.dropdownBorder': info.ui.border,
    'settings.dropdownListBorder': info.ui.border,
    'settings.checkboxBorder': info.ui.border,
    'settings.textInputBorder': info.ui.border,
    'settings.sashBorder': info.ui.border,
    'settings.numberInputBorder': info.ui.border,
    'settings.focusedRowBackground': info.ui.highlight.line.alpha(ch(0x09)),
    'settings.focusedRowBorder': info.ui.accent.alpha(ch(0x66)),

    /**
     * Breadcrumbs
     */
    'breadcrumb.foreground': info.ui.text.secondary,
    'breadcrumb.focusForeground': info.ui.text.primary,
    'breadcrumb.activeSelectionForeground': info.ui.text.primary,
    'breadcrumbPicker.background': info.ui.background.panel,
    // 'breadcrumb.background': '#FF0000',

    /**
     * Snippets
     */
    'editor.snippetTabstopHighlightBackground': info.ui.highlight.word.matches.alpha(0),
    'editor.snippetFinalTabstopHighlightBackground': info.ui.highlight.word.matches.alpha(ch(0x33)),
    'editor.snippetFinalTabstopHighlightBorder': info.ui.highlight.word.matches.alpha(ch(0x99)),
    'editor.snippetTabstopHighlightBorder': info.ui.highlight.word.matches.alpha(ch(0x99)),

    /**
     * Notebook
     */
    'notebook.cellBorderColor': info.ui.border,
    'notebook.cellHoverBackground': info.ui.highlight.line.alpha(ch(0x09)),
    'notebook.cellInsertionIndicator': info.ui.accent,
    'notebook.cellStatusBarItemHoverBackground': info.ui.background.hover.alpha(ch(0x66)),
    'notebook.cellToolbarSeparator': info.ui.border,
    'notebook.focusedCellBackground': info.ui.highlight.line.alpha(ch(0x09)),
    'notebook.focusedCellBorder': info.ui.accent.alpha(ch(0x66)),
    'notebook.inactiveFocusedCellBorder': info.ui.accent.alpha(ch(0x44)),
    'notebook.outputContainerBackgroundColor': info.ui.background.panel,
    'notebookStatusErrorIcon.foreground': info.ui.icon.error,
    'notebookStatusRunningIcon.foreground': info.ui.icon.foreground,
    'notebookStatusSuccessIcon.foreground': info.ui.icon.success,
    'notebook.symbolHighlightBackground': info.ui.highlight.range.alpha(ch(0x11)),
    'notebook.selectedCellBackground': info.ui.highlight.selection.alpha(ch(0x22)),
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
    'charts.red': info.ui.terminal.normal.red,
    'charts.blue': info.ui.terminal.normal.blue,
    'charts.yellow': info.ui.terminal.bright.yellow,
    'charts.orange': info.ui.terminal.normal.yellow,
    'charts.green': info.ui.terminal.normal.green,
    'charts.purple': info.ui.terminal.normal.magenta,
    // 'charts.foreground': info.ui.text.primary,
    // 'charts.lines': info.ui.text.secondary,

    /**
     * SCM graph
     */
    'scmGraph.foreground1': info.ui.terminal.normal.cyan,
    'scmGraph.foreground2': info.ui.terminal.normal.blue,
    'scmGraph.foreground3': info.ui.terminal.normal.magenta,
    'scmGraph.foreground4': info.ui.terminal.bright.red,
    'scmGraph.foreground5': info.ui.terminal.bright.blue,
    'scmGraph.historyItemBaseRefColor': info.ui.terminal.bright.green,
    'scmGraph.historyItemRefColor': info.ui.terminal.normal.green,
    'scmGraph.historyItemRemoteRefColor': info.ui.terminal.normal.yellow,
    'scmGraph.historyItemHoverAdditionsForeground': info.ui.scm.added,
    'scmGraph.historyItemHoverDeletionsForeground': info.ui.scm.deleted,
    'scmGraph.historyItemHoverDefaultLabelForeground': info.ui.text.contrast,
    'scmGraph.historyItemHoverDefaultLabelBackground': info.ui.scm.modified,
    'scmGraph.historyItemHoverLabelForeground': info.ui.text.contrast,

    /**
     * Testing UI
     */
    'testing.iconFailed': info.ui.icon.error,
    'testing.iconErrored': info.ui.icon.error,
    'testing.iconPassed': info.ui.icon.success,
    'testing.iconQueued': info.ui.problems.info,
    'testing.iconSkipped': info.ui.icon.inactive,
    'testing.iconUnset': info.ui.problems.info,
    'testing.runAction': info.ui.text.secondary,
    'testing.peekBorder': info.ui.border,
    'testing.message.error.badgeForeground': info.ui.text.complimentary,
    'testing.message.info.decorationForeground': info.ui.text.complimentary,
    'testing.message.error.lineBackground': info.ui.problems.error.alpha(ch(0x66)),
    'testing.message.info.lineBackground': info.ui.problems.info.alpha(ch(0x66)),

    /**
     * Chat
     */
    'chat.requestBorder': info.ui.border,
    'chat.avatarForeground': info.ui.background.panel,
    'chat.avatarBackground': info.ui.text.primary,
    'chat.requestBackground': info.ui.background.code,
    'chat.slashCommandForeground': info.ui.text.contrast,
    'chat.slashCommandBackground': info.ui.accent,

    // EXTENSIONS

    /**
     * Remote Development
     */
    'ports.iconRunningProcessForeground': info.ui.icon.success,

    /**
     * GitHub Pull Requests & Issues
     */
    'issues.newIssueDecoration': info.ui.text.secondary,
    'issues.open': info.ui.icon.success,
    'issues.closed': info.ui.icon.error,
    'pullRequests.open': info.ui.scm.added,
    'pullRequests.closed': info.ui.scm.deleted,
    'pullRequests.draft': info.ui.scm.untracked,
    'pullRequests.merged': info.ui.scm.merged,
    'pullRequests.notification': info.ui.problems.info,

    /**
     * Error Lens
     */
    'errorLens.errorForeground': info.ui.problems.error,
    'errorLens.errorForegroundLight': info.ui.problems.error,
    'errorLens.warningForeground': info.ui.problems.warning,
    'errorLens.warningForegroundLight': info.ui.problems.warning,
    'errorLens.infoForeground': info.ui.problems.info,
    'errorLens.infoForegroundLight': info.ui.problems.info,
    'errorLens.hintForeground': info.ui.problems.hint,
    'errorLens.hintForegroundLight': info.ui.problems.hint,
    'errorLens.errorBackground': transparent,
    'errorLens.errorBackgroundLight': transparent,
    'errorLens.warningBackground': transparent,
    'errorLens.warningBackgroundLight': transparent,
    'errorLens.infoBackground': transparent,
    'errorLens.infoBackgroundLight': transparent,
    'errorLens.hintBackground': transparent,
    'errorLens.hintBackgroundLight': transparent,
    // 'errorLens.errorMessageBackground': '#ff0000',
    // 'errorLens.warningMessageBackground': '#ff0000',
    // 'errorLens.infoMessageBackground': '#ff0000',
    // 'errorLens.hintMessageBackground': '#ff0000',

    /**
     * GitLens
     */
    'gitlens.gutterForegroundColor': info.ui.text.secondary,
    'gitlens.gutterBackgroundColor': info.ui.background.code,
    'gitlens.gutterUncommittedForegroundColor': info.ui.scm.untracked,
    'gitlens.lineHighlightBackgroundColor': info.ui.scm.added.alpha(ch(0x11)),
    'gitlens.lineHighlightOverviewRulerColor': info.ui.scm.added.alpha(ch(0x11)),
    'gitlens.closedPullRequestIconColor': info.ui.icon.foreground,
    'gitlens.openPullRequestIconColor': info.ui.icon.foreground,
    'gitlens.mergedPullRequestIconColor': info.ui.icon.foreground,
    'gitlens.unpushlishedChangesIconColor': info.ui.icon.foreground,
    'gitlens.unpublishedCommitIconColor': info.ui.icon.foreground,
    'gitlens.unpulledChangesIconColor': info.ui.icon.foreground,
    'gitlens.decorations.addedForegroundColor': info.ui.scm.added,
    'gitlens.decorations.copiedForegroundColor': info.ui.scm.modified,
    'gitlens.decorations.deletedForegroundColor': info.ui.scm.deleted,
    'gitlens.decorations.ignoredForegroundColor': info.ui.scm.ignored,
    'gitlens.decorations.modifiedForegroundColor': info.ui.scm.modified,
    'gitlens.decorations.untrackedForegroundColor': info.ui.scm.untracked,
    'gitlens.decorations.renamedForegroundColor': info.ui.scm.modified,
    'gitlens.decorations.branchAheadForegroundColor': info.ui.scm.conflicts.incoming,
    'gitlens.decorations.branchBehindForegroundColor': info.ui.scm.conflicts.current,
    'gitlens.decorations.branchDivergedForegroundColor': info.ui.scm.conflicting,
    'gitlens.decorations.branchUpToDateForegroundColor': info.ui.text.primary,
    'gitlens.decorations.branchUnpublishedForegroundColor': info.ui.scm.untracked,
    // 'gitlens.trailingLineBackgroundColor': '#FF0000',
    // 'gitlens.trailingLineForegroundColor': '#FF0000',

    /**
     * LintLens
     */
    'lintlens.annotationColor': info.ui.problems.hint.alpha(ch(0x99)),

    /**
     * Bookmarks
     */
    'bookmarks.overviewRuler': info.ui.problems.info,
    'bookmarks.lineBackground': info.ui.problems.info.alpha(ch(0x11)),
    'bookmarks.lineBorder': info.ui.problems.info.alpha(ch(0x66)),

    /**
     * Test Explorer
     */
    'testExplorer.errorDecorationBackground': info.ui.problems.error.alpha(ch(0x66)),

    /**
     * SQL Tools
     */
    'sqltools.currentQueryBg': info.ui.highlight.word.matches.alpha(ch(0x22)),
    'sqltools.currentQueryOutline': transparent,

    /**
     * File Watcher
     */
    'filewatcher.error': info.ui.problems.error,
  }
}

export {
  mkui,
}
