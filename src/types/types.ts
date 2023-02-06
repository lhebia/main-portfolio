export type AboutData = {
  desc: string,
  subTitle: string,
  title: string,
}

export type ContactSection = {
  title: string,
  description: string,
}

export type FooterText = {
  footerText: string,
}

export interface HeadProps {
  title: string,
}

export interface HeaderProps {
  light?: boolean,
}

export type LoginInputSection = [
  loginInput: LoginInput,
  setLoginInput: Function,
]

export type LoginInput = {
  name: string,
  email: string,
  message: string,
  namePlaceholder: string,
  emailPlaceholder: string,
  messagePlaceholder: string,
}

export type SiteData = {
  site: SiteMetaData,
}

export type SiteMetaData = {
  hero: AboutData,
  footerText: FooterText,
  title: string,
  topNavLinks: TopNavLinks,
}

export type HeaderData = {
  title: string,
  topNavLinks: TopNavLinks,
}

export type TopNavLinks = {
  blog: string,
  contact: string,
  portfolio: string,
}
