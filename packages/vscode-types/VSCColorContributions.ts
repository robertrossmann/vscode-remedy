/* eslint-disable @stylistic/max-len */
import { type ColorInstance } from 'color'

/**
 * Source: https://raw.githubusercontent.com/microsoft/vscode-docs/refs/heads/main/api/references/theme-color.md
 */
interface VSCColorContributions {
  /** Background color for toggled action items in action bar. */
  'actionBar.toggledBackground'?: ColorInstance
  /** Activity Bar optional background color for the active element. */
  'activityBar.activeBackground'?: ColorInstance
  /** Activity Bar active indicator border color. */
  'activityBar.activeBorder'?: ColorInstance
  /** Activity bar focus border color for the active item. */
  'activityBar.activeFocusBorder'?: ColorInstance
  /** Activity Bar background color. */
  'activityBar.background'?: ColorInstance
  /** Activity Bar border color with the Side Bar. */
  'activityBar.border'?: ColorInstance
  /** Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar. */
  'activityBar.dropBorder'?: ColorInstance
  /** Activity Bar foreground color (for example used for the icons). */
  'activityBar.foreground'?: ColorInstance
  /** Activity Bar item foreground color when it is inactive. */
  'activityBar.inactiveForeground'?: ColorInstance
  /** Activity notification badge background color. */
  'activityBarBadge.background'?: ColorInstance
  /** Activity notification badge foreground color. */
  'activityBarBadge.foreground'?: ColorInstance
  /** Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBackground'?: ColorInstance
  /** Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBorder'?: ColorInstance
  /** Background color of the activity bar when set to top / bottom. */
  'activityBarTop.background'?: ColorInstance
  /** Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.dropBorder'?: ColorInstance
  /** Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.foreground'?: ColorInstance
  /** Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.inactiveForeground'?: ColorInstance
  /** Background color of the error activity badge */
  'activityErrorBadge.background'?: ColorInstance
  /** Foreground color of the error activity badge */
  'activityErrorBadge.foreground'?: ColorInstance
  /** Background color of the warning activity badge */
  'activityWarningBadge.background'?: ColorInstance
  /** Foreground color of the warning activity badge */
  'activityWarningBadge.foreground'?: ColorInstance
  /** Badge background color. */
  'badge.background'?: ColorInstance
  /** Badge foreground color. */
  'badge.foreground'?: ColorInstance
  /** Banner background color. */
  'banner.background'?: ColorInstance
  /** Banner foreground color. */
  'banner.foreground'?: ColorInstance
  /** Color for the icon in front of the banner text. */
  'banner.iconForeground'?: ColorInstance
  /** Color of selected breadcrumb items. */
  'breadcrumb.activeSelectionForeground'?: ColorInstance
  /** Background color of breadcrumb items. */
  'breadcrumb.background'?: ColorInstance
  /** Color of focused breadcrumb items. */
  'breadcrumb.focusForeground'?: ColorInstance
  /** Color of breadcrumb items. */
  'breadcrumb.foreground'?: ColorInstance
  /** Background color of breadcrumb item picker. */
  'breadcrumbPicker.background'?: ColorInstance
  /** Button background color. */
  'button.background'?: ColorInstance
  /** Button border color. */
  'button.border'?: ColorInstance
  /** Button foreground color. */
  'button.foreground'?: ColorInstance
  /** Button background color when hovering. */
  'button.hoverBackground'?: ColorInstance
  /** Secondary button background color. */
  'button.secondaryBackground'?: ColorInstance
  /** Secondary button foreground color. */
  'button.secondaryForeground'?: ColorInstance
  /** Secondary button background color when hovering. */
  'button.secondaryHoverBackground'?: ColorInstance
  /** Button separator color. */
  'button.separator'?: ColorInstance
  /** Axis color for the chart. */
  'chart.axis'?: ColorInstance
  /** Guide line for the chart. */
  'chart.guide'?: ColorInstance
  /** Line color for the chart. */
  'chart.line'?: ColorInstance
  /** Color for blue elements in charts. */
  'charts.blue'?: ColorInstance
  /** Contrast color for text in charts. */
  'charts.foreground'?: ColorInstance
  /** Color for green elements in charts. */
  'charts.green'?: ColorInstance
  /** Color for lines in charts. */
  'charts.lines'?: ColorInstance
  /** Color for orange elements in charts. */
  'charts.orange'?: ColorInstance
  /** Color for purple elements in charts. */
  'charts.purple'?: ColorInstance
  /** Color for red elements in charts. */
  'charts.red'?: ColorInstance
  /** Color for yellow elements in charts. */
  'charts.yellow'?: ColorInstance
  /** The background color of a chat avatar. */
  'chat.avatarBackground'?: ColorInstance
  /** The foreground color of a chat avatar. */
  'chat.avatarForeground'?: ColorInstance
  /** Chat checkpoint separator color. */
  'chat.checkpointSeparator'?: ColorInstance
  /** The foreground color of a chat edited file in the edited file list. */
  'chat.editedFileForeground'?: ColorInstance
  /** Foreground color of lines added in chat code block pill. */
  'chat.linesAddedForeground'?: ColorInstance
  /** Foreground color of lines removed in chat code block pill. */
  'chat.linesRemovedForeground'?: ColorInstance
  /** The background color of a chat request. */
  'chat.requestBackground'?: ColorInstance
  /** The border color of a chat request. */
  'chat.requestBorder'?: ColorInstance
  /** Background color of the chat request bubble. */
  'chat.requestBubbleBackground'?: ColorInstance
  /** Background color of the chat request bubble on hover. */
  'chat.requestBubbleHoverBackground'?: ColorInstance
  /** Border color of code blocks within the chat request bubble. */
  'chat.requestCodeBorder'?: ColorInstance
  /** The background color of a chat slash command. */
  'chat.slashCommandBackground'?: ColorInstance
  /** The foreground color of a chat slash command. */
  'chat.slashCommandForeground'?: ColorInstance
  /** The color of the Chat Management editor splitview sash border. */
  'chatManagement.sashBorder'?: ColorInstance
  /** Background color of checkbox widget. */
  'checkbox.background'?: ColorInstance
  /** Border color of checkbox widget. */
  'checkbox.border'?: ColorInstance
  /** Background of a disabled checkbox. */
  'checkbox.disabled.background'?: ColorInstance
  /** Foreground of a disabled checkbox. */
  'checkbox.disabled.foreground'?: ColorInstance
  /** Foreground color of checkbox widget. */
  'checkbox.foreground'?: ColorInstance
  /** Background color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBackground'?: ColorInstance
  /** Border color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBorder'?: ColorInstance
  /** Active background color of the Command Center. */
  'commandCenter.activeBackground'?: ColorInstance
  /** Active border color of the Command Center. */
  'commandCenter.activeBorder'?: ColorInstance
  /** Active foreground color of the Command Center. */
  'commandCenter.activeForeground'?: ColorInstance
  /** Background color of the Command Center. */
  'commandCenter.background'?: ColorInstance
  /** Border color of the Command Center. */
  'commandCenter.border'?: ColorInstance
  /** Command Center background color when a program is being debugged. */
  'commandCenter.debuggingBackground'?: ColorInstance
  /** Foreground color of the Command Center. */
  'commandCenter.foreground'?: ColorInstance
  /** Border color of the Command Center when the window is inactive. */
  'commandCenter.inactiveBorder'?: ColorInstance
  /** Foreground color of the Command Center when the window is inactive. */
  'commandCenter.inactiveForeground'?: ColorInstance
  /** Icon color for resolved comments. */
  'commentsView.resolvedIcon'?: ColorInstance
  /** Icon color for unresolved comments. */
  'commentsView.unresolvedIcon'?: ColorInstance
  /** An extra border around active elements to separate them from others for greater contrast. */
  contrastActiveBorder?: ColorInstance
  /** An extra border around elements to separate them from others for greater contrast. */
  contrastBorder?: ColorInstance
  /** Foreground color for error messages in debug REPL console. */
  'debugConsole.errorForeground'?: ColorInstance
  /** Foreground color for info messages in debug REPL console. */
  'debugConsole.infoForeground'?: ColorInstance
  /** Foreground color for source filenames in debug REPL console. */
  'debugConsole.sourceForeground'?: ColorInstance
  /** Foreground color for warning messages in debug REPL console. */
  'debugConsole.warningForeground'?: ColorInstance
  /** Foreground color for debug console input marker icon. */
  'debugConsoleInputIcon.foreground'?: ColorInstance
  /** Exception widget background color. */
  'debugExceptionWidget.background'?: ColorInstance
  /** Exception widget border color. */
  'debugExceptionWidget.border'?: ColorInstance
  /** Icon color for the current breakpoint stack frame. */
  'debugIcon.breakpointCurrentStackframeForeground'?: ColorInstance
  /** Icon color for disabled breakpoints. */
  'debugIcon.breakpointDisabledForeground'?: ColorInstance
  /** Icon color for breakpoints. */
  'debugIcon.breakpointForeground'?: ColorInstance
  /** Icon color for all breakpoint stack frames. */
  'debugIcon.breakpointStackframeForeground'?: ColorInstance
  /** Icon color for unverified breakpoints. */
  'debugIcon.breakpointUnverifiedForeground'?: ColorInstance
  /** Debug toolbar icon for continue. */
  'debugIcon.continueForeground'?: ColorInstance
  /** Debug toolbar icon for disconnect. */
  'debugIcon.disconnectForeground'?: ColorInstance
  /** Debug toolbar icon for pause. */
  'debugIcon.pauseForeground'?: ColorInstance
  /** Debug toolbar icon for restart. */
  'debugIcon.restartForeground'?: ColorInstance
  /** Debug toolbar icon for start debugging. */
  'debugIcon.startForeground'?: ColorInstance
  /** Debug toolbar icon for step back. */
  'debugIcon.stepBackForeground'?: ColorInstance
  /** Debug toolbar icon for step into. */
  'debugIcon.stepIntoForeground'?: ColorInstance
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOutForeground'?: ColorInstance
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOverForeground'?: ColorInstance
  /** Debug toolbar icon for stop. */
  'debugIcon.stopForeground'?: ColorInstance
  /** Foreground color for booleans in debug views. */
  'debugTokenExpression.boolean'?: ColorInstance
  /** Foreground color for expression errors in debug views. */
  'debugTokenExpression.error'?: ColorInstance
  /** Foreground color for the token names shown in debug views (such as in the Variables or Watch view). */
  'debugTokenExpression.name'?: ColorInstance
  /** Foreground color for numbers in debug views. */
  'debugTokenExpression.number'?: ColorInstance
  /** Foreground color for strings in debug views. */
  'debugTokenExpression.string'?: ColorInstance
  /** Foreground color for the token types shown in the debug views (ie. the Variables or Watch view). */
  'debugTokenExpression.type'?: ColorInstance
  /** Foreground color for the token values shown in debug views. */
  'debugTokenExpression.value'?: ColorInstance
  /** Debug toolbar background color. */
  'debugToolBar.background'?: ColorInstance
  /** Debug toolbar border color. */
  'debugToolBar.border'?: ColorInstance
  /** Background color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelBackground'?: ColorInstance
  /** Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelForeground'?: ColorInstance
  /** Background color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelBackground'?: ColorInstance
  /** Foreground color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelForeground'?: ColorInstance
  /** Color used to highlight value changes in the debug views (such as in the Variables view). */
  'debugView.valueChangedHighlight'?: ColorInstance
  /** Foreground color for description text providing additional information, for example for a label. */
  descriptionForeground?: ColorInstance
  /** Border color between the two text editors. */
  'diffEditor.border'?: ColorInstance
  /** Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views. */
  'diffEditor.diagonalFill'?: ColorInstance
  /** Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedLineBackground'?: ColorInstance
  /** Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedTextBackground'?: ColorInstance
  /** Outline color for the text that got inserted. */
  'diffEditor.insertedTextBorder'?: ColorInstance
  /** The border color for text that got moved in the diff editor. */
  'diffEditor.move.border'?: ColorInstance
  /** The active border color for text that got moved in the diff editor. */
  'diffEditor.moveActive.border'?: ColorInstance
  /** Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedLineBackground'?: ColorInstance
  /** Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedTextBackground'?: ColorInstance
  /** Outline color for text that got removed. */
  'diffEditor.removedTextBorder'?: ColorInstance
  /** The background color of unchanged code in the diff editor. */
  'diffEditor.unchangedCodeBackground'?: ColorInstance
  /** The color of unchanged blocks in diff editor. */
  'diffEditor.unchangedRegionBackground'?: ColorInstance
  /** The foreground color of unchanged blocks in the diff editor. */
  'diffEditor.unchangedRegionForeground'?: ColorInstance
  /** The color of the shadow around unchanged region widgets. */
  'diffEditor.unchangedRegionShadow'?: ColorInstance
  /** Background color for the margin where lines got inserted. */
  'diffEditorGutter.insertedLineBackground'?: ColorInstance
  /** Background color for the margin where lines got removed. */
  'diffEditorGutter.removedLineBackground'?: ColorInstance
  /** Diff overview ruler foreground for inserted content. */
  'diffEditorOverview.insertedForeground'?: ColorInstance
  /** Diff overview ruler foreground for removed content. */
  'diffEditorOverview.removedForeground'?: ColorInstance
  /** Overall foreground for disabled elements. This color is only used if not overridden by a component. */
  disabledForeground?: ColorInstance
  /** Dropdown background. */
  'dropdown.background'?: ColorInstance
  /** Dropdown border. */
  'dropdown.border'?: ColorInstance
  /** Dropdown foreground. */
  'dropdown.foreground'?: ColorInstance
  /** Dropdown list background. */
  'dropdown.listBackground'?: ColorInstance
  /** Editor background color. */
  'editor.background'?: ColorInstance
  /** The border color for an IME composition. */
  'editor.compositionBorder'?: ColorInstance
  /** Color of the current search match. */
  'editor.findMatchBackground'?: ColorInstance
  /** Border color of the current search match. */
  'editor.findMatchBorder'?: ColorInstance
  /** Text color of the current search match. */
  'editor.findMatchForeground'?: ColorInstance
  /** Color of the other search matches. The color must not be opaque so as not to hide underlying decorations. */
  'editor.findMatchHighlightBackground'?: ColorInstance
  /** Border color of the other search matches. */
  'editor.findMatchHighlightBorder'?: ColorInstance
  /** Foreground color of the other search matches. */
  'editor.findMatchHighlightForeground'?: ColorInstance
  /** Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations. */
  'editor.findRangeHighlightBackground'?: ColorInstance
  /** Border color the range limiting the search (Enable 'Find in Selection' in the find widget). */
  'editor.findRangeHighlightBorder'?: ColorInstance
  /** Background color of the focused stack frame highlight in the editor. */
  'editor.focusedStackFrameHighlightBackground'?: ColorInstance
  /** Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations. */
  'editor.foldBackground'?: ColorInstance
  /** Color of the collapsed text after the first line of a folded range. */
  'editor.foldPlaceholderForeground'?: ColorInstance
  /** Editor default foreground color. */
  'editor.foreground'?: ColorInstance
  /** Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations. */
  'editor.hoverHighlightBackground'?: ColorInstance
  /** Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations. */
  'editor.inactiveSelectionBackground'?: ColorInstance
  /** Color for the debug inline value background. */
  'editor.inlineValuesBackground'?: ColorInstance
  /** Color for the debug inline value text. */
  'editor.inlineValuesForeground'?: ColorInstance
  /** Background color for the highlight of line at the cursor position. */
  'editor.lineHighlightBackground'?: ColorInstance
  /** Background color for the border around the line at the cursor position. */
  'editor.lineHighlightBorder'?: ColorInstance
  /** Background color when the editor is in linked editing mode. */
  'editor.linkedEditingBackground'?: ColorInstance
  /** Foreground color of the placeholder text in the editor. */
  'editor.placeholder.foreground'?: ColorInstance
  /** Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editor.rangeHighlightBackground'?: ColorInstance
  /** Background color of the border around highlighted ranges. */
  'editor.rangeHighlightBorder'?: ColorInstance
  /** Color of the editor selection. */
  'editor.selectionBackground'?: ColorInstance
  /** Color of the selected text for high contrast. */
  'editor.selectionForeground'?: ColorInstance
  /** Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations. */
  'editor.selectionHighlightBackground'?: ColorInstance
  /** Border color for regions with the same content as the selection. */
  'editor.selectionHighlightBorder'?: ColorInstance
  /** Highlight background color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBackground'?: ColorInstance
  /** Highlight border color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBorder'?: ColorInstance
  /** Highlight background color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBackground'?: ColorInstance
  /** Highlight border color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBorder'?: ColorInstance
  /** Background color of the top stack frame highlight in the editor. */
  'editor.stackFrameHighlightBackground'?: ColorInstance
  /** Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.symbolHighlightBackground'?: ColorInstance
  /** Background color of the border around highlighted symbols. */
  'editor.symbolHighlightBorder'?: ColorInstance
  /** Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightBackground'?: ColorInstance
  /** Border color of a symbol during read-access, for example when reading a variable. */
  'editor.wordHighlightBorder'?: ColorInstance
  /** Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightStrongBackground'?: ColorInstance
  /** Border color of a symbol during write-access, for example when writing to a variable. */
  'editor.wordHighlightStrongBorder'?: ColorInstance
  /** Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightTextBackground'?: ColorInstance
  /** Border color of a textual occurrence for a symbol. */
  'editor.wordHighlightTextBorder'?: ColorInstance
  /** Action List background color. */
  'editorActionList.background'?: ColorInstance
  /** Action List background color for the focused item. */
  'editorActionList.focusBackground'?: ColorInstance
  /** Action List foreground color for the focused item. */
  'editorActionList.focusForeground'?: ColorInstance
  /** Action List foreground color. */
  'editorActionList.foreground'?: ColorInstance
  /** Foreground color of brackets (1). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground1'?: ColorInstance
  /** Foreground color of brackets (2). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground2'?: ColorInstance
  /** Foreground color of brackets (3). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground3'?: ColorInstance
  /** Foreground color of brackets (4). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground4'?: ColorInstance
  /** Foreground color of brackets (5). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground5'?: ColorInstance
  /** Foreground color of brackets (6). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground6'?: ColorInstance
  /** Foreground color of unexpected brackets. */
  'editorBracketHighlight.unexpectedBracket.foreground'?: ColorInstance
  /** Background color behind matching brackets. */
  'editorBracketMatch.background'?: ColorInstance
  /** Color for matching brackets boxes. */
  'editorBracketMatch.border'?: ColorInstance
  /** Background color of active bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground1'?: ColorInstance
  /** Background color of active bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground2'?: ColorInstance
  /** Background color of active bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground3'?: ColorInstance
  /** Background color of active bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground4'?: ColorInstance
  /** Background color of active bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground5'?: ColorInstance
  /** Background color of active bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground6'?: ColorInstance
  /** Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background1'?: ColorInstance
  /** Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background2'?: ColorInstance
  /** Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background3'?: ColorInstance
  /** Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background4'?: ColorInstance
  /** Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background5'?: ColorInstance
  /** Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background6'?: ColorInstance
  /** Foreground color of an editor CodeLens. */
  'editorCodeLens.foreground'?: ColorInstance
  /** Color of background for currently selected or hovered comment range. */
  'editorCommentsWidget.rangeActiveBackground'?: ColorInstance
  /** Color of background for comment ranges. */
  'editorCommentsWidget.rangeBackground'?: ColorInstance
  /** Background color for comment reply input box. */
  'editorCommentsWidget.replyInputBackground'?: ColorInstance
  /** Color of borders and arrow for resolved comments. */
  'editorCommentsWidget.resolvedBorder'?: ColorInstance
  /** Color of borders and arrow for unresolved comments. */
  'editorCommentsWidget.unresolvedBorder'?: ColorInstance
  /** The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'editorCursor.background'?: ColorInstance
  /** Color of the editor cursor. */
  'editorCursor.foreground'?: ColorInstance
  /** Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorError.background'?: ColorInstance
  /** Border color of error boxes in the editor. */
  'editorError.border'?: ColorInstance
  /** Foreground color of error squiggles in the editor. */
  'editorError.foreground'?: ColorInstance
  /** Background color of the ghost text in the editor. */
  'editorGhostText.background'?: ColorInstance
  /** Border color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.border'?: ColorInstance
  /** Foreground color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.foreground'?: ColorInstance
  /** Color to separate multiple editor groups from each other. */
  'editorGroup.border'?: ColorInstance
  /** Background color when dragging editors around. */
  'editorGroup.dropBackground'?: ColorInstance
  /** Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBackground'?: ColorInstance
  /** Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBorder'?: ColorInstance
  /** Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptForeground'?: ColorInstance
  /** Background color of an empty editor group. */
  'editorGroup.emptyBackground'?: ColorInstance
  /** Border color of an empty editor group that is focused. */
  'editorGroup.focusedEmptyBorder'?: ColorInstance
  /** Border color between editor group header and editor (below breadcrumbs if enabled). */
  'editorGroupHeader.border'?: ColorInstance
  /** Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`). */
  'editorGroupHeader.noTabsBackground'?: ColorInstance
  /** Background color of the Tabs container. */
  'editorGroupHeader.tabsBackground'?: ColorInstance
  /** Border color below the editor tabs control when tabs are enabled. */
  'editorGroupHeader.tabsBorder'?: ColorInstance
  /** Editor gutter background color for lines that are added. */
  'editorGutter.addedBackground'?: ColorInstance
  /** Editor gutter secondary background color for lines that are added. */
  'editorGutter.addedSecondaryBackground'?: ColorInstance
  /** Background color of the editor gutter. The gutter contains the glyph margins and the line numbers. */
  'editorGutter.background'?: ColorInstance
  /** Editor gutter decoration color for commenting glyphs. */
  'editorGutter.commentGlyphForeground'?: ColorInstance
  /** Editor gutter decoration color for commenting ranges. */
  'editorGutter.commentRangeForeground'?: ColorInstance
  /** Editor gutter decoration color for commenting glyphs for unresolved comment threads. */
  'editorGutter.commentUnresolvedGlyphForeground'?: ColorInstance
  /** Editor gutter background color for lines that are deleted. */
  'editorGutter.deletedBackground'?: ColorInstance
  /** Editor gutter secondary background color for lines that are deleted. */
  'editorGutter.deletedSecondaryBackground'?: ColorInstance
  /** Color of the folding control in the editor gutter. */
  'editorGutter.foldingControlForeground'?: ColorInstance
  /** Editor gutter decoration color for gutter item background. This color should be opaque. */
  'editorGutter.itemBackground'?: ColorInstance
  /** Editor gutter decoration color for gutter item glyphs. */
  'editorGutter.itemGlyphForeground'?: ColorInstance
  /** Editor gutter background color for lines that are modified. */
  'editorGutter.modifiedBackground'?: ColorInstance
  /** Editor gutter secondary background color for lines that are modified. */
  'editorGutter.modifiedSecondaryBackground'?: ColorInstance
  /** Border color of hint boxes in the editor. */
  'editorHint.border'?: ColorInstance
  /** Foreground color of hints in the editor. */
  'editorHint.foreground'?: ColorInstance
  /** Background color of the editor hover. */
  'editorHoverWidget.background'?: ColorInstance
  /** Border color of the editor hover. */
  'editorHoverWidget.border'?: ColorInstance
  /** Foreground color of the editor hover. */
  'editorHoverWidget.foreground'?: ColorInstance
  /** Foreground color of the active item in the parameter hint. */
  'editorHoverWidget.highlightForeground'?: ColorInstance
  /** Background color of the editor hover status bar. */
  'editorHoverWidget.statusBarBackground'?: ColorInstance
  /** Color of the active editor indentation guide. */
  'editorIndentGuide.activeBackground'?: ColorInstance
  /** Color of the active editor indentation guides (1). */
  'editorIndentGuide.activeBackground1'?: ColorInstance
  /** Color of the active editor indentation guides (2). */
  'editorIndentGuide.activeBackground2'?: ColorInstance
  /** Color of the active editor indentation guides (3). */
  'editorIndentGuide.activeBackground3'?: ColorInstance
  /** Color of the active editor indentation guides (4). */
  'editorIndentGuide.activeBackground4'?: ColorInstance
  /** Color of the active editor indentation guides (5). */
  'editorIndentGuide.activeBackground5'?: ColorInstance
  /** Color of the active editor indentation guides (6). */
  'editorIndentGuide.activeBackground6'?: ColorInstance
  /** Color of the editor indentation guides. */
  'editorIndentGuide.background'?: ColorInstance
  /** Color of the editor indentation guides (1). */
  'editorIndentGuide.background1'?: ColorInstance
  /** Color of the editor indentation guides (2). */
  'editorIndentGuide.background2'?: ColorInstance
  /** Color of the editor indentation guides (3). */
  'editorIndentGuide.background3'?: ColorInstance
  /** Color of the editor indentation guides (4). */
  'editorIndentGuide.background4'?: ColorInstance
  /** Color of the editor indentation guides (5). */
  'editorIndentGuide.background5'?: ColorInstance
  /** Color of the editor indentation guides (6). */
  'editorIndentGuide.background6'?: ColorInstance
  /** Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorInfo.background'?: ColorInstance
  /** Border color of info boxes in the editor. */
  'editorInfo.border'?: ColorInstance
  /** Foreground color of info squiggles in the editor. */
  'editorInfo.foreground'?: ColorInstance
  /** Background color of inline hints. */
  'editorInlayHint.background'?: ColorInstance
  /** Foreground color of inline hints. */
  'editorInlayHint.foreground'?: ColorInstance
  /** Background color of inline hints for parameters */
  'editorInlayHint.parameterBackground'?: ColorInstance
  /** Foreground color of inline hints for parameters */
  'editorInlayHint.parameterForeground'?: ColorInstance
  /** Background color of inline hints for types */
  'editorInlayHint.typeBackground'?: ColorInstance
  /** Foreground color of inline hints for types */
  'editorInlayHint.typeForeground'?: ColorInstance
  /** The color used for the lightbulb actions icon. */
  'editorLightBulb.foreground'?: ColorInstance
  /** The color used for the lightbulb AI icon. */
  'editorLightBulbAi.foreground'?: ColorInstance
  /** The color used for the lightbulb auto fix actions icon. */
  'editorLightBulbAutoFix.foreground'?: ColorInstance
  /** Color of the active editor line number. */
  'editorLineNumber.activeForeground'?: ColorInstance
  /** Color of the final editor line when editor.renderFinalNewline is set to dimmed. */
  'editorLineNumber.dimmedForeground'?: ColorInstance
  /** Color of editor line numbers. */
  'editorLineNumber.foreground'?: ColorInstance
  /** Color of active links. */
  'editorLink.activeForeground'?: ColorInstance
  /** Editor marker navigation widget background. */
  'editorMarkerNavigation.background'?: ColorInstance
  /** Editor marker navigation widget error color. */
  'editorMarkerNavigationError.background'?: ColorInstance
  /** Editor marker navigation widget error heading background. */
  'editorMarkerNavigationError.headerBackground'?: ColorInstance
  /** Editor marker navigation widget info color. */
  'editorMarkerNavigationInfo.background'?: ColorInstance
  /** Editor marker navigation widget info heading background. */
  'editorMarkerNavigationInfo.headerBackground'?: ColorInstance
  /** Editor marker navigation widget warning color. */
  'editorMarkerNavigationWarning.background'?: ColorInstance
  /** Editor marker navigation widget warning heading background. */
  'editorMarkerNavigationWarning.headerBackground'?: ColorInstance
  /** Minimap marker color for inline chat inserted content. */
  'editorMinimap.inlineChatInserted'?: ColorInstance
  /** The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.primary.background'?: ColorInstance
  /** Color of the primary editor cursor when multiple cursors are present. */
  'editorMultiCursor.primary.foreground'?: ColorInstance
  /** The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.secondary.background'?: ColorInstance
  /** Color of secondary editor cursors when multiple cursors are present. */
  'editorMultiCursor.secondary.foreground'?: ColorInstance
  /** Overview ruler marker color for added content. */
  'editorOverviewRuler.addedForeground'?: ColorInstance
  /** Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor. */
  'editorOverviewRuler.background'?: ColorInstance
  /** Color of the overview ruler border. */
  'editorOverviewRuler.border'?: ColorInstance
  /** Overview ruler marker color for matching brackets. */
  'editorOverviewRuler.bracketMatchForeground'?: ColorInstance
  /** Editor overview ruler decoration color for resolved comments. This color should be opaque. */
  'editorOverviewRuler.commentForeground'?: ColorInstance
  /** Editor overview ruler decoration color for unresolved comments. This color should be opaque. */
  'editorOverviewRuler.commentUnresolvedForeground'?: ColorInstance
  /** Common ancestor overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.commonContentForeground'?: ColorInstance
  /** Current overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.currentContentForeground'?: ColorInstance
  /** Overview ruler marker color for deleted content. */
  'editorOverviewRuler.deletedForeground'?: ColorInstance
  /** Overview ruler marker color for errors. */
  'editorOverviewRuler.errorForeground'?: ColorInstance
  /** Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.findMatchForeground'?: ColorInstance
  /** Incoming overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.incomingContentForeground'?: ColorInstance
  /** Overview ruler marker color for infos. */
  'editorOverviewRuler.infoForeground'?: ColorInstance
  /** Overview ruler marker color for inline chat inserted content. */
  'editorOverviewRuler.inlineChatInserted'?: ColorInstance
  /** Overview ruler marker color for inline chat removed content. */
  'editorOverviewRuler.inlineChatRemoved'?: ColorInstance
  /** Overview ruler marker color for modified content. */
  'editorOverviewRuler.modifiedForeground'?: ColorInstance
  /** Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.rangeHighlightForeground'?: ColorInstance
  /** Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.selectionHighlightForeground'?: ColorInstance
  /** Overview ruler marker color for warnings. */
  'editorOverviewRuler.warningForeground'?: ColorInstance
  /** Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightForeground'?: ColorInstance
  /** Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightStrongForeground'?: ColorInstance
  /** Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightTextForeground'?: ColorInstance
  /** Background color of the editor pane visible on the left and right side of the centered editor layout. */
  'editorPane.background'?: ColorInstance
  /** Color of the editor rulers. */
  'editorRuler.foreground'?: ColorInstance
  /** Editor sticky scroll background color. */
  'editorStickyScroll.background'?: ColorInstance
  /** Border color of sticky scroll in the editor. */
  'editorStickyScroll.border'?: ColorInstance
  /** Shadow color of sticky scroll in the editor. */
  'editorStickyScroll.shadow'?: ColorInstance
  /** Background color of the gutter part of sticky scroll in the editor. */
  'editorStickyScrollGutter.background'?: ColorInstance
  /** Editor sticky scroll on hover background color. */
  'editorStickyScrollHover.background'?: ColorInstance
  /** Background color of the suggestion widget. */
  'editorSuggestWidget.background'?: ColorInstance
  /** Border color of the suggestion widget. */
  'editorSuggestWidget.border'?: ColorInstance
  /** Color of the match highlights in the suggest widget when an item is focused. */
  'editorSuggestWidget.focusHighlightForeground'?: ColorInstance
  /** Foreground color of the suggestion widget. */
  'editorSuggestWidget.foreground'?: ColorInstance
  /** Color of the match highlights in the suggestion widget. */
  'editorSuggestWidget.highlightForeground'?: ColorInstance
  /** Background color of the selected entry in the suggestion widget. */
  'editorSuggestWidget.selectedBackground'?: ColorInstance
  /** Foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedForeground'?: ColorInstance
  /** Icon foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedIconForeground'?: ColorInstance
  /** Foreground color of the suggest widget status. */
  'editorSuggestWidgetStatus.foreground'?: ColorInstance
  /** Background color used to highlight unicode characters. */
  'editorUnicodeHighlight.background'?: ColorInstance
  /** Border color used to highlight unicode characters. */
  'editorUnicodeHighlight.border'?: ColorInstance
  /** Border color of unnecessary (unused) source code in the editor. */
  'editorUnnecessaryCode.border'?: ColorInstance
  /** Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out. */
  'editorUnnecessaryCode.opacity'?: ColorInstance
  /** Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorWarning.background'?: ColorInstance
  /** Border color of warning boxes in the editor. */
  'editorWarning.border'?: ColorInstance
  /** Foreground color of warning squiggles in the editor. */
  'editorWarning.foreground'?: ColorInstance
  /** Foreground color for the labels in the editor watermark. */
  'editorWatermark.foreground'?: ColorInstance
  /** Color of whitespace characters in the editor. */
  'editorWhitespace.foreground'?: ColorInstance
  /** Background color of editor widgets, such as Find/Replace. */
  'editorWidget.background'?: ColorInstance
  /** Border color of the editor widget unless the widget does not contain a border or defines its own border color. */
  'editorWidget.border'?: ColorInstance
  /** Foreground color of editor widgets, such as find/replace. */
  'editorWidget.foreground'?: ColorInstance
  /** Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget. */
  'editorWidget.resizeBorder'?: ColorInstance
  /** Overall foreground color for error messages (this color is only used if not overridden by a component). */
  errorForeground?: ColorInstance
  /** Background color for the remote badge in the extensions view. */
  'extensionBadge.remoteBackground'?: ColorInstance
  /** Foreground color for the remote badge in the extensions view. */
  'extensionBadge.remoteForeground'?: ColorInstance
  /** Button background color for extension actions. */
  'extensionButton.background'?: ColorInstance
  /** Button foreground color for extension actions. */
  'extensionButton.foreground'?: ColorInstance
  /** Button background hover color for extension actions. */
  'extensionButton.hoverBackground'?: ColorInstance
  /** Extension view button background color. */
  'extensionButton.prominentBackground'?: ColorInstance
  /** Extension view button foreground color (for example **Install** button). */
  'extensionButton.prominentForeground'?: ColorInstance
  /** Extension view button background hover color. */
  'extensionButton.prominentHoverBackground'?: ColorInstance
  /** Button separator color for extension actions. */
  'extensionButton.separator'?: ColorInstance
  /** The icon color for pre-release extension. */
  'extensionIcon.preReleaseForeground'?: ColorInstance
  /** The icon color for private extensions. */
  'extensionIcon.privateForeground'?: ColorInstance
  /** The icon color for extension sponsor. */
  'extensionIcon.sponsorForeground'?: ColorInstance
  /** The icon color for extension ratings. */
  'extensionIcon.starForeground'?: ColorInstance
  /** The icon color for extension verified publisher. */
  'extensionIcon.verifiedForeground'?: ColorInstance
  /** Overall border color for focused elements. This color is only used if not overridden by a component. */
  focusBorder?: ColorInstance
  /** Overall foreground color. This color is only used if not overridden by a component. */
  foreground?: ColorInstance
  /** Gauge background color. */
  'gauge.background'?: ColorInstance
  /** Gauge border color. */
  'gauge.border'?: ColorInstance
  /** Gauge error background color. */
  'gauge.errorBackground'?: ColorInstance
  /** Gauge error foreground color. */
  'gauge.errorForeground'?: ColorInstance
  /** Gauge foreground color. */
  'gauge.foreground'?: ColorInstance
  /** Gauge warning background color. */
  'gauge.warningBackground'?: ColorInstance
  /** Gauge warning foreground color. */
  'gauge.warningForeground'?: ColorInstance
  /** Color for the blame editor decoration. */
  'git.blame.editorDecorationForeground'?: ColorInstance
  /** Color for added Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.addedResourceForeground'?: ColorInstance
  /** Color for conflicting Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.conflictingResourceForeground'?: ColorInstance
  /** Color for deleted Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.deletedResourceForeground'?: ColorInstance
  /** Color for ignored Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.ignoredResourceForeground'?: ColorInstance
  /** Color for modified Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.modifiedResourceForeground'?: ColorInstance
  /** Color for renamed or copied Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.renamedResourceForeground'?: ColorInstance
  /** Color for staged deletions git decorations.  Used for file labels and the SCM viewlet. */
  'gitDecoration.stageDeletedResourceForeground'?: ColorInstance
  /** Color for staged modifications git decorations.  Used for file labels and the SCM viewlet. */
  'gitDecoration.stageModifiedResourceForeground'?: ColorInstance
  /** Color for submodule resources. */
  'gitDecoration.submoduleResourceForeground'?: ColorInstance
  /** Color for untracked Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.untrackedResourceForeground'?: ColorInstance
  /** The default color for icons in the workbench. */
  'icon.foreground'?: ColorInstance
  /** Background color of the interactive editor widget. */
  'inlineChat.background'?: ColorInstance
  /** Border color of the interactive editor widget. */
  'inlineChat.border'?: ColorInstance
  /** Foreground color of the interactive editor widget */
  'inlineChat.foreground'?: ColorInstance
  /** Shadow color of the interactive editor widget. */
  'inlineChat.shadow'?: ColorInstance
  /** Background color of inserted text in the interactive editor input. */
  'inlineChatDiff.inserted'?: ColorInstance
  /** Background color of removed text in the interactive editor input. */
  'inlineChatDiff.removed'?: ColorInstance
  /** Background color of the interactive editor input. */
  'inlineChatInput.background'?: ColorInstance
  /** Border color of the interactive editor input. */
  'inlineChatInput.border'?: ColorInstance
  /** Border color of the interactive editor input when focused. */
  'inlineChatInput.focusBorder'?: ColorInstance
  /** Foreground color of the interactive editor input placeholder. */
  'inlineChatInput.placeholderForeground'?: ColorInstance
  /** Background color for the inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.background'?: ColorInstance
  /** Background color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBackground'?: ColorInstance
  /** Border color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBorder'?: ColorInstance
  /** Foreground color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryForeground'?: ColorInstance
  /** Background color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBackground'?: ColorInstance
  /** Border color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBorder'?: ColorInstance
  /** Foreground color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryForeground'?: ColorInstance
  /** Background color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBackground'?: ColorInstance
  /** Border color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBorder'?: ColorInstance
  /** Foreground color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulForeground'?: ColorInstance
  /** Background color for the modified text in inline edits. */
  'inlineEdit.modifiedBackground'?: ColorInstance
  /** Border color for the modified text in inline edits. */
  'inlineEdit.modifiedBorder'?: ColorInstance
  /** Background color for the changed lines in the modified text of inline edits. */
  'inlineEdit.modifiedChangedLineBackground'?: ColorInstance
  /** Overlay color for the changed text in the modified text of inline edits. */
  'inlineEdit.modifiedChangedTextBackground'?: ColorInstance
  /** Background color for the original text in inline edits. */
  'inlineEdit.originalBackground'?: ColorInstance
  /** Border color for the original text in inline edits. */
  'inlineEdit.originalBorder'?: ColorInstance
  /** Background color for the changed lines in the original text of inline edits. */
  'inlineEdit.originalChangedLineBackground'?: ColorInstance
  /** Overlay color for the changed text in the original text of inline edits. */
  'inlineEdit.originalChangedTextBackground'?: ColorInstance
  /** Modified border color for the inline edits widget when tab will accept it. */
  'inlineEdit.tabWillAcceptModifiedBorder'?: ColorInstance
  /** Original border color for the inline edits widget over the original text when tab will accept it. */
  'inlineEdit.tabWillAcceptOriginalBorder'?: ColorInstance
  /** Input box background. */
  'input.background'?: ColorInstance
  /** Input box border. */
  'input.border'?: ColorInstance
  /** Input box foreground. */
  'input.foreground'?: ColorInstance
  /** Input box foreground color for placeholder text. */
  'input.placeholderForeground'?: ColorInstance
  /** Background color of activated options in input fields. */
  'inputOption.activeBackground'?: ColorInstance
  /** Border color of activated options in input fields. */
  'inputOption.activeBorder'?: ColorInstance
  /** Foreground color of activated options in input fields. */
  'inputOption.activeForeground'?: ColorInstance
  /** Background color of activated options in input fields. */
  'inputOption.hoverBackground'?: ColorInstance
  /** Input validation background color for error severity. */
  'inputValidation.errorBackground'?: ColorInstance
  /** Input validation border color for error severity. */
  'inputValidation.errorBorder'?: ColorInstance
  /** Input validation foreground color for error severity. */
  'inputValidation.errorForeground'?: ColorInstance
  /** Input validation background color for information severity. */
  'inputValidation.infoBackground'?: ColorInstance
  /** Input validation border color for information severity. */
  'inputValidation.infoBorder'?: ColorInstance
  /** Input validation foreground color for information severity. */
  'inputValidation.infoForeground'?: ColorInstance
  /** Input validation background color for information warning. */
  'inputValidation.warningBackground'?: ColorInstance
  /** Input validation border color for warning severity. */
  'inputValidation.warningBorder'?: ColorInstance
  /** Input validation foreground color for warning severity. */
  'inputValidation.warningForeground'?: ColorInstance
  /** The border color for the current interactive code cell when the editor has focus. */
  'interactive.activeCodeBorder'?: ColorInstance
  /** The border color for the current interactive code cell when the editor does not have focus. */
  'interactive.inactiveCodeBorder'?: ColorInstance
  /** Keybinding label background color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.background'?: ColorInstance
  /** Keybinding label border color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.border'?: ColorInstance
  /** Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.bottomBorder'?: ColorInstance
  /** Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.foreground'?: ColorInstance
  /** Background color for the keyboard shortcuts table header. */
  'keybindingTable.headerBackground'?: ColorInstance
  /** Background color for the keyboard shortcuts table alternating rows. */
  'keybindingTable.rowsBackground'?: ColorInstance
  /** List/Tree background color for the selected item when the list/tree is active. */
  'list.activeSelectionBackground'?: ColorInstance
  /** List/Tree foreground color for the selected item when the list/tree is active. */
  'list.activeSelectionForeground'?: ColorInstance
  /** List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.activeSelectionIconForeground'?: ColorInstance
  /** List/Tree foreground color for items that are deemphasized. */
  'list.deemphasizedForeground'?: ColorInstance
  /** List/Tree drag and drop background when moving items around using the mouse. */
  'list.dropBackground'?: ColorInstance
  /** List/Tree drag and drop border color when moving items between items when using the mouse. */
  'list.dropBetweenBackground'?: ColorInstance
  /** Foreground color of list items containing errors. */
  'list.errorForeground'?: ColorInstance
  /** Background color of the filtered matches in lists and trees. */
  'list.filterMatchBackground'?: ColorInstance
  /** Border color of the filtered matches in lists and trees. */
  'list.filterMatchBorder'?: ColorInstance
  /** List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusAndSelectionOutline'?: ColorInstance
  /** List/Tree background color for the focused item when the list/tree is active. */
  'list.focusBackground'?: ColorInstance
  /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusForeground'?: ColorInstance
  /** List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree. */
  'list.focusHighlightForeground'?: ColorInstance
  /** List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusOutline'?: ColorInstance
  /** List/Tree foreground color of the match highlights when searching inside the list/tree. */
  'list.highlightForeground'?: ColorInstance
  /** List/Tree background when hovering over items using the mouse. */
  'list.hoverBackground'?: ColorInstance
  /** List/Tree foreground when hovering over items using the mouse. */
  'list.hoverForeground'?: ColorInstance
  /** List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists. */
  'list.inactiveFocusBackground'?: ColorInstance
  /** List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveFocusOutline'?: ColorInstance
  /** List/Tree background color for the selected item when the list/tree is inactive. */
  'list.inactiveSelectionBackground'?: ColorInstance
  /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionForeground'?: ColorInstance
  /** List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionIconForeground'?: ColorInstance
  /** List/Tree foreground color for invalid items, for example an unresolved root in explorer. */
  'list.invalidItemForeground'?: ColorInstance
  /** Foreground color of list items containing warnings. */
  'list.warningForeground'?: ColorInstance
  /** List/Tree Filter background color of typed text when searching inside the list/tree. */
  'listFilterWidget.background'?: ColorInstance
  /** List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree. */
  'listFilterWidget.noMatchesOutline'?: ColorInstance
  /** List/Tree Filter Widget's outline color of typed text when searching inside the list/tree. */
  'listFilterWidget.outline'?: ColorInstance
  /** Shadow color of the type filter widget in lists and tree. */
  'listFilterWidget.shadow'?: ColorInstance
  /** Foreground color for caution alerts in markdown. */
  'markdownAlert.caution.foreground'?: ColorInstance
  /** Foreground color for important alerts in markdown. */
  'markdownAlert.important.foreground'?: ColorInstance
  /** Foreground color for note alerts in markdown. */
  'markdownAlert.note.foreground'?: ColorInstance
  /** Foreground color for tip alerts in markdown. */
  'markdownAlert.tip.foreground'?: ColorInstance
  /** Foreground color for warning alerts in markdown. */
  'markdownAlert.warning.foreground'?: ColorInstance
  /** The icon color for mcp starred. */
  'mcpIcon.starForeground'?: ColorInstance
  /** Background color of menu items. */
  'menu.background'?: ColorInstance
  /** Border color of menus. */
  'menu.border'?: ColorInstance
  /** Foreground color of menu items. */
  'menu.foreground'?: ColorInstance
  /** Background color of the selected menu item in menus. */
  'menu.selectionBackground'?: ColorInstance
  /** Border color of the selected menu item in menus. */
  'menu.selectionBorder'?: ColorInstance
  /** Foreground color of the selected menu item in menus. */
  'menu.selectionForeground'?: ColorInstance
  /** Color of a separator menu item in menus. */
  'menu.separatorBackground'?: ColorInstance
  /** Background color of the selected menu item in the menubar. */
  'menubar.selectionBackground'?: ColorInstance
  /** Border color of the selected menu item in the menubar. */
  'menubar.selectionBorder'?: ColorInstance
  /** Foreground color of the selected menu item in the menubar. */
  'menubar.selectionForeground'?: ColorInstance
  /** Border color on headers and the splitter in inline merge conflicts. */
  'merge.border'?: ColorInstance
  /** Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonContentBackground'?: ColorInstance
  /** Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonHeaderBackground'?: ColorInstance
  /** Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentContentBackground'?: ColorInstance
  /** Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentHeaderBackground'?: ColorInstance
  /** Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingContentBackground'?: ColorInstance
  /** Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingHeaderBackground'?: ColorInstance
  /** The background color for changes. */
  'mergeEditor.change.background'?: ColorInstance
  /** The background color for word changes. */
  'mergeEditor.change.word.background'?: ColorInstance
  /** The background color for changes in base. */
  'mergeEditor.changeBase.background'?: ColorInstance
  /** The background color for word changes in base. */
  'mergeEditor.changeBase.word.background'?: ColorInstance
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: ColorInstance
  /** The border color of handled focused conflicts. */
  'mergeEditor.conflict.handledFocused.border'?: ColorInstance
  /** The border color of handled unfocused conflicts. */
  'mergeEditor.conflict.handledUnfocused.border'?: ColorInstance
  /** The background color of decorations in input 1. */
  'mergeEditor.conflict.input1.background'?: ColorInstance
  /** The background color of decorations in input 2. */
  'mergeEditor.conflict.input2.background'?: ColorInstance
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: ColorInstance
  /** The border color of unhandled focused conflicts. */
  'mergeEditor.conflict.unhandledFocused.border'?: ColorInstance
  /** The border color of unhandled unfocused conflicts. */
  'mergeEditor.conflict.unhandledUnfocused.border'?: ColorInstance
  /** The background of the "Conflicting Lines" text. */
  'mergeEditor.conflictingLines.background'?: ColorInstance
  /** Minimap background color. */
  'minimap.background'?: ColorInstance
  /** Color of pending edit regions in the minimap. */
  'minimap.chatEditHighlight'?: ColorInstance
  /** Highlight color for errors within the editor. */
  'minimap.errorHighlight'?: ColorInstance
  /** Highlight color for matches from search within files. */
  'minimap.findMatchHighlight'?: ColorInstance
  /** Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity. */
  'minimap.foregroundOpacity'?: ColorInstance
  /** Minimap marker color for infos. */
  'minimap.infoHighlight'?: ColorInstance
  /** Highlight color for the editor selection. */
  'minimap.selectionHighlight'?: ColorInstance
  /** Minimap marker color for repeating editor selections. */
  'minimap.selectionOccurrenceHighlight'?: ColorInstance
  /** Highlight color for warnings within the editor. */
  'minimap.warningHighlight'?: ColorInstance
  /** Minimap gutter color for added content. */
  'minimapGutter.addedBackground'?: ColorInstance
  /** Minimap gutter color for deleted content. */
  'minimapGutter.deletedBackground'?: ColorInstance
  /** Minimap gutter color for modified content. */
  'minimapGutter.modifiedBackground'?: ColorInstance
  /** Minimap slider background color when clicked on. */
  'minimapSlider.activeBackground'?: ColorInstance
  /** Minimap slider background color. */
  'minimapSlider.background'?: ColorInstance
  /** Minimap slider background color when hovering. */
  'minimapSlider.hoverBackground'?: ColorInstance
  /** The background color of the multi file diff editor */
  'multiDiffEditor.background'?: ColorInstance
  /** The border color of the multi file diff editor */
  'multiDiffEditor.border'?: ColorInstance
  /** The background color of the diff editor's header */
  'multiDiffEditor.headerBackground'?: ColorInstance
  /** The border color for notebook cells. */
  'notebook.cellBorderColor'?: ColorInstance
  /** The color of the notebook cell editor background */
  'notebook.cellEditorBackground'?: ColorInstance
  /** The background color of a cell when the cell is hovered. */
  'notebook.cellHoverBackground'?: ColorInstance
  /** The color of the notebook cell insertion indicator. */
  'notebook.cellInsertionIndicator'?: ColorInstance
  /** The background color of notebook cell status bar items. */
  'notebook.cellStatusBarItemHoverBackground'?: ColorInstance
  /** The color of the separator in the cell bottom toolbar */
  'notebook.cellToolbarSeparator'?: ColorInstance
  /** Notebook background color. */
  'notebook.editorBackground'?: ColorInstance
  /** The background color of a cell when the cell is focused. */
  'notebook.focusedCellBackground'?: ColorInstance
  /** The color of the cell's focus indicator borders when the cell is focused. */
  'notebook.focusedCellBorder'?: ColorInstance
  /** The color of the notebook cell editor border. */
  'notebook.focusedEditorBorder'?: ColorInstance
  /** The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor. */
  'notebook.inactiveFocusedCellBorder'?: ColorInstance
  /** The color of the cell's borders when multiple cells are selected. */
  'notebook.inactiveSelectedCellBorder'?: ColorInstance
  /** The Color of the notebook output container background. */
  'notebook.outputContainerBackgroundColor'?: ColorInstance
  /** The border color of the notebook output container. */
  'notebook.outputContainerBorderColor'?: ColorInstance
  /** The background color of a cell when the cell is selected. */
  'notebook.selectedCellBackground'?: ColorInstance
  /** The color of the cell's top and bottom border when the cell is selected but not focused. */
  'notebook.selectedCellBorder'?: ColorInstance
  /** Background color of highlighted cell */
  'notebook.symbolHighlightBackground'?: ColorInstance
  /** The color of the running cell decoration in the notebook editor overview ruler. */
  'notebookEditorOverviewRuler.runningCellForeground'?: ColorInstance
  /** Notebook scrollbar slider background color when clicked on. */
  'notebookScrollbarSlider.activeBackground'?: ColorInstance
  /** Notebook scrollbar slider background color. */
  'notebookScrollbarSlider.background'?: ColorInstance
  /** Notebook scrollbar slider background color when hovering. */
  'notebookScrollbarSlider.hoverBackground'?: ColorInstance
  /** The error icon color of notebook cells in the cell status bar. */
  'notebookStatusErrorIcon.foreground'?: ColorInstance
  /** The running icon color of notebook cells in the cell status bar. */
  'notebookStatusRunningIcon.foreground'?: ColorInstance
  /** The success icon color of notebook cells in the cell status bar. */
  'notebookStatusSuccessIcon.foreground'?: ColorInstance
  /** Notification Center border color. */
  'notificationCenter.border'?: ColorInstance
  /** Notification Center header background color. */
  'notificationCenterHeader.background'?: ColorInstance
  /** Notification Center header foreground color. */
  'notificationCenterHeader.foreground'?: ColorInstance
  /** Notification links foreground color. */
  'notificationLink.foreground'?: ColorInstance
  /** Notification background color. */
  'notifications.background'?: ColorInstance
  /** Notification border color separating from other notifications in the Notification Center. */
  'notifications.border'?: ColorInstance
  /** Notification foreground color. */
  'notifications.foreground'?: ColorInstance
  /** The color used for the notification error icon. */
  'notificationsErrorIcon.foreground'?: ColorInstance
  /** The color used for the notification info icon. */
  'notificationsInfoIcon.foreground'?: ColorInstance
  /** The color used for the notification warning icon. */
  'notificationsWarningIcon.foreground'?: ColorInstance
  /** Notification toast border color. */
  'notificationToast.border'?: ColorInstance
  /** Output view background color. */
  'outputView.background'?: ColorInstance
  /** Output view sticky scroll background color. */
  'outputViewStickyScroll.background'?: ColorInstance
  /** Panel background color. */
  'panel.background'?: ColorInstance
  /** Panel border color to separate the panel from the editor. */
  'panel.border'?: ColorInstance
  /** Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panel.dropBorder'?: ColorInstance
  /** Input box border for inputs in the panel. */
  'panelInput.border'?: ColorInstance
  /** Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.border'?: ColorInstance
  /** Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.dropBackground'?: ColorInstance
  /** Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.background'?: ColorInstance
  /** Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.border'?: ColorInstance
  /** Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.foreground'?: ColorInstance
  /** Background color of sticky scroll in the panel. */
  'panelStickyScroll.background'?: ColorInstance
  /** Border color of sticky scroll in the panel. */
  'panelStickyScroll.border'?: ColorInstance
  /** Shadow color of sticky scroll in the panel. */
  'panelStickyScroll.shadow'?: ColorInstance
  /** Border color for the active panel title. */
  'panelTitle.activeBorder'?: ColorInstance
  /** Title color for the active panel. */
  'panelTitle.activeForeground'?: ColorInstance
  /** Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitle.border'?: ColorInstance
  /** Title color for the inactive panel. */
  'panelTitle.inactiveForeground'?: ColorInstance
  /** Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.background'?: ColorInstance
  /** Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.foreground'?: ColorInstance
  /** Color of the peek view borders and arrow. */
  'peekView.border'?: ColorInstance
  /** Background color of the peek view editor. */
  'peekViewEditor.background'?: ColorInstance
  /** Match highlight color in the peek view editor. */
  'peekViewEditor.matchHighlightBackground'?: ColorInstance
  /** Match highlight border color in the peek view editor. */
  'peekViewEditor.matchHighlightBorder'?: ColorInstance
  /** Background color of the gutter in the peek view editor. */
  'peekViewEditorGutter.background'?: ColorInstance
  /** Background color of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScroll.background'?: ColorInstance
  /** Background color of the gutter part of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScrollGutter.background'?: ColorInstance
  /** Background color of the peek view result list. */
  'peekViewResult.background'?: ColorInstance
  /** Foreground color for file nodes in the peek view result list. */
  'peekViewResult.fileForeground'?: ColorInstance
  /** Foreground color for line nodes in the peek view result list. */
  'peekViewResult.lineForeground'?: ColorInstance
  /** Match highlight color in the peek view result list. */
  'peekViewResult.matchHighlightBackground'?: ColorInstance
  /** Background color of the selected entry in the peek view result list. */
  'peekViewResult.selectionBackground'?: ColorInstance
  /** Foreground color of the selected entry in the peek view result list. */
  'peekViewResult.selectionForeground'?: ColorInstance
  /** Background color of the peek view title area. */
  'peekViewTitle.background'?: ColorInstance
  /** Color of the peek view title info. */
  'peekViewTitleDescription.foreground'?: ColorInstance
  /** Color of the peek view title. */
  'peekViewTitleLabel.foreground'?: ColorInstance
  /** Quick picker (Quick Open) color for grouping borders. */
  'pickerGroup.border'?: ColorInstance
  /** Quick picker (Quick Open) color for grouping labels. */
  'pickerGroup.foreground'?: ColorInstance
  /** The color of the icon for a port that has an associated running process. */
  'ports.iconRunningProcessForeground'?: ColorInstance
  /** The color used for the problems error icon. */
  'problemsErrorIcon.foreground'?: ColorInstance
  /** The color used for the problems info icon. */
  'problemsInfoIcon.foreground'?: ColorInstance
  /** The color used for the problems warning icon. */
  'problemsWarningIcon.foreground'?: ColorInstance
  /** Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.background'?: ColorInstance
  /** Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.foreground'?: ColorInstance
  /** The color of the Profiles editor splitview sash border. */
  'profiles.sashBorder'?: ColorInstance
  /** Background color of the progress bar shown for long running operations. */
  'progressBar.background'?: ColorInstance
  /** Quick input background color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.background'?: ColorInstance
  /** Quick input foreground color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.foreground'?: ColorInstance
  /** Quick picker background color for the focused item. */
  'quickInputList.focusBackground'?: ColorInstance
  /** Quick picker foreground color for the focused item. */
  'quickInputList.focusForeground'?: ColorInstance
  /** Quick picker icon foreground color for the focused item. */
  'quickInputList.focusIconForeground'?: ColorInstance
  /** Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette. */
  'quickInputTitle.background'?: ColorInstance
  /** Background color of active radio option. */
  'radio.activeBackground'?: ColorInstance
  /** Border color of the active radio option. */
  'radio.activeBorder'?: ColorInstance
  /** Foreground color of active radio option. */
  'radio.activeForeground'?: ColorInstance
  /** Background color of inactive radio option. */
  'radio.inactiveBackground'?: ColorInstance
  /** Border color of the inactive radio option. */
  'radio.inactiveBorder'?: ColorInstance
  /** Foreground color of inactive radio option. */
  'radio.inactiveForeground'?: ColorInstance
  /** Background color of inactive active radio option when hovering. */
  'radio.inactiveHoverBackground'?: ColorInstance
  /** The hover border color for draggable sashes. */
  'sash.hoverBorder'?: ColorInstance
  /** Source control graph foreground color (1). */
  'scmGraph.foreground1'?: ColorInstance
  /** Source control graph foreground color (2). */
  'scmGraph.foreground2'?: ColorInstance
  /** Source control graph foreground color (3). */
  'scmGraph.foreground3'?: ColorInstance
  /** Source control graph foreground color (4). */
  'scmGraph.foreground4'?: ColorInstance
  /** Source control graph foreground color (5). */
  'scmGraph.foreground5'?: ColorInstance
  /** History item base reference color. */
  'scmGraph.historyItemBaseRefColor'?: ColorInstance
  /** History item hover additions foreground color. */
  'scmGraph.historyItemHoverAdditionsForeground'?: ColorInstance
  /** History item hover default label background color. */
  'scmGraph.historyItemHoverDefaultLabelBackground'?: ColorInstance
  /** History item hover default label foreground color. */
  'scmGraph.historyItemHoverDefaultLabelForeground'?: ColorInstance
  /** History item hover deletions foreground color. */
  'scmGraph.historyItemHoverDeletionsForeground'?: ColorInstance
  /** History item hover label foreground color. */
  'scmGraph.historyItemHoverLabelForeground'?: ColorInstance
  /** History item reference color. */
  'scmGraph.historyItemRefColor'?: ColorInstance
  /** History item remote reference color. */
  'scmGraph.historyItemRemoteRefColor'?: ColorInstance
  /** Scrollbar track background color. */
  'scrollbar.background'?: ColorInstance
  /** Scrollbar slider shadow to indicate that the view is scrolled. */
  'scrollbar.shadow'?: ColorInstance
  /** Scrollbar slider background color when clicked on. */
  'scrollbarSlider.activeBackground'?: ColorInstance
  /** Scrollbar slider background color. */
  'scrollbarSlider.background'?: ColorInstance
  /** Scrollbar slider background color when hovering. */
  'scrollbarSlider.hoverBackground'?: ColorInstance
  /** Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "`{x} results in {y} files`". */
  'search.resultsInfoForeground'?: ColorInstance
  /** Color of the editor's results. */
  'searchEditor.findMatchBackground'?: ColorInstance
  /** Border color of the editor's results. */
  'searchEditor.findMatchBorder'?: ColorInstance
  /** Search editor text input box border. */
  'searchEditor.textInputBorder'?: ColorInstance
  /** Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal). */
  'selection.background'?: ColorInstance
  /** Checkbox background. */
  'settings.checkboxBackground'?: ColorInstance
  /** Checkbox border. */
  'settings.checkboxBorder'?: ColorInstance
  /** Checkbox foreground. */
  'settings.checkboxForeground'?: ColorInstance
  /** Dropdown background. */
  'settings.dropdownBackground'?: ColorInstance
  /** Dropdown border. */
  'settings.dropdownBorder'?: ColorInstance
  /** Dropdown foreground. */
  'settings.dropdownForeground'?: ColorInstance
  /** Dropdown list border. */
  'settings.dropdownListBorder'?: ColorInstance
  /** Background color of a focused setting row. */
  'settings.focusedRowBackground'?: ColorInstance
  /** The color of the row's top and bottom border when the row is focused. */
  'settings.focusedRowBorder'?: ColorInstance
  /** The color of the header container border. */
  'settings.headerBorder'?: ColorInstance
  /** The foreground color for a section header or active title. */
  'settings.headerForeground'?: ColorInstance
  /** The line that indicates a modified setting. */
  'settings.modifiedItemIndicator'?: ColorInstance
  /** Number input box background. */
  'settings.numberInputBackground'?: ColorInstance
  /** Number input box border. */
  'settings.numberInputBorder'?: ColorInstance
  /** Number input box foreground. */
  'settings.numberInputForeground'?: ColorInstance
  /** The background color of a settings row when hovered. */
  'settings.rowHoverBackground'?: ColorInstance
  /** The color of the Settings editor splitview sash border. */
  'settings.sashBorder'?: ColorInstance
  /** The foreground color for a section header or hovered title. */
  'settings.settingsHeaderHoverForeground'?: ColorInstance
  /** Text input box background. */
  'settings.textInputBackground'?: ColorInstance
  /** Text input box border. */
  'settings.textInputBorder'?: ColorInstance
  /** Text input box foreground. */
  'settings.textInputForeground'?: ColorInstance
  /** Side Bar background color. */
  'sideBar.background'?: ColorInstance
  /** Side Bar border color on the side separating the editor. */
  'sideBar.border'?: ColorInstance
  /** Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. */
  'sideBar.dropBackground'?: ColorInstance
  /** Side Bar foreground color. The Side Bar is the container for views like Explorer and Search. */
  'sideBar.foreground'?: ColorInstance
  /** Border color between the activity bar at the top/bottom and the views. */
  'sideBarActivityBarTop.border'?: ColorInstance
  /** Side Bar section header background color. */
  'sideBarSectionHeader.background'?: ColorInstance
  /** Side bar section header border color. */
  'sideBarSectionHeader.border'?: ColorInstance
  /** Side Bar section header foreground color. */
  'sideBarSectionHeader.foreground'?: ColorInstance
  /** Background color of sticky scroll in the side bar. */
  'sideBarStickyScroll.background'?: ColorInstance
  /** Border color of sticky scroll in the side bar. */
  'sideBarStickyScroll.border'?: ColorInstance
  /** Shadow color of sticky scroll in the side bar. */
  'sideBarStickyScroll.shadow'?: ColorInstance
  /** Side bar title background color. The side bar is the container for views like explorer and search. */
  'sideBarTitle.background'?: ColorInstance
  /** Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search. */
  'sideBarTitle.border'?: ColorInstance
  /** Side Bar title foreground color. */
  'sideBarTitle.foreground'?: ColorInstance
  /** Color to separate two editors from each other when shown side by side in an editor group from top to bottom. */
  'sideBySideEditor.horizontalBorder'?: ColorInstance
  /** Color to separate two editors from each other when shown side by side in an editor group from left to right. */
  'sideBySideEditor.verticalBorder'?: ColorInstance
  /** Border color of the sash border. */
  'simpleFindWidget.sashBorder'?: ColorInstance
  /** Standard Status Bar background color. */
  'statusBar.background'?: ColorInstance
  /** Status Bar border color separating the Status Bar and editor. */
  'statusBar.border'?: ColorInstance
  /** Status Bar background color when a program is being debugged. */
  'statusBar.debuggingBackground'?: ColorInstance
  /** Status Bar border color separating the Status Bar and editor when a program is being debugged. */
  'statusBar.debuggingBorder'?: ColorInstance
  /** Status Bar foreground color when a program is being debugged. */
  'statusBar.debuggingForeground'?: ColorInstance
  /** Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBar.focusBorder'?: ColorInstance
  /** Status Bar foreground color. */
  'statusBar.foreground'?: ColorInstance
  /** Status Bar background color when no folder is opened. */
  'statusBar.noFolderBackground'?: ColorInstance
  /** Status Bar border color separating the Status Bar and editor when no folder is opened. */
  'statusBar.noFolderBorder'?: ColorInstance
  /** Status Bar foreground color when no folder is opened. */
  'statusBar.noFolderForeground'?: ColorInstance
  /** Status Bar item background color when clicking. */
  'statusBarItem.activeBackground'?: ColorInstance
  /** Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window. */
  'statusBarItem.compactHoverBackground'?: ColorInstance
  /** Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorBackground'?: ColorInstance
  /** Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorForeground'?: ColorInstance
  /** Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.errorHoverBackground'?: ColorInstance
  /** Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.errorHoverForeground'?: ColorInstance
  /** Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBarItem.focusBorder'?: ColorInstance
  /** Status Bar item background color when hovering. */
  'statusBarItem.hoverBackground'?: ColorInstance
  /** Status bar item foreground color when hovering. The status bar is shown in the bottom of the window. */
  'statusBarItem.hoverForeground'?: ColorInstance
  /** Status bar item background color when the workbench is offline. */
  'statusBarItem.offlineBackground'?: ColorInstance
  /** Status bar item foreground color when the workbench is offline. */
  'statusBarItem.offlineForeground'?: ColorInstance
  /** Status bar item background hover color when the workbench is offline. */
  'statusBarItem.offlineHoverBackground'?: ColorInstance
  /** Status bar item foreground hover color when the workbench is offline. */
  'statusBarItem.offlineHoverForeground'?: ColorInstance
  /** Status Bar prominent items background color. */
  'statusBarItem.prominentBackground'?: ColorInstance
  /** Status Bar prominent items foreground color. */
  'statusBarItem.prominentForeground'?: ColorInstance
  /** Status Bar prominent items background color when hovering. */
  'statusBarItem.prominentHoverBackground'?: ColorInstance
  /** Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window. */
  'statusBarItem.prominentHoverForeground'?: ColorInstance
  /** Background color for the remote indicator on the status bar. */
  'statusBarItem.remoteBackground'?: ColorInstance
  /** Foreground color for the remote indicator on the status bar. */
  'statusBarItem.remoteForeground'?: ColorInstance
  /** Background color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverBackground'?: ColorInstance
  /** Foreground color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverForeground'?: ColorInstance
  /** Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningBackground'?: ColorInstance
  /** Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningForeground'?: ColorInstance
  /** Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverBackground'?: ColorInstance
  /** Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverForeground'?: ColorInstance
  /** The foreground color for array symbols. */
  'symbolIcon.arrayForeground'?: ColorInstance
  /** The foreground color for boolean symbols. */
  'symbolIcon.booleanForeground'?: ColorInstance
  /** The foreground color for class symbols. */
  'symbolIcon.classForeground'?: ColorInstance
  /** The foreground color for color symbols. */
  'symbolIcon.colorForeground'?: ColorInstance
  /** The foreground color for constant symbols. */
  'symbolIcon.constantForeground'?: ColorInstance
  /** The foreground color for constructor symbols. */
  'symbolIcon.constructorForeground'?: ColorInstance
  /** The foreground color for enumerator symbols. */
  'symbolIcon.enumeratorForeground'?: ColorInstance
  /** The foreground color for enumerator member symbols. */
  'symbolIcon.enumeratorMemberForeground'?: ColorInstance
  /** The foreground color for event symbols. */
  'symbolIcon.eventForeground'?: ColorInstance
  /** The foreground color for field symbols. */
  'symbolIcon.fieldForeground'?: ColorInstance
  /** The foreground color for file symbols. */
  'symbolIcon.fileForeground'?: ColorInstance
  /** The foreground color for folder symbols. */
  'symbolIcon.folderForeground'?: ColorInstance
  /** The foreground color for function symbols. */
  'symbolIcon.functionForeground'?: ColorInstance
  /** The foreground color for interface symbols. */
  'symbolIcon.interfaceForeground'?: ColorInstance
  /** The foreground color for key symbols. */
  'symbolIcon.keyForeground'?: ColorInstance
  /** The foreground color for keyword symbols. */
  'symbolIcon.keywordForeground'?: ColorInstance
  /** The foreground color for method symbols. */
  'symbolIcon.methodForeground'?: ColorInstance
  /** The foreground color for module symbols. */
  'symbolIcon.moduleForeground'?: ColorInstance
  /** The foreground color for namespace symbols. */
  'symbolIcon.namespaceForeground'?: ColorInstance
  /** The foreground color for null symbols. */
  'symbolIcon.nullForeground'?: ColorInstance
  /** The foreground color for number symbols. */
  'symbolIcon.numberForeground'?: ColorInstance
  /** The foreground color for object symbols. */
  'symbolIcon.objectForeground'?: ColorInstance
  /** The foreground color for operator symbols. */
  'symbolIcon.operatorForeground'?: ColorInstance
  /** The foreground color for package symbols. */
  'symbolIcon.packageForeground'?: ColorInstance
  /** The foreground color for property symbols. */
  'symbolIcon.propertyForeground'?: ColorInstance
  /** The foreground color for reference symbols. */
  'symbolIcon.referenceForeground'?: ColorInstance
  /** The foreground color for snippet symbols. */
  'symbolIcon.snippetForeground'?: ColorInstance
  /** The foreground color for string symbols. */
  'symbolIcon.stringForeground'?: ColorInstance
  /** The foreground color for struct symbols. */
  'symbolIcon.structForeground'?: ColorInstance
  /** The foreground color for text symbols. */
  'symbolIcon.textForeground'?: ColorInstance
  /** The foreground color for type parameter symbols. */
  'symbolIcon.typeParameterForeground'?: ColorInstance
  /** The foreground color for unit symbols. */
  'symbolIcon.unitForeground'?: ColorInstance
  /** The foreground color for variable symbols. */
  'symbolIcon.variableForeground'?: ColorInstance
  /** Active Tab background color in an active group. */
  'tab.activeBackground'?: ColorInstance
  /** Bottom border for the active tab. */
  'tab.activeBorder'?: ColorInstance
  /** Top border for the active tab. */
  'tab.activeBorderTop'?: ColorInstance
  /** Active Tab foreground color in an active group. */
  'tab.activeForeground'?: ColorInstance
  /** Border on the top of modified (dirty) active tabs in an active group. */
  'tab.activeModifiedBorder'?: ColorInstance
  /** Border to separate Tabs from each other. */
  'tab.border'?: ColorInstance
  /** Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.dragAndDropBorder'?: ColorInstance
  /** Tab background color when hovering */
  'tab.hoverBackground'?: ColorInstance
  /** Border to highlight tabs when hovering */
  'tab.hoverBorder'?: ColorInstance
  /** Tab foreground color when hovering */
  'tab.hoverForeground'?: ColorInstance
  /** Inactive Tab background color. */
  'tab.inactiveBackground'?: ColorInstance
  /** Inactive Tab foreground color in an active group. */
  'tab.inactiveForeground'?: ColorInstance
  /** Border on the top of modified (dirty) inactive tabs in an active group. */
  'tab.inactiveModifiedBorder'?: ColorInstance
  /** Border on the right of the last pinned editor to separate from unpinned editors. */
  'tab.lastPinnedBorder'?: ColorInstance
  /** Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBackground'?: ColorInstance
  /** Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBorderTop'?: ColorInstance
  /** Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedForeground'?: ColorInstance
  /** Active Tab background color in an inactive editor group. */
  'tab.unfocusedActiveBackground'?: ColorInstance
  /** Bottom border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorder'?: ColorInstance
  /** Top border for the active tab in an inactive editor group */
  'tab.unfocusedActiveBorderTop'?: ColorInstance
  /** Active tab foreground color in an inactive editor group. */
  'tab.unfocusedActiveForeground'?: ColorInstance
  /** Border on the top of modified (dirty) active tabs in an unfocused group. */
  'tab.unfocusedActiveModifiedBorder'?: ColorInstance
  /** Tab background color in an unfocused group when hovering */
  'tab.unfocusedHoverBackground'?: ColorInstance
  /** Border to highlight tabs in an unfocused group when hovering */
  'tab.unfocusedHoverBorder'?: ColorInstance
  /** Tab foreground color in an unfocused group when hovering */
  'tab.unfocusedHoverForeground'?: ColorInstance
  /** Inactive Tab background color in an unfocused group */
  'tab.unfocusedInactiveBackground'?: ColorInstance
  /** Inactive tab foreground color in an inactive editor group. */
  'tab.unfocusedInactiveForeground'?: ColorInstance
  /** Border on the top of modified (dirty) inactive tabs in an unfocused group. */
  'tab.unfocusedInactiveModifiedBorder'?: ColorInstance
  /** 'Black' ANSI color in the terminal. */
  'terminal.ansiBlack'?: ColorInstance
  /** 'Blue' ANSI color in the terminal. */
  'terminal.ansiBlue'?: ColorInstance
  /** 'BrightBlack' ANSI color in the terminal. */
  'terminal.ansiBrightBlack'?: ColorInstance
  /** 'BrightBlue' ANSI color in the terminal. */
  'terminal.ansiBrightBlue'?: ColorInstance
  /** 'BrightCyan' ANSI color in the terminal. */
  'terminal.ansiBrightCyan'?: ColorInstance
  /** 'BrightGreen' ANSI color in the terminal. */
  'terminal.ansiBrightGreen'?: ColorInstance
  /** 'BrightMagenta' ANSI color in the terminal. */
  'terminal.ansiBrightMagenta'?: ColorInstance
  /** 'BrightRed' ANSI color in the terminal. */
  'terminal.ansiBrightRed'?: ColorInstance
  /** 'BrightWhite' ANSI color in the terminal. */
  'terminal.ansiBrightWhite'?: ColorInstance
  /** 'BrightYellow' ANSI color in the terminal. */
  'terminal.ansiBrightYellow'?: ColorInstance
  /** 'Cyan' ANSI color in the terminal. */
  'terminal.ansiCyan'?: ColorInstance
  /** 'Green' ANSI color in the terminal. */
  'terminal.ansiGreen'?: ColorInstance
  /** 'Magenta' ANSI color in the terminal. */
  'terminal.ansiMagenta'?: ColorInstance
  /** 'Red' ANSI color in the terminal. */
  'terminal.ansiRed'?: ColorInstance
  /** 'White' ANSI color in the terminal. */
  'terminal.ansiWhite'?: ColorInstance
  /** 'Yellow' ANSI color in the terminal. */
  'terminal.ansiYellow'?: ColorInstance
  /** The background of the Integrated Terminal's viewport. */
  'terminal.background'?: ColorInstance
  /** The color of the border that separates split panes within the terminal. This defaults to panel.border. */
  'terminal.border'?: ColorInstance
  /** The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through. */
  'terminal.dropBackground'?: ColorInstance
  /** Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchBackground'?: ColorInstance
  /** Border color of the current search match in the terminal. */
  'terminal.findMatchBorder'?: ColorInstance
  /** Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchHighlightBackground'?: ColorInstance
  /** Border color of the other search matches in the terminal. */
  'terminal.findMatchHighlightBorder'?: ColorInstance
  /** The default foreground color of the Integrated Terminal. */
  'terminal.foreground'?: ColorInstance
  /** Color of the highlight when hovering a link in the terminal. */
  'terminal.hoverHighlightBackground'?: ColorInstance
  /** The selection background color of the terminal when it does not have focus. */
  'terminal.inactiveSelectionBackground'?: ColorInstance
  /** Foreground color of the terminal initial hint. */
  'terminal.initialHintForeground'?: ColorInstance
  /** The selection background color of the terminal. */
  'terminal.selectionBackground'?: ColorInstance
  /** The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied. */
  'terminal.selectionForeground'?: ColorInstance
  /** Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`. */
  'terminal.tab.activeBorder'?: ColorInstance
  /** The default terminal command decoration background color. */
  'terminalCommandDecoration.defaultBackground'?: ColorInstance
  /** The terminal command decoration background color for error commands. */
  'terminalCommandDecoration.errorBackground'?: ColorInstance
  /** The terminal command decoration background color for successful commands. */
  'terminalCommandDecoration.successBackground'?: ColorInstance
  /** The foreground color of the terminal command guide that appears to the left of a command and its output on hover. */
  'terminalCommandGuide.foreground'?: ColorInstance
  /** The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'terminalCursor.background'?: ColorInstance
  /** The foreground color of the terminal cursor. */
  'terminalCursor.foreground'?: ColorInstance
  /** The overview ruler left-side border color. */
  'terminalOverviewRuler.border'?: ColorInstance
  /** The overview ruler cursor color. */
  'terminalOverviewRuler.cursorForeground'?: ColorInstance
  /** Overview ruler marker color for find matches in the terminal. */
  'terminalOverviewRuler.findMatchForeground'?: ColorInstance
  /** The background color of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.background'?: ColorInstance
  /** The border of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.border'?: ColorInstance
  /** The background color of the sticky scroll overlay in the terminal when hovered. */
  'terminalStickyScrollHover.background'?: ColorInstance
  /** The foreground color for an alias icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.aliasForeground'?: ColorInstance
  /** The foreground color for an argument icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.argumentForeground'?: ColorInstance
  /** The foreground color for a branch icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.branchForeground'?: ColorInstance
  /** The foreground color for a commit icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.commitForeground'?: ColorInstance
  /** The foreground color for a file icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.fileForeground'?: ColorInstance
  /** The foreground color for an flag icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.flagForeground'?: ColorInstance
  /** The foreground color for a folder icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.folderForeground'?: ColorInstance
  /** The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.inlineSuggestionForeground'?: ColorInstance
  /** The foreground color for a method icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.methodForeground'?: ColorInstance
  /** The foreground color for an option icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionForeground'?: ColorInstance
  /** The foreground color for an enum member icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionValueForeground'?: ColorInstance
  /** The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.pullRequestDoneForeground'?: ColorInstance
  /** The foreground color for a pull request icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.pullRequestForeground'?: ColorInstance
  /** The foreground color for a remote icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.remoteForeground'?: ColorInstance
  /** The foreground color for a stash icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.stashForeground'?: ColorInstance
  /** The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.symbolicLinkFileForeground'?: ColorInstance
  /** The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.symbolicLinkFolderForeground'?: ColorInstance
  /** The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.symbolText'?: ColorInstance
  /** The foreground color for a tag icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.tagForeground'?: ColorInstance
  /** Background for the badge indicating execution count */
  'testing.coverCountBadgeBackground'?: ColorInstance
  /** Foreground for the badge indicating execution count */
  'testing.coverCountBadgeForeground'?: ColorInstance
  /** Background color of text that was covered. */
  'testing.coveredBackground'?: ColorInstance
  /** Border color of text that was covered. */
  'testing.coveredBorder'?: ColorInstance
  /** Gutter color of regions where code was covered. */
  'testing.coveredGutterBackground'?: ColorInstance
  /** Color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored'?: ColorInstance
  /** Retired color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored.retired'?: ColorInstance
  /** Color for the 'failed' icon in the test explorer. */
  'testing.iconFailed'?: ColorInstance
  /** Retired color for the 'failed' icon in the test explorer. */
  'testing.iconFailed.retired'?: ColorInstance
  /** Color for the 'passed' icon in the test explorer. */
  'testing.iconPassed'?: ColorInstance
  /** Retired color for the 'passed' icon in the test explorer. */
  'testing.iconPassed.retired'?: ColorInstance
  /** Color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued'?: ColorInstance
  /** Retired color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued.retired'?: ColorInstance
  /** Color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped'?: ColorInstance
  /** Retired color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped.retired'?: ColorInstance
  /** Color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset'?: ColorInstance
  /** Retired color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset.retired'?: ColorInstance
  /** Background color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBackground'?: ColorInstance
  /** Border color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBorder'?: ColorInstance
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.badgeForeground'?: ColorInstance
  /** Margin color beside error messages shown inline in the editor. */
  'testing.message.error.lineBackground'?: ColorInstance
  /** Text color of test info messages shown inline in the editor. */
  'testing.message.info.decorationForeground'?: ColorInstance
  /** Margin color beside info messages shown inline in the editor. */
  'testing.message.info.lineBackground'?: ColorInstance
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekBorder'?: ColorInstance
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekHeaderBackground'?: ColorInstance
  /** Color of the peek view borders and arrow. */
  'testing.peekBorder'?: ColorInstance
  /** Color of the peek view borders and arrow. */
  'testing.peekHeaderBackground'?: ColorInstance
  /** Color for 'run' icons in the editor. */
  'testing.runAction'?: ColorInstance
  /** Background color of text that was not covered. */
  'testing.uncoveredBackground'?: ColorInstance
  /** Border color of text that was not covered. */
  'testing.uncoveredBorder'?: ColorInstance
  /** Background of the widget shown for an uncovered branch. */
  'testing.uncoveredBranchBackground'?: ColorInstance
  /** Gutter color of regions where code not covered. */
  'testing.uncoveredGutterBackground'?: ColorInstance
  /** Background color for block quotes in text. */
  'textBlockQuote.background'?: ColorInstance
  /** Border color for block quotes in text. */
  'textBlockQuote.border'?: ColorInstance
  /** Background color for code blocks in text. */
  'textCodeBlock.background'?: ColorInstance
  /** Foreground color for links in text when clicked on and on mouse hover. */
  'textLink.activeForeground'?: ColorInstance
  /** Foreground color for links in text. */
  'textLink.foreground'?: ColorInstance
  /** Background color for preformatted text segments. */
  'textPreformat.background'?: ColorInstance
  /** Foreground color for preformatted text segments. */
  'textPreformat.foreground'?: ColorInstance
  /** Color for text separators. */
  'textSeparator.foreground'?: ColorInstance
  /** Title Bar background when the window is active. */
  'titleBar.activeBackground'?: ColorInstance
  /** Title Bar foreground when the window is active. */
  'titleBar.activeForeground'?: ColorInstance
  /** Title bar border color. */
  'titleBar.border'?: ColorInstance
  /** Title Bar background when the window is inactive. */
  'titleBar.inactiveBackground'?: ColorInstance
  /** Title Bar foreground when the window is inactive. */
  'titleBar.inactiveForeground'?: ColorInstance
  /** Toolbar background when holding the mouse over actions */
  'toolbar.activeBackground'?: ColorInstance
  /** Toolbar background when hovering over actions using the mouse */
  'toolbar.hoverBackground'?: ColorInstance
  /** Toolbar outline when hovering over actions using the mouse */
  'toolbar.hoverOutline'?: ColorInstance
  /** Tree stroke color for the indentation guides that are not active. */
  'tree.inactiveIndentGuidesStroke'?: ColorInstance
  /** Tree Widget's stroke color for indent guides. */
  'tree.indentGuidesStroke'?: ColorInstance
  /** Tree stroke color for the indentation guides. */
  'tree.tableColumnsBorder'?: ColorInstance
  /** Background color for odd table rows. */
  'tree.tableOddRowsBackground'?: ColorInstance
  /** Background color for the embedded editors on the Interactive Playground. */
  'walkThrough.embeddedEditorBackground'?: ColorInstance
  /** Foreground color of the heading of each walkthrough step. */
  'walkthrough.stepTitle.foreground'?: ColorInstance
  /** Background color for the Welcome page. */
  'welcomePage.background'?: ColorInstance
  /** Foreground color for the Welcome page progress bars. */
  'welcomePage.progress.background'?: ColorInstance
  /** Background color for the Welcome page progress bars. */
  'welcomePage.progress.foreground'?: ColorInstance
  /** Background color for the tiles on the Welcome page. */
  'welcomePage.tileBackground'?: ColorInstance
  /** Border color for the tiles on the Welcome page. */
  'welcomePage.tileBorder'?: ColorInstance
  /** Hover background color for the tiles on the Welcome page. */
  'welcomePage.tileHoverBackground'?: ColorInstance
  /** Border color of widgets such as Find/Replace inside the editor. */
  'widget.border'?: ColorInstance
  /** Shadow color of widgets such as Find/Replace inside the editor. */
  'widget.shadow'?: ColorInstance
  /** Border color for the active (focused) window. */
  'window.activeBorder'?: ColorInstance
  /** Border color for the inactive (unfocused) windows. */
  'window.inactiveBorder'?: ColorInstance

}

export {
  VSCColorContributions,
}
