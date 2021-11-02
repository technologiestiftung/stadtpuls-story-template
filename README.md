# **Stadtpuls** Story Template
A vanilla HTML/JS/CSS template for creating stories using **[stadtpuls.com](https://stadtpuls.com)** sensor data.

## What is **Stadtpuls**
**Stadtpuls** is Berlin's open platform for sensor data. Hardware hobbyists, activists, public institutions but also businesses can use **Stadtpuls** to share some of their climate-oriented sensor data to the world to enable others to leverage it for other purposes. Think of it as the GitHub for sensor-data. 

**Stadtpuls** is an open source project by the [@technologiestiftung](https://github.com/technologiestiftung), executed by the [CityLAB Berlin](https://www.citylab-berlin.org/), and publicly financed by the [City of Berlin](https://www.berlin.de/).

## What are **Stadtpuls** stories
**Stadtpuls** stories are standalone web-articles that show how sensor data (possibly in correlation with external data) can be used in creative ways (They combine text, images, static charts and interactive data visualizations) to gather compelling insights (Which streets are the loudest? Which neighborhoods contribute to the most CO2 emissions and why? What are the favorite Sunday-walk routes?).

You can see Stories as more advanced blog articles in form of microsites that combine various media such as text, images, videos but especially data visualizations to tell stories through data.

## About the code
This repo requires neither NodeJS nor a build tool. It is intentionally [_**vanilla**_](https://en.wikipedia.org/wiki/Vanilla_software) in order to make it easier for anybody with basic HTML/CSS/JavaScript skills to dive straight into making their own story.

It does, however, import some external css stylesheets and JavaScript scripts for convenience. Those are:

- [**Tailwind Preflight**](https://tailwindcss.com/docs/preflight):<br />A CSS reset created by TailwindCSS build on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize). 
- [**Tailwind Typography**](https://github.com/tailwindlabs/tailwindcss-typography):<br />A CSS stylesheet that provides a set of prose classes to add beautiful typographic defaults to the article main text area.
- [**Highlight JS**](https://highlightjs.org/):<br />A js plugin that provides syntax highlighting for code blocks.
- [**Highlight JS - Theme "Shades of Purple"**](https://highlightjs.org/static/demo/):<br />A CSS stylesheet for styling code highlighted by the [Highlight JS](https://highlightjs.org/) plugin.
- [**Chart.js**](https://highlightjs.org/):<br />A JS charting library used to display data visualization (You could also use [D3.js](https://d3js.org/) or any other library instead).
- [**Mapbox GL JS**](https://docs.mapbox.com/mapbox-gl-js/guides/):<br/>A JS library for creating interactive web maps. Used for the display of sensor cards (Can be removed if not used).
- [**Mapbox GL CSS**](https://docs.mapbox.com/mapbox-gl-js/guides/):<br/>The CSS styles associated withe the [**Mapbox GL JS**](https://docs.mapbox.com/mapbox-gl-js/guides/) library (Can be removed if not used).

The above libraries are useful specific reasons (as cited above), however, none of these are mandatory. Therefore, feel free to add or remove any library you deem important for your own story.

### Creating your own story

This repository is intended to be copied and adapted to your own need. There are two ways you can go about using the code.

#### 1. Download the files

The easiest way is to download the whole repository and simply directly modify the files (See below for more infos on how to do it).

The advantage of this solution is that it is easy and straight forward. The disadvantage is that you won't be able to receive the updates we do to our own template. If you don't care about the updates, this solution is for you.

#### 2. Fork the repository

This solution is more advanced and requires you to be familiar with [git](https://git-scm.com/) and [GitHub's fork feature](https://docs.github.com/en/get-started/quickstart/fork-a-repo). A fork is a copy of a repository (A folder with code inside it), that can later be updated. Because repositories are versioned via git, changes in either the copied repository or the copy itself can be used to update the other. 

If you aren't familiar with theses concept, stick to the solution 1 or learn more about [what a fork is](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

### The code structure

The code structure is simple and minimal. Here is an overview of the most important areas:

```sh
.
├── design-resources    # Design files for creating imagery
├── src                 # All the code happens here
│   ├── fonts           # What it says... :)
│   ├── images          # What it says... :)
│   ├── vendor          # All external libraries go here (minified)
│   ├── index.html      # The main file, in which the story is written
│   ├── styles.css      # Your custom css styles go here
│   └── charts.js       # The JS for rendering charts go here
├── .gitignore          # Tells git what to ignore for versioning
├── .prettierrc.js      # Tells prettier how to format code
└── README.md           # This very file
```

### Adapting the meta-code

Aside from the story's content itself, there are a few things you should change.
Search for the following texts in the `index.html` file and replace them with your values:

* `STORY_TITLE`:<br />The title of your article/story (about 65 to 70 characters including spaces)
* `STORY_DESCRIPTION`:<br />A short description of your article/story (about 120 to 158 characters including spaces)
* `STORY_KEYWORD`:<br />A coma-separated list keywords related to your article/story (between 10 to 30 keywords)
* `STORY_AUTHOR_TWITTER_ACCOUNT`:<br />The twitter account
* `STORY_SLUG`:<br />If you publish the story yourself, change the whole URL in which this word appear. Otherwise, replace `STORY_SLUG` with the name of the story in _"slug"_ form. You can sulgify the story title [here](https://slugify.online/).
* `STORY_PUBLICATION_DATE`:<br />The official publication date of your story.

---

<small>**Caution**: Replace `N` by the author's number</small>

* `STORY_AUTHOR_N_DISPLAY_NAME`:<br />The author's display name.
* `STORY_AUTHOR_N_ROLE`:<br />The author's role (eg. _"Open Data Researcher"_).
* `STORY_AUTHOR_N_BIO`:<br />A super short bio (eg. _"Dr. Benjamin Seibel leitet das Ideation & Prototyping Lab und betreute zuvor Open Data-Projekte bei der Technologiestiftung Berlin."_).
* `STORY_AUTHOR_N_STADTPULS_USERNAME`:<br />Stadtpuls.com username (You can find it in the URL of the author's profile page on Stadtpuls.com).
* `STORY_AUTHOR_N_TWITTER_USERNAME`:<br />author's twitter.com username (Or Remove the HTML link if not wished).
* `STORY_AUTHOR_N_PORTFOLIO_URL`:<br />author's portfolio URL (Or Remove the HTML link if not wished).

---

Also, some images should be adapted as well:

* `src/images/social-image.jpg`: This file is the preview that is displayed when sharing via social media or messenger apps such a Slack or WhatsApp.
* `src/images/author-1.png` and `src/images/author-2.png`: The portraits of the authors. These images were made with the Sketch app. The design file is in the `design-resources` folder. 

### Adapting the content-code

The main content of the story happens in the `<article>` HTML tag. However, the hero section containing the title, authors and publication date are placed within the `<header>` tag.

#### Basic formatting.

Basic formatting tags such as `<strong>`, `<em>`, `<blockquote>`, `<h1>` to `<h6>`, `<code>`, `<p>`, etc. are formatted automatically. This is due to the `prose` CSS class applied to their parent `<section>` elements. These automatic styles are provided by the [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) and some custom adaptations in the `styles.css` file.

#### Helper classes for styling

There are a few CSS classes that help with styling:

* `.lead`:<br />This CSS class adds an "introduction" style. Slightly bigger and lighter, the `.lead` class should be used at the beginning of an article to incentivize users to start  reading further.
* `.alert`:<br />Alerts are styled boxes that are highlighted. They can be used to momentarily derivate from the main content and provide context information. They come in the following flavors: `.alert.alert-info` (should be used by default), `.alert.alert-warning`, `.alert.alert-success`, `.alert.alert-error` 
* `.wide-block`:<br />Utility CSS class to create blocks that are wider than the main text content. Useful for bringing rhythm and/or placing larger charts.
* `.tag`:<br />Utility to highlight a text referencing a specific dataset in a chart with the same color. Can set the color using the css variable `--data-color`. This can be set on an element-basis with an inline style tag. (Example: `
<span class="tag" style="--data-color: var(--purple)">Datenarchitektur</span>`)


#### Referencing a Stadtpuls sensor

There is a special HTML Structure and JavaScript code that can be used to show a little Card showing information about a Stadtpuls sensor. Just add the HTML element below, and information about the sensor with the provided id will be fetched and automatically filled into the a tag.

**HTML**:
```html
<a class="sensor-card" data-sensor-id="10"></a>
```
