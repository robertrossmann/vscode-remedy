/* eslint-disable @stylistic/max-len */
import type * as Color from 'color'

/**
 * Source: https://github.com/microsoft/vscode-docs/blob/main/api/references/theme-color.md
 */
interface UIColours {
  /** Background color for toggled action items in action bar. */
  'actionBar.toggledBackground'?: Color
  /** Activity Bar optional background color for the active element. */
  'activityBar.activeBackground'?: Color
  /** Activity Bar active indicator border color. */
  'activityBar.activeBorder'?: Color
  /** Activity bar focus border color for the active item. */
  'activityBar.activeFocusBorder'?: Color
  /** Activity Bar background color. */
  'activityBar.background'?: Color
  /** Activity Bar border color with the Side Bar. */
  'activityBar.border'?: Color
  /** Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar. */
  'activityBar.dropBorder'?: Color
  /** Activity Bar foreground color (for example used for the icons). */
  'activityBar.foreground'?: Color
  /** Activity Bar item foreground color when it is inactive. */
  'activityBar.inactiveForeground'?: Color
  /** Activity notification badge background color. */
  'activityBarBadge.background'?: Color
  /** Activity notification badge foreground color. */
  'activityBarBadge.foreground'?: Color
  /** Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBackground'?: Color
  /** Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBorder'?: Color
  /** Background color of the activity bar when set to top / bottom. */
  'activityBarTop.background'?: Color
  /** Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.dropBorder'?: Color
  /** Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.foreground'?: Color
  /** Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.inactiveForeground'?: Color
  /** Background color of the error activity badge */
  'activityErrorBadge.background'?: Color
  /** Foreground color of the error activity badge */
  'activityErrorBadge.foreground'?: Color
  /** Background color of the warning activity badge */
  'activityWarningBadge.background'?: Color
  /** Foreground color of the warning activity badge */
  'activityWarningBadge.foreground'?: Color
  /** Badge background color. */
  'badge.background'?: Color
  /** Badge foreground color. */
  'badge.foreground'?: Color
  /** Banner background color. */
  'banner.background'?: Color
  /** Banner foreground color. */
  'banner.foreground'?: Color
  /** Color for the icon in front of the banner text. */
  'banner.iconForeground'?: Color
  /** Color of selected breadcrumb items. */
  'breadcrumb.activeSelectionForeground'?: Color
  /** Background color of breadcrumb items. */
  'breadcrumb.background'?: Color
  /** Color of focused breadcrumb items. */
  'breadcrumb.focusForeground'?: Color
  /** Color of breadcrumb items. */
  'breadcrumb.foreground'?: Color
  /** Background color of breadcrumb item picker. */
  'breadcrumbPicker.background'?: Color
  /** Button background color. */
  'button.background'?: Color
  /** Button border color. */
  'button.border'?: Color
  /** Button foreground color. */
  'button.foreground'?: Color
  /** Button background color when hovering. */
  'button.hoverBackground'?: Color
  /** Secondary button background color. */
  'button.secondaryBackground'?: Color
  /** Secondary button foreground color. */
  'button.secondaryForeground'?: Color
  /** Secondary button background color when hovering. */
  'button.secondaryHoverBackground'?: Color
  /** Button separator color. */
  'button.separator'?: Color
  /** Axis color for the chart. */
  'chart.axis'?: Color
  /** Guide line for the chart. */
  'chart.guide'?: Color
  /** Line color for the chart. */
  'chart.line'?: Color
  /** Color for blue elements in charts. */
  'charts.blue'?: Color
  /** Contrast color for text in charts. */
  'charts.foreground'?: Color
  /** Color for green elements in charts. */
  'charts.green'?: Color
  /** Color for lines in charts. */
  'charts.lines'?: Color
  /** Color for orange elements in charts. */
  'charts.orange'?: Color
  /** Color for purple elements in charts. */
  'charts.purple'?: Color
  /** Color for red elements in charts. */
  'charts.red'?: Color
  /** Color for yellow elements in charts. */
  'charts.yellow'?: Color
  /** The background color of a chat avatar. */
  'chat.avatarBackground'?: Color
  /** The foreground color of a chat avatar. */
  'chat.avatarForeground'?: Color
  /** The foreground color of a chat edited file in the edited file list. */
  'chat.editedFileForeground'?: Color
  /** The background color of a chat request. */
  'chat.requestBackground'?: Color
  /** The border color of a chat request. */
  'chat.requestBorder'?: Color
  /** The background color of a chat slash command. */
  'chat.slashCommandBackground'?: Color
  /** The foreground color of a chat slash command. */
  'chat.slashCommandForeground'?: Color
  /** Background color of checkbox widget. */
  'checkbox.background'?: Color
  /** Border color of checkbox widget. */
  'checkbox.border'?: Color
  /** Foreground color of checkbox widget. */
  'checkbox.foreground'?: Color
  /** Background color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBackground'?: Color
  /** Border color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBorder'?: Color
  /** Active background color of the Command Center. */
  'commandCenter.activeBackground'?: Color
  /** Active border color of the Command Center. */
  'commandCenter.activeBorder'?: Color
  /** Active foreground color of the Command Center. */
  'commandCenter.activeForeground'?: Color
  /** Background color of the Command Center. */
  'commandCenter.background'?: Color
  /** Border color of the Command Center. */
  'commandCenter.border'?: Color
  /** Command Center background color when a program is being debugged. */
  'commandCenter.debuggingBackground'?: Color
  /** Foreground color of the Command Center. */
  'commandCenter.foreground'?: Color
  /** Border color of the Command Center when the window is inactive. */
  'commandCenter.inactiveBorder'?: Color
  /** Foreground color of the Command Center when the window is inactive. */
  'commandCenter.inactiveForeground'?: Color
  /** Icon color for resolved comments. */
  'commentsView.resolvedIcon'?: Color
  /** Icon color for unresolved comments. */
  'commentsView.unresolvedIcon'?: Color
  /** An extra border around active elements to separate them from others for greater contrast. */
  contrastActiveBorder?: Color
  /** An extra border around elements to separate them from others for greater contrast. */
  contrastBorder?: Color
  /** Foreground color for error messages in debug REPL console. */
  'debugConsole.errorForeground'?: Color
  /** Foreground color for info messages in debug REPL console. */
  'debugConsole.infoForeground'?: Color
  /** Foreground color for source filenames in debug REPL console. */
  'debugConsole.sourceForeground'?: Color
  /** Foreground color for warning messages in debug REPL console. */
  'debugConsole.warningForeground'?: Color
  /** Foreground color for debug console input marker icon. */
  'debugConsoleInputIcon.foreground'?: Color
  /** Exception widget background color. */
  'debugExceptionWidget.background'?: Color
  /** Exception widget border color. */
  'debugExceptionWidget.border'?: Color
  /** Icon color for the current breakpoint stack frame. */
  'debugIcon.breakpointCurrentStackframeForeground'?: Color
  /** Icon color for disabled breakpoints. */
  'debugIcon.breakpointDisabledForeground'?: Color
  /** Icon color for breakpoints. */
  'debugIcon.breakpointForeground'?: Color
  /** Icon color for all breakpoint stack frames. */
  'debugIcon.breakpointStackframeForeground'?: Color
  /** Icon color for unverified breakpoints. */
  'debugIcon.breakpointUnverifiedForeground'?: Color
  /** Debug toolbar icon for continue. */
  'debugIcon.continueForeground'?: Color
  /** Debug toolbar icon for disconnect. */
  'debugIcon.disconnectForeground'?: Color
  /** Debug toolbar icon for pause. */
  'debugIcon.pauseForeground'?: Color
  /** Debug toolbar icon for restart. */
  'debugIcon.restartForeground'?: Color
  /** Debug toolbar icon for start debugging. */
  'debugIcon.startForeground'?: Color
  /** Debug toolbar icon for step back. */
  'debugIcon.stepBackForeground'?: Color
  /** Debug toolbar icon for step into. */
  'debugIcon.stepIntoForeground'?: Color
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOutForeground'?: Color
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOverForeground'?: Color
  /** Debug toolbar icon for stop. */
  'debugIcon.stopForeground'?: Color
  /** Foreground color for booleans in debug views. */
  'debugTokenExpression.boolean'?: Color
  /** Foreground color for expression errors in debug views. */
  'debugTokenExpression.error'?: Color
  /** Foreground color for the token names shown in debug views (such as in the Variables or Watch view). */
  'debugTokenExpression.name'?: Color
  /** Foreground color for numbers in debug views. */
  'debugTokenExpression.number'?: Color
  /** Foreground color for strings in debug views. */
  'debugTokenExpression.string'?: Color
  /** Foreground color for the token types shown in the debug views (ie. the Variables or Watch view). */
  'debugTokenExpression.type'?: Color
  /** Foreground color for the token values shown in debug views. */
  'debugTokenExpression.value'?: Color
  /** Debug toolbar background color. */
  'debugToolBar.background'?: Color
  /** Debug toolbar border color. */
  'debugToolBar.border'?: Color
  /** Background color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelBackground'?: Color
  /** Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelForeground'?: Color
  /** Background color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelBackground'?: Color
  /** Foreground color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelForeground'?: Color
  /** Color used to highlight value changes in the debug views (such as in the Variables view). */
  'debugView.valueChangedHighlight'?: Color
  /** Foreground color for description text providing additional information, for example for a label. */
  descriptionForeground?: Color
  /** Border color between the two text editors. */
  'diffEditor.border'?: Color
  /** Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views. */
  'diffEditor.diagonalFill'?: Color
  /** Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedLineBackground'?: Color
  /** Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedTextBackground'?: Color
  /** Outline color for the text that got inserted. */
  'diffEditor.insertedTextBorder'?: Color
  /** The border color for text that got moved in the diff editor. */
  'diffEditor.move.border'?: Color
  /** The active border color for text that got moved in the diff editor. */
  'diffEditor.moveActive.border'?: Color
  /** Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedLineBackground'?: Color
  /** Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedTextBackground'?: Color
  /** Outline color for text that got removed. */
  'diffEditor.removedTextBorder'?: Color
  /** The background color of unchanged code in the diff editor. */
  'diffEditor.unchangedCodeBackground'?: Color
  /** The color of unchanged blocks in diff editor. */
  'diffEditor.unchangedRegionBackground'?: Color
  /** The foreground color of unchanged blocks in the diff editor. */
  'diffEditor.unchangedRegionForeground'?: Color
  /** The color of the shadow around unchanged region widgets. */
  'diffEditor.unchangedRegionShadow'?: Color
  /** Background color for the margin where lines got inserted. */
  'diffEditorGutter.insertedLineBackground'?: Color
  /** Background color for the margin where lines got removed. */
  'diffEditorGutter.removedLineBackground'?: Color
  /** Diff overview ruler foreground for inserted content. */
  'diffEditorOverview.insertedForeground'?: Color
  /** Diff overview ruler foreground for removed content. */
  'diffEditorOverview.removedForeground'?: Color
  /** Overall foreground for disabled elements. This color is only used if not overridden by a component. */
  disabledForeground?: Color
  /** Dropdown background. */
  'dropdown.background'?: Color
  /** Dropdown border. */
  'dropdown.border'?: Color
  /** Dropdown foreground. */
  'dropdown.foreground'?: Color
  /** Dropdown list background. */
  'dropdown.listBackground'?: Color
  /** Editor background color. */
  'editor.background'?: Color
  /** The border color for an IME composition. */
  'editor.compositionBorder'?: Color
  /** Color of the current search match. */
  'editor.findMatchBackground'?: Color
  /** Border color of the current search match. */
  'editor.findMatchBorder'?: Color
  /** Text color of the current search match. */
  'editor.findMatchForeground'?: Color
  /** Color of the other search matches. The color must not be opaque so as not to hide underlying decorations. */
  'editor.findMatchHighlightBackground'?: Color
  /** Border color of the other search matches. */
  'editor.findMatchHighlightBorder'?: Color
  /** Foreground color of the other search matches. */
  'editor.findMatchHighlightForeground'?: Color
  /** Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations. */
  'editor.findRangeHighlightBackground'?: Color
  /** Border color the range limiting the search (Enable 'Find in Selection' in the find widget). */
  'editor.findRangeHighlightBorder'?: Color
  /** Background color of the focused stack frame highlight in the editor. */
  'editor.focusedStackFrameHighlightBackground'?: Color
  /** Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations. */
  'editor.foldBackground'?: Color
  /** Color of the collapsed text after the first line of a folded range. */
  'editor.foldPlaceholderForeground'?: Color
  /** Editor default foreground color. */
  'editor.foreground'?: Color
  /** Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations. */
  'editor.hoverHighlightBackground'?: Color
  /** Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations. */
  'editor.inactiveSelectionBackground'?: Color
  /** Color for the debug inline value background. */
  'editor.inlineValuesBackground'?: Color
  /** Color for the debug inline value text. */
  'editor.inlineValuesForeground'?: Color
  /** Background color for the highlight of line at the cursor position. */
  'editor.lineHighlightBackground'?: Color
  /** Background color for the border around the line at the cursor position. */
  'editor.lineHighlightBorder'?: Color
  /** Background color when the editor is in linked editing mode. */
  'editor.linkedEditingBackground'?: Color
  /** Foreground color of the placeholder text in the editor. */
  'editor.placeholder.foreground'?: Color
  /** Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editor.rangeHighlightBackground'?: Color
  /** Background color of the border around highlighted ranges. */
  'editor.rangeHighlightBorder'?: Color
  /** Color of the editor selection. */
  'editor.selectionBackground'?: Color
  /** Color of the selected text for high contrast. */
  'editor.selectionForeground'?: Color
  /** Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations. */
  'editor.selectionHighlightBackground'?: Color
  /** Border color for regions with the same content as the selection. */
  'editor.selectionHighlightBorder'?: Color
  /** Highlight background color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBackground'?: Color
  /** Highlight border color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBorder'?: Color
  /** Highlight background color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBackground'?: Color
  /** Highlight border color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBorder'?: Color
  /** Background color of the top stack frame highlight in the editor. */
  'editor.stackFrameHighlightBackground'?: Color
  /** Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.symbolHighlightBackground'?: Color
  /** Background color of the border around highlighted symbols. */
  'editor.symbolHighlightBorder'?: Color
  /** Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightBackground'?: Color
  /** Border color of a symbol during read-access, for example when reading a variable. */
  'editor.wordHighlightBorder'?: Color
  /** Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightStrongBackground'?: Color
  /** Border color of a symbol during write-access, for example when writing to a variable. */
  'editor.wordHighlightStrongBorder'?: Color
  /** Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightTextBackground'?: Color
  /** Border color of a textual occurrence for a symbol. */
  'editor.wordHighlightTextBorder'?: Color
  /** Action List background color. */
  'editorActionList.background'?: Color
  /** Action List background color for the focused item. */
  'editorActionList.focusBackground'?: Color
  /** Action List foreground color for the focused item. */
  'editorActionList.focusForeground'?: Color
  /** Action List foreground color. */
  'editorActionList.foreground'?: Color
  /** Foreground color of brackets (1). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground1'?: Color
  /** Foreground color of brackets (2). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground2'?: Color
  /** Foreground color of brackets (3). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground3'?: Color
  /** Foreground color of brackets (4). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground4'?: Color
  /** Foreground color of brackets (5). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground5'?: Color
  /** Foreground color of brackets (6). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground6'?: Color
  /** Foreground color of unexpected brackets. */
  'editorBracketHighlight.unexpectedBracket.foreground'?: Color
  /** Background color behind matching brackets. */
  'editorBracketMatch.background'?: Color
  /** Color for matching brackets boxes. */
  'editorBracketMatch.border'?: Color
  /** Background color of active bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground1'?: Color
  /** Background color of active bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground2'?: Color
  /** Background color of active bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground3'?: Color
  /** Background color of active bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground4'?: Color
  /** Background color of active bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground5'?: Color
  /** Background color of active bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground6'?: Color
  /** Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background1'?: Color
  /** Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background2'?: Color
  /** Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background3'?: Color
  /** Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background4'?: Color
  /** Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background5'?: Color
  /** Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background6'?: Color
  /** Foreground color of an editor CodeLens. */
  'editorCodeLens.foreground'?: Color
  /** Color of background for currently selected or hovered comment range. */
  'editorCommentsWidget.rangeActiveBackground'?: Color
  /** Color of background for comment ranges. */
  'editorCommentsWidget.rangeBackground'?: Color
  /** Background color for comment reply input box. */
  'editorCommentsWidget.replyInputBackground'?: Color
  /** Color of borders and arrow for resolved comments. */
  'editorCommentsWidget.resolvedBorder'?: Color
  /** Color of borders and arrow for unresolved comments. */
  'editorCommentsWidget.unresolvedBorder'?: Color
  /** The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'editorCursor.background'?: Color
  /** Color of the editor cursor. */
  'editorCursor.foreground'?: Color
  /** Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorError.background'?: Color
  /** Border color of error boxes in the editor. */
  'editorError.border'?: Color
  /** Foreground color of error squiggles in the editor. */
  'editorError.foreground'?: Color
  /** Background color of the ghost text in the editor. */
  'editorGhostText.background'?: Color
  /** Border color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.border'?: Color
  /** Foreground color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.foreground'?: Color
  /** Color to separate multiple editor groups from each other. */
  'editorGroup.border'?: Color
  /** Background color when dragging editors around. */
  'editorGroup.dropBackground'?: Color
  /** Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBackground'?: Color
  /** Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBorder'?: Color
  /** Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptForeground'?: Color
  /** Background color of an empty editor group. */
  'editorGroup.emptyBackground'?: Color
  /** Border color of an empty editor group that is focused. */
  'editorGroup.focusedEmptyBorder'?: Color
  /** Border color between editor group header and editor (below breadcrumbs if enabled). */
  'editorGroupHeader.border'?: Color
  /** Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`). */
  'editorGroupHeader.noTabsBackground'?: Color
  /** Background color of the Tabs container. */
  'editorGroupHeader.tabsBackground'?: Color
  /** Border color below the editor tabs control when tabs are enabled. */
  'editorGroupHeader.tabsBorder'?: Color
  /** Editor gutter background color for lines that are added. */
  'editorGutter.addedBackground'?: Color
  /** Background color of the editor gutter. The gutter contains the glyph margins and the line numbers. */
  'editorGutter.background'?: Color
  /** Editor gutter decoration color for commenting glyphs. */
  'editorGutter.commentGlyphForeground'?: Color
  /** Editor gutter decoration color for commenting ranges. */
  'editorGutter.commentRangeForeground'?: Color
  /** Editor gutter decoration color for commenting glyphs for unresolved comment threads. */
  'editorGutter.commentUnresolvedGlyphForeground'?: Color
  /** Editor gutter background color for lines that are deleted. */
  'editorGutter.deletedBackground'?: Color
  /** Color of the folding control in the editor gutter. */
  'editorGutter.foldingControlForeground'?: Color
  /** Editor gutter decoration color for gutter item background. This color should be opaque. */
  'editorGutter.itemBackground'?: Color
  /** Editor gutter decoration color for gutter item glyphs. */
  'editorGutter.itemGlyphForeground'?: Color
  /** Editor gutter background color for lines that are modified. */
  'editorGutter.modifiedBackground'?: Color
  /** Border color of hint boxes in the editor. */
  'editorHint.border'?: Color
  /** Foreground color of hints in the editor. */
  'editorHint.foreground'?: Color
  /** Background color of the editor hover. */
  'editorHoverWidget.background'?: Color
  /** Border color of the editor hover. */
  'editorHoverWidget.border'?: Color
  /** Foreground color of the editor hover. */
  'editorHoverWidget.foreground'?: Color
  /** Foreground color of the active item in the parameter hint. */
  'editorHoverWidget.highlightForeground'?: Color
  /** Background color of the editor hover status bar. */
  'editorHoverWidget.statusBarBackground'?: Color
  /** Color of the active editor indentation guide. */
  'editorIndentGuide.activeBackground'?: Color
  /** Color of the active editor indentation guides (1). */
  'editorIndentGuide.activeBackground1'?: Color
  /** Color of the active editor indentation guides (2). */
  'editorIndentGuide.activeBackground2'?: Color
  /** Color of the active editor indentation guides (3). */
  'editorIndentGuide.activeBackground3'?: Color
  /** Color of the active editor indentation guides (4). */
  'editorIndentGuide.activeBackground4'?: Color
  /** Color of the active editor indentation guides (5). */
  'editorIndentGuide.activeBackground5'?: Color
  /** Color of the active editor indentation guides (6). */
  'editorIndentGuide.activeBackground6'?: Color
  /** Color of the editor indentation guides. */
  'editorIndentGuide.background'?: Color
  /** Color of the editor indentation guides (1). */
  'editorIndentGuide.background1'?: Color
  /** Color of the editor indentation guides (2). */
  'editorIndentGuide.background2'?: Color
  /** Color of the editor indentation guides (3). */
  'editorIndentGuide.background3'?: Color
  /** Color of the editor indentation guides (4). */
  'editorIndentGuide.background4'?: Color
  /** Color of the editor indentation guides (5). */
  'editorIndentGuide.background5'?: Color
  /** Color of the editor indentation guides (6). */
  'editorIndentGuide.background6'?: Color
  /** Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorInfo.background'?: Color
  /** Border color of info boxes in the editor. */
  'editorInfo.border'?: Color
  /** Foreground color of info squiggles in the editor. */
  'editorInfo.foreground'?: Color
  /** Background color of inline hints. */
  'editorInlayHint.background'?: Color
  /** Foreground color of inline hints. */
  'editorInlayHint.foreground'?: Color
  /** Background color of inline hints for parameters */
  'editorInlayHint.parameterBackground'?: Color
  /** Foreground color of inline hints for parameters */
  'editorInlayHint.parameterForeground'?: Color
  /** Background color of inline hints for types */
  'editorInlayHint.typeBackground'?: Color
  /** Foreground color of inline hints for types */
  'editorInlayHint.typeForeground'?: Color
  /** The color used for the lightbulb actions icon. */
  'editorLightBulb.foreground'?: Color
  /** The color used for the lightbulb AI icon. */
  'editorLightBulbAi.foreground'?: Color
  /** The color used for the lightbulb auto fix actions icon. */
  'editorLightBulbAutoFix.foreground'?: Color
  /** Color of the active editor line number. */
  'editorLineNumber.activeForeground'?: Color
  /** Color of the final editor line when editor.renderFinalNewline is set to dimmed. */
  'editorLineNumber.dimmedForeground'?: Color
  /** Color of editor line numbers. */
  'editorLineNumber.foreground'?: Color
  /** Color of active links. */
  'editorLink.activeForeground'?: Color
  /** Editor marker navigation widget background. */
  'editorMarkerNavigation.background'?: Color
  /** Editor marker navigation widget error color. */
  'editorMarkerNavigationError.background'?: Color
  /** Editor marker navigation widget error heading background. */
  'editorMarkerNavigationError.headerBackground'?: Color
  /** Editor marker navigation widget info color. */
  'editorMarkerNavigationInfo.background'?: Color
  /** Editor marker navigation widget info heading background. */
  'editorMarkerNavigationInfo.headerBackground'?: Color
  /** Editor marker navigation widget warning color. */
  'editorMarkerNavigationWarning.background'?: Color
  /** Editor marker navigation widget warning heading background. */
  'editorMarkerNavigationWarning.headerBackground'?: Color
  /** Minimap marker color for inline chat inserted content. */
  'editorMinimap.inlineChatInserted'?: Color
  /** The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.primary.background'?: Color
  /** Color of the primary editor cursor when multiple cursors are present. */
  'editorMultiCursor.primary.foreground'?: Color
  /** The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.secondary.background'?: Color
  /** Color of secondary editor cursors when multiple cursors are present. */
  'editorMultiCursor.secondary.foreground'?: Color
  /** Overview ruler marker color for added content. */
  'editorOverviewRuler.addedForeground'?: Color
  /** Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor. */
  'editorOverviewRuler.background'?: Color
  /** Color of the overview ruler border. */
  'editorOverviewRuler.border'?: Color
  /** Overview ruler marker color for matching brackets. */
  'editorOverviewRuler.bracketMatchForeground'?: Color
  /** Editor overview ruler decoration color for resolved comments. This color should be opaque. */
  'editorOverviewRuler.commentForeground'?: Color
  /** Editor overview ruler decoration color for unresolved comments. This color should be opaque. */
  'editorOverviewRuler.commentUnresolvedForeground'?: Color
  /** Common ancestor overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.commonContentForeground'?: Color
  /** Current overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.currentContentForeground'?: Color
  /** Overview ruler marker color for deleted content. */
  'editorOverviewRuler.deletedForeground'?: Color
  /** Overview ruler marker color for errors. */
  'editorOverviewRuler.errorForeground'?: Color
  /** Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.findMatchForeground'?: Color
  /** Incoming overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.incomingContentForeground'?: Color
  /** Overview ruler marker color for infos. */
  'editorOverviewRuler.infoForeground'?: Color
  /** Overview ruler marker color for inline chat inserted content. */
  'editorOverviewRuler.inlineChatInserted'?: Color
  /** Overview ruler marker color for inline chat removed content. */
  'editorOverviewRuler.inlineChatRemoved'?: Color
  /** Overview ruler marker color for modified content. */
  'editorOverviewRuler.modifiedForeground'?: Color
  /** Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.rangeHighlightForeground'?: Color
  /** Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.selectionHighlightForeground'?: Color
  /** Overview ruler marker color for warnings. */
  'editorOverviewRuler.warningForeground'?: Color
  /** Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightForeground'?: Color
  /** Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightStrongForeground'?: Color
  /** Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightTextForeground'?: Color
  /** Background color of the editor pane visible on the left and right side of the centered editor layout. */
  'editorPane.background'?: Color
  /** Color of the editor rulers. */
  'editorRuler.foreground'?: Color
  /** Editor sticky scroll background color. */
  'editorStickyScroll.background'?: Color
  /** Border color of sticky scroll in the editor. */
  'editorStickyScroll.border'?: Color
  /** Shadow color of sticky scroll in the editor. */
  'editorStickyScroll.shadow'?: Color
  /** Editor sticky scroll on hover background color. */
  'editorStickyScrollHover.background'?: Color
  /** Background color of the suggestion widget. */
  'editorSuggestWidget.background'?: Color
  /** Border color of the suggestion widget. */
  'editorSuggestWidget.border'?: Color
  /** Color of the match highlights in the suggest widget when an item is focused. */
  'editorSuggestWidget.focusHighlightForeground'?: Color
  /** Foreground color of the suggestion widget. */
  'editorSuggestWidget.foreground'?: Color
  /** Color of the match highlights in the suggestion widget. */
  'editorSuggestWidget.highlightForeground'?: Color
  /** Background color of the selected entry in the suggestion widget. */
  'editorSuggestWidget.selectedBackground'?: Color
  /** Foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedForeground'?: Color
  /** Icon foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedIconForeground'?: Color
  /** Foreground color of the suggest widget status. */
  'editorSuggestWidgetStatus.foreground'?: Color
  /** Background color used to highlight unicode characters. */
  'editorUnicodeHighlight.background'?: Color
  /** Border color used to highlight unicode characters. */
  'editorUnicodeHighlight.border'?: Color
  /** Border color of unnecessary (unused) source code in the editor. */
  'editorUnnecessaryCode.border'?: Color
  /** Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out. */
  'editorUnnecessaryCode.opacity'?: Color
  /** Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorWarning.background'?: Color
  /** Border color of warning boxes in the editor. */
  'editorWarning.border'?: Color
  /** Foreground color of warning squiggles in the editor. */
  'editorWarning.foreground'?: Color
  /** Foreground color for the labels in the editor watermark. */
  'editorWatermark.foreground'?: Color
  /** Color of whitespace characters in the editor. */
  'editorWhitespace.foreground'?: Color
  /** Background color of editor widgets, such as Find/Replace. */
  'editorWidget.background'?: Color
  /** Border color of the editor widget unless the widget does not contain a border or defines its own border color. */
  'editorWidget.border'?: Color
  /** Foreground color of editor widgets, such as find/replace. */
  'editorWidget.foreground'?: Color
  /** Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget. */
  'editorWidget.resizeBorder'?: Color
  /** Overall foreground color for error messages (this color is only used if not overridden by a component). */
  errorForeground?: Color
  /** Background color for the remote badge in the extensions view. */
  'extensionBadge.remoteBackground'?: Color
  /** Foreground color for the remote badge in the extensions view. */
  'extensionBadge.remoteForeground'?: Color
  /** Button background color for extension actions. */
  'extensionButton.background'?: Color
  /** Button foreground color for extension actions. */
  'extensionButton.foreground'?: Color
  /** Button background hover color for extension actions. */
  'extensionButton.hoverBackground'?: Color
  /** Extension view button background color. */
  'extensionButton.prominentBackground'?: Color
  /** Extension view button foreground color (for example **Install** button). */
  'extensionButton.prominentForeground'?: Color
  /** Extension view button background hover color. */
  'extensionButton.prominentHoverBackground'?: Color
  /** Button separator color for extension actions. */
  'extensionButton.separator'?: Color
  /** The icon color for pre-release extension. */
  'extensionIcon.preReleaseForeground'?: Color
  /** The icon color for private extensions. */
  'extensionIcon.privateForeground'?: Color
  /** The icon color for extension sponsor. */
  'extensionIcon.sponsorForeground'?: Color
  /** The icon color for extension ratings. */
  'extensionIcon.starForeground'?: Color
  /** The icon color for extension verified publisher. */
  'extensionIcon.verifiedForeground'?: Color
  /** Overall border color for focused elements. This color is only used if not overridden by a component. */
  focusBorder?: Color
  /** Overall foreground color. This color is only used if not overridden by a component. */
  foreground?: Color
  /** Gauge background color. */
  'gauge.background'?: Color
  /** Gauge border color. */
  'gauge.border'?: Color
  /** Gauge error background color. */
  'gauge.errorBackground'?: Color
  /** Gauge error foreground color. */
  'gauge.errorForeground'?: Color
  /** Gauge foreground color. */
  'gauge.foreground'?: Color
  /** Gauge warning background color. */
  'gauge.warningBackground'?: Color
  /** Gauge warning foreground color. */
  'gauge.warningForeground'?: Color
  /** Color for the blame editor decoration. */
  'git.blame.editorDecorationForeground'?: Color
  /** Color for added Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.addedResourceForeground'?: Color
  /** Color for conflicting Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.conflictingResourceForeground'?: Color
  /** Color for deleted Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.deletedResourceForeground'?: Color
  /** Color for ignored Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.ignoredResourceForeground'?: Color
  /** Color for modified Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.modifiedResourceForeground'?: Color
  /** Color for renamed or copied Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.renamedResourceForeground'?: Color
  /** Color for staged deletions git decorations.  Used for file labels and the SCM viewlet. */
  'gitDecoration.stageDeletedResourceForeground'?: Color
  /** Color for staged modifications git decorations.  Used for file labels and the SCM viewlet. */
  'gitDecoration.stageModifiedResourceForeground'?: Color
  /** Color for submodule resources. */
  'gitDecoration.submoduleResourceForeground'?: Color
  /** Color for untracked Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.untrackedResourceForeground'?: Color
  /** The default color for icons in the workbench. */
  'icon.foreground'?: Color
  /** Background color of the interactive editor widget. */
  'inlineChat.background'?: Color
  /** Border color of the interactive editor widget. */
  'inlineChat.border'?: Color
  /** Foreground color of the interactive editor widget */
  'inlineChat.foreground'?: Color
  /** Shadow color of the interactive editor widget. */
  'inlineChat.shadow'?: Color
  /** Background color of inserted text in the interactive editor input. */
  'inlineChatDiff.inserted'?: Color
  /** Background color of removed text in the interactive editor input. */
  'inlineChatDiff.removed'?: Color
  /** Background color of the interactive editor input. */
  'inlineChatInput.background'?: Color
  /** Border color of the interactive editor input. */
  'inlineChatInput.border'?: Color
  /** Border color of the interactive editor input when focused. */
  'inlineChatInput.focusBorder'?: Color
  /** Foreground color of the interactive editor input placeholder. */
  'inlineChatInput.placeholderForeground'?: Color
  /** Background color for the inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.background'?: Color
  /** Background color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBackground'?: Color
  /** Foreground color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryForeground'?: Color
  /** Background color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBackground'?: Color
  /** Foreground color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryForeground'?: Color
  /** Background color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBackground'?: Color
  /** Foreground color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulForeground'?: Color
  /** Background color for the modified text in inline edits. */
  'inlineEdit.modifiedBackground'?: Color
  /** Border color for the modified text in inline edits. */
  'inlineEdit.modifiedBorder'?: Color
  /** Background color for the changed lines in the modified text of inline edits. */
  'inlineEdit.modifiedChangedLineBackground'?: Color
  /** Overlay color for the changed text in the modified text of inline edits. */
  'inlineEdit.modifiedChangedTextBackground'?: Color
  /** Background color for the original text in inline edits. */
  'inlineEdit.originalBackground'?: Color
  /** Border color for the original text in inline edits. */
  'inlineEdit.originalBorder'?: Color
  /** Background color for the changed lines in the original text of inline edits. */
  'inlineEdit.originalChangedLineBackground'?: Color
  /** Overlay color for the changed text in the original text of inline edits. */
  'inlineEdit.originalChangedTextBackground'?: Color
  /** Input box background. */
  'input.background'?: Color
  /** Input box border. */
  'input.border'?: Color
  /** Input box foreground. */
  'input.foreground'?: Color
  /** Input box foreground color for placeholder text. */
  'input.placeholderForeground'?: Color
  /** Background color of activated options in input fields. */
  'inputOption.activeBackground'?: Color
  /** Border color of activated options in input fields. */
  'inputOption.activeBorder'?: Color
  /** Foreground color of activated options in input fields. */
  'inputOption.activeForeground'?: Color
  /** Background color of activated options in input fields. */
  'inputOption.hoverBackground'?: Color
  /** Input validation background color for error severity. */
  'inputValidation.errorBackground'?: Color
  /** Input validation border color for error severity. */
  'inputValidation.errorBorder'?: Color
  /** Input validation foreground color for error severity. */
  'inputValidation.errorForeground'?: Color
  /** Input validation background color for information severity. */
  'inputValidation.infoBackground'?: Color
  /** Input validation border color for information severity. */
  'inputValidation.infoBorder'?: Color
  /** Input validation foreground color for information severity. */
  'inputValidation.infoForeground'?: Color
  /** Input validation background color for information warning. */
  'inputValidation.warningBackground'?: Color
  /** Input validation border color for warning severity. */
  'inputValidation.warningBorder'?: Color
  /** Input validation foreground color for warning severity. */
  'inputValidation.warningForeground'?: Color
  /** The border color for the current interactive code cell when the editor has focus. */
  'interactive.activeCodeBorder'?: Color
  /** The border color for the current interactive code cell when the editor does not have focus. */
  'interactive.inactiveCodeBorder'?: Color
  /** Keybinding label background color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.background'?: Color
  /** Keybinding label border color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.border'?: Color
  /** Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.bottomBorder'?: Color
  /** Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.foreground'?: Color
  /** Background color for the keyboard shortcuts table header. */
  'keybindingTable.headerBackground'?: Color
  /** Background color for the keyboard shortcuts table alternating rows. */
  'keybindingTable.rowsBackground'?: Color
  /** List/Tree background color for the selected item when the list/tree is active. */
  'list.activeSelectionBackground'?: Color
  /** List/Tree foreground color for the selected item when the list/tree is active. */
  'list.activeSelectionForeground'?: Color
  /** List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.activeSelectionIconForeground'?: Color
  /** List/Tree foreground color for items that are deemphasized. */
  'list.deemphasizedForeground'?: Color
  /** List/Tree drag and drop background when moving items around using the mouse. */
  'list.dropBackground'?: Color
  /** List/Tree drag and drop border color when moving items between items when using the mouse. */
  'list.dropBetweenBackground'?: Color
  /** Foreground color of list items containing errors. */
  'list.errorForeground'?: Color
  /** Background color of the filtered matches in lists and trees. */
  'list.filterMatchBackground'?: Color
  /** Border color of the filtered matches in lists and trees. */
  'list.filterMatchBorder'?: Color
  /** List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusAndSelectionOutline'?: Color
  /** List/Tree background color for the focused item when the list/tree is active. */
  'list.focusBackground'?: Color
  /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusForeground'?: Color
  /** List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree. */
  'list.focusHighlightForeground'?: Color
  /** List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusOutline'?: Color
  /** List/Tree foreground color of the match highlights when searching inside the list/tree. */
  'list.highlightForeground'?: Color
  /** List/Tree background when hovering over items using the mouse. */
  'list.hoverBackground'?: Color
  /** List/Tree foreground when hovering over items using the mouse. */
  'list.hoverForeground'?: Color
  /** List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists. */
  'list.inactiveFocusBackground'?: Color
  /** List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveFocusOutline'?: Color
  /** List/Tree background color for the selected item when the list/tree is inactive. */
  'list.inactiveSelectionBackground'?: Color
  /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionForeground'?: Color
  /** List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionIconForeground'?: Color
  /** List/Tree foreground color for invalid items, for example an unresolved root in explorer. */
  'list.invalidItemForeground'?: Color
  /** Foreground color of list items containing warnings. */
  'list.warningForeground'?: Color
  /** List/Tree Filter background color of typed text when searching inside the list/tree. */
  'listFilterWidget.background'?: Color
  /** List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree. */
  'listFilterWidget.noMatchesOutline'?: Color
  /** List/Tree Filter Widget's outline color of typed text when searching inside the list/tree. */
  'listFilterWidget.outline'?: Color
  /** Shadow color of the type filter widget in lists and tree. */
  'listFilterWidget.shadow'?: Color
  /** Background color of menu items. */
  'menu.background'?: Color
  /** Border color of menus. */
  'menu.border'?: Color
  /** Foreground color of menu items. */
  'menu.foreground'?: Color
  /** Background color of the selected menu item in menus. */
  'menu.selectionBackground'?: Color
  /** Border color of the selected menu item in menus. */
  'menu.selectionBorder'?: Color
  /** Foreground color of the selected menu item in menus. */
  'menu.selectionForeground'?: Color
  /** Color of a separator menu item in menus. */
  'menu.separatorBackground'?: Color
  /** Background color of the selected menu item in the menubar. */
  'menubar.selectionBackground'?: Color
  /** Border color of the selected menu item in the menubar. */
  'menubar.selectionBorder'?: Color
  /** Foreground color of the selected menu item in the menubar. */
  'menubar.selectionForeground'?: Color
  /** Border color on headers and the splitter in inline merge conflicts. */
  'merge.border'?: Color
  /** Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonContentBackground'?: Color
  /** Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonHeaderBackground'?: Color
  /** Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentContentBackground'?: Color
  /** Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentHeaderBackground'?: Color
  /** Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingContentBackground'?: Color
  /** Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingHeaderBackground'?: Color
  /** The background color for changes. */
  'mergeEditor.change.background'?: Color
  /** The background color for word changes. */
  'mergeEditor.change.word.background'?: Color
  /** The background color for changes in base. */
  'mergeEditor.changeBase.background'?: Color
  /** The background color for word changes in base. */
  'mergeEditor.changeBase.word.background'?: Color
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: Color
  /** The border color of handled focused conflicts. */
  'mergeEditor.conflict.handledFocused.border'?: Color
  /** The border color of handled unfocused conflicts. */
  'mergeEditor.conflict.handledUnfocused.border'?: Color
  /** The background color of decorations in input 1. */
  'mergeEditor.conflict.input1.background'?: Color
  /** The background color of decorations in input 2. */
  'mergeEditor.conflict.input2.background'?: Color
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: Color
  /** The border color of unhandled focused conflicts. */
  'mergeEditor.conflict.unhandledFocused.border'?: Color
  /** The border color of unhandled unfocused conflicts. */
  'mergeEditor.conflict.unhandledUnfocused.border'?: Color
  /** The background of the "Conflicting Lines" text. */
  'mergeEditor.conflictingLines.background'?: Color
  /** Minimap background color. */
  'minimap.background'?: Color
  /** Color of pending edit regions in the minimap. */
  'minimap.chatEditHighlight'?: Color
  /** Highlight color for errors within the editor. */
  'minimap.errorHighlight'?: Color
  /** Highlight color for matches from search within files. */
  'minimap.findMatchHighlight'?: Color
  /** Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity. */
  'minimap.foregroundOpacity'?: Color
  /** Minimap marker color for infos. */
  'minimap.infoHighlight'?: Color
  /** Highlight color for the editor selection. */
  'minimap.selectionHighlight'?: Color
  /** Minimap marker color for repeating editor selections. */
  'minimap.selectionOccurrenceHighlight'?: Color
  /** Highlight color for warnings within the editor. */
  'minimap.warningHighlight'?: Color
  /** Minimap gutter color for added content. */
  'minimapGutter.addedBackground'?: Color
  /** Minimap gutter color for deleted content. */
  'minimapGutter.deletedBackground'?: Color
  /** Minimap gutter color for modified content. */
  'minimapGutter.modifiedBackground'?: Color
  /** Minimap slider background color when clicked on. */
  'minimapSlider.activeBackground'?: Color
  /** Minimap slider background color. */
  'minimapSlider.background'?: Color
  /** Minimap slider background color when hovering. */
  'minimapSlider.hoverBackground'?: Color
  /** The background color of the multi file diff editor */
  'multiDiffEditor.background'?: Color
  /** The border color of the multi file diff editor */
  'multiDiffEditor.border'?: Color
  /** The background color of the diff editor's header */
  'multiDiffEditor.headerBackground'?: Color
  /** The border color for notebook cells. */
  'notebook.cellBorderColor'?: Color
  /** The color of the notebook cell editor background */
  'notebook.cellEditorBackground'?: Color
  /** The background color of a cell when the cell is hovered. */
  'notebook.cellHoverBackground'?: Color
  /** The color of the notebook cell insertion indicator. */
  'notebook.cellInsertionIndicator'?: Color
  /** The background color of notebook cell status bar items. */
  'notebook.cellStatusBarItemHoverBackground'?: Color
  /** The color of the separator in the cell bottom toolbar */
  'notebook.cellToolbarSeparator'?: Color
  /** Notebook background color. */
  'notebook.editorBackground'?: Color
  /** The background color of a cell when the cell is focused. */
  'notebook.focusedCellBackground'?: Color
  /** The color of the cell's focus indicator borders when the cell is focused. */
  'notebook.focusedCellBorder'?: Color
  /** The color of the notebook cell editor border. */
  'notebook.focusedEditorBorder'?: Color
  /** The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor. */
  'notebook.inactiveFocusedCellBorder'?: Color
  /** The color of the cell's borders when multiple cells are selected. */
  'notebook.inactiveSelectedCellBorder'?: Color
  /** The Color of the notebook output container background. */
  'notebook.outputContainerBackgroundColor'?: Color
  /** The border color of the notebook output container. */
  'notebook.outputContainerBorderColor'?: Color
  /** The background color of a cell when the cell is selected. */
  'notebook.selectedCellBackground'?: Color
  /** The color of the cell's top and bottom border when the cell is selected but not focused. */
  'notebook.selectedCellBorder'?: Color
  /** Background color of highlighted cell */
  'notebook.symbolHighlightBackground'?: Color
  /** The color of the running cell decoration in the notebook editor overview ruler. */
  'notebookEditorOverviewRuler.runningCellForeground'?: Color
  /** Notebook scrollbar slider background color when clicked on. */
  'notebookScrollbarSlider.activeBackground'?: Color
  /** Notebook scrollbar slider background color. */
  'notebookScrollbarSlider.background'?: Color
  /** Notebook scrollbar slider background color when hovering. */
  'notebookScrollbarSlider.hoverBackground'?: Color
  /** The error icon color of notebook cells in the cell status bar. */
  'notebookStatusErrorIcon.foreground'?: Color
  /** The running icon color of notebook cells in the cell status bar. */
  'notebookStatusRunningIcon.foreground'?: Color
  /** The success icon color of notebook cells in the cell status bar. */
  'notebookStatusSuccessIcon.foreground'?: Color
  /** Notification Center border color. */
  'notificationCenter.border'?: Color
  /** Notification Center header background color. */
  'notificationCenterHeader.background'?: Color
  /** Notification Center header foreground color. */
  'notificationCenterHeader.foreground'?: Color
  /** Notification links foreground color. */
  'notificationLink.foreground'?: Color
  /** Notification background color. */
  'notifications.background'?: Color
  /** Notification border color separating from other notifications in the Notification Center. */
  'notifications.border'?: Color
  /** Notification foreground color. */
  'notifications.foreground'?: Color
  /** The color used for the notification error icon. */
  'notificationsErrorIcon.foreground'?: Color
  /** The color used for the notification info icon. */
  'notificationsInfoIcon.foreground'?: Color
  /** The color used for the notification warning icon. */
  'notificationsWarningIcon.foreground'?: Color
  /** Notification toast border color. */
  'notificationToast.border'?: Color
  /** Output view background color. */
  'outputView.background'?: Color
  /** Output view sticky scroll background color. */
  'outputViewStickyScroll.background'?: Color
  /** Panel background color. */
  'panel.background'?: Color
  /** Panel border color to separate the panel from the editor. */
  'panel.border'?: Color
  /** Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panel.dropBorder'?: Color
  /** Input box border for inputs in the panel. */
  'panelInput.border'?: Color
  /** Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.border'?: Color
  /** Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.dropBackground'?: Color
  /** Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.background'?: Color
  /** Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.border'?: Color
  /** Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.foreground'?: Color
  /** Background color of sticky scroll in the panel. */
  'panelStickyScroll.background'?: Color
  /** Border color of sticky scroll in the panel. */
  'panelStickyScroll.border'?: Color
  /** Shadow color of sticky scroll in the panel. */
  'panelStickyScroll.shadow'?: Color
  /** Border color for the active panel title. */
  'panelTitle.activeBorder'?: Color
  /** Title color for the active panel. */
  'panelTitle.activeForeground'?: Color
  /** Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitle.border'?: Color
  /** Title color for the inactive panel. */
  'panelTitle.inactiveForeground'?: Color
  /** Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.background'?: Color
  /** Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.foreground'?: Color
  /** Color of the peek view borders and arrow. */
  'peekView.border'?: Color
  /** Background color of the peek view editor. */
  'peekViewEditor.background'?: Color
  /** Match highlight color in the peek view editor. */
  'peekViewEditor.matchHighlightBackground'?: Color
  /** Match highlight border color in the peek view editor. */
  'peekViewEditor.matchHighlightBorder'?: Color
  /** Background color of the gutter in the peek view editor. */
  'peekViewEditorGutter.background'?: Color
  /** Background color of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScroll.background'?: Color
  /** Background color of the peek view result list. */
  'peekViewResult.background'?: Color
  /** Foreground color for file nodes in the peek view result list. */
  'peekViewResult.fileForeground'?: Color
  /** Foreground color for line nodes in the peek view result list. */
  'peekViewResult.lineForeground'?: Color
  /** Match highlight color in the peek view result list. */
  'peekViewResult.matchHighlightBackground'?: Color
  /** Background color of the selected entry in the peek view result list. */
  'peekViewResult.selectionBackground'?: Color
  /** Foreground color of the selected entry in the peek view result list. */
  'peekViewResult.selectionForeground'?: Color
  /** Background color of the peek view title area. */
  'peekViewTitle.background'?: Color
  /** Color of the peek view title info. */
  'peekViewTitleDescription.foreground'?: Color
  /** Color of the peek view title. */
  'peekViewTitleLabel.foreground'?: Color
  /** Quick picker (Quick Open) color for grouping borders. */
  'pickerGroup.border'?: Color
  /** Quick picker (Quick Open) color for grouping labels. */
  'pickerGroup.foreground'?: Color
  /** The color of the icon for a port that has an associated running process. */
  'ports.iconRunningProcessForeground'?: Color
  /** The color used for the problems error icon. */
  'problemsErrorIcon.foreground'?: Color
  /** The color used for the problems info icon. */
  'problemsInfoIcon.foreground'?: Color
  /** The color used for the problems warning icon. */
  'problemsWarningIcon.foreground'?: Color
  /** Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.background'?: Color
  /** Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.foreground'?: Color
  /** The color of the Profiles editor splitview sash border. */
  'profiles.sashBorder'?: Color
  /** Background color of the progress bar shown for long running operations. */
  'progressBar.background'?: Color
  /** Quick input background color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.background'?: Color
  /** Quick input foreground color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.foreground'?: Color
  /** Quick picker background color for the focused item. */
  'quickInputList.focusBackground'?: Color
  /** Quick picker foreground color for the focused item. */
  'quickInputList.focusForeground'?: Color
  /** Quick picker icon foreground color for the focused item. */
  'quickInputList.focusIconForeground'?: Color
  /** Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette. */
  'quickInputTitle.background'?: Color
  /** Background color of active radio option. */
  'radio.activeBackground'?: Color
  /** Border color of the active radio option. */
  'radio.activeBorder'?: Color
  /** Foreground color of active radio option. */
  'radio.activeForeground'?: Color
  /** Background color of inactive radio option. */
  'radio.inactiveBackground'?: Color
  /** Border color of the inactive radio option. */
  'radio.inactiveBorder'?: Color
  /** Foreground color of inactive radio option. */
  'radio.inactiveForeground'?: Color
  /** Background color of inactive active radio option when hovering. */
  'radio.inactiveHoverBackground'?: Color
  /** The hover border color for draggable sashes. */
  'sash.hoverBorder'?: Color
  /** Source control graph foreground color (1). */
  'scmGraph.foreground1'?: Color
  /** Source control graph foreground color (2). */
  'scmGraph.foreground2'?: Color
  /** Source control graph foreground color (3). */
  'scmGraph.foreground3'?: Color
  /** Source control graph foreground color (4). */
  'scmGraph.foreground4'?: Color
  /** Source control graph foreground color (5). */
  'scmGraph.foreground5'?: Color
  /** History item base reference color. */
  'scmGraph.historyItemBaseRefColor'?: Color
  /** History item hover additions foreground color. */
  'scmGraph.historyItemHoverAdditionsForeground'?: Color
  /** History item hover default label background color. */
  'scmGraph.historyItemHoverDefaultLabelBackground'?: Color
  /** History item hover default label foreground color. */
  'scmGraph.historyItemHoverDefaultLabelForeground'?: Color
  /** History item hover deletions foreground color. */
  'scmGraph.historyItemHoverDeletionsForeground'?: Color
  /** History item hover label foreground color. */
  'scmGraph.historyItemHoverLabelForeground'?: Color
  /** History item reference color. */
  'scmGraph.historyItemRefColor'?: Color
  /** History item remote reference color. */
  'scmGraph.historyItemRemoteRefColor'?: Color
  /** Scrollbar slider shadow to indicate that the view is scrolled. */
  'scrollbar.shadow'?: Color
  /** Scrollbar slider background color when clicked on. */
  'scrollbarSlider.activeBackground'?: Color
  /** Scrollbar slider background color. */
  'scrollbarSlider.background'?: Color
  /** Scrollbar slider background color when hovering. */
  'scrollbarSlider.hoverBackground'?: Color
  /** Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "`{x} results in {y} files`". */
  'search.resultsInfoForeground'?: Color
  /** Color of the editor's results. */
  'searchEditor.findMatchBackground'?: Color
  /** Border color of the editor's results. */
  'searchEditor.findMatchBorder'?: Color
  /** Search editor text input box border. */
  'searchEditor.textInputBorder'?: Color
  /** Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal). */
  'selection.background'?: Color
  /** Checkbox background. */
  'settings.checkboxBackground'?: Color
  /** Checkbox border. */
  'settings.checkboxBorder'?: Color
  /** Checkbox foreground. */
  'settings.checkboxForeground'?: Color
  /** Dropdown background. */
  'settings.dropdownBackground'?: Color
  /** Dropdown border. */
  'settings.dropdownBorder'?: Color
  /** Dropdown foreground. */
  'settings.dropdownForeground'?: Color
  /** Dropdown list border. */
  'settings.dropdownListBorder'?: Color
  /** Background color of a focused setting row. */
  'settings.focusedRowBackground'?: Color
  /** The color of the row's top and bottom border when the row is focused. */
  'settings.focusedRowBorder'?: Color
  /** The color of the header container border. */
  'settings.headerBorder'?: Color
  /** The foreground color for a section header or active title. */
  'settings.headerForeground'?: Color
  /** The line that indicates a modified setting. */
  'settings.modifiedItemIndicator'?: Color
  /** Number input box background. */
  'settings.numberInputBackground'?: Color
  /** Number input box border. */
  'settings.numberInputBorder'?: Color
  /** Number input box foreground. */
  'settings.numberInputForeground'?: Color
  /** The background color of a settings row when hovered. */
  'settings.rowHoverBackground'?: Color
  /** The color of the Settings editor splitview sash border. */
  'settings.sashBorder'?: Color
  /** The foreground color for a section header or hovered title. */
  'settings.settingsHeaderHoverForeground'?: Color
  /** Text input box background. */
  'settings.textInputBackground'?: Color
  /** Text input box border. */
  'settings.textInputBorder'?: Color
  /** Text input box foreground. */
  'settings.textInputForeground'?: Color
  /** Side Bar background color. */
  'sideBar.background'?: Color
  /** Side Bar border color on the side separating the editor. */
  'sideBar.border'?: Color
  /** Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. */
  'sideBar.dropBackground'?: Color
  /** Side Bar foreground color. The Side Bar is the container for views like Explorer and Search. */
  'sideBar.foreground'?: Color
  /** Border color between the activity bar at the top/bottom and the views. */
  'sideBarActivityBarTop.border'?: Color
  /** Side Bar section header background color. */
  'sideBarSectionHeader.background'?: Color
  /** Side bar section header border color. */
  'sideBarSectionHeader.border'?: Color
  /** Side Bar section header foreground color. */
  'sideBarSectionHeader.foreground'?: Color
  /** Background color of sticky scroll in the side bar. */
  'sideBarStickyScroll.background'?: Color
  /** Border color of sticky scroll in the side bar. */
  'sideBarStickyScroll.border'?: Color
  /** Shadow color of sticky scroll in the side bar. */
  'sideBarStickyScroll.shadow'?: Color
  /** Side bar title background color. The side bar is the container for views like explorer and search. */
  'sideBarTitle.background'?: Color
  /** Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search. */
  'sideBarTitle.border'?: Color
  /** Side Bar title foreground color. */
  'sideBarTitle.foreground'?: Color
  /** Color to separate two editors from each other when shown side by side in an editor group from top to bottom. */
  'sideBySideEditor.horizontalBorder'?: Color
  /** Color to separate two editors from each other when shown side by side in an editor group from left to right. */
  'sideBySideEditor.verticalBorder'?: Color
  /** Border color of the sash border. */
  'simpleFindWidget.sashBorder'?: Color
  /** Standard Status Bar background color. */
  'statusBar.background'?: Color
  /** Status Bar border color separating the Status Bar and editor. */
  'statusBar.border'?: Color
  /** Status Bar background color when a program is being debugged. */
  'statusBar.debuggingBackground'?: Color
  /** Status Bar border color separating the Status Bar and editor when a program is being debugged. */
  'statusBar.debuggingBorder'?: Color
  /** Status Bar foreground color when a program is being debugged. */
  'statusBar.debuggingForeground'?: Color
  /** Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBar.focusBorder'?: Color
  /** Status Bar foreground color. */
  'statusBar.foreground'?: Color
  /** Status Bar background color when no folder is opened. */
  'statusBar.noFolderBackground'?: Color
  /** Status Bar border color separating the Status Bar and editor when no folder is opened. */
  'statusBar.noFolderBorder'?: Color
  /** Status Bar foreground color when no folder is opened. */
  'statusBar.noFolderForeground'?: Color
  /** Status Bar item background color when clicking. */
  'statusBarItem.activeBackground'?: Color
  /** Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window. */
  'statusBarItem.compactHoverBackground'?: Color
  /** Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorBackground'?: Color
  /** Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorForeground'?: Color
  /** Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.errorHoverBackground'?: Color
  /** Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.errorHoverForeground'?: Color
  /** Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBarItem.focusBorder'?: Color
  /** Status Bar item background color when hovering. */
  'statusBarItem.hoverBackground'?: Color
  /** Status bar item foreground color when hovering. The status bar is shown in the bottom of the window. */
  'statusBarItem.hoverForeground'?: Color
  /** Status bar item background color when the workbench is offline. */
  'statusBarItem.offlineBackground'?: Color
  /** Status bar item foreground color when the workbench is offline. */
  'statusBarItem.offlineForeground'?: Color
  /** Status bar item background hover color when the workbench is offline. */
  'statusBarItem.offlineHoverBackground'?: Color
  /** Status bar item foreground hover color when the workbench is offline. */
  'statusBarItem.offlineHoverForeground'?: Color
  /** Status Bar prominent items background color. */
  'statusBarItem.prominentBackground'?: Color
  /** Status Bar prominent items foreground color. */
  'statusBarItem.prominentForeground'?: Color
  /** Status Bar prominent items background color when hovering. */
  'statusBarItem.prominentHoverBackground'?: Color
  /** Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window. */
  'statusBarItem.prominentHoverForeground'?: Color
  /** Background color for the remote indicator on the status bar. */
  'statusBarItem.remoteBackground'?: Color
  /** Foreground color for the remote indicator on the status bar. */
  'statusBarItem.remoteForeground'?: Color
  /** Background color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverBackground'?: Color
  /** Foreground color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverForeground'?: Color
  /** Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningBackground'?: Color
  /** Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningForeground'?: Color
  /** Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverBackground'?: Color
  /** Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverForeground'?: Color
  /** The foreground color for array symbols. */
  'symbolIcon.arrayForeground'?: Color
  /** The foreground color for boolean symbols. */
  'symbolIcon.booleanForeground'?: Color
  /** The foreground color for class symbols. */
  'symbolIcon.classForeground'?: Color
  /** The foreground color for color symbols. */
  'symbolIcon.colorForeground'?: Color
  /** The foreground color for constant symbols. */
  'symbolIcon.constantForeground'?: Color
  /** The foreground color for constructor symbols. */
  'symbolIcon.constructorForeground'?: Color
  /** The foreground color for enumerator symbols. */
  'symbolIcon.enumeratorForeground'?: Color
  /** The foreground color for enumerator member symbols. */
  'symbolIcon.enumeratorMemberForeground'?: Color
  /** The foreground color for event symbols. */
  'symbolIcon.eventForeground'?: Color
  /** The foreground color for field symbols. */
  'symbolIcon.fieldForeground'?: Color
  /** The foreground color for file symbols. */
  'symbolIcon.fileForeground'?: Color
  /** The foreground color for folder symbols. */
  'symbolIcon.folderForeground'?: Color
  /** The foreground color for function symbols. */
  'symbolIcon.functionForeground'?: Color
  /** The foreground color for interface symbols. */
  'symbolIcon.interfaceForeground'?: Color
  /** The foreground color for key symbols. */
  'symbolIcon.keyForeground'?: Color
  /** The foreground color for keyword symbols. */
  'symbolIcon.keywordForeground'?: Color
  /** The foreground color for method symbols. */
  'symbolIcon.methodForeground'?: Color
  /** The foreground color for module symbols. */
  'symbolIcon.moduleForeground'?: Color
  /** The foreground color for namespace symbols. */
  'symbolIcon.namespaceForeground'?: Color
  /** The foreground color for null symbols. */
  'symbolIcon.nullForeground'?: Color
  /** The foreground color for number symbols. */
  'symbolIcon.numberForeground'?: Color
  /** The foreground color for object symbols. */
  'symbolIcon.objectForeground'?: Color
  /** The foreground color for operator symbols. */
  'symbolIcon.operatorForeground'?: Color
  /** The foreground color for package symbols. */
  'symbolIcon.packageForeground'?: Color
  /** The foreground color for property symbols. */
  'symbolIcon.propertyForeground'?: Color
  /** The foreground color for reference symbols. */
  'symbolIcon.referenceForeground'?: Color
  /** The foreground color for snippet symbols. */
  'symbolIcon.snippetForeground'?: Color
  /** The foreground color for string symbols. */
  'symbolIcon.stringForeground'?: Color
  /** The foreground color for struct symbols. */
  'symbolIcon.structForeground'?: Color
  /** The foreground color for text symbols. */
  'symbolIcon.textForeground'?: Color
  /** The foreground color for type parameter symbols. */
  'symbolIcon.typeParameterForeground'?: Color
  /** The foreground color for unit symbols. */
  'symbolIcon.unitForeground'?: Color
  /** The foreground color for variable symbols. */
  'symbolIcon.variableForeground'?: Color
  /** Active Tab background color in an active group. */
  'tab.activeBackground'?: Color
  /** Bottom border for the active tab. */
  'tab.activeBorder'?: Color
  /** Top border for the active tab. */
  'tab.activeBorderTop'?: Color
  /** Active Tab foreground color in an active group. */
  'tab.activeForeground'?: Color
  /** Border on the top of modified (dirty) active tabs in an active group. */
  'tab.activeModifiedBorder'?: Color
  /** Border to separate Tabs from each other. */
  'tab.border'?: Color
  /** Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.dragAndDropBorder'?: Color
  /** Tab background color when hovering */
  'tab.hoverBackground'?: Color
  /** Border to highlight tabs when hovering */
  'tab.hoverBorder'?: Color
  /** Tab foreground color when hovering */
  'tab.hoverForeground'?: Color
  /** Inactive Tab background color. */
  'tab.inactiveBackground'?: Color
  /** Inactive Tab foreground color in an active group. */
  'tab.inactiveForeground'?: Color
  /** Border on the top of modified (dirty) inactive tabs in an active group. */
  'tab.inactiveModifiedBorder'?: Color
  /** Border on the right of the last pinned editor to separate from unpinned editors. */
  'tab.lastPinnedBorder'?: Color
  /** Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBackground'?: Color
  /** Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBorderTop'?: Color
  /** Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedForeground'?: Color
  /** Active Tab background color in an inactive editor group. */
  'tab.unfocusedActiveBackground'?: Color
  /** Bottom border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorder'?: Color
  /** Top border for the active tab in an inactive editor group */
  'tab.unfocusedActiveBorderTop'?: Color
  /** Active tab foreground color in an inactive editor group. */
  'tab.unfocusedActiveForeground'?: Color
  /** Border on the top of modified (dirty) active tabs in an unfocused group. */
  'tab.unfocusedActiveModifiedBorder'?: Color
  /** Tab background color in an unfocused group when hovering */
  'tab.unfocusedHoverBackground'?: Color
  /** Border to highlight tabs in an unfocused group when hovering */
  'tab.unfocusedHoverBorder'?: Color
  /** Tab foreground color in an unfocused group when hovering */
  'tab.unfocusedHoverForeground'?: Color
  /** Inactive Tab background color in an unfocused group */
  'tab.unfocusedInactiveBackground'?: Color
  /** Inactive tab foreground color in an inactive editor group. */
  'tab.unfocusedInactiveForeground'?: Color
  /** Border on the top of modified (dirty) inactive tabs in an unfocused group. */
  'tab.unfocusedInactiveModifiedBorder'?: Color
  /** 'Black' ANSI color in the terminal. */
  'terminal.ansiBlack'?: Color
  /** 'Blue' ANSI color in the terminal. */
  'terminal.ansiBlue'?: Color
  /** 'BrightBlack' ANSI color in the terminal. */
  'terminal.ansiBrightBlack'?: Color
  /** 'BrightBlue' ANSI color in the terminal. */
  'terminal.ansiBrightBlue'?: Color
  /** 'BrightCyan' ANSI color in the terminal. */
  'terminal.ansiBrightCyan'?: Color
  /** 'BrightGreen' ANSI color in the terminal. */
  'terminal.ansiBrightGreen'?: Color
  /** 'BrightMagenta' ANSI color in the terminal. */
  'terminal.ansiBrightMagenta'?: Color
  /** 'BrightRed' ANSI color in the terminal. */
  'terminal.ansiBrightRed'?: Color
  /** 'BrightWhite' ANSI color in the terminal. */
  'terminal.ansiBrightWhite'?: Color
  /** 'BrightYellow' ANSI color in the terminal. */
  'terminal.ansiBrightYellow'?: Color
  /** 'Cyan' ANSI color in the terminal. */
  'terminal.ansiCyan'?: Color
  /** 'Green' ANSI color in the terminal. */
  'terminal.ansiGreen'?: Color
  /** 'Magenta' ANSI color in the terminal. */
  'terminal.ansiMagenta'?: Color
  /** 'Red' ANSI color in the terminal. */
  'terminal.ansiRed'?: Color
  /** 'White' ANSI color in the terminal. */
  'terminal.ansiWhite'?: Color
  /** 'Yellow' ANSI color in the terminal. */
  'terminal.ansiYellow'?: Color
  /** The background of the Integrated Terminal's viewport. */
  'terminal.background'?: Color
  /** The color of the border that separates split panes within the terminal. This defaults to panel.border. */
  'terminal.border'?: Color
  /** The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through. */
  'terminal.dropBackground'?: Color
  /** Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchBackground'?: Color
  /** Border color of the current search match in the terminal. */
  'terminal.findMatchBorder'?: Color
  /** Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchHighlightBackground'?: Color
  /** Border color of the other search matches in the terminal. */
  'terminal.findMatchHighlightBorder'?: Color
  /** The default foreground color of the Integrated Terminal. */
  'terminal.foreground'?: Color
  /** Color of the highlight when hovering a link in the terminal. */
  'terminal.hoverHighlightBackground'?: Color
  /** The selection background color of the terminal when it does not have focus. */
  'terminal.inactiveSelectionBackground'?: Color
  /** Foreground color of the terminal initial hint. */
  'terminal.initialHintForeground'?: Color
  /** The selection background color of the terminal. */
  'terminal.selectionBackground'?: Color
  /** The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied. */
  'terminal.selectionForeground'?: Color
  /** Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`. */
  'terminal.tab.activeBorder'?: Color
  /** The default terminal command decoration background color. */
  'terminalCommandDecoration.defaultBackground'?: Color
  /** The terminal command decoration background color for error commands. */
  'terminalCommandDecoration.errorBackground'?: Color
  /** The terminal command decoration background color for successful commands. */
  'terminalCommandDecoration.successBackground'?: Color
  /** The foreground color of the terminal command guide that appears to the left of a command and its output on hover. */
  'terminalCommandGuide.foreground'?: Color
  /** The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'terminalCursor.background'?: Color
  /** The foreground color of the terminal cursor. */
  'terminalCursor.foreground'?: Color
  /** The overview ruler left-side border color. */
  'terminalOverviewRuler.border'?: Color
  /** The overview ruler cursor color. */
  'terminalOverviewRuler.cursorForeground'?: Color
  /** Overview ruler marker color for find matches in the terminal. */
  'terminalOverviewRuler.findMatchForeground'?: Color
  /** The background color of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.background'?: Color
  /** The border of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.border'?: Color
  /** The background color of the sticky scroll overlay in the terminal when hovered. */
  'terminalStickyScrollHover.background'?: Color
  /** The foreground color for an alias icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.aliasForeground'?: Color
  /** The foreground color for an argument icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.argumentForeground'?: Color
  /** The foreground color for a file icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.fileForeground'?: Color
  /** The foreground color for an flag icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.flagForeground'?: Color
  /** The foreground color for a folder icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.folderForeground'?: Color
  /** The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.inlineSuggestionForeground'?: Color
  /** The foreground color for a method icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.methodForeground'?: Color
  /** The foreground color for an option icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionForeground'?: Color
  /** The foreground color for an enum member icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionValueForeground'?: Color
  /** Background for the badge indicating execution count */
  'testing.coverCountBadgeBackground'?: Color
  /** Foreground for the badge indicating execution count */
  'testing.coverCountBadgeForeground'?: Color
  /** Background color of text that was covered. */
  'testing.coveredBackground'?: Color
  /** Border color of text that was covered. */
  'testing.coveredBorder'?: Color
  /** Gutter color of regions where code was covered. */
  'testing.coveredGutterBackground'?: Color
  /** Retired color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored.retired'?: Color
  /** Color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored'?: Color
  /** Retired color for the 'failed' icon in the test explorer. */
  'testing.iconFailed.retired'?: Color
  /** Color for the 'failed' icon in the test explorer. */
  'testing.iconFailed'?: Color
  /** Retired color for the 'passed' icon in the test explorer. */
  'testing.iconPassed.retired'?: Color
  /** Color for the 'passed' icon in the test explorer. */
  'testing.iconPassed'?: Color
  /** Retired color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued.retired'?: Color
  /** Color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued'?: Color
  /** Retired color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped.retired'?: Color
  /** Color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped'?: Color
  /** Retired color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset.retired'?: Color
  /** Color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset'?: Color
  /** Background color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBackground'?: Color
  /** Border color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBorder'?: Color
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.badgeForeground'?: Color
  /** Margin color beside error messages shown inline in the editor. */
  'testing.message.error.lineBackground'?: Color
  /** Text color of test info messages shown inline in the editor. */
  'testing.message.info.decorationForeground'?: Color
  /** Margin color beside info messages shown inline in the editor. */
  'testing.message.info.lineBackground'?: Color
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekBorder'?: Color
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekHeaderBackground'?: Color
  /** Color of the peek view borders and arrow. */
  'testing.peekBorder'?: Color
  /** Color of the peek view borders and arrow. */
  'testing.peekHeaderBackground'?: Color
  /** Color for 'run' icons in the editor. */
  'testing.runAction'?: Color
  /** Background color of text that was not covered. */
  'testing.uncoveredBackground'?: Color
  /** Border color of text that was not covered. */
  'testing.uncoveredBorder'?: Color
  /** Background of the widget shown for an uncovered branch. */
  'testing.uncoveredBranchBackground'?: Color
  /** Gutter color of regions where code not covered. */
  'testing.uncoveredGutterBackground'?: Color
  /** Background color for block quotes in text. */
  'textBlockQuote.background'?: Color
  /** Border color for block quotes in text. */
  'textBlockQuote.border'?: Color
  /** Background color for code blocks in text. */
  'textCodeBlock.background'?: Color
  /** Foreground color for links in text when clicked on and on mouse hover. */
  'textLink.activeForeground'?: Color
  /** Foreground color for links in text. */
  'textLink.foreground'?: Color
  /** Background color for preformatted text segments. */
  'textPreformat.background'?: Color
  /** Foreground color for preformatted text segments. */
  'textPreformat.foreground'?: Color
  /** Color for text separators. */
  'textSeparator.foreground'?: Color
  /** Title Bar background when the window is active. */
  'titleBar.activeBackground'?: Color
  /** Title Bar foreground when the window is active. */
  'titleBar.activeForeground'?: Color
  /** Title bar border color. */
  'titleBar.border'?: Color
  /** Title Bar background when the window is inactive. */
  'titleBar.inactiveBackground'?: Color
  /** Title Bar foreground when the window is inactive. */
  'titleBar.inactiveForeground'?: Color
  /** Toolbar background when holding the mouse over actions */
  'toolbar.activeBackground'?: Color
  /** Toolbar background when hovering over actions using the mouse */
  'toolbar.hoverBackground'?: Color
  /** Toolbar outline when hovering over actions using the mouse */
  'toolbar.hoverOutline'?: Color
  /** Tree stroke color for the indentation guides that are not active. */
  'tree.inactiveIndentGuidesStroke'?: Color
  /** Tree Widget's stroke color for indent guides. */
  'tree.indentGuidesStroke'?: Color
  /** Tree stroke color for the indentation guides. */
  'tree.tableColumnsBorder'?: Color
  /** Background color for odd table rows. */
  'tree.tableOddRowsBackground'?: Color
  /** Background color for the embedded editors on the Interactive Playground. */
  'walkThrough.embeddedEditorBackground'?: Color
  /** Foreground color of the heading of each walkthrough step. */
  'walkthrough.stepTitle.foreground'?: Color
  /** Background color for the Welcome page. */
  'welcomePage.background'?: Color
  /** Foreground color for the Welcome page progress bars. */
  'welcomePage.progress.background'?: Color
  /** Background color for the Welcome page progress bars. */
  'welcomePage.progress.foreground'?: Color
  /** Background color for the tiles on the Welcome page. */
  'welcomePage.tileBackground'?: Color
  /** Border color for the tiles on the Welcome page. */
  'welcomePage.tileBorder'?: Color
  /** Hover background color for the tiles on the Welcome page. */
  'welcomePage.tileHoverBackground'?: Color
  /** Border color of widgets such as Find/Replace inside the editor. */
  'widget.border'?: Color
  /** Shadow color of widgets such as Find/Replace inside the editor. */
  'widget.shadow'?: Color
  /** Border color for the active (focused) window. */
  'window.activeBorder'?: Color
  /** Border color for the inactive (unfocused) windows. */
  'window.inactiveBorder'?: Color


