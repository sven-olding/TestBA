declare module BA.Ui.Dialog {
    /**
     * A class which handles the client side mechanisms of the data selection dialog like
     * the validation of UI controls, etc.
     * @author ARa
     */
    class DataSelectionDialog extends DialogBase {
        /**
         * List of selected index-es
         */
        private _SelectedSourceVisibleIndecis;
        private _SelectedDestinationVisibleIndecis;
        private _AddIsAllowed;
        /**
         * Creates the dialog handler and the layout.
         * @constructor
         */
        constructor();
        /**
         * Adds the selected source items to the destination grid.
         * @param s - DevExpress Button triggerd that action.
         * @param e - DevExpress Event.
         */
        Add(s: any, e: any): void;
        /**
         * Double click event to add the clicked row to the destination grid
         * @param s - DevExpress Grid triggerd that action.
         * @param e - DevExpress Event.
         */
        DblClickAdd(s: any, e: any): void;
        /**
         * Removes the selected items from the destination grid.
         * @param s - DevExpress Button triggerd that action.
         * @param e - DevExpress Event.
         */
        Remove(s: any, e: any): void;
        /**
         * Double click event to remove the clicked row from the destination grid
         * @param s - DevExpress Grid triggerd that action.
         * @param e - DevExpress Event.
         */
        DblClickRemove(s: any, e: any): void;
        /**
         * Updates the enbaled state of Add button (moves selected record(s) to the grid of selected records)
         */
        UpdateAddButtonEnabledState(): void;
        /**
         * Called if the selection of the source grid changed. Handles the validation of UI controls.
         * @param s - DevExpress control triggerd that action.
         * @param e - DevExpress event.
         */
        OnSourceSelectionChange(s: any, e: any): void;
        /**
         * Called if the selection of the destination grid changed.
         * @param s - DevExpress control triggerd that action.
         * @param e - DevExpress event.
         */
        OnDestinationSelectionChange(s: any, e: any): void;
        /**
         * Called on resizing the data selection dialog
         */
        OnResize(): void;
        OnDestinationGridEndCallback(s: BAClientGridView, e: any): void;
    }
}
