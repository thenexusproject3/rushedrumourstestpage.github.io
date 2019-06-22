<?php

$inlineOperations = '[
    {
        "insert": "Quasar rich in mystery Apollonius of Perga concept of the number one rich in mystery! Apollonius of Perga, rogue, hearts of the stars, brain is the seed of intelligence dispassionate extraterrestrial observer finite but unbounded. Tingling of the spine kindling the energy hidden in matter gathered by gravity science Apollonius of Perga Euclid cosmic fugue gathered by gravity take root and flourish dream of the mind\'s eye descended from astronomers ship of the imagination vastness is bearable only through love with pretty stories for which there\'s little good evidence Orion\'s sword. Trillion a billion trillion Apollonius of Perga, not a sunrise but a galaxyrise the sky calls to us! Descended from astronomers?\n"
    },
    {
        "attributes": {
            "codeInline": true
        },
        "insert": "Code Inline"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "Bold"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "italic"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true,
            "bold": true
        },
        "insert": "bold italic"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "strike": true,
            "italic": true,
            "bold": true
        },
        "insert": "bold italic strike"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "strike": true,
            "italic": true,
            "bold": true,
            "link": "http://test.com"
        },
        "insert": "bold italic strike link"
    },
    {
        "insert": "\nSome text with a mention in it "
    },
    {
        "insert": {
            "mention": {
                "name": "Alex Other Name",
                "userID": 23
            }
        }
    },
    {
        "insert": " Another mention "
    },
    {
        "insert": {
            "mention": {
                "name": "System",
                "userID": 1
            }
        }
    },
    {
        "insert": ".\nSome text with emojis"
    },
    {
        "insert": {
            "emoji": {
                "emojiChar": "🤗"
            }
        }
    },
    {
        "insert": {
            "emoji": {
                "emojiChar": "🤔"
            }
        }
    },
    {
        "insert": {
            "emoji": {
                "emojiChar": "🤣"
            }
        }
    },
    {
        "insert": ".\n"
    }
]
';

$blockOperations = '[
    { "insert": "Block operations H1 Title here. Code Block next." },
    { "attributes": { "header": 1 }, "insert": "\n" },
    { "insert": "/** " },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": " *adds locale data to the view, and adds a respond button to the discussion page." },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": " */" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "class MyThemeNameThemeHooks extends Gdn_Plugin {" },
    { "attributes": { "codeBlock": true }, "insert": "\n\n" },
    { "insert": "    /**" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "     * Fetches the current locale and sets the data for the theme view." },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "     * Render the locale in a smarty template using {$locale}" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "     *" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "     * @param  Controller $sender The sending controller object." },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "     */" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    {
        "insert":
            "    public function base_render_beforebase_render_beforebase_render_beforebase_render_beforebase_render_before($sender) {"
    },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "        // Bail out if we\'re in the dashboard" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "        if (inSection(\'Dashboard\')) {" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "            return;" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "        }" },
    { "attributes": { "codeBlock": true }, "insert": "\n\n" },
    { "insert": "        // Fetch the currently enabled locale (en by default)" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "        $locale = Gdn::locale()->current();" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "        $sender->setData(\'locale\', $locale);" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "    }" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "}" },
    { "attributes": { "codeBlock": true }, "insert": "\n" },
    { "insert": "\nH2 Here. Spoiler next" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    { "insert": "Some Spoiler content with formatting " },
    { "attributes": { "bold": true }, "insert": "bold" },
    { "insert": " " },
    { "attributes": { "italic": true }, "insert": "italic " },
    { "attributes": { "strike": true }, "insert": "strike" },
    { "attributes": { "spoiler-line": true }, "insert": "\n\n\n" },
    { "insert": "Newlines above " },
    { "attributes": { "link": "test link" }, "insert": "Link" },
    { "attributes": { "spoiler-line": true }, "insert": "\n" },
    { "insert": "Another line" },
    { "attributes": { "spoiler-line": true }, "insert": "\n" },
    { "insert": "\nA blockquote will be next.\n\nSome Block quote content" },
    { "attributes": { "bold": true }, "insert": "bold" },
    { "insert": " " },
    { "attributes": { "italic": true }, "insert": "italic " },
    { "attributes": { "strike": true }, "insert": "strike" },
    { "attributes": { "blockquote-line": true }, "insert": "\n" },
    { "attributes": { "strike": true }, "insert": "More blockquote content" },
    { "attributes": { "blockquote-line": true }, "insert": "\n" },
    { "insert": "\n\n" },
    { "insert": "Unordered List\nLine 1" },
    { "attributes": { "list": "bullet" }, "insert": "\n" },
    { "insert": "Line 2 (2 empty list items after this)" },
    { "attributes": { "list": "bullet" }, "insert": "\n\n\n" },
    { "insert": "Line 5 item with " },
    { "attributes": { "bold": true }, "insert": "bold and a " },
    { "attributes": { "bold": true, "link": "https://vanillaforums.com" }, "insert": "link" },
    { "attributes": { "bold": true }, "insert": "." },
    { "attributes": { "list": "bullet" }, "insert": "\n" },
    { "insert": "Line 6 item with an emoji" },
    { "insert": { "emoji": { "emojiChar": "😉" } } },
    { "insert": "." },
    { "attributes": { "list": "bullet" }, "insert": "\n" },
    { "insert": "Ordered List\nNumber 1" },
    { "attributes": { "list": "ordered" }, "insert": "\n" },
    { "insert": "Number 2" },
    { "attributes": { "list": "ordered" }, "insert": "\n" },
    { "insert": "Number 3 (Empty line below)" },
    { "attributes": { "list": "ordered" }, "insert": "\n\n" },
    { "insert": "Number 5 with " },
    { "attributes": { "bold": true }, "insert": "bold and a " },
    { "attributes": { "bold": true, "link": "https://vanillaforums.com/" }, "insert": "link" },
    { "attributes": { "bold": true }, "insert": "." },
    { "attributes": { "list": "ordered" }, "insert": "\n" },
    { "insert": "\n" }
]'
;

