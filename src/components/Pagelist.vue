<template>

  <div>
    <p class="font-serif font-bold text-center text-6xl italic ">The latest posts are here</p>
  </div>
  
    <div class=" h-auto font-semibold  w-96 flex space-x-10">
    <div class=" bg-gray-200 rounded-md border-2 italic text-cyan-900 border-sky-900 shadow-black"
         v-for="page of result.pages" :key="page.id">
    <span><img :src="page.image_url" class="w-40 h-16" ></span><br>
   <span> Title: <i>{{ page.title }}</i></span><br>
    <span>Published on:{{page.published}}</span><br>
   
  
    <div class="here  bg-cyan-900 hover:bg-black rounded-md w-40 h-10  border-zinc-900 shadow-md">
      <router-link class="text-md py-5 text-white px-10" :to="{name:'detail', params:{slug:page.slug}}" > Detail </router-link>
    </div>
   </div>
    </div>
  


 <footer class=" footer p-4 mb-0 bottom-0 rounded-md shadow md:flex md:justify-between md:p-6 b">
    <span class="text-sm text-white sm:text-center ">
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 text-xl">github</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 text-xl">figma</a>
        </li>
    </ul>
</footer>

</template>
<script setup>
import detail from "./detail.vue";
import { ref } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
const { loading, result, error } = useQuery(
  gql`
    query MyQuery {
      pages {
        title
        slug
        id
        published
        image_url
      }
    }
  `
);
</script>
<style scoped>

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #1B3B6C;
}
.here{
  margin-bottom: bottom;
  align-items: bottom;
  }
</style>
