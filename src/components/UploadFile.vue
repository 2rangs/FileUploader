<template>
       <file-pond
      name="file"
      ref="pond"
      label-idle="파일을 올려주세요!"
      v-bind:allow-multiple="true"
      server="http://dareesoft.iptime.org:8008/roadhazards/roadkill/bulk"
      v-bind:files="files"
      v-on:init="handleFilePondInit"
    />
</template>

<script lang='ts'>
    import vueFilePond from "vue-filepond";
    import "filepond/dist/filepond.min.css";
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        );
    export default {
        components: {
            FilePond,
        },
        name: 'UploadPage',
        data() {
            return {files: [] as any[]}
        },
        methods: {
                handleFilePondInit: function () {
                console.log("FilePond has initialized");
                    },
        }
    };
</script>

<style>
.filepond--root {
    margin: 0 auto;
    margin-top: 100px;
    width:80vw;
}
   
</style>