define(function () {
  return {
    name: "@font-face",
    description: "The @font-face rule lets you use any font as a web font. It is supported by the majority of browsers. While all browsers support the syntax, not every browser supports the same font format.",
    keywords: ['@font-face', 'fontface', 'font face', 'font', 'webfont'],
    browsers: [
      { name: "ie", range: "-", support: "yes", note: "Internet Explorer 6, 7, and 8 only support the Embedded OpenType (EOT) format. Internet Explorer 9 and above supports multiple formats." },
      { name: "chrome", range: "-", support: "yes" },
      { name: "firefox", range: "-", support: "yes" },
      { name: "safari", range: "-", support: "yes" },
      { name: "ios", range: "-", support: "yes", note: "Safari for iOS 3.2 to 4.1 only support SVG fonts." },
      { name: "opera", range: "-", support: "yes" },
      { name: "android", range: "-", support: "yes" }
    ],
    features: [
      {
        name: "font-family",
        keywords: ['font-family', 'family', 'font', 'typeface'],
        browsers: [
          { name: "ie", range: "-", support: "yes", note: "Internet Explorer limits the length of a font-family to 32 characters." },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "src",
        keywords: ['font', 'src'],
        browsers: [
          { name: "ie", range: "6-8", support: "partial", note: "Internet Explorer 6 to 8 only support a single url." },
          { name: "ie", range: "9-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ],
        features: [
          {
            name: "WOFF",
            keywords: ['woff', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-8", support: "no", note: "Internet Explorer 6 to 8 only support Embedded OpenType (EOT)." },
              { name: "ie", range: "9-", support: "yes" },
              { name: "chrome", range: "4", support: "no" },
              { name: "chrome", range: "5-", support: "yes" },
              { name: "firefox", range: "-", support: "yes" },
              { name: "safari", range: "-5", support: "no" },
              { name: "safari", range: "5.1-", support: "yes" },
              { name: "ios", range: "-4.3", support: "no" },
              { name: "ios", range: "5.1-", support: "yes" },
              { name: "opera", range: "-11", support: "no" },
              { name: "opera", range: "11.1", support: "yes" },
              { name: "android", range: "-4.3", support: "no" },
              { name: "android", range: "4.4-", support: "yes" }
            ]
          },
          {
            name: "WOFF2",
            keywords: ['woff', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-", support: "no" },
              { name: "chrome", range: "-35", support: "no" },
              { name: "chrome", range: "36-", support: "yes" },
              { name: "firefox", range: "-", support: "no" },
              { name: "safari", range: "-", support: "no" },
              { name: "ios", range: "-", support: "no" },
              { name: "opera", range: "-22", support: "no" },
              { name: "opera", range: "23-", support: "yes" },
              { name: "android", range: "-", support: "no" }
            ]
          },
          {
            name: "EOT",
            keywords: ['eot', 'format', 'web font format', 'font format', 'embedded opentype'],
            browsers: [
              { name: "ie", range: "-", support: "yes", note: "The EOT format only supports embedding TrueType fonts in Internet Explorer 8 and below." },
              { name: "chrome", range: "-", support: "no" },
              { name: "firefox", range: "-", support: "no" },
              { name: "safari", range: "-", support: "no" },
              { name: "ios", range: "-", support: "no" },
              { name: "opera", range: "-", support: "no" },
              { name: "android", range: "-", support: "no" }
            ]
          },
          {
            name: "TTF/OTF",
            keywords: ['ttf', 'truetype', 'opentype', 'otf', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-8", support: "no" },
              { name: "ie", range: "9-", support: "yes", note: "The fonts need their installable bit set for fonts to load." },
              { name: "chrome", range: "-", support: "yes" },
              { name: "firefox", range: "-", support: "yes" },
              { name: "safari", range: "-", support: "yes" },
              { name: "ios", range: "-4.1", support: "no" },
              { name: "ios", range: "4.3-", support: "yes" },
              { name: "opera", range: "-", support: "yes" },
              { name: "android", range: "-", support: "yes", note: "Due to a bug fonts need their installable bit set between versions 3.1 and 4.1." }
            ]
          },
          {
            name: "SVG fonts",
            keywords: ['svg', 'vector', 'scalable', 'graphics', 'format', 'web font format', 'font format'],
            browsers: [
              { name: "ie", range: "-", support: "no" },
              { name: "firefox", range: "-", support: "no" },
              { name: "chrome", range: "-37", support: "yes" },
              { name: "chrome", range: "38-", support: "partial", note: "Starting from Chrome 38 SVG fonts are disabled on all platforms except Windows XP and Windows Vista. On these platforms SVG fonts still work but are deprecated." },
              { name: "safari", range: "-", support: "yes" },
              { name: "opera", range: "-24", support: "yes" },
              { name: "opera", range: "25-", support: "yes", note: "Starting from Opera 25 SVG fonts are disabled on all platforms except Windows XP and Windows Vista. On these platforms SVG fonts still work but are deprecated." },
              { name: "android", range: "-2.3", support: "no" },
              { name: "android", range: "3-", support: "yes" }
            ]
          }
        ]
      },
      {
        name: "font-weight",
        keywords: ['font-weight', 'bold', 'weight'],
        browsers: [
          { name: "ie", range: "-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "font-style",
        keywords: ['font-style', 'style', 'italic', 'oblique'],
        browsers: [
          { name: "ie", range: "-", support: "yes" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "yes" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-", support: "yes" },
          { name: "android", range: "-", support: "yes" }
        ]
      },
      {
        name: "font-stretch",
        keywords: ['font-stretch', 'stretch', 'condensed', 'expanded'],
        browsers: [
          { name: "ie", range: "-8", support: "no" },
          { name: "ie", range: "9-", support: "yes" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-8", support: "yes", note: "Firefox 3.6 to 8 on Windows do not support font-stretch. The font-stretch property is supported from version 3.6 on all other platforms." },
          { name: "firefox", range: "8-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        name: "font-variant",
        keywords: ['font-variant', 'variant', 'small-caps'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "ios", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "opera", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." },
          { name: "android", range: "-", support: "no", note: "Web fonts fail to render if font-variant is used within @font-face." }
        ]
      },
      {
        name: "font-feature-settings",
        description: "The font-feature-settings property can be used to set default OpenType features within @font-face rules.",
        keywords: ['font-feature-settings', 'feature-settings', 'feature', 'features', 'ligatures', 'small-caps', 'opentype'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "no" },
          { name: "firefox", range: "-19", support: "no" },
          { name: "firefox", range: "20-", support: "yes" },
          { name: "safari", range: "-", support: "no" },
          { name: "ios", range: "-", support: "no" },
          { name: "opera", range: "-", support: "no" },
          { name: "android", range: "-", support: "no" }
        ]
      },
      {
        // This needs a bit more work. We also need to define what support means.
        // Several browsers can use this property to define which characters are
        // supported by a web font, but don't use this information to download
        // only the web fonts that are needed.
        name: "unicode-range",
        keywords: ['unicode-range', 'range', 'unicode', 'subset'],
        browsers: [
          { name: "ie", range: "-", support: "no" },
          { name: "chrome", range: "-", support: "yes" },
          { name: "firefox", range: "-", support: "no" },
          { name: "safari", range: "-", support: "yes" },
          { name: "ios", range: "-", support: "yes" },
          { name: "opera", range: "-12.16", support: "no" },
          { name: "opera", range: "15-", support: "yes" },
          { name: "android", range: "-3", support: "no" },
          { name: "android", range: "4-", support: "yes" }
        ]
      }
    ]
  };
});
