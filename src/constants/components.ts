import AaveVue from "@/components/icons/Crypto/Aave.vue";
import BandVue from "@/components/icons/Crypto/Band.vue";
import VeChainVue from "@/components/icons/Crypto/VeChain.vue";
import WavesVue from "@/components/icons/Crypto/Waves.vue";
import BlocVue from "@/components/icons/Bloc.vue";
import CubeVue from "@/components/icons/Cube.vue";
import GraphVue from "@/components/icons/Graph.vue";
import UserVue from "@/components/icons/User.vue";
import WalletVue from "@/components/icons/Wallet.vue";
import type { assets as assetType, market, navbar } from "@/types/components";
import { colors } from "@/types/components";

export const markets: Array<market> = [
  {
    name: "Band Protocol",
    icon: BandVue,
    unite: "BAND",
    price: 2.42,
    chanee: 13.38,
    marketCap: 399.8,
    watch: true,
  },
  {
    name: "Vechain",
    icon: VeChainVue,
    unite: "VET",
    price: 7.48,
    chanee: 11.19,
    marketCap: 152.8,
    watch: true,
  },
  {
    name: "Aave",
    icon: AaveVue,
    unite: "AAVE",
    price: 0.00146,
    chanee: 7.52,
    marketCap: 1.2,
    watch: true,
  },
  {
    name: "Waves",
    icon: WavesVue,
    unite: "WAVES",
    price: 30.68,
    chanee: 6.8,
    marketCap: 399.8,
    watch: true,
  },
];

export const items: Array<navbar> = [
  {
    route: "/bitcoin-trader",
    tab: "Dashboard",
    icon: BlocVue,
  },
  {
    route: "/bitcoin-trader/wallet",
    tab: "Wallet",
    icon: WalletVue,
  },
  {
    route: "/bitcoin-trader/graph",
    tab: "Graph",
    icon: GraphVue,
  },
  {
    route: "/bitcoin-trader/blockchain",
    tab: "Blockchain",
    icon: CubeVue,
  },
  {
    route: "/bitcoin-trader/profil",
    tab: "Profil",
    icon: UserVue,
  },
];

export const assets: Array<assetType> = [
  {
    quantity: 1.25,
    color: colors.purple,
    value: 2948.04,
    unite: "BTC",
    logo: "Bitcoin",
    percentage: 0.14,
  },
  {
    quantity: 0.32,
    color: colors.green,
    value: 2948.04,
    unite: "LTC",
    logo: "Litecoin",
    percentage: 0.31,
  },
  {
    quantity: 1.25,
    color: colors.beige,
    value: 2948.04,
    unite: "ETH",
    logo: "Etherum",
    percentage: 0.27,
  },
];
