<template>

  <div>
    <p class="font-serif font-bold text-center text-6xl italic ">The latest posts are here</p>
  </div>
  <div class="flex">
    <div class="ml-0 h-auto font-semibold w-1/3">
        <div class=" bg-gray-200 rounded-md italic text-cyan-900 border-sky-900 shadow-black"
         v-for="page of result.pages" :key="page.slug">
    <div class="text-2xl ml-3">
      <i>{{ page.title }}</i>
    </div>
    <div class="ml-4 bg-cyan-900 hover:bg-black rounded-md w-40 h-10  border-zinc-900 shadow-md">
      <router-link class="text-2xl px-9 py-3 text-white" :to="{name:'detail', params:{slug:page.slug}}" > detail </router-link>
    </div>
  </div>
    </div>

  <div class="ml-4 mt-5 italic font-sans text-2xl">
    <router-view :key="$route.path"/>
   
  </div>

  </div>

  <div class="mr-0 h-96 w-full">
 >
  </div>
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
      }
    }
  `
);
</script>
