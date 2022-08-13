import type * as Color from 'color'

interface UIColourPalette {
  // [colorContribution: string]: color | string

  /**
   * Activity Bar optional background color for the active element.
   */
  'activityBar.activeBackground'?: Color | string
  /**
   * Activity Bar active indicator border color.
   */
  'activityBar.activeBorder'?: Color | string
  /**
   * Activity bar focus border color for the active item.
   */
  'activityBar.activeFocusBorder'?: Color | string
  /**
   * Activity Bar background color.
   */
  'activityBar.background'?: Color | string
  /**
   * Activity Bar border color with the Side Bar.
   */
  'activityBar.border'?: Color | string
  /**
   * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and
   * allows to switch between views of the side bar.
   */
  'activityBar.dropBorder'?: Color | string
  /**
   * Activity Bar foreground color (for example used for the icons).
   */
  'activityBar.foreground'?: Color | string
  /**
   * Activity Bar item foreground color when it is inactive.
   */
  'activityBar.inactiveForeground'?: Color | string
  /**
   * Activity notification badge background color.
   */
  'activityBarBadge.background'?: Color | string
  /**
   * Activity notification badge foreground color.
   */
  'activityBarBadge.foreground'?: Color | string
  /**
   * Badge background color.
   */
  'badge.background'?: Color | string
  /**
   * Badge foreground color.
   */
  'badge.foreground'?: Color | string
  /**
   * Banner background color.
   */
  'banner.background'?: Color | string
  /**
   * Banner foreground color.
   */
  'banner.foreground'?: Color | string
  /**
   * Color for the icon in front of the banner text.
   */
  'banner.iconForeground'?: Color | string
  /**
   * Color of selected breadcrumb items.
   */
  'breadcrumb.activeSelectionForeground'?: Color | string
  /**
   * Background color of breadcrumb items.
   */
  'breadcrumb.background'?: Color | string
  /**
   * Color of focused breadcrumb items.
   */
  'breadcrumb.focusForeground'?: Color | string
  /**
   * Color of breadcrumb items.
   */
  'breadcrumb.foreground'?: Color | string
  /**
   * Background color of breadcrumb item picker.
   */
  'breadcrumbPicker.background'?: Color | string
  /**
   * Button background color.
   */
  'button.background'?: Color | string
  /**
   * Button border color.
   */
  'button.border'?: Color | string
  /**
   * Button foreground color.
   */
  'button.foreground'?: Color | string
  /**
   * Button background color when hovering.
   */
  'button.hoverBackground'?: Color | string
  /**
   * Secondary button background color.
   */
  'button.secondaryBackground'?: Color | string
  /**
   * Secondary button foreground color.
   */
  'button.secondaryForeground'?: Color | string
  /**
   * Secondary button background color when hovering.
   */
  'button.secondaryHoverBackground'?: Color | string
  /**
   * Color for blue elements in charts.
   */
  'charts.blue'?: Color | string
  /**
   * Contrast color for text in charts.
   */
  'charts.foreground'?: Color | string
  /**
   * Color for green elements in charts.
   */
  'charts.green'?: Color | string
  /**
   * Color for lines in charts.
   */
  'charts.lines'?: Color | string
  /**
   * Color for orange elements in charts.
   */
  'charts.orange'?: Color | string
  /**
   * Color for purple elements in charts.
   */
  'charts.purple'?: Color | string
  /**
   * Color for red elements in charts.
   */
  'charts.red'?: Color | string
  /**
   * Color for yellow elements in charts.
   */
  'charts.yellow'?: Color | string
  /**
   * Background color of checkbox widget.
   */
  'checkbox.background'?: Color | string
  /**
   * Border color of checkbox widget.
   */
  'checkbox.border'?: Color | string
  /**
   * Foreground color of checkbox widget.
   */
  'checkbox.foreground'?: Color | string
  /**
   * Background color of the command center.
   */
  'commandCenter.background'?: Color | string
  /**
   * Border color of the command center.
   */
  'commandCenter.border'?: Color | string
  /**
   * Foreground color of the command center.
   */
  'commandCenter.foreground'?: Color | string
  /**
   * Active foreground color of the command center.
   */
  'commandCenter.activeForeground'?: Color | string
  /**
   * Active background color of the command center.
   */
  'commandCenter.activeBackground'?: Color | string
  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  'contrastActiveBorder'?: Color | string
  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  'contrastBorder'?: Color | string
  /**
   * Foreground color for error messages in debug REPL console.
   */
  'debugConsole.errorForeground'?: Color | string
  /**
   * Foreground color for info messages in debug REPL console.
   */
  'debugConsole.infoForeground'?: Color | string
  /**
   * Foreground color for source filenames in debug REPL console.
   */
  'debugConsole.sourceForeground'?: Color | string
  /**
   * Foreground color for warning messages in debug REPL console.
   */
  'debugConsole.warningForeground'?: Color | string
  /**
   * Foreground color for debug console input marker icon.
   */
  'debugConsoleInputIcon.foreground'?: Color | string
  /**
   * Exception widget background color.
   */
  'debugExceptionWidget.background'?: Color | string
  /**
   * Exception widget border color.
   */
  'debugExceptionWidget.border'?: Color | string
  /**
   * Icon color for the current breakpoint stack frame.
   */
  'debugIcon.breakpointCurrentStackframeForeground'?: Color | string
  /**
   * Icon color for disabled breakpoints.
   */
  'debugIcon.breakpointDisabledForeground'?: Color | string
  /**
   * Icon color for breakpoints.
   */
  'debugIcon.breakpointForeground'?: Color | string
  /**
   * Icon color for all breakpoint stack frames.
   */
  'debugIcon.breakpointStackframeForeground'?: Color | string
  /**
   * Icon color for unverified breakpoints.
   */
  'debugIcon.breakpointUnverifiedForeground'?: Color | string
  /**
   * Debug toolbar icon for continue.
   */
  'debugIcon.continueForeground'?: Color | string
  /**
   * Debug toolbar icon for disconnect.
   */
  'debugIcon.disconnectForeground'?: Color | string
  /**
   * Debug toolbar icon for pause.
   */
  'debugIcon.pauseForeground'?: Color | string
  /**
   * Debug toolbar icon for restart.
   */
  'debugIcon.restartForeground'?: Color | string
  /**
   * Debug toolbar icon for start debugging.
   */
  'debugIcon.startForeground'?: Color | string
  /**
   * Debug toolbar icon for step back.
   */
  'debugIcon.stepBackForeground'?: Color | string
  /**
   * Debug toolbar icon for step into.
   */
  'debugIcon.stepIntoForeground'?: Color | string
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOutForeground'?: Color | string
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOverForeground'?: Color | string
  /**
   * Debug toolbar icon for stop.
   */
  'debugIcon.stopForeground'?: Color | string
  /**
   * Foreground color for booleans in debug views
   */
  'debugTokenExpression.boolean'?: Color | string
  /**
   * Foreground color for expression errors in debug views
   */
  'debugTokenExpression.error'?: Color | string
  /**
   * Foreground color for the token names shown in debug views (ie. the Variables or Watch view)
   */
  'debugTokenExpression.name'?: Color | string
  /**
   * Foreground color for numbers in debug views
   */
  'debugTokenExpression.number'?: Color | string
  /**
   * Foreground color for strings in debug views
   */
  'debugTokenExpression.string'?: Color | string
  /**
   * Foreground color for the token values shown in debug views
   */
  'debugTokenExpression.value'?: Color | string
  /**
   * Debug toolbar background color.
   */
  'debugToolBar.background'?: Color | string
  /**
   * Debug toolbar border color.
   */
  'debugToolBar.border'?: Color | string
  /**
   * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
   */
  'debugView.exceptionLabelBackground'?: Color | string
  /**
   * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
   */
  'debugView.exceptionLabelForeground'?: Color | string
  /**
   * Background color for a label in the CALL STACK view showing the current session's or thread's state
   */
  'debugView.stateLabelBackground'?: Color | string
  /**
   * Foreground color for a label in the CALL STACK view showing the current session's or thread's state
   */
  'debugView.stateLabelForeground'?: Color | string
  /**
   * Color used to highlight value changes in the debug views (ie. in the Variables view)
   */
  'debugView.valueChangedHighlight'?: Color | string
  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  'descriptionForeground'?: Color | string
  /**
   * Border color between the two text editors.
   */
  'diffEditor.border'?: Color | string
  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  'diffEditor.diagonalFill'?: Color | string
  /**
   * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedTextBackground'?: Color | string
  /**
   * Outline color for the text that got inserted.
   */
  'diffEditor.insertedTextBorder'?: Color | string
  /**
   * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedTextBackground'?: Color | string
  /**
   * Outline color for text that got removed.
   */
  'diffEditor.removedTextBorder'?: Color | string
  /**
   * Dropdown background.
   */
  'dropdown.background'?: Color | string
  /**
   * Dropdown border.
   */
  'dropdown.border'?: Color | string
  /**
   * Dropdown foreground.
   */
  'dropdown.foreground'?: Color | string
  /**
   * Dropdown list background.
   */
  'dropdown.listBackground'?: Color | string
  /**
   * Editor background color.
   */
  'editor.background'?: Color | string
  /**
   * Color of the current search match.
   */
  'editor.findMatchBackground'?: Color | string
  /**
   * Border color of the current search match.
   */
  'editor.findMatchBorder'?: Color | string
  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findMatchHighlightBackground'?: Color | string
  /**
   * Border color of the other search matches.
   */
  'editor.findMatchHighlightBorder'?: Color | string
  /**
   * Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque
   * so as not to hide underlying decorations.
   */
  'editor.findRangeHighlightBackground'?: Color | string
  /**
   * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
   */
  'editor.findRangeHighlightBorder'?: Color | string
  /**
   * Background color of the focused stack frame highlight in the editor.
   */
  'editor.focusedStackFrameHighlightBackground'?: Color | string
  /**
   * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.foldBackground'?: Color | string
  /**
   * Editor default foreground color.
   */
  'editor.foreground'?: Color | string
  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.hoverHighlightBackground'?: Color | string
  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.inactiveSelectionBackground'?: Color | string
  /**
   * Color for the debug inline value background.
   */
  'editor.inlineValuesBackground'?: Color | string
  /**
   * Color for the debug inline value text.
   */
  'editor.inlineValuesForeground'?: Color | string
  /**
   * Background color for the highlight of line at the cursor position.
   */
  'editor.lineHighlightBackground'?: Color | string
  /**
   * Background color for the border around the line at the cursor position.
   */
  'editor.lineHighlightBorder'?: Color | string
  /**
   * Background color when the editor is in linked editing mode.
   */
  'editor.linkedEditingBackground'?: Color | string
  /**
   * Background color when the editor auto renames on type.
   */
  'editor.onTypeRenameBackground'?: Color | string
  /**
   * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be
   * opaque so as not to hide underlying decorations.
   */
  'editor.rangeHighlightBackground'?: Color | string
  /**
   * Background color of the border around highlighted ranges.
   */
  'editor.rangeHighlightBorder'?: Color | string
  /**
   * Color of the editor selection.
   */
  'editor.selectionBackground'?: Color | string
  /**
   * Color of the selected text for high contrast.
   */
  'editor.selectionForeground'?: Color | string
  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.selectionHighlightBackground'?: Color | string
  /**
   * Border color for regions with the same content as the selection.
   */
  'editor.selectionHighlightBorder'?: Color | string
  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBackground'?: Color | string
  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBorder'?: Color | string
  /**
   * Highlight background color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBackground'?: Color | string
  /**
   * Highlight border color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBorder'?: Color | string
  /**
   * Background color of the top stack frame highlight in the editor.
   */
  'editor.stackFrameHighlightBackground'?: Color | string
  /**
   * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.symbolHighlightBackground'?: Color | string
  /**
   * Background color of the border around highlighted symbols.
   */
  'editor.symbolHighlightBorder'?: Color | string
  /**
   * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque
   * so as not to hide underlying decorations.
   */
  'editor.wordHighlightBackground'?: Color | string
  /**
   * Border color of a symbol during read-access, for example when reading a variable.
   */
  'editor.wordHighlightBorder'?: Color | string
  /**
   * Background color of a symbol during write-access, for example when writing to a variable. The color must not be
   * opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightStrongBackground'?: Color | string
  /**
   * Border color of a symbol during write-access, for example when writing to a variable.
   */
  'editor.wordHighlightStrongBorder'?: Color | string
  /**
   * Foreground color of brackets (1). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground1'?: Color | string
  /**
   * Foreground color of brackets (2). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground2'?: Color | string
  /**
   * Foreground color of brackets (3). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground3'?: Color | string
  /**
   * Foreground color of brackets (4). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground4'?: Color | string
  /**
   * Foreground color of brackets (5). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground5'?: Color | string
  /**
   * Foreground color of brackets (6). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground6'?: Color | string
  /**
   * Foreground color of unexpected brackets.
   */
  'editorBracketHighlight.unexpectedBracket.foreground'?: Color | string
  /**
   * Background color behind matching brackets.
   */
  'editorBracketMatch.background'?: Color | string
  /**
   * Color for matching brackets boxes.
   */
  'editorBracketMatch.border'?: Color | string
  /**
   * Foreground color of an editor CodeLens.
   */
  'editorCodeLens.foreground'?: Color | string
  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block
   * cursor.
   */
  'editorCursor.background'?: Color | string
  /**
   * Color of the editor cursor.
   */
  'editorCursor.foreground'?: Color | string
  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorError.background'?: Color | string
  /**
   * Border color of error boxes in the editor.
   */
  'editorError.border'?: Color | string
  /**
   * Foreground color of error squiggles in the editor.
   */
  'editorError.foreground'?: Color | string
  /**
   * Border color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.border'?: Color | string
  /**
   * Background color of the ghost text in the editor.
   */
  'editorGhostText.background'?: Color | string
  /**
   * Foreground color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.foreground'?: Color | string
  /**
   * Color to separate multiple editor groups from each other.
   */
  'editorGroup.border'?: Color | string
  /**
   * Background color when dragging editors around.
   */
  'editorGroup.dropBackground'?: Color | string
  /**
   * Background color of an empty editor group.
   */
  'editorGroup.emptyBackground'?: Color | string
  /**
   * Border color of an empty editor group that is focused.
   */
  'editorGroup.focusedEmptyBorder'?: Color | string
  /**
   * Border color between editor group header and editor (below breadcrumbs if enabled).
   */
  'editorGroupHeader.border'?: Color | string
  /**
   * Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
   */
  'editorGroupHeader.noTabsBackground'?: Color | string
  /**
   * Background color of the Tabs container.
   */
  'editorGroupHeader.tabsBackground'?: Color | string
  /**
   * Border color below the editor tabs control when tabs are enabled.
   */
  'editorGroupHeader.tabsBorder'?: Color | string
  /**
   * Editor gutter background color for lines that are added.
   */
  'editorGutter.addedBackground'?: Color | string
  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  'editorGutter.background'?: Color | string
  /**
   * Editor gutter decoration color for commenting ranges.
   */
  'editorGutter.commentRangeForeground'?: Color | string
  /**
   * Editor gutter background color for lines that are deleted.
   */
  'editorGutter.deletedBackground'?: Color | string
  /**
   * Color of the folding control in the editor gutter.
   */
  'editorGutter.foldingControlForeground'?: Color | string
  /**
   * Editor gutter background color for lines that are modified.
   */
  'editorGutter.modifiedBackground'?: Color | string
  /**
   * Border color of hint boxes in the editor.
   */
  'editorHint.border'?: Color | string
  /**
   * Foreground color of hints in the editor.
   */
  'editorHint.foreground'?: Color | string
  /**
   * Background color of the editor hover.
   */
  'editorHoverWidget.background'?: Color | string
  /**
   * Border color of the editor hover.
   */
  'editorHoverWidget.border'?: Color | string
  /**
   * Foreground color of the editor hover.
   */
  'editorHoverWidget.foreground'?: Color | string
  /**
   * Background color of the editor hover status bar.
   */
  'editorHoverWidget.statusBarBackground'?: Color | string
  /**
   * Color of the active editor indentation guide.
   */
  'editorIndentGuide.activeBackground'?: Color | string
  /**
   * Color of the editor indentation guides.
   */
  'editorIndentGuide.background'?: Color | string
  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorInfo.background'?: Color | string
  /**
   * Border color of info boxes in the editor.
   */
  'editorInfo.border'?: Color | string
  /**
   * Foreground color of info squiggles in the editor.
   */
  'editorInfo.foreground'?: Color | string
  /**
   * Background color of inline hints.
   */
  'editorInlayHint.background'?: Color | string
  /**
   * Foreground color of inline hints.
   */
  'editorInlayHint.foreground'?: Color | string
  /**
   * Background color of inline hints for parameters
   */
  'editorInlayHint.parameterBackground'?: Color | string
  /**
   * Foreground color of inline hints for parameters
   */
  'editorInlayHint.parameterForeground'?: Color | string
  /**
   * Background color of inline hints for types
   */
  'editorInlayHint.typeBackground'?: Color | string
  /**
   * Foreground color of inline hints for types
   */
  'editorInlayHint.typeForeground'?: Color | string
  /**
   * The color used for the lightbulb actions icon.
   */
  'editorLightBulb.foreground'?: Color | string
  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  'editorLightBulbAutoFix.foreground'?: Color | string
  /**
   * Color of the active editor line number.
   */
  'editorLineNumber.activeForeground'?: Color | string
  /**
   * Color of editor line numbers.
   */
  'editorLineNumber.foreground'?: Color | string
  /**
   * Color of active links.
   */
  'editorLink.activeForeground'?: Color | string
  /**
   * Editor marker navigation widget background.
   */
  'editorMarkerNavigation.background'?: Color | string
  /**
   * Editor marker navigation widget error color.
   */
  'editorMarkerNavigationError.background'?: Color | string
  /**
   * Editor marker navigation widget error heading background.
   */
  'editorMarkerNavigationError.headerBackground'?: Color | string
  /**
   * Editor marker navigation widget info color.
   */
  'editorMarkerNavigationInfo.background'?: Color | string
  /**
   * Editor marker navigation widget info heading background.
   */
  'editorMarkerNavigationInfo.headerBackground'?: Color | string
  /**
   * Editor marker navigation widget warning color.
   */
  'editorMarkerNavigationWarning.background'?: Color | string
  /**
   * Editor marker navigation widget warning heading background.
   */
  'editorMarkerNavigationWarning.headerBackground'?: Color | string
  /**
   * Overview ruler marker color for added content.
   */
  'editorOverviewRuler.addedForeground'?: Color | string
  /**
   * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side
   * of the editor.
   */
  'editorOverviewRuler.background'?: Color | string
  /**
   * Color of the overview ruler border.
   */
  'editorOverviewRuler.border'?: Color | string
  /**
   * Overview ruler marker color for matching brackets.
   */
  'editorOverviewRuler.bracketMatchForeground'?: Color | string
  /**
   * Common ancestor overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.commonContentForeground'?: Color | string
  /**
   * Current overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.currentContentForeground'?: Color | string
  /**
   * Overview ruler marker color for deleted content.
   */
  'editorOverviewRuler.deletedForeground'?: Color | string
  /**
   * Overview ruler marker color for errors.
   */
  'editorOverviewRuler.errorForeground'?: Color | string
  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.findMatchForeground'?: Color | string
  /**
   * Incoming overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.incomingContentForeground'?: Color | string
  /**
   * Overview ruler marker color for infos.
   */
  'editorOverviewRuler.infoForeground'?: Color | string
  /**
   * Overview ruler marker color for modified content.
   */
  'editorOverviewRuler.modifiedForeground'?: Color | string
  /**
   * Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The
   * color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.rangeHighlightForeground'?: Color | string
  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.selectionHighlightForeground'?: Color | string
  /**
   * Overview ruler marker color for warnings.
   */
  'editorOverviewRuler.warningForeground'?: Color | string
  /**
   * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.wordHighlightForeground'?: Color | string
  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'editorOverviewRuler.wordHighlightStrongForeground'?: Color | string
  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  'editorPane.background'?: Color | string
  /**
   * Color of the editor rulers.
   */
  'editorRuler.foreground'?: Color | string
  /**
   * Editor sticky scroll background color.
   */
  'editorStickyScroll.background'?: Color | string
  /**
   * Editor sticky scroll on hover background color.
   */
  'editorStickyScrollHover.background'?: Color | string
  /**
   * Background color of the suggestion widget.
   */
  'editorSuggestWidget.background'?: Color | string
  /**
   * Border color of the suggestion widget.
   */
  'editorSuggestWidget.border'?: Color | string
  /**
   * Color of the match highlights in the suggest widget when an item is focused.
   */
  'editorSuggestWidget.focusHighlightForeground'?: Color | string
  /**
   * Foreground color of the suggestion widget.
   */
  'editorSuggestWidget.foreground'?: Color | string
  /**
   * Color of the match highlights in the suggestion widget.
   */
  'editorSuggestWidget.highlightForeground'?: Color | string
  /**
   * Background color of the selected entry in the suggestion widget.
   */
  'editorSuggestWidget.selectedBackground'?: Color | string
  /**
   * Foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedForeground'?: Color | string
  /**
   * Icon foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedIconForeground'?: Color | string
  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  'editorUnnecessaryCode.border'?: Color | string
  /**
   * Opacity of unnecessary (unused) source code in the editor.
   *
   * For example, "#000000c0" will render the code with 75%
   * opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code
   * instead of fading it out.
   */
  'editorUnnecessaryCode.opacity'?: Color | string
  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorWarning.background'?: Color | string
  /**
   * Border color of warning boxes in the editor.
   */
  'editorWarning.border'?: Color | string
  /**
   * Foreground color of warning squiggles in the editor.
   */
  'editorWarning.foreground'?: Color | string
  /**
   * Color of whitespace characters in the editor.
   */
  'editorWhitespace.foreground'?: Color | string
  /**
   * Background color of editor widgets, such as Find/Replace.
   */
  'editorWidget.background'?: Color | string
  /**
   * Border color of the editor widget unless the widget does not contain a border or defines its own border color.
   */
  'editorWidget.border'?: Color | string
  /**
   * Foreground color of editor widgets, such as find/replace.
   */
  'editorWidget.foreground'?: Color | string
  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize
   * border and if the color is not overridden by a widget.
   */
  'editorWidget.resizeBorder'?: Color | string
  /**
   * Overall foreground color for error messages (this color is only used if not overridden by a component).
   */
  'errorForeground'?: Color | string
  /**
   * Background color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteBackground'?: Color | string
  /**
   * Foreground color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteForeground'?: Color | string
  /**
   * Extension view button background color.
   */
  'extensionButton.prominentBackground'?: Color | string
  /**
   * Extension view button foreground color (for example Install button).
   */
  'extensionButton.prominentForeground'?: Color | string
  /**
   * Extension view button background hover color.
   */
  'extensionButton.prominentHoverBackground'?: Color | string
  /**
   * The icon color for pre-release extension.
   */
  'extensionIcon.preReleaseForeground'?: Color | string
  /**
   * The icon color for extension sponsor.
   */
  'extensionIcon.sponsorForeground'?: Color | string
  /**
   * The icon color for extension ratings.
   */
  'extensionIcon.starForeground'?: Color | string
  /**
   * The icon color for extension verified publisher.
   */
  'extensionIcon.verifiedForeground'?: Color | string
  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  'focusBorder'?: Color | string
  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  'foreground'?: Color | string
  /**
   * Color for added Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.addedResourceForeground'?: Color | string
  /**
   * Color for conflicting Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.conflictingResourceForeground'?: Color | string
  /**
   * Color for deleted Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.deletedResourceForeground'?: Color | string
  /**
   * Color for ignored Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.ignoredResourceForeground'?: Color | string
  /**
   * Color for modified Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.modifiedResourceForeground'?: Color | string
  /**
   * Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.renamedResourceForeground'?: Color | string
  /**
   * Color for staged deletions git decorations. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageDeletedResourceForeground'?: Color | string
  /**
   * Color for staged modifications git decorations. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageModifiedResourceForeground'?: Color | string
  /**
   * Color for submodule resources.
   */
  'gitDecoration.submoduleResourceForeground'?: Color | string
  /**
   * Color for untracked Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.untrackedResourceForeground'?: Color | string
  /**
   * The default color for icons in the workbench.
   */
  'icon.foreground'?: Color | string
  /**
   * Input box background.
   */
  'input.background'?: Color | string
  /**
   * Input box border.
   */
  'input.border'?: Color | string
  /**
   * Input box foreground.
   */
  'input.foreground'?: Color | string
  /**
   * Input box foreground color for placeholder text.
   */
  'input.placeholderForeground'?: Color | string
  /**
   * Background color of activated options in input fields.
   */
  'inputOption.activeBackground'?: Color | string
  /**
   * Border color of activated options in input fields.
   */
  'inputOption.activeBorder'?: Color | string
  /**
   * Foreground color of activated options in input fields.
   */
  'inputOption.activeForeground'?: Color | string
  /**
   * Input validation background color for error severity.
   */
  'inputValidation.errorBackground'?: Color | string
  /**
   * Input validation border color for error severity.
   */
  'inputValidation.errorBorder'?: Color | string
  /**
   * Input validation foreground color for error severity.
   */
  'inputValidation.errorForeground'?: Color | string
  /**
   * Input validation background color for information severity.
   */
  'inputValidation.infoBackground'?: Color | string
  /**
   * Input validation border color for information severity.
   */
  'inputValidation.infoBorder'?: Color | string
  /**
   * Input validation foreground color for information severity.
   */
  'inputValidation.infoForeground'?: Color | string
  /**
   * Input validation background color for information warning.
   */
  'inputValidation.warningBackground'?: Color | string
  /**
   * Input validation border color for warning severity.
   */
  'inputValidation.warningBorder'?: Color | string
  /**
   * Input validation foreground color for warning severity.
   */
  'inputValidation.warningForeground'?: Color | string
  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.background'?: Color | string
  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.border'?: Color | string
  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.bottomBorder'?: Color | string
  /**
   * Background color for the keyboard shortcuts table header.
   */
  'keybindingTable.headerBackground'?: Color | string
  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  'keybindingTable.rowsBackground'?: Color | string
  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.foreground'?: Color | string
  /**
   * List/Tree background color for the selected item when the list/tree is active.
   */
  'list.activeSelectionBackground'?: Color | string
  /**
   * List/Tree foreground color for the selected item when the list/tree is active.
   */
  'list.activeSelectionForeground'?: Color | string
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has
   * keyboard focus, an inactive does not.
   */
  'list.activeSelectionIconForeground'?: Color | string
  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  'list.deemphasizedForeground'?: Color | string
  /**
   * List/Tree drag and drop background when moving items around using the mouse.
   */
  'list.dropBackground'?: Color | string
  /**
   * Foreground color of list items containing errors.
   */
  'list.errorForeground'?: Color | string
  /**
   * Background color of the filtered matches in lists and trees.
   */
  'list.filterMatchBackground'?: Color | string
  /**
   * Border color of the filtered matches in lists and trees.
   */
  'list.filterMatchBorder'?: Color | string
  /**
   * List/Tree background color for the focused item when the list/tree is active.
   */
  'list.focusBackground'?: Color | string
  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.focusForeground'?: Color | string
  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  'list.focusHighlightForeground'?: Color | string
  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus,
   * an inactive does not.
   */
  'list.focusOutline'?: Color | string
  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  'list.highlightForeground'?: Color | string
  /**
   * List/Tree background when hovering over items using the mouse.
   */
  'list.hoverBackground'?: Color | string
  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  'list.hoverForeground'?: Color | string
  /**
   * List background color for the focused item when the list is inactive. An active list has keyboard focus, an
   * inactive does not. Currently only supported in lists.
   */
  'list.inactiveFocusBackground'?: Color | string
  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.inactiveFocusOutline'?: Color | string
  /**
   * List/Tree background color for the selected item when the list/tree is inactive.
   */
  'list.inactiveSelectionBackground'?: Color | string
  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.inactiveSelectionForeground'?: Color | string
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has
   * keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionIconForeground'?: Color | string
  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  'list.invalidItemForeground'?: Color | string
  /**
   * Foreground color of list items containing warnings.
   */
  'list.warningForeground'?: Color | string
  /**
   * List/Tree Filter background color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.background'?: Color | string
  /**
   * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
   */
  'listFilterWidget.noMatchesOutline'?: Color | string
  /**
   * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.outline'?: Color | string
  /**
   * Background color of menu items.
   */
  'menu.background'?: Color | string
  /**
   * Border color of menus.
   */
  'menu.border'?: Color | string
  /**
   * Foreground color of menu items.
   */
  'menu.foreground'?: Color | string
  /**
   * Background color of the selected menu item in menus.
   */
  'menu.selectionBackground'?: Color | string
  /**
   * Border color of the selected menu item in menus.
   */
  'menu.selectionBorder'?: Color | string
  /**
   * Foreground color of the selected menu item in menus.
   */
  'menu.selectionForeground'?: Color | string
  /**
   * Color of a separator menu item in menus.
   */
  'menu.separatorBackground'?: Color | string
  /**
   * Background color of the selected menu item in the menubar.
   */
  'menubar.selectionBackground'?: Color | string
  /**
   * Border color of the selected menu item in the menubar.
   */
  'menubar.selectionBorder'?: Color | string
  /**
   * Foreground color of the selected menu item in the menubar.
   */
  'menubar.selectionForeground'?: Color | string
  /**
   * Border color on headers and the splitter in inline merge conflicts.
   */
  'merge.border'?: Color | string
  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'merge.commonContentBackground'?: Color | string
  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'merge.commonHeaderBackground'?: Color | string
  /**
   * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.currentContentBackground'?: Color | string
  /**
   * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.currentHeaderBackground'?: Color | string
  /**
   * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.incomingContentBackground'?: Color | string
  /**
   * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.incomingHeaderBackground'?: Color | string
  /**
   * The background color for changes.
   */
  'mergeEditor.change.background'?: Color | string
  /**
   * The background color for word changes.
   */
  'mergeEditor.change.word.background'?: Color | string
  /**
   * The border color of unhandled unfocused conflicts.
   */
  'mergeEditor.conflict.unhandledUnfocused.border'?: Color | string
  /**
   * The border color of unhandled focused conflicts.
   */
  'mergeEditor.conflict.unhandledFocused.border'?: Color | string
  /**
   * The border color of handled unfocused conflicts.
   */
  'mergeEditor.conflict.handledUnfocused.border'?: Color | string
  /**
   * The border color of handled focused conflicts.
   */
  'mergeEditor.conflict.handledFocused.border'?: Color | string
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: Color | string
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: Color | string
  /**
   * Minimap background color.
   */
  'minimap.background'?: Color | string
  /**
   * Highlight color for errors within the editor.
   */
  'minimap.errorHighlight'?: Color | string
  /**
   * Highlight color for matches from search within files.
   */
  'minimap.findMatchHighlight'?: Color | string
  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75%
   * opacity.
   */
  'minimap.foregroundOpacity'?: Color | string
  /**
   * Highlight color for the editor selection.
   */
  'minimap.selectionHighlight'?: Color | string
  /**
   * Minimap marker color for repeating editor selections.
   */
  'minimap.selectionOccurrenceHighlight'?: Color | string
  /**
   * Highlight color for warnings within the editor.
   */
  'minimap.warningHighlight'?: Color | string
  /**
   * Minimap gutter color for added content.
   */
  'minimapGutter.addedBackground'?: Color | string
  /**
   * Minimap gutter color for deleted content.
   */
  'minimapGutter.deletedBackground'?: Color | string
  /**
   * Minimap gutter color for modified content.
   */
  'minimapGutter.modifiedBackground'?: Color | string
  /**
   * Minimap slider background color when clicked on.
   */
  'minimapSlider.activeBackground'?: Color | string
  /**
   * Minimap slider background color.
   */
  'minimapSlider.background'?: Color | string
  /**
   * Minimap slider background color when hovering.
   */
  'minimapSlider.hoverBackground'?: Color | string
  /**
   * The border color for notebook cells.
   */
  'notebook.cellBorderColor'?: Color | string
  /**
   * The color of the notebook cell editor background
   */
  'notebook.cellEditorBackground'?: Color | string
  /**
   * The background color of a cell when the cell is hovered.
   */
  'notebook.cellHoverBackground'?: Color | string
  /**
   * The color of the notebook cell insertion indicator.
   */
  'notebook.cellInsertionIndicator'?: Color | string
  /**
   * The background color of notebook cell status bar items.
   */
  'notebook.cellStatusBarItemHoverBackground'?: Color | string
  /**
   * The color of the separator in the cell bottom toolbar
   */
  'notebook.cellToolbarSeparator'?: Color | string
  /**
   * The background color of a cell when the cell is focused.
   */
  'notebook.focusedCellBackground'?: Color | string
  /**
   * The color of the cell's top and bottom border when the cell is focused.
   */
  'notebook.focusedCellBorder'?: Color | string
  /**
   * The color of the notebook cell editor border.
   */
  'notebook.focusedEditorBorder'?: Color | string
  /**
   * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the
   * editor.
   */
  'notebook.inactiveFocusedCellBorder'?: Color | string
  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  'notebook.inactiveSelectedCellBorder'?: Color | string
  /**
   * The Color of the notebook output container background.
   */
  'notebook.outputContainerBackgroundColor'?: Color | string
  /**
   * The border color of the notebook output container.
   */
  'notebook.outputContainerBorderColor'?: Color | string
  /**
   * The background color of a cell when the cell is selected.
   */
  'notebook.selectedCellBackground'?: Color | string
  /**
   * The color of the cell's top and bottom border when the cell is selected but not focused.
   */
  'notebook.selectedCellBorder'?: Color | string
  /**
   * Background color of highlighted cell
   */
  'notebook.symbolHighlightBackground'?: Color | string
  /**
   * Notebook scrollbar slider background color when clicked on.
   */
  'notebookScrollbarSlider.activeBackground'?: Color | string
  /**
   * Notebook scrollbar slider background color.
   */
  'notebookScrollbarSlider.background'?: Color | string
  /**
   * Notebook scrollbar slider background color when hovering.
   */
  'notebookScrollbarSlider.hoverBackground'?: Color | string
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  'notebookStatusErrorIcon.foreground'?: Color | string
  /**
   * The running icon color of notebook cells in the cell status bar.
   */
  'notebookStatusRunningIcon.foreground'?: Color | string
  /**
   * The success icon color of notebook cells in the cell status bar.
   */
  'notebookStatusSuccessIcon.foreground'?: Color | string
  /**
   * Notification Center border color.
   */
  'notificationCenter.border'?: Color | string
  /**
   * Notification Center header background color.
   */
  'notificationCenterHeader.background'?: Color | string
  /**
   * Notification Center header foreground color.
   */
  'notificationCenterHeader.foreground'?: Color | string
  /**
   * Notification links foreground color.
   */
  'notificationLink.foreground'?: Color | string
  /**
   * Notification background color.
   */
  'notifications.background'?: Color | string
  /**
   * Notification border color separating from other notifications in the Notification Center.
   */
  'notifications.border'?: Color | string
  /**
   * Notification foreground color.
   */
  'notifications.foreground'?: Color | string
  /**
   * The color used for the notification error icon.
   */
  'notificationsErrorIcon.foreground'?: Color | string
  /**
   * The color used for the notification info icon.
   */
  'notificationsInfoIcon.foreground'?: Color | string
  /**
   * The color used for the notification warning icon.
   */
  'notificationsWarningIcon.foreground'?: Color | string
  /**
   * Notification toast border color.
   */
  'notificationToast.border'?: Color | string
  /**
   * Panel background color.
   */
  'panel.background'?: Color | string
  /**
   * Panel border color to separate the panel from the editor.
   */
  'panel.border'?: Color | string
  /**
   * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like
   * output and integrated terminal.
   */
  'panel.dropBorder'?: Color | string
  /**
   * Input box border for inputs in the panel.
   */
  'panelInput.border'?: Color | string
  /**
   * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below
   * the editor area and contain views like output and integrated terminal.
   */
  'panelSection.border'?: Color | string
  /**
   * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections
   * can still shine through. Panels are shown below the editor area and contain views like output and integrated
   * terminal.
   */
  'panelSection.dropBackground'?: Color | string
  /**
   * Panel section header background color. Panels are shown below the editor area and contain views like output and
   * integrated terminal.
   */
  'panelSectionHeader.background'?: Color | string
  /**
   * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown
   * below the editor area and contain views like output and integrated terminal.
   */
  'panelSectionHeader.border'?: Color | string
  /**
   * Panel section header foreground color. Panels are shown below the editor area and contain views like output and
   * integrated terminal.
   */
  'panelSectionHeader.foreground'?: Color | string
  /**
   * Border color for the active panel title.
   */
  'panelTitle.activeBorder'?: Color | string
  /**
   * Title color for the active panel.
   */
  'panelTitle.activeForeground'?: Color | string
  /**
   * Title color for the inactive panel.
   */
  'panelTitle.inactiveForeground'?: Color | string
  /**
   * Color of the peek view borders and arrow.
   */
  'peekView.border'?: Color | string
  /**
   * Background color of the peek view editor.
   */
  'peekViewEditor.background'?: Color | string
  /**
   * Match highlight color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBackground'?: Color | string
  /**
   * Match highlight border color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBorder'?: Color | string
  /**
   * Background color of the gutter in the peek view editor.
   */
  'peekViewEditorGutter.background'?: Color | string
  /**
   * Background color of the peek view result list.
   */
  'peekViewResult.background'?: Color | string
  /**
   * Foreground color for file nodes in the peek view result list.
   */
  'peekViewResult.fileForeground'?: Color | string
  /**
   * Foreground color for line nodes in the peek view result list.
   */
  'peekViewResult.lineForeground'?: Color | string
  /**
   * Match highlight color in the peek view result list.
   */
  'peekViewResult.matchHighlightBackground'?: Color | string
  /**
   * Background color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionBackground'?: Color | string
  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionForeground'?: Color | string
  /**
   * Background color of the peek view title area.
   */
  'peekViewTitle.background'?: Color | string
  /**
   * Color of the peek view title info.
   */
  'peekViewTitleDescription.foreground'?: Color | string
  /**
   * Color of the peek view title.
   */
  'peekViewTitleLabel.foreground'?: Color | string
  /**
   * Quick picker (Quick Open) color for grouping borders.
   */
  'pickerGroup.border'?: Color | string
  /**
   * Quick picker (Quick Open) color for grouping labels.
   */
  'pickerGroup.foreground'?: Color | string
  /**
   * The color of the icon for a port that has an associated running process.
   */
  'ports.iconRunningProcessForeground'?: Color | string
  /**
   * The color used for the problems error icon.
   */
  'problemsErrorIcon.foreground'?: Color | string
  /**
   * The color used for the problems info icon.
   */
  'problemsInfoIcon.foreground'?: Color | string
  /**
   * The color used for the problems warning icon.
   */
  'problemsWarningIcon.foreground'?: Color | string
  /**
   * Background color of the progress bar shown for long running operations.
   */
  'progressBar.background'?: Color | string
  /**
   * Quick input background color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.background'?: Color | string
  /**
   * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.foreground'?: Color | string
  /**
   * Quick picker background color for the focused item.
   */
  'quickInputList.focusBackground'?: Color | string
  /**
   * Quick picker foreground color for the focused item.
   */
  'quickInputList.focusForeground'?: Color | string
  /**
   * Quick picker icon foreground color for the focused item.
   */
  'quickInputList.focusIconForeground'?: Color | string
  /**
   * Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
   */
  'quickInputTitle.background'?: Color | string
  /**
   * The hover border color for draggable sashes.
   */
  'sash.hoverBorder'?: Color | string
  /**
   * SCM Provider separator border.
   */
  'scm.providerBorder'?: Color | string
  /**
   * Scrollbar slider shadow to indicate that the view is scrolled.
   */
  'scrollbar.shadow'?: Color | string
  /**
   * Scrollbar slider background color when clicked on.
   */
  'scrollbarSlider.activeBackground'?: Color | string
  /**
   * Scrollbar slider background color.
   */
  'scrollbarSlider.background'?: Color | string
  /**
   * Scrollbar slider background color when hovering.
   */
  'scrollbarSlider.hoverBackground'?: Color | string
  /**
   * Color of the editor's results.
   */
  'searchEditor.findMatchBackground'?: Color | string
  /**
   * Border color of the editor's results.
   */
  'searchEditor.findMatchBorder'?: Color | string
  /**
   * Search editor text input box border.
   */
  'searchEditor.textInputBorder'?: Color | string
  /**
   * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections
   * within the editor and the terminal).
   */
  'selection.background'?: Color | string
  /**
   * Checkbox background.
   */
  'settings.checkboxBackground'?: Color | string
  /**
   * Checkbox border.
   */
  'settings.checkboxBorder'?: Color | string
  /**
   * Checkbox foreground.
   */
  'settings.checkboxForeground'?: Color | string
  /**
   * Dropdown background.
   */
  'settings.dropdownBackground'?: Color | string
  /**
   * Dropdown border.
   */
  'settings.dropdownBorder'?: Color | string
  /**
   * Dropdown foreground.
   */
  'settings.dropdownForeground'?: Color | string
  /**
   * Dropdown list border.
   */
  'settings.dropdownListBorder'?: Color | string
  /**
   * Background color of a focused setting row.
   */
  'settings.focusedRowBackground'?: Color | string
  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  'settings.focusedRowBorder'?: Color | string
  /**
   * The foreground color for a section header or active title.
   */
  'settings.headerForeground'?: Color | string
  /**
   * The line that indicates a modified setting.
   */
  'settings.modifiedItemIndicator'?: Color | string
  /**
   * Number input box background.
   */
  'settings.numberInputBackground'?: Color | string
  /**
   * Number input box border.
   */
  'settings.numberInputBorder'?: Color | string
  /**
   * Number input box foreground.
   */
  'settings.numberInputForeground'?: Color | string
  /**
   * The background color of a settings row when hovered.
   */
  'settings.rowHoverBackground'?: Color | string
  /**
   * Text input box background.
   */
  'settings.textInputBackground'?: Color | string
  /**
   * Text input box border.
   */
  'settings.textInputBorder'?: Color | string
  /**
   * Text input box foreground.
   */
  'settings.textInputForeground'?: Color | string
  /**
   * Side Bar background color.
   */
  'sideBar.background'?: Color | string
  /**
   * Side Bar border color on the side separating the editor.
   */
  'sideBar.border'?: Color | string
  /**
   * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar
   * sections can still shine through.
   */
  'sideBar.dropBackground'?: Color | string
  /**
   * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
   */
  'sideBar.foreground'?: Color | string
  /**
   * Side Bar section header background color.
   */
  'sideBarSectionHeader.background'?: Color | string
  /**
   * Side bar section header border color.
   */
  'sideBarSectionHeader.border'?: Color | string
  /**
   * Side Bar section header foreground color.
   */
  'sideBarSectionHeader.foreground'?: Color | string
  /**
   * Side Bar title foreground color.
   */
  'sideBarTitle.foreground'?: Color | string
  /**
   * Color to separate two editors from each other when shown side by side in an editor group.
   */
  'sideBySideEditor.border'?: Color | string
  /**
   * Standard Status Bar background color.
   */
  'statusBar.background'?: Color | string
  /**
   * Status Bar border color separating the Status Bar and editor.
   */
  'statusBar.border'?: Color | string
  /**
   * Status Bar background color when a program is being debugged.
   */
  'statusBar.debuggingBackground'?: Color | string
  /**
   * Status Bar border color separating the Status Bar and editor when a program is being debugged.
   */
  'statusBar.debuggingBorder'?: Color | string
  /**
   * Status Bar foreground color when a program is being debugged.
   */
  'statusBar.debuggingForeground'?: Color | string
  /**
   * Status Bar foreground color.
   */
  'statusBar.foreground'?: Color | string
  /**
   * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBar.focusBorder'?: Color | string
  /**
   * Status Bar background color when no folder is opened.
   */
  'statusBar.noFolderBackground'?: Color | string
  /**
   * Status Bar border color separating the Status Bar and editor when no folder is opened.
   */
  'statusBar.noFolderBorder'?: Color | string
  /**
   * Status Bar foreground color when no folder is opened.
   */
  'statusBar.noFolderForeground'?: Color | string
  /**
   * Status Bar item background color when clicking.
   */
  'statusBarItem.activeBackground'?: Color | string
  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error
   * conditions.
   */
  'statusBarItem.errorBackground'?: Color | string
  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error
   * conditions.
   */
  'statusBarItem.errorForeground'?: Color | string
  /**
   * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the
   * window.
   */
  'statusBarItem.focusBorder'?: Color | string
  /**
   * Status Bar item background color when hovering.
   */
  'statusBarItem.hoverBackground'?: Color | string
  /**
   * Status Bar prominent items background color.
   */
  'statusBarItem.prominentBackground'?: Color | string
  /**
   * Status Bar prominent items foreground color.
   */
  'statusBarItem.prominentForeground'?: Color | string
  /**
   * Status Bar prominent items background color when hovering.
   */
  'statusBarItem.prominentHoverBackground'?: Color | string
  /**
   * Background color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteBackground'?: Color | string
  /**
   * Foreground color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteForeground'?: Color | string
  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate
   * warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningBackground'?: Color | string
  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate
   * warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningForeground'?: Color | string
  /**
   * The foreground color for array symbols.
   */
  'symbolIcon.arrayForeground'?: Color | string
  /**
   * The foreground color for boolean symbols.
   */
  'symbolIcon.booleanForeground'?: Color | string
  /**
   * The foreground color for class symbols.
   */
  'symbolIcon.classForeground'?: Color | string
  /**
   * The foreground color for color symbols.
   */
  'symbolIcon.colorForeground'?: Color | string
  /**
   * The foreground color for constant symbols.
   */
  'symbolIcon.constantForeground'?: Color | string
  /**
   * The foreground color for constructor symbols.
   */
  'symbolIcon.constructorForeground'?: Color | string
  /**
   * The foreground color for enumerator symbols.
   */
  'symbolIcon.enumeratorForeground'?: Color | string
  /**
   * The foreground color for enumerator member symbols.
   */
  'symbolIcon.enumeratorMemberForeground'?: Color | string
  /**
   * The foreground color for event symbols.
   */
  'symbolIcon.eventForeground'?: Color | string
  /**
   * The foreground color for field symbols.
   */
  'symbolIcon.fieldForeground'?: Color | string
  /**
   * The foreground color for file symbols.
   */
  'symbolIcon.fileForeground'?: Color | string
  /**
   * The foreground color for folder symbols.
   */
  'symbolIcon.folderForeground'?: Color | string
  /**
   * The foreground color for function symbols.
   */
  'symbolIcon.functionForeground'?: Color | string
  /**
   * The foreground color for interface symbols.
   */
  'symbolIcon.interfaceForeground'?: Color | string
  /**
   * The foreground color for key symbols.
   */
  'symbolIcon.keyForeground'?: Color | string
  /**
   * The foreground color for keyword symbols.
   */
  'symbolIcon.keywordForeground'?: Color | string
  /**
   * The foreground color for method symbols.
   */
  'symbolIcon.methodForeground'?: Color | string
  /**
   * The foreground color for module symbols.
   */
  'symbolIcon.moduleForeground'?: Color | string
  /**
   * The foreground color for namespace symbols.
   */
  'symbolIcon.namespaceForeground'?: Color | string
  /**
   * The foreground color for null symbols.
   */
  'symbolIcon.nullForeground'?: Color | string
  /**
   * The foreground color for number symbols.
   */
  'symbolIcon.numberForeground'?: Color | string
  /**
   * The foreground color for object symbols.
   */
  'symbolIcon.objectForeground'?: Color | string
  /**
   * The foreground color for operator symbols.
   */
  'symbolIcon.operatorForeground'?: Color | string
  /**
   * The foreground color for package symbols.
   */
  'symbolIcon.packageForeground'?: Color | string
  /**
   * The foreground color for property symbols.
   */
  'symbolIcon.propertyForeground'?: Color | string
  /**
   * The foreground color for reference symbols.
   */
  'symbolIcon.referenceForeground'?: Color | string
  /**
   * The foreground color for snippet symbols.
   */
  'symbolIcon.snippetForeground'?: Color | string
  /**
   * The foreground color for string symbols.
   */
  'symbolIcon.stringForeground'?: Color | string
  /**
   * The foreground color for struct symbols.
   */
  'symbolIcon.structForeground'?: Color | string
  /**
   * The foreground color for text symbols.
   */
  'symbolIcon.textForeground'?: Color | string
  /**
   * The foreground color for type parameter symbols.
   */
  'symbolIcon.typeParameterForeground'?: Color | string
  /**
   * The foreground color for unit symbols.
   */
  'symbolIcon.unitForeground'?: Color | string
  /**
   * The foreground color for variable symbols.
   */
  'symbolIcon.variableForeground'?: Color | string
  /**
   * Active Tab background color in an active group.
   */
  'tab.activeBackground'?: Color | string
  /**
   * Bottom border for the active tab.
   */
  'tab.activeBorder'?: Color | string
  /**
   * Top border for the active tab.
   */
  'tab.activeBorderTop'?: Color | string
  /**
   * Active Tab foreground color in an active group.
   */
  'tab.activeForeground'?: Color | string
  /**
   * Border on the top of modified (dirty) active tabs in an active group.
   */
  'tab.activeModifiedBorder'?: Color | string
  /**
   * Border to separate Tabs from each other.
   */
  'tab.border'?: Color | string
  /**
   * Tab background color when hovering
   */
  'tab.hoverBackground'?: Color | string
  /**
   * Border to highlight tabs when hovering
   */
  'tab.hoverBorder'?: Color | string
  /**
   * Tab foreground color when hovering
   */
  'tab.hoverForeground'?: Color | string
  /**
   * Inactive Tab background color.
   */
  'tab.inactiveBackground'?: Color | string
  /**
   * Inactive Tab foreground color in an active group.
   */
  'tab.inactiveForeground'?: Color | string
  /**
   * Border on the top of modified (dirty) inactive tabs in an active group.
   */
  'tab.inactiveModifiedBorder'?: Color | string
  /**
   * Border on the right of the last pinned editor to separate from unpinned editors.
   */
  'tab.lastPinnedBorder'?: Color | string
  /**
   * Active Tab background color in an inactive editor group.
   */
  'tab.unfocusedActiveBackground'?: Color | string
  /**
   * Bottom border for the active tab in an inactive editor group.
   */
  'tab.unfocusedActiveBorder'?: Color | string
  /**
   * Top border for the active tab in an inactive editor group
   */
  'tab.unfocusedActiveBorderTop'?: Color | string
  /**
   * Active tab foreground color in an inactive editor group.
   */
  'tab.unfocusedActiveForeground'?: Color | string
  /**
   * Border on the top of modified (dirty) active tabs in an unfocused group.
   */
  'tab.unfocusedActiveModifiedBorder'?: Color | string
  /**
   * Tab background color in an unfocused group when hovering
   */
  'tab.unfocusedHoverBackground'?: Color | string
  /**
   * Border to highlight tabs in an unfocused group when hovering
   */
  'tab.unfocusedHoverBorder'?: Color | string
  /**
   * Tab foreground color in an unfocused group when hovering
   */
  'tab.unfocusedHoverForeground'?: Color | string
  /**
   * Inactive Tab background color in an unfocused group
   */
  'tab.unfocusedInactiveBackground'?: Color | string
  /**
   * Inactive tab foreground color in an inactive editor group.
   */
  'tab.unfocusedInactiveForeground'?: Color | string
  /**
   * Border on the top of modified (dirty) inactive tabs in an unfocused group.
   */
  'tab.unfocusedInactiveModifiedBorder'?: Color | string
  /**
   * 'Black' ANSI color in the terminal.
   */
  'terminal.ansiBlack'?: Color | string
  /**
   * 'Blue' ANSI color in the terminal.
   */
  'terminal.ansiBlue'?: Color | string
  /**
   * 'BrightBlack' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlack'?: Color | string
  /**
   * 'BrightBlue' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlue'?: Color | string
  /**
   * 'BrightCyan' ANSI color in the terminal.
   */
  'terminal.ansiBrightCyan'?: Color | string
  /**
   * 'BrightGreen' ANSI color in the terminal.
   */
  'terminal.ansiBrightGreen'?: Color | string
  /**
   * 'BrightMagenta' ANSI color in the terminal.
   */
  'terminal.ansiBrightMagenta'?: Color | string
  /**
   * 'BrightRed' ANSI color in the terminal.
   */
  'terminal.ansiBrightRed'?: Color | string
  /**
   * 'BrightWhite' ANSI color in the terminal.
   */
  'terminal.ansiBrightWhite'?: Color | string
  /**
   * 'BrightYellow' ANSI color in the terminal.
   */
  'terminal.ansiBrightYellow'?: Color | string
  /**
   * 'Cyan' ANSI color in the terminal.
   */
  'terminal.ansiCyan'?: Color | string
  /**
   * 'Green' ANSI color in the terminal.
   */
  'terminal.ansiGreen'?: Color | string
  /**
   * 'Magenta' ANSI color in the terminal.
   */
  'terminal.ansiMagenta'?: Color | string
  /**
   * 'Red' ANSI color in the terminal.
   */
  'terminal.ansiRed'?: Color | string
  /**
   * 'White' ANSI color in the terminal.
   */
  'terminal.ansiWhite'?: Color | string
  /**
   * 'Yellow' ANSI color in the terminal.
   */
  'terminal.ansiYellow'?: Color | string
  /**
   * The background of the Integrated Terminal's viewport.
   */
  'terminal.background'?: Color | string
  /**
   * The color of the border that separates split panes within the terminal. This defaults to panel.border.
   */
  'terminal.border'?: Color | string
  /**
   * The background color when dragging on top of terminals. The color should have transparency so that the terminal
   * contents can still shine through.
   */
  'terminal.dropBackground'?: Color | string
  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying
   * terminal content.
   */
  'terminal.findMatchBackground'?: Color | string
  /**
   * Border color of the current search match in the terminal.
   */
  'terminal.findMatchBorder'?: Color | string
  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying
   * terminal content.
   */
  'terminal.findMatchHighlightBackground'?: Color | string
  /**
   * Border color of the other search matches in the terminal
   */
  'terminal.findMatchHighlightBorder'?: Color | string
  /**
   * The default foreground color of the Integrated Terminal.
   */
  'terminal.foreground'?: Color | string
  /**
   * The selection background color of the terminal.
   */
  'terminal.selectionBackground'?: Color | string
  /**
   * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
   */
  'terminal.tab.activeBorder'?: Color | string
  /**
   * The default terminal command decoration background color.
   */
  'terminalCommandDecoration.defaultBackground'?: Color | string
  /**
   * The terminal command decoration background color for successful commands.
   */
  'terminalCommandDecoration.successBackground'?: Color | string
  /**
   * The terminal command decoration background color for error commands.
   */
  'terminalCommandDecoration.errorBackground'?: Color | string
  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block
   * cursor.
   */
  'terminalCursor.background'?: Color | string
  /**
   * The foreground color of the terminal cursor.
   */
  'terminalCursor.foreground'?: Color | string
  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored'?: Color | string
  /**
   * Color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed'?: Color | string
  /**
   * Color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed'?: Color | string
  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued'?: Color | string
  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped'?: Color | string
  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset'?: Color | string
  /**
   * Text color of test error messages shown inline in the editor.
   */
  'testing.message.error.decorationForeground'?: Color | string
  /**
   * Margin color beside error messages shown inline in the editor.
   */
  'testing.message.error.lineBackground'?: Color | string
  /**
   * Text color of test info messages shown inline in the editor.
   */
  'testing.message.info.decorationForeground'?: Color | string
  /**
   * Margin color beside info messages shown inline in the editor.
   */
  'testing.message.info.lineBackground'?: Color | string
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekBorder'?: Color | string
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekHeaderBackground'?: Color | string
  /**
   * Color for 'run' icons in the editor.
   */
  'testing.runAction'?: Color | string
  /**
   * Background color for block quotes in text.
   */
  'textBlockQuote.background'?: Color | string
  /**
   * Border color for block quotes in text.
   */
  'textBlockQuote.border'?: Color | string
  /**
   * Background color for code blocks in text.
   */
  'textCodeBlock.background'?: Color | string
  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  'textLink.activeForeground'?: Color | string
  /**
   * Foreground color for links in text.
   */
  'textLink.foreground'?: Color | string
  /**
   * Foreground color for preformatted text segments.
   */
  'textPreformat.foreground'?: Color | string
  /**
   * Color for text separators.
   */
  'textSeparator.foreground'?: Color | string
  /**
   * Title Bar background when the window is active.
   */
  'titleBar.activeBackground'?: Color | string
  /**
   * Title Bar foreground when the window is active.
   */
  'titleBar.activeForeground'?: Color | string
  /**
   * Title bar border color.
   */
  'titleBar.border'?: Color | string
  /**
   * Title Bar background when the window is inactive.
   */
  'titleBar.inactiveBackground'?: Color | string
  /**
   * Title Bar foreground when the window is inactive.
   */
  'titleBar.inactiveForeground'?: Color | string
  /**
   * Toolbar background when holding the mouse over actions
   */
  'toolbar.activeBackground'?: Color | string
  /**
   * Toolbar background when hovering over actions using the mouse
   */
  'toolbar.hoverBackground'?: Color | string
  /**
   * Toolbar outline when hovering over actions using the mouse
   */
  'toolbar.hoverOutline'?: Color | string
  /**
   * Tree Widget's stroke color for indent guides.
   */
  'tree.indentGuidesStroke'?: Color | string
  /**
   * Tree stroke color for the indentation guides.
   */
  'tree.tableColumnsBorder'?: Color | string
  /**
   * Background color for the embedded editors on the Interactive Playground.
   */
  'walkThrough.embeddedEditorBackground'?: Color | string
  /**
   * Background color for the Welcome page.
   */
  'welcomePage.background'?: Color | string
  /**
   * Background color for the buttons on the Welcome page.
   */
  'welcomePage.buttonBackground'?: Color | string
  /**
   * Hover background color for the buttons on the Welcome page.
   */
  'welcomePage.buttonHoverBackground'?: Color | string
  /**
   * Foreground color for the Welcome page progress bars.
   */
  'welcomePage.progress.background'?: Color | string
  /**
   * Background color for the Welcome page progress bars.
   */
  'welcomePage.progress.foreground'?: Color | string
  /**
   * Background color for the tiles on the Get Started page.
   */
  'welcomePage.tileBackground'?: Color | string
  /**
   * Hover background color for the tiles on the Get Started.
   */
  'welcomePage.tileHoverBackground'?: Color | string
  /**
   * Shadow color for the Welcome page walkthrough category buttons.
   */
  'welcomePage.tileShadow.'?: Color | string
  /**
   * Shadow color of widgets such as Find/Replace inside the editor.
   */
  'widget.shadow'?: Color | string
  /**
   * Border color for the active (focused) window.
   */
  'window.activeBorder'?: Color | string
  /**
   * Border color for the inactive (unfocused) windows.
   */
  'window.inactiveBorder'?: Color | string


