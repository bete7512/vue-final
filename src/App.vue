<template>
        <div class=" here  rounded-2xl space-x-2 ">
          <span class=" flex flex-wrap ml-96">
                        <div class="r1 p-3 h-16 btn flex hover:active:bg-teal-700 hover:bg-black space-x-2 text-left"> <span><router-link to="/">Home</router-link></span></div>

            <div class="r1 p-3 h-16 hover:bg-black btn flex space-x-2"><router-link :to="{name:'Addpage'}">Add posts</router-link></div>
            <div  class="r1 p-3 h-16 btn flex hover:bg-black space-x-2"><router-link :to="{name:'Pagelist',params:{slug:'list'}}">Page list</router-link></div>
            </span>
        </div>
        <div class="row mt-3">
        <router-view  />
        </div>
</template>
<script setup>

</script>
<style scoped>
.here{
background: #1B3B6C;
}
    .r1{  
 color: white;
 font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 39px;
    }
    .r1 btn{
        display:inline-block;
    }
    r1 img{
      width: 20px;
      height: 10px;}
    .row{
width:100%;
height: auto;
background: white;
    }
</style>