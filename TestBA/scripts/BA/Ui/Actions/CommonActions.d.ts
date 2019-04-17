declare module BA.Ui.Actions {
    class CommonActions {
        /**
         * Restart the App Pool
         */
        static ClientActionRestartAppPool(event: any, customData: CustomData): void;
        /**
         * Sign out user
         */
        static ClientActionSignOut(event: any, customData: CustomData): void;
        /**
         * Action to open form in the dialog.
         * @param e
         * @param customData
         */
        static OpenFormInDialog(event: any, customData: CustomData): void;
        /**
         * Action to open form in the dialog readonly.
         * @param e
         * @param customData
         */
        static OpenFormInDialogReadonly(event: any, customData: CustomData): void;
        /**
         * Action to open a dialog.
         * @param e
         * @param customData
         */
        static OpenDialog(event: any, customData: CustomData): void;
        /**
         * Close the current tab
         * @param s
         * @param e
         */
        static ClientActionCloseTab(event: any, customData: CustomData): void;
        /**
         * Cancel, set tab as clear and close
         */
        static ClientActionCancelTab(event: any, customData: CustomData): void;
        static ClientActionOfflineShowConfiguration(): void;
        static ClientActionOfflineSync(): void;
    }
}