  // -- GitHub Pull Requests & Issues

  /**
   * The color used for the assignees and labels fields in a new issue editor.
   */
  'issues.newIssueDecoration'?: Color | string
  /**
   * The color used for indicating that an issue is open.
   */
  'issues.open'?: Color | string
  /**
   * The color used for indicating that an issue is closed.
   */
  'issues.closed'?: Color | string


  // -- Error Lens

  'errorLens.errorBackground'?: Color | string
  'errorLens.errorBackgroundLight'?: Color | string
  'errorLens.errorForeground'?: Color | string
  'errorLens.errorForegroundLight'?: Color | string
  'errorLens.errorMessageBackground'?: Color | string
  'errorLens.hintBackground'?: Color | string
  'errorLens.hintBackgroundLight'?: Color | string
  'errorLens.hintForeground'?: Color | string
  'errorLens.hintForegroundLight'?: Color | string
  'errorLens.hintMessageBackground'?: Color | string
  'errorLens.infoBackground'?: Color | string
  'errorLens.infoBackgroundLight'?: Color | string
  'errorLens.infoForeground'?: Color | string
  'errorLens.infoForegroundLight'?: Color | string
  'errorLens.infoMessageBackground'?: Color | string
  'errorLens.warningBackground'?: Color | string
  'errorLens.warningBackgroundLight'?: Color | string
  'errorLens.warningForeground'?: Color | string
  'errorLens.warningForegroundLight'?: Color | string
  'errorLens.warningMessageBackground'?: Color | string


