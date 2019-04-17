declare module BA.Ui.Actions {
    class FormActions {
        /**
         * Form action - SetActive
         */
        static ClientActionSetActive(event: any, customData: CustomData): void;
        /**
         * Form action - SetInactive
         */
        static ClientActionSetInactive(event: any, customData: CustomData): void;
        /**
         * Helper method to set the active state of the record(s)
         * @param idS List of guids
         * @param state Active state
         */
        private static ActionHelperFormSetActive;
        /**
         * Save the current form (it simple clicks the submit button)
         */
        static ClientActionFormSave(event?: any, customData?: CustomData): void;
        /**
         * Save the current form and close it after success
         */
        static ClientActionFormSaveAndClose(event: any, customData: CustomData): void;
        /**
         * Save the current form and close it after success
         */
        static ClientActionFormSaveAndReadMode(event: any, customData: CustomData): void;
        /**
         * Enables current form's editing (it simple clicks the submit button after setting the corresponding property in the form)
         */
        static ClientActionFormEditMode(event?: any, customData?: CustomData): void;
        /**
         * Cancels current form's editing (it simple clicks the submit button after setting the corresponding property in the form)
         */
        static ClientActionFormReadMode(event?: any, customData?: CustomData): void;
        /**
         * Create new related record with additional relation. START
         * @param e
         * @param customData
         */
        static ClientActionNewRelatedRecordWithAdditionalRelation(event: any, customData: CustomData): void;
        /**
         * Create new related record setting current form as a parent of it
         * @param e
         * @param customData
         */
        static ClientActionNewRelatedRecord(event: any, customData: CustomData): void;
        /**
        * Create new related record setting currently selected record as a parent of it
        */
        static ClientActionNewRelatedRecordGrid(event: any, customData: CustomData): void;
        /**
         * Form Send an Email
         */
        static ClientActionSendEMail(event: any, customData: CustomData): void;
        /**
         * Send as PDF
         */
        static ClientActionSendAsPDF(event: any, customData: CustomData): void;
        /**
         * Client action to open an attachment
         */
        static ClientActionOpenAttachment(event: any, customData: CustomData): void;
        /**
         * Delete action from the form
         * @param e
         * @param customData
         */
        static ClientActionFormDeleteRecord(event: any, customData: CustomData): void;
        /**
         * Create new record using a template
         * @param e
         * @param customData
         */
        static ClientActionCreateNewRelatedFromTemplate(event: any, customData: CustomData): void;
        /**
         * Print a Form
         * @param e
         * @param customData
         */
        static ClientActionFormPrint(event: any, customData: CustomData): void;
        /**
         * Action to show record history log
         * @param e
         * @param customData
         */
        static ClientActionShowRecordHistory(event: any, customData: CustomData): void;
        /**
         * Client action: Open address on map
         */
        static ClientActionOpenInMap(e: any, customData: any): void;
    }
}