  // -- GitHub Pull Requests & Issues

  /**
   * The color used for the assignees and labels fields in a new issue editor.
   */
  'issues.newIssueDecoration'?: Color
  /**
   * The color used for indicating that an issue is open.
   */
  'issues.open'?: Color
  /**
   * The color used for indicating that an issue is closed.
   */
  'issues.closed'?: Color
  /**
   * The color used for indicating that a pull request is open.
   */
  'pullRequests.open'?: Color
  /**
   * The color used for indicating that a pull request is closed.
   */
  'pullRequests.closed'?: Color
  /**
   * The color used for indicating that a pull request is a draft.
   */
  'pullRequests.draft'?: Color
  /**
   * The color used for indicating that a pull request is merged.
   */
  'pullRequests.merged'?: Color
  /**
   * The color used for indicating a notification on a pull request
   */
  'pullRequests.notification'?: Color


  // -- Error Lens

  'errorLens.errorBackground'?: Color
  'errorLens.errorBackgroundLight'?: Color
  'errorLens.errorForeground'?: Color
  'errorLens.errorForegroundLight'?: Color
  'errorLens.errorMessageBackground'?: Color
  'errorLens.hintBackground'?: Color
  'errorLens.hintBackgroundLight'?: Color
  'errorLens.hintForeground'?: Color
  'errorLens.hintForegroundLight'?: Color
  'errorLens.hintMessageBackground'?: Color
  'errorLens.infoBackground'?: Color
  'errorLens.infoBackgroundLight'?: Color
  'errorLens.infoForeground'?: Color
  'errorLens.infoForegroundLight'?: Color
  'errorLens.infoMessageBackground'?: Color
  'errorLens.warningBackground'?: Color
  'errorLens.warningBackgroundLight'?: Color
  'errorLens.warningForeground'?: Color
  'errorLens.warningForegroundLight'?: Color
  'errorLens.warningMessageBackground'?: Color