  // -- GitLens

  'gitlens.closedPullRequestIconColor'?: Color | string
  'gitlens.decorations.addedForegroundColor'?: Color | string
  'gitlens.decorations.branchAheadForegroundColor'?: Color | string
  'gitlens.decorations.branchBehindForegroundColor'?: Color | string
  'gitlens.decorations.branchDivergedForegroundColor'?: Color | string
  'gitlens.decorations.branchUnpublishedForegroundColor'?: Color | string
  'gitlens.decorations.branchUpToDateForegroundColor'?: Color | string
  'gitlens.decorations.copiedForegroundColor'?: Color | string
  'gitlens.decorations.deletedForegroundColor'?: Color | string
  'gitlens.decorations.ignoredForegroundColor'?: Color | string
  'gitlens.decorations.modifiedForegroundColor'?: Color | string
  'gitlens.decorations.renamedForegroundColor'?: Color | string
  'gitlens.decorations.untrackedForegroundColor'?: Color | string
  'gitlens.gutterBackgroundColor'?: Color | string
  'gitlens.gutterForegroundColor'?: Color | string
  'gitlens.gutterUncommittedForegroundColor'?: Color | string
  'gitlens.lineHighlightBackgroundColor'?: Color | string
  'gitlens.lineHighlightOverviewRulerColor'?: Color | string
  'gitlens.mergedPullRequestIconColor'?: Color | string
  'gitlens.openPullRequestIconColor'?: Color | string
  'gitlens.trailingLineBackgroundColor'?: Color | string
  'gitlens.trailingLineForegroundColor'?: Color | string
  'gitlens.unpublishedCommitIconColor'?: Color | string
  'gitlens.unpulledChangesIconColor'?: Color | string
  'gitlens.unpushlishedChangesIconColor'?: Color | string


  // -- LintLens

  'lintlens.annotationColor'?: Color | string


  // -- Bookmarks

  'bookmarks.overviewRuler'?: Color | string
  'bookmarks.lineBackground'?: Color | string
  'bookmarks.lineBorder'?: Color | string


  // -- Test Explorer

  'testExplorer.errorDecorationBackground'?: Color | string


  // -- SQL Tools
  'sqltools.currentQueryBg'?: Color | string
  'sqltools.currentQueryOutline'?: Color | string


  // -- File Watcher

  'filewatcher.error'?: Color | string

  toJSON?(): Record<string, string>
}

export {
  UIColourPalette,
}
