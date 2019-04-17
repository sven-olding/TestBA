declare module BA.Ui.Controls {
    /**
     * Events that get triggered in context with the controls
     **/
    class PhasesControlEvents {
        /**
        * Initializes the interaction of the phases control elements
        *
        * @param s the control
        * @param e the corresponding click event
        */
        static OnInit(s: ASPxClientControl, e: any): void;
        /**
        * Handles a click in a phase element
        */
        private static OnPhaseElementClick;
    }
}
