# Programming Club UIET
This is the official website of the Programming Club at UIET, Panjab University.

## Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Development Workflow

### Setup your development environment

#### Prerequisites

```
python 3.5+
node 10.x.x+
npm 5.x+
pipenv
```

1. Fork and clone this repo.

```
$ git clone http://github.com/pclubuiet/website2.git
```

2. Change working directory into the repo, activate your virtual environment and install the backend dependencies.

```
$ cd website2
$ pipenv shell
(env) $ pipenv install
```

3. Change the working directory into the frontend react app and install the frontend dependencies.

```
(env) $ cd frontend
(env) $ npm install
```

4. Start the django development server

```
(env) $ cd ..
(env) $ python manage.py migrate
(env) $ python manage.py runserver
```

5. Run the frontend app in another shell

```
(env) $ cd frontend
(env) $ npm run watch
```

6. Open http://localhost:8000/ in your browser.

7. Add a new remote to your fork if you want to contribute

```
git remote add myfork https://github.com/<username>/website2.git
```

## Fixing issues
### Step 1: Pick an issues
After selecting an issue
1. Comment on the issue saying that you are working on the issue.
2. We expect you to discuss the approach by comments.
3. Updates or progress on the issue would be nice.

### Step 2: Follow branch policies
1. Create a new branch and switch to it (make sure you are on master before doing this).
    ```
    git branch mybranch
    git checkout mybranch
    ```
    'mybranch' can be replaced by your preferred name for the branch.
    The above two commands are equivalent to the following
    ```
    git checkout -b mybranch
    ```

2. Make your changes and then execute the tests to make sure you didn't break anything.

    ```
    python3 manage.py test
    ```
    Ensure that you follow [PEP8](https://www.python.org/dev/peps/pep-0008/#descriptive-naming-styles) style guide for python code while naming functions or classes.

    Then stage them and commit them.
    Check out Chris Beams's guide to writing good commit messages [here](https://chris.beams.io/posts/git-commit/).

    *A small description of your changes is must in the commit messages.*

3. After you are done making changes, push the branch to your fork.
    ```
    git push -u myfork mybranch
    ```
    The **-u** option is required only the first time you push the branch.

 Make sure your branch is up-to-date with the latest version of the master. Else you are required to do a rebase to place your changes above master branch.

### Step 3: Follow Coding policys

 1. Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.
 2. Single commit per pull request
 3. For writing commit messages please adhere to the Commit style guidelines.
 4. Follow uniform design practices.
 5. The pull request will not get merged until and unless the commits are squashed. In case there are multiple commits on the PR, the commit author needs to squash them and not the maintainers cherrypicking and merging squashes.
 6. If the PR is related to any front end change, please attach relevant screenshots in the pull request description.

### Step 4: Submitting a Pull requests
Once a PR is opened, try and complete it within 2 weeks, or at least stay actively working on it. Inactivity for a long period may necessitate a closure of the PR. As mentioned earlier updates would be nice.

Deploy to heroku using the badge provided above and post the link in the description of your PR.

### Step 5: Code Reviews

Your code will be reviewed, in this sequence, by:

1. Travis CI: by building and running tests. If there are failed tests, the build will be marked as a failure. You can consult the CI log to find which tests. Ensure that all tests pass before triggering another build.
2. Reviewer: A core team member will review your pull request and approve it or he will suggest changes.

### Step 6: Help us by reviewing other Pull Requests!
If you have the time and the knowledge then you must review other Pull Requests. This would stop Pull Requests from stacking up and will definitely mean your Pull Request would be reviewed faster.

**Things to keep in mind while reviewing a Pull Request:**

If any of the following questions has a **YES** for an answer then the request shall **NOT** be approved.
* Will the referenced issue **NOT** be fixed with the Pull Request?
* Is the commit message **NOT** good?
* Are there unnecessary changes?
* Is a rebase required?
* Is the fix dirty / hacky?

## License

This website is licensed under [GPL V3+](https://www.gnu.org/licenses/gpl-3.0.fr.html)
