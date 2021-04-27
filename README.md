# Quick Start

1. Make sure Nodejs, NPM and Yarn are correctly installed:

```bash
node -v
----
v14.16.0
----
```

```bash
npm -v
----
6.14.8
----
```

```bash
yarn -v
----
1.22.5
----
```



2. Make sure Android adb is correctly installed for connect the nodejs to the device (phisically or emulated). If the device is emulated, be sure you have started the emulator device.

```bash
adb devices
----
List of devices attached
RQ8N80DJYQD     device
----
```



3. Clone this repository

```bash
git clone https://github.com/roger10cassares/rn_example_app.git
```



4. Go to this repository

````bash
cd rn_example_app
````



5. Install the Dependencies

````bash
yarn 
````



6. Start the Project

````bash 
yarn start
````



7. From the same project top level directory, please, open a new `Terminal` and run in android device attached with the `adb devices` command before

```bash
yarn react-native run-android
```



### Please, read the src/docs/README.md file for the detailed documentation.