# HourOfCode

## Step-by-step Intro
1. Install Node.js
   - https://nodejs.org/
   - Download LTS version
   - Install
2. Install vscode
   - https://code.visualstudio.com
   - Download for your OS
   - Install vscode
3. Install expo app (If you are not executing in your browser)
   - Go to appStore or google play
   - install expo app
   - ![image](https://user-images.githubusercontent.com/14281645/198707809-87161f0b-9dd8-43b0-95be-597f3a091f4b.png)
4.  Install expo-cli
   - Open cmd and execute
   ``` npm install --global expo-cli ```
5. Create your project
   - Execute 
   ``` expo init HelloWorld ```
   - Select template "Blank" 
6. Change your directory to HelloWorld
   ``` cd HelloWorld```
7. Install web dependencies to execute the app in browser

``` npm i react-native-web --legacy-peer-deps ```
``` npm i react-dom --legacy-peer-deps ```

8. Start your project
   - Confirm you are in your project directory "HelloWorld"
   - Execute ``` expo start ```
   - After message "Metro Bundler Started" press "w" to open your app in your browser

## Extra commands
- Install navigation
```
npm install @react-navigation/native --legacy-peer-deps
npm install @react-navigation/native-stack --legacy-peer-deps
npm install react-native-screens --legacy-peer-deps
npm install react-native-safe-area-context --legacy-peer-deps
```
