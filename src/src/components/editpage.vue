<template>
<div>
<div class="space-y-3">
  <p>Title</p>
<input type="text"  class="w-full border-2 border-black  h-10 " v-model="title"  >
<p>content</p>
<textarea type="text" class="w-full h-40 border-2 border-black" v-model="content"    />
<p>published</p>
<input type="date" class="w-full h-10 border-2 border-black" v-model="published"  >
<p>
  image url
</p>
<input type="text" class="w-full h-10 border-2 border-black" v-model="image_url" >
<button class="w-40 h-10 bg-cyan-900 hover:bg-black rounded-md " @click="editPage()"><span class="text-2xl font-semibold text-white py-3">save changes</span></button>
</div>
</div>
</template>
<script setup>
import { ref} from "vue";
import { useMutation,useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
const title    =ref('')
const content  =ref('')
const published =ref('')
const image_url =ref('')
const route =   useRoute();
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
    content:content.value,
     title:title.value,
     image_url:image_url.value, 
     published:published.value
     }})
);
 const { result, error, loading} = useQuery(
      gql`
        query MyQuery($slug: String!) {
          pages_by_pk(slug: $slug) {
          title
          published
          content
          image_url
          id
          }
        }
      `,
      () => ({ slug: slug }),
    );
</script>
<style lang=""></style>