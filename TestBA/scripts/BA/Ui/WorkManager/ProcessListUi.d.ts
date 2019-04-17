declare module BA.Ui.WorkManager {
    /**
     * UI-handling for the process list itself
     */
    class ProcessListUi {
        /** True, if the process list is currently opened by the user */
        IsShowing: boolean;
        /** The JQuery UI-element that contains the ui representations of the processes */
        private UiProcessContainer;
        /** Sub-UI-elements for each process entry */
        private UiForProcess;
        /** The HTML window object for this UI-representation */
        window: any;
        /**
         * Rebuilds the ui representation of the progress list from scratch. Executed only, if the process list is
         * currently displayed.
         *
         * @param parent The parent JQuery ui element that will contain the ui representations of the processes
         */
        UpdateUi(): void;
        /**
         * Adds a ui representation of a single process to the ui process list.
         *
         * @param uiRep JQuery element of a process that will be added to the ui process list
         */
        AddProcessUi(uiRep: JQuery): void;
        /**
         * Starts the animation of the main button.
         *
         * @param entry entry that caused the notification
         */
        OnProcessStarted(entry: ProcessListEntry): void;
        /**
         * Checks whether there are still running processes, if not, stops the animation of the main button. In
         * addition triggers the removal of the finished process from the process list and its ui representation.
         *
         * @param entry the entry that has stopped
         */
        OnProcessStopped(entry: ProcessListEntry): void;
        /**
         * Updates the UI representation for a specific process list entry, optionally recreates it from scratch.
         *
         * @param entry The entry whose UI is to be updated
         * @param recreate True, if the UI should be recreated
         */
        UpdateUiForEntry(entry: ProcessListEntry, recreate: boolean): void;
        /**
         * Destroys the UI representation for the given entry (prior to removing the entry itself).
         *
         * @param entry The entry to be removed
         */
        DisposeUiForEntry(entry: ProcessListEntry): void;
        /**
         * Event that is called, when the ui progess list is opened by the user. If the list has not been initialized
         * yet, it calls a controller and Init with its result prior to updating the ui.
         *
         * @param s event sender (the devexpress hint object)
         * @param e the event
         */
        OnShowing(s: any, e: any): void;
        /**
         * Event that is called, when the ui progess list is closed by the user.
         *
         * @param s event sender (the devexpress hint object)
         * @param e the event
         */
        OnHiding(s: any, e: any): void;
        CancelProcess(element: any): void;
    }
}
