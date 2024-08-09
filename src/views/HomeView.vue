<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>Hello Home</h1>
    <!-- router -->
    <!-- <div>
      <router-link :to="{ name: 'profile', query: { user_id: 1 } }">
        <button>Profile with query</button>
      </router-link>
    </div> -->
    <!-- <div>
      <router-link :to="{ name: 'profile-edit', params: { id: 1 } }">
        <button>Profile with vue router</button>
      </router-link>
    </div> -->
  </div>
</template>
