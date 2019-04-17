declare module BA.Ui.TabController {
    class OpenBehavior {
        static UnpackOpenBehavior(value: string): OpenBehaviorModel;
        static HandleOpenBehavior(model: OpenBehaviorModel): void;
    }
}
