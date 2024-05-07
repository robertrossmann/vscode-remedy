import type * as Color from 'color'

type ColourLike = Color | string

interface UIColourPalette {
  /**
   * Activity Bar optional background color for the active element.
   */
  'activityBar.activeBackground'?: ColourLike
  /**
   * Activity Bar active indicator border color.
   */
  'activityBar.activeBorder'?: ColourLike
  /**
   * Activity bar focus border color for the active item.
   */
  'activityBar.activeFocusBorder'?: ColourLike
  /**
   * Activity Bar background color.
   */
  'activityBar.background'?: ColourLike
  /**
   * Activity Bar border color with the Side Bar.
   */
  'activityBar.border'?: ColourLike
  /**
   * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and
   * allows to switch between views of the side bar.
   */
  'activityBar.dropBorder'?: ColourLike
  /**
   * Activity Bar foreground color (for example used for the icons).
   */
  'activityBar.foreground'?: ColourLike
  /**
   * Activity Bar item foreground color when it is inactive.
   */
  'activityBar.inactiveForeground'?: ColourLike
  /**
   * Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between
   * views of the side bar.
   */
  'activityBarTop.foreground'?: ColourLike
  /**
   * Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between
   * views of the side bar.
   */
  'activityBarTop.activeBorder'?: ColourLike
  /**
   * Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between
   * views of the side bar.
   */
  'activityBarTop.inactiveForeground'?: ColourLike
  /**
   * Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch
   * between views of the side bar.
   */
  'activityBarTop.dropBorder'?: ColourLike
  /**
   * Background color of the activity bar when set to top / bottom.
   */
  'activityBarTop.background'?: ColourLike
  /**
   * Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch
   * between views of the side bar.
   */
  'activityBarTop.activeBackground'?: ColourLike
  /**
   * Activity notification badge background color.
   */
  'activityBarBadge.background'?: ColourLike
  /**
   * Activity notification badge foreground color.
   */
  'activityBarBadge.foreground'?: ColourLike
  /**
   * Badge background color.
   */
  'badge.background'?: ColourLike
  /**
   * Badge foreground color.
   */
  'badge.foreground'?: ColourLike
  /**
   * Banner background color.
   */
  'banner.background'?: ColourLike
  /**
   * Banner foreground color.
   */
  'banner.foreground'?: ColourLike
  /**
   * Color for the icon in front of the banner text.
   */
  'banner.iconForeground'?: ColourLike
  /**
   * Color of selected breadcrumb items.
   */
  'breadcrumb.activeSelectionForeground'?: ColourLike
  /**
   * Background color of breadcrumb items.
   */
  'breadcrumb.background'?: ColourLike
  /**
   * Color of focused breadcrumb items.
   */
  'breadcrumb.focusForeground'?: ColourLike
  /**
   * Color of breadcrumb items.
   */
  'breadcrumb.foreground'?: ColourLike
  /**
   * Background color of breadcrumb item picker.
   */
  'breadcrumbPicker.background'?: ColourLike
  /**
   * Button background color.
   */
  'button.background'?: ColourLike
  /**
   * Button border color.
   */
  'button.border'?: ColourLike
  /**
   * Button foreground color.
   */
  'button.foreground'?: ColourLike
  /**
   * Button background color when hovering.
   */
  'button.hoverBackground'?: ColourLike
  /**
   * Secondary button background color.
   */
  'button.secondaryBackground'?: ColourLike
  /**
   * Secondary button foreground color.
   */
  'button.secondaryForeground'?: ColourLike
  /**
   * Secondary button background color when hovering.
   */
  'button.secondaryHoverBackground'?: ColourLike
  /**
   * Color for blue elements in charts.
   */
  'charts.blue'?: ColourLike
  /**
   * Contrast color for text in charts.
   */
  'charts.foreground'?: ColourLike
  /**
   * Color for green elements in charts.
   */
  'charts.green'?: ColourLike
  /**
   * Color for lines in charts.
   */
  'charts.lines'?: ColourLike
  /**
   * Color for orange elements in charts.
   */
  'charts.orange'?: ColourLike
  /**
   * Color for purple elements in charts.
   */
  'charts.purple'?: ColourLike
  /**
   * Color for red elements in charts.
   */
  'charts.red'?: ColourLike
  /**
   * Color for yellow elements in charts.
   */
  'charts.yellow'?: ColourLike
  /**
   * The border color of a chat request.
   */
  'chat.requestBorder'?: ColourLike
  /**
   * The background color of a chat request.
   */
  'chat.requestBackground'?: ColourLike
  /**
   * The background color of a chat slash command.
   */
  'chat.slashCommandBackground'?: ColourLike
  /**
   * The foreground color of a chat slash command.
   */
  'chat.slashCommandForeground'?: ColourLike
  /**
   * The background color of a chat avatar.
   */
  'chat.avatarBackground'?: ColourLike
  /**
   * The foreground color of a chat avatar.
   */
  'chat.avatarForeground'?: ColourLike
  /**
   * Background color of checkbox widget.
   */
  'checkbox.background'?: ColourLike
  /**
   * Border color of checkbox widget.
   */
  'checkbox.border'?: ColourLike
  /**
   * Foreground color of checkbox widget.
   */
  'checkbox.foreground'?: ColourLike
  /**
   * Background color of the command center.
   */
  'commandCenter.background'?: ColourLike
  /**
   * Border color of the command center.
   */
  'commandCenter.border'?: ColourLike
  /**
   * Foreground color of the command center.
   */
  'commandCenter.foreground'?: ColourLike
  /**
   * Active foreground color of the command center.
   */
  'commandCenter.activeForeground'?: ColourLike
  /**
   * Active background color of the command center.
   */
  'commandCenter.activeBackground'?: ColourLike
  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  'contrastActiveBorder'?: ColourLike
  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  'contrastBorder'?: ColourLike
  /**
   * Foreground color for error messages in debug REPL console.
   */
  'debugConsole.errorForeground'?: ColourLike
  /**
   * Foreground color for info messages in debug REPL console.
   */
  'debugConsole.infoForeground'?: ColourLike
  /**
   * Foreground color for source filenames in debug REPL console.
   */
  'debugConsole.sourceForeground'?: ColourLike
  /**
   * Foreground color for warning messages in debug REPL console.
   */
  'debugConsole.warningForeground'?: ColourLike
  /**
   * Foreground color for debug console input marker icon.
   */
  'debugConsoleInputIcon.foreground'?: ColourLike
  /**
   * Exception widget background color.
   */
  'debugExceptionWidget.background'?: ColourLike
  /**
   * Exception widget border color.
   */
  'debugExceptionWidget.border'?: ColourLike
  /**
   * Icon color for the current breakpoint stack frame.
   */
  'debugIcon.breakpointCurrentStackframeForeground'?: ColourLike
  /**
   * Icon color for disabled breakpoints.
   */
  'debugIcon.breakpointDisabledForeground'?: ColourLike
  /**
   * Icon color for breakpoints.
   */
  'debugIcon.breakpointForeground'?: ColourLike
  /**
   * Icon color for all breakpoint stack frames.
   */
  'debugIcon.breakpointStackframeForeground'?: ColourLike
  /**
   * Icon color for unverified breakpoints.
   */
  'debugIcon.breakpointUnverifiedForeground'?: ColourLike
  /**
   * Debug toolbar icon for continue.
   */
  'debugIcon.continueForeground'?: ColourLike
  /**
   * Debug toolbar icon for disconnect.
   */
  'debugIcon.disconnectForeground'?: ColourLike
  /**
   * Debug toolbar icon for pause.
   */
  'debugIcon.pauseForeground'?: ColourLike
  /**
   * Debug toolbar icon for restart.
   */
  'debugIcon.restartForeground'?: ColourLike
  /**
   * Debug toolbar icon for start debugging.
   */
  'debugIcon.startForeground'?: ColourLike
  /**
   * Debug toolbar icon for step back.
   */
  'debugIcon.stepBackForeground'?: ColourLike
  /**
   * Debug toolbar icon for step into.
   */
  'debugIcon.stepIntoForeground'?: ColourLike
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOutForeground'?: ColourLike
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOverForeground'?: ColourLike
  /**
   * Debug toolbar icon for stop.
   */
  'debugIcon.stopForeground'?: ColourLike
  /**
   * Foreground color for booleans in debug views
   */
  'debugTokenExpression.boolean'?: ColourLike
  /**
   * Foreground color for expression errors in debug views
   */
  'debugTokenExpression.error'?: ColourLike
  /**
   * Foreground color for the token names shown in debug views (ie. the Variables or Watch view)
   */
  'debugTokenExpression.name'?: ColourLike
  /**
   * Foreground color for numbers in debug views
   */
  'debugTokenExpression.number'?: ColourLike
  /**
   * Foreground color for strings in debug views
   */
  'debugTokenExpression.string'?: ColourLike
  /**
   * Foreground color for the token values shown in debug views
   */
  'debugTokenExpression.value'?: ColourLike
  /**
   * Debug toolbar background color.
   */
  'debugToolBar.background'?: ColourLike
  /**
   * Debug toolbar border color.
   */
  'debugToolBar.border'?: ColourLike
  /**
   * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
   */
  'debugView.exceptionLabelBackground'?: ColourLike
  /**
   * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
   */
  'debugView.exceptionLabelForeground'?: ColourLike
  /**
   * Background color for a label in the CALL STACK view showing the current session's or thread's state
   */
  'debugView.stateLabelBackground'?: ColourLike
  /**
   * Foreground color for a label in the CALL STACK view showing the current session's or thread's state
   */
  'debugView.stateLabelForeground'?: ColourLike
  /**
   * Color used to highlight value changes in the debug views (ie. in the Variables view)
   */
  'debugView.valueChangedHighlight'?: ColourLike
  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  'descriptionForeground'?: ColourLike
  /**
   * Border color between the two text editors.
   */
  'diffEditor.border'?: ColourLike
  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  'diffEditor.diagonalFill'?: ColourLike
  /**
   * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedTextBackground'?: ColourLike
  /**
   * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'diffEditor.insertedLineBackground'?: ColourLike
  /**
   * Outline color for the text that got inserted.
   */
  'diffEditor.insertedTextBorder'?: ColourLike
  /**
   * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedLineBackground'?: ColourLike
  /**
   * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedTextBackground'?: ColourLike
  /**
   * Outline color for text that got removed.
   */
  'diffEditor.removedTextBorder'?: ColourLike
  /**
   * Background color for the margin where lines got inserted.
   */
  'diffEditorGutter.insertedLineBackground'?: ColourLike
  /**
   * Background color for the margin where lines got removed.
   */
  'diffEditorGutter.removedLineBackground'?: ColourLike
  /**
   * Diff overview ruler foreground for inserted content.
   */
  'diffEditorOverview.insertedForeground'?: ColourLike
  /**
   * Diff overview ruler foreground for removed content.
   */
  'diffEditorOverview.removedForeground'?: ColourLike
  /**
   * The color of unchanged blocks in diff editor.
   */
  'diffEditor.unchangedRegionBackground'?: ColourLike
  /**
   * The foreground color of unchanged blocks in the diff editor.
   */
  'diffEditor.unchangedRegionForeground'?: ColourLike
  /**
   * The color of the shadow around unchanged region widgets.
   */
  'diffEditor.unchangedRegionShadow'?: ColourLike
  /**
   * The background color of unchanged code in the diff editor.
   */
  'diffEditor.unchangedCodeBackground'?: ColourLike
  /**
   * The border color for text that got moved in the diff editor.
   */
  'diffEditor.move.border'?: ColourLike
  /**
   * The active border color for text that got moved in the diff editor.
   */
  'diffEditor.moveActive.border'?: ColourLike
  /**
   * The background color of the diff editor's header.
   */
  'multiDiffEditor.headerBackground'?: ColourLike
  /**
   * The background color of the multi file diff editor.
   */
  'multiDiffEditor.background'?: ColourLike
  /**
   * The border color of the multi file diff editor.
   */
  'multiDiffEditor.border'?: ColourLike
  /**
   * Dropdown background.
   */
  'dropdown.background'?: ColourLike
  /**
   * Dropdown border.
   */
  'dropdown.border'?: ColourLike
  /**
   * Dropdown foreground.
   */
  'dropdown.foreground'?: ColourLike
  /**
   * Dropdown list background.
   */
  'dropdown.listBackground'?: ColourLike
  /**
   * Editor background color.
   */
  'editor.background'?: ColourLike
  /**
   * Color of the current search match.
   */
  'editor.findMatchBackground'?: ColourLike
  /**
   * Border color of the current search match.
   */
  'editor.findMatchBorder'?: ColourLike
  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findMatchHighlightBackground'?: ColourLike
  /**
   * Border color of the other search matches.
   */
  'editor.findMatchHighlightBorder'?: ColourLike
  /**
   * Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque
   * so as not to hide underlying decorations.
   */
  'editor.findRangeHighlightBackground'?: ColourLike
  /**
   * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
   */
  'editor.findRangeHighlightBorder'?: ColourLike
  /**
   * Background color of the focused stack frame highlight in the editor.
   */
  'editor.focusedStackFrameHighlightBackground'?: ColourLike
  /**
   * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.foldBackground'?: ColourLike
  /**
   * Editor default foreground color.
   */
  'editor.foreground'?: ColourLike
  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.hoverHighlightBackground'?: ColourLike
  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.inactiveSelectionBackground'?: ColourLike
  /**
   * Color for the debug inline value background.
   */
  'editor.inlineValuesBackground'?: ColourLike
  /**
   * Color for the debug inline value text.
   */
  'editor.inlineValuesForeground'?: ColourLike
  /**
   * Background color for the highlight of line at the cursor position.
   */
  'editor.lineHighlightBackground'?: ColourLike
  /**
   * Background color for the border around the line at the cursor position.
   */
  'editor.lineHighlightBorder'?: ColourLike
  /**
   * Background color when the editor is in linked editing mode.
   */
  'editor.linkedEditingBackground'?: ColourLike
  /**
   * Background color when the editor auto renames on type.
   */
  'editor.onTypeRenameBackground'?: ColourLike
  /**
   * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be
   * opaque so as not to hide underlying decorations.
   */
  'editor.rangeHighlightBackground'?: ColourLike
  /**
   * Background color of the border around highlighted ranges.
   */
  'editor.rangeHighlightBorder'?: ColourLike
  /**
   * Color of the editor selection.
   */
  'editor.selectionBackground'?: ColourLike
  /**
   * Color of the selected text for high contrast.
   */
  'editor.selectionForeground'?: ColourLike
  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editor.selectionHighlightBackground'?: ColourLike
  /**
   * Border color for regions with the same content as the selection.
   */
  'editor.selectionHighlightBorder'?: ColourLike
  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBackground'?: ColourLike
  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBorder'?: ColourLike
  /**
   * Highlight background color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBackground'?: ColourLike
  /**
   * Highlight border color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBorder'?: ColourLike
  /**
   * Background color of the top stack frame highlight in the editor.
   */
  'editor.stackFrameHighlightBackground'?: ColourLike
  /**
   * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.symbolHighlightBackground'?: ColourLike
  /**
   * Background color of the border around highlighted symbols.
   */
  'editor.symbolHighlightBorder'?: ColourLike
  /**
   * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque
   * so as not to hide underlying decorations.
   */
  'editor.wordHighlightBackground'?: ColourLike
  /**
   * Border color of a symbol during read-access, for example when reading a variable.
   */
  'editor.wordHighlightBorder'?: ColourLike
  /**
   * Background color of a symbol during write-access, for example when writing to a variable. The color must not be
   * opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightStrongBackground'?: ColourLike
  /**
   * Border color of a symbol during write-access, for example when writing to a variable.
   */
  'editor.wordHighlightStrongBorder'?: ColourLike
  /**
   * Foreground color of brackets (1). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground1'?: ColourLike
  /**
   * Foreground color of brackets (2). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground2'?: ColourLike
  /**
   * Foreground color of brackets (3). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground3'?: ColourLike
  /**
   * Foreground color of brackets (4). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground4'?: ColourLike
  /**
   * Foreground color of brackets (5). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground5'?: ColourLike
  /**
   * Foreground color of brackets (6). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground6'?: ColourLike
  /**
   * Foreground color of unexpected brackets.
   */
  'editorBracketHighlight.unexpectedBracket.foreground'?: ColourLike
  /**
   * Background color behind matching brackets.
   */
  'editorBracketMatch.background'?: ColourLike
  /**
   * Color for matching brackets boxes.
   */
  'editorBracketMatch.border'?: ColourLike
  /**
   * Foreground color of an editor CodeLens.
   */
  'editorCodeLens.foreground'?: ColourLike
  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block
   * cursor.
   */
  'editorCursor.background'?: ColourLike
  /**
   * Color of the editor cursor.
   */
  'editorCursor.foreground'?: ColourLike
  /**
   * Color of the primary editor cursor when multiple cursors are present.
   */
  'editorMultiCursor.primary.foreground'?: ColourLike
  /**
   * The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.primary.background'?: ColourLike
  /**
   * Color of secondary editor cursors when multiple cursors are present.
   */
  'editorMultiCursor.secondary.foreground'?: ColourLike
  /**
   * The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.secondary.background'?: ColourLike
  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorError.background'?: ColourLike
  /**
   * Border color of error boxes in the editor.
   */
  'editorError.border'?: ColourLike
  /**
   * Foreground color of error squiggles in the editor.
   */
  'editorError.foreground'?: ColourLike
  /**
   * Border color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.border'?: ColourLike
  /**
   * Background color of the ghost text in the editor.
   */
  'editorGhostText.background'?: ColourLike
  /**
   * Foreground color of the ghost text shown by inline completion providers and the suggest preview.
   */
  'editorGhostText.foreground'?: ColourLike
  /**
   * Color to separate multiple editor groups from each other.
   */
  'editorGroup.border'?: ColourLike
  /**
   * Background color when dragging editors around.
   */
  'editorGroup.dropBackground'?: ColourLike
  /**
   * Background color of an empty editor group.
   */
  'editorGroup.emptyBackground'?: ColourLike
  /**
   * Border color of an empty editor group that is focused.
   */
  'editorGroup.focusedEmptyBorder'?: ColourLike
  /**
   * Border color between editor group header and editor (below breadcrumbs if enabled).
   */
  'editorGroupHeader.border'?: ColourLike
  /**
   * Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
   */
  'editorGroupHeader.noTabsBackground'?: ColourLike
  /**
   * Background color of the Tabs container.
   */
  'editorGroupHeader.tabsBackground'?: ColourLike
  /**
   * Border color below the editor tabs control when tabs are enabled.
   */
  'editorGroupHeader.tabsBorder'?: ColourLike
  /**
   * Editor gutter background color for lines that are added.
   */
  'editorGutter.addedBackground'?: ColourLike
  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  'editorGutter.background'?: ColourLike
  /**
   * Editor gutter decoration color for commenting ranges.
   */
  'editorGutter.commentRangeForeground'?: ColourLike
  /**
   * Editor gutter background color for lines that are deleted.
   */
  'editorGutter.deletedBackground'?: ColourLike
  /**
   * Color of the folding control in the editor gutter.
   */
  'editorGutter.foldingControlForeground'?: ColourLike
  /**
   * Editor gutter background color for lines that are modified.
   */
  'editorGutter.modifiedBackground'?: ColourLike
  /**
   * Border color of hint boxes in the editor.
   */
  'editorHint.border'?: ColourLike
  /**
   * Foreground color of hints in the editor.
   */
  'editorHint.foreground'?: ColourLike
  /**
   * Background color of the editor hover.
   */
  'editorHoverWidget.background'?: ColourLike
  /**
   * Border color of the editor hover.
   */
  'editorHoverWidget.border'?: ColourLike
  /**
   * Foreground color of the editor hover.
   */
  'editorHoverWidget.foreground'?: ColourLike
  /**
   * Background color of the editor hover status bar.
   */
  'editorHoverWidget.statusBarBackground'?: ColourLike
  /**
   * Color of the active editor indentation guide.
   */
  'editorIndentGuide.activeBackground'?: ColourLike
  /**
   * Color of the editor indentation guides.
   */
  'editorIndentGuide.background'?: ColourLike
  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorInfo.background'?: ColourLike
  /**
   * Border color of info boxes in the editor.
   */
  'editorInfo.border'?: ColourLike
  /**
   * Foreground color of info squiggles in the editor.
   */
  'editorInfo.foreground'?: ColourLike
  /**
   * Background color of inline hints.
   */
  'editorInlayHint.background'?: ColourLike
  /**
   * Foreground color of inline hints.
   */
  'editorInlayHint.foreground'?: ColourLike
  /**
   * Background color of inline hints for parameters
   */
  'editorInlayHint.parameterBackground'?: ColourLike
  /**
   * Foreground color of inline hints for parameters
   */
  'editorInlayHint.parameterForeground'?: ColourLike
  /**
   * Background color of inline hints for types
   */
  'editorInlayHint.typeBackground'?: ColourLike
  /**
   * Foreground color of inline hints for types
   */
  'editorInlayHint.typeForeground'?: ColourLike
  /**
   * The color used for the lightbulb actions icon.
   */
  'editorLightBulb.foreground'?: ColourLike
  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  'editorLightBulbAutoFix.foreground'?: ColourLike
  /**
   * Color of the active editor line number.
   */
  'editorLineNumber.activeForeground'?: ColourLike
  /**
   * Color of editor line numbers.
   */
  'editorLineNumber.foreground'?: ColourLike
  /**
   * Color of active links.
   */
  'editorLink.activeForeground'?: ColourLike
  /**
   * Editor marker navigation widget background.
   */
  'editorMarkerNavigation.background'?: ColourLike
  /**
   * Editor marker navigation widget error color.
   */
  'editorMarkerNavigationError.background'?: ColourLike
  /**
   * Editor marker navigation widget error heading background.
   */
  'editorMarkerNavigationError.headerBackground'?: ColourLike
  /**
   * Editor marker navigation widget info color.
   */
  'editorMarkerNavigationInfo.background'?: ColourLike
  /**
   * Editor marker navigation widget info heading background.
   */
  'editorMarkerNavigationInfo.headerBackground'?: ColourLike
  /**
   * Editor marker navigation widget warning color.
   */
  'editorMarkerNavigationWarning.background'?: ColourLike
  /**
   * Editor marker navigation widget warning heading background.
   */
  'editorMarkerNavigationWarning.headerBackground'?: ColourLike
  /**
   * Overview ruler marker color for added content.
   */
  'editorOverviewRuler.addedForeground'?: ColourLike
  /**
   * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side
   * of the editor.
   */
  'editorOverviewRuler.background'?: ColourLike
  /**
   * Color of the overview ruler border.
   */
  'editorOverviewRuler.border'?: ColourLike
  /**
   * Overview ruler marker color for matching brackets.
   */
  'editorOverviewRuler.bracketMatchForeground'?: ColourLike
  /**
   * Common ancestor overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.commonContentForeground'?: ColourLike
  /**
   * Current overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.currentContentForeground'?: ColourLike
  /**
   * Overview ruler marker color for deleted content.
   */
  'editorOverviewRuler.deletedForeground'?: ColourLike
  /**
   * Overview ruler marker color for errors.
   */
  'editorOverviewRuler.errorForeground'?: ColourLike
  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.findMatchForeground'?: ColourLike
  /**
   * Incoming overview ruler foreground for inline merge conflicts.
   */
  'editorOverviewRuler.incomingContentForeground'?: ColourLike
  /**
   * Overview ruler marker color for infos.
   */
  'editorOverviewRuler.infoForeground'?: ColourLike
  /**
   * Overview ruler marker color for modified content.
   */
  'editorOverviewRuler.modifiedForeground'?: ColourLike
  /**
   * Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The
   * color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.rangeHighlightForeground'?: ColourLike
  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.selectionHighlightForeground'?: ColourLike
  /**
   * Overview ruler marker color for warnings.
   */
  'editorOverviewRuler.warningForeground'?: ColourLike
  /**
   * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorOverviewRuler.wordHighlightForeground'?: ColourLike
  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'editorOverviewRuler.wordHighlightStrongForeground'?: ColourLike
  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  'editorPane.background'?: ColourLike
  /**
   * Color of the editor rulers.
   */
  'editorRuler.foreground'?: ColourLike
  /**
   * Editor sticky scroll background color.
   */
  'editorStickyScroll.background'?: ColourLike
  /**
   * Editor sticky scroll on hover background color.
   */
  'editorStickyScrollHover.background'?: ColourLike
  /**
   * Background color of the suggestion widget.
   */
  'editorSuggestWidget.background'?: ColourLike
  /**
   * Border color of the suggestion widget.
   */
  'editorSuggestWidget.border'?: ColourLike
  /**
   * Color of the match highlights in the suggest widget when an item is focused.
   */
  'editorSuggestWidget.focusHighlightForeground'?: ColourLike
  /**
   * Foreground color of the suggestion widget.
   */
  'editorSuggestWidget.foreground'?: ColourLike
  /**
   * Color of the match highlights in the suggestion widget.
   */
  'editorSuggestWidget.highlightForeground'?: ColourLike
  /**
   * Background color of the selected entry in the suggestion widget.
   */
  'editorSuggestWidget.selectedBackground'?: ColourLike
  /**
   * Foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedForeground'?: ColourLike
  /**
   * Icon foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedIconForeground'?: ColourLike
  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  'editorUnnecessaryCode.border'?: ColourLike
  /**
   * Opacity of unnecessary (unused) source code in the editor.
   *
   * For example, "#000000c0" will render the code with 75%
   * opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code
   * instead of fading it out.
   */
  'editorUnnecessaryCode.opacity'?: ColourLike
  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'editorWarning.background'?: ColourLike
  /**
   * Border color of warning boxes in the editor.
   */
  'editorWarning.border'?: ColourLike
  /**
   * Foreground color of warning squiggles in the editor.
   */
  'editorWarning.foreground'?: ColourLike
  /**
   * Color of whitespace characters in the editor.
   */
  'editorWhitespace.foreground'?: ColourLike
  /**
   * Background color of editor widgets, such as Find/Replace.
   */
  'editorWidget.background'?: ColourLike
  /**
   * Border color of the editor widget unless the widget does not contain a border or defines its own border color.
   */
  'editorWidget.border'?: ColourLike
  /**
   * Foreground color of editor widgets, such as find/replace.
   */
  'editorWidget.foreground'?: ColourLike
  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize
   * border and if the color is not overridden by a widget.
   */
  'editorWidget.resizeBorder'?: ColourLike
  /**
   * Overall foreground color for error messages (this color is only used if not overridden by a component).
   */
  'errorForeground'?: ColourLike
  /**
   * Background color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteBackground'?: ColourLike
  /**
   * Foreground color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteForeground'?: ColourLike
  /**
   * Extension view button background color.
   */
  'extensionButton.prominentBackground'?: ColourLike
  /**
   * Extension view button foreground color (for example Install button).
   */
  'extensionButton.prominentForeground'?: ColourLike
  /**
   * Extension view button background hover color.
   */
  'extensionButton.prominentHoverBackground'?: ColourLike
  /**
   * The icon color for pre-release extension.
   */
  'extensionIcon.preReleaseForeground'?: ColourLike
  /**
   * The icon color for extension sponsor.
   */
  'extensionIcon.sponsorForeground'?: ColourLike
  /**
   * The icon color for extension ratings.
   */
  'extensionIcon.starForeground'?: ColourLike
  /**
   * The icon color for extension verified publisher.
   */
  'extensionIcon.verifiedForeground'?: ColourLike
  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  'focusBorder'?: ColourLike
  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  'foreground'?: ColourLike
  /**
   * Color for added Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.addedResourceForeground'?: ColourLike
  /**
   * Color for conflicting Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.conflictingResourceForeground'?: ColourLike
  /**
   * Color for deleted Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.deletedResourceForeground'?: ColourLike
  /**
   * Color for ignored Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.ignoredResourceForeground'?: ColourLike
  /**
   * Color for modified Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.modifiedResourceForeground'?: ColourLike
  /**
   * Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.renamedResourceForeground'?: ColourLike
  /**
   * Color for staged deletions git decorations. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageDeletedResourceForeground'?: ColourLike
  /**
   * Color for staged modifications git decorations. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageModifiedResourceForeground'?: ColourLike
  /**
   * Color for submodule resources.
   */
  'gitDecoration.submoduleResourceForeground'?: ColourLike
  /**
   * Color for untracked Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.untrackedResourceForeground'?: ColourLike
  /**
   * The default color for icons in the workbench.
   */
  'icon.foreground'?: ColourLike
  /**
   * Input box background.
   */
  'input.background'?: ColourLike
  /**
   * Input box border.
   */
  'input.border'?: ColourLike
  /**
   * Input box foreground.
   */
  'input.foreground'?: ColourLike
  /**
   * Input box foreground color for placeholder text.
   */
  'input.placeholderForeground'?: ColourLike
  /**
   * Background color of activated options in input fields.
   */
  'inputOption.activeBackground'?: ColourLike
  /**
   * Border color of activated options in input fields.
   */
  'inputOption.activeBorder'?: ColourLike
  /**
   * Foreground color of activated options in input fields.
   */
  'inputOption.activeForeground'?: ColourLike
  /**
   * Input validation background color for error severity.
   */
  'inputValidation.errorBackground'?: ColourLike
  /**
   * Input validation border color for error severity.
   */
  'inputValidation.errorBorder'?: ColourLike
  /**
   * Input validation foreground color for error severity.
   */
  'inputValidation.errorForeground'?: ColourLike
  /**
   * Input validation background color for information severity.
   */
  'inputValidation.infoBackground'?: ColourLike
  /**
   * Input validation border color for information severity.
   */
  'inputValidation.infoBorder'?: ColourLike
  /**
   * Input validation foreground color for information severity.
   */
  'inputValidation.infoForeground'?: ColourLike
  /**
   * Input validation background color for information warning.
   */
  'inputValidation.warningBackground'?: ColourLike
  /**
   * Input validation border color for warning severity.
   */
  'inputValidation.warningBorder'?: ColourLike
  /**
   * Input validation foreground color for warning severity.
   */
  'inputValidation.warningForeground'?: ColourLike
  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.background'?: ColourLike
  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.border'?: ColourLike
  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.bottomBorder'?: ColourLike
  /**
   * Background color for the keyboard shortcuts table header.
   */
  'keybindingTable.headerBackground'?: ColourLike
  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  'keybindingTable.rowsBackground'?: ColourLike
  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.foreground'?: ColourLike
  /**
   * List/Tree background color for the selected item when the list/tree is active.
   */
  'list.activeSelectionBackground'?: ColourLike
  /**
   * List/Tree foreground color for the selected item when the list/tree is active.
   */
  'list.activeSelectionForeground'?: ColourLike
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has
   * keyboard focus, an inactive does not.
   */
  'list.activeSelectionIconForeground'?: ColourLike
  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  'list.deemphasizedForeground'?: ColourLike
  /**
   * List/Tree drag and drop background when moving items around using the mouse.
   */
  'list.dropBackground'?: ColourLike
  /**
   * Foreground color of list items containing errors.
   */
  'list.errorForeground'?: ColourLike
  /**
   * Background color of the filtered matches in lists and trees.
   */
  'list.filterMatchBackground'?: ColourLike
  /**
   * Border color of the filtered matches in lists and trees.
   */
  'list.filterMatchBorder'?: ColourLike
  /**
   * List/Tree background color for the focused item when the list/tree is active.
   */
  'list.focusBackground'?: ColourLike
  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.focusForeground'?: ColourLike
  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  'list.focusHighlightForeground'?: ColourLike
  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus,
   * an inactive does not.
   */
  'list.focusOutline'?: ColourLike
  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  'list.highlightForeground'?: ColourLike
  /**
   * List/Tree background when hovering over items using the mouse.
   */
  'list.hoverBackground'?: ColourLike
  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  'list.hoverForeground'?: ColourLike
  /**
   * List background color for the focused item when the list is inactive. An active list has keyboard focus, an
   * inactive does not. Currently only supported in lists.
   */
  'list.inactiveFocusBackground'?: ColourLike
  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.inactiveFocusOutline'?: ColourLike
  /**
   * List/Tree background color for the selected item when the list/tree is inactive.
   */
  'list.inactiveSelectionBackground'?: ColourLike
  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard
   * focus, an inactive does not.
   */
  'list.inactiveSelectionForeground'?: ColourLike
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has
   * keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionIconForeground'?: ColourLike
  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  'list.invalidItemForeground'?: ColourLike
  /**
   * Foreground color of list items containing warnings.
   */
  'list.warningForeground'?: ColourLike
  /**
   * List/Tree Filter background color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.background'?: ColourLike
  /**
   * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
   */
  'listFilterWidget.noMatchesOutline'?: ColourLike
  /**
   * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
   */
  'listFilterWidget.outline'?: ColourLike
  /**
   * Background color of menu items.
   */
  'menu.background'?: ColourLike
  /**
   * Border color of menus.
   */
  'menu.border'?: ColourLike
  /**
   * Foreground color of menu items.
   */
  'menu.foreground'?: ColourLike
  /**
   * Background color of the selected menu item in menus.
   */
  'menu.selectionBackground'?: ColourLike
  /**
   * Border color of the selected menu item in menus.
   */
  'menu.selectionBorder'?: ColourLike
  /**
   * Foreground color of the selected menu item in menus.
   */
  'menu.selectionForeground'?: ColourLike
  /**
   * Color of a separator menu item in menus.
   */
  'menu.separatorBackground'?: ColourLike
  /**
   * Background color of the selected menu item in the menubar.
   */
  'menubar.selectionBackground'?: ColourLike
  /**
   * Border color of the selected menu item in the menubar.
   */
  'menubar.selectionBorder'?: ColourLike
  /**
   * Foreground color of the selected menu item in the menubar.
   */
  'menubar.selectionForeground'?: ColourLike
  /**
   * Border color on headers and the splitter in inline merge conflicts.
   */
  'merge.border'?: ColourLike
  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'merge.commonContentBackground'?: ColourLike
  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide
   * underlying decorations.
   */
  'merge.commonHeaderBackground'?: ColourLike
  /**
   * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.currentContentBackground'?: ColourLike
  /**
   * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.currentHeaderBackground'?: ColourLike
  /**
   * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.incomingContentBackground'?: ColourLike
  /**
   * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying
   * decorations.
   */
  'merge.incomingHeaderBackground'?: ColourLike
  /**
   * The background color for changes.
   */
  'mergeEditor.change.background'?: ColourLike
  /**
   * The background color for word changes.
   */
  'mergeEditor.change.word.background'?: ColourLike
  /**
   * The border color of unhandled unfocused conflicts.
   */
  'mergeEditor.conflict.unhandledUnfocused.border'?: ColourLike
  /**
   * The border color of unhandled focused conflicts.
   */
  'mergeEditor.conflict.unhandledFocused.border'?: ColourLike
  /**
   * The border color of handled unfocused conflicts.
   */
  'mergeEditor.conflict.handledUnfocused.border'?: ColourLike
  /**
   * The border color of handled focused conflicts.
   */
  'mergeEditor.conflict.handledFocused.border'?: ColourLike
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: ColourLike
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: ColourLike
  /**
   * The background of the "Conflicting Lines" text.
   */
  'mergeEditor.conflictingLines.background'?: ColourLike
  /**
   * Minimap background color.
   */
  'minimap.background'?: ColourLike
  /**
   * Highlight color for errors within the editor.
   */
  'minimap.errorHighlight'?: ColourLike
  /**
   * Highlight color for matches from search within files.
   */
  'minimap.findMatchHighlight'?: ColourLike
  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75%
   * opacity.
   */
  'minimap.foregroundOpacity'?: ColourLike
  /**
   * Highlight color for the editor selection.
   */
  'minimap.selectionHighlight'?: ColourLike
  /**
   * Minimap marker color for repeating editor selections.
   */
  'minimap.selectionOccurrenceHighlight'?: ColourLike
  /**
   * Highlight color for warnings within the editor.
   */
  'minimap.warningHighlight'?: ColourLike
  /**
   * Minimap gutter color for added content.
   */
  'minimapGutter.addedBackground'?: ColourLike
  /**
   * Minimap gutter color for deleted content.
   */
  'minimapGutter.deletedBackground'?: ColourLike
  /**
   * Minimap gutter color for modified content.
   */
  'minimapGutter.modifiedBackground'?: ColourLike
  /**
   * Minimap slider background color when clicked on.
   */
  'minimapSlider.activeBackground'?: ColourLike
  /**
   * Minimap slider background color.
   */
  'minimapSlider.background'?: ColourLike
  /**
   * Minimap slider background color when hovering.
   */
  'minimapSlider.hoverBackground'?: ColourLike
  /**
   * The border color for notebook cells.
   */
  'notebook.cellBorderColor'?: ColourLike
  /**
   * The color of the notebook cell editor background
   */
  'notebook.cellEditorBackground'?: ColourLike
  /**
   * The background color of a cell when the cell is hovered.
   */
  'notebook.cellHoverBackground'?: ColourLike
  /**
   * The color of the notebook cell insertion indicator.
   */
  'notebook.cellInsertionIndicator'?: ColourLike
  /**
   * The background color of notebook cell status bar items.
   */
  'notebook.cellStatusBarItemHoverBackground'?: ColourLike
  /**
   * The color of the separator in the cell bottom toolbar
   */
  'notebook.cellToolbarSeparator'?: ColourLike
  /**
   * The background color of a cell when the cell is focused.
   */
  'notebook.focusedCellBackground'?: ColourLike
  /**
   * The color of the cell's top and bottom border when the cell is focused.
   */
  'notebook.focusedCellBorder'?: ColourLike
  /**
   * The color of the notebook cell editor border.
   */
  'notebook.focusedEditorBorder'?: ColourLike
  /**
   * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the
   * editor.
   */
  'notebook.inactiveFocusedCellBorder'?: ColourLike
  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  'notebook.inactiveSelectedCellBorder'?: ColourLike
  /**
   * The Color of the notebook output container background.
   */
  'notebook.outputContainerBackgroundColor'?: ColourLike
  /**
   * The border color of the notebook output container.
   */
  'notebook.outputContainerBorderColor'?: ColourLike
  /**
   * The background color of a cell when the cell is selected.
   */
  'notebook.selectedCellBackground'?: ColourLike
  /**
   * The color of the cell's top and bottom border when the cell is selected but not focused.
   */
  'notebook.selectedCellBorder'?: ColourLike
  /**
   * Background color of highlighted cell
   */
  'notebook.symbolHighlightBackground'?: ColourLike
  /**
   * Notebook scrollbar slider background color when clicked on.
   */
  'notebookScrollbarSlider.activeBackground'?: ColourLike
  /**
   * Notebook scrollbar slider background color.
   */
  'notebookScrollbarSlider.background'?: ColourLike
  /**
   * Notebook scrollbar slider background color when hovering.
   */
  'notebookScrollbarSlider.hoverBackground'?: ColourLike
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  'notebookStatusErrorIcon.foreground'?: ColourLike
  /**
   * The running icon color of notebook cells in the cell status bar.
   */
  'notebookStatusRunningIcon.foreground'?: ColourLike
  /**
   * The success icon color of notebook cells in the cell status bar.
   */
  'notebookStatusSuccessIcon.foreground'?: ColourLike
  /**
   * Notification Center border color.
   */
  'notificationCenter.border'?: ColourLike
  /**
   * Notification Center header background color.
   */
  'notificationCenterHeader.background'?: ColourLike
  /**
   * Notification Center header foreground color.
   */
  'notificationCenterHeader.foreground'?: ColourLike
  /**
   * Notification links foreground color.
   */
  'notificationLink.foreground'?: ColourLike
  /**
   * Notification background color.
   */
  'notifications.background'?: ColourLike
  /**
   * Notification border color separating from other notifications in the Notification Center.
   */
  'notifications.border'?: ColourLike
  /**
   * Notification foreground color.
   */
  'notifications.foreground'?: ColourLike
  /**
   * The color used for the notification error icon.
   */
  'notificationsErrorIcon.foreground'?: ColourLike
  /**
   * The color used for the notification info icon.
   */
  'notificationsInfoIcon.foreground'?: ColourLike
  /**
   * The color used for the notification warning icon.
   */
  'notificationsWarningIcon.foreground'?: ColourLike
  /**
   * Notification toast border color.
   */
  'notificationToast.border'?: ColourLike
  /**
   * Panel background color.
   */
  'panel.background'?: ColourLike
  /**
   * Panel border color to separate the panel from the editor.
   */
  'panel.border'?: ColourLike
  /**
   * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like
   * output and integrated terminal.
   */
  'panel.dropBorder'?: ColourLike
  /**
   * Input box border for inputs in the panel.
   */
  'panelInput.border'?: ColourLike
  /**
   * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below
   * the editor area and contain views like output and integrated terminal.
   */
  'panelSection.border'?: ColourLike
  /**
   * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections
   * can still shine through. Panels are shown below the editor area and contain views like output and integrated
   * terminal.
   */
  'panelSection.dropBackground'?: ColourLike
  /**
   * Panel section header background color. Panels are shown below the editor area and contain views like output and
   * integrated terminal.
   */
  'panelSectionHeader.background'?: ColourLike
  /**
   * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown
   * below the editor area and contain views like output and integrated terminal.
   */
  'panelSectionHeader.border'?: ColourLike
  /**
   * Panel section header foreground color. Panels are shown below the editor area and contain views like output and
   * integrated terminal.
   */
  'panelSectionHeader.foreground'?: ColourLike
  /**
   * Border color for the active panel title.
   */
  'panelTitle.activeBorder'?: ColourLike
  /**
   * Title color for the active panel.
   */
  'panelTitle.activeForeground'?: ColourLike
  /**
   * Title color for the inactive panel.
   */
  'panelTitle.inactiveForeground'?: ColourLike
  /**
   * Color of the peek view borders and arrow.
   */
  'peekView.border'?: ColourLike
  /**
   * Background color of the peek view editor.
   */
  'peekViewEditor.background'?: ColourLike
  /**
   * Match highlight color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBackground'?: ColourLike
  /**
   * Match highlight border color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBorder'?: ColourLike
  /**
   * Background color of the gutter in the peek view editor.
   */
  'peekViewEditorGutter.background'?: ColourLike
  /**
   * Background color of the peek view result list.
   */
  'peekViewResult.background'?: ColourLike
  /**
   * Foreground color for file nodes in the peek view result list.
   */
  'peekViewResult.fileForeground'?: ColourLike
  /**
   * Foreground color for line nodes in the peek view result list.
   */
  'peekViewResult.lineForeground'?: ColourLike
  /**
   * Match highlight color in the peek view result list.
   */
  'peekViewResult.matchHighlightBackground'?: ColourLike
  /**
   * Background color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionBackground'?: ColourLike
  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionForeground'?: ColourLike
  /**
   * Background color of the peek view title area.
   */
  'peekViewTitle.background'?: ColourLike
  /**
   * Color of the peek view title info.
   */
  'peekViewTitleDescription.foreground'?: ColourLike
  /**
   * Color of the peek view title.
   */
  'peekViewTitleLabel.foreground'?: ColourLike
  /**
   * Quick picker (Quick Open) color for grouping borders.
   */
  'pickerGroup.border'?: ColourLike
  /**
   * Quick picker (Quick Open) color for grouping labels.
   */
  'pickerGroup.foreground'?: ColourLike
  /**
   * The color of the icon for a port that has an associated running process.
   */
  'ports.iconRunningProcessForeground'?: ColourLike
  /**
   * The color used for the problems error icon.
   */
  'problemsErrorIcon.foreground'?: ColourLike
  /**
   * The color used for the problems info icon.
   */
  'problemsInfoIcon.foreground'?: ColourLike
  /**
   * The color used for the problems warning icon.
   */
  'problemsWarningIcon.foreground'?: ColourLike
  /**
   * Background color of the progress bar shown for long running operations.
   */
  'progressBar.background'?: ColourLike
  /**
   * Quick input background color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.background'?: ColourLike
  /**
   * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.foreground'?: ColourLike
  /**
   * Quick picker background color for the focused item.
   */
  'quickInputList.focusBackground'?: ColourLike
  /**
   * Quick picker foreground color for the focused item.
   */
  'quickInputList.focusForeground'?: ColourLike
  /**
   * Quick picker icon foreground color for the focused item.
   */
  'quickInputList.focusIconForeground'?: ColourLike
  /**
   * Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
   */
  'quickInputTitle.background'?: ColourLike
  /**
   * The hover border color for draggable sashes.
   */
  'sash.hoverBorder'?: ColourLike
  /**
   * SCM Provider separator border.
   */
  'scm.providerBorder'?: ColourLike
  /**
   * Scrollbar slider shadow to indicate that the view is scrolled.
   */
  'scrollbar.shadow'?: ColourLike
  /**
   * Scrollbar slider background color when clicked on.
   */
  'scrollbarSlider.activeBackground'?: ColourLike
  /**
   * Scrollbar slider background color.
   */
  'scrollbarSlider.background'?: ColourLike
  /**
   * Scrollbar slider background color when hovering.
   */
  'scrollbarSlider.hoverBackground'?: ColourLike
  /**
   * Color of the editor's results.
   */
  'searchEditor.findMatchBackground'?: ColourLike
  /**
   * Border color of the editor's results.
   */
  'searchEditor.findMatchBorder'?: ColourLike
  /**
   * Search editor text input box border.
   */
  'searchEditor.textInputBorder'?: ColourLike
  /**
   * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections
   * within the editor and the terminal).
   */
  'selection.background'?: ColourLike
  /**
   * Checkbox background.
   */
  'settings.checkboxBackground'?: ColourLike
  /**
   * Checkbox border.
   */
  'settings.checkboxBorder'?: ColourLike
  /**
   * Checkbox foreground.
   */
  'settings.checkboxForeground'?: ColourLike
  /**
   * Dropdown background.
   */
  'settings.dropdownBackground'?: ColourLike
  /**
   * Dropdown border.
   */
  'settings.dropdownBorder'?: ColourLike
  /**
   * Dropdown foreground.
   */
  'settings.dropdownForeground'?: ColourLike
  /**
   * Dropdown list border.
   */
  'settings.dropdownListBorder'?: ColourLike
  /**
   * Background color of a focused setting row.
   */
  'settings.focusedRowBackground'?: ColourLike
  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  'settings.focusedRowBorder'?: ColourLike
  /**
   * The foreground color for a section header or active title.
   */
  'settings.headerForeground'?: ColourLike
  /**
   * The line that indicates a modified setting.
   */
  'settings.modifiedItemIndicator'?: ColourLike
  /**
   * Number input box background.
   */
  'settings.numberInputBackground'?: ColourLike
  /**
   * Number input box border.
   */
  'settings.numberInputBorder'?: ColourLike
  /**
   * Number input box foreground.
   */
  'settings.numberInputForeground'?: ColourLike
  /**
   * The background color of a settings row when hovered.
   */
  'settings.rowHoverBackground'?: ColourLike
  /**
   * The color of the Settings editor splitview sash border.
   */
  'settings.sashBorder'?: ColourLike
  /**
   * Text input box background.
   */
  'settings.textInputBackground'?: ColourLike
  /**
   * Text input box border.
   */
  'settings.textInputBorder'?: ColourLike
  /**
   * Text input box foreground.
   */
  'settings.textInputForeground'?: ColourLike
  /**
   * Side Bar background color.
   */
  'sideBar.background'?: ColourLike
  /**
   * Side Bar border color on the side separating the editor.
   */
  'sideBar.border'?: ColourLike
  /**
   * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar
   * sections can still shine through.
   */
  'sideBar.dropBackground'?: ColourLike
  /**
   * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
   */
  'sideBar.foreground'?: ColourLike
  /**
   * Side Bar section header background color.
   */
  'sideBarSectionHeader.background'?: ColourLike
  /**
   * Side bar section header border color.
   */
  'sideBarSectionHeader.border'?: ColourLike
  /**
   * Side Bar section header foreground color.
   */
  'sideBarSectionHeader.foreground'?: ColourLike
  /**
   * Side Bar title foreground color.
   */
  'sideBarTitle.foreground'?: ColourLike
  /**
   * Color to separate two editors from each other when shown side by side in an editor group.
   */
  'sideBySideEditor.border'?: ColourLike
  /**
   * Standard Status Bar background color.
   */
  'statusBar.background'?: ColourLike
  /**
   * Status Bar foreground color.
   */
  'statusBar.foreground'?: ColourLike
  /**
   * Status Bar border color separating the Status Bar and editor.
   */
  'statusBar.border'?: ColourLike
  /**
   * Status Bar background color when a program is being debugged.
   */
  'statusBar.debuggingBackground'?: ColourLike
  /**
   * Status Bar foreground color when a program is being debugged.
   */
  'statusBar.debuggingForeground'?: ColourLike
  /**
   * Status Bar border color separating the Status Bar and editor when a program is being debugged.
   */
  'statusBar.debuggingBorder'?: ColourLike
  /**
   * Status Bar foreground color when no folder is opened.
   */
  'statusBar.noFolderForeground'?: ColourLike
  /**
   * Status Bar background color when no folder is opened.
   */
  'statusBar.noFolderBackground'?: ColourLike
  /**
   * Status Bar border color separating the Status Bar and editor when no folder is opened.
   */
  'statusBar.noFolderBorder'?: ColourLike
  /**
   * Status Bar item background color when clicking.
   */
  'statusBarItem.activeBackground'?: ColourLike
  /**
   * Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.hoverForeground'?: ColourLike
  /**
   * Status Bar item background color when hovering.
   */
  'statusBarItem.hoverBackground'?: ColourLike
  /**
   * Status Bar prominent items foreground color.
   */
  'statusBarItem.prominentForeground'?: ColourLike
  /**
   * Status Bar prominent items background color.
   */
  'statusBarItem.prominentBackground'?: ColourLike
  /**
   * Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries
   * to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentHoverForeground'?: ColourLike
  /**
   * Status Bar prominent items background color when hovering.
   */
  'statusBarItem.prominentHoverBackground'?: ColourLike
  /**
   * Background color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteBackground'?: ColourLike
  /**
   * Foreground color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteForeground'?: ColourLike
  /**
   * Background color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverBackground'?: ColourLike
  /**
   * Foreground color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverForeground'?: ColourLike
  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error
   * conditions.
   */
  'statusBarItem.errorBackground'?: ColourLike
  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error
   * conditions.
   */
  'statusBarItem.errorForeground'?: ColourLike
  /**
   * Status bar error items background color when hovering. Error items stand out from other status bar entries to
   * indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverBackground'?: ColourLike
  /**
   * Status bar error items foreground color when hovering. Error items stand out from other status bar entries to
   * indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverForeground'?: ColourLike
  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate
   * warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningBackground'?: ColourLike
  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate
   * warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningForeground'?: ColourLike
  /**
   * Status bar warning items background color when hovering. Warning items stand out from other status bar entries to
   * indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverBackground'?: ColourLike
  /**
   * Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to
   * indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverForeground'?: ColourLike
  /**
   * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the
   * bottom of the window.
   */
  'statusBarItem.compactHoverBackground'?: ColourLike
  /**
   * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the
   * window.
   */
  'statusBarItem.focusBorder'?: ColourLike
  /**
   * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBar.focusBorder'?: ColourLike
  /**
   * Status bar item background color when the workbench is offline.
   */
  'statusBarItem.offlineBackground'?: ColourLike
  /**
   * Status bar item foreground color when the workbench is offline.
   */
  'statusBarItem.offlineForeground'?: ColourLike
  /**
   * Status bar item foreground hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverForeground'?: ColourLike
  /**
   * Status bar item background hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverBackground'?: ColourLike
  /**
   * The foreground color for array symbols.
   */
  'symbolIcon.arrayForeground'?: ColourLike
  /**
   * The foreground color for boolean symbols.
   */
  'symbolIcon.booleanForeground'?: ColourLike
  /**
   * The foreground color for class symbols.
   */
  'symbolIcon.classForeground'?: ColourLike
  /**
   * The foreground color for color symbols.
   */
  'symbolIcon.colorForeground'?: ColourLike
  /**
   * The foreground color for constant symbols.
   */
  'symbolIcon.constantForeground'?: ColourLike
  /**
   * The foreground color for constructor symbols.
   */
  'symbolIcon.constructorForeground'?: ColourLike
  /**
   * The foreground color for enumerator symbols.
   */
  'symbolIcon.enumeratorForeground'?: ColourLike
  /**
   * The foreground color for enumerator member symbols.
   */
  'symbolIcon.enumeratorMemberForeground'?: ColourLike
  /**
   * The foreground color for event symbols.
   */
  'symbolIcon.eventForeground'?: ColourLike
  /**
   * The foreground color for field symbols.
   */
  'symbolIcon.fieldForeground'?: ColourLike
  /**
   * The foreground color for file symbols.
   */
  'symbolIcon.fileForeground'?: ColourLike
  /**
   * The foreground color for folder symbols.
   */
  'symbolIcon.folderForeground'?: ColourLike
  /**
   * The foreground color for function symbols.
   */
  'symbolIcon.functionForeground'?: ColourLike
  /**
   * The foreground color for interface symbols.
   */
  'symbolIcon.interfaceForeground'?: ColourLike
  /**
   * The foreground color for key symbols.
   */
  'symbolIcon.keyForeground'?: ColourLike
  /**
   * The foreground color for keyword symbols.
   */
  'symbolIcon.keywordForeground'?: ColourLike
  /**
   * The foreground color for method symbols.
   */
  'symbolIcon.methodForeground'?: ColourLike
  /**
   * The foreground color for module symbols.
   */
  'symbolIcon.moduleForeground'?: ColourLike
  /**
   * The foreground color for namespace symbols.
   */
  'symbolIcon.namespaceForeground'?: ColourLike
  /**
   * The foreground color for null symbols.
   */
  'symbolIcon.nullForeground'?: ColourLike
  /**
   * The foreground color for number symbols.
   */
  'symbolIcon.numberForeground'?: ColourLike
  /**
   * The foreground color for object symbols.
   */
  'symbolIcon.objectForeground'?: ColourLike
  /**
   * The foreground color for operator symbols.
   */
  'symbolIcon.operatorForeground'?: ColourLike
  /**
   * The foreground color for package symbols.
   */
  'symbolIcon.packageForeground'?: ColourLike
  /**
   * The foreground color for property symbols.
   */
  'symbolIcon.propertyForeground'?: ColourLike
  /**
   * The foreground color for reference symbols.
   */
  'symbolIcon.referenceForeground'?: ColourLike
  /**
   * The foreground color for snippet symbols.
   */
  'symbolIcon.snippetForeground'?: ColourLike
  /**
   * The foreground color for string symbols.
   */
  'symbolIcon.stringForeground'?: ColourLike
  /**
   * The foreground color for struct symbols.
   */
  'symbolIcon.structForeground'?: ColourLike
  /**
   * The foreground color for text symbols.
   */
  'symbolIcon.textForeground'?: ColourLike
  /**
   * The foreground color for type parameter symbols.
   */
  'symbolIcon.typeParameterForeground'?: ColourLike
  /**
   * The foreground color for unit symbols.
   */
  'symbolIcon.unitForeground'?: ColourLike
  /**
   * The foreground color for variable symbols.
   */
  'symbolIcon.variableForeground'?: ColourLike
  /**
   * Active Tab background color in an active group.
   */
  'tab.activeBackground'?: ColourLike
  /**
   * Bottom border for the active tab.
   */
  'tab.activeBorder'?: ColourLike
  /**
   * Top border for the active tab.
   */
  'tab.activeBorderTop'?: ColourLike
  /**
   * Active Tab foreground color in an active group.
   */
  'tab.activeForeground'?: ColourLike
  /**
   * Border on the top of modified (dirty) active tabs in an active group.
   */
  'tab.activeModifiedBorder'?: ColourLike
  /**
   * Border to separate Tabs from each other.
   */
  'tab.border'?: ColourLike
  /**
   * Tab background color when hovering
   */
  'tab.hoverBackground'?: ColourLike
  /**
   * Border to highlight tabs when hovering
   */
  'tab.hoverBorder'?: ColourLike
  /**
   * Tab foreground color when hovering
   */
  'tab.hoverForeground'?: ColourLike
  /**
   * Inactive Tab background color.
   */
  'tab.inactiveBackground'?: ColourLike
  /**
   * Inactive Tab foreground color in an active group.
   */
  'tab.inactiveForeground'?: ColourLike
  /**
   * Border on the top of modified (dirty) inactive tabs in an active group.
   */
  'tab.inactiveModifiedBorder'?: ColourLike
  /**
   * Border on the right of the last pinned editor to separate from unpinned editors.
   */
  'tab.lastPinnedBorder'?: ColourLike
  /**
   * Active Tab background color in an inactive editor group.
   */
  'tab.unfocusedActiveBackground'?: ColourLike
  /**
   * Bottom border for the active tab in an inactive editor group.
   */
  'tab.unfocusedActiveBorder'?: ColourLike
  /**
   * Top border for the active tab in an inactive editor group
   */
  'tab.unfocusedActiveBorderTop'?: ColourLike
  /**
   * Active tab foreground color in an inactive editor group.
   */
  'tab.unfocusedActiveForeground'?: ColourLike
  /**
   * Border on the top of modified (dirty) active tabs in an unfocused group.
   */
  'tab.unfocusedActiveModifiedBorder'?: ColourLike
  /**
   * Tab background color in an unfocused group when hovering
   */
  'tab.unfocusedHoverBackground'?: ColourLike
  /**
   * Border to highlight tabs in an unfocused group when hovering
   */
  'tab.unfocusedHoverBorder'?: ColourLike
  /**
   * Tab foreground color in an unfocused group when hovering
   */
  'tab.unfocusedHoverForeground'?: ColourLike
  /**
   * Inactive Tab background color in an unfocused group
   */
  'tab.unfocusedInactiveBackground'?: ColourLike
  /**
   * Inactive tab foreground color in an inactive editor group.
   */
  'tab.unfocusedInactiveForeground'?: ColourLike
  /**
   * Border on the top of modified (dirty) inactive tabs in an unfocused group.
   */
  'tab.unfocusedInactiveModifiedBorder'?: ColourLike
  /**
   * 'Black' ANSI color in the terminal.
   */
  'terminal.ansiBlack'?: ColourLike
  /**
   * 'Blue' ANSI color in the terminal.
   */
  'terminal.ansiBlue'?: ColourLike
  /**
   * 'BrightBlack' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlack'?: ColourLike
  /**
   * 'BrightBlue' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlue'?: ColourLike
  /**
   * 'BrightCyan' ANSI color in the terminal.
   */
  'terminal.ansiBrightCyan'?: ColourLike
  /**
   * 'BrightGreen' ANSI color in the terminal.
   */
  'terminal.ansiBrightGreen'?: ColourLike
  /**
   * 'BrightMagenta' ANSI color in the terminal.
   */
  'terminal.ansiBrightMagenta'?: ColourLike
  /**
   * 'BrightRed' ANSI color in the terminal.
   */
  'terminal.ansiBrightRed'?: ColourLike
  /**
   * 'BrightWhite' ANSI color in the terminal.
   */
  'terminal.ansiBrightWhite'?: ColourLike
  /**
   * 'BrightYellow' ANSI color in the terminal.
   */
  'terminal.ansiBrightYellow'?: ColourLike
  /**
   * 'Cyan' ANSI color in the terminal.
   */
  'terminal.ansiCyan'?: ColourLike
  /**
   * 'Green' ANSI color in the terminal.
   */
  'terminal.ansiGreen'?: ColourLike
  /**
   * 'Magenta' ANSI color in the terminal.
   */
  'terminal.ansiMagenta'?: ColourLike
  /**
   * 'Red' ANSI color in the terminal.
   */
  'terminal.ansiRed'?: ColourLike
  /**
   * 'White' ANSI color in the terminal.
   */
  'terminal.ansiWhite'?: ColourLike
  /**
   * 'Yellow' ANSI color in the terminal.
   */
  'terminal.ansiYellow'?: ColourLike
  /**
   * The background of the Integrated Terminal's viewport.
   */
  'terminal.background'?: ColourLike
  /**
   * The color of the border that separates split panes within the terminal. This defaults to panel.border.
   */
  'terminal.border'?: ColourLike
  /**
   * The background color when dragging on top of terminals. The color should have transparency so that the terminal
   * contents can still shine through.
   */
  'terminal.dropBackground'?: ColourLike
  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying
   * terminal content.
   */
  'terminal.findMatchBackground'?: ColourLike
  /**
   * Border color of the current search match in the terminal.
   */
  'terminal.findMatchBorder'?: ColourLike
  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying
   * terminal content.
   */
  'terminal.findMatchHighlightBackground'?: ColourLike
  /**
   * Border color of the other search matches in the terminal
   */
  'terminal.findMatchHighlightBorder'?: ColourLike
  /**
   * The default foreground color of the Integrated Terminal.
   */
  'terminal.foreground'?: ColourLike
  /**
   * The selection background color of the terminal.
   */
  'terminal.selectionBackground'?: ColourLike
  /**
   * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
   */
  'terminal.tab.activeBorder'?: ColourLike
  /**
   * The default terminal command decoration background color.
   */
  'terminalCommandDecoration.defaultBackground'?: ColourLike
  /**
   * The terminal command decoration background color for successful commands.
   */
  'terminalCommandDecoration.successBackground'?: ColourLike
  /**
   * The terminal command decoration background color for error commands.
   */
  'terminalCommandDecoration.errorBackground'?: ColourLike
  /**
   * The overview ruler cursor color.
   */
  'terminalOverviewRuler.cursorForeground'?: ColourLike
  /**
   * Overview ruler marker color for find matches in the terminal.
   */
  'terminalOverviewRuler.findMatchForeground'?: ColourLike
  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block
   * cursor.
   */
  'terminalCursor.background'?: ColourLike
  /**
   * The foreground color of the terminal cursor.
   */
  'terminalCursor.foreground'?: ColourLike
  /**
   * The background color of the sticky scroll overlay in the terminal.
   */
  'terminalStickyScroll.background'?: ColourLike
  /**
   * The background color of the sticky scroll overlay in the terminal when hovered.
   */
  'terminalStickyScrollHover.background'?: ColourLike
  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored'?: ColourLike
  /**
   * Color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed'?: ColourLike
  /**
   * Color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed'?: ColourLike
  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued'?: ColourLike
  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped'?: ColourLike
  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset'?: ColourLike
  /**
   * Text color of test error messages shown inline in the editor.
   */
  'testing.message.error.decorationForeground'?: ColourLike
  /**
   * Margin color beside error messages shown inline in the editor.
   */
  'testing.message.error.lineBackground'?: ColourLike
  /**
   * Text color of test info messages shown inline in the editor.
   */
  'testing.message.info.decorationForeground'?: ColourLike
  /**
   * Margin color beside info messages shown inline in the editor.
   */
  'testing.message.info.lineBackground'?: ColourLike
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekBorder'?: ColourLike
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekHeaderBackground'?: ColourLike
  /**
   * Color for 'run' icons in the editor.
   */
  'testing.runAction'?: ColourLike
  /**
   * Background color for block quotes in text.
   */
  'textBlockQuote.background'?: ColourLike
  /**
   * Border color for block quotes in text.
   */
  'textBlockQuote.border'?: ColourLike
  /**
   * Background color for code blocks in text.
   */
  'textCodeBlock.background'?: ColourLike
  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  'textLink.activeForeground'?: ColourLike
  /**
   * Foreground color for links in text.
   */
  'textLink.foreground'?: ColourLike
  /**
   * Foreground color for preformatted text segments.
   */
  'textPreformat.foreground'?: ColourLike
  /**
   * Background color for preformatted text segments.
   */
  'textPreformat.background'?: ColourLike
  /**
   * Color for text separators.
   */
  'textSeparator.foreground'?: ColourLike
  /**
   * Title Bar background when the window is active.
   */
  'titleBar.activeBackground'?: ColourLike
  /**
   * Title Bar foreground when the window is active.
   */
  'titleBar.activeForeground'?: ColourLike
  /**
   * Title bar border color.
   */
  'titleBar.border'?: ColourLike
  /**
   * Title Bar background when the window is inactive.
   */
  'titleBar.inactiveBackground'?: ColourLike
  /**
   * Title Bar foreground when the window is inactive.
   */
  'titleBar.inactiveForeground'?: ColourLike
  /**
   * Toolbar background when holding the mouse over actions
   */
  'toolbar.activeBackground'?: ColourLike
  /**
   * Toolbar background when hovering over actions using the mouse
   */
  'toolbar.hoverBackground'?: ColourLike
  /**
   * Toolbar outline when hovering over actions using the mouse
   */
  'toolbar.hoverOutline'?: ColourLike
  /**
   * Tree Widget's stroke color for indent guides.
   */
  'tree.indentGuidesStroke'?: ColourLike
  /**
   * Tree stroke color for the indentation guides.
   */
  'tree.tableColumnsBorder'?: ColourLike
  /**
   * Background color for the embedded editors on the Interactive Playground.
   */
  'walkThrough.embeddedEditorBackground'?: ColourLike
  /**
   * Background color for the Welcome page.
   */
  'welcomePage.background'?: ColourLike
  /**
   * Background color for the buttons on the Welcome page.
   */
  'welcomePage.buttonBackground'?: ColourLike
  /**
   * Hover background color for the buttons on the Welcome page.
   */
  'welcomePage.buttonHoverBackground'?: ColourLike
  /**
   * Foreground color for the Welcome page progress bars.
   */
  'welcomePage.progress.background'?: ColourLike
  /**
   * Background color for the Welcome page progress bars.
   */
  'welcomePage.progress.foreground'?: ColourLike
  /**
   * Background color for the tiles on the Get Started page.
   */
  'welcomePage.tileBackground'?: ColourLike
  /**
   * Hover background color for the tiles on the Get Started.
   */
  'welcomePage.tileHoverBackground'?: ColourLike
  /**
   * Shadow color for the Welcome page walkthrough category buttons.
   */
  'welcomePage.tileShadow.'?: ColourLike
  /**
   * Shadow color of widgets such as Find/Replace inside the editor.
   */
  'widget.shadow'?: ColourLike
  /**
   * Border color for the active (focused) window.
   */
  'window.activeBorder'?: ColourLike
  /**
   * Border color for the inactive (unfocused) windows.
   */
  'window.inactiveBorder'?: ColourLike


