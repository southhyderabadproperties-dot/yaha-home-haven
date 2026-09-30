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

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: Src & { alt?: string };
};

export type Post = PostSummary & { body?: unknown[] };

export const formatDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }) : "";

export const getPosts = () =>
  sanityClient.fetch<PostSummary[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){_id,title,"slug":slug.current,category,publishedAt,excerpt,mainImage}`,
  );

export const getPost = (slug: string) =>
  sanityClient.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{_id,title,"slug":slug.current,category,publishedAt,excerpt,mainImage,body}`,
    { slug },
  );
