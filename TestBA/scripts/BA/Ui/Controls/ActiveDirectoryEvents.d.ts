declare module BA.Ui.Controls {
    /**
     * Events that get triggered in context with the active directory search
     **/
    class ActiveDirectoryEvents {
        /**
         * Executed when a user clicks the 'search' button in active directory dialog
         *
         * @param sender the search button
         * @param evt the corresponding click event
         */
        static OnSearch(sender: ASPxClientButton, evt: ASPxClientButtonClickEventArgs): void;
    }
}
