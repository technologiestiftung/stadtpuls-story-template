# **Stadtpuls** Story Template
A vanilla HTML/JS/CSS template for creating stories using **[stadtpuls.com](https://stadtpuls.com)** sensor data.

## What is **Stadtpuls**
**Stadtpuls** is Berlin's open platform for sensor data. Hardware hobbyists, activists, public institutions but also businesses can use **Stadtpuls** to share some of their climate-oriented sensor data to the world to enable others to leverage it for other aims. Think of it as the github for sensor-data. 

**Stadtpuls** is an open source project by the [@technologiestiftung](https://github.com/technologiestiftung), executed by the [CityLAB Berlin](https://www.citylab-berlin.org/), and publicly financed by the [City of Berlin](https://www.berlin.de/).

## What are **Stadtpuls** stories
**Stadtpuls** stories are standalone web-articles that show how sensor data (possibly in correlation with external data) can be used in creative ways (They combine text, images, static charts and interactive data visualizations) to gather compelling insights (Which streets are the loudest? Which neighborhoods contribute to the most CO2 emissions and why? What are the favorite Sunday-walk routes?).

## About the code
This repo doesn't require node or a build tool. It is intentionally _**vanilla**_ in order to make it easier for anybody to dive straight into making their own story.

It does, however, import some external css stylesheets and JavaScript scripts for convenience. Those are:

- [**Tailwind Preflight**](https://tailwindcss.com/docs/preflight):<br />A CSS reset created by TailwindCSS build on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize) 
- [**Tailwind Typography**](https://github.com/tailwindlabs/tailwindcss-typography):<br />A CSS stylesheet that provides a set of prose classes to add beautiful typographic defaults to any vanilla HTML
- [**Highlight JS**](https://highlightjs.org/):<br />A js plugin that provides syntax highlighting for code blocks
- [**Highlight JS - Theme "Shades of Purple"**](https://highlightjs.org/static/demo/):<br />A CSS stylesheet for styling code highlighted by the [Highlight JS](https://highlightjs.org/) plugin
- [**Chart.js**](https://highlightjs.org/):<br />A JS charting library
