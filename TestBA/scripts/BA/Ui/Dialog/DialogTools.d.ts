declare module BA.Ui.Dialog {
    class DialogTools {
        /**
         * Ok button of the single orm selection dialog
         * @param button the event button
         * @param evt the event arguments
         */
        static SingleOrmSelectionDialogOK(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Ok button of the default combobox dialog
         * @param button the event button
         * @param evt the event arguments
         */
        static DefaultComboboxControlCallback(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /** the import dialog popup (context) */
        private static ImportDialog;
        /**
         * Function for the Ok-button. It triggers the upload and shows the wait animation.
         *
         * @param button the button that has been clicked
         * @param evt event data of the click
         */
        static ImportConfigDialogOk(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Callback function that is called then the upload has finished.
         *
         * @param source the upload control that intiated this event handler
         * @param evt event data of the triggered event
         */
        static ImportConfigUploadComplete(source: ASPxClientUploadControl, evt: ASPxClientUploadControlFileUploadCompleteEventArgs): void;
        /**
         * Function for the Ok-button. It triggers the upload and shows the wait animation.
         *
         * @param button the button that has been clicked
         * @param evt event data of the click
         */
        static ImportUserDialogOk(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Callback function that is called then the upload has finished.
         *
         * @param source the upload control that intiated this event handler
         * @param evt event data of the triggered event
         */
        static ImportUserUploadComplete(source: ASPxClientUploadControl, evt: ASPxClientUploadControlFileUploadCompleteEventArgs): void;
        static DeleteEnum(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Function for the Ok-button of the AddActiveDirectoryGroupDialog. It collects some data and calls the server
         * side handling for this button.
         *
         * @param button the button that has been clicked
         * @param evt event data of the click
         */
        static AddActiveDirectoryDialogOK(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Function that is called after the Ok-button of the AddActiveDirectoryGroupDialog completed successfully. It
         * closes the dialog and refreshes the current (and thus the role enum) grid view.
         *
         * @param button the button that has been clicked
         * @param evt event data of the click
         */
        static AddActiveDirectoryDialogSuccess(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        static DeleteRecordIfNotReferenced(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Nag screen closed
         * */
        static NagScreenCloseUp(): void;
    }
}
