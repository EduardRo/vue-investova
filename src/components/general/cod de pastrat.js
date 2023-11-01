import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
// nu merge import { ArrowCircleRightIcon } from "@vue-hero-icons/outline";
// import { MenuIcon } from "@vue-heroicons/outline";
import { mapStores } from "pinia";
import useModalStore from "../general/stores/model";
import AppAuth from "../general/components/AppAuth.vue";
import AppHeader from "../general/components/AppHeader.vue";
const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Funds", href: "/funds", current: false },
  { name: "News", href: "/news", current: false },
  { name: "Press Releases", href: "/pressreleseas", current: false },
];
const actv = true;
let modalStore = useModalStore();

const toggleAuthModal = () => {
  modalStore.toggleAuthModal((Open = true));
  // You can access other properties and methods of modalStore here.
};
v-slot="{ open }"