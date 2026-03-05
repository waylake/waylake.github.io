# Branch Strategy

This project follows GitHub Flow for branch management.

## Main Branch

- **master**: Production branch, always deployable
  - GitHub Pages automatically deploys from this branch
  - Protected branch - requires PR for changes

## Branch Naming Convention

| Prefix | Purpose | Example |
|--------|---------|---------|
| `post/` | New blog post | `post/understanding-ai-cognition` |
| `fix/` | Bug fixes | `fix/broken-image-link` |
| `update/` | Improvements/refactoring | `update/optimize-images` |
| `docs/` | Documentation updates | `docs/update-readme` |

## Workflow

### 1. Create Branch

```bash
git checkout master
git pull origin master
git checkout -b <branch-name>
```

### 2. Work on Branch

```bash
# Make changes
git add .
git commit -m "<commit-message>"
git push origin <branch-name>
```

### 3. Create Pull Request

```bash
gh pr create --title "<title>" --body "<description>"
```

### 4. Review & Merge

- Self-review or team review
- Ensure all checks pass
- Squash and merge to master
- Delete branch after merge

## Commit Message Convention

Format: `<type>: <description>`

| Type | Description |
|------|-------------|
| `add` | New feature/content |
| `edit` | Modifying existing content |
| `fix` | Bug fixes |
| `update` | Improvements |
| `remove` | Removing files/code |
| `docs` | Documentation only |
| `refactor` | Code refactoring |

### Examples

```
add: new post about cognitive biases
edit: update AI section in philosophy post
fix: broken image link on cognition page
update: optimize site performance
```

## Branch Protection Rules

Master branch is protected with:
- Require pull request before merging
- Require status checks to pass
- Require linear history

## Best Practices

1. Keep branches small and focused
2. Use descriptive branch names
3. Write clear commit messages
4. Review your own PR first
5. Delete branches after merging
6. Keep master always deployable

## Quick Reference

```bash
# Start new work
git checkout master && git pull
git checkout -b post/my-new-article

# Create PR
gh pr create

# Clean up after merge
git checkout master && git pull
git branch -d post/my-new-article
```
