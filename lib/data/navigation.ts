export type NavigationLink = {
  href: string;
  label: string;
};

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/on-track", label: "On Track" },
  { href: "/off-track", label: "Off Track" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/contato", label: "Contato" }
] as const;

