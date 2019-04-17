declare module BA.Ui.Controls {
    class PartialRefreshEvents {
        private static _loadingCount;
        static OnBeginCallback(s: any, e: any): void;
        /**
         * Partial refresh for all delayed loaded grids
         * @param s control itself
         * @param e callback arguments
         */
        static OnBeginCallbackGrid(s: any, e: any): void;
        static OnEndCallback(s: any, e: any): void;
        static OnConditionChanged(s: any): void;
    }
}
