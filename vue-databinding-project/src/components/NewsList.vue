<template>
  <div>
    <h2>Latest news</h2>
    <article v-for="(newsItem, index) in newsItems" :key="index" class="newsItem">
      <h3 v-text="newsItem.content.header"></h3>
      <div class="date" v-text="newsItem.metaData.date"></div>
      <div class="teaser" v-html="newsItem.content.teaser"></div>
      <div class="text-wrapper">
        <div class="image-wrapper">
          <img class="image" :src="newsItem.content.image" :alt="newsItem.content.header">
        </div>
        <div class="text" v-html="newsItem.content.text"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  props: ['newsItems'],
}
</script>