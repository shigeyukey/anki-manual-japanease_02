// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="intro.html">はじめに</a></li><li class="chapter-item "><a href="background.html"><strong aria-hidden="true">1.</strong> 背景</a></li><li class="chapter-item "><a href="platform/intro.html"><strong aria-hidden="true">2.</strong> プラットフォームノート</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/windows/installing.html"><strong aria-hidden="true">2.1.</strong> Windows</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/windows/installing.html"><strong aria-hidden="true">2.1.1.</strong> インストールとアップグレード</a></li><li class="chapter-item "><a href="platform/windows/installation-issues.html"><strong aria-hidden="true">2.1.2.</strong> インストールの問題</a></li><li class="chapter-item "><a href="platform/windows/startup-issues.html"><strong aria-hidden="true">2.1.3.</strong> 起動の問題</a></li><li class="chapter-item "><a href="platform/windows/display-issues.html"><strong aria-hidden="true">2.1.4.</strong> 表示の問題</a></li><li class="chapter-item "><a href="platform/windows/copy-and-paste.html"><strong aria-hidden="true">2.1.5.</strong> コピー＆ペーストの問題</a></li><li class="chapter-item "><a href="platform/windows/text-size.html"><strong aria-hidden="true">2.1.6.</strong> テキストサイズ</a></li><li class="chapter-item "><a href="platform/windows/permission-problems.html"><strong aria-hidden="true">2.1.7.</strong> 権限の問題</a></li></ol></li><li class="chapter-item "><a href="platform/mac/installing.html"><strong aria-hidden="true">2.2.</strong> macOS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/mac/installing.html"><strong aria-hidden="true">2.2.1.</strong> インストールとアップグレード</a></li><li class="chapter-item "><a href="platform/mac/display-issues.html"><strong aria-hidden="true">2.2.2.</strong> 表示の問題</a></li></ol></li><li class="chapter-item "><a href="platform/linux/installing.html"><strong aria-hidden="true">2.3.</strong> Linux</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/linux/installing.html"><strong aria-hidden="true">2.3.1.</strong> インストールとアップグレード</a></li><li class="chapter-item "><a href="platform/linux/missing-libraries.html"><strong aria-hidden="true">2.3.2.</strong> ライブラリが見つからない</a></li><li class="chapter-item "><a href="platform/linux/display-issues.html"><strong aria-hidden="true">2.3.3.</strong> 表示の問題</a></li><li class="chapter-item "><a href="platform/linux/blank-window.html"><strong aria-hidden="true">2.3.4.</strong> メインウィンドウが空白</a></li><li class="chapter-item "><a href="platform/linux/distro-packages.html"><strong aria-hidden="true">2.3.5.</strong> Linuxディストロパッケージ</a></li><li class="chapter-item "><a href="platform/linux/gtk-theme.html"><strong aria-hidden="true">2.3.6.</strong> GTKテーマが正しくない</a></li><li class="chapter-item "><a href="platform/linux/wayland.html"><strong aria-hidden="true">2.3.7.</strong> Wayland</a></li><li class="chapter-item "><a href="platform/linux/input-methods.html"><strong aria-hidden="true">2.3.8.</strong> 入力方法</a></li></ol></li></ol></li><li class="chapter-item "><a href="getting-started.html"><strong aria-hidden="true">3.</strong> はじめに</a></li><li class="chapter-item "><a href="getting-help.html"><strong aria-hidden="true">4.</strong> ヘルプの取得</a></li><li class="chapter-item "><a href="studying.html"><strong aria-hidden="true">5.</strong> 学習</a></li><li class="chapter-item "><a href="editing.html"><strong aria-hidden="true">6.</strong> 追加/編集</a></li><li class="chapter-item "><a href="templates/intro.html"><strong aria-hidden="true">7.</strong> カードテンプレート</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="templates/fields.html"><strong aria-hidden="true">7.1.</strong> フィールド置換</a></li><li class="chapter-item "><a href="templates/generation.html"><strong aria-hidden="true">7.2.</strong> カード生成</a></li><li class="chapter-item "><a href="templates/styling.html"><strong aria-hidden="true">7.3.</strong> スタイリングとHTML</a></li><li class="chapter-item "><a href="templates/errors.html"><strong aria-hidden="true">7.4.</strong> チェックとエラー</a></li></ol></li><li class="chapter-item "><a href="preferences.html"><strong aria-hidden="true">8.</strong> 設定</a></li><li class="chapter-item "><a href="deck-options.html"><strong aria-hidden="true">9.</strong> デッキオプション</a></li><li class="chapter-item "><a href="syncing.html"><strong aria-hidden="true">10.</strong> AnkiWebと同期</a></li><li class="chapter-item "><a href="profiles.html"><strong aria-hidden="true">11.</strong> プロファイル</a></li><li class="chapter-item "><a href="browsing.html"><strong aria-hidden="true">12.</strong> ブラウザ</a></li><li class="chapter-item "><a href="filtered-decks.html"><strong aria-hidden="true">13.</strong> フィルターデッキ</a></li><li class="chapter-item "><a href="searching.html"><strong aria-hidden="true">14.</strong> 検索</a></li><li class="chapter-item "><a href="importing/intro.html"><strong aria-hidden="true">15.</strong> インポート</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="importing/text-files.html"><strong aria-hidden="true">15.1.</strong> テキストファイル</a></li><li class="chapter-item "><a href="importing/packaged-decks.html"><strong aria-hidden="true">15.2.</strong> パッケージデッキ</a></li></ol></li><li class="chapter-item "><a href="exporting.html"><strong aria-hidden="true">16.</strong> エクスポート</a></li><li class="chapter-item "><a href="backups.html"><strong aria-hidden="true">17.</strong> バックアップ</a></li><li class="chapter-item "><a href="files.html"><strong aria-hidden="true">18.</strong> ファイル管理</a></li><li class="chapter-item "><a href="stats.html"><strong aria-hidden="true">19.</strong> 統計</a></li><li class="chapter-item "><a href="media.html"><strong aria-hidden="true">20.</strong> メディア</a></li><li class="chapter-item "><a href="math.html"><strong aria-hidden="true">21.</strong> 数式と記号</a></li><li class="chapter-item "><a href="leeches.html"><strong aria-hidden="true">22.</strong> 苦戦（忘却多発）</a></li><li class="chapter-item "><a href="addons.html"><strong aria-hidden="true">23.</strong> アドオン</a></li><li class="chapter-item "><a href="troubleshooting.html"><strong aria-hidden="true">24.</strong> トラブルシューティング</a></li><li class="chapter-item "><a href="sync-server.html"><strong aria-hidden="true">25.</strong> 同期サーバー</a></li><li class="chapter-item "><a href="misc.html"><strong aria-hidden="true">26.</strong> その他</a></li><li class="chapter-item affix "><a href="contrib.html">貢献</a></li><li class="chapter-item affix "><a href="faqs.html">FAQs</a></li><li class="chapter-item affix "><a href="resources.html">リソース</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
