
            /** Auto generated module */
            class MetaTagUtil {
                constructor() {
                    this.metaMap = new Map();
                    this.metaMap.set("/article/001-progressive-web-blog", {title:'🌏 Hello World! Progressive Web-Blog!! その１',subtitle:'Web ComponentsでPWAなブログを作ってみた。[初回Loading編]',imgsrc:'http://raredelights.com/wp-content/uploads/2013/06/Googles-Exquisite-Office-in-Tokyo-2.jpg'});this.metaMap.set("/", {title:'かきます',subtitle:'めんどくさがるなおれ',imgsrc:''});this.metaMap.set("/", {title:'かかせてください',subtitle:'がんばれおれ',imgsrc:''});this.metaMap.set("/", {title:'おねがいします',subtitle:'めげるなおれ',imgsrc:''});
                }
                
                getMetaTag(path) {
                    return `
                        <meta property="og:title" content="${this.metaMap.get(path).title}" />
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content="${path}" />
                        <meta property="og:image" content="${this.metaMap.get(path).imgsrc}" />
                        <meta property="og:site_name" content="ウェブボウズ" />
                        <meta property="og:description" content="${this.metaMap.get(path).subtitle}" />
                        <meta property="fb:app_id" content="1786319984995103" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="uskay" />
                        <meta name="twitter:creator" content="uskay" />
                        `
                }
            }
            module.exports = MetaTagUtil;
        