<script setup>
import { onMounted, watch } from "vue";
import { ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

// const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const isUpdate = ref(false);
const firstname = ref("");
const lastname = ref("");

const backToHome = () => {
  // Do something
  router.push({ name: "home" });
};

const updateProfile = () => {
  console.log(firstname.value);
  console.log(lastname.value);
  const formData = {
    firstname: firstname.value,
    lastname: lastname.value,
  };
  // changeName() from stores user.js
  userStore.changeName(formData);
  isUpdate.value = true;
};

onMounted(() => {
  firstname.value = userStore.firstname;
  lastname.value = userStore.lastname;

  //   console.log('params',route.params);
  //   console.log('query',route.query);
});

watch([firstname, lastname], (newData) => {
  if (newData[0] !== userStore.firstname || newData[1] !== userStore.lastname) {
    isUpdate.value = false;
  }
});
</script>

<template>
  <div>
    <div>Getter fullname : {{ userStore.fullname }}</div>
    <div>
      Profile from stores
      <div>Firstname {{ userStore.firstname }}</div>
      <div>Lastname {{ userStore.lastname }}</div>
    </div>
    <div v-if="isUpdate" style="color: red">profile up to date</div>
    <hr />
    <h1>Profile vue</h1>
    <div>Firstname <input type="text" v-model="firstname" /></div>
    <div>lastname <input type="text" v-model="lastname" /></div>
    <button @click="updateProfile()">Update profile</button>

    <div>
      <RouterLink :to="{ name: 'home' }">
        <button @click="backToHome()">Back to Home</button>
      </RouterLink>
    </div>
  </div>
</template>