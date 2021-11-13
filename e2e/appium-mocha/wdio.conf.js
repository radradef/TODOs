import { join } from 'path';

exports.config = {
    runner: 'local',
    specs: [
        './tests/specs/**/*.js'
    ],
    services: ['appium'],
    appium: { command: 'appium' },
    port: 4723,
    capabilities: [{
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Emulator',
        'appium:platformVersion': '10',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '../../android/app/build/outputs/apk/release/app-release.apk',
        'appium:appWaitActivity': 'com.todos.MainActivity',
        'appium:noReset': true,
        'appium:autoLaunch': false,
        'appium:newCommandTimeout': 240,
        'appium:isHeadless': true,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },

    beforeTest: async function() {
        await driver.launchApp();
    },

    afterTest: async function() {
        await driver.closeApp();
    },
}
