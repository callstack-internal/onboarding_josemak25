package com.onboarding_josemak25; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.content.Context;
import android.widget.Toast;


public class ToastModule extends ReactContextBaseJavaModule {
   ToastModule(ReactApplicationContext context) {
       super(context);
   }

  // add to ToastModule.java
  @Override
  public String getName() {
    return "ToastModule";
  }

  @ReactMethod
  public void show(String text) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, text, Toast.LENGTH_LONG).show();
  }
}