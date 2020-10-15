<template>
    <footer id="footer">
        <h4>Contact us:</h4>
        <address id="address" v-html="footerObj.address"></address>
        <div id="email" v-html="footerObj.email"></div>
    </footer>
</template>

<script>
export default {
    props: ['footerObj'],
}
</script>