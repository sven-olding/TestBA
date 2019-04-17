declare module BA.Ui.WorkManager {
    /**
     * Representation of a single entry in the progress list.
     */
    class ProcessListEntry {
        /** True, if the process is currently active */
        IsActive: boolean;
        /** True, if the progress of this process is indeterminate */
        IsIndeterminate: boolean;
        /** oid of the process */
        Oid: string;
        /** title of the process */
        Title: string;
        /** current progress of the process */
        CurrentProgress: number;
        /** current subwork of the process */
        Caption: string;
        /** text to show when the process is being cancelled */
        CancellingText: string;
        /** text to show when the process has been cancelled */
        CancelledText: string;
        /** text to show when the process has had an error */
        ErrorText: string;
        /** true if the process can be canceled */
        IsCancellable: boolean;
        /** true if the process is being cancelled */
        IsCancelling: boolean;
        /** true if the process is cancelled */
        IsCancelled: boolean;
        /** true if the process is cancelled */
        IsError: boolean;
        /**
         * Updates the sub work text of the entry and its ui.
         *
         * @param caption new text to display
         */
        SetCaption(caption: string): void;
        /**
         * Updates the current progress of the entry and its ui.
         *
         * @param progress new progress to display
         */
        SetCurrentProgress(progress: number): void;
        /**
         * Copyies available values from the given object into the properties of this entry.
         *
         * @param entry object to copy values from
         */
        UpdateFrom(entry: any): void;
        /**
         * Sets the current progress to 100%, the current sub text to empty, deactivates the process and notifies the
         * ProgressList that this process has stopped.
         */
        Done(): void;
    }
}
