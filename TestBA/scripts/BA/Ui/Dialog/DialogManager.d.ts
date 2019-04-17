declare module BA.Ui.Dialog {
    /** Extension to the DevExpress-ASPxClientBeginCallbackEventArgs-class */
    interface BAClientBeginCallbackEventArgs extends ASPxClientBeginCallbackEventArgs {
        /** Arguments that are delivered to the server during the callback */
        customArgs: {
            [key: string]: any;
        };
    }
    /** Extension to the DevExpress-ASPxClientPopupControl-class */
    interface BADialogPopup extends ASPxClientPopupControl {
        /** ths current dialog's dialog identifier */
        cpDialogIdentifier: string;
        /** dialog parameter */
        cpDialogParameter: CustomData;
        /** additional data that are returned when the dialog is closed */
        cpCustomData: CustomData;
        /** The orm form dialog model  */
        cpOrmFormDialogModel: BA.Ui.Models.FormDialogModel;
        /** The orm form dialog model  */
        cpFormHiddenData: BA.Ui.Models.FormHiddenDataModel;
        /** True if the dialog is visible */
        cpIsVisible: boolean;
        /** True if BeginOnCallBack should not post the data. */
        cpDoNotPostData: boolean;
        /**
         * Function that will be called when the dialog is closed. This function will get the dialog result and the
         * additional data as parameters.
         */
        cpOnCloseCallback: Function;
        /** The result of this dialog. */
        cpResult: DialogResult;
        /** The desired height of the dialog */
        cpHeight: number;
        /** The desired width of the dialog */
        cpWidth: number;
        /** The dialog title of the current dialog */
        cpDialogTitle: string;
        /** True, if the current dialog might be resized */
        cpAllowResize: boolean;
        /** True, if the current dialog's footer should be shown */
        cpShowFooter: boolean;
        /** Minimum height of the current dialog */
        minHeight: number;
        /** Minimum width of the current dialog */
        minWidth: number;
        /** Maximum height of the current dialog */
        maxHeight: number;
        /** Maximum width of the current dialog */
        maxWidth: number;
        /** internal information whether the current dialog might be resized */
        allowResize: boolean;
        /** dev express property: Is escape a valid canceling key */
        closeOnEscape: boolean;
        /** dev express property: String to define the close behavior */
        closeAction: string;
    }
    /** Extension to the DevExpress-ASPxClientButton-class */
    interface BADialogButton extends ASPxClientButton {
        /** This button's id */
        cpBtnId: string;
        /** True, if clicking this button will result in a server callback */
        cpServerCallback: boolean;
        /** Name of the client side function to call as action */
        cpFunctionName: string;
    }
    /**
     * The dialog manager provides means of opening multiple dialogs at the same tfime (up to three) without the need
     * to know, which physical popup control is currently open. It also handles clicks on buttons and decides whether
     * to callback to the server or not. It recalculates the bounds of the dialog and calling of a callback function
     * which the dialog user has provided.
     */
    class DialogManager {
        /**
         * This function is meant to be used by a dialog user in order to invoke a named dialog. The dialog user
         * provides a string identifier which is used on the server for retrieving the corresponding dialog
         * implementation. Whatever the user passes as the additionalData parameter will be returned as second
         * parameter on the given onClose function. The first parameter of that onClose function will be the
         * DialogResult which contains all the information which the dialog user hoped to retrieve from calling
         * this dialog.
         *
         * @param dialogIdentifier identifier of the dialog to invoke
         * @param dialogParameter parameter of the dialog
         * @param customData data that will be routed through the dialog and passed to the onClose function
         * @param onClose function that will be called when the dialog closes; parameter 1 will be the DialogResult,
         *              parameter 2 will be the additionalData
         */
        static OpenDialog(dialogIdentifier: string, dialogParameter: CustomData, customData: CustomData, onClose: Function): void;
        /**
         * Event function that is called by the dialog popup control each time, a callback is started.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnBeginCallback(popup: BADialogPopup, evt: BAClientBeginCallbackEventArgs): void;
        /**
         * Event function that is called by the dialog popup control each time, a callback is finished.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnEndCallback(popup: BADialogPopup, evt: ASPxClientEndCallbackEventArgs): void;
        /**
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnShown(popup: BADialogPopup, evt: ASPxClientPopupWindowEventArgs): void;
        /**
         * Event that is called by the popup control when the current popup is being resized.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogResize(popup: BADialogPopup, evt: ASPxClientPopupWindowEventArgs): void;
        /**
         * Adjusts the embedded grids in the popup given
         *
         * @param popup the popup control whose embedded grids need to be adjusted
         */
        static AdjustGrids(popup: BADialogPopup): void;
        /**
         * Makes all the group boxes have the same height
         */
        static MatchBottomGroupsHeight(): void;
        /**
         * Event that is called by the popup control just before the current popup has been closed/hidden.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnClosing(popup: BADialogPopup, evt: ASPxClientPopupWindowCancelEventArgs): void;
        /**
         * Event that is called by the popup control when the current popup has been closed/hidden. Here the calling
         * user is notified by calling the given close callback function.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnClosed(popup: BADialogPopup, evt: ASPxClientPopupWindowCloseUpEventArgs): void;
        /**
         * Event that is called when the current dialog is closed by clicking the close-button in the upper right
         * corner.
         *
         * @param popup the popup control which performs the callback
         * @param evt corresponding event object
         */
        static DialogOnCloseBtnClick(popup: BADialogPopup, evt: ASPxClientPopupWindowEventArgs): void;
        /**
         * The default function to handle the cancel button
         *
         * @param button button that has been clicked that should perform a default cancel action
         * @param evt corresponding event object
         */
        static DialogDefaultCancel(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Sets the result object on the current dialog.
         *
         * @param popup the popup control of the current dialog
         * @param result the result to set
         */
        static SetDialogResult(popup: BADialogPopup, result: DialogResult): void;
        /**
         * Closes the popup control determined by the given context.
         *
         * @param context a dialog button on the current dialog or the popup control of the current dialog itself
         */
        static DialogClose(context: ASPxClientControl): void;
        private static HidePopup;
        private static EmptyPopup;
        /**
         * This function is called for all button clicks. It determines whether the server will handle this click or a
         * given client side function.
         *
         * @param button the button that has been clicked
         * @param evt the corresponding event
         */
        static HandleButton(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * If necessary, special actions in specific controls can be made in this method before the dialog handling of buttons
         *
         * @param popup is the corresponding dialog from which the controls will be prepare for handling
         */
        static HandleSpecialControlsBeforePost(popup: BADialogPopup): void;
        /**
         * This function calls the server side button handling
         *
         * @param button the button that has been clicked
         * @param evt the corresponding event
         */
        static HandleButtonServerside(button: BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
        /**
         * Builds the message
         * @param result The result object
         */
        private static HandleResultMessage;
        /**
         * Returns the valid control name
         * @param control A control inside the dialog
         * @param name The not dialog specific name
         */
        static GetDialogControlName(control: ASPxClientControl, name: string): string;
        /** Returns the valid control name escaped for use in JQuery
         * @param control  A control inside the dialog
         * @param name The not dialog specific name
         */
        static GetDialogControlNameJQ(control: ASPxClientControl, name: string): string;
        /**
         * Returns the dialog identifier
         * @param control A control inside the dialog
         */
        static GetDialogLevel(control: ASPxClientControl): number;
        /**
         * Return the name of the dialog form
         * @param control A control inside the dialog
         */
        static GetDialogFormName(control: ASPxClientControl): string;
        /**
         * Returns the popup dialog object.
         * @param control One control inside the dialog
         */
        static GetPopup(control: ASPxClientControl): BADialogPopup;
        /**
         * Update the dialog content and attach some events
         */
        private static UpdateDialogUI;
        /**
         * Enables or disables resizing of the current dialog.
         *
         * @param popup the popup control of the current dialog
         * @param resize true, if the current dialog should be resizable
         */
        private static DialogFormAllowResize;
        /**
         * Shows or hides the footer (button area) of the given popup control.
         *
         * @param popup the popup control of the current dialog
         * @param show true, if the footer should be shown
         */
        private static DialogFormShowFooter;
        /**
         * Private function that calculates and returns the next free popup level, that will be used for a dialog to
         * be opened.
         */
        private static GetNextDialogLevel;
        /**
         * Private function that calculates and returns the next free popup level, that will be used for a dialog to
         * be opened.
         */
        private static ComputeCurrentDialogLevel;
        /**
         * Recalculates and assigns the sizes and corrects the position of the given popup.
         *
         * @param popup the popup control of the current dialog
         */
        private static RecalcBounds;
        /**
         * Returns true if the dialog of an specific control is visible or any dialog is visible
         * @param control The control or NULL for any dialog
         */
        static IsDialogVisible(control: ASPxClientControl): boolean;
        /**
         * Returns the form hidden data object
         * @param control The control or NULL for any dialog
         */
        static GetFormHiddenData(control: ASPxClientControl): BA.Ui.Models.FormHiddenDataModel;
    }
}
