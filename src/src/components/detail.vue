<template>
  <div v-if="loading">loading...</div>
  <div v-else-if="error">something were wrong try again</div>
   <div v-else class = "w-full">
     Title:<span class="font font-medium"> 
        {{ result.pages_by_pk.title }}
    </span><br>
   Date published:<span class="font-medium">
    {{ result.pages_by_pk.published }} 
   </span>
   <div class="flex space-x-4 mt-3">
    <span class="w-40 h-10 rounded-md  bg-cyan-900 hover:bg-black font-sans  text-white px-5 shadow-lg text-2xl"><router-link :to="{name:'editPage',params:{slug:$route.params.slug}}"> Edit pages</router-link> </span>
    <span class="w-40 h-10 rounded-md  bg-cyan-900 hover:bg-black font-sans  text-white px-5 shadow-lg text-2xl">  <router-link :to="{name:'deletepage',params:{slug:$route.params.slug}}"> Delete pages</router-link></span>
    <span class="w-40 h-10 rounded-md  bg-cyan-900 hover:bg-black font-sans  text-white px-5 shadow-lg text-2xl"><router-link :to="{name:'Post',params:{slug:$route.params.slug}}"> Preview pages</router-link></span>
    <!-- <span class="w-40 h-10 rounded-md  bg-cyan-900 hover:bg-black font-sans  text-white px-5 shadow-lg text-2xl">   Post pages   </span> -->
   </div>
  </div>

</template>
<script>
import { useQuery} from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const slug = route.params.slug;
    const { result, error, loading} = useQuery(
      gql`
        query MyQuery($slug: String!) {
          pages_by_pk(slug: $slug) {
            id
            published
            title
          }
        }
      `,
      () => ({ slug: slug }),
    );


    return {
      result,
      error,
      loading,
    };
  },
};

</script>
