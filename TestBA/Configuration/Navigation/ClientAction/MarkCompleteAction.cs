using BA.Core.Configuration.Navigation.Client;
using BA.Core.CustomAttributes;
using BA.Core.Enums;
using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Linq.Expressions;

namespace TestBA.Configuration.Navigation.ClientAction
{
    [Serializable]
    [Toolbox(EnumConfigurationType.AttributeValues.NavigationConfiguration)]
    [ControlFilter("NavigationConfigurationType", ExpressionType.Equal, EnumNavigationConfigurationType.AttributeValues.RibbonNavigation, EnumControlFilterApplyState.IfPositive)]
    public class MarkCompleteAction : ClientActionBase
    {
        public MarkCompleteAction() : base()
        {
            this.ToolboxName = "Complete Task";
            this.Caption = "Complete Task";
            this.ControlInitName = "CompleteText";
            this.ToolboxGroupName = "Custom Actions";
            this.Id = new Guid("F9FE2AC7-981B-4044-A2B7-7CF271826610");
            this.Icon = "projector";
            this.IconName = Icon;
            this.DesignerHintText = "Marks selected tasks as complete";
            this.VisibilityForParentTypes.Add(EnumActionVisibleForParentType.Values.Grid);
            Debug.WriteLine("MarkCompleteAction AddtionalClientData.AddOrUpdate");
            this.AdditionalClientData.AddOrUpdate("ActionMethodId", "TestBA.Ui.Actions.CompleteTaskAction");
        }
    }
}