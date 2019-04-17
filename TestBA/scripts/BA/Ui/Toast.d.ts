declare module BA.Ui {
    /**
     * Class to show toast notifications
     */
    class Toast {
        /**
         * Initialize the toast with some default values
         */
        static Initialize(): void;
        /**
         * Shows a blue info toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         * @param overrides Option values for toast
         */
        static Info(message: string, title?: string, overrides?: ToastrOptions): void;
        /**
         * Shows a static blue info toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         */
        static InfoSticky(message: string, title?: string): void;
        /**
         * Shows a green success toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         * @param overrides Option values for toast
         */
        static Success(message: string, title?: string, overrides?: ToastrOptions): void;
        /**
         * Shows a static green success toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         */
        static SuccessSticky(message: string, title?: string): void;
        /**
         * Shows a yellow warning toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         * @param overrides Option values for toast. If null, the toast will be visible for 15 seconds
         */
        static Warning(message: string, title?: string, overrides?: ToastrOptions): void;
        /**
         * Shows a static yellow warning toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         */
        static WarningSticky(message: string, title?: string): void;
        /**
         * Shows a red error toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         * @param overrides Option values for toast. If null, the toast will be visible for 30 seconds
         */
        static Error(message: string, title?: string, overrides?: ToastrOptions): void;
        /**
         * Shows a static red error toast
         *
         * @param message Message to display in toast
         * @param title Title to display on toast
         */
        static ErrorSticky(message: string, title?: string): void;
    }
}
