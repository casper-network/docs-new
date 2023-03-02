# Steps to take before pushing/submitting a PR

## Introduction/Rationale
The repository on Github has a number of actions assigned which run whenever a commit is pushed to the repo. The purpose of this is to check that the site builds and run some tests before pushing the site to the test area. 

_**It is the responsibility of each developer**_ to ensure that these build steps run in the Github Cloud. "Works on my Machine" is not a valid excuse. It is acjknowledged that this is not always easy, so with that in mind, the following steps are suggested as a means of helping to ensure that the build doesn't break all the time, and that when it does, there is some awareness as to how to debug and fix it. 

### Check Successful Build
Even if you only make some text changes, always check that the basic Yarn build runs successfully
```
yarn build
```
### Check External Links
```
yarn check:externals
```

