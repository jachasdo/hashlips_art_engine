const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.matic;

// General metadata for Ethereum
const namePrefix = "Pengyn";
const description = "The Pengyn collection is 100 generatable blockchain Pengyns! All proceeds go to benefit animal care charity and local shelters.";
const baseUri = "ipfs://Qmbd8nZtMgApPsLCJeAW7PNQEsGWjEKJuC8R8VmuyM6Rk7";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 720, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/monstrousityy",
  creators: [
    {
      address: "0x73e319d250827Db3B9beA17391cBecc5c0553f43",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Special background" },
      { name: "Left foot" },
      { name: "Right foot" },
      { name: "Body" },
      { name: "Color" },
      { name: "Stomach" },      
      { name: "Arms" },
      { name: "Neck" },
      { name: "Right eye" },
      { name: "Left eye" },
      { name: "Right eye color" },
      { name: "Left eye color" },
      { name: "Special" },
      { name: "Beak" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 500,
  height: 500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
