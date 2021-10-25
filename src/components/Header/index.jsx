import { FC } from 'react';
import logoPath from '../../images/logo.svg';
import coverPath from '../../images/story-cover.jpg';

export const Header = () => (
  <header className="relative overflow-hidden bg-black-dot-pattern">
    <section className="px-8 sm:px-12 md:px-16 lg:px-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-36 sm:pb-40 max-w-4xl mx-auto w-full h-full z-10 flex flex-col justify-between relative">
      <nav>
        <a
          href="https://stadtpuls.com"
          title="Die Hauptseite von Stadtpuls"
          className="transition-opacity hover:opacity-60 focus-offset-dark inline-block"
        >
          <img src={logoPath} alt="Stadtpuls Logo" width="157px" />
        </a>
      </nav>
      <div itemScope itemType="http://schema.org/Article">
        <h1
          className="text-white text-4xl lg:text-5xl font-bold font-headline mb-4 mt-20"
          itemProp="name"
        >
          Der Beginn einer neuen Datengeschichte
        </h1>
        <h2 className="text-white text-xl lg:text-2xl opacity-90 mb-4">
          Mit den Stadtpuls-Daten werden neue Erkenntnisse über die Stadt
          gewonnen, verarbeitet und ausgewertet, um neue spannende Einsichten zu
          gewinnen.
        </h2>
        <p className="text-white text-sm lg:text-base">
          <a
            className="transition-opacity hover:opacity-80 focus-offset-dark"
            href="https://stadtpuls.com/accounts/maxmusta"
            target="_blank"
            rel="noreferrer noopener"
            itemProp="author"
          >
            <img
              className="inline-block"
              src="https://source.boringavatars.com/pixel/24/maxmusta?colors=F9FCFD,100C53,0000C2,46ECA1,8330FF,F2F3F8,CFD0DC"
              alt="Avatar of maxmusta"
            />
            <span className="mx-1 inline-block underline underline-green">
              Max Mustermann
            </span>
          </a>
          <span className="opacity-80">
            –{' '}
            <time itemProp="datePublished" dateTime="2021-10-25">
              25. Oktober 2021
            </time>
          </span>
        </p>
      </div>
    </section>
    <img
      className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      src={coverPath}
      alt="DIE BESCHREIBUNG DEINES STORY-COVER HIER"
    />
    <div
      className="bg-purple absolute inset-0 pointer-events-none mix-blend-color opacity-80"
      aria-hidden="true"
    />
  </header>
);