$embedOperations = '[
    { "insert": "Imgur:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://imgur.com/gallery/arP2Otg",
                    "type": "imgur",
                    "name": null,
                    "body": null,
                    "photoUrl": null,
                    "height": null,
                    "width": null,
                    "attributes": { "postID": "arP2Otg", "isAlbum": false }
                },
                "loaderData": { "type": "link", "link": "https://imgur.com/gallery/arP2Otg", "loaded": true }
            }
        }
    },
    { "insert": "Image:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url":
                        "http://www.worldoceansday.org/_assets/css/images/events/8075118_2_IMG_1262CoastOceanSky.jpg",
                    "type": "image",
                    "name": null,
                    "body": null,
                    "photoUrl":
                        "http://www.worldoceansday.org/_assets/css/images/events/8075118_2_IMG_1262CoastOceanSky.jpg",
                    "height": 3787,
                    "width": 5809,
                    "attributes": []
                },
                "loaderData": {
                    "type": "link",
                    "link":
                        "http://www.worldoceansday.org/_assets/css/images/events/8075118_2_IMG_1262CoastOceanSky.jpg",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Twitter:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://twitter.com/hootsuite/status/1009883861617135617",
                    "type": "twitter",
                    "name": null,
                    "body": null,
                    "photoUrl": null,
                    "height": null,
                    "width": null,
                    "attributes": { "statusID": "1009883861617135617" }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://twitter.com/hootsuite/status/1009883861617135617",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Getty:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url":
                        "https://www.gettyimages.ca/detail/photo/explosion-of-a-cloud-of-powder-of-particles-of-royalty-free-image/810147408",
                    "type": "getty",
                    "name": null,
                    "body": null,
                    "photoUrl": null,
                    "height": 345,
                    "width": 498,
                    "attributes": {
                        "id": "VPkxdgtCQFx-rEo96WtR_g",
                        "sig": "Mb27fqjaYbaPPFANi1BffcYTEvCcNHg0My7qzCNDSHo=",
                        "items": "810147408",
                        "isCaptioned": "false",
                        "is360": "false",
                        "tld": "com",
                        "postID": "810147408"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link":
                        "https://www.gettyimages.ca/detail/photo/explosion-of-a-cloud-of-powder-of-particles-of-royalty-free-image/810147408",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Vimeo:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://vimeo.com/264197456",
                    "type": "vimeo",
                    "name": "Vimeo",
                    "body": null,
                    "photoUrl": "https://i.vimeocdn.com/video/694532899_640.jpg",
                    "height": 272,
                    "width": 640,
                    "attributes": {
                        "thumbnail_width": 640,
                        "thumbnail_height": 272,
                        "videoID": "264197456",
                        "embedUrl": "https://player.vimeo.com/video/264197456?autoplay=1"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://vimeo.com/264197456",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Youtube:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://www.youtube.com/watch?v=fy0fTFpqT48&t=2s",
                    "type": "youtube",
                    "name": "Attack of the Killer Tomatoes - Trailer",
                    "body": null,
                    "photoUrl": "https://i.ytimg.com/vi/fy0fTFpqT48/hqdefault.jpg",
                    "height": 344,
                    "width": 459,
                    "attributes": {
                        "thumbnail_width": 480,
                        "thumbnail_height": 360,
                        "videoID": "fy0fTFpqT48",
                        "start": 2,
                        "embedUrl": "https://www.youtube.com/embed/fy0fTFpqT48?feature=oembed&autoplay=1&start=2"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://www.youtube.com/watch?v=fy0fTFpqT48&t=2s",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Instagram:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://www.instagram.com/p/BTjnolqg4po/?taken-by=vanillaforums",
                    "type": "instagram",
                    "name": null,
                    "body": null,
                    "photoUrl": null,
                    "height": null,
                    "width": null,
                    "attributes": {
                        "permaLink": "https://www.instagram.com/p/BTjnolqg4po",
                        "isCaptioned": true,
                        "versionNumber": "8"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://www.instagram.com/p/BTjnolqg4po/?taken-by=vanillaforums",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Soundcloud:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://soundcloud.com/uiceheidd/sets/juicewrld-the-mixtape",
                    "type": "soundcloud",
                    "name": null,
                    "body": null,
                    "photoUrl": null,
                    "height": 450,
                    "width": null,
                    "attributes": {
                        "visual": "true",
                        "showArtwork": "true",
                        "postID": "330864225",
                        "embedUrl": "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://soundcloud.com/uiceheidd/sets/juicewrld-the-mixtape",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Giphy:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
                    "type": "giphy",
                    "name": "Funny Cat GIF - Find & Share on GIPHY",
                    "body": null,
                    "photoUrl": null,
                    "height": 720,
                    "width": 720,
                    "attributes": { "postID": "JIX9t2j0ZTN9S" }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Twitch:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://www.twitch.tv/videos/277077149",
                    "type": "twitch",
                    "name": "SamedWii Zeldaérobic",
                    "body": null,
                    "photoUrl":
                        "https://static-cdn.jtvnw.net/s3_vods/9e05228597e840e180f3_hoopyjv_29218011904_894795907/thumb/thumb0-640x360.jpg",
                    "height": 281,
                    "width": 500,
                    "attributes": { "videoID": "277077149", "embedUrl": "https://player.twitch.tv/?video=v277077149" }
                },
                "loaderData": { "type": "link", "link": "https://www.twitch.tv/videos/277077149", "loaded": true }
            }
        }
    },
    { "insert": "External No Image" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://www.google.ca/search?q=typing+google+in+google",
                    "type": "link",
                    "name": "typing google in google - Google Search",
                    "body": "typing google into google meme",
                    "photoUrl": null,
                    "height": null,
                    "width": null,
                    "attributes": []
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://www.google.ca/search?q=typing+google+in+google",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "Exernal With Image" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://vanillaforums.com/en/",
                    "type": "link",
                    "name": "Online Community Software and Customer Forum Software by Vanilla Forums",
                    "body":
                        "Engage your customers with a vibrant and modern online customer community forum. A customer community helps to increases loyalty, reduce support costs and deliver feedback.",
                    "photoUrl": "https://vanillaforums.com/images/metaIcons/vanillaForums.png",
                    "height": null,
                    "width": null,
                    "attributes": []
                },
                "loaderData": { "type": "link", "link": "https://vanillaforums.com/en/", "loaded": true }
            }
        }
    },
    { "insert": "Wistia:" },
    { "attributes": { "header": 2 }, "insert": "\n" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://dave.wistia.com/medias/0k5h1g1chs",
                    "type": "wistia",
                    "name": "Lenny Delivers a Video - oEmbed glitch",
                    "body": null,
                    "photoUrl":
                        "https://embed-ssl.wistia.com/deliveries/99f3aefb8d55eef2d16583886f610ebedd1c6734.jpg?image_crop_resized=960x540",
                    "height": 540,
                    "width": 960,
                    "attributes": {
                        "thumbnail_width": 960,
                        "thumbnail_height": 540,
                        "postID": "0k5h1g1chs",
                        "embedUrl": "https://fast.wistia.net/embed/iframe/0k5h1g1chs"
                    }
                },
                "loaderData": { "type": "link", "link": "https://dave.wistia.com/medias/0k5h1g1chs", "loaded": true }
            }
        }
    },
    { "insert": "" },
    {
        "insert": {
            "embed-external": {
                "data": {
                    "url": "https://vanillaforums-1.wistia.com/medias/vjidqnyg0a",
                    "type": "wistia",
                    "name": "Borrowed video: Welcome to Wistia!",
                    "body": null,
                    "photoUrl":
                        "https://embed-ssl.wistia.com/deliveries/1e7b480521adb0d8cc29dbd388faa14eb7c99d21.jpg?image_crop_resized=960x540",
                    "height": 540,
                    "width": 960,
                    "attributes": {
                        "thumbnail_width": 960,
                        "thumbnail_height": 540,
                        "postID": "vjidqnyg0a",
                        "embedUrl": "https://fast.wistia.net/embed/iframe/vjidqnyg0a"
                    }
                },
                "loaderData": {
                    "type": "link",
                    "link": "https://vanillaforums-1.wistia.com/medias/vjidqnyg0a",
                    "loaded": true
                }
            }
        }
    },
    { "insert": "\n" }
]';

echo "<div class='Item-Body'><div class='Message userContent'>";
echo "<h1>Inline operations</h1>";
echo Gdn_Format::rich($inlineOperations);
echo "<hr>";
echo "<h1>Block operations</h1>";
echo Gdn_Format::rich($blockOperations);
echo "<hr>";
echo "<h1>Embed operations</h1>";
echo Gdn_Format::rich($embedOperations);
echo "</div></div>";
