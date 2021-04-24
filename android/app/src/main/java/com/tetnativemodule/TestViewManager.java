package com.tetnativemodule;

import android.graphics.Color;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.VideoView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class TestViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "RCTViewTest";

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected View createViewInstance(@NonNull ThemedReactContext reactContext) {
        View view = new View(reactContext);
        view.setBackgroundColor(Color.BLUE);
        return view;
    }

    @ReactProp(name = "backgroundColor")
    public void setBackground(View view, String backgroundColor) {
        try {
            int color = Color.parseColor(backgroundColor);
            Log.d("Color", String.valueOf(color));
            view.setBackgroundColor(color);
        } catch (Exception e) {
            Log.d("Color e", String.valueOf(e));
        }

    }
}
