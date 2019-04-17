declare module BA.Ui.Actions {
    interface ActionFunction {
        (event?: any, customData?: CustomData): any;
    }
    class ActionHandler {
        private static actions;
        static RegisterAction(name: string, action: ActionFunction): void;
        static GetAction(name: string): ActionFunction;
        /**
         * Action is triggered by name. If no action is found an alert is displayed
         * @param name The action name
         * @param event The current event
         * @param customData The custom data object
         */
        static Execute(name: string, event: any, customData: CustomData): any;
    }
}
