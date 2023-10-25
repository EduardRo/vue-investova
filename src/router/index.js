import { createRouter, createWebHistory } from "vue-router";
import GeneralDashboard from "../components/general/GeneralDashboard.vue";
import UserDashboard from "../components/user/UserDashboard.vue";
import AdministratorDashboard from "../components/administrator/AdministratorDashboard.vue";
import InstitutionalDashboard from "../components/institutional/InstitutionalDashboard.vue";


const routes = [
  {
    path: "/",
    component: GeneralDashboard,
    
  },
  {
    path: "/user",
    component: UserDashboard,
    
  },
  {
    path: "/administrator",
    component: AdministratorDashboard,
    
  },
  {
    path: "/institutional",
    component: InstitutionalDashboard,
    
  },


  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;