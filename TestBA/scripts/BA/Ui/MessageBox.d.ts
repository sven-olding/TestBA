declare module BA.Ui {
    /** Extension to the DevExpress-ASPxClientPopupControl-class */
    interface BAMessageBoxPopup extends ASPxClientPopupControl {
        /** The result of this dialog */
        cpResult: Array<string>;
        /**
         * Function that will be called when the dialog is closed. This function will get the dialog result as
         * parameter, which always will be a string array!
         */
        cpUserCallback: Function;
        /** array of the defined buttons */
        cpButtons: MessageBoxButton[];
    }
    /**
     * Enum for different message box icons.
     *
     * @readonly
     * @enum {number}
     */
    enum MessageBoxIcon {
        /** Shows an Information icon */
        Information = 1,
        /** Shows a Question icon.*/
        Question = 2,
        /** Shows a Warning icon. */
        Warning = 3,
        /** Shows an Error icon. */
        Error = 4
    }
    /**
     * Parameters over which a message box is defined.
     * The parameters contain title, message, width, style and the buttons of a message box.
     */
    class MessageBoxParameters {
        /** the title of the message box */
        Title: string;
        /** the message to be displayed */
        Message: string;
        /** the message box's width in px */
        Width: number;
        /** the style of the message box (info/warn/question/error) */
        Style: number;
        /** the button definitions of the message box */
        Buttons: MessageBoxButton[];
    }
    /**
     *  Definition of a message box button.
     *  This class contains the button's caption/label, the result it would return to the user usually and a onClick-
     *  function that is triggered when the button is clicked. Furthermore it is defined whether this button is the
     *  currently displayed message box's default cancel button.
     */
    class MessageBoxButton {
        /** the displayed caption of the button */
        Caption: string;
        /** true if this button is the default cancel button of the current message box */
        IsCancel: boolean;
        /** result that is included into the result for the user normally */
        Result: string;
        /** onClick function that handles the click on this button */
        OnClick: Function;
    }
    /**
     * Provides static functions for calling up message boxed of different flavours.
     * In most cases, title, message and with of the message box can be defined, just like callback functions that
     * will be called for the different buttons that are available in each situation.
     * It also contains functions needed by the DevExpress framework when a message box is opened and closed.
     * Additionally there are some private helper functions that are needed by the higher ones for message box
     * handling.
     */
    class MessageBox {
        /**
         * The default cancel result value.
         */
        static readonly RESULT_CANCEL: string;
        /**
         * The default ok result value.
         */
        static readonly RESULT_OK: string;
        /** TODO: TEMPORARY - Should be removed or at least changed (-New) when the old message boxes are removed */
        private static readonly MESSAGE_BOX_PANEL_NAME;
        private static readonly MESSAGE_BOX_PANEL_ID;
        /**
         * Shows a message box with the information style. Title and message will correspond to the given arguments.
         * Hint: Pressing ESC will also trigger the ok button here as it is the only button available.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
         */
        static ShowOk(title: string, message: string, width?: number, okBtnCallback?: Function): void;
        /**
         * Shows a message box with the warning style. Title and message will correspond to the given arguments.
         * Hint: Pressing ESC will also trigger the ok button here as it is the only button available.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
         */
        static ShowWarn(title: string, message: string, width?: number, okBtnCallback?: Function): void;
        /**
         * Shows a message box with the error style. Title and message will correspond to the given arguments.
         * Hint: Pressing ESC will also trigger the ok button here as it is the only button available.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
         */
        static ShowError(title: string, message: string, width?: number, okBtnCallback?: Function): void;
        /**
         * Shows a message box that has buttons for 'Yes' and 'No'.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param yesBtnCallback User callback function that is called when the yes button is clicked. It will be passed ['YES'] as result.
         * @param noBtnCallback User callback function that is called when the no button is clicked. It will be passed ['NO'] as result.
         */
        static ShowYesNo(title: string, message: string, width?: number, yesBtnCallback?: Function, noBtnCallback?: Function): void;
        /**
         * Shows a message box that has buttons for 'Ok' and 'Cancel'.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
         * @param cancelBtnCallback User callback function that is called when the cancel button is clicked. It will be passed ['CANCEL'] as result.
         */
        static ShowOkCancel(title: string, message: string, width?: number, okBtnCallback?: Function, cancelBtnCallback?: Function): void;
        /**
        * Shows a message box that has buttons for 'Ok' and 'Cancel' and an input field for prompting the user for
        * information.
        *
        * @param title the title of the message box
        * @param message the actual message to be displayed
        * @param width the with of the message box
        * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
        * @param cancelBtnCallback User callback function that is called when the cancel button is clicked. It will be passed ['CANCEL'] as result.
        */
        static ShowPrompt(title: string, message: string, width?: number, okBtnCallback?: Function, cancelBtnCallback?: Function): void;
        /**
         * Shows a message box that has one simple 'Ok' button. The message box style can be given here.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param messageStyle the style of the message box (info/warn/error)
         * @param width the with of the message box
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed ['OK'] as result.
         */
        static ShowGenericOk(title: string, message: string, messageStyle: number, width: number, okBtnCallback?: Function): void;
        /**
         * Shows a message box that has two buttons that are described by the given arguments. This is used for
         * displaying OK/CANCEL and YES/NO message boxes. The message box style is always QUESTION.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param successBtnLabel label for the success button (i.e. 'Ok' or 'Yes'... this is the left button)
         * @param failBtnLabel label for the fail button (i.e. 'Cancel' or 'No'... this is the right button)
         * @param successBtnResult result of the success button (i.e. 'OK' or 'YES')
         * @param failBtnResult result of the fail button (i.e. 'CANCEL' or 'NO')
         * @param successBtnCallback user callback that is called with the result when the success button is clicked and the message box is closed
         * @param failBtnCallbackuser callback that is called with the result when the fail button is clicked and the message box is closed
         */
        static ShowGenericOkCancel(title: string, message: string, width: number, successBtnLabel: string, failBtnLabel: string, successBtnResult: string, failBtnResult: string, successBtnCallback?: Function, failBtnCallback?: Function): void;
        /**
         * Shows a message box that has buttons for 'Yes', 'No' and 'Cancel'.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param yesBtnCallback User callback function that is called when the yes button is clicked. It will be passed ['YES'] as result.
         * @param noBtnCallback User callback function that is called when the no button is clicked. It will be passed ['NO'] as result.
         * @param cancelBtnCallback User callback function that is called when the cancel button is clicked. It will be passed ['CANCEL'] as result.
         */
        static ShowYesNoCancel(title: string, message: string, width: number, yesBtnCallback?: Function, noBtnCallback?: Function, cancelBtnCallback?: Function): void;
        /**
         * Opens a message box for selecting one or multiple (argument: single) values of a list of elements.
         * The items are supposed to consist of an object containing key-value-pairs where the key will be part of the
         * selection result array. The message box style is always QUESTION.
         *
         * Example:
         * var items = { key1: "Selection 1", key2: "Selection 2", ...}
         *
         * The result then will consist of a string array of the selected keys.
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param width the with of the message box
         * @param single true, if a radio list should be displayed rather than checkboxes
         * @param items the items from which the user should select
         * @param okBtnCallback User callback function that is called when the ok button is clicked. It will be passed the result.
         * @param cancelBtnCallback User callback function that is called when the cancel button is clicked. It will be passed the result.
         */
        static ShowSelection(title: string, message: string, width: number, single: boolean, items: {
            [key: string]: string;
        }, okBtnCallback?: Function, cancelBtnCallback?: Function): void;
        /**
         * Actually the lowest message box function that is meant to be used by advanced users, if really necessary.
         * The caller gives several arguments that control what the message box looks like, additionally up to four
         * button objects in an array / one button object directly / a button callback function as last parameter.
         * Beware: These callbacks are onClick-callbacks. Do not mistake them with the user callback functions
         * that are called on closing the message box. These onClick-callbacks are expected to call some userCallback
         * function by themselves and close the message box by calling close on it!
         *
         * @param title the title of the message box
         * @param message the actual message to be displayed
         * @param messageStyle the style of the message box (info/warn/error)
         * @param width the with of the message box
         * @param defaultCallbackOrButtons either a function or a button definition or an array of buttons (s. description)
         */
        static ShowMessageBox(title: string, message: string, messageStyle: number, width: number, defaultCallbackOrButtons: Function | MessageBoxButton | MessageBoxButton[]): void;
        /**
         * Opens a message box according to the given MessageBoxParameters.
         *
         * @param parameters contains properties that control what the message box will show
         */
        static InvokeByParameters(parameters: MessageBoxParameters): void;
        /**
         * Closes the currently shown message box asynchroneously.
         */
        static Close(): void;
        /**
         * Event function that is called by the DevExpress popup control when the popup control is opened/shown.
         * For the message box, it only clears the current result and user callback.
         *
         * @param popup the popup control
         * @param evt the event parameters
         */
        static MessageBoxOnShown(popup: BAMessageBoxPopup, evt: ASPxClientPopupWindowEventArgs): void;
        /**
         * Event function that is called by the DevExpress popup control when the popup control is closed/hidden.
         * For the message box, it handles returning the message box result to the user and some minor clean ups.
         *
         * @param popup the popup control
         * @param evt the event parameters
         */
        static MessageBoxOnClosed(popup: BAMessageBoxPopup, evt: ASPxClientPopupWindowCloseUpEventArgs): void;
        /**
         * Event function that is called by the DevExpress textedit control when a key is pressed.
         * It is used to react to pressing ENTER in the input field of the prompt message box.
         *
         * @param element the text box control
         * @param evt the event parameters
         */
        static MessageBoxPromptKeyDown(element: ASPxClientTextBox, evt: ASPxClientEditKeyEventArgs): void;
        /**
         * Gathers and returns a result object especially from selection message boxes.
         *
         * @returns a result object especially from selection message boxes
         */
        private static GatherSelectionResult;
        /**
         * Returns a function pointer of a new action handling function that gets result and user callback for message
         * boxes with selections.
         *
         * @param userCallback the callback function that is called with the result when the message box is closed
         * @returns a function pointer of a new action handling function
         */
        private static DefaultSelectButtonAction;
        /**
         * Returns a function pointer of a new action handling function that gets result and user callback for message
         * boxes with a prompt.
         *
         * @param userCallback the callback function that is called with the result when the message box is closed
         * @returns a function pointer of a new action handling function
         */
        private static DefaultPromptButtonAction;
        /**
         * Creates an initial version of the message box parameters object.
         *
         * @param title the title for the message box
         * @param message the message to be displayed
         * @param messageStyle the style of the message box (info/warn/error)
         * @param width the desired width of the message box
         * @returns an initial version of the message box parameters object
         */
        private static CreateMessageboxParameters;
        /**
         * Copies the given button definitions to the given paramButtons target array.
         * Some values might be interpreted or modified during this process.
         *
         * @param buttonDefinitions source button definitions
         * @param paramButtons target array to copy the source definitions to
         */
        private static AppendButtons;
        /**
         * Creates and returns a default button definition for a CANCEL button.
         * The default CANCEL button is labeled with the given btnLabel (defaults to 'Cancel'), sets the given callback
         * function and an array containing the btnResult (defaults to 'CANCEL') as result and closes the message box.
         *
         * @param userCallback callback function that is called with the result when the message box closes
         * @param btnLabel the label of the button
         * @param btnResult the result that should be given to the caller's callback function
         * @returns the default cancel button
         */
        private static CreateDefaultCancelBtn;
        /**
         * Creates and returns a default button definition for an OK button.
         * The default OK button is labeled with the given btnLabel (defaults to 'Ok'), sets the given callback
         * function and an array containing the btnResult (defaults to 'OK') as result and closes the message box.
         *
         * @param userCallback callback function that is called with the result when the message box closes
         * @param btnLabel the label of the button
         * @param btnResult the result that should be given to the caller's callback function
         * @returns the default ok button
         */
        private static CreateDefaultOkBtn;
        /**
         * Returns the BAMessageBoxPopup control (container) of the message box.
         *
         * @returns the BAMessageBoxPopup control of the message box
         */
        private static GetMsgBoxPopup;
        /**
         * Sets the result for the message box. The result is ALWAYS an array of strings. It will be passed to the
         * given user callback function when the message box is closed.
         *
         * @param result a string array containing the result of the message box
         * @param userCallback the callback function that will get the result as parameter
         */
        private static SetResult;
    }
}
