'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "7e52e850c7aa08aaf46c86baaa386fe7",
"/": "7e52e850c7aa08aaf46c86baaa386fe7",
"main.dart.js": "82b7764a3a8e621cacdf3d74061582c3",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "5a975745cb85b3820922050ae6a4724f",
"assets/NOTICES": "611e4adacc3e5ddb8f5c5f7e7cafe865",
"assets/FontManifest.json": "91dff116db6cd111493928d245e2500a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/bruno/assets/images/icon_share_zone_disable.png": "2c5952d22b107c50f1e420e80c1cf549",
"assets/packages/bruno/assets/images/icon_arrow_up_selected.png": "05663a9913ee909e37f400eb84e9bab7",
"assets/packages/bruno/assets/images/icon_appraise_bad_selected.gif": "4872c821ba3b572004f941219656f927",
"assets/packages/bruno/assets/images/icon_more.png": "4e2d9f1ebe88bee022f89482ca4a0d34",
"assets/packages/bruno/assets/images/multi_select_btn_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/multi_select_btn_grey.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_star_size_selected.png": "d4391b3510c4d8f9e1331f8bb982367c",
"assets/packages/bruno/assets/images/icon_share_weChat.png": "c754f1d3aa4c27818c8f6ca80ad18254",
"assets/packages/bruno/assets/images/icon_share_wechat_disable.png": "05a5edf43878dfc59c925e540227321c",
"assets/packages/bruno/assets/images/icon_share_weibo.png": "1a03f06dc4e5b70ea2ba14dae7150f79",
"assets/packages/bruno/assets/images/network_error.png": "de30b8038a7fd8f543014ef7a27490e9",
"assets/packages/bruno/assets/images/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/images/icon_appraise_not_good_selected.gif": "d48c1ea3c907c5a4a46f2b484c1f3ae8",
"assets/packages/bruno/assets/images/img_step_title.png": "7baf56af65f5089205c05d9ef64ffe64",
"assets/packages/bruno/assets/images/icon_qrcode_failed.png": "d6e0bcb4ea8bb988a6fbd6554969a637",
"assets/packages/bruno/assets/images/icon_call_disable.png": "6fccb80d93cd9736558244e561dc3e09",
"assets/packages/bruno/assets/images/icon_refresh.png": "42d6492e745925d98af3b8ad42aac964",
"assets/packages/bruno/assets/images/icon_appraise_bad_unselected.png": "dc92c8bac4b471958ebd31b4e6665bb9",
"assets/packages/bruno/assets/images/img_unselected.png": "c34a63171059ea804d827dde75aad5fd",
"assets/packages/bruno/assets/images/icon_arrow_down_selected.png": "e7689a2bd3cecd5b8a8014251207427c",
"assets/packages/bruno/assets/images/icon_appraise_good_default.png": "0ba6515b918a139ddb87abd51490479e",
"assets/packages/bruno/assets/images/icon_share_save_image_disable.png": "8c3aedfd91f07816a75826036f6c0fa5",
"assets/packages/bruno/assets/images/icon_custom_share.png": "cf4fae2c0040e5b52b3732258480abb0",
"assets/packages/bruno/assets/images/two_line_bubble.png": "6a50dd5e33f3e3083d752f1138a03ae2",
"assets/packages/bruno/assets/images/icon_share_message_disable.png": "15a552749a4e5f7472e5686c6844f535",
"assets/packages/bruno/assets/images/icon_share_shareLink.png": "cf509f991da85af1159683d038d516e6",
"assets/packages/bruno/assets/images/empty_state.png": "6e96121087d0308ede162b11d26d0f82",
"assets/packages/bruno/assets/images/icon_multi_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/icon_arrow_down_unselected.png": "4ae009dcb0a9f37162cec27f804e5e90",
"assets/packages/bruno/assets/images/refresh_arrow_up.png": "06f0e8007d46db4355a186834352bc4d",
"assets/packages/bruno/assets/images/icon_im_blue.png": "fb2c916280bb0e2948129a279c8e9624",
"assets/packages/bruno/assets/images/icon_call.png": "0f8ec4efe41b0c61920869e87934cf21",
"assets/packages/bruno/assets/images/icon_share_moments.png": "2c6ca38609aa5748a5b450ca7a215577",
"assets/packages/bruno/assets/images/icon_star_size.png": "d27325d6cbfd2efa79a248d530fc6f26",
"assets/packages/bruno/assets/images/icon_share_browser_disable.png": "49ea2adab5e8c9ff6ad2f3bb7f0dd389",
"assets/packages/bruno/assets/images/icon_appraise_surprise_selected.gif": "dc449f267bceeb855eb55b288a3639b1",
"assets/packages/bruno/assets/images/icon_appraise_ok_unselected.png": "fc6373e1af9bf8ffb3c4b8c3400e48ad",
"assets/packages/bruno/assets/images/select_checked_status.png": "7b8079e5fa987209967ece5907ea4b25",
"assets/packages/bruno/assets/images/icon_share_qq.png": "0350a2534f77b75b98f9c15e3159c3ad",
"assets/packages/bruno/assets/images/img_network.png": "d167c2173c796824a9504dcea0cfeda6",
"assets/packages/bruno/assets/images/icon_appraise_good_selected.gif": "d9ab487859bfb6a19a2427b82bf1a263",
"assets/packages/bruno/assets/images/icon_share_zone.png": "19599a32fa9101c73048cee724265a69",
"assets/packages/bruno/assets/images/icon_appraise_surprise_unselected.png": "10c0f57c8f1a2046205e4a248d842f3a",
"assets/packages/bruno/assets/images/icon_im.png": "557b28ee7422dc8873227200b8301ca9",
"assets/packages/bruno/assets/images/icon_qrcode_bg.png": "58532720f3445299f09ff70a6917a0cc",
"assets/packages/bruno/assets/images/icon_share_copy.png": "95840c782c0f9269a5b8729e1fa8153f",
"assets/packages/bruno/assets/images/icon_refresh_white.png": "30b15e71573234d94e74fce849c24bb3",
"assets/packages/bruno/assets/images/icon_bottom_picker_right_top_bg.png": "7c53021ff2f4cea0088a5c2cb1dc2e42",
"assets/packages/bruno/assets/images/refresh_arrow_down.png": "fbba93502902aa07f6ef0b390ce4645d",
"assets/packages/bruno/assets/images/icon_appraise_not_good_unselected.png": "053bd691d3d446b072ef3dc1e1c54216",
"assets/packages/bruno/assets/images/icon_appraise_good_unselected.png": "c85ef408d0e975a3d75c691f3b0dbb77",
"assets/packages/bruno/assets/images/icon_share_save_image.png": "95ddc85d949f0ec24cb47a6887ed03f2",
"assets/packages/bruno/assets/images/icon_guanbi.png": "47d96168715e105ccc9375dd3563c7b9",
"assets/packages/bruno/assets/images/img_bg_blur.png": "af00b199cb0f5ffef5534b6e0820bf1a",
"assets/packages/bruno/assets/images/icon_unselect.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_share_moments_disable.png": "bdc02036f8ce03714468c70d49c83a2a",
"assets/packages/bruno/assets/images/icon_share_qq_disable.png": "8011a5fc6c34dfe555b5eb455d9fe4d6",
"assets/packages/bruno/assets/images/icon_share_shareLink_disable.png": "9cf769fd5f0cd8ef64b57d3d247e7511",
"assets/packages/bruno/assets/images/icon_share_message.png": "85f79bd5b5f2a5f5b4ac07f90bd8a1a7",
"assets/packages/bruno/assets/images/icon_appraise_surprise_default.png": "edb11f9f5ef607affc1d09c99eeff40e",
"assets/packages/bruno/assets/images/icon_share_copy_disable.png": "8b9408488dfe702510bfe31ec3d72303",
"assets/packages/bruno/assets/images/icon_appraise_bad_default.png": "5f225ab0e6aa5f4ddc6219fe62bba83f",
"assets/packages/bruno/assets/images/icon_share_browser.png": "5eff40cd995513e061aafdcef44fcfa9",
"assets/packages/bruno/assets/images/icon_share_weibo_disable.png": "b4e67d4a69c659b86cdea91f3641783d",
"assets/packages/bruno/assets/images/no_data.png": "28ebfceb62c9d49f284b9bf75148c3d4",
"assets/packages/bruno/assets/images/icon_appraise_ok_selected.gif": "f360d504d464729850fd6daafa8ca224",
"assets/packages/bruno/assets/images/icon_appraise_not_good_default.png": "928cee02f4b974ecded8221eda0b00aa",
"assets/packages/bruno/assets/images/img_bg_card.png": "a34f70556b8e474c60e114ee1f410507",
"assets/packages/bruno/assets/images/icon_single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/images/icon_appraise_ok_default.png": "f73afb9b00646474d42706ca84ac121d",
"assets/packages/bruno/assets/images/content_failed.png": "73d29e8b8616c64c0ccfb5880c98b507",
"assets/packages/bruno/assets/images/img_selecetd_default.png": "8af280beb2675b865cf355617f2226fb",
"assets/packages/bruno/assets/json/china.json": "981508d9619356a8deca0aa642792c51",
"assets/packages/bruno/assets/icons/icon_success.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/ic_delete_white.png": "6eab4791d9fa0c2728010017a68512c6",
"assets/packages/bruno/assets/icons/icon_remove_form_item.png": "9a88462a461975d461bb197af5a6ecd3",
"assets/packages/bruno/assets/icons/icon_notice_warning.png": "2fe3ddae808c90596d04a578a48c4011",
"assets/packages/bruno/assets/icons/icon_down_arrow.png": "2c15b9ff209677b7c53529976c942768",
"assets/packages/bruno/assets/icons/icon_step_5.png": "8a8e83032bf482ba223871ddf2630e83",
"assets/packages/bruno/assets/icons/icon_close.png": "762942ed622fe635bb59466b11e4561b",
"assets/packages/bruno/assets/icons/icon_notice_arrow_red.png": "137d23f3e3da680d036a59af62c79ab3",
"assets/packages/bruno/assets/icons/icon_result_error.png": "81f26e7d7490a9c6ea5d3e42e1eb4047",
"assets/packages/bruno/assets/icons/icon_star.png": "e1e54bf4c8d9056b3ee517141031ad31",
"assets/packages/bruno/assets/icons/icon_step_4.png": "8fadaffee25637ddbe8b70062bc650e4",
"assets/packages/bruno/assets/icons/icon_vr.png": "94c803a5c76c8256ef67e41cb7e9ceb5",
"assets/packages/bruno/assets/icons/radio/single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/icons/radio/disable_unselected.png": "5f196cbb452b315b25613063da054fbb",
"assets/packages/bruno/assets/icons/radio/disable_single_selected.png": "3aa5d5b7b39dc807a9a1d8b8f9acf3d5",
"assets/packages/bruno/assets/icons/radio/disable_multi_selected.png": "174498c62562e984225f7bf861680acd",
"assets/packages/bruno/assets/icons/radio/unselected.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/icons/radio/multiple_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/icons/icon_question.png": "9fd6f5871e8cc9f40894c361624deb40",
"assets/packages/bruno/assets/icons/icon_popup_close.png": "df80090a6d5835e479fee3b3b38778e9",
"assets/packages/bruno/assets/icons/icon_step_3.png": "7c5ea8faa747e4ee9b8998b28965711d",
"assets/packages/bruno/assets/icons/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/icons/icon_right_top_pointer.png": "708848d9a623023b92924c8f3d47d18e",
"assets/packages/bruno/assets/icons/icon_calendar_next_month.png": "b9c84144c187081ece2f336c526b009b",
"assets/packages/bruno/assets/icons/icon_step_2.png": "a3f473ee8f55c3e392294f44246ebec1",
"assets/packages/bruno/assets/icons/icon_trash.png": "db5c83b8bbe9ab076ee933d04b388334",
"assets/packages/bruno/assets/icons/icon_operation_line_left.png": "0ccda5dc91a237ef2d16504bb0569164",
"assets/packages/bruno/assets/icons/icon_notice_close_red.png": "e7b7deafe27c9eac751077f4bd86ec02",
"assets/packages/bruno/assets/icons/icon_triangle_up.png": "9077621b3ff296b3781c7708c117414f",
"assets/packages/bruno/assets/icons/icon_notice_close_green.png": "a27ab4db280eef98da5d199bde69aaf3",
"assets/packages/bruno/assets/icons/icon_notice_arrow_green.png": "3d956dce88dc751d75e2244196c89056",
"assets/packages/bruno/assets/icons/icon_bottom_btn.png": "702c79f6d0ca30a4990098bf3dc47538",
"assets/packages/bruno/assets/icons/grey_place_holder.png": "3ba32cbe47304f47ccc6b4aae9b757d5",
"assets/packages/bruno/assets/icons/icon_back_black.png": "cca96aa19663a5b81287305b221d717d",
"assets/packages/bruno/assets/icons/icon_add_form_item.png": "c213aec673e820a28db9356cfbdfabc9",
"assets/packages/bruno/assets/icons/icon_notice_succeed.png": "a46a9cda13903c86e156699c77779dd9",
"assets/packages/bruno/assets/icons/icon_minus_disable.png": "4cd4a2b9845f39958eb0c38fd1c224ef",
"assets/packages/bruno/assets/icons/icon_notice_arrow_orange.png": "8fd4c45816256c6b2e379d017dece60a",
"assets/packages/bruno/assets/icons/icon_calendar_pre_month.png": "2717508568bee63c78ea0c264e64cdba",
"assets/packages/bruno/assets/icons/icon_notice.png": "c586ee43118838efedfa3248a50a09b0",
"assets/packages/bruno/assets/icons/icon_step_doing.png": "052416a16da085ed675d56fe04f3ad3d",
"assets/packages/bruno/assets/icons/icon_audioplayer_play.png": "30e5d166c3c20d81219f68a84b30c798",
"assets/packages/bruno/assets/icons/icon_alter.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/icon_notice_close_blue.png": "c3ab1f9255f0fb302ca4918c0c64ab2a",
"assets/packages/bruno/assets/icons/icon_notice_fail.png": "c08cf38e0d6e093ca038de14d3b315fe",
"assets/packages/bruno/assets/icons/icon_pait_info_question.png": "c64b57553cae77b1152db3af431f1314",
"assets/packages/bruno/assets/icons/icon_require_red.png": "6c4a317ffbb7a17b69b3b226125e45e9",
"assets/packages/bruno/assets/icons/img_avatar_new.png": "0ffd52e7313c6dff8e3c89103b5858d0",
"assets/packages/bruno/assets/icons/normol_border.png": "085a0baefd58ffae2df2fd7ac910c64f",
"assets/packages/bruno/assets/icons/icon_add_disable.png": "027458e6fea11520a721a91bdb298884",
"assets/packages/bruno/assets/icons/ic_quotation_mark.png": "914d9400917d6228cfb69f138d1408cb",
"assets/packages/bruno/assets/icons/icon_unselected_triangle.png": "bd80c3d1eee62cbcf6dbdbc78492a8ad",
"assets/packages/bruno/assets/icons/ic_search.png": "73c7edd0a5b03093c160444cccf88542",
"assets/packages/bruno/assets/icons/icon_right_arrow.png": "87c35e448cf021b149a63f8e372f129c",
"assets/packages/bruno/assets/icons/icon_notice_close_orange.png": "375d658030ca161fcbd584a835cfb2db",
"assets/packages/bruno/assets/icons/icon_audioplayer_pause.png": "b90ac71697048651faa68a80a1b4153b",
"assets/packages/bruno/assets/icons/icon_warning.png": "c2234221b2383fd79589fc092b6ca01a",
"assets/packages/bruno/assets/icons/icon_operation_line_right.png": "3e6a6b76d9add9a7fe74b47fbcdd5ed5",
"assets/packages/bruno/assets/icons/icon_alert.png": "b862b889851253cff6fb8232bb005a6c",
"assets/packages/bruno/assets/icons/icon_result_success.png": "f4ee826d90a9b7a70d171a056f830ab8",
"assets/packages/bruno/assets/icons/icon_step_completed.png": "070166a539a87d7435bf5e41a5736a95",
"assets/packages/bruno/assets/icons/icon_notice_running.png": "0e220fad891161234dfa731d1baffc93",
"assets/packages/bruno/assets/icons/icon_notice_arrow_blue.png": "3665442af614981c25f03fa866e0bea6",
"assets/packages/bruno/assets/icons/icon_star_select.png": "9e81914b1d3165b0c2035da112e50191",
"assets/packages/bruno/assets/icons/icon_back_white.png": "c9e16d8495466af8cab275700e7dc663",
"assets/packages/bruno/assets/icons/icon_up_arrow.png": "759e41c12aee3ac9dba6f152b9b542ca",
"assets/packages/bruno/assets/icons/icon_add_enable.png": "7c54dd9ae8bd4ad34fdbe9ec9676a607",
"assets/packages/bruno/assets/icons/icon_star_unselect.png": "1eb3492bf235dd2e59872b749baf083d",
"assets/packages/bruno/assets/icons/icon_minus_enable.png": "80ead638d7a2ad2252debf08f26b0831",
"assets/packages/bruno/assets/icons/icon_selcted_triangle.png": "d4e3cd2db15e82e38c4e54da72247e49",
"assets/packages/bruno/assets/icons/icon_house_grey.png": "b5ca805d528b9fd83346d06b3bfcc915",
"assets/packages/bruno/assets/icons/icon_delete.png": "677eebfbf89ccd7895363bd88d90b9ea",
"assets/packages/bruno/assets/icons/ic_delete_grey.png": "ab70d1844f58c85c5dda3c0af9e5f163",
"assets/packages/bruno/assets/icons/icon_star_half.png": "db4a2f866101a2854c4d33dfdecc6128",
"assets/packages/bruno/assets/icons/icon_triangle_down.png": "5ed5a3c0527f0932406dd351df73647b",
"assets/packages/bruno/assets/fonts/Bebas-Regular.ttf": "6f6f82d9243d8111301f39648fb1d62b",
"assets/packages/lib_ylz_ui_kit/assets/icons/icon_pull.png": "8bde128c6fb2b6b0d3947c320703abba",
"assets/packages/lib_ylz_ui_kit/assets/icons/radio/radio_disable_uncheck.png": "270002e2d27d2c29580647dc270a8d38",
"assets/packages/lib_ylz_ui_kit/assets/icons/radio/radio_enable_uncheck.png": "5ba06f67c29df2ba90d847f1aaba2940",
"assets/packages/lib_ylz_ui_kit/assets/icons/radio/radio_disable_checked.png": "44f3ba613f4d1567b17838c1134ad31e",
"assets/packages/lib_ylz_ui_kit/assets/icons/radio/radio_enable_checked.png": "99f51fad845a71b24d59944920269603",
"assets/packages/lib_ylz_ui_kit/assets/icons/ic_right_arrow.png": "160d2abe7fdb0992899af73cea0d4875",
"assets/packages/lib_ylz_ui_kit/assets/icons/ic_info.png": "7c9ae9ce8285221e8602dc6d7459360b",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_drop_menu_checked.png": "338c069812ea5c4596d5531749e2262f",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_qzone.png": "b61d7e353e637244177fd0286c30aeb7",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_completed.png": "c67ac547a177acf058a0a079cf69bf1c",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_img_delete.png": "9803017332da4b3fb67e5910d2dc4f97",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_photo.png": "390b37ce2deac3f04934a525fd8f1f22",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_picker_tag_checked.png": "e8a601aa62ee283991ff0b57abca823c",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_qq.png": "980e0947b2716b5352364c2ee7b59eac",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_link.png": "89127ee7d4429cc14f1ae3ecd5a51030",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_wx_circle.png": "b3d7893ba3d522108db438c8ddfaf569",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_progress_failure.png": "54289fe6c1b7ef6af3d793b42b30fc28",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_weibo.png": "8880bcf2edc47230d259e591ce16ae0e",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_close_black.png": "376ab0179d46e38cc4b6e05f25309ff9",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_wx.png": "81ffaaa59c1afc37f6780d88503b40d8",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_photo_close_bg.png": "815e5f4f8960afec8177aee7805d7c8f",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_take_photo.png": "9e4ad203a68fed02c73bbaeb446ba97e",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_albumn.png": "41dc38206c026db64ca1368c17cc3a48",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_completed_without_bound.png": "a5b68c64f7f2bf2374bbd371a7c5aceb",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_progress_success.png": "97c758cdf427decf5b64f618d1e41091",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_collection.png": "4d7da44b0137ac74a7c33dd66da2a036",
"assets/packages/lib_ylz_ui_kit/assets/icons/action/ic_qrcode.png": "e49692801a0c0d0197e05841ca30baa9",
"assets/packages/lib_ylz_ui_kit/assets/icons/ic_search.png": "73c7edd0a5b03093c160444cccf88542",
"assets/packages/lib_ylz_ui_kit/assets/icons/icon_right_arrow.png": "87c35e448cf021b149a63f8e372f129c",
"assets/packages/lib_ylz_ui_kit/assets/icons/icon_dialog_close.png": "f123985c902466ab6e346e084e4c7f05",
"assets/packages/lib_ylz_ui_kit/assets/icons/ic_delete_grey.png": "ab70d1844f58c85c5dda3c0af9e5f163",
"assets/packages/lib_ylz_camera/images/icon_head.png": "41c6a0ee6d3202ec7b8a26e2479f881d",
"assets/packages/lib_ylz_camera/images/icon_national_emblem.png": "b476b9458e57fea68bb46145b0f2ad90",
"assets/shaders/ink_sparkle.frag": "f8aac1b75319e3edf46758a06f94c212",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/customview_filter.json": "f23fda7d3a298242b36b2aea60218b62",
"assets/assets/flat_selection_filter.json": "57389b65101b8e4d2f1df8b5794155f1",
"assets/assets/multi_range_filter.json": "a930ae673a46ec24bd769bb01f3c2262",
"assets/assets/customhandle_filter.json": "e855a25cc675eba73a2dae4beb7ed717",
"assets/assets/more_filter.json": "24e17989a81a3d44c79ea0fffda28619",
"assets/assets/china.json": "981508d9619356a8deca0aa642792c51",
"assets/assets/date_range_filter.json": "6c4c4b813b51d10965e688e6bf87a0c5",
"assets/assets/image/icon_navbar_xiala_hei.png": "3aede6bfeb4d66e7a0be7625a13f5d7b",
"assets/assets/image/icon_navbar_pin_bai.png": "6de13780c3a32d4e4d9e1f26d4abf8b6",
"assets/assets/image/arrow_up.png": "1954220ba1b6900075bf352ac6f6213c",
"assets/assets/image/icon_navbar_focus_hei.png": "54c6e129b4b771297a392390b520a4cd",
"assets/assets/image/network_error.png": "de30b8038a7fd8f543014ef7a27490e9",
"assets/assets/image/image_sticky_bg.jpg": "ac826a67a0c5ae215023cc2e764639da",
"assets/assets/image/icon_navbar_im_hei.png": "79f50cfbeeb3544305bb6922901451a0",
"assets/assets/image/icon_refresh.png": "5a93012e46cb75f57cdcd76929fd844f",
"assets/assets/image/icon_navbar_xiala_bai.png": "a0c6fa11bc205eab6498d0d04550f747",
"assets/assets/image/icon_navbar_pin_hei.png": "912decb2292ca82a66ff1452a625cef0",
"assets/assets/image/empty_state.png": "6e96121087d0308ede162b11d26d0f82",
"assets/assets/image/icon_triangle.png": "466632dfae84e37ac58f8e45ded1adb7",
"assets/assets/image/icon_navbar_focus_bai.png": "5fd8e3343a5c04d954cb16b32e230740",
"assets/assets/image/icon_toast_success.png": "a3ad6c60a1fe55cd8a3a219a6f27d1c0",
"assets/assets/image/icon_navbar_im_bai.png": "3a3521ab5469138e666999e14c921b87",
"assets/assets/image/icon_navbar_share_hei.png": "367b79d488527ef906ac0844539ad56c",
"assets/assets/image/icon_navbar_add_bai.png": "6755030d187d348a37f3ee2dfdc6cc48",
"assets/assets/image/icon_navbar_close_hei.png": "6155d841364ce766da4f17062601975a",
"assets/assets/image/icon_navbar_sousuo_bai.png": "82903ec3e7ab0df413eab5aeb624f82c",
"assets/assets/image/icon_theme.png": "7e9d7bbd852b9507f844fe7317c15664",
"assets/assets/image/icon_clear_grey.png": "6eab4791d9fa0c2728010017a68512c6",
"assets/assets/image/default_empty.png": "a605fa2fbd44e95b10766bcc8baaffe0",
"assets/assets/image/icon_navbar_add_hei.png": "71fb93400352c9e4c0ad2c2bcf6d0c66",
"assets/assets/image/icon_navbar_share_bai.png": "f7899669891ffaab0698ce398cb727ed",
"assets/assets/image/icon_navbar_close_bai.png": "e6c90a4f996132eebb949bdc6707525f",
"assets/assets/image/no_data.png": "28ebfceb62c9d49f284b9bf75148c3d4",
"assets/assets/image/icon_navbar_sousuo_hei.png": "f2f7e2b3f21ca60deb5b10d1edf91642",
"assets/assets/image/content_failed.png": "73d29e8b8616c64c0ccfb5880c98b507",
"assets/assets/image/icon_toast_fail.png": "8b9e0849d108babb7f09ae21dcdee06e",
"assets/assets/list_filter_maxcount_test.json": "30ad3bb457674db2dca0bd511331fee5",
"assets/assets/icons/navbar_house.png": "907e2e99bba03743372a07fcc149d053",
"assets/assets/more_custom_floating_layer_filter.json": "9d91c3671ffcdab56a16c3bc1d035cdc",
"assets/assets/multi_list_filter.json": "5e79634eafbe123b319ad7316b01b7eb",
"assets/assets/brokenline_data.json": "9d87aba9a16503e615c3f019a7773940",
"assets/assets/list_picker.json": "f22c651e101564e2877b5c4072e6d8ac",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
