export const navLinks = [
  { title: "links_nav.home", to: "/", icon: "mdi-home" },

  {
    title: "links_nav.collections.label",
    icon: "mdi-book-multiple",
    items: [
      {
        title: "links_nav.collections.sub.collections_timeline",
        to: "/collections/timeline",
        icon: "mdi-timeline-clock-outline",
      },
      {
        title: "links_nav.collections.sub.collections_hieroglyphic_writing",
        to: "/collections/hieroglyphic",
        icon: "mdi-alphabetical",
      },
    ],
  },

  {
    title: "links_nav.relics.label",
    icon: "mdi-bank",
    items: [
      {
        title: "links_nav.relics.sub.relics_temples",
        to: "/relics/temples",
        icon: "mdi-temple-buddhist",
      },
      {
        title: "links_nav.relics.sub.relics_royal_tombs",
        to: "/relics/royal-tombs",
        icon: "mdi-castle",
      },
    ],
  },

  { title: "links_nav.gallery", to: "/gallery", icon: "mdi-image-multiple" },
  { title: "links_nav.museums", to: "/museums", icon: "mdi-domain" },
  {
    title: "links_nav.artifacts_3d",
    to: "/artifacts-3d",
    icon: "mdi-cube-scan",
  },
  {
    title: "links_nav.favorites",
    to: "/favorites",
    icon: "mdi-heart-outline",
  },
];
