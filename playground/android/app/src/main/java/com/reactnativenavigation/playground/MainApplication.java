package com.reactnativenavigation.playground;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationPackage;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.playground.newarchitecture.MainApplicationReactNativeHost;
import java.util.ArrayList;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private final ReactNativeHost mReactNativeHost =
            new NavigationReactNativeHost(this) {
                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }

                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                public List<ReactPackage> getPackages() {
                    ArrayList<ReactPackage> packages = new PackageList(this).getPackages();
                    packages.add(new NavigationPackage(mReactNativeHost));
                    return packages;
                }

                @Override
                protected boolean isNewArchEnabled() {
                    return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
                }
                @Override
                protected Boolean isHermesEnabled() {
                    return BuildConfig.IS_HERMES_ENABLED;
                }
            };
    private final ReactNativeHost mNewArchitectureNativeHost =
            new MainApplicationReactNativeHost(this);

    @Override
    public void onCreate() {
        super.onCreate();
        registerExternalComponent("RNNCustomComponent", new FragmentCreator());

        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            DefaultNewArchitectureEntryPoint.load();
        }
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
