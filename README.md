# bddcalc

#Plan <br>
Install GitHub for Desktop<br>
→ Add application files from a Github repo<br>
→ Upgrade dev apps in tech stack (node, mocha, cucumber)<br>
→ Integrate VS<br>
	→ View files in VS <br>
		→ Make some changes to the app in VS <br>
			→ Confirm changes in Git <br>
				→ Create pull request and verify changes in online repo <br>


#Outcome <br>
-> GitHub for version control <br>
-> Full Dev env + pre-built application <br>
		-> Integrated with Visual Studio for code for creating feature and step files <br>
I am using a BDD environment in this example but really this applies to any dev environment or application you want to build in this way. <br>


#Install your runtime environment
If on Windows, you can install Node from this link: https://nodejs.org/en/  
This will launch a Windows MSI installer to place the application on your PC. 
Accept all the installer defaults. 
If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. 
Say yes if you want to (although not strictly needed for this tutorial)


#Install GitHub Desktop for version control
Go to: https://desktop.github.com/
The page should detect the version of GitHub you need
Download and install


#Clone a BDD repo from GitHub
Clone following repo: https://github.com/ElizaTWF/bddcalc into C:\DEV\bddcalc
Delete the package.json (we will recreate it later)


#Clone from Git Bash / On the command line
Open Git Bash
    >$ cd C:
    >$ cd DEV
    >$ git clone https://github.com/ElizaTWF/bddcalc.git
    >$ dir (to check the download)
Delete the package.json (we will recreate it later)


#Files in your app
.git - 	              git integration details
features - 	          feature files and step definitions
lib - 	              your calculator app
node-modules - 	      Node app files
.gitignore - 	        list of files that will not be sync’ed to GitHub (e.g. node-modules)
cmd.exe - 	          opens a command window in C:\DEV\bddcalc - terrible development practice, fine for testing.
package-lock.json - 	describes the exact repo tree that was generated so subsequent installs are able to generate identical trees.
README.md - 	        appears in your online repo as an instruction file to help you build the environment etc.


#Create a new package.json
Open the command window.
Initialise the dev folder to create a new package.json:
>npm init 
NPM will pick up the details of the application files installed into the folder and ask you to provide some details. Change the following answers:
Change the author to your name
Regarding the URL - change the ElizaTWF to your GitHub name
Click return to create the file


#Verify the repro is in your GitHub
Go to https://github.com/
Login
Verify the BDDInt repo you created has been uploaded
Copy the URL for the repo 


#Update Node 
Install node.js updates into the BDDInt folder from the command line:
> npm install node.js


#Update Mocha
Upgrade mocha in the BDDInt folder from the command line:
> npm install mocha


#Update Cucumber
Install cucumber into the BDDInt folder from the command line:
>npm install cucumber


#Add cucumber to Package.json
Open the package.json file in Notepad++ (or whatever)
Edit the scripts to remove the existing code relating to “test”
Replace it with:
   "test": "./node_modules/.bin/cucumber-js"
Ensure the URLs point at YOUR github.


#Add Cucumber to Wondows PATH
Open system variables and add cucumber to path. You can open this setting by clicking on the windows key on the keyboard and typing ‘env’ - this will return the environment variables menu.
Open environment variable -- PATH. Add: C:\DEV\bddcalc\node_modules\.bin
This means you will be able to run cucumber just by typing cucumber at the command prompt rather than the full path


#Verify PATH
In a new cmd window, type PATH to verify the variable was saved. 
Cucumber will only run like this for the application path it is set to! 
You can only set it to one application instance at a time.


#Install VS for code
Go to https://code.visualstudio.com/download
Download and install the version of VS that is right for your desktop.
(Usually this is 64-bit for SL desktops)
Once it is installed, open the application
From the ‘File’ menu -- ‘Open Folder’
Browse to the bddInt folder you have installed your dev environment to
Wait for VS to open and load the files


#YAY!!
You are now finished building your basic environment.
You can edit your app files in VS
GitHub will sync your changes to your online git repo
Both applications know about the existence of the other


#Add CoffeeScript
CoffeeScript simplifies the good parts of JavaScript.
You can use any existing JavaScript library seamlessly from CoffeeScript (and vice-versa). 
The compiled output is readable and can run as fast or faster than the
equivalent handwritten JavaScript.
  > npm install --save-dev coffeescript


#Check app changes
Check CoffeeScript install in GitHub desktop
Check CoffeeSript install in Visual Studio for code


#Run tests
From the command line - 
 > cucumber-js
All the tests run run sucessfully


#Run tests to fail
In the feature.addition file, change the expected result to A
Run the tests again from the command line
 > cucumber-js
All of the tests should fail


#Add a new scenario to the feature.addition file
The feature file has a single addition scenario for adding together 2 single digit numbers.
Add a new scenario for the addition of 2 or 3 digit numbers (or both, go mad)
As an example:
    Scenario: Add 2 double digit numbers
        Given the numbers 5 and 6
        When they are added together 
        Then the result should be 11


#Commit the changes to GitHub
View the changes online once GitHub indicates there are no longer any local changes to be sync’ed.


#Ignore
node_modules are ignored by git => You will have to install node to make this suite run
