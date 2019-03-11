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
<br>
<br>
#Outcome <br>
-> GitHub for version control <br>
-> Full Dev env + pre-built application <br>
		-> Integrated with Visual Studio for code for creating feature and step files <br>
I am using a BDD environment in this example but really this applies to any dev environment or application you want to build in this way. <br>
<br>
<br>
#Install your runtime environment <br>
If on Windows, you can install Node from this link: https://nodejs.org/en/  <br>
This will launch a Windows MSI installer to place the application on your PC. <br>
Accept all the installer defaults. <br>
If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. <br>
Say yes if you want to (although not strictly needed for this tutorial)<br>
<br>
<br>
#Install GitHub Desktop for version control <br>
Go to: https://desktop.github.com/ <br>
The page should detect the version of GitHub you need<br>
Download and install <br>
<br>
<br>
#Clone a BDD repo from GitHub <br>
Clone following repo: https://github.com/ElizaTWF/bddcalc into C:\DEV\bddcalc <br>
Delete the package.json (we will recreate it later) <br>
<br>
<br>
#Clone from Git Bash / On the command line <br>
Open Git Bash <br>
    >$ cd C: <br>
    >$ cd DEV <br>
    >$ git clone https://github.com/ElizaTWF/bddcalc.git <br>
    >$ dir (to check the download) <br>
Delete the package.json (we will recreate it later) <br>
<br>
<br>
#Files in your app <br>
.git - 	              git integration details <br>
features - 	          feature files and step definitions <br>
lib - 	              your calculator app <br>
node-modules - 	      Node app files <br>
.gitignore - 	        list of files that will not be sync’ed to GitHub (e.g. node-modules) <br>
cmd.exe - 	          opens a command window in C:\DEV\bddcalc - terrible development practice, fine for testing. <br>
package-lock.json - 	describes the exact repo tree that was generated so subsequent installs are able to generate identical trees. <br>
README.md - 	        appears in your online repo as an instruction file to help you build the environment etc. <br>
<br>
<br>
#Create a new package.json <br>
Open the command window.<br>
Initialise the dev folder to create a new package.json: <br>
> npm init <br>
<br>
NPM will pick up the details of the application files installed into the folder and ask you to provide some details.<br> 
Change the following answers: <br>
Change the author to your name <br>
Regarding the URL - change the ElizaTWF to your GitHub name <br>
Click return to create the file <br>
<br>
<br>
#Verify the repro is in your GitHub <br>
Go to https://github.com/ <br>
Login <br>
Verify the BDDInt repo you created has been uploaded <br>
Copy the URL for the repo <br>
<br>
<br>
#Update Node <br>
Install node.js updates into the BDDInt folder from the command line: <br>
> npm install node.js <br>
<br>
<br>
#Update Mocha <br>
Upgrade mocha in the BDDInt folder from the command line: <br>
> npm install mocha <br>
<br>
<br>
#Update Cucumber <br>
Install cucumber into the BDDInt folder from the command line: <br>
>npm install cucumber <br>
<br>
<br>
#Add cucumber to Package.json <br>
Open the package.json file in Notepad++ (or whatever) <br>
Edit the scripts to remove the existing code relating to “test” <br>
Replace it with: <br>
   "test": "./node_modules/.bin/cucumber-js" <br>
Ensure the URLs point at YOUR github. <br>
<br>
<br>
#Add Cucumber to Wondows PATH <br>
Open system variables and add cucumber to path. You can open this setting by clicking on the windows key on the keyboard and typing ‘env’ - this will return the environment variables menu. <br>
Open environment variable -- PATH. Add: C:\DEV\bddcalc\node_modules\.bin <br>
This means you will be able to run cucumber just by typing cucumber at the command prompt rather than the full path <br>
<br>
<br>
#Verify PATH <br>
In a new cmd window, type PATH to verify the variable was saved. <br>
Cucumber will only run like this for the application path it is set to! <br>
You can only set it to one application instance at a time. <br>
<br>
<br>
#Install VS for code <br>
Go to https://code.visualstudio.com/download <br>
Download and install the version of VS that is right for your desktop. <br>
(Usually this is 64-bit for SL desktops) <br>
Once it is installed, open the application <br>
From the ‘File’ menu -- ‘Open Folder’ <br>
Browse to the bddInt folder you have installed your dev environment to <br>
Wait for VS to open and load the files <br>
<br>
<br>
#YAY!! <br>
You are now finished building your basic environment. <br>
You can edit your app files in VS <br>
GitHub will sync your changes to your online git repo <br>
Both applications know about the existence of the other <br>
<br>
<br>
#Add CoffeeScript <br>
CoffeeScript simplifies the good parts of JavaScript. <br>
You can use any existing JavaScript library seamlessly from CoffeeScript (and vice-versa). <br> 
The compiled output is readable and can run as fast or faster than the <br>
equivalent handwritten JavaScript. <br>
  > npm install --save-dev coffeescript <br>
<br>
<br>
#Check app changes <br>
Check CoffeeScript install in GitHub desktop <br>
Check CoffeeSript install in Visual Studio for code<br>
<br>
<br>
#Run tests <br>
From the command line - <br>
 > cucumber-js <br>
All the tests run run sucessfully <br>
<br>
<br>
#Run tests to fail <br>
In the feature.addition file, change the expected result to A <br>
Run the tests again from the command line <br>
 > cucumber-js <br>
All of the tests should fail <br>
<br>
<br>
#Add a new scenario to the feature.addition file <br>
The feature file has a single addition scenario for adding together 2 single digit numbers. <br>
Add a new scenario for the addition of 2 or 3 digit numbers (or both, go mad) <br>
As an example: <br>
    Scenario: Add 2 double digit numbers <br>
        Given the numbers 5 and 6 <br>
        When they are added together <br>
        Then the result should be 11 <br>
<br>
<br>
#Commit the changes to GitHub <br>
View the changes online once GitHub indicates there are no longer any local changes to be sync’ed. <br>
<br>
<br>
#Ignore <br>
node_modules are ignored by git => You will have to install node to make this suite run<br>
