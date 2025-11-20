import { type ColorInstance } from 'color'

interface UIExtensionColours {
  // -- GitHub Pull Requests & Issues

  /**
   * The color used for the assignees and labels fields in a new issue editor.
   */
  'issues.newIssueDecoration'?: ColorInstance
  /**
   * The color used for indicating that an issue is open.
   */
  'issues.open'?: ColorInstance
  /**
   * The color used for indicating that an issue is closed.
   */
  'issues.closed'?: ColorInstance
  /**
   * The color used for indicating that a pull request is open.
   */
  'pullRequests.open'?: ColorInstance
  /**
   * The color used for indicating that a pull request is closed.
   */
  'pullRequests.closed'?: ColorInstance
  /**
   * The color used for indicating that a pull request is a draft.
   */
  'pullRequests.draft'?: ColorInstance
  /**
   * The color used for indicating that a pull request is merged.
   */
  'pullRequests.merged'?: ColorInstance
  /**
   * The color used for indicating a notification on a pull request
   */
  'pullRequests.notification'?: ColorInstance


  // -- Error Lens

  'errorLens.errorBackground'?: ColorInstance
  'errorLens.errorBackgroundLight'?: ColorInstance
  'errorLens.errorForeground'?: ColorInstance
  'errorLens.errorForegroundLight'?: ColorInstance
  'errorLens.errorMessageBackground'?: ColorInstance
  'errorLens.hintBackground'?: ColorInstance
  'errorLens.hintBackgroundLight'?: ColorInstance
  'errorLens.hintForeground'?: ColorInstance
  'errorLens.hintForegroundLight'?: ColorInstance
  'errorLens.hintMessageBackground'?: ColorInstance
  'errorLens.infoBackground'?: ColorInstance
  'errorLens.infoBackgroundLight'?: ColorInstance
  'errorLens.infoForeground'?: ColorInstance
  'errorLens.infoForegroundLight'?: ColorInstance
  'errorLens.infoMessageBackground'?: ColorInstance
  'errorLens.warningBackground'?: ColorInstance
  'errorLens.warningBackgroundLight'?: ColorInstance
  'errorLens.warningForeground'?: ColorInstance
  'errorLens.warningForegroundLight'?: ColorInstance
  'errorLens.warningMessageBackground'?: ColorInstance


  // -- GitLens

  'gitlens.closedPullRequestIconColor'?: ColorInstance
  'gitlens.decorations.addedForegroundColor'?: ColorInstance
  'gitlens.decorations.branchAheadForegroundColor'?: ColorInstance
  'gitlens.decorations.branchBehindForegroundColor'?: ColorInstance
  'gitlens.decorations.branchDivergedForegroundColor'?: ColorInstance
  'gitlens.decorations.branchUnpublishedForegroundColor'?: ColorInstance
  'gitlens.decorations.branchUpToDateForegroundColor'?: ColorInstance
  'gitlens.decorations.copiedForegroundColor'?: ColorInstance
  'gitlens.decorations.deletedForegroundColor'?: ColorInstance
  'gitlens.decorations.ignoredForegroundColor'?: ColorInstance
  'gitlens.decorations.modifiedForegroundColor'?: ColorInstance
  'gitlens.decorations.renamedForegroundColor'?: ColorInstance
  'gitlens.decorations.untrackedForegroundColor'?: ColorInstance
  'gitlens.gutterBackgroundColor'?: ColorInstance
  'gitlens.gutterForegroundColor'?: ColorInstance
  'gitlens.gutterUncommittedForegroundColor'?: ColorInstance
  'gitlens.lineHighlightBackgroundColor'?: ColorInstance
  'gitlens.lineHighlightOverviewRulerColor'?: ColorInstance
  'gitlens.mergedPullRequestIconColor'?: ColorInstance
  'gitlens.openPullRequestIconColor'?: ColorInstance
  'gitlens.trailingLineBackgroundColor'?: ColorInstance
  'gitlens.trailingLineForegroundColor'?: ColorInstance
  'gitlens.unpublishedCommitIconColor'?: ColorInstance
  'gitlens.unpulledChangesIconColor'?: ColorInstance
  'gitlens.unpushlishedChangesIconColor'?: ColorInstance


  // -- LintLens

  'lintlens.annotationColor'?: ColorInstance


  // -- Bookmarks

  'bookmarks.overviewRuler'?: ColorInstance
  'bookmarks.lineBackground'?: ColorInstance
  'bookmarks.lineBorder'?: ColorInstance


  // -- Test Explorer

  'testExplorer.errorDecorationBackground'?: ColorInstance


  // -- SQL Tools
  'sqltools.currentQueryBg'?: ColorInstance
  'sqltools.currentQueryOutline'?: ColorInstance


  // -- File Watcher

  'filewatcher.error'?: ColorInstance
}

export {
  UIExtensionColours,
}
