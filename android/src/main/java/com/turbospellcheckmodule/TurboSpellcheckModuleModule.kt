package com.turbospellcheckmodule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = TurboSpellcheckModuleModule.NAME)
class TurboSpellcheckModuleModule(reactContext: ReactApplicationContext) :
  NativeTurboSpellcheckModuleSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun isValid(value: String?): Boolean {
    return false
  }

  companion object {
    const val NAME = "TurboSpellcheckModule"
  }
}
