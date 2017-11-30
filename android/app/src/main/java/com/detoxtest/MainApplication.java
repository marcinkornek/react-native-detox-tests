package com.detoxtest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList();
  }

  @Override
  public String getJSMainModuleName() {
    return "index.bundle";
  }
}
