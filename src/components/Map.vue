<script setup>
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from "vue-yandex-maps";

import { computed, onMounted } from "vue";

const center = [55.450797, 51.909868];
const zoom = 5;

const mapSettings = {
  apiKey: "",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  location: {
    center,
    zoom,
  },
};
</script>

<template>
  <div>
    hello
    <yandex-map :settings="mapSettings" height="500" style="height: 500px">
    </yandex-map>
  </div>
</template>
