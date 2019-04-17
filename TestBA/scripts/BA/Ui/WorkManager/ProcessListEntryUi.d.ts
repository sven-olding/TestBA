declare module BA.Ui.WorkManager {
    /**
     * UI-Handling for single process list entries.
     */
    class ProcessListEntryUi {
        /** the JQuery ui object that represents this progress list entry */
        private uiRep;
        /** The process list entry that belongs to this UI representation */
        belongingEntry: ProcessListEntry;
        /** The container that this entry belongs to */
        belongingContainer: ProcessListUi;
        /**
         * Creates or updates the ui representation of this process.
         *
         * @param recreateUi true, if the representation should be recreated
         */
        UpdateUi(recreateUi: boolean): void;
        /**
         *  Removes the ui representation of this entry from the ui process list in a very fancy way.
         */
        Dispose(): void;
    }
}
