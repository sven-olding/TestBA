using BA.API;
using BA.Core;
using BA.Core.Interfaces;
using System;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Web.Optimization;

namespace TestBA.App_Start
{
    /// <summary>
    /// Helper class to setup the bundles
    /// </summary>
    public class BundleConfig : IBundleConfig
    {
        /// <summary>
        /// Setup the bundle configuration for the mvc application
        /// </summary>
        /// <param name="bundles">Collection of bundles</param>
        public void RegisterBundles(BundleCollection bundles)
        {
            String assemblyName = typeof(BundleConfig).Assembly.GetName().Name;
            Debug.WriteLine("RegisterBundles called " + assemblyName);

            Bundle bundle = bundles.FirstOrDefault(ff => ff.Path == "~/bundles/scripts");
            if (bundle == null)
            {
                bundle = new ScriptBundle("~/bundles/scripts");
                bundles.Add(bundle);
            }

            bundle.Include($"~/Scripts/TestBA/Ui/Actions.js?{assemblyName}");
        }
    }
}