  // -- GitLens

  'gitlens.closedPullRequestIconColor'?: Color
  'gitlens.decorations.addedForegroundColor'?: Color
  'gitlens.decorations.branchAheadForegroundColor'?: Color
  'gitlens.decorations.branchBehindForegroundColor'?: Color
  'gitlens.decorations.branchDivergedForegroundColor'?: Color
  'gitlens.decorations.branchUnpublishedForegroundColor'?: Color
  'gitlens.decorations.branchUpToDateForegroundColor'?: Color
  'gitlens.decorations.copiedForegroundColor'?: Color
  'gitlens.decorations.deletedForegroundColor'?: Color
  'gitlens.decorations.ignoredForegroundColor'?: Color
  'gitlens.decorations.modifiedForegroundColor'?: Color
  'gitlens.decorations.renamedForegroundColor'?: Color
  'gitlens.decorations.untrackedForegroundColor'?: Color
  'gitlens.gutterBackgroundColor'?: Color
  'gitlens.gutterForegroundColor'?: Color
  'gitlens.gutterUncommittedForegroundColor'?: Color
  'gitlens.lineHighlightBackgroundColor'?: Color
  'gitlens.lineHighlightOverviewRulerColor'?: Color
  'gitlens.mergedPullRequestIconColor'?: Color
  'gitlens.openPullRequestIconColor'?: Color
  'gitlens.trailingLineBackgroundColor'?: Color
  'gitlens.trailingLineForegroundColor'?: Color
  'gitlens.unpublishedCommitIconColor'?: Color
  'gitlens.unpulledChangesIconColor'?: Color
  'gitlens.unpushlishedChangesIconColor'?: Color


  // -- LintLens

  'lintlens.annotationColor'?: Color


  // -- Bookmarks

  'bookmarks.overviewRuler'?: Color
  'bookmarks.lineBackground'?: Color
  'bookmarks.lineBorder'?: Color


  // -- Test Explorer

  'testExplorer.errorDecorationBackground'?: Color


  // -- SQL Tools
  'sqltools.currentQueryBg'?: Color
  'sqltools.currentQueryOutline'?: Color


  // -- File Watcher

  'filewatcher.error'?: Color

  toJSON?(): Record<string, string>
}

export {
  UIColours,
}
