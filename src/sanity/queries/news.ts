import groq from 'groq';
import { sanityClient } from '../sanity.client';

const newsFields = `
    title,
    slug,
    date,
    excerpt,
    content,
    "author": author->{name, image},
    "image": image.asset->url,
`;

export const fetchNewsQuery = groq`*[_type == "news"] | order(date desc) {
    ${newsFields}
}`;
export const fetchNews = sanityClient.fetch(fetchNewsQuery);

export const fetchLatestNewsQuery = groq`*[_type == "news"] | order(date desc) {
    ${newsFields}
}[0...3]`;
export const fetchLatestNews = sanityClient.fetch(fetchLatestNewsQuery);

export const fetchNewsBySlugQuery = groq`*[_type == "news" && slug.current == $slug][0]{${newsFields}}`;
export const fetchNewsBySlug = (slug: string) => sanityClient.fetch(fetchNewsBySlugQuery, { slug });

export const fetchNewsSlugsQuery = groq`*[_type == "news" && defined(slug.current)][].slug.current`;
export const fetchNewsSlugs = sanityClient.fetch(fetchNewsSlugsQuery);

export const fetchNewsByAuthorQuery = groq`*[_type == "news" && references(^._id)] | order(date desc){
    ${newsFields}
}`;
export const fetchNewsByAuthor = (id: string) => sanityClient.fetch(fetchNewsByAuthorQuery, { id });

export const fetchNewsByIdQuery = groq`*[_type == "news" && _id == $id][0]{
    ${newsFields}
}`;
export const fetchNewsById = (id: string) => sanityClient.fetch(fetchNewsByIdQuery, { id });