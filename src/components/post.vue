<template>
<div  class="mx-10">
   <div class="text-center font-bold shadow-transparent">{{result.pages_by_pk.title}}</div> 
   <div>{{result.pages_by_pk.content}}</div>
   <div ><img class="ml-80 h-60 w-60" :src="result.pages_by_pk.image_url" ></div>
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
<style lang="">
    
</style>