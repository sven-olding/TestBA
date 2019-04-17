declare module BA.Ui.Dialog {
    /** Result object for dialogs. Contains status, messages with message type and a list of fields that should probably marked as invalid. */
    class DialogResult {
        /** empty constructor */
        constructor();
        /** The id of the Button that was clicked. */
        ButtonId: string;
        /** List of fields that should be marked as invalid. */
        InvalidFields: string[];
        /** List of messages of the invalid fields. */
        FieldMessages: string[];
        /** Message that should be displayed to the user. */
        Message: string;
        /** Type of the message that should be displayed (info, warning, etc). */
        MessageType: number;
        /** Client side function that should be called. */
        Action: string;
        /** Other data the dialog developer wants to submit to the dialog user. */
        Data: any;
    }
}
