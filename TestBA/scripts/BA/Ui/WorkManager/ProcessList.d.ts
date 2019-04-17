declare module BA.Ui.WorkManager {
    /**
     * Outer API for the process list. Provides methods for adding, removing and refreshing the programmatic list as
     * much as the ui representation of this list.
     * This class is static as there must only be one process list in the application.
     */
    class ProcessList {
        /** The current list of ProcessListEntry objects */
        static CurrentProcessList: ProcessListEntry[];
        /** True, if the initial retrieval of processes has been done and the list is initialized */
        private static IsInited;
        /** the same process list exists for several representations, all updates must be ecxecuted on all ui versions */
        static UiListeners: ProcessListUi[];
        /**
         * If not yet initialized, this method retrieves the currently running processes from a controller and creates
         * ui for these, otherwise only updates the current ui.
         */
        static Init(): void;
        /**
         * Initializes the process list with an array of currently running processes which has been retrieved from
         * some controller before.
         *
         * @param parent The parent JQuery ui element that will contain the ui representations of the processes
         * @param dataFromController Array of objects that contain process information
         */
        private static InitInternal;
        /**
         * Adds a ProcessListEntry to the process list, updates the ui and notifies the container, that some process
         * has been added. Latter will cause the main icon to animate.
         *
         * @param entry The ProcessListEntry to add to the process list
         */
        static AddEntry(entry: ProcessListEntry): void;
        /**
         * Updates the contents of a ProcessListEntry and its ui representation. Will add a new entry, if no existing
         * is found by its oid property.
         *
         * @param entry ProcessListEntry to be updated or added
         */
        static UpdateEntry(entry: ProcessListEntry): void;
        /**
         * Removes a ProcessListEntry from the backend list and the ui representation.
         *
         * @param oid the oid of the entry to be removed
         */
        static RemoveEntryByOid(oid: string): void;
        /**
         * Retrieves a ProcessListEntry from the backend list and returns it.
         *
         * @param oid the oid of the entry to be removed
         */
        static GetEntryByOid(oid: string): ProcessListEntry;
        /**
         * Hides all opened hints
         */
        static HideAllHints(): void;
    }
}
