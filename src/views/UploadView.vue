<template>
<headerComponent/>
<uploadComponent/>
</template>

<script>
    import {defineComponent} from 'vue';
     import uploadComponent from '../components/UploadFile.vue';
      import headerComponent from '../components/HeaderPage.vue';
    export default defineComponent({name: 'UploadView', components: {
            uploadComponent,headerComponent
        }});
</script>

<style>

</style>