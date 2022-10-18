import AaveVue from "@/components/icons/Crypto/Aave.vue";
import BandVue from "@/components/icons/Crypto/Band.vue";
import VeChainVue from "@/components/icons/Crypto/VeChain.vue";
import WavesVue from "@/components/icons/Crypto/Waves.vue";
import type { market } from "@/types/market";

const markets: Array<market> = [
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

export default markets;
