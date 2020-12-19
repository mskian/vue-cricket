<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable no-console */
    console.log(
      '%cWe ❤︎ open source!',
      'background-color:white;padding:8px 16px;border-radius:8px;font-size:32px;color:red;'
    )
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://crilive.netlify.app' + this.$route.path
        }
      ]
    }
  }
}
</script>
