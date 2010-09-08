// Created by iWeb 2.0.4 local-build-20100907

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000}),stroke_0:new IWPhotoFrame([IWCreateImage('Size_a_Watch_files/Watercolor_iweb_01.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_02.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_04.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_08.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_16.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_14.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_13.png'),IWCreateImage('Size_a_Watch_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.300000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Size_a_Watch_files/Size_a_WatchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
