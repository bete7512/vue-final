<template>
  <div class="add ml-4 space-y-2">
    <div class="box">
      <div class="common font-bold">Title</div>
    </div>
    <div class="mr-3">
      <input
        type="text"
        v-model="title"
        placeholder="Enter tiltes of the page" 
        class="titleinput text-2xl italic font-serif border-2 border-black" required
      />
    </div>
    <div class="box mr-3">
      <div class="common font-bold">content</div>
    </div>
    <div class="mr-3">
      <textarea
        type="text"
        v-model="content"
        class="content w-full input h-40 border-2 border-black"
      >
      </textarea>
      </div>
       <div class="box mr-3">
      <div class="common font-bold">images url</div>
   
       <input
        type="url"
        v-model="image_url"
        class="bo border-2 border-slate-900 w-full text-black"
      />
       </div>
    <div class="flex space-x-4">
      <button @click="sendMessage" class="boxsubmit hover:bg-teal-900" >
        <span class="common text-white text-lg ">save</span>
      </button>
      <button @click="discard" class="boxsubmit">
        <span class="common text-lg text-white"> discard</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const title = ref("");
const content = ref("");
const image_url = ref("");

import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
const { mutate: sendMessage } = useMutation(
  gql`
    mutation sendMessage(
      $title: String
      $content: String
      $image_url: String
    ) {
      insert_pages(
        objects: { title: $title, content: $content, image_url: $image_url }
      ) {
        returning {
          id
        }
      }
    }
  `,
  () => ({
    variables: {
      title: title.value,
      content: content.value,
      image_url: image_url.value,
    
    },
  })
);
const discard = ()=>{
  return{
    title:title.value='',
    content:content.value="",
    image_url:image_url.value=''
  }
}
</script>
<style>
.common {
  display: inline-block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  color: black;
}
.boxsubmit {
  width: 120px;
  height: 42px;
  left: 0px;
  top: 1520px;
  background: #1f2648;
  border-radius: 4px;
}
.titleinput {
  width: 100%;
  height: 40px;
}
.contentinput {
  width: 100%;
  height: 200px;
}
</style>
