(self.webpackChunkpoint_of_sale_component=self.webpackChunkpoint_of_sale_component||[]).push([[179],{89663:function(i,s,r){var t={"./Binary_Property/ASCII.js":10014,"./Binary_Property/ASCII_Hex_Digit.js":1756,"./Binary_Property/Alphabetic.js":97813,"./Binary_Property/Any.js":83234,"./Binary_Property/Assigned.js":30901,"./Binary_Property/Bidi_Control.js":24170,"./Binary_Property/Bidi_Mirrored.js":99272,"./Binary_Property/Case_Ignorable.js":45306,"./Binary_Property/Cased.js":76533,"./Binary_Property/Changes_When_Casefolded.js":61656,"./Binary_Property/Changes_When_Casemapped.js":1775,"./Binary_Property/Changes_When_Lowercased.js":64142,"./Binary_Property/Changes_When_NFKC_Casefolded.js":83340,"./Binary_Property/Changes_When_Titlecased.js":43761,"./Binary_Property/Changes_When_Uppercased.js":28283,"./Binary_Property/Dash.js":61689,"./Binary_Property/Default_Ignorable_Code_Point.js":72682,"./Binary_Property/Deprecated.js":70511,"./Binary_Property/Diacritic.js":86844,"./Binary_Property/Emoji.js":75495,"./Binary_Property/Emoji_Component.js":75753,"./Binary_Property/Emoji_Modifier.js":21592,"./Binary_Property/Emoji_Modifier_Base.js":87098,"./Binary_Property/Emoji_Presentation.js":48428,"./Binary_Property/Extended_Pictographic.js":67782,"./Binary_Property/Extender.js":25991,"./Binary_Property/Grapheme_Base.js":97507,"./Binary_Property/Grapheme_Extend.js":30251,"./Binary_Property/Hex_Digit.js":58754,"./Binary_Property/IDS_Binary_Operator.js":64272,"./Binary_Property/IDS_Trinary_Operator.js":64330,"./Binary_Property/ID_Continue.js":79839,"./Binary_Property/ID_Start.js":99785,"./Binary_Property/Ideographic.js":89326,"./Binary_Property/Join_Control.js":10845,"./Binary_Property/Logical_Order_Exception.js":33507,"./Binary_Property/Lowercase.js":63729,"./Binary_Property/Math.js":48251,"./Binary_Property/Noncharacter_Code_Point.js":60689,"./Binary_Property/Pattern_Syntax.js":29028,"./Binary_Property/Pattern_White_Space.js":52694,"./Binary_Property/Quotation_Mark.js":69538,"./Binary_Property/Radical.js":33759,"./Binary_Property/Regional_Indicator.js":59976,"./Binary_Property/Sentence_Terminal.js":18609,"./Binary_Property/Soft_Dotted.js":67760,"./Binary_Property/Terminal_Punctuation.js":40038,"./Binary_Property/Unified_Ideograph.js":94993,"./Binary_Property/Uppercase.js":95289,"./Binary_Property/Variation_Selector.js":1834,"./Binary_Property/White_Space.js":80987,"./Binary_Property/XID_Continue.js":31656,"./Binary_Property/XID_Start.js":25315,"./General_Category/Cased_Letter.js":50935,"./General_Category/Close_Punctuation.js":64969,"./General_Category/Connector_Punctuation.js":82835,"./General_Category/Control.js":76076,"./General_Category/Currency_Symbol.js":3348,"./General_Category/Dash_Punctuation.js":61795,"./General_Category/Decimal_Number.js":72669,"./General_Category/Enclosing_Mark.js":90974,"./General_Category/Final_Punctuation.js":29416,"./General_Category/Format.js":27613,"./General_Category/Initial_Punctuation.js":53997,"./General_Category/Letter.js":1512,"./General_Category/Letter_Number.js":25030,"./General_Category/Line_Separator.js":93531,"./General_Category/Lowercase_Letter.js":79993,"./General_Category/Mark.js":30552,"./General_Category/Math_Symbol.js":58313,"./General_Category/Modifier_Letter.js":13578,"./General_Category/Modifier_Symbol.js":86933,"./General_Category/Nonspacing_Mark.js":11474,"./General_Category/Number.js":36346,"./General_Category/Open_Punctuation.js":32678,"./General_Category/Other.js":56876,"./General_Category/Other_Letter.js":57061,"./General_Category/Other_Number.js":60534,"./General_Category/Other_Punctuation.js":35904,"./General_Category/Other_Symbol.js":89608,"./General_Category/Paragraph_Separator.js":75438,"./General_Category/Private_Use.js":62648,"./General_Category/Punctuation.js":94766,"./General_Category/Separator.js":83738,"./General_Category/Space_Separator.js":54316,"./General_Category/Spacing_Mark.js":3232,"./General_Category/Surrogate.js":5386,"./General_Category/Symbol.js":69954,"./General_Category/Titlecase_Letter.js":69346,"./General_Category/Unassigned.js":70919,"./General_Category/Uppercase_Letter.js":91182,"./Script/Adlam.js":99300,"./Script/Ahom.js":63809,"./Script/Anatolian_Hieroglyphs.js":26626,"./Script/Arabic.js":94157,"./Script/Armenian.js":16003,"./Script/Avestan.js":78220,"./Script/Balinese.js":19180,"./Script/Bamum.js":81300,"./Script/Bassa_Vah.js":32886,"./Script/Batak.js":46057,"./Script/Bengali.js":19105,"./Script/Bhaiksuki.js":13738,"./Script/Bopomofo.js":98410,"./Script/Brahmi.js":70154,"./Script/Braille.js":15298,"./Script/Buginese.js":89715,"./Script/Buhid.js":49551,"./Script/Canadian_Aboriginal.js":23480,"./Script/Carian.js":53102,"./Script/Caucasian_Albanian.js":59353,"./Script/Chakma.js":24806,"./Script/Cham.js":79451,"./Script/Cherokee.js":31253,"./Script/Chorasmian.js":42606,"./Script/Common.js":41964,"./Script/Coptic.js":4739,"./Script/Cuneiform.js":11515,"./Script/Cypriot.js":81556,"./Script/Cypro_Minoan.js":44713,"./Script/Cyrillic.js":62104,"./Script/Deseret.js":80781,"./Script/Devanagari.js":39584,"./Script/Dives_Akuru.js":92677,"./Script/Dogra.js":13438,"./Script/Duployan.js":56079,"./Script/Egyptian_Hieroglyphs.js":83405,"./Script/Elbasan.js":41432,"./Script/Elymaic.js":43581,"./Script/Ethiopic.js":79617,"./Script/Georgian.js":37729,"./Script/Glagolitic.js":98111,"./Script/Gothic.js":30535,"./Script/Grantha.js":87902,"./Script/Greek.js":12512,"./Script/Gujarati.js":60316,"./Script/Gunjala_Gondi.js":49375,"./Script/Gurmukhi.js":73213,"./Script/Han.js":8970,"./Script/Hangul.js":46203,"./Script/Hanifi_Rohingya.js":74335,"./Script/Hanunoo.js":67319,"./Script/Hatran.js":12865,"./Script/Hebrew.js":15383,"./Script/Hiragana.js":83835,"./Script/Imperial_Aramaic.js":63344,"./Script/Inherited.js":24975,"./Script/Inscriptional_Pahlavi.js":9088,"./Script/Inscriptional_Parthian.js":83199,"./Script/Javanese.js":74625,"./Script/Kaithi.js":75332,"./Script/Kannada.js":98775,"./Script/Katakana.js":38570,"./Script/Kayah_Li.js":81610,"./Script/Kharoshthi.js":46258,"./Script/Khitan_Small_Script.js":4490,"./Script/Khmer.js":50448,"./Script/Khojki.js":89192,"./Script/Khudawadi.js":47732,"./Script/Lao.js":52455,"./Script/Latin.js":8388,"./Script/Lepcha.js":91654,"./Script/Limbu.js":19930,"./Script/Linear_A.js":85166,"./Script/Linear_B.js":96282,"./Script/Lisu.js":67538,"./Script/Lycian.js":82187,"./Script/Lydian.js":93201,"./Script/Mahajani.js":21559,"./Script/Makasar.js":51894,"./Script/Malayalam.js":13441,"./Script/Mandaic.js":35622,"./Script/Manichaean.js":30735,"./Script/Marchen.js":48111,"./Script/Masaram_Gondi.js":13356,"./Script/Medefaidrin.js":19662,"./Script/Meetei_Mayek.js":28163,"./Script/Mende_Kikakui.js":20563,"./Script/Meroitic_Cursive.js":70431,"./Script/Meroitic_Hieroglyphs.js":5359,"./Script/Miao.js":38720,"./Script/Modi.js":78951,"./Script/Mongolian.js":70326,"./Script/Mro.js":47477,"./Script/Multani.js":49978,"./Script/Myanmar.js":92912,"./Script/Nabataean.js":89520,"./Script/Nandinagari.js":23718,"./Script/New_Tai_Lue.js":47829,"./Script/Newa.js":42522,"./Script/Nko.js":7309,"./Script/Nushu.js":4496,"./Script/Nyiakeng_Puachue_Hmong.js":60723,"./Script/Ogham.js":29207,"./Script/Ol_Chiki.js":64681,"./Script/Old_Hungarian.js":140,"./Script/Old_Italic.js":85534,"./Script/Old_North_Arabian.js":77782,"./Script/Old_Permic.js":80405,"./Script/Old_Persian.js":75987,"./Script/Old_Sogdian.js":64799,"./Script/Old_South_Arabian.js":76340,"./Script/Old_Turkic.js":91510,"./Script/Old_Uyghur.js":32285,"./Script/Oriya.js":97087,"./Script/Osage.js":59621,"./Script/Osmanya.js":64099,"./Script/Pahawh_Hmong.js":69996,"./Script/Palmyrene.js":9,"./Script/Pau_Cin_Hau.js":78974,"./Script/Phags_Pa.js":27317,"./Script/Phoenician.js":75487,"./Script/Psalter_Pahlavi.js":8242,"./Script/Rejang.js":32625,"./Script/Runic.js":96586,"./Script/Samaritan.js":35088,"./Script/Saurashtra.js":16494,"./Script/Sharada.js":57186,"./Script/Shavian.js":84010,"./Script/Siddham.js":23427,"./Script/SignWriting.js":8707,"./Script/Sinhala.js":85482,"./Script/Sogdian.js":5567,"./Script/Sora_Sompeng.js":82863,"./Script/Soyombo.js":91239,"./Script/Sundanese.js":89861,"./Script/Syloti_Nagri.js":30910,"./Script/Syriac.js":66546,"./Script/Tagalog.js":7043,"./Script/Tagbanwa.js":68693,"./Script/Tai_Le.js":22756,"./Script/Tai_Tham.js":2127,"./Script/Tai_Viet.js":28022,"./Script/Takri.js":51831,"./Script/Tamil.js":62335,"./Script/Tangsa.js":84016,"./Script/Tangut.js":14631,"./Script/Telugu.js":15093,"./Script/Thaana.js":46388,"./Script/Thai.js":46940,"./Script/Tibetan.js":49463,"./Script/Tifinagh.js":55533,"./Script/Tirhuta.js":86050,"./Script/Toto.js":70844,"./Script/Ugaritic.js":32826,"./Script/Vai.js":16597,"./Script/Vithkuqi.js":47553,"./Script/Wancho.js":29200,"./Script/Warang_Citi.js":92198,"./Script/Yezidi.js":41827,"./Script/Yi.js":23928,"./Script/Zanabazar_Square.js":85283,"./Script_Extensions/Adlam.js":74087,"./Script_Extensions/Ahom.js":31913,"./Script_Extensions/Anatolian_Hieroglyphs.js":7614,"./Script_Extensions/Arabic.js":46646,"./Script_Extensions/Armenian.js":19131,"./Script_Extensions/Avestan.js":51086,"./Script_Extensions/Balinese.js":5591,"./Script_Extensions/Bamum.js":34152,"./Script_Extensions/Bassa_Vah.js":96180,"./Script_Extensions/Batak.js":4348,"./Script_Extensions/Bengali.js":85577,"./Script_Extensions/Bhaiksuki.js":13584,"./Script_Extensions/Bopomofo.js":7415,"./Script_Extensions/Brahmi.js":7741,"./Script_Extensions/Braille.js":1228,"./Script_Extensions/Buginese.js":36096,"./Script_Extensions/Buhid.js":757,"./Script_Extensions/Canadian_Aboriginal.js":68082,"./Script_Extensions/Carian.js":20152,"./Script_Extensions/Caucasian_Albanian.js":92117,"./Script_Extensions/Chakma.js":61853,"./Script_Extensions/Cham.js":87580,"./Script_Extensions/Cherokee.js":53542,"./Script_Extensions/Chorasmian.js":39028,"./Script_Extensions/Common.js":13182,"./Script_Extensions/Coptic.js":93109,"./Script_Extensions/Cuneiform.js":18145,"./Script_Extensions/Cypriot.js":93353,"./Script_Extensions/Cypro_Minoan.js":80197,"./Script_Extensions/Cyrillic.js":52851,"./Script_Extensions/Deseret.js":37871,"./Script_Extensions/Devanagari.js":77274,"./Script_Extensions/Dives_Akuru.js":59247,"./Script_Extensions/Dogra.js":11274,"./Script_Extensions/Duployan.js":56877,"./Script_Extensions/Egyptian_Hieroglyphs.js":67894,"./Script_Extensions/Elbasan.js":88071,"./Script_Extensions/Elymaic.js":34739,"./Script_Extensions/Ethiopic.js":26612,"./Script_Extensions/Georgian.js":22022,"./Script_Extensions/Glagolitic.js":535,"./Script_Extensions/Gothic.js":62332,"./Script_Extensions/Grantha.js":15043,"./Script_Extensions/Greek.js":97591,"./Script_Extensions/Gujarati.js":88859,"./Script_Extensions/Gunjala_Gondi.js":39072,"./Script_Extensions/Gurmukhi.js":38797,"./Script_Extensions/Han.js":79686,"./Script_Extensions/Hangul.js":51811,"./Script_Extensions/Hanifi_Rohingya.js":72066,"./Script_Extensions/Hanunoo.js":59922,"./Script_Extensions/Hatran.js":97509,"./Script_Extensions/Hebrew.js":52413,"./Script_Extensions/Hiragana.js":19357,"./Script_Extensions/Imperial_Aramaic.js":72436,"./Script_Extensions/Inherited.js":23926,"./Script_Extensions/Inscriptional_Pahlavi.js":46194,"./Script_Extensions/Inscriptional_Parthian.js":7421,"./Script_Extensions/Javanese.js":3442,"./Script_Extensions/Kaithi.js":48470,"./Script_Extensions/Kannada.js":29868,"./Script_Extensions/Katakana.js":53447,"./Script_Extensions/Kayah_Li.js":4937,"./Script_Extensions/Kharoshthi.js":46073,"./Script_Extensions/Khitan_Small_Script.js":83019,"./Script_Extensions/Khmer.js":14493,"./Script_Extensions/Khojki.js":12207,"./Script_Extensions/Khudawadi.js":18362,"./Script_Extensions/Lao.js":94095,"./Script_Extensions/Latin.js":42590,"./Script_Extensions/Lepcha.js":85310,"./Script_Extensions/Limbu.js":57743,"./Script_Extensions/Linear_A.js":74125,"./Script_Extensions/Linear_B.js":39801,"./Script_Extensions/Lisu.js":84339,"./Script_Extensions/Lycian.js":69037,"./Script_Extensions/Lydian.js":85522,"./Script_Extensions/Mahajani.js":17805,"./Script_Extensions/Makasar.js":13612,"./Script_Extensions/Malayalam.js":91433,"./Script_Extensions/Mandaic.js":44189,"./Script_Extensions/Manichaean.js":54534,"./Script_Extensions/Marchen.js":21846,"./Script_Extensions/Masaram_Gondi.js":69216,"./Script_Extensions/Medefaidrin.js":95579,"./Script_Extensions/Meetei_Mayek.js":72489,"./Script_Extensions/Mende_Kikakui.js":82533,"./Script_Extensions/Meroitic_Cursive.js":29605,"./Script_Extensions/Meroitic_Hieroglyphs.js":86868,"./Script_Extensions/Miao.js":82647,"./Script_Extensions/Modi.js":54007,"./Script_Extensions/Mongolian.js":37224,"./Script_Extensions/Mro.js":57842,"./Script_Extensions/Multani.js":83257,"./Script_Extensions/Myanmar.js":39244,"./Script_Extensions/Nabataean.js":44402,"./Script_Extensions/Nandinagari.js":19928,"./Script_Extensions/New_Tai_Lue.js":17277,"./Script_Extensions/Newa.js":64403,"./Script_Extensions/Nko.js":63302,"./Script_Extensions/Nushu.js":96505,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":60269,"./Script_Extensions/Ogham.js":22230,"./Script_Extensions/Ol_Chiki.js":35993,"./Script_Extensions/Old_Hungarian.js":53798,"./Script_Extensions/Old_Italic.js":95941,"./Script_Extensions/Old_North_Arabian.js":24227,"./Script_Extensions/Old_Permic.js":74473,"./Script_Extensions/Old_Persian.js":82163,"./Script_Extensions/Old_Sogdian.js":44864,"./Script_Extensions/Old_South_Arabian.js":27785,"./Script_Extensions/Old_Turkic.js":43656,"./Script_Extensions/Old_Uyghur.js":16369,"./Script_Extensions/Oriya.js":67379,"./Script_Extensions/Osage.js":15363,"./Script_Extensions/Osmanya.js":85983,"./Script_Extensions/Pahawh_Hmong.js":63122,"./Script_Extensions/Palmyrene.js":53259,"./Script_Extensions/Pau_Cin_Hau.js":74162,"./Script_Extensions/Phags_Pa.js":76393,"./Script_Extensions/Phoenician.js":5208,"./Script_Extensions/Psalter_Pahlavi.js":21011,"./Script_Extensions/Rejang.js":89824,"./Script_Extensions/Runic.js":3821,"./Script_Extensions/Samaritan.js":15727,"./Script_Extensions/Saurashtra.js":42441,"./Script_Extensions/Sharada.js":94355,"./Script_Extensions/Shavian.js":42679,"./Script_Extensions/Siddham.js":22464,"./Script_Extensions/SignWriting.js":83303,"./Script_Extensions/Sinhala.js":7548,"./Script_Extensions/Sogdian.js":19470,"./Script_Extensions/Sora_Sompeng.js":56111,"./Script_Extensions/Soyombo.js":69242,"./Script_Extensions/Sundanese.js":6212,"./Script_Extensions/Syloti_Nagri.js":43069,"./Script_Extensions/Syriac.js":47443,"./Script_Extensions/Tagalog.js":55388,"./Script_Extensions/Tagbanwa.js":60941,"./Script_Extensions/Tai_Le.js":22760,"./Script_Extensions/Tai_Tham.js":49977,"./Script_Extensions/Tai_Viet.js":52819,"./Script_Extensions/Takri.js":72704,"./Script_Extensions/Tamil.js":89299,"./Script_Extensions/Tangsa.js":2637,"./Script_Extensions/Tangut.js":64188,"./Script_Extensions/Telugu.js":22521,"./Script_Extensions/Thaana.js":14822,"./Script_Extensions/Thai.js":68557,"./Script_Extensions/Tibetan.js":3816,"./Script_Extensions/Tifinagh.js":24532,"./Script_Extensions/Tirhuta.js":22957,"./Script_Extensions/Toto.js":26794,"./Script_Extensions/Ugaritic.js":96609,"./Script_Extensions/Vai.js":30154,"./Script_Extensions/Vithkuqi.js":38193,"./Script_Extensions/Wancho.js":97657,"./Script_Extensions/Warang_Citi.js":41489,"./Script_Extensions/Yezidi.js":80587,"./Script_Extensions/Yi.js":99475,"./Script_Extensions/Zanabazar_Square.js":10047,"./index.js":39565,"./unicode-version.js":49857};function n(i){var s=a(i);return r(s)}function a(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}n.keys=function(){return Object.keys(t)},n.resolve=a,i.exports=n,n.id=89663},75876:function(){},14990:function(){},52274:function(){}},function(i){i.O(0,[545],(function(){return s=9690,i(i.s=s);var s}));i.O()}]);