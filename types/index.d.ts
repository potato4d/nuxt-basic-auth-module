declare module '@nuxt/types' {
  interface Configuration {
    basic?: {
      name: string,
      pass: string,
      enabled?: boolean,
      match?: string | Function
    }
  }
}
