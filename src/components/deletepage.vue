<template>
  <div>

    <button class=" font-serif font-semibold w-40 rounded-md h-10 bg-cyan-800 hover:bg-cyan-900 active:bg-red-900 " @click="deletePage()"><span class="text-2xl text-white">Delete Page</span></button>
  </div>
</template>
<script setup>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
    const route = useRoute();
    const slug = route.params.slug;
    const { mutate: deletePage } = useMutation(
      gql`
        mutation deletePage($slug: String!) {
          delete_pages_by_pk(slug: $slug) {
            content
            id
            image_url
            published
            title
            slug
          }
        }
      `,
      () => ({ variables:
      {slug: slug} }),
    );
</script>
<style lang=""></style>
