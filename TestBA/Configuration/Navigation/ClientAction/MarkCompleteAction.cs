using BA.Core;
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
            ToolboxName = "Complete Task";
            Caption = "Complete Task";
            ControlInitName = "CompleteText";
            ToolboxGroupName = "Custom Actions";
            Id = new Guid("F9FE2AC7-981B-4044-A2B7-7CF271826610");
            Icon = "projector";
            IconName = Icon;
            DesignerHintText = "Marks selected tasks as complete";
            VisibilityForParentTypes.Add(EnumActionVisibleForParentType.Values.Grid);
            DynamicClientVisibility.Clear();
            DynamicClientVisibility.Add(EnumActionVisibility.Values.SomethingSelected);
            Debug.WriteLine("MarkCompleteAction AddtionalClientData.AddOrUpdate");
            AdditionalClientData.AddOrUpdate("ActionMethodId", "TestBA.Ui.Actions.CompleteTaskAction");
        }
    }
}