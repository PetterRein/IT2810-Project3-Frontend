# This file will describe how we work and how you can

### Git Commits
Should be:
- lowercase
- presten tense
- tagged to a issue
- try to use prefixes, memo, add, test, bug, feat are some
- atomic
- every commit should pass the tests


### Branching
When you have picked a issue, create a branch from master with the prefix feature/*, hotfix/*, refactor/* which fits the task better. When you are done, create a pull request for your branch into master. Commits is not squished, every commit is tagged with a issue.

### Pull Request
When you create a Pull Request check the list:
- [ ] written a short describiton of the feature and what you have done in the pull request
- [ ] written code documentation where it made sense
- [ ] written tests 
- [ ] referenced all the issues in commits related to this PR

The pull request can be merge by another contributer or when the CI line passes.


### Styles on code
 - ESLint and Prettier
