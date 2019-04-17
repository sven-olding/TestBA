declare module BA.Ui.Form {
    class FormEvents {
        static OnReady(): void;
        static OnApplicationConfigurationReady(): void;
        static OnRemove(): void;
        static FormOnBegin(jqXHR: any, settings: any): void;
        static FormOnSuccess(s: any): void;
        static BasicFromOnSuccessHandling(s: any, formId: any, formHiddenData: any): void;
        static FormOnFailure(): void;
    }
}
