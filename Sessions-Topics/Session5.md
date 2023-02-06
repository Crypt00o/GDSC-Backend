# Session 5 -  Node Package Management

## Content
1. [What is NodeJs Package?](#node-package)
2. [What is Npm Registry?](#npm-registry)
3. [What is NodeJs Package Manager?](#node-package-manager)
4. [NPM Usage ](#npm-usage)

	  1. [Init Package](#1-init-or-create-a-packagejson-file)
	  2. [Install Packages](#2-install-packages)
	  3. [Update Packages](#3-update-packages)
	  4. [Search in Packages](#4-search-package)
	  5. [List Packages](#5-list-packages)
	  6. [Uninstall Packages](#6-uninstall-packages)
	  7. [Run Scripts](#7-run-scripts)
	  8. [Get More Info about Package](#8-show-more-info-about-package)
	  9. [Npm Registry Login](#9-registry-login)
	  10. [Package Version Management](#10-package-version-management)
	  11. [Publish Package](#11-publish-package)

5. [How to Publish Your First Node Package](#steps-to-publish-your-package)

<br><br>

---

<br><br>

## Node Package 

<br><br>

### What is mean by Node Package ?

- A Node package, also known as a module, is a reusable piece of code that can be shared and used across multiple projects. Node packages are distributed through the npm registry and can be installed into a Node.js project using the `npm` CLI (Command Line Interface).

- A Node package typically consists of one or more JavaScript files that expose functions, classes, or objects that can be used in a Node.js project. For example, a package might contain utility functions for string manipulation, or a set of data structures for handling graphs.

- A Node package is a self-contained unit of reusable code in a Node.js project. It can consist of one or more JavaScript files, as well as any other resources (such as images, stylesheets, etc.) required by the package.

- Node packages are designed to be modular and reusable, allowing you to create smaller, focused components that can be combined to build larger projects. For example, you could create a package for handling authentication, and another for working with a specific data structure, and then use both of these packages in a larger project.

---

## Package Json 

- `package.json` is a file in the root directory of a Node.js project that provides important information about the project, such as its name, version, description, and dependencies. It is used by the npm (Node Package Manager) to manage the project's dependencies and scripts.

- The `package.json` file is typically created using the `npm` init command, which guides you through the process of creating the file. Once the file is created, you can manually edit it to add or update information as needed.

Here is an example of what a package.json file might look like:
4. Search Package
```
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample Node.js project ",
  "main": "index.js",
  "scripts": {
    "run":"node ./index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Eslam Mohamed",
  "license": "ISC",
  "dependencies": {
    "cryptolite-framework": "^1.0.5"
  }
}
```

- The package.json file has several important fields, including:

1. `name`: The name of the project, which should be unique in the npm registry.

2. `version`: The version of the project, which follows semantic versioning rules.

3. `description`: A brief description of the project, which can be helpful for other developers who may use it.

4. `main`: The main entry point of the project, which is the file that will be executed when the project is run.

5. `scripts`: Custom scripts that can be run using the npm run command. For example, you could define a script for starting a development server or for running tests.

6. `author`: The author of the project, which can be an individual or an organization.

7. `license`: The license under which the project is released, such as MIT or Apache-2.0.

8. `dependencies`: A list of packages that the project depends on, along with the required version ranges. When you run npm install, npm will look at this list and download the necessary packages and their dependencies to the node_modules directory.

9. `devDependencies`: A list of packages that are required for development but not for production, such as testing frameworks or build tools.

Having a `package.json` file in a project makes it easier to manage `dependencies`, especially when working in teams, as everyone can have the same versions of the packages. It also makes it easier to move the project to another machine, as you can simply run `npm install` or use any other node package manager like `yarn`  to get all the necessary dependencies.


---

## Npm Registry

<br>

### What is npm registry ?

- The npm registry is a database of JavaScript packages that can be used and shared by developers around the world. It is the largest repository of open-source packages for Node.js, and it is maintained and operated by npm, Inc.

- The npm registry is a centralized repository of packages that are stored on npm's servers and can be accessed by anyone who has an internet connection. When a developer creates a new package and wants to make it available to others, they can publish it to the npm registry by using the npm publish command.

- To use packages from the npm registry, developers can install them into their projects using the `npm install` command. When you run npm install, npm will download the package and any of its dependencies from the registry and store them in your project's `node_modules` directory.

- The npm registry is a critical part of the Node.js ecosystem, as it makes it easy for developers to share and reuse code. By using packages from the npm registry, developers can save time and effort by leveraging existing solutions instead of having to build everything from scratch.

- In addition to open-source packages, npm also provides the ability to host private packages that are only accessible to specific individuals or organizations. This allows teams to share code within their organization and keep it confidential.
11. Version


---

## Node Package Manager

<br>

### What is node Package Manager ?

- `npm` (short for Node Package Manager) is the default package manager for Node.js, a popular JavaScript platform for building server-side applications. `npm` is used to manage the dependencies of a Node.js project, as well as to distribute and share packages that can be reused across multiple projects.

- With `npm`, you can easily install and manage packages that are useful for your project, such as libraries for handling HTTP requests, data storage, and more. You can also easily manage the versions of these packages, ensuring that your project always uses the correct version of each package.

Here are some of the key features of npm:

1. Package management: npm makes it easy to install and manage packages, including their dependencies, in a Node.js project. You can easily install a package using the npm install command, and manage the version of the package using the npm update command.

2. Package distribution: npm makes it easy to distribute and share packages with others. You can publish a package to the npm registry, where it can be easily installed by others.

3. Version management: npm makes it easy to manage the versions of packages in a project. You can specify the exact version of each package you want to use, or use version ranges to allow for minor updates.

4. Scripts: npm allows you to define custom scripts in the package.json file, which can be executed using the npm run command. This makes it easy to automate common tasks, such as starting a development server or running tests.

5. Community: npm has a large community of developers who contribute packages and help others with issues. This makes it easy to find packages that solve specific problems, and to get help when needed.

Overall, npm is an essential tool for Node.js development, making it easier to manage dependencies and distribute reusable code. By using npm, you can focus on writing code and let npm handle the rest.



- other alternatives to npm, including:

1. Yarn: Yarn is a package manager for JavaScript that was developed by Facebook. It offers many of the same features as npm, but with some key differences, such as faster package installation and better version management. Yarn also provides a more secure environment for installing packages, as it verifies the integrity of each package before installation.

2. Pnpm: Pnpm is a package manager for JavaScript that aims to be faster and more efficient than npm. It uses a different storage mechanism that allows it to share packages between projects, reducing disk usage and speeding up installations. Pnpm also supports the use of workspaces, which make it easier to manage multiple projects with different dependencies.

3. jspm: jspm is a package manager for JavaScript that focuses on supporting modern front-end development. It supports ECMAScript modules, as well as SystemJS, a universal module loader. jspm can also be used to manage dependencies for other types of JavaScript projects, not just front-end projects.

- These are just a few of the alternatives to npm. Ultimately, the choice of which package manager to use will depend on your specific needs and preferences. Some developers prefer to use npm because it is the default package manager for Node.js and has a large community of contributors and users, while others prefer Yarn or Pnpm for their specific features and performance advantages.


---

## NPM Usage 


- npm is a package manager for Node.js and is used to manage the dependencies of a Node.js project. Here are some common uses of npm:


## 1. Init or Create a package.json file 


- `npm init` is a command used to create a new `package.json` file, which is the configuration file for an npm package. It is used to specify information about the package, including its name, version, description, main entry point, dependencies, and scripts.

When you run npm init in your terminal, you'll be prompted for information about your package, such as its name, version, description, etc. The package.json file created will contain the information you provided.

For example, you may be asked the following questions:

`name`: the name of your package
`version`: the version of your package
`description`: a brief description of your package
`entry point`: the main file of your package
`test command`: the command to run tests
`git repository`: the URL of your package's Git repository
`keywords`: keywords to describe your package
`author`: the author of your package
`license`: the license under which your package is distributed

- After you answer the questions, `npm init` will create a package.json file in the current directory. You can also use the `-y` or `--yes` option to skip the prompts and create the `package.json` file with default values.

- The `package.json` file is crucial for npm packages, as it is used to manage dependencies, scripts, and other important information about your package. Whenever you publish your package to the npm registry, other developers can install it using `npm install <package-name>` and the information in the package.json file will be used to configure their environment.

---



## 2. Install Packages

- Installing packages: To install a package in a Node.js project, you can use the npm install command followed by the name of the package you want to install.

- `npm install <package-name>@<version>`

For example:

```
npm install cryptolite-framework
```

This will install the latest version of the `cryptolite-framework` package, which is a web framework for Node.js , after installation you will find it on a directory called `node_modules` in your project.

- you can pass `--save` flag while installing any package to save it,s name and version inside `dependencies` that we talk about in package.json section

for example : 

`npm install cryptolite-framework --save`



- you can  also pass `--save-dev` flag while installing any package to save it,s name and version inside `devDependencies` that we talk about in package.json section


- you can also specify version while installing a Node Package for example from a Node Package Registry for example : 

```
npm install cryptolite@1.0.5
```


- In npm (Node Package Manager), version numbers follow the semantic versioning (SemVer) scheme, which consists of three parts: 

- `MAJOR.MINOR.PATCH`

1. `MAJOR` version: when you make incompatible changes, you increment the major version.
2. `MINOR` version: when you add functionality in a backwards-compatible manner, you increment the minor version.
3. `PATCH` version: when you make backwards-compatible bug fixes, you increment the patch version.

For example, if the current version of a package is `1.3.2`, then:


```
1.4.0 indicates a minor version release that adds new functionality
2.0.0 indicates a major version release that breaks compatibility
1.3.3 indicates a patch version release that only includes bug fixes
```
- In npm, you can specify the version of a package you depend on in your package.json file. You can specify a version range using comparison operators such as `<`, `>`, `<=`, `>=`, `~`, or `^`.

- The caret (`^`) operator is used to specify a version range that is compatible with the most recent minor version (for example, `^1.3.2` is equivalent to >=`1.3.2` <`2.0.0`).
The tilde (`~`) operator is used to specify a version range that is compatible with the most recent patch version (for example, `~1.3.2` is equivalent to >=`1.3.2` <`1.4.0`).
When you run npm install, npm will look at your dependencies in the package.json file and install the highest-satisfying version of each package that satisfies the specified version range.


---

## 3.  Update Packages


- The `npm update` command is used to update packages in your current project's `node_modules` directory to the latest version. This command updates the version numbers specified in the dependencies or devDependencies section of your `package.json` file.

- By default, `npm update` updates all packages to their latest version, as specified by the version range in your `package.json` file. You can also update a specific package by specifying its name after the npm update command, like this: `npm update <package-name>`.

- The updated packages are then installed in your `node_modules` directory and the corresponding version numbers are updated in your package.json file.

- It's a good practice to regularly run npm update to keep your packages up-to-date and take advantage of bug fixes and new features. However, be aware that updating packages may also introduce breaking changes, so it's important to test your project after updating to ensure everything still works as expected.

- You can also use the `npm outdated` command to see a list of packages that are outdated in your project and their latest versions. This can be useful to help you determine which packages to update.


---

## 4. Search Package
-
The `npm search` command is used to search the npm registry for packages that match a given search query. The search query can be a package name, keywords, or any other text that might appear in the package's information.

- For example, you can run the following command to search for packages related to "express":

```
npm search express
```

- This will display a list of packages in the npm registry that have "express" in their name, description, or other metadata. The search results include the package name, version, description, and other information.

- You can use the `-l` or `--long` option to display additional information about each package, such as the number of times it has been downloaded and its latest version.

- The `npm search` command is a useful tool for finding packages that match your specific needs, and for discovering packages that you may not have known about before. You can then use the npm install command to install the packages you want to use in your project.

---

## 5. List Packages

- The `npm list` command is used to view the installed packages in your current project. It displays a `tree-like` structure of the packages and their dependencies, showing the versions of each package that are installed in your project's `node_modules` directory.

- By default, npm list shows the top-level packages and their dependencies. You can use the `-g` or `--global` option to list the globally installed packages instead.

For example, you can run the following command to view the top-level packages and their dependencies in your project:

```
npm list
```
or

```
npm ls
```
- And you can run the following command to view the globally installed packages:

```
npm list -g
```

- The `npm list` command is a useful tool for managing the packages in your project and checking the versions of the packages that are installed. You can use it to see if any of your packages are outdated and then use the npm update command to update them.


---

## 6. Uninstall Packages

- The `npm uninstall` command is used to remove packages from your project. This command removes the package and its dependencies from your project's `node_modules` directory and updates your `package.json` file to remove the reference to the package.

- To uninstall a package, you simply run npm uninstall followed by the name of the package you want to remove, like this:

```
npm uninstall <package-name>
```
For example, to remove the cryptolite-framework package from your project, you would run:

```
npm uninstall cryptolite-framework
```

- If the package has any dependencies, they will also be removed from your project.

- It's important to note that uninstalling a package may break your project if other packages depend on it. Before uninstalling a package, it's a good idea to check your project for any dependencies that might be affected.

- You can use the `npm ls` command to view a tree-like structure of the installed packages and their dependencies, which can help you determine if uninstalling a package will affect other packages in your project.

---

## 7. Run Scripts

- In npm (Node Package Manager), you can set and run scripts to automate various tasks in your project.

Scripts are defined in the `"scripts"` section of your `package.json` file. For example:
```
"scripts": {
  "start": "node index.js",
  "test": "echo not had been set for this project for now "
}
```

Here, two scripts have been defined:

- `"start"`: This script runs the command "node index.js", which starts the node application.

- To run a script, you can use the npm run command in your terminal, followed by the script name. For example, to run the `"start"` script, you would run:

```
npm run start
```

- Scripts are a useful tool for automating repetitive tasks, such as starting the development server, running tests, building the application for production, and more. This helps make the development process faster and more efficient

---

## 8. Show More Info about Package

- The `npm show` command is used to display information about a specific package that is available on the npm registry. This command can be used to display information such as the version, description, repository URL, author, and more.

- To use the npm show command, you need to specify the name of the package you want to show information for, like this:

```
npm show <package-name>
```
For example, to show information for the cryptolite-framework package, you would run:

```
npm show cryptolite-framework
```

This would display information such as the latest version, description, homepage URL, repository URL, and more. You can also specify a version of the package using the `@` symbol, like this:

```
npm show cryptolite-framework@1.0.0
```

This would show information for version 1.0.0 of the cryptolite-framework package.

- The `npm show` or `npm info` command is a useful tool for quickly finding information about a package without having to go to the npm website. It can also be useful for determining which version of a package to install, as well as seeing which other packages depend on it.

---

## 9. Registry Login


- The `npm login` command is used to log in to the `npm registry` and create or update a user account. When you log in to npm, you can publish packages, access packages that have been marked as private, and manage your profile information.

- To log in to npm, you need to run the npm login command in your terminal, like this:

```
npm login
```

- This will prompt you to enter your npm username, password, and email address. Once you've entered your information, npm will verify your credentials and log you in. If you don't have an npm account, running npm login will create one for you.

It's important to note that you only need to log in to npm once per machine, as the login information is stored in a configuration file on your local system.

- If you need to log in to a different npm registry, you can specify the registry URL when you run the `npm login` command, like this:

```
npm login --registry=https://registry.npmjs.org/
```

- The `npm login` command is an important tool for publishing and managing packages on the npm registry. It enables you to access private packages, publish new packages, and manage your profile information.


---

## 10. Package Version Management

- The `npm version` command is used to manage the version of your npm package. This command can be used to update the version number of your package, which is stored in the package.json file.

- The `npm version` command has several options that allow you to increment the version number in different ways:

1. `npm version major` : This increments the major version number and sets the minor and patch version numbers to 0. For example, if the current version is `1.2.3`, the new version will be `2.0.0`.

2. `npm version minor`: This increments the minor version number and sets the patch version number to 0. For example, if the current version is `1.2.3`, the new version will be `1.3.0`.

3. `npm version patch`: This increments the patch version number. For example, if the current version is `1.2.3`, the new version will be `1.2.4`.

- In addition to updating the version number, the npm version command also updates the version control system with the new version number, if a version control system such as Git is being used.

- Once the version number has been updated, you can use the npm publish command to publish the updated package to the npm registry, so that others can download and use it.

- The `npm version` command is an important tool for managing the version of your npm package. By using this command to increment the version number, you can ensure that others using your package will always be using the most up-to-date version.


---

## 11. Publish Package


- The `npm publish` command is used to publish a new version of an npm package or to initially publish an npm package to the npm registry. This command is used to make your package available for others to download and use.

- To publish a package, you need to have a package.json file in the root directory of your package. The `package.json` file contains important information about your package, including its name, version, description, and dependencies.

Once you have a `package.json` file, you can run the npm publish command to publish your package to the npm registry. For example:

```
npm publish
```

- This will create a new version of your package and make it available for others to download and use. If this is the first time you're publishing the package, it will be added to the npm registry. If you've already published the package, the new version will replace the existing version in the registry.

- It's important to note that once a package has been published to the npm registry, its name can't be changed. So, it's a good idea to choose a descriptive and meaningful name for your package before publishing it.

- In addition to making your package available for others to download, the npm publish command also allows you to specify access controls for your package. For example, you can choose to make your package private, so that it's only accessible to specific individuals or organizations.

The `npm publish` command is a critical tool for publishing and sharing packages on the npm registry. By using this command, you can make your packages available to others and help to build the Node.js ecosystem.

---

## Steps to Publish Your Package

- Here are the steps to publish your first Node.js package:

1. Prepare your code: Ensure that your code is thoroughly tested and well-documented.

2. Choose a package name: Your package name should be unique and descriptive. You can check if your desired name is available by searching for it on npmjs.org.

3. Create a package.json file: This file contains important information about your package, such as its name, version, dependencies, and scripts. You can create it by running npm init in your project's root directory.

4. Add your code to the package: Create a lib or src directory to store your code and make sure that it is included in your package.json file under the "main" property.

5. Test your package: Test your package locally by installing it as a dependency in another project and making sure it works as expected.

6. Publish your package: You can publish your package by running npm publish in your project's root directory. Make sure you are logged in to npm by running npm login beforehand.

7. Update your package: If you need to make changes to your package, increment the version number in your package.json file and publish the updated version to npm by running npm publish.

- Note: Before publishing, ensure that you have read and understood the npmjs.org guidelines for publishing packages.


---
