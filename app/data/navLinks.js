import {
  mdiHome,
  mdiBookMultiple,
  mdiTimelineClockOutline,
  mdiAlphabetical,
  mdiBank,
  mdiTempleBuddhist,
  mdiCastle,
  mdiImageMultiple,
  mdiDomain,
  mdiCubeScan,
  mdiHeartOutline,
} from "@mdi/js";

export const navLinks = [
  {
    title: "links_nav.home",
    to: "/",
    icon: mdiHome,
  },

  {
    title: "links_nav.collections.label",
    icon: mdiBookMultiple,
    items: [
      {
        title: "links_nav.collections.sub.collections_timeline",
        to: "/collections/timeline",
        icon: mdiTimelineClockOutline,
      },
      {
        title: "links_nav.collections.sub.collections_hieroglyphic_writing",
        to: "/collections/hieroglyphic",
        icon: mdiAlphabetical,
      },
    ],
  },

  {
    title: "links_nav.relics.label",
    icon: mdiBank,
    items: [
      {
        title: "links_nav.relics.sub.relics_temples",
        to: "/relics/temples",
        icon: mdiTempleBuddhist,
      },
      {
        title: "links_nav.relics.sub.relics_royal_tombs",
        to: "/relics/royal-tombs",
        icon: mdiCastle,
      },
    ],
  },

  {
    title: "links_nav.gallery",
    to: "/gallery",
    icon: mdiImageMultiple,
    prefetch: false,
  },

  {
    title: "links_nav.museums",
    to: "/museums",
    icon: mdiDomain,
  },

  {
    title: "links_nav.artifacts_3d",
    to: "/artifacts-3d",
    icon: mdiCubeScan,
    prefetch: false,
  },

  {
    title: "links_nav.favorites",
    to: "/favorites",
    icon: mdiHeartOutline,
  },
];
