export interface Metadata {
    site: SiteMetadata
}

export interface SiteMetadata {
  siteMetadata: {
    title?: string,
    author?: string
  }
}