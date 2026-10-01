import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "aki7ycan",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
type Src = Parameters<typeof builder.image>[0];
export const urlFor = (source: Src) => builder.image(source);

export type PostSeo = {
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
};

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  author?: string;
  category?: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: Src & { alt?: string };
  seo?: PostSeo;
};

export type Post = PostSummary & { body?: unknown[] };

export const formatDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }) : "";

const POST_FIELDS = `_id,title,"slug":slug.current,author,category,publishedAt,excerpt,mainImage,seo`;

export const getPosts = async () => { try { return await sanityClient.fetch<PostSummary[]>(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${POST_FIELDS}}`); } catch (e) { console.error(e); return []; } };

export const getPost = async (slug: string) => { try { return await sanityClient.fetch<Post | null>(`*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS},body}`, { slug }); } catch (e) { console.error(e); return null; } };
