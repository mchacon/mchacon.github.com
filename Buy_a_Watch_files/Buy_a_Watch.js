// Created by iWeb 2.0.4 local-build-20100910

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Buy_a_Watch_files/Buy_a_WatchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
