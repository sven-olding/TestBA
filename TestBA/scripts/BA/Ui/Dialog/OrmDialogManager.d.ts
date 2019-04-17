declare module BA.Ui.Dialog {
    class OrmDialogManager {
        /**
         * This function is meant to be used by a orm dialog user in order to invoke a orm dialog by form dialog model.
         * Whatever the user passes as the additionalData parameter will be returned as second
         * parameter on the given onClose function. The first parameter of that onClose function will be the
         * DialogResult which contains all the information which the dialog user hoped to retrieve from calling
         * this dialog.
         *
         * @param ormFormDialog the form dialog model, to specify the orm dialog behaviour
         * @param customData data that will be routed through the dialog and passed to the onClose function
         * @param onClose function that will be called when the dialog closes; parameter 1 will be the DialogResult,
         *              parameter 2 will be the additionalData
         */
        static OpenDialog(ormFormDialog: BA.Ui.Models.FormDialogModel, customData?: CustomData, onClose?: Function): void;
        /**
         * Submits the form to the server. The orm will be saved if it is valid.
         * @param window The context window
         * @param button The pressed dialog button
         * @param evt The event object
         */
        static SubmitOrm(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * The ajax submit on success default handling
         * @param data The data object
         * @param status The return status
         * @param xhr The xhr object
         */
        static PopupFormSuccess(data: any, status: any, xhr: any): void;
        /**
         * The action to delete the orm in the dialog.
         * @param window The context window
         * @param button The pressed dialog button
         * @param evt The event object
         */
        static DeleteOrm(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
    }
}
