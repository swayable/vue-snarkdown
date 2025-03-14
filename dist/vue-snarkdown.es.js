import { h as v } from "vue";
var C = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
function w(n) {
  return n.replace(RegExp("^" + (n.match(/^(\t| )+/) || "")[0], "gm"), "");
}
function c(n) {
  return (n + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function m(n, k) {
  var r, u, e, g, t, h = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, s = [], l = "", p = k || {}, i = 0;
  function f(o) {
    var a = C[o[1] || ""], d = s[s.length - 1] == o;
    return a ? a[1] ? (d ? s.pop() : s.push(o), a[0 | d]) : a[0] : o;
  }
  function $() {
    for (var o = ""; s.length; ) o += f(s[s.length - 1]);
    return o;
  }
  for (n = n.replace(/^\[(.+?)\]:\s*(.+)$/gm, function(o, a, d) {
    return p[a.toLowerCase()] = d, "";
  }).replace(/^\n+|\n+$/g, ""); e = h.exec(n); ) u = n.substring(i, e.index), i = h.lastIndex, r = e[0], u.match(/[^\\](\\\\)*\\$/) || ((t = e[3] || e[4]) ? r = '<pre class="code ' + (e[4] ? "poetry" : e[2].toLowerCase()) + '"><code' + (e[2] ? ' class="language-' + e[2].toLowerCase() + '"' : "") + ">" + w(c(t).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (t = e[6]) ? (t.match(/\./) && (e[5] = e[5].replace(/^\d+/gm, "")), g = m(w(e[5].replace(/^\s*[>*+.-]/gm, ""))), t == ">" ? t = "blockquote" : (t = t.match(/\./) ? "ol" : "ul", g = g.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), r = "<" + t + ">" + g + "</" + t + ">") : e[8] ? r = '<img src="' + c(e[8]) + '" alt="' + c(e[7]) + '">' : e[10] ? (l = l.replace("<a>", '<a href="' + c(e[11] || p[u.toLowerCase()]) + '">'), r = $() + "</a>") : e[9] ? r = "<a>" : e[12] || e[14] ? r = "<" + (t = "h" + (e[14] ? e[14].length : e[13] > "=" ? 1 : 2)) + ">" + m(e[12] || e[15], p) + "</" + t + ">" : e[16] ? r = "<code>" + c(e[16]) + "</code>" : (e[17] || e[1]) && (r = f(e[17] || "--"))), l += u, l += r;
  return (l + n.substring(i) + $()).replace(/^\n+|\n+$/g, "");
}
const x = {
  name: "VueSnarkdown",
  props: {
    markdown: {
      type: String
    }
  },
  computed: {
    html() {
      const n = this.markdown || this.slotMarkdown || "";
      return m(n);
    },
    slotMarkdown() {
      return (this.$slots.default ? this.$slots.default()[0].children : void 0) || "";
    }
  },
  render() {
    return v("div", { innerHTML: this.html });
  }
};
export {
  x as default
};
