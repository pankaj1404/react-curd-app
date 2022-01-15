# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Adding a project to GitHub with GitHub CLI
    GitHub CLI is an open source tool for using GitHub from your computer's command line. GitHub CLI can simplify the process of adding an existing project to GitHub using the command line. To learn more about GitHub CLI, see "About GitHub CLI."

1. In the command line, navigate to the root directory of your project.

2. Initialize the local directory as a Git repository.
   git init -b main

3. Stage and commit all the files in your project

git add . && git commit -m "initial commit"

4. To create a repository for your project on GitHub, use the gh repo create subcommand. When prompted, select Push an existing local repository to GitHub and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with organization-name/project-name.

5. Follow the interactive prompts. To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

6. Alternatively, to skip all the prompts, supply the path to the repository with the --source flag and pass a visibility flag (--public, --private, or --internal). For example, gh repo create --source=. --public. Specify a remote with the --remote flag. To push your commits, pass the --push flag. For more information about possible arguments, see the GitHub CLI manual.

# Adding a project to GitHub without GitHub CLI
1. Create a new repository on GitHub.com. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

Create New Repository drop-down

2. Open Git Bash.
3. Change the current working directory to your local project.
4. Initialize the local directory as a Git repository.
   $ git init -b main
5. Add the files in your new local repository. This stages them for the first commit.
    $ git add .
    # Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
6. Commit the files that you've staged in your local repository.
    $ git commit -m "First commit"
    # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
7. At the top of your repository on GitHub.com's Quick Setup page, click  to copy the remote repository URL.
Copy remote repository URL field
8. In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
    $ git remote add origin  <REMOTE_URL> 
    # Sets the new remote
    $ git remote -v
    # Verifies the new remote URL
9. Push the changes in your local repository to GitHub.com.
    $ git push origin main
    # Pushes the changes in your local repository up to the remote repository you specified

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
