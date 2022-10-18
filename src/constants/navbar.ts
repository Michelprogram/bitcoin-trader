import BlocVue from "@/components/icons/Bloc.vue";
import CubeVue from "@/components/icons/Cube.vue";
import GraphVue from "@/components/icons/Graph.vue";
import UserVue from "@/components/icons/User.vue";
import WalletVue from "@/components/icons/Wallet.vue";

type navbar = {
  route: string;
  icon: Object;
};

const items: Array<navbar> = [
  {
    route: "/dashboard",
    icon: BlocVue,
  },
  {
    route: "/wallet",
    icon: WalletVue,
  },
  {
    route: "/graph",
    icon: GraphVue,
  },
  {
    route: "/blockchain",
    icon: CubeVue,
  },
  {
    route: "/profil",
    icon: UserVue,
  },
];

export default items;
