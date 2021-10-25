import { Header } from './components/Header';
import Content from './content/home.mdx';

export const App = () => (
  <main className="bg-white-dot-pattern min-h-screen">
    <Header />
    <div className="relative">
      <div className="from-white bg-gradient-to-t absolute inset-0 bottom-1/2 pointer-events-none " />
      <div className="bg-white absolute inset-0 top-1/2 pointer-events-none" />
      <article className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-5 sm:pb-6 md:pb-7 lg:pb-8 px-8 sm:px-12 md:px-16 lg:px-20 max-w-4xl mx-auto -mt-28 bg-white relative min-h-[calc(50vh+80px)s]">
        <section className="prose-sm lg:prose max-w-none relative">
          <Content />
        </section>
      </article>
    </div>
  </main>
);
