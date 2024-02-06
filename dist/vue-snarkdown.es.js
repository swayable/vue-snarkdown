import { h as v } from "vue";
var b = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
function k(n) {
  return n.replace(RegExp("^" + (n.match(/^(\t| )+/) || "")[0], "gm"), "");
}
function c(n) {
  return (n + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function h(n, u) {
  var r, d, e, g, t, f = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, s = [], l = "", i = u || {}, m = 0;
  function w(o) {
    var a = b[o[1] || ""], p = s[s.length - 1] == o;
    return a ? a[1] ? (p ? s.pop() : s.push(o), a[0 | p]) : a[0] : o;
  }
  function $() {
    for (var o = ""; s.length; )
      o += w(s[s.length - 1]);
    return o;
  }
  for (n = n.replace(/^\[(.+?)\]:\s*(.+)$/gm, function(o, a, p) {
    return i[a.toLowerCase()] = p, "";
  }).replace(/^\n+|\n+$/g, ""); e = f.exec(n); )
    d = n.substring(m, e.index), m = f.lastIndex, r = e[0], d.match(/[^\\](\\\\)*\\$/) || ((t = e[3] || e[4]) ? r = '<pre class="code ' + (e[4] ? "poetry" : e[2].toLowerCase()) + '"><code' + (e[2] ? ' class="language-' + e[2].toLowerCase() + '"' : "") + ">" + k(c(t).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (t = e[6]) ? (t.match(/\./) && (e[5] = e[5].replace(/^\d+/gm, "")), g = h(k(e[5].replace(/^\s*[>*+.-]/gm, ""))), t == ">" ? t = "blockquote" : (t = t.match(/\./) ? "ol" : "ul", g = g.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), r = "<" + t + ">" + g + "</" + t + ">") : e[8] ? r = '<img src="' + c(e[8]) + '" alt="' + c(e[7]) + '">' : e[10] ? (l = l.replace("<a>", '<a href="' + c(e[11] || i[d.toLowerCase()]) + '">'), r = $() + "</a>") : e[9] ? r = "<a>" : e[12] || e[14] ? r = "<" + (t = "h" + (e[14] ? e[14].length : e[13] > "=" ? 1 : 2)) + ">" + h(e[12] || e[15], i) + "</" + t + ">" : e[16] ? r = "<code>" + c(e[16]) + "</code>" : (e[17] || e[1]) && (r = w(e[17] || "--"))), l += d, l += r;
  return (l + n.substring(m) + $()).replace(/^\n+|\n+$/g, "");
}
const C = {
  name: "VueSnarkdown",
  props: {
    markdown: {
      type: String
    }
  },
  computed: {
    html() {
      const n = this.markdown || this.slotMarkdown || "";
      return h(n);
    },
    slotMarkdown() {
      var u, r;
      let n = (r = (u = this.$slots.default()) == null ? void 0 : u[0]) == null ? void 0 : r.children;
      return !this.markdown && !n && console.warn("No markdown found in default slot. Provide markdown prop or default slot."), console.log(n), n || "";
    }
  },
  render() {
    return v("div", { innerHTML: this.html });
  }
};
export {
  C as default
};
