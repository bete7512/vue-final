<template>
<div  class="mx-10 mb-40 space-x-4 mt-0 ">
   <div class="text-center font-bold shadow-transparent">{{result.pages_by_pk.title}}</div> 
   <div>{{result.pages_by_pk.content}}</div>
   <div ><img class="h-auto w-full " :src="result.pages_by_pk.image_url" ></div>
    
</div>
 <!-- <footer class=" footer p-4 mb-0 bottom-0 rounded-md shadow md:flex md:justify-between md:p-6 b">
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
</footer> -->
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
            title
            content
            image_url
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
<style >
  .footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #1B3B6C;

}  
</style>