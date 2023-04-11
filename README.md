## Commit Message Format

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, can be anything specifying the scope of the commit change.
  |                          For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc.
  |                          In App Development, scope can be a page, a module or a component.
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
```

If you want to learn more about what kind of commit type you should use, you can take a look to [Conventional Commits Guide](https://www.conventionalcommits.org/en/v1.0.0/).

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

Bad:

> Correct spelling of CHANGELOG.

Good:

> docs: correct spelling of CHANGELOG

Better (commit message with scope):

> docs(CHANGELOG): correct spelling