  // -- GitHub Pull Requests & Issues

  /**
   * The color used for the assignees and labels fields in a new issue editor.
   */
  'issues.newIssueDecoration'?: ColourLike
  /**
   * The color used for indicating that an issue is open.
   */
  'issues.open'?: ColourLike
  /**
   * The color used for indicating that an issue is closed.
   */
  'issues.closed'?: ColourLike
  /**
   * The color used for indicating that a pull request is open.
   */
  'pullRequests.open'?: ColourLike
  /**
   * The color used for indicating that a pull request is closed.
   */
  'pullRequests.closed'?: ColourLike
  /**
   * The color used for indicating that a pull request is a draft.
   */
  'pullRequests.draft'?: ColourLike
  /**
   * The color used for indicating that a pull request is merged.
   */
  'pullRequests.merged'?: ColourLike
  /**
   * The color used for indicating a notification on a pull request
   */
  'pullRequests.notification'?: ColourLike


  // -- Error Lens

  'errorLens.errorBackground'?: ColourLike
  'errorLens.errorBackgroundLight'?: ColourLike
  'errorLens.errorForeground'?: ColourLike
  'errorLens.errorForegroundLight'?: ColourLike
  'errorLens.errorMessageBackground'?: ColourLike
  'errorLens.hintBackground'?: ColourLike
  'errorLens.hintBackgroundLight'?: ColourLike
  'errorLens.hintForeground'?: ColourLike
  'errorLens.hintForegroundLight'?: ColourLike
  'errorLens.hintMessageBackground'?: ColourLike
  'errorLens.infoBackground'?: ColourLike
  'errorLens.infoBackgroundLight'?: ColourLike
  'errorLens.infoForeground'?: ColourLike
  'errorLens.infoForegroundLight'?: ColourLike
  'errorLens.infoMessageBackground'?: ColourLike
  'errorLens.warningBackground'?: ColourLike
  'errorLens.warningBackgroundLight'?: ColourLike
  'errorLens.warningForeground'?: ColourLike
  'errorLens.warningForegroundLight'?: ColourLike
  'errorLens.warningMessageBackground'?: ColourLike


