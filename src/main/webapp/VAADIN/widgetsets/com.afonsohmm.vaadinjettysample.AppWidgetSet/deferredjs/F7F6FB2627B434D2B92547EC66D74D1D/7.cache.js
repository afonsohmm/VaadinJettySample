$wnd.com_afonsohmm_vaadinjettysample_AppWidgetSet.runAsyncCallback7("function $loadNativeJs_3(store){\n  var data_0 = {setter:function(bean, value_0){\n    bean.color_0 = value_0;\n  }\n  , getter:function(bean){\n    return bean.color_0;\n  }\n  };\n  store.setPropertyData(Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'color', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.popupVisible = value_0.booleanValue();\n  }\n  , getter:function(bean){\n    return valueOf_52(bean.popupVisible);\n  }\n  };\n  store.setPropertyData(Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'popupVisible', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.showDefaultCaption = value_0.booleanValue();\n  }\n  , getter:function(bean){\n    return valueOf_52(bean.showDefaultCaption);\n  }\n  };\n  store.setPropertyData(Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'showDefaultCaption', data_0);\n}\n\ndefineClass(1582, 1, $intern_95);\n_.onSuccess_1 = function onSuccess_7(){\n  $setSuperClass(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, Lcom_vaadin_shared_AbstractComponentState_2_classLit);\n  $setClass(this.val$store2, 'com.vaadin.ui.ColorPicker', Lcom_vaadin_client_ui_colorpicker_ColorPickerConnector_2_classLit);\n  $setInvoker(this.val$store2, Lcom_vaadin_client_ui_colorpicker_ColorPickerConnector_2_classLit, '!new', new ConnectorBundleLoaderImpl$7$1$1);\n  $setInvoker(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, '!new', new ConnectorBundleLoaderImpl$7$1$2);\n  $setReturnType(this.val$store2, Lcom_vaadin_client_ui_colorpicker_ColorPickerConnector_2_classLit, 'getState', new Type(Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit));\n  $setReturnType(this.val$store2, Lcom_vaadin_client_ui_colorpicker_ColorPickerConnector_2_classLit, 'getWidget', new Type(Lcom_vaadin_client_ui_VColorPicker_2_classLit));\n  $setInvoker(this.val$store2, Lcom_vaadin_client_ui_VColorPicker_2_classLit, 'setOpen', new ConnectorBundleLoaderImpl$7$1$3);\n  $setInvoker(this.val$store2, Lcom_vaadin_client_ui_VColorPicker_2_classLit, 'setColor', new ConnectorBundleLoaderImpl$7$1$4);\n  $loadNativeJs_3(this.val$store2);\n  $setPropertyType(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'color', new Type(Ljava_lang_String_2_classLit));\n  $setPropertyType(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'popupVisible', new Type(Ljava_lang_Boolean_2_classLit));\n  $setPropertyType(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'showDefaultCaption', new Type(Ljava_lang_Boolean_2_classLit));\n  $setDelegateToWidget(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'popupVisible', 'setOpen');\n  $setDelegateToWidget(this.val$store2, Lcom_vaadin_shared_ui_colorpicker_ColorPickerState_2_classLit, 'color', 'setColor');\n  $setLoaded_0((!impl_14 && (impl_14 = new ConnectorBundleLoaderImpl) , impl_14), this.this$11.packageName);\n}\n;\nfunction ConnectorBundleLoaderImpl$7$1$1(){\n}\n\ndefineClass(1584, 1, $intern_120, ConnectorBundleLoaderImpl$7$1$1);\n_.invoke = function invoke_258(target, params){\n  return new ColorPickerConnector;\n}\n;\nvar Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$7$1$1_2_classLit = createForClass('com.vaadin.client.metadata', 'ConnectorBundleLoaderImpl/7/1/1', 1584);\nfunction ConnectorBundleLoaderImpl$7$1$2(){\n}\n\ndefineClass(1585, 1, $intern_120, ConnectorBundleLoaderImpl$7$1$2);\n_.invoke = function invoke_259(target, params){\n  return new ColorPickerState;\n}\n;\nvar Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$7$1$2_2_classLit = createForClass('com.vaadin.client.metadata', 'ConnectorBundleLoaderImpl/7/1/2', 1585);\nfunction ConnectorBundleLoaderImpl$7$1$3(){\n}\n\ndefineClass(1586, 1, $intern_120, ConnectorBundleLoaderImpl$7$1$3);\n_.invoke = function invoke_260(target, params){\n  $setOpen(dynamicCast(target, 319), dynamicCast(params[0], 132).value_0);\n  return null;\n}\n;\nvar Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$7$1$3_2_classLit = createForClass('com.vaadin.client.metadata', 'ConnectorBundleLoaderImpl/7/1/3', 1586);\nfunction ConnectorBundleLoaderImpl$7$1$4(){\n}\n\ndefineClass(1587, 1, $intern_120, ConnectorBundleLoaderImpl$7$1$4);\n_.invoke = function invoke_261(target, params){\n  $setColor_0(dynamicCast(target, 319), dynamicCastToString(params[0]));\n  return null;\n}\n;\nvar Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$7$1$4_2_classLit = createForClass('com.vaadin.client.metadata', 'ConnectorBundleLoaderImpl/7/1/4', 1587);\nfunction $setHtml(this$static, html){\n  $setInnerHTML(this$static.captionElement, html);\n}\n\nfunction $refreshColor(this$static){\n  if (this$static.color_0 != null) {\n    if (!this$static.colorIcon) {\n      this$static.colorIcon = new HTML;\n      $setStylePrimaryName(this$static.colorIcon, 'v-colorpicker-button-color');\n      $insertBefore(this$static.wrapper, $getElement(this$static.colorIcon), this$static.captionElement);\n    }\n    $getElement(this$static.colorIcon).style['background'] = this$static.color_0;\n  }\n}\n\nfunction $setColor_0(this$static, color_0){\n  this$static.color_0 = color_0;\n}\n\nfunction $setOpen(this$static, open_0){\n  this$static.isOpen = open_0;\n}\n\nfunction VColorPicker(){\n  $clinit_FocusWidget();\n  VButton.call(this);\n  this.color_0 = null;\n  this.isOpen = false;\n}\n\ndefineClass(319, 134, {53:1, 56:1, 155:1, 74:1, 156:1, 78:1, 84:1, 95:1, 52:1, 48:1, 57:1, 58:1, 60:1, 59:1, 61:1, 62:1, 63:1, 94:1, 76:1, 77:1, 75:1, 96:1, 98:1, 157:1, 71:1, 82:1, 80:1, 81:1, 79:1, 83:1, 88:1, 87:1, 86:1, 85:1, 14:1, 7:1, 12:1, 13:1, 127:1, 110:1, 97:1, 152:1, 11:1, 15:1, 72:1, 153:1, 154:1, 73:1, 10:1, 9:1, 134:1, 319:1}, VColorPicker);\n_.onClick = function onClick_38(event_0){\n  ($clinit_BrowserInfo() , !instance_3 && (instance_3 = new BrowserInfo) , $clinit_BrowserInfo() , instance_3).browserDetails.isSafari && impl_6.focus_1(($clinit_DOM() , this.element_0));\n  this.clickPending = false;\n  $setOpen(this, !this.isOpen);\n}\n;\n_.isOpen = false;\nvar Lcom_vaadin_client_ui_VColorPicker_2_classLit = createForClass('com.vaadin.client.ui', 'VColorPicker', 319);\nfunction ColorPickerConnector(){\n  AbstractColorPickerConnector.call(this);\n  this.rpc = dynamicCast(create_5(Lcom_vaadin_shared_ui_colorpicker_ColorPickerServerRpc_2_classLit, this), 2081);\n}\n\ndefineClass(1583, 676, $intern_171, ColorPickerConnector);\n_.createWidget = function createWidget_6(){\n  return new VColorPicker;\n}\n;\n_.getWidget_0 = function getWidget_18(){\n  return dynamicCast($getWidget_1(this), 319);\n}\n;\n_.onClick = function onClick_57(event_0){\n  $openPopup(this.rpc, dynamicCast($getWidget_1(this), 319).isOpen);\n}\n;\n_.refreshColor = function refreshColor_0(){\n  $refreshColor(dynamicCast($getWidget_1(this), 319));\n}\n;\n_.setCaption_0 = function setCaption_1(caption){\n  (!this.state && (this.state = $createState(this)) , dynamicCast(dynamicCast(this.state, 6), 230)).captionAsHtml?$setHtml(dynamicCast($getWidget_1(this), 319), caption):$setText_4(dynamicCast($getWidget_1(this), 319), caption);\n}\n;\nvar Lcom_vaadin_client_ui_colorpicker_ColorPickerConnector_2_classLit = createForClass('com.vaadin.client.ui.colorpicker', 'ColorPickerConnector', 1583);\n$entry(onLoad)(7);\n\n//# sourceURL=com.afonsohmm.vaadinjettysample.AppWidgetSet-7.js\n")