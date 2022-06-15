<template>
<div class=" mx-5">
<div class="space-y-3">
  <p class="text-center font-bold text-2xl italic">Title</p>
<input type="text"  class="w-full border-2 border-black  h-10 " v-model="title"  >
<p class="text-center font-bold text-2xl italic">content</p>
<textarea type="text" class="w-full h-40 border-2 border-black" v-model="content"    />
<p class="text-center font-bold text-2xl italic">published</p>
<input type="date" class="w-full h-10 border-2 border-black" v-model="published"  >
<p class="text-center font-bold text-2xl italic">
  image url
</p>
<input type="text" class="w-full h-10 border-2 border-black" v-model="image_url" >
<div class="text-center">
<button class="w-40 h-10 bg-cyan-900 hover:bg-black rounded-md " @click="editPage()"><span class="text-2xl font-semibold text-white py-3 ">save changes</span></button>

</div>
</div>
</div>
</template>
<script setup>
import { ref} from "vue";
import { useMutation,useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
const route =   useRoute();
const title    =route.params.title
const content  =route.params.content
const published =route.params.published
const image_url =route.params.image_url

const slug = route.params.slug
const { mutate: editPage } = useMutation(
  gql`
    mutation editPage($slug: String!,$content: String,$image_url:String,$title:String,$published:date) {
      update_pages_by_pk(pk_columns:{ slug: $slug},_set:{title:$title,content:$content,image_url:$image_url,published:$published }) {
      id
      title
      slug
        content
        image_url
        published
      }
    }
  `,() => ({ variables:{
    slug: slug, 
    content:content,
     title:title,
     image_url:image_url,
     published:published
     }})
);

</script>
<style lang=""></style>