<template>
  <div id="app">
    <header>
      <nav id="navigation">
        <ul>
          <li v-for="(page, index) in ContentData.pages" :key="index" :class="{'active': index == CurrentPageIndex}">
            <a href="#" v-on:click="CurrentPageIndex = index">{{ page.metaData.name }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1 v-text="currentPage(CurrentPageIndex).content.header"></h1>
				<input type="text" v-model="currentPage(CurrentPageIndex).content.header">
        <div v-if="currentPage(CurrentPageIndex).metaData.template == 'page' || currentPage(CurrentPageIndex).metaData.template == 'news'">
          <img class="page-image" :src="currentPage(CurrentPageIndex).content.image" :alt="currentPage(CurrentPageIndex).content.header">
          <div class="text" v-html="currentPage(CurrentPageIndex).content.text"></div>
          <NewsList v-if="currentPage(CurrentPageIndex).metaData.template == 'news'" :newsItems="ContentData.news" />
        </div>
        <PhotosTemplate v-if="currentPage(CurrentPageIndex).metaData.template == 'photos'" />
      </article>
    </main>
    <FooterTemplate :footerData="ContentData.site.footer" />
  </div>
</template>

<script>
import ContentData from '../data/content-data';
import FooterTemplate from './FooterTemplate.vue';
import NewsList from './NewsList.vue';
import PhotosTemplate from './PhotosTemplate.vue';

export default {
  name: 'MasterTemplate',
  components: { FooterTemplate, PhotosTemplate, NewsList },
  data() { 
    return {
      ContentData,
      CurrentPageIndex: 0,
    };
  },
  methods: {
    currentPage(CurrentPageIndex) {
      return ContentData.pages[CurrentPageIndex];
    },
  },
}
</script>
<style>
* {
	box-sizing: border-box;
}

body {
	font-family: sans-serif;
	padding: 5vw;
	font-size: 4vw;
	line-height: 1.4;
	background-color: #ffeeff;
}

img {
	max-width: 100%;
}

article.newsItem {
	padding: 2rem;
	background-color: #ffccff;
}

article.newsItem+article.newsItem {
	margin-top: 1rem;
}

article.newsItem h3 {
	margin: 0;
	font-size: 2rem;
}

.newsItem .date {
	font-style: italic;
}

.newsItem .teaser {
	margin: 1rem 0;
	font-weight: 800;
}

#navigation ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
}

#navigation ul li a {
	display: block;
	text-decoration: none;
	padding: 1rem;
	color: #fff;
	font-weight: 800;
	background-color: #9944ff;
}

#navigation ul li.active a {
	background-color: #ff4499;
}

footer {
	margin-top: 2rem;
	border-top: 2px solid #9944ff;
}

.text {
	margin: 2rem 0;
}

.text p:last-child {
	margin-bottom: 0;
}

.text p:first-child {
	margin-top: 0;
}

main, nav, footer {
	max-width: 1200px;
}

@media (min-width: 640px) {
	body {
		font-size: 1rem;
	}
	#navigation ul {
		display: flex;
	}
	#navigation ul li {
		width: 31%;
	}
	#navigation ul li+li {
		margin-left: 3.5%;
	}
}

@media (min-width: 768px) {
	.newsItem .text-wrapper {
		display: flex;
	}
	.newsItem .image-wrapper {
		width: 50%;
	}
	.newsItem .text {
		width: 50%;
		padding: 0 2rem;
		margin: 0;
	}
	.newsItem .text p:first-child {
		margin-top: 0;
	}
	#root>.text {
		column-count: 2;
	}
}

@media (min-width: 1024px) {
	#root>.text {
		column-count: 3;
	}
}
</style>
