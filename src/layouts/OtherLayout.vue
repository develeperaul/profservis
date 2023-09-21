<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="tw-bg-blue">
      <q-toolbar
        class="tw-container tw-grid tw-grid-cols-[auto_1fr_auto] tw-justify-items-center"
      >
        <q-btn flat class="tw-p-0" @click="$router.push('/')">
          <q-icon name="arrow_back" size="1.5rem" />
        </q-btn>
        <div class="tw-text-white">Уведомления</div>
        <div></div>
        <!-- <c-icon name="trailing" class="text-red-500" /> -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
