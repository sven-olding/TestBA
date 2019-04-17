declare module BA.Ui.Actions {
    class DesignerActions {
        static ClientActionTreeListDesignerSave(): void;
        static ClientActionTreeListDesignerPreview(): void;
        static ClientActionTreeListDesignerDelete(): void;
        /**
         * Deletes a single configuration (with question)
         * @param id
         */
        static DeleteConfiguration(id: any): void;
        /**
         * Delete the currently open configuration
         */
        static DeleteOpenedConfiguration(searchContext: any): void;
        /**
         * Action to delete a configuration in tree list designer
         */
        static ClientActionTreeListDesignerGridDelete(e: any): void;
        /**
         * Duplicate configuration
         */
        static ClientActionTreeListDesignerDuplicate(): void;
        /**
         * UserSetPassword
         * @param event
         * @param customData
         */
        static ClientActionUserSetPassword(event: any, customData: CustomData): void;
        static ClientActionDeleteGridLayoutConfiguration(e: any, customData: any): void;
        /**
         * Create new enum role value
         * @param e
         * @param customData
         */
        static ClientActionCreateNewRole(e: any, customData: any): void;
    }
}
