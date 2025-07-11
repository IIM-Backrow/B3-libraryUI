# GitHub Workflows

This directory contains GitHub Actions workflows for the B3 Library UI project.

## Workflows Overview

### 🔧 CI Workflow (`ci.yml`)

**Triggers:** PRs to main (non-draft), pushes to main **Purpose:** Continuous Integration testing

**Steps:**

- Linting (`eslint`)
- Type checking (`tsc --noEmit`)
- Testing with coverage (`jest`)
- Build verification
- Package installation test
- Runs on Node.js 18.x and 20.x

### 🚀 Release & Publish (`release.yml`)

**Triggers:** Push to main, manual workflow dispatch **Purpose:** Build and publish packages to npm

**Features:**

- Auto-detects version changes in `package.json`
- Manual version bumping via workflow dispatch
- Creates GitHub releases
- Publishes to npm with proper tagging (beta/alpha support)
- Full CI validation before publishing

### 🔍 PR Checks (`pr-checks.yml`)

**Triggers:** PR events (opened, edited, synchronize, reopened) **Purpose:** Additional validation for pull requests

**Checks:**

- Security vulnerability scanning
- Dependency outdated analysis
- Semantic PR title validation
- Bundle size monitoring (warns if > 100KB)
- TODO/FIXME comment detection

### 🤖 Dependency Updates (`dependency-updates.yml`)

**Triggers:** Dependabot PRs **Purpose:** Auto-merge safe dependency updates

**Features:**

- Auto-approves and merges patch dependency updates
- Only merges after CI passes
- Requires all checks to be successful

## Setup Requirements

### Secrets Required

Add these secrets to your GitHub repository:

1. **`NPM_TOKEN`** - NPM authentication token for publishing
   - Generate at: https://www.npmjs.com/settings/tokens
   - Scope: Automation (publish access)

### Repository Settings

1. **Branch Protection Rules** for `main`:
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Required status checks: `ci (18.x)`, `ci (20.x)`, `pr-validation`

2. **Dependabot Configuration**:
   - Weekly updates on Mondays at 9:00 AM
   - Automatic npm and GitHub Actions updates
   - Team reviewers: `@IIM-Backrow/maintainers`

## Manual Release Process

To manually trigger a release:

1. Go to Actions tab in GitHub
2. Select "Release & Publish" workflow
3. Click "Run workflow"
4. Choose release type: `patch`, `minor`, `major`, or `prerelease`
5. Click "Run workflow"

## Semantic Commit Messages

PR titles should follow semantic commit format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Testing changes
- `build:` - Build system changes
- `ci:` - CI configuration changes
- `chore:` - Other changes

## Troubleshooting

### Common Issues

1. **CI fails on format check**: Run `npm run format` locally
2. **Tests fail**: Run `npm test` locally to debug
3. **Build fails**: Check TypeScript errors with `npx tsc --noEmit`
4. **NPM publish fails**: Verify `NPM_TOKEN` secret is set correctly

### Workflow Permissions

Ensure the repository has these permissions enabled:

- Actions: Read and write
- Contents: Read and write
- Metadata: Read
- Pull requests: Write
