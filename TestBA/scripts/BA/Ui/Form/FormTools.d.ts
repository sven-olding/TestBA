declare module BA.Ui.Form {
    class FormTools {
        static DetailGridsCount: number;
        static DelayedInProgress: boolean;
        private static UpdateUiSubMethods;
        static AddUiUpdateAction(methodHeader: string): void;
        static FillHiddenData(): void;
        static UpdateUI(updateRibbon: any): void;
        static UpdateRibbonVisibility(): void;
        static UpdateRibbon(ribbon: any, temporary: any): void;
        /**
         * Refresh all controls
         * @param keys key indicator which controls will be refreshed
         */
        static RefreshUiControlsOfList(keys: string[]): void;
        static InterceptRtfPasteIntoHtml(rtfToHtmlUrl: any): void;
        static ActivateFieldTracking(): void;
        /**
        * Delayed loading of all grids on finish
        */
        static LoadDelayedControls(context: any): void;
        private static WaitForDelayedGrids;
        static ChangeCompleteFormEditMode(isEditMode: boolean): void;
        static ForceLoadFromDatabase(): void;
        static SubmitForm(): void;
    }
}
