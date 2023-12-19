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
  apiKey: "1e8c4e00-cd38-4764-b126-066c30584a29",
  lang: "ru_RU",
  coordorder: "latlong",
  //   location: {
  //     center,
  //     zoom,
  //   },
};
</script>

<template>
  <div>
    hello
    <yandex-map :settings="mapSettings" height="500" style="height: 500px">
    </yandex-map>
  </div>
</template>
