declare module BA.Ui.Models {
    /**
     * Class for result from keep alive ping
     */
    class KeepAliveResult {
        /** Random guid for current instance. So the clients can check, if the server was restarted */
        ApplicationRunningInstanceId: string;
    }
}
