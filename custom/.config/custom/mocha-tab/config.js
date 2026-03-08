const LINKS = [
  {
    icon: "",
    name: "YouTube",
    url: "https://youtube.com",
    color: "var(--ctp-mocha-red)",
  },
  {
    icon: "",
    name: "Gmail",
    url: "https://mail.google.com/mail/u/2/#inbox",
    color: "var(--ctp-mocha-green)",
  },
  {
    icon: "",
    name: "Reddit",
    url: "https://reddit.com",
    color: "var(--ctp-mocha-yellow)",
  },
  {
    icon: "",
    name: "Claude",
    url: "https://claude.ai/new",
    color: "var(--ctp-mocha-maroon)",
  },
  {
    icon: "",
    name: "GitHub",
    url: "https://github.com",
    color: "var(--ctp-mocha-mauve)",
  },
  {
    icon: "",
    name: "Cloudflare",
    url: "https://dash.cloudflare.com/",
    color: "var(--ctp-mocha-peach)",
  },
];

const LOCAL_PORTS = [
  { icon: "", name: "Astro", port: 4321, color: "var(--ctp-mocha-mauve)" },
  { icon: "󰎙", name: "Node", port: 5000, color: "var(--ctp-mocha-green)" },
  { icon: "", name: "Vite", port: 5173, color: "var(--ctp-mocha-blue)" },
  { icon: "", name: "Next.js", port: 3000, color: "var(--ctp-mocha-text)" },
  {
    icon: "",
    name: "Supabase API",
    port: 54321,
    color: "var(--ctp-mocha-green)",
  },
  {
    icon: "",
    name: "Supabase Studio",
    port: 54323,
    color: "var(--ctp-mocha-green)",
  },
];

const SEARCH_ENGINES = {
  g: "https://www.google.com/search?q=",
  gi: "https://www.google.com/search?tbm=isch&q=",
  gm: "https://www.google.com/maps/search/",

  d: "https://duckduckgo.com/?q=",
  di: "https://duckduckgo.com/?iax=images&ia=images&q=",

  npm: "https://www.npmjs.com/search?q=",
  yt: "https://www.youtube.com/results?search_query=",

  r: "https://www.reddit.com/search/?q=",
  c: "https://claude.ai/new?q=",

  gh: "https://github.com/search?q=",
};

const DEFAULT_ENGINE = "d";
