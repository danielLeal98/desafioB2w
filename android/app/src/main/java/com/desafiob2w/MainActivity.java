package com.desafiob2w;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import org.devio.rn.splashscreen.SplashScreen;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;
public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState){
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "desafioB2w";
  }
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
