// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    cognito: {
        userPoolId: 'ap-southeast-1_pXd5jN2qr',
        userPoolWebClientId: '4rjb69jm9ghno3a23hjkkfejdk'
    },
    recaptcha: {
        siteKey: '6Ldyb_ofAAAAAMafms8J6IEy7P4oHvI5iNXZXEx-'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
