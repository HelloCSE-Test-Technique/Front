<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
          <h1 class="w-3/12">
            <a href="">
              <img src="/favicon.png" />
            </a>
          </h1>
          <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
              <li
                class="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer active">
                <a>
                  <RouterLink to="/">Stars</RouterLink>
                </a>
              </li>
              <li
                class="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer active">
                <a>
                  <RouterLink to="/admin">Admin</RouterLink>
                </a>
              </li>
            </ul>
          </nav>


          
        </header>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
