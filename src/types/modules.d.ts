declare module '@next/mdx' {
  const createMDX: (options?: unknown) => (config: unknown) => unknown;
  export default createMDX;
}

declare module 'gray-matter' {
  interface GrayMatterFile<T> {
    data: T;
    content: string;
    matter: string;
    orig: string;
    language: string;
    stringify?: (data: T) => string;
  }
  function matter<T = Record<string, unknown>>(input: string): GrayMatterFile<T>;
  export = matter;
}


