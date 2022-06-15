<template>
  <div class="add ml-4 space-y-2">
    <div class="box">
      <div class="common font-bold">Title</div>
    </div>
    <div class="mr-3">
      <input
        type="text"
        v-model="title"
        placeholder="please Enter some tiltes of the page unless it goes to some problem" 
        class="titleinput text-2xl italic font-serif border-2 border-zinc-900" required
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
    <div v-if="true" class="flex space-x-4">
      <button @click="sendMessage" class="boxsubmit hover:bg-teal-900" >
        <span class="common text-white text-lg ">save</span>
      </button>
      <button @click="discard" class="boxsubmit hover:bg-teal-900">
        <span class="common text-lg text-white "> discard</span>
      </button>
    </div>
  </div>
  <footer class="footer p-4 mb-0 mt-4 rounded-md shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span class="text-sm text-white sm:text-center ">
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li class="flex">
            <a href="https://github.com/bete7512/vue-final.git" class="mr-4 hover:underline md:mr-6 text-xl"><img class=" w-12 h-10 rounded" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></a>
        </li>
        <li class="flex">
            <a href="https://www.figma.com/file/5SlfdWKCaTMBZie3XtpZPE/Untitled?node-id=0%3A1" class="mr-4 hover:underline md:mr-6 text-xl"><img class="w-16 h-10 rounded" src="https://cdn.iconscout.com/icon/free/png-128/figma-2489180-2082876.png"></a>
        </li>
    </ul>
</footer>
</template>
<script setup>
import { ref } from "vue";
const title = ref("");
const content = ref("");
const image_url = ref("");
const isvalidated = ref(false)

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
)

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
.footer {
  position: static;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #1B3B6C;
 
}
</style>
