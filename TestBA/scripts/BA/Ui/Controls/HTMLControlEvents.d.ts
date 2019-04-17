declare module BA.Ui.Controls {
    class HTMLControlEvents {
        /**
         * Init mehthod of html control
         * We attach on every ancor tag a onclick function
         * @param s Handle of html control
         * @param e event arguments
         */
        static OnInit(s: any, e: any): void;
        static OnChanged(s: any, e: any): void;
        static OnBlur(): void;
        static OnFocus(): void;
        private static ChangeHTMLTabsVisibility;
        /**
        * MenuItem commands of the contextmenut in html editor
        */
        static MenuItemCommands: (s: any, e: any) => void;
    }
}
