# Git & GitHub

## 1. Git
Git is a version control system used to track changes in code.
It is mainly used to track history and collaborate.

### Command
git --version


## 2. Configuring Git
Git configuration is used to save settings like username and email for commits.

### Commands
git config --global user.name "Mohit Kumar"
git config --global user.email "your@email.com"
git config --list


## 3. Clone & Status
`git clone` is used to copy a remote repository to the local system.
`git status` shows the current state of files.

### Commands
git clone <repository-url>
git status


## 4. Four Types of Status

1. Untracked → New file which Git is not tracking.
2. Modified → Existing file has been changed.
3. Staged → File is ready to be committed.
4. Unmodified → File has no changes.

### Flow
Untracked → Add → Staged → Commit → Unmodified


## 5. Add & Commit
`git add` adds new or changed files to the staging area.
`git commit` records the staged changes.

### Commands
git add <file-name>
git add .
git commit -m "some message"


## 6. Push Command
`git push` uploads local repository commits to the remote GitHub repository.

### Command
git push origin main


## 7. Init Command
`git init` is used to create/initialize a new Git repository in a folder.

### Commands
git init
git remote add origin <repository-url>
git remote -v
git branch -M main
git push origin main


## 8. Git Branches
Branches allow us to work on different features separately without directly affecting the main branch.

### Command
git branch


## 9. Branch Commands
Branch commands are used to check, create, rename, switch and delete branches.

### Commands
git branch
git branch -M main
git checkout <branch-name>
git checkout -b <new-branch-name>
git branch -d <branch-name>


## 10. Merging Code
Merging combines the changes of one branch into another branch.

### Commands
git diff <branch-name>
git merge <branch-name>


## 11. Pull Request
A Pull Request allows us to ask others to review and merge the changes made in our branch into another branch on GitHub.

### Flow
Create Branch → Make Changes → Push → Create Pull Request → Merge


## 12. Pull Command
`git pull` fetches changes from the remote repository and updates the local repository.

### Command
git pull origin main


## 13. Resolving Merge Conflicts
A merge conflict occurs when Git cannot automatically combine changes from two commits/branches.
We manually resolve the conflicting code and then commit it.

### Commands
git status
git add <file-name>
git commit -m "resolve merge conflict"


## 14. Undoing Changes — Staged Changes
If a file has been staged but we want to remove it from the staging area, we can use `git reset`.

### Commands
git reset <file-name>
git reset


## 15. Undoing Changes — Committed Changes
For undoing a single committed change, `git reset HEAD~1` can be used.

### Command
git reset HEAD~1


## 16. Undoing Multiple Commits
For going back to an older commit, we can use the commit hash with `git reset`.

### Commands
git reset <commit-hash>
git reset --hard <commit-hash>


## 17. Fork
Fork creates a copy of another GitHub repository in our own GitHub account.
It allows us to work on the project without directly changing the original repository.

### Flow
Fork → Clone → Changes → Push → Pull Request


## 18. Upstream
Upstream is the remote repository from which we want to get updates from the original repository.

### Commands
git remote add upstream <original-repo-url>
git remote -v


## 19. Update from Upstream
We can fetch changes from the original repository and merge them into our local repository.

### Commands
git fetch upstream
git merge upstream/main


## 20. Push Changes in Fork
After making changes in our fork, we push them to our own GitHub repository.

### Command
git push origin <branch-name>


## 21. Rebase
Rebase moves our branch commits on top of the latest commits from another branch, keeping the history cleaner.

### Command
git rebase upstream/main


## Git Basic Workflow

GitHub
  ↓
Clone
  ↓
Changes
  ↓
Add
  ↓
Commit
  ↓
Push
  ↓
GitHub
```

