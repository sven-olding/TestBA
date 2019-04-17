declare module BA.Ui.Models {
    /** Model for passing data about drag and drop functionality in treelist designer. */
    class DesignTreelistCallbackModel {
        /** Source node that is being dragged. */
        Source: string;
        /** Destination node of the drag and drop. */
        Destination: string;
        /** Parent control of the drag and drop function. */
        Parent: string;
        /** Action which should be performed. */
        Action: Actions;
    }
    /** Actions for drag and drop. */
    enum Actions {
        /** Invalid, not set action. */
        NotSet = -1,
        /** Action to add the node. */
        Add = 0,
        /** Action to reorder nodes. */
        Reorder = 1,
        /** Action to remove a node. */
        Remove = 2
    }
}
