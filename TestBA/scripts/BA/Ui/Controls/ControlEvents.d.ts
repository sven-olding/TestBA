declare module BA.Ui.Controls {
    /**
     * Events that get triggered in context with the controls
     **/
    class ControlEvents {
        /**
         * Executed when a user clicks the 'search' button in active directory dialog
         *
         * @param sender the control
         * @param evt the corresponding click event
         */
        static SetTabAsDirty(sender: ASPxClientControl, evt: any): void;
        /**
         * Refreshes the given RefreshGroups when the text in a field changes.
         * Works on different types of fields, thus this is not in a concrete field event implemenation
         *
         * @param sender the control
         * @param evt the change event of the control
         */
        static RefreshGroupsWhenFocusLost(sender: ASPxClientControl, evt: any): void;
        /**
         * This function will be called, when the content of some field changes. This is needed as some controls
         * (i.e. SpinEdit) call "NumberChanged" every time the content is changed by using the arrow keys. It only
         * sets a flag that the refresh must be triggered when the loses focus.
         *
         * @param sender the control
         * @param evt the event
         */
        static RefreshGroupsWhenContentChanged(sender: ASPxClientControl, evt: any): void;
    }
}
