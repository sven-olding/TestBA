declare module BA.Ui.Controls {
    class TranslationEvents {
        private static _TranslationTimer;
        static OnDropDownClose(s: any, e: any): void;
        static OnDropDownDropped(s: any, e: any): void;
        static OnDropDownTextChanged(s: any, e: any): void;
        static OnDropDownKeyUp(s: any, e: any): void;
        static OnRowClick(s: any, e: any): void;
        private static DoTranslationFiltering;
        static OnSaveClick(s: any, e: any): void;
        static OnCancelClick(s: any, e: any): void;
        static OnTranslationGridsOnFormLoad(): void;
    }
}