  // -- GitLens

  'gitlens.closedPullRequestIconColor'?: ColourLike
  'gitlens.decorations.addedForegroundColor'?: ColourLike
  'gitlens.decorations.branchAheadForegroundColor'?: ColourLike
  'gitlens.decorations.branchBehindForegroundColor'?: ColourLike
  'gitlens.decorations.branchDivergedForegroundColor'?: ColourLike
  'gitlens.decorations.branchUnpublishedForegroundColor'?: ColourLike
  'gitlens.decorations.branchUpToDateForegroundColor'?: ColourLike
  'gitlens.decorations.copiedForegroundColor'?: ColourLike
  'gitlens.decorations.deletedForegroundColor'?: ColourLike
  'gitlens.decorations.ignoredForegroundColor'?: ColourLike
  'gitlens.decorations.modifiedForegroundColor'?: ColourLike
  'gitlens.decorations.renamedForegroundColor'?: ColourLike
  'gitlens.decorations.untrackedForegroundColor'?: ColourLike
  'gitlens.gutterBackgroundColor'?: ColourLike
  'gitlens.gutterForegroundColor'?: ColourLike
  'gitlens.gutterUncommittedForegroundColor'?: ColourLike
  'gitlens.lineHighlightBackgroundColor'?: ColourLike
  'gitlens.lineHighlightOverviewRulerColor'?: ColourLike
  'gitlens.mergedPullRequestIconColor'?: ColourLike
  'gitlens.openPullRequestIconColor'?: ColourLike
  'gitlens.trailingLineBackgroundColor'?: ColourLike
  'gitlens.trailingLineForegroundColor'?: ColourLike
  'gitlens.unpublishedCommitIconColor'?: ColourLike
  'gitlens.unpulledChangesIconColor'?: ColourLike
  'gitlens.unpushlishedChangesIconColor'?: ColourLike


  // -- LintLens

  'lintlens.annotationColor'?: ColourLike


  // -- Bookmarks

  'bookmarks.overviewRuler'?: ColourLike
  'bookmarks.lineBackground'?: ColourLike
  'bookmarks.lineBorder'?: ColourLike


  // -- Test Explorer

  'testExplorer.errorDecorationBackground'?: ColourLike


  // -- SQL Tools
  'sqltools.currentQueryBg'?: ColourLike
  'sqltools.currentQueryOutline'?: ColourLike


  // -- File Watcher

  'filewatcher.error'?: ColourLike

  toJSON?(): Record<string, string>
}

export {
  UIColourPalette,
}
