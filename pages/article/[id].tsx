import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage
} from 'next';
import type { Blog } from '../../types/article';
import { client } from '../../libs/client';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import "highlight.js/styles/hybrid.css";
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import styles from '../../styles/Home.module.scss';
import Head from 'next/head';
import { ProfileArea } from '../../components/ProfileArea';
import { CategoryArea } from '../../components/CategoryArea';

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blogs", queries: { limit: 100 } });

  const paths = data.contents.map((content: Blog) => `/article/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  ctx
) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });

  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  $('iframe').each((_, elm) => {
    const wrapDiv =
      $('<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"></div>')
    $(elm).wrap(wrapDiv)
    $(elm).attr('width', null)
      .attr('height', null)
      .attr('style', 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;')
  })

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};

type Props = {
  blog: Blog;
  highlightedBody: string;
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  highlightedBody,
}: Props) => {
  return (
    <>
      <Head>
        <title>{blog.title} | Mobile Tech Blog</title>
        <meta property="og:image" content={blog.eyecatch.url} />
        <meta property="og:description" content={blog.content} />
      </Head>
      <div className="flex justify-center">
        <div className="container flex justify-start">
          <div className="min-h-screen">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <div className="p-5 xs:p-10 sm:p-10 md:p-10 lg:p-10 xl:p-10">
              <div className="rounded-md bg-[#0b5394ff] p-5 max-w-screen-lg mx-auto">
                <div className="flex justify-center">
                  <img
                    className="object-cover w-full h-full"
                    src={blog.eyecatch.url}
                  />
                </div>
                <div className="mt-5">
                  <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-white">
                    {blog.title}
                  </div>
                  {blog.category && (
                    <div className="flex items-center justify-start mt-4 mb-4">
                      <div className="text-sm px-2 py-1 font-bold bg-zinc-200 text-black rounded-full">
                        #{blog.category}
                      </div>
                    </div>
                  )}
                  <div className="mt-5 text-white">
                    <div dangerouslySetInnerHTML={{
                      __html: highlightedBody
                    }}
                      className={styles.post}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="container inline-block invisible lg:visible xl:visible w-0 lg:w-1/3 xl:w-1/3">
            <ProfileArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;