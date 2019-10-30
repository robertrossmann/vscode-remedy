import { ui } from '@remedy/palette'

export default {

  /**
   * Base Colours
   */
  focusBorder: `${ui.accent.hex()}66`,
  foreground: ui.text.hex(),
  'widget.shadow': ui.border.hex(),
  'selection.background': `${ui.text.hex()}22`,
  descriptionForeground: ui.text.hex(),

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
  // 'textPreformat.foreground': '#FF0000',

  /**
   * Button Control
   *
   * A set of colors for button widgets such as Open Folder button in the Explorer of a new
   * window
   */
  'button.background': ui.accent.hex(),
  'button.foreground': ui.text.hex(),
  // 'button.hoverBackground': '#FF0000',

  /**
   * Dropdown Control
   *
   * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output
   * panel. Note that the Dropdown control is not used on macOS currently.
   */
  'dropdown.background': ui.background.panel.hex(),
  'dropdown.foreground': ui.text.hex(),
  // 'dropdown.listBackground': '#FF0000',
  // 'dropdown.border': '#FF0000',

  /**
   * Input Control
   *
   * Colors for input controls such as in the Search view or the Find/Replace dialog.
   */
  'input.background': ui.background.code.hex(),
  'input.placeholderForeground': `${ui.text.hex()}99`,
  // 'input.border': '#FF0000',
  // 'input.foreground': '#FF0000',
  // 'inputOption.activeBorder': '#FF0000',
  // 'inputValidation.errorBackground': '#FF0000',
  // 'inputValidation.errorForeground': '#FF0000',
  // 'inputValidation.errorBorder': '#FF0000',
  // 'inputValidation.infoBackground': '#FF0000',
  // 'inputValidation.infoForeground': '#FF0000',
  // 'inputValidation.infoBorder': '#FF0000',
  // 'inputValidation.warningBackground': '#FF0000',
  // 'inputValidation.warningForeground': '#FF0000',

  /**
   * Scrollbar Control
   */
  'scrollbar.shadow': ui.border.hex(),
  'scrollbarSlider.activeBackground': `${ui.accent.hex()}66`,
  'scrollbarSlider.background': `${ui.accent.hex()}22`,
  'scrollbarSlider.hoverBackground': `${ui.accent.hex()}44`,

  /**
   * Badge
   *
   * Badges are small information labels, for example, search results count.
   */
  'badge.background': ui.accent.hex(),
  'badge.foreground': ui.text.hex(),

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
  'tree.indentGuidesStroke': `${ui.text.hex()}44`,
  'list.activeSelectionBackground': `${ui.accent.hex()}99`,
  'list.focusBackground': `${ui.accent.hex()}66`,
  'list.hoverBackground': `${ui.accent.hex()}22`,
  'listFilterWidget.background': `${ui.accent.hex()}99`,
  'list.inactiveSelectionBackground': `${ui.accent.hex()}22`,
  'list.highlightForeground': ui.accent.hex(),
  // 'list.activeSelectionForeground': '#ff0000',
  // 'list.dropBackground': '#ff0000',
  // 'list.focusForeground': '#ff0000',
  // 'list.hoverForeground': '#ff0000',
  // 'list.inactiveSelectionForeground': '#ff0000',
  // 'list.inactiveFocusBackground': '#ff0000',
  // 'list.errorForeground': '#ff0000',
  // 'list.warningForeground': '#ff0000',
  // 'listFilterWidget.outline': '#ff0000',
  // 'listFilterWidget.noMatchesOutline': '#ff0000',
  // 'list.invalidItemForeground': '#ff0000',

  /**
   * Activity Bar
   *
   * The Activity Bar is displayed either on the far left or right of the workbench and allows
   * fast switching between views of the Side Bar.
   */
  'activityBar.background': ui.background.panel.hex(),
  'activityBar.border': ui.border.hex(),
  'activityBar.foreground': ui.text.hex(),
  'activityBar.inactiveForeground': ui.text.darken(0.6).desaturate(0.8).hex(),
  'activityBarBadge.background': ui.accent.hex(),
  // 'activityBar.dropBackground': '#ff0000',
  // 'activityBarBadge.foreground': '#ff0000',

  /**
   * Side Bar
   *
   * The Side Bar contains views like the Explorer and Search.
   */
  'sideBar.background': ui.background.panel.hex(),
  'sideBar.border': ui.border.hex(),
  'sideBar.foreground': ui.text.hex(),
  'sideBarSectionHeader.background': ui.background.panel.hex(),
  'sideBarSectionHeader.border': ui.border.hex(),
  'sideBar.dropBackground': `${ui.text.hex()}44`,
  // 'sideBarTitle.foreground': '#FF0000',
  // 'sideBarSectionHeader.foreground': '#FF0000',

  /**
   * Minimap
   *
   * The Minimap shows a minified version of the current file.
   */
  'minimap.findMatchHighlight': ui.accent.hex(),
  'minimap.selectionHighlight': `${ui.text.hex()}44`,

  /**
   * Editor Groups & Tabs
   *
   * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the
   * container of an editor. Multiple Tabs can be opened in one editor group.
   */
  'editorGroup.border': ui.border.hex(),
  'editorGroup.dropBackground': `${ui.text.hex()}44`,
  'editorGroupHeader.noTabsBackground': ui.background.panel.hex(),
  'editorGroupHeader.tabsBackground': ui.background.panel.hex(),
  'tab.activeBackground': ui.background.code.hex(),
  'tab.activeBorderTop': ui.accent.hex(),
  'tab.activeForeground': ui.text.hex(),
  'tab.activeModifiedBorder': ui.accent.hex(),
  'tab.border': ui.background.panel.hex(),
  'tab.inactiveBackground': ui.background.panel.hex(),
  'tab.inactiveModifiedBorder': `${ui.accent.hex()}66`,
  'editorPane.background': ui.background.panel.hex(),
  // 'editorGroupHeader.tabsBorder': '#FF0000',
  // 'editorGroup.emptyBackground': '#FF0000',
  // 'editorGroup.focusedEmptyBorder': '#FF0000',
  // 'tab.unfocusedActiveBackground': '#FF0000',
  // 'tab.activeBorder': '#FF0000',
  // 'tab.unfocusedActiveBorder': '#FF0000',
  // 'tab.unfocusedActiveBorderTop': '#FF0000',
  // 'tab.inactiveForeground': '#FF0000',
  // 'tab.unfocusedActiveForeground': '#FF0000',
  // 'tab.unfocusedInactiveForeground': '#FF0000',
  // 'tab.hoverBackground': '#FF0000',
  // 'tab.unfocusedHoverBackground': '#FF0000',
  // 'tab.hoverBorder': '#FF0000',
  // 'tab.unfocusedHoverBorder': '#FF0000',
  // 'tab.unfocusedActiveModifiedBorder': '#FF0000',
  // 'tab.unfocusedInactiveModifiedBorder': '#FF0000',

  /**
   * Editor Colours
   */
  'editor.background': ui.background.code.hex(),
  'editor.findMatchBackground': `${ui.accent.hex()}66`,
  'editor.findMatchBorder': `${ui.accent.lighten(0.2).hex()}66`,
  'editor.findMatchHighlightBackground': `${ui.accent.darken(0.2).hex()}44`,
  'editor.findRangeHighlightBackground': `${ui.accent.hex()}22`,
  'editor.foreground': ui.text.hex(),
  'editor.hoverHighlightBackground': `${ui.accent.hex()}33`,
  'editor.lineHighlightBackground': `${ui.text.hex()}09`,
  'editor.selectionBackground': `${ui.text.hex()}22`,
  'editor.selectionHighlightBackground': `${ui.accent.hex()}33`,
  'editor.wordHighlightBackground': `${ui.accent.hex()}33`,
  'editor.wordHighlightStrongBackground': `${ui.accent.hex()}66`,
  'editor.wordHighlightStrongBorder': `${ui.accent.lighten(0.2).hex()}66`,
  'editorCursor.foreground': ui.text.hex(),
  'editorIndentGuide.activeBackground': `${ui.text.hex()}44`,
  'editorIndentGuide.background': `${ui.text.hex()}22`,
  'editorLineNumber.activeForeground': ui.text.hex(),
  'editorLineNumber.foreground': `${ui.text.darken(0.6).desaturate(0.7).hex()}`,
  'editorRuler.foreground': `${ui.text.hex()}22`,
  'editorWhitespace.foreground': `${ui.text.hex()}22`,
  'editorLink.activeForeground': ui.accent.hex(),
  'editor.rangeHighlightBackground': `${ui.accent.hex()}22`,
  'editorCursor.background': ui.background.panel.hex(),
  // 'editor.inactiveSelectionBackground': '#FF0000',
  // 'editor.selectionHighlightBorder': '#FF0000',
  // 'editor.findMatchHighlightBorder': '#FF0000',
  // 'editor.lineHighlightBorder': '#FF0000',
  // 'editor.rangeHighlightBorder': '#FF0000',
  // 'editor.wordHighlightBorder': '#FF0000',
  // 'editor.selectionForeground': '#FF0000',
  // 'editor.findRangeHighlightBorder': '#FF0000',
  // CodeLens
  'editorCodeLens.foreground': `${ui.text.darken(0.6).desaturate(0.6).hex()}`,
  // Bracket Matches
  'editorBracketMatch.background': `${ui.accent.hex()}22`,
  'editorBracketMatch.border': `${ui.accent.lighten(0.2).hex()}66`,
  // Overview Ruler
  'editorOverviewRuler.border': ui.border.hex(),
  'editorOverviewRuler.bracketMatchForeground': ui.text.hex(),
  'editorOverviewRuler.findMatchForeground': ui.accent.hex(),
  'editorOverviewRuler.wordHighlightForeground': `${ui.accent.hex()}66`,
  'editorOverviewRuler.wordHighlightStrongForeground': ui.accent.hex(),
  'editorOverviewRuler.modifiedForeground': ui.scm.modified.hex(),
  'editorOverviewRuler.addedForeground': ui.scm.added.hex(),
  'editorOverviewRuler.deletedForeground': ui.scm.deleted.hex(),
  'editorOverviewRuler.errorForeground': ui.problems.error.hex(),
  'editorOverviewRuler.warningForeground': ui.problems.warning.hex(),
  'editorOverviewRuler.infoForeground': ui.problems.info.hex(),
  // 'editorOverviewRuler.rangeHighlightForeground': '#FF0000',
  // 'editorOverviewRuler.selectionHighlightForeground': '#FF0000',
  // Errors & Warnings
  'editorError.foreground': ui.problems.error.hex(),
  'editorWarning.foreground': ui.problems.warning.hex(),
  'editorInfo.foreground': ui.problems.info.hex(),
  'editorHint.foreground': ui.problems.hint.hex(),
  // 'editorError.border': '#FF0000',
  // 'editorWarning.border': '#FF0000',
  // 'editorInfo.border': '#FF0000',
  // 'editorHint.border': '#FF0000',
  // Unused Source Code
  // 'editorUnnecessaryCode.border': '#FF0000',
  // 'editorUnnecessaryCode.opacity': '#00000099',
  // Gutter
  'editorGutter.modifiedBackground': ui.scm.modified.hex(),
  'editorGutter.addedBackground': ui.scm.added.hex(),
  'editorGutter.deletedBackground': ui.scm.deleted.hex(),
  // 'editorGutter.background': '#FF0000',

  /**
   * Diff Editor Colours
   */
  'diffEditor.border': ui.border.hex(),
  'diffEditor.insertedTextBackground': `${ui.scm.added.hex()}22`,
  'diffEditor.removedTextBackground': `${ui.scm.deleted.hex()}22`,
  // 'diffEditor.insertedTextBorder': '#FF0000',
  // 'diffEditor.removedTextBorder': '#FF0000',

  /**
   * Editor Widget Colours
   */
  'editorHoverWidget.background': ui.background.panel.hex(),
  'editorHoverWidget.border': ui.border.hex(),
  'editorSuggestWidget.background': ui.background.panel.hex(),
  'editorSuggestWidget.foreground': ui.text.hex(),
  'editorSuggestWidget.highlightForeground': ui.text.hex(),
  'editorWidget.background': ui.background.panel.hex(),
  'editorWidget.resizeBorder': ui.accent.hex(),
  'editorWidget.border': ui.border.hex(),
  'editorSuggestWidget.border': ui.border.hex(),
  // The Debug Exception widget is a peek view that shows in the editor when debug stops at an
  // exception.
  'debugExceptionWidget.background': ui.background.panel.hex(),
  'debugExceptionWidget.border': ui.accent.hex(),
  // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next
  // Error or Warning command)
  'editorMarkerNavigation.background': ui.background.panel.hex(),
  'editorMarkerNavigationError.background': ui.border.hex(),
  'editorMarkerNavigationWarning.background': ui.border.hex(),
  'editorMarkerNavigationInfo.background': ui.border.hex(),
  // 'editorSuggestWidget.selectedBackground': ui.accent.hex(),

  /**
   * Peek View Colours
   */
  'peekView.border': `${ui.accent.hex()}99`,
  'peekViewEditor.background': ui.background.code.hex(),
  'peekViewResult.fileForeground': ui.text.hex(),
  'peekViewTitleLabel.foreground': ui.text.hex(),
  'peekViewEditorGutter.background': ui.background.panel.hex(),
  'peekViewEditor.matchHighlightBackground': `${ui.accent.hex()}66`,
  'peekViewResult.background': ui.background.panel.hex(),
  'peekViewResult.lineForeground': ui.text.hex(),
  'peekViewResult.matchHighlightBackground': `${ui.accent.hex()}66`,
  'peekViewResult.selectionBackground': `${ui.accent.hex()}99`,
  'peekViewResult.selectionForeground': ui.text.hex(),
  'peekViewTitle.background': ui.background.panel.hex(),
  'peekViewTitleDescription.foreground': ui.text.darken(0.1).desaturate(0.2).hex(),
  // 'peekViewEditor.matchHighlightBorder': '#FF0000',

  /**
   * Merge Conflicts
   */
  'merge.currentHeaderBackground': `${ui.scm.conflicts.current.hex()}22`,
  'merge.incomingHeaderBackground': `${ui.scm.conflicts.incoming.hex()}22`,
  'merge.commonHeaderBackground': `${ui.scm.conflicts.common.hex()}22`,
  // 'editorOverviewRuler.currentContentForeground': '#FF0000',
  // 'editorOverviewRuler.incomingContentForeground': '#FF0000',
  // 'editorOverviewRuler.commonContentForeground': '#FF0000',
  // 'merge.border': '#FF0000',
  // 'merge.commonContentBackground': '#FF0000',
  // 'merge.currentContentBackground': '#FF0000',
  // 'merge.incomingContentBackground': '#FF0000',

  /**
   * Panel Colours
   */
  'panel.background': ui.background.panel.hex(),
  'panel.border': ui.border.hex(),
  'panelTitle.activeBorder': ui.accent.hex(),
  'panelTitle.activeForeground': ui.text.hex(),
  // 'panel.dropBackground': '#FF0000',
  // 'panelTitle.inactiveForeground': '#FF0000',

  /**
   * Status Bar Colours
   */
  'statusBar.background': ui.background.panel.hex(),
  'statusBar.border': ui.border.hex(),
  'statusBar.debuggingBackground': ui.accent.hex(),
  'statusBar.debuggingBorder': ui.border.hex(),
  'statusBar.foreground': ui.text.hex(),
  'statusBar.noFolderBackground': ui.background.panel.hex(),
  'statusBarItem.hoverBackground': `${ui.background.panel.lighten(0.5).hex()}AA`,
  'statusBarItem.remoteBackground': ui.accent.hex(),
  'statusBarItem.remoteForeground': ui.text.hex(),
  // 'statusBar.debuggingForeground': '#FF0000',
  // 'statusBar.noFolderForeground': '#FF0000',
  // 'statusBar.noFolderBorder': '#FF0000',
  // 'statusBarItem.activeBackground': '#FF0000',
  // 'statusBarItem.prominentForeground': '#FF0000',
  // 'statusBarItem.prominentBackground': '#FF0000',
  // 'statusBarItem.prominentHoverBackground': '#FF0000',

  /**
   * Title Bar Colours
   */
  'titleBar.border': ui.border.hex(),
  'titleBar.activeBackground': ui.background.panel.hex(),
  'titleBar.activeForeground': ui.text.hex(),
  // 'titleBar.inactiveBackground': '#FF0000',
  // 'titleBar.inactiveForeground': '#FF0000',

  /**
   * Menu Bar Colours
   */
  'menubar.selectionForeground': ui.text.hex(),
  'menubar.selectionBackground': ui.accent.hex(),
  'menu.foreground': ui.text.hex(),
  'menu.background': ui.background.panel.hex(),
  'menu.selectionForeground': ui.text.hex(),
  'menu.selectionBackground': ui.background.panel.hex(),
  'menu.separatorBackground': ui.border.hex(),
  // 'menubar.selectionBorder': '#FF0000',
  // 'menu.selectionBorder': '#FF0000',

  /**
   * Notification Colours
   */
  'notifications.background': ui.background.panel.hex(),
  'notificationCenterHeader.background': ui.accent.hex(),
  'notificationCenter.border': ui.border.hex(),
  'notifications.border': ui.border.hex(),
  'notificationToast.border': ui.accent.hex(),
  'notificationLink.foreground': ui.accent.hex(),
  // 'notificationCenterHeader.foreground': '#FF0000',
  // 'notifications.foreground': '#FF0000',

  /**
   * Extensions
   */
  'extensionButton.prominentForeground': ui.text.hex(),
  'extensionButton.prominentBackground': ui.accent.hex(),
  'extensionButton.prominentHoverBackground': ui.accent.lighten(0.25).hex(),

  /**
   * Quick Picker
   */
  'pickerGroup.border': ui.border.hex(),
  'pickerGroup.foreground': ui.text.hex(),

  /**
   * Integrated Terminal Colours
   */
  'terminal.background': ui.background.panel.hex(),
  'terminal.border': ui.border.hex(),
  'terminal.foreground': ui.text.hex(),
  'terminalCursor.foreground': ui.text.hex(),
  'terminal.selectionBackground': `${ui.text.hex()}22`,
  'terminal.ansiBlack': ui.terminal.normal.black.lighten(0.5).hex(),
  'terminal.ansiBlue': ui.terminal.normal.blue.hex(),
  'terminal.ansiCyan': ui.terminal.normal.cyan.hex(),
  'terminal.ansiGreen': ui.terminal.normal.green.hex(),
  'terminal.ansiMagenta': ui.terminal.normal.magenta.hex(),
  'terminal.ansiRed': ui.terminal.normal.red.hex(),
  'terminal.ansiWhite': ui.terminal.normal.white.lighten(0.2).hex(),
  'terminal.ansiYellow': ui.terminal.normal.yellow.hex(),
  'terminal.ansiBrightBlack': ui.terminal.bright.black.lighten(0.5).hex(),
  'terminal.ansiBrightBlue': ui.terminal.bright.blue.hex(),
  'terminal.ansiBrightCyan': ui.terminal.bright.cyan.hex(),
  'terminal.ansiBrightGreen': ui.terminal.bright.green.hex(),
  'terminal.ansiBrightMagenta': ui.terminal.bright.magenta.hex(),
  'terminal.ansiBrightRed': ui.terminal.bright.red.hex(),
  'terminal.ansiBrightWhite': ui.terminal.bright.white.lighten(0.2).hex(),
  'terminal.ansiBrightYellow': ui.terminal.bright.yellow.hex(),
  // 'terminalCursor.background': '#FF0000',

  /**
   * Debug
   */
  'debugToolBar.background': ui.background.panel.hex(),
  'debugToolBar.border': ui.border.hex(),
  'editor.stackFrameHighlightBackground': `${ui.debug.frame.hex()}66`,
  'editor.focusedStackFrameHighlightBackground': `${ui.debug.focusedFrame.hex()}33`,

  /**
   * Welcome Page
   */
  'welcomePage.buttonBackground': ui.background.panel.hex(),
  'welcomePage.buttonHoverBackground': ui.background.panel.lighten(0.4).hex(),
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
   * Settings Editor Colours
   */
  'settings.headerForeground': ui.text.hex(),
  'settings.modifiedItemIndicator': ui.accent.hex(),
  'settings.dropdownBackground': ui.background.panel.hex(),
  'settings.checkboxBackground': ui.background.panel.hex(),
  'settings.textInputBackground': ui.background.panel.hex(),
  'settings.numberInputBackground': ui.background.panel.hex(),
  // 'settings.dropdownForeground': '#FF0000',
  // 'settings.dropdownBorder': '#FF0000',
  // 'settings.dropdownListBorder': '#FF0000',
  // 'settings.checkboxForeground': '#FF0000',
  // 'settings.checkboxBorder': '#FF0000',
  // 'settings.textInputForeground': '#FF0000',
  // 'settings.textInputBorder': '#FF0000',
  // 'settings.numberInputForeground': '#FF0000',
  // 'settings.numberInputBorder': '#FF0000',

  /**
   * Breadcrumbs
   */
  'breadcrumb.foreground': ui.text.darken(0.6).desaturate(0.6).hex(),
  'breadcrumb.focusForeground': ui.text.hex(),
  'breadcrumb.activeSelectionForeground': ui.text.hex(),
  'breadcrumbPicker.background': ui.background.panel.hex(),
  // 'breadcrumb.background': '#FF0000',

  /**
   * Snippets
   */
  'editor.snippetTabstopHighlightBackground': `${ui.text.hex()}22`,
  'editor.snippetFinalTabstopHighlightBackground': ui.text.hex(),
  'editor.snippetFinalTabstopHighlightBorder': `${ui.accent.hex()}99`,
  // 'editor.snippetTabstopHighlightBorder': '#FF0000',
}
