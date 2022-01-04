import * as React from "react";
import { graphql, PageProps } from "gatsby";

export const query = graphql`
  query BlogDetail($blogsId: String) {
    microcmsBlogs(blogsId: { eq: $blogsId }) {
      body
      title
      blogsId
    }
  }
`;

const BlogDetail = ({ data }: PageProps<GatsbyTypes.BlogDetailQuery>) => {
  return <div>{JSON.stringify(data.microcmsBlogs)}</div>;
};

export default BlogDetail;
