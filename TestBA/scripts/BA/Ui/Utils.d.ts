declare module BA.Ui {
    class Utils {
        static GetAppBaseUrl(): string;
        static GetBaseUrl(): string;
        static AddDataToJsonFormModel(baseName: any, recordId: any, parentRecordId: any, parentRecordType: any): Models.FormDialogModel;
        static AdditionalDataToSessionHelper(e: any, functionOnDone: any, functionOnError: any, additionalData: any, validationCheck: any): void;
        static QuickCreateRecordHelper(e: any, functionOnDone: any, functionOnError: any, additionalData: any, fullNameType: any, validationCheck: any): void;
        static RgbToHex(color: any): any;
        static IntersectTwoLists(listA: any, listB: any): any[];
        static GetFunctionByName(functionName: string, context: Window): Function;
        static ExecuteFunctionByName(functionName: string, context: Window, ...params: any[]): any;
    }
}
