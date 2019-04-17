declare module BA.Ui.Controls {
    class ComboBoxEvents {
        private static filter;
        private static initialLoad;
        private static hasNavigateToConfigurationBtn;
        static OnInit(s: any, e: any): void;
        static OnChanged(s: any, e: any): void;
        static OnDropDown(s: any, e: any): void;
        private static ClearFilter;
        static OnEndCallback(s: any, e: any): void;
        static OnButtonClicked(s: any, e: any): void;
        private static CheckCanNavigateToConfiguration;
        private static CanNavigateToConfiguration;
    }
}
