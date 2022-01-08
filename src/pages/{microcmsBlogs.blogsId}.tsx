import * as React from "react";
import { graphql, PageProps } from "gatsby";

export const query = graphql`
  query BlogDetail($blogsId: String) {
    microcmsBlogs(blogsId: { eq: $blogsId }) {
      body
      title
      blogsId
      thumbnail {
        url
      }
    }
  }
`;

const BlogDetail = ({ data }: PageProps<GatsbyTypes.BlogDetailQuery>) => {
  return (
    <div>
      <h1>{data.microcmsBlogs?.title}</h1>
      <img
        src={data.microcmsBlogs?.thumbnail?.url ?? "../images/hacktyu.png"}
        alt={data.microcmsBlogs?.title ?? "default alt"}
        loading="lazy"
        width={896}
      />
      <div
        dangerouslySetInnerHTML={{ __html: data.microcmsBlogs?.body ?? "本文" }}
      />
    </div>
  );
};

export default BlogDetail;
