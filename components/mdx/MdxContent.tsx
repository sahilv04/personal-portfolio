import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import type { ComponentProps } from "react";

const components = {
  a: ({ href = "", ...rest }: ComponentProps<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return <Link href={href} {...rest} />;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
  },
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark-dimmed",
                keepBackground: true,
              },
            ],
          ],
        },
      }}
    />
  );
}
