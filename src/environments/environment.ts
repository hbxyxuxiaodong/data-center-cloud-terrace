// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseURL: string = 'assets/my-test-data/';
export const environment = {
  production: false,
  apiURL: {
    menu: baseURL + 'menu.json',
    // customers: baseURL + 'customers.json',
    // inboundDetails: baseURL + 'inbound-details.json',
    // inboundRecords: baseURL + 'inbound-records.json',
    // inventories: baseURL + 'inventories.json',
    // inboundReceipt: baseURL + 'inbound-receipt.json',
    // outReceipt: baseURL + 'outbound-receipt.json',
    // outboundDetail: baseURL + 'outbound-detail.json',
    // outboundRecords: baseURL + 'outbound-records.json',
    // staffs: baseURL + 'staffs.json',
    // vendors: baseURL + 'vendors.json',
    // warehouses: baseURL + 'warehouses.json'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
