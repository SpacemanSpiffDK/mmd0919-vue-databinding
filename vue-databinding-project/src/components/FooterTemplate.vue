<template>
    <footer id="footer">
        <h4>Contact us:</h4>
        <address id="address" v-html="footerData.address"></address>
        <div id="email" v-html="footerData.email"></div>
    </footer>
</template>

<script>
export default {
    name: 'TemplateFooter',
    props: ['footerData'],
}
</script>