export type CollectionObj = {
    address: string;
    name: string;
    description: string | null;
    icon_url: string | null;
    collection_image_url: string | null;
    project_id: number;
    project_owner_address: string;
    metadata_api_url: string | null;
    created_at: string;
    updated_at: string;
  };
  //Last Updated 08/MAR/2023
  export const CollectionData: CollectionObj[] = [
    {
      address: "0xc1f1da534e227489d617cd742481fd5a23f6a003",
      name: "D1sk",
      description:
        "D1sks store valuable Illuvium data such as Illuvitars, Cosmetics, and Blueprints. Load a D1sk to mint the assets inside.",
      icon_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/d1sks_marketplace_icon.png",
      collection_image_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/d1sks_marketplace_thumbnail.png",
      project_id: 2047,
      project_owner_address: "0x9989818ae063f715a857925e419ba4b65b793d99",
      metadata_api_url:
        "https://api.illuvium-game.io/gamedata/illuvitars/metadata/disk",
      created_at: "2023-03-06T09:09:02.383068Z",
      updated_at: "2023-03-06T09:09:02.383068Z"
    },
    {
      address: "0x844a2a2b4c139815c1da4bdd447ab558bb9a7d24",
      name: "Illuvitars Accessories",
      description:
        "Accessories allow customisation of Illuvitars and boost their Power. There are billions of combinations to choose.",
      icon_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/accessories_marketplace_icon.png",
      collection_image_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/accessories_marketplace_thumbnail.png",
      project_id: 2047,
      project_owner_address: "0x9989818ae063f715a857925e419ba4b65b793d99",
      metadata_api_url:
        "https://api.illuvium-game.io/gamedata/illuvitars/metadata/accessory",
      created_at: "2023-03-06T09:06:51.036944Z",
      updated_at: "2023-03-06T09:06:51.036944Z"
    },
    {
      address: "0x8cceea8cfb0f8670f4de3a6cd2152925605d19a8",
      name: "Illuvitars",
      description:
        "Illuvitars are hand-drawn profile pictures used in the Illuvium Universe. Collect them in the Illuvitars Album to earn rewards. Customise with Accessories to increase their power.",
      icon_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/illuvitars_marketplace_icon.png",
      collection_image_url:
        "https://web-illuvium-static.s3.us-east-2.amazonaws.com/img/illuvitars/illuvitars_marketplace_thumbnail.png",
      project_id: 2047,
      project_owner_address: "0x9989818ae063f715a857925e419ba4b65b793d99",
      metadata_api_url:
        "https://api.illuvium-game.io/gamedata/illuvitars/metadata/portrait",
      created_at: "2023-03-06T09:04:39.898997Z",
      updated_at: "2023-03-06T09:04:39.898997Z"
    },
    {
      address: "0x4ef94883b5d7098bd7ae6ae0b5025e2b449fe5d3",
      name: "Pirates of the Arrland: Genesis Female Pirates",
      description: "Pirates of the Arrland: Genesis Female Pirates",
      icon_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      collection_image_url:
        "https://ipfs.moralis.io:2053/ipfs/QmaG6PXN8PfMZ9ueKVRHyfHJSwYX9ZYfUqTcLHiGaTnzwE/gesnis_gemale_pirates.png",
      project_id: 1223,
      project_owner_address: "0x72a669f921543f234653b9401db406bedc32ea0e",
      metadata_api_url:
        "https://arrland-media.s3-eu-central-1.amazonaws.com/meta/piratesV2/l2",
      created_at: "2023-03-02T09:45:44.80021Z",
      updated_at: "2023-03-02T09:45:44.80021Z"
    },
    {
      address: "0x82ebd80c20e977b627f3b57e1028c8317973b409",
      name: "Test",
      description: "Test",
      icon_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      collection_image_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      project_id: 1223,
      project_owner_address: "0x72a669f921543f234653b9401db406bedc32ea0e",
      metadata_api_url:
        "https://arrland-media.s3-eu-central-1.amazonaws.com/meta/piratesV2/l2",
      created_at: "2023-03-01T19:52:29.35505Z",
      updated_at: "2023-03-02T12:30:52.040851Z"
    },
    {
      address: "0x867219796074831168b2132ba66ec66f1a1afee9",
      name: "Battle Pass",
      description:
        "The exclusive Lifetime Netherthorne Battle Pass unlocks premium benefits for all games that will be under the PeanutGames portfolio. The Netherthorne Battle Pass embodies the spirit of innovation and gives the power of digital asset ownership back to the Gamers.",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmVdqdLBEhwgKnjm9zqpQqdoTAFSNH9CGKEw4UbnVf93hV",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmRC4yxVXWhanFNdy97dNiBa8dtaHxsgwFiMzQHH3RZgYh",
      project_id: 10132,
      project_owner_address: "0x2521dd2142ab814f8d5feb5df986502d2ddf4449",
      metadata_api_url:
        "https://bubbebot.s3.amazonaws.com/metadata-imx/bubble-bot",
      created_at: "2023-02-27T18:11:30.188659Z",
      updated_at: "2023-02-28T14:06:33.306963Z"
    },
    {
      address: "0xd7d4d823bf5842cdaa7e8c341717e9a0fb9f3a33",
      name: "test-pass",
      description: "staging-contract",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmYaxRLDibuuf3oKZCo3kESeQitDEtZpnne3gH6fJsRDKs",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmShXjE6QJ6cPjgBawjsqV2jHvzXPWzeMnrJu1znoYP81E",
      project_id: 10132,
      project_owner_address: "0x2521dd2142ab814f8d5feb5df986502d2ddf4449",
      metadata_api_url:
        "https://bubbebot.s3.us-west-2.amazonaws.com/metadata-imx/Test-Project-1",
      created_at: "2023-02-27T17:04:03.498842Z",
      updated_at: "2023-02-27T17:04:49.85417Z"
    },
    {
      address: "0x112431def0609e8fa12efb2d8b30a4b365e80824",
      name: "Battle Pass",
      description:
        "The exclusive Lifetime Netherthorne Battle Pass unlocks premium benefits for all games that will be under the PeanutGames portfolio. The Netherthorne Battle Pass embodies the spirit of innovation and gives the power of digital asset ownership back to the Gamers.",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmVdqdLBEhwgKnjm9zqpQqdoTAFSNH9CGKEw4UbnVf93hV",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmRC4yxVXWhanFNdy97dNiBa8dtaHxsgwFiMzQHH3RZgYh",
      project_id: 10132,
      project_owner_address: "0x2521dd2142ab814f8d5feb5df986502d2ddf4449",
      metadata_api_url:
        "https://bubbebot.s3.amazonaws.com/metadata-imx/bubble-bot",
      created_at: "2023-02-27T08:26:50.655088Z",
      updated_at: "2023-02-27T08:27:33.480523Z"
    },
    {
      address: "0x8e81ad255486d67af698fd88dd9367f6d2759b5b",
      name: "Chainmonsters Chainmons",
      description:
        "Chainmonsters is a massive multiplayer online RPG where you catch, battle, trade, explore, and combine different types of monsters and abilities to create strong chain reactions! No game subscription required. Explore the vast lands of Ancora together with your friends on Epic, iOS and Android!",
      icon_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/ce3586a3-a6ba-4cb1-b718-108ea0a2a800/public",
      collection_image_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/e1b314d5-5db3-49a2-6e45-57e561bb2300/public",
      project_id: 10130,
      project_owner_address: "0x11437d5fe46c1eadefb68c62140c82e6968d0228",
      metadata_api_url:
        "https://chainmonsters-public-api.azurewebsites.net/api/getchainmon",
      created_at: "2023-02-24T13:44:37.540785Z",
      updated_at: "2023-02-24T13:44:37.540785Z"
    },
    {
      address: "0x8c7b3bbd3f0918fa3d5a24a625cc688240d0b872",
      name: "Chainmonsters Land",
      description:
        "Chainmonsters is a massive multiplayer online RPG where you catch, battle, trade, explore, and combine different types of monsters and abilities to create strong chain reactions! No game subscription required. Explore the vast lands of Ancora together with your friends on Epic, iOS and Android!",
      icon_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/ce3586a3-a6ba-4cb1-b718-108ea0a2a800/public",
      collection_image_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/3a94560d-cd7c-400d-4920-ce01115baa00/public",
      project_id: 10130,
      project_owner_address: "0x11437d5fe46c1eadefb68c62140c82e6968d0228",
      metadata_api_url:
        "https://chainmonsters-public-api.azurewebsites.net/api/getLand",
      created_at: "2023-02-24T13:39:50.583191Z",
      updated_at: "2023-02-24T13:39:50.583191Z"
    },
    {
      address: "0x738403f9034616b57e89dde4060979a9bba714cd",
      name: "Chainmonsters Rewards",
      description:
        "Chainmonsters is a massive multiplayer online RPG where you catch, battle, trade, explore, and combine different types of monsters and abilities to create strong chain reactions! No game subscription required. Explore the vast lands of Ancora together with your friends on Epic, iOS and Android!",
      icon_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/ce3586a3-a6ba-4cb1-b718-108ea0a2a800/public",
      collection_image_url:
        "https://imagedelivery.net/lXZBio103K7xos2fIyeqhQ/e61e9a87-d942-4e9b-9d1e-b12046fa6700/public",
      project_id: 10130,
      project_owner_address: "0x11437d5fe46c1eadefb68c62140c82e6968d0228",
      metadata_api_url:
        "https://chainmonsters-public-api.azurewebsites.net/api/getReward",
      created_at: "2023-02-24T13:01:25.493459Z",
      updated_at: "2023-02-24T13:01:25.493459Z"
    },
    {
      address: "0x36b2ba06594a07368cc4e180f1eeb6193e7522bc",
      name: "The ARK NFTs",
      description:
        "Wildlife awareness and conservation platform. Fighting poaching and saving animals with blockchain technology",
      icon_url:
        "https://ipfs.thearknft.io/ipfs/bafkreicmq7c42jnihpviwtbuiacrlrbyezu4mztauzntwzkol5ybdqjj5a",
      collection_image_url: "",
      project_id: 10129,
      project_owner_address: "0x63231afb749ca44c715ce27d5186f871e87340fe",
      metadata_api_url: "https://api.thearknft.io/v1/nft",
      created_at: "2023-02-22T10:57:04.383544Z",
      updated_at: "2023-02-22T10:57:04.383544Z"
    },
    {
      address: "0x99d461219a98de630d6aa42a64dcdc0be545cd09",
      name: "Metafight - Fighter Cards - Q1 2023",
      description: "Metafight fighters cards for the Q1 2023 season",
      icon_url:
        "https://metafight.mypinata.cloud/ipfs/Qmd6XFaXHAfzPas4FbNzgEUNJaWCa9pEffJoEAvfybMvFL",
      collection_image_url:
        "https://metafight.mypinata.cloud/ipfs/QmP4f7v9dDFk9qhNdBUiSS9RtcgQ9ytMCMToXakB7piEXi",
      project_id: 10091,
      project_owner_address: "0x5a9ba15ee79103f732c26e390bd00879bd34f324",
      metadata_api_url:
        "https://metafight.mypinata.cloud/ipfs/QmdtWAKT4anoJR9PXWJKMqnRQWXv82E9YGgZuMzg5agGA3",
      created_at: "2023-02-21T12:11:12.826583Z",
      updated_at: "2023-02-21T12:11:12.826583Z"
    },
    {
      address: "0xb09d769fe4bf38eee211b9071d9186b0d76d02f3",
      name: "Metafight - Equipment Cards - Q1 2023",
      description:
        "Metafight equipment cards to improve your fighter for the Q1 2023 season",
      icon_url:
        "https://metafight.mypinata.cloud/ipfs/Qmd6XFaXHAfzPas4FbNzgEUNJaWCa9pEffJoEAvfybMvFL",
      collection_image_url:
        "https://metafight.mypinata.cloud/ipfs/QmS2dGEtoEB2w1p9WPNSMFnXj7tLp3PSavqJikweSonmTL",
      project_id: 10091,
      project_owner_address: "0x5a9ba15ee79103f732c26e390bd00879bd34f324",
      metadata_api_url:
        "https://metafight.mypinata.cloud/ipfs/QmayrhKqZcr8S65NwRfLsrhbdMcaTP9WXJuPGaowaiPaQv",
      created_at: "2023-02-21T12:03:33.509511Z",
      updated_at: "2023-03-07T16:16:03.46025Z"
    },
    {
      address: "0x90be1e329ec3c8c7667dd6f29a92ab5e8d213b9e",
      name: "Aradena Cosmetics",
      description: "",
      icon_url: "https://images.aradena.io/tokens/11/full/logo.png",
      collection_image_url:
        "https://images.aradena.io/tokens/11/full/cosmetics.png",
      project_id: 10114,
      project_owner_address: "0x04981bf52060943cf65eae5ee6684f08df9d4e6c",
      metadata_api_url: "https://api.aradena.io/tokens/11",
      created_at: "2023-02-21T08:33:56.568417Z",
      updated_at: "2023-02-21T08:33:56.568417Z"
    },
    {
      address: "0xa28785ec2b8c01beb4a3a2ef21f3b98c6296cef0",
      name: "Metafight - Booster packs - Q1 2023",
      description: "Metafight booster for the Q1 2023 season",
      icon_url:
        "https://metafight.mypinata.cloud/ipfs/Qmd6XFaXHAfzPas4FbNzgEUNJaWCa9pEffJoEAvfybMvFL",
      collection_image_url:
        "https://metafight.mypinata.cloud/ipfs/QmbTTbxkdh6WqZKjdMf8GmNSZ7Cyo8srR1s5xobeQqRWwm",
      project_id: 10091,
      project_owner_address: "0x5a9ba15ee79103f732c26e390bd00879bd34f324",
      metadata_api_url:
        "https://metafight.mypinata.cloud/ipfs/QmfG99ULETcZBBBRTJAQJufph2e4x12UsMqQ9hXJkaiH7z",
      created_at: "2023-02-21T00:04:20.713305Z",
      updated_at: "2023-02-21T00:21:35.29986Z"
    },
    {
      address: "0xfc439c0b998b9f5645c3b334aa9f3eb222824f3e",
      name: "Friendz Metaverse Items",
      description:
        "Jump into the Friendz Metaverse and customize your avatar thanks to all the items in this collection.",
      icon_url:
        "https://friendz-metaverse.s3.ca-central-1.amazonaws.com/collections/1-imx-collection-icon.png",
      collection_image_url:
        "https://friendz-metaverse.s3.ca-central-1.amazonaws.com/collections/1-imx-collection-thumbnail.png",
      project_id: 10128,
      project_owner_address: "0x90e3b353bb55837cc35673fb81622cd31de46316",
      metadata_api_url:
        "https://friendz-metaverse.s3.ca-central-1.amazonaws.com/items/metadata",
      created_at: "2023-02-20T05:35:08.951734Z",
      updated_at: "2023-02-20T05:35:08.951734Z"
    },
    {
      address: "0x0000995e7ab2aa13c5c735484f3b816de7c353f4",
      name: "Cool Cats",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmR5uQ4cvPsVr4sKUtCFvPxMKfevQzMVGnXhVupMquE2GF",
      collection_image_url:
        "https://ipfs.io/ipfs/QmR5uQ4cvPsVr4sKUtCFvPxMKfevQzMVGnXhVupMquE2GF",
      project_id: 10127,
      project_owner_address: "0x66fbedaf337dd05cbf1aa266557adb2256d9ac27",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmRGHUk2NKnRaLVGG5ptVW1qE6nXKVGQVxWibWV6L5cWDF",
      created_at: "2023-02-19T19:09:29.115363Z",
      updated_at: "2023-02-19T19:09:29.115363Z"
    },
    {
      address: "0x0aba1b54a33c712c49986bdf3e6b0fc428a45e93",
      name: "Impact Theory Legendary Dinners",
      description:
        "This NFT collection is for Impact Theory Legendary Dinners with Tom Bilyeu and other Impact Theory Legendary Key Holders.",
      icon_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn2023q2_icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn2023q2.png",
      project_id: 10125,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url:
        "https://crm-api.founderskey.io/account/drip/metadata/lqdn2023q2",
      created_at: "2023-02-17T03:21:55.199049Z",
      updated_at: "2023-02-17T03:21:55.199049Z"
    },
    {
      address: "0x8e02b82ff4cebc6c4dedd9885b15e81d4c1371bc",
      name: "NBA on TNT",
      description: "Collectible moments from NBA on TNT",
      icon_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1675076814/br-marketplace/nba-on-tnt/nba-on-tnt-logo_gaqmeb.png",
      collection_image_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1675076815/br-marketplace/nba-on-tnt/nba-on-tnt-feature_gho2zi.png",
      project_id: 10124,
      project_owner_address: "0x269a46d20f7e82852f6e621741c5ff038c031fdd",
      metadata_api_url:
        "https://bleacherreportmarketplace.com/api/v1/metadata/immutable/0x8e02b82ff4cebc6c4dedd9885b15e81d4c1371bc",
      created_at: "2023-02-16T21:32:41.328687Z",
      updated_at: "2023-02-23T20:20:45.727611Z"
    },
    {
      address: "0x1a9c84ebf722f79a63a2797e3c49c6c6048b7f1e",
      name: "ABN",
      description: "ABN",
      icon_url: "https://picsum.photos/250/250",
      collection_image_url: "https://picsum.photos/1000/1000",
      project_id: 10123,
      project_owner_address: "0x269a46d20f7e82852f6e621741c5ff038c031fdd",
      metadata_api_url: "https://dydlhnncw9qsk.cloudfront.net",
      created_at: "2023-02-16T00:10:12.540014Z",
      updated_at: "2023-02-16T00:10:12.540014Z"
    },
    {
      address: "0xba84f0cdcb2006dbbdce78a655be70b08b5dd75c",
      name: "Rooniverse: Items",
      description: "Various items used for wreaking havoc in Rooniverse!",
      icon_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/icon.png",
      collection_image_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/Items.png",
      project_id: 10121,
      project_owner_address: "0xefe27aaecb6881d9ccb70f47d11d061cdb22f728",
      metadata_api_url:
        "https://api.playrooniverse.com/api/imx-metadata/0xBa84f0CDcB2006DbBdCe78a655bE70B08B5Dd75c",
      created_at: "2023-02-14T08:59:25.480113Z",
      updated_at: "2023-02-14T08:59:25.480113Z"
    },
    {
      address: "0x2c2b7caed32579b76c76694b4c6c35e067db0325",
      name: "Rooniverse: Experooments",
      description: "A special Experooment from a limited event in Rooniverse!",
      icon_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/icon.png",
      collection_image_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/Experooments.png",
      project_id: 10121,
      project_owner_address: "0xefe27aaecb6881d9ccb70f47d11d061cdb22f728",
      metadata_api_url:
        "https://api.playrooniverse.com/api/imx-metadata/0x2c2b7caed32579B76C76694b4c6C35E067dB0325",
      created_at: "2023-02-14T08:59:23.867378Z",
      updated_at: "2023-02-14T08:59:23.867378Z"
    },
    {
      address: "0x5ef20f615db0136f518b53cd4cb78790054e48dd",
      name: "Rooniverse: Origin Roos",
      description: "A special Origin Roo who led the way to Rooniverse!",
      icon_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/icon.png",
      collection_image_url:
        "https://playrooniverse.s3.ap-southeast-1.amazonaws.com/collections/OriginRoos.png",
      project_id: 10121,
      project_owner_address: "0xefe27aaecb6881d9ccb70f47d11d061cdb22f728",
      metadata_api_url:
        "https://api.playrooniverse.com/api/imx-metadata/0x5EF20F615DB0136F518B53Cd4CB78790054e48Dd",
      created_at: "2023-02-14T08:59:22.274527Z",
      updated_at: "2023-02-14T08:59:22.274527Z"
    },
    {
      address: "0x414bfaf8a77a260775f9490ffc26f70066f4d36e",
      name: "ImmutableX Makerversity Certificates",
      description:
        "This collection of certificates is issued by Makerversity.com, a learning platform for professional web3 and blockchain developer training and certification. The courses provide an in-depth understanding and skills necessary to build and deploy applications in the ImmutableX blockchain. These certificates serves as a testament to the holder's commitment to learning and professional development in the blockchain space.",
      icon_url: "https://www.makerversity.com/images/logo-sq-dark.png",
      collection_image_url:
        "https://www.makerversity.com/images/metaversity-city.png",
      project_id: 10120,
      project_owner_address: "0x18bad9bf2553dc16da15d24d2679f00fb7d7e23a",
      metadata_api_url:
        "https://9w3deglt6k.execute-api.us-east-1.amazonaws.com/metadata/imx-nft-minting",
      created_at: "2023-02-10T03:42:30.45826Z",
      updated_at: "2023-02-10T03:42:30.45826Z"
    },
    {
      address: "0x3e6fa5c94ccabd7bf43bffcbfb78fc7350ee6b2f",
      name: "museum of modern ahrts",
      description: "MOMAHR",
      icon_url: "https://niftee-pub.s3.amazonaws.com/momahr_banner.png",
      collection_image_url:
        "https://niftee-pub.s3.amazonaws.com/momahr_banner.png",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2023-02-09T15:29:54.274451Z",
      updated_at: "2023-02-09T15:29:54.274451Z"
    },
    {
      address: "0x9dea558a14572573c8cf6df5f82a31affb005d11",
      name: "ENTER_COLLECTION_NAME",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 10119,
      project_owner_address: "0x2ee678669719707aac4f7e6b9f7e32492e24975f",
      metadata_api_url: "",
      created_at: "2023-02-06T05:15:49.886508Z",
      updated_at: "2023-02-06T05:15:49.886508Z"
    },
    {
      address: "0x2d9a4c62371fca80cf6f0d2523a4faea910b7119",
      name: "Test-Pass-1",
      description: "Test Project",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmXVShYPgEonqBccCouMrcPDMJW2sx52HSRHYcBEnRzgjA",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmUfuSuhNY5wndZk5UL5xLCAMPzzLos9h5S5ooPBgtxP5N",
      project_id: 10117,
      project_owner_address: "0x2521dd2142ab814f8d5feb5df986502d2ddf4449",
      metadata_api_url:
        "https://bubbebot.s3.amazonaws.com/metadata-imx/Test-Project-1",
      created_at: "2023-02-03T13:17:51.418351Z",
      updated_at: "2023-02-03T14:57:02.273714Z"
    },
    {
      address: "0xeeee06f8bc4e2c08280a211874147f51cc2af5d0",
      name: "Shiba Inu NFT",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/Qmdhbxg5k4ZbjoScCGioHKywws2YLsWnJKYjzvgwz3WqZn",
      collection_image_url:
        "https://ipfs.io/ipfs/Qmdhbxg5k4ZbjoScCGioHKywws2YLsWnJKYjzvgwz3WqZn",
      project_id: 10115,
      project_owner_address: "0xbc493c3f5427150830198d81771b195e9b684952",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmYsH2wP6NFvNRZgxynLBrguLMg3QfXropqCKgTxmPWBKf/?",
      created_at: "2023-02-02T09:37:53.21203Z",
      updated_at: "2023-02-02T09:37:53.21203Z"
    },
    {
      address: "0x1d7630f9fcbedcb15f740465f472b5fd004dcc64",
      name: "Aradena Card Packs",
      description: "",
      icon_url: "https://images.aradena.io/tokens/7/full/logo.png",
      collection_image_url: "https://images.aradena.io/tokens/7/full/pack.png",
      project_id: 10114,
      project_owner_address: "0x04981bf52060943cf65eae5ee6684f08df9d4e6c",
      metadata_api_url: "https://api.aradena.io/tokens/8",
      created_at: "2023-02-02T09:20:51.309127Z",
      updated_at: "2023-02-02T09:20:51.309127Z"
    },
    {
      address: "0x0000e305eec9c911e06351815275a0bf53c6dff7",
      name: "Frog Central",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmVAsX8jXBxNZJorkPFDLb8b5zxiLN8gg6Qd1yxe2X22sV/545.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmVAsX8jXBxNZJorkPFDLb8b5zxiLN8gg6Qd1yxe2X22sV/545.png",
      project_id: 10113,
      project_owner_address: "0x572312f58760614d5fd6215ffcb4187c407a6436",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmPfUJBQPHo8FBmq3zTLzpPqMze1ch2neDaS3jywRTz5BW",
      created_at: "2023-01-25T14:41:28.97708Z",
      updated_at: "2023-01-25T14:41:28.97708Z"
    },
    {
      address: "0x609a22c3e93de1da119da0ef6787680812173d8e",
      name: "Smash Stars Daemons",
      description:
        "Play for free at https://smashstars.games\n    Smash Stars Daemons are the first digital collectibles for Smash Stars Thunderdome, the free-to-play multiplayer car brawler.\n    Create your action figure, choose your Daemon, load your rig \u2013 then head into the Thunderdome for intense tournaments of twisted steel in this physics-based, action-packed arcade battler.\n    ",
      icon_url:
        "https://metadata-prod.smashstars.games/daemons/collection/profile.gif",
      collection_image_url:
        "https://metadata-prod.smashstars.games/daemons/collection/profile.gif",
      project_id: 10112,
      project_owner_address: "0xf68e2ff70a0ef8f72951b47fe9a57b0b03574f51",
      metadata_api_url: "https://metadata-prod.smashstars.games/daemons/metadata",
      created_at: "2023-01-25T14:26:38.414798Z",
      updated_at: "2023-01-25T14:26:38.414798Z"
    },
    {
      address: "0x7bdef5292cf51e9591ce2e41973066350daf30ec",
      name: "Starsurf.io",
      description: "",
      icon_url:
        "https://nftstorage.link/ipfs/bafybeifyopuma2tzum566hdta5jifmf5ij2xuvurlyezavfetniyneaile",
      collection_image_url:
        "https://nftstorage.link/ipfs/bafybeifyopuma2tzum566hdta5jifmf5ij2xuvurlyezavfetniyneaile",
      project_id: 10108,
      project_owner_address: "0xb6b365b40fa9eda089183ed1fe4a7fb5615afec5",
      metadata_api_url:
        "https://nftstorage.link/ipfs/bafybeifm4prkpjuw353te4dfjetvp3pim6vhtdmvd2kmxxbecpkjdmcv44",
      created_at: "2023-01-25T09:23:41.915999Z",
      updated_at: "2023-01-25T12:20:39.085723Z"
    },
    {
      address: "0x4e7a9d19058c33387437431e4741c72002d3cc50",
      name: "Impact Theory Founders Key Anniversary",
      description:
        "This NFT collection is to celebrate the anniversaries of the Impact Theory Founders Key!",
      icon_url:
        "https://crm-api.founderskey.io/account/static/prod/impact-theory-founders-key-1-year-anniversary.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/impact-theory-founders-key-1-year-anniversary.png",
      project_id: 10111,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url:
        "https://crm-api.founderskey.io/account/drip/metadata/itfk/annual/first",
      created_at: "2023-01-25T04:02:57.787188Z",
      updated_at: "2023-01-25T04:12:06.64761Z"
    },
    {
      address: "0xa7ace201fbe7af0028a27c6f6869f657a3ce0a7e",
      name: "Impact Theory Legendary Dinners",
      description:
        "This NFT collection is for Impact Theory Legendary Dinners with Tom Bilyeu and other Impact Theory Legendary Key Holders.",
      icon_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn2023q1_icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn2023q1.png",
      project_id: 10110,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url:
        "https://crm-api.founderskey.io/account/drip/metadata/lqdn2023q1",
      created_at: "2023-01-25T03:51:04.190262Z",
      updated_at: "2023-01-25T03:51:04.190262Z"
    },
    {
      address: "0xab3635f0022718d206965043e4e605f5696ef0c6",
      name: "GPNFT",
      description: "Giant Purple Non-Flammable Tentacles",
      icon_url: "https://gpnft.me/logo.png",
      collection_image_url: "https://gpnft.me/logo.png",
      project_id: 10109,
      project_owner_address: "0x7a65e1538932111189b94c273997a9e6957c9ac1",
      metadata_api_url: "https://backend.gpnft.me/metadata",
      created_at: "2023-01-24T09:12:29.000761Z",
      updated_at: "2023-01-24T09:19:06.019452Z"
    },
    {
      address: "0xa04bcac09a3ca810796c9e3deee8fdc8c9807166",
      name: "Cross The Ages",
      description: "Main collection of Cross The Ages.",
      icon_url: "https://imx.cta-tcg-live.com/image/collection/icon.png",
      collection_image_url:
        "https://imx.cta-tcg-live.com/image/collection/banner.jpg",
      project_id: 10107,
      project_owner_address: "0x1ce0c5c0f9f6db71efaccd35cc9e9ab7c6986e5a",
      metadata_api_url: "https://imx.cta-tcg-live.com/metadata",
      created_at: "2023-01-19T15:25:56.329583Z",
      updated_at: "2023-01-19T15:25:56.329583Z"
    },
    {
      address: "0x7ce1915bffff5b0cd4d581467dd932bb1850ad33",
      name: "Arts of the Samurai",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmatiLw34Qqjj9VUqkVTw3PibbypT5gKqzSzdP1ybAQj7D/9.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmatiLw34Qqjj9VUqkVTw3PibbypT5gKqzSzdP1ybAQj7D/9.png",
      project_id: 10104,
      project_owner_address: "0x336ff48a75eb29af8d7829cf5a2dd5aef3ffc8b1",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmX5mNfZF11D6mii9njwPvhJTYo46yucnCgtVB8GXfD5Cy",
      created_at: "2023-01-15T13:11:47.766013Z",
      updated_at: "2023-01-15T13:11:47.766013Z"
    },
    {
      address: "0x7bb27df9b96df102371a8e74b6c7b5fc20f28fc8",
      name: "Undead Blocks Exclusives Vault (UBEXCLUSIVESVAULT)",
      description:
        "The Apocalypse has arrived! Undead Blocks is the world's first multiplayer zombie survival game on the GameStop Marketplace. Collect rare weapons and skins to rep your clout with friends and defend yourself from the horde! Weapon Skins in this collection do not guarantee any daily earning properties.",
      icon_url: "https://files.undeadblocks.com/ub_icon.png",
      collection_image_url: "https://files.undeadblocks.com/ub_icon.png",
      project_id: 10043,
      project_owner_address: "0x17813a6b890c82f6dae275686ad8f5ff969fe2f0",
      metadata_api_url:
        "https://be.undeadblocks.com/api/metadata/imx/0x7Bb27df9b96df102371A8e74B6c7b5Fc20f28fC8",
      created_at: "2023-01-14T14:43:21.8053Z",
      updated_at: "2023-01-14T14:43:21.8053Z"
    },
    {
      address: "0xaf99a9d7b604c445c521b3dfdb449f58f8c524ad",
      name: "Buqo.io",
      description: "Buqo.io",
      icon_url:
        "https://imagedelivery.net/fev7FiGQXQvnfCGqkBgnlA/buqo_io_svg/avatar",
      collection_image_url:
        "https://imagedelivery.net/fev7FiGQXQvnfCGqkBgnlA/buqo_io_svg/collection",
      project_id: 10103,
      project_owner_address: "0xe68445d70f7862ad33d9068dbbe5506d3d17d766",
      metadata_api_url: "https://metadata.l2api.art",
      created_at: "2023-01-14T14:31:39.323554Z",
      updated_at: "2023-01-14T14:31:39.323554Z"
    },
    {
      address: "0xeea2fe42cc1774a802edfc7a08a35c361827befc",
      name: "Qorbi World Pets",
      description:
        "Use these eggs to earn Qorbi World Pets. Pets are cross game assets that have in-game utility",
      icon_url: "https://www.qorbiworld.com/assets/img/Green_Isotype.png",
      collection_image_url:
        "https://qorbabies.mypinata.cloud/ipfs/QmXhgZkZxRAQsePEknxZqdYWExtfMKbMyFcYEJMQyS8qC5",
      project_id: 10101,
      project_owner_address: "0xab96c6ec687d0211981c0d800c25706b70047560",
      metadata_api_url:
        "https://qorbabies.mypinata.cloud/ipfs/QmYnajFgu4gmHrncmXKcvfrp2NJJdHuZdQwBgDN8Q1f9Ci",
      created_at: "2023-01-10T16:28:25.699709Z",
      updated_at: "2023-03-03T23:56:24.660921Z"
    },
    {
      address: "0x230ae3258a2697ed101df2a876a87eb6ad35f9c6",
      name: "Undead Blocks Warehouse (UBWAREHOUSE)",
      description:
        "The Apocalypse has arrived! Undead Blocks is the world's first multiplayer zombie survival game on the GameStop Marketplace. Collect rare weapons and skins to rep your clout with friends and defend yourself from the horde! Weapon Skins in this collection do not guarantee any daily earning properties.",
      icon_url: "https://files.undeadblocks.com/ub_icon.png",
      collection_image_url: "https://files.undeadblocks.com/ub_icon.png",
      project_id: 10043,
      project_owner_address: "0x17813a6b890c82f6dae275686ad8f5ff969fe2f0",
      metadata_api_url:
        "https://be.undeadblocks.com/api/metadata/imx/0x230ae3258A2697eD101Df2A876A87eb6aD35F9C6",
      created_at: "2023-01-04T10:00:17.641325Z",
      updated_at: "2023-01-04T10:00:17.641325Z"
    },
    {
      address: "0x49d700e5a8e5357d664258530636b62c0aa6947d",
      name: "Kongpanions",
      description: "Kongregate Kongpanions",
      icon_url:
        "https://ipfs.io/ipfs/Qma8HQGREHQjt2q1cBuxth9DbFd2YS1cYhCeWkUMtEX3aT",
      collection_image_url:
        "https://ipfs.io/ipfs/Qma8HQGREHQjt2q1cBuxth9DbFd2YS1cYhCeWkUMtEX3aT",
      project_id: 10098,
      project_owner_address: "0x9ed1d6d009a386e8c93ddf80526c03e6b1a6c675",
      metadata_api_url:
        "https://web3-api-metadata.kongregate.com/0x49d700e5a8e5357d664258530636b62c0aa6947d/imx",
      created_at: "2022-12-22T23:10:06.923472Z",
      updated_at: "2023-01-19T02:08:26.342951Z"
    },
    {
      address: "0x82dcc794ff38fe8011b80ad100104827abe8ed89",
      name: "E4C Rangers - HIVE",
      description:
        "After throwing off from HIVE, Bumble Fighter Thorn makes a clear break from his shady old life and is free as a Ranger now. Explore more about the stories of Thorn and HIVE at E4Cverse.\nE4C Rangers - HIVE is an independent collection for free E4C champions only.",
      icon_url: "https://cdn.ambrus.studio/NFTs/Logo-Series3.jpg",
      collection_image_url:
        "https://cdn.ambrus.studio/NFTs/Collection-Series3.jpg",
      project_id: 10024,
      project_owner_address: "0xe4cf86f7adbac98fab983f35fcd3c71e3e3c2720",
      metadata_api_url: "https://api.ambrus.studio/e4c-ranger/hive/metadata",
      created_at: "2022-12-22T16:49:12.305113Z",
      updated_at: "2022-12-22T16:49:12.305113Z"
    },
    {
      address: "0xca691324cce4ffddccbed945f60005bfac9f3b63",
      name: "NiFe Wars Comic Collection [Volume 1]",
      description:
        '"The Betrayal" is an exclusive collection of 5973  digital Comic Books. Each comic book features a unique cover with different traits, and immerses the reader in a riveting story that will go down as one of the greatest betrayals humanity has ever faced! All comic covers are 1 of 1 and unique in their own way. There are 6 available rarities, ranging from Common to Legendary.',
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmWdi9T2xfknQBunZJ5fdfLpteTdE6wZ6wgW73v1uUqhSq",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmWdi9T2xfknQBunZJ5fdfLpteTdE6wZ6wgW73v1uUqhSq",
      project_id: 10094,
      project_owner_address: "0xaa367d2e4a352ce221af771996fafc4955f8aff5",
      metadata_api_url:
        "https://moccasin-bright-cricket-465.mypinata.cloud/ipfs/QmYbfuSdZ4GD9cuQdypUjE63D1FnKBGnMTgomM6CSirEB9",
      created_at: "2022-12-19T01:16:44.952439Z",
      updated_at: "2023-02-01T16:12:51.959985Z"
    },
    {
      address: "0x3e79faf7ec7481e22be5fda2ccd735e54c0b392a",
      name: "Star Mechanics: Genesis Avatar Skins",
      description: "Website: https://starmechanics.xyz/",
      icon_url: "https://starmechanics.xyz/images/home/logo.png",
      collection_image_url: "https://starmechanics.xyz/images/home/logo.png",
      project_id: 10093,
      project_owner_address: "0xbcd837b777d4c79f15a118758dcda1d9dae439ed",
      metadata_api_url: "https://starmechanics.xyz/api/getnftmetadata/genesis",
      created_at: "2022-12-18T22:54:28.599126Z",
      updated_at: "2022-12-18T23:04:31.284769Z"
    },
    {
      address: "0xacc8b12fd8b08ecea19fb586c0c744f423fc3dd2",
      name: "Habbo Add Ons",
      description: "Habbo Add Ons description",
      icon_url: "",
      collection_image_url: "",
      project_id: 2185,
      project_owner_address: "0x1d1c83bc7130ac927ebea2c73bbe723ab2e3dfc0",
      metadata_api_url: "https://nft-tokens.habbo.com/addons/metadata",
      created_at: "2022-12-15T14:51:18.328448Z",
      updated_at: "2022-12-15T14:51:18.328448Z"
    },
    {
      address: "0x792df6705032cd3ad8a6aa3b3b7b0a42c0b9759c",
      name: "Habbo Pets",
      description: "Habbo Pets description",
      icon_url: "",
      collection_image_url: "",
      project_id: 2185,
      project_owner_address: "0x1d1c83bc7130ac927ebea2c73bbe723ab2e3dfc0",
      metadata_api_url: "https://nft-tokens.habbo.com/pets/metadata",
      created_at: "2022-12-15T14:38:48.058039Z",
      updated_at: "2022-12-15T14:38:48.058039Z"
    },
    {
      address: "0x11661b4f9eca8bed82cdbbe9b4de30613b81bf10",
      name: "Metafight - Passive Assets Cards",
      description: "Find all passive assets for fighters on Metafight",
      icon_url:
        "https://metafight.mypinata.cloud/ipfs/Qmd6XFaXHAfzPas4FbNzgEUNJaWCa9pEffJoEAvfybMvFL",
      collection_image_url:
        "https://metafight.mypinata.cloud/ipfs/QmNziTkM5iyJkHzXqVCGPCbjnpdxjaGFJLCHHrWaaAAbeU",
      project_id: 10091,
      project_owner_address: "0x5a9ba15ee79103f732c26e390bd00879bd34f324",
      metadata_api_url:
        "https://metafight.mypinata.cloud/ipfs/QmWmjvfEcz6ry3L5MAUcsvvDcD4qL2z8PVp5ZFmscWj2Vn",
      created_at: "2022-12-14T17:39:10.397235Z",
      updated_at: "2023-01-31T13:11:47.601644Z"
    },
    {
      address: "0x7c1826246c4b91a653ee2de5750f214719543a62",
      name: "Metafight - Fighters Cards",
      description: "Find all MMA fighters on Metafight",
      icon_url:
        "https://metafight.mypinata.cloud/ipfs/Qmd6XFaXHAfzPas4FbNzgEUNJaWCa9pEffJoEAvfybMvFL",
      collection_image_url:
        "https://metafight.mypinata.cloud/ipfs/QmQAQHVq8gB4WRj9dahPK9NGN6gQEedM4U7b7o5J8vVQaR",
      project_id: 10091,
      project_owner_address: "0x5a9ba15ee79103f732c26e390bd00879bd34f324",
      metadata_api_url:
        "https://metafight.mypinata.cloud/ipfs/QmegibY9Lc1jwvqp9g7s9CQj4LBNW8DNa3KtC5kZNsoqhv",
      created_at: "2022-12-14T17:21:20.528252Z",
      updated_at: "2023-01-31T13:59:55.152185Z"
    },
    {
      address: "0xd4c20679274d54995f0ad1855d3bc0cde1cbb3d5",
      name: "NewGanymede Assets",
      description: "",
      icon_url:
        "https://res.cloudinary.com/metakey/image/upload/v1670984948/imx/NewGanymedeAsset/NewGanymede_myo9xn.png",
      collection_image_url:
        "https://res.cloudinary.com/metakey/image/upload/v1670984948/imx/NewGanymedeAsset/NewGanymede_myo9xn.png",
      project_id: 10090,
      project_owner_address: "0xec878d1f77d449488cbe943d447b80ce99924310",
      metadata_api_url: "https://api.newganymede.com/api/assets/metadata",
      created_at: "2022-12-14T02:32:11.927361Z",
      updated_at: "2022-12-14T02:32:11.927361Z"
    },
    {
      address: "0xceff0e76e415ac27c7db54457244357f0e8ffde5",
      name: "Moonshot Christmas Carbon Card 2022",
      description:
        "Moonshot is a Web3 Innovation Lab based in Sydney, Australia. Moonshot helps brands unlock the untapped potential of Web3. It's been a big year for Moonshot, to say thank you for your support we decided to do something a little different for our Season's Greetings this year. Something a little more Web3. And, not just any NFT. This NFT is tied to a 26kg Carbon Offset which is precisely enough to cover even the heartiest of Christmas days. This means you can enjoy your Christmas day knowing that your Carbon emissions have been covered",
      icon_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmVykjJjmgUr2Nm6HgaCAqAasTuDFPxCBuATNHdYjY9q9W",
      collection_image_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/Qme7oZKxrNphNdXsH5JkGmbTvS66vSfdm2wuBc4u2FRpyC",
      project_id: 10089,
      project_owner_address: "0x33f0979ba19849887da59ff9a98627257177ca6a",
      metadata_api_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmTpMjDLjnPigygG2SryHtWphxUbiZe4jEzQs62yeZCvok",
      created_at: "2022-12-13T19:19:32.333397Z",
      updated_at: "2022-12-14T00:36:22.281661Z"
    },
    {
      address: "0xcbac57e83668651f35ba3ff058029e41b8d38970",
      name: "Aglet Apparel 1",
      description: "Aglet Apparel 1",
      icon_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      collection_image_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      project_id: 1790,
      project_owner_address: "0x41d70b3565d1e510a4e7c8e8ef1871f475b87a04",
      metadata_api_url:
        "https://api.on.life/blockchain/api/collections/3358390d-3f62-4c91-b2ef-7e4aa2812674/tokens/metadata",
      created_at: "2022-12-13T07:47:04.005499Z",
      updated_at: "2022-12-13T07:47:04.005499Z"
    },
    {
      address: "0xc0ffee305466ee77036dea25adc4022ae3ddf7cd",
      name: "imxcoffee.com",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmWWBSCgyY6ubiCVTHjkq3Q5XQHPfwVXxs7yhdu3V3eQ38",
      collection_image_url:
        "https://ipfs.io/ipfs/QmWWBSCgyY6ubiCVTHjkq3Q5XQHPfwVXxs7yhdu3V3eQ38",
      project_id: 10088,
      project_owner_address: "0xb3c15929108c3534552b520ed200de5438df038c",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmU9HJyz5dyXYUbEykQDyTbAiqqMy8bPibj1ftXXjSyVC4",
      created_at: "2022-12-10T07:53:03.838979Z",
      updated_at: "2022-12-10T07:53:03.838979Z"
    },
    {
      address: "0x18c8e93f93a18861442f47f3d1a76f3286c4f890",
      name: "ZZZ",
      description: "Aglet Apparel Staging",
      icon_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      collection_image_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      project_id: 1750,
      project_owner_address: "0xc7e4f43274da953454c21667799ee4c903b9e9e1",
      metadata_api_url:
        "https://api.staging.on.life/blockchain/api/collections/ceb156c8-afd1-4263-84fa-4b8891b5d187/tokens/metadata",
      created_at: "2022-12-09T10:55:01.386646Z",
      updated_at: "2022-12-09T10:55:01.386646Z"
    },
    {
      address: "0x5528a3d379825137a79d7335f38e4d671a474ca8",
      name: "The Lost Glitches Game",
      description:
        "Lost Glitches is a mixture of trading card game (TCG) and role-playing game (RPG). Players choose their syndicate, assemble their deck and gain experience to improve their character's skills and equipment, and eventually conquer the virtual world of Deep Sky.",
      icon_url:
        "https://playlostglitches.com/wp-content/uploads/2022/11/The-LOST-token-logo.jpg",
      collection_image_url:
        "http://playlostglitches.com/wp-content/uploads/2022/11/The-Lost-Glitches-Game.jpg",
      project_id: 10087,
      project_owner_address: "0x41776154912f6a5a6415e70b11d725de9f300a68",
      metadata_api_url:
        "https://europe-west3-tlg-live.cloudfunctions.net/getMetadataWithId",
      created_at: "2022-12-09T09:55:20.565382Z",
      updated_at: "2022-12-09T09:55:20.565382Z"
    },
    {
      address: "0xface0757bed3477a26a10e903ab474fd692d07eb",
      name: "Degenerate Toonz",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmaMY7rsSDiUB8TbQdtkKyS3D8WFfEaPpYmRpdhY7CRkHc/777.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmaMY7rsSDiUB8TbQdtkKyS3D8WFfEaPpYmRpdhY7CRkHc/777.png",
      project_id: 10085,
      project_owner_address: "0x395f5e912447da1ca3e4b104f1024afbd78f320e",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmWKP8sFPMmm5UEf9goWuSQmZt7SKtBuKC1XvuJLFk1MkM",
      created_at: "2022-12-07T11:32:47.542282Z",
      updated_at: "2022-12-07T11:32:47.542282Z"
    },
    {
      address: "0xb446b96b931f0cc59b89d584d32cf1466406895c",
      name: "Undead Blocks Skin Vault",
      description:
        "The Apocalypse has arrived! Undead Blocks is the world's first multiplayer zombie survival game on the GameStop Marketplace. Collect rare weapons and skins to rep your clout with friends and defend yourself from the horde! Weapon Skins in this collection do not guarantee any daily earning properties.",
      icon_url: "https://files.undeadblocks.com/ub_icon.png",
      collection_image_url:
        "https://files.undeadblocks.com/assets/minted/coffin-rare-new.png",
      project_id: 10043,
      project_owner_address: "0x17813a6b890c82f6dae275686ad8f5ff969fe2f0",
      metadata_api_url:
        "https://be.undeadblocks.com/api/metadata/imx/0xb446B96B931f0cc59B89d584d32cf1466406895c",
      created_at: "2022-12-02T05:29:26.550153Z",
      updated_at: "2022-12-06T14:50:06.486306Z"
    },
    {
      address: "0x8440cfdb17c0cdeb1d29c712b3ee7cd8933deb29",
      name: "YagaSDK: Impostor Academy NFT",
      description:
        "Yaga SDK is live! Enjoy your Unity Games with our seamless onboarding from Web2 to Web3 of only 15 minutes of integration time. Start playing with NFT now!",
      icon_url:
        "https://yagagames-sdk-production.s3.us-west-2.amazonaws.com/0ba677b2-51d1-650b-6598-b9f12cb22c26/1/images/1.png",
      collection_image_url:
        "https://yagagames-sdk-production.s3.us-west-2.amazonaws.com/0ba677b2-51d1-650b-6598-b9f12cb22c26/1/images/1.png",
      project_id: 10082,
      project_owner_address: "0x859e7ea7d26c7e4b71d8d9bd4a3234376efc9417",
      metadata_api_url:
        "https://yagagames-sdk-production.s3.us-west-2.amazonaws.com/0ba677b2-51d1-650b-6598-b9f12cb22c26/1/metadata",
      created_at: "2022-11-30T06:00:57.850807Z",
      updated_at: "2022-11-30T06:00:57.850807Z"
    },
    {
      address: "0xaab3f65aaaf4f9cd099ecc43d0ec5b1a979aa5e6",
      name: "The Numbers Club",
      description:
        "The Numbers Club is a raffle collection of NFTs. This is our first raffle collection within the Immutable X platform and the draw will run on the 12th of December of 2022 at 12pm AEST during a live that will be presented on Immutable X discord server. We also will be donating 50% of the profits (Sales - Prizes) to help people in need. The cost for each ticket (NFTs with numbers from 0-9999) will be 0.002 ETH + platform fees, and the PRIZE will be 1 ETH for the lucky winner (In case the sales are less than 1 ETH, the total amount of sales less 10% will be the prize). Important information, this first collection will be minted into the wallet 0x34EFE1927ba6Ff535e6326fBc602E584ae697709 and all the tickets/NFTs will have open orders at 0.002 ETH + platform fees.",
      icon_url:
        "https://bafkreiayz2ya73e53zejeej2buq37xp34oklt4z5gxbzsmr75d4yvwt4ky.ipfs.nftstorage.link/",
      collection_image_url:
        "https://bafkreientaygc3ojn3a3ynopkzeujojlsnuwn4732oubxj76mqtzivxc4y.ipfs.nftstorage.link/",
      project_id: 10081,
      project_owner_address: "0x34efe1927ba6ff535e6326fbc602e584ae697709",
      metadata_api_url:
        "https://bafybeiekfdso2fugujlj3ihdoc7nco47fszfgam6h6bshe4zyn25cdbju4.ipfs.nftstorage.link",
      created_at: "2022-11-30T04:59:46.101693Z",
      updated_at: "2022-12-05T03:10:48.639741Z"
    },
    {
      address: "0x8b4eb39340d52efabd87973ca96d6035a91b1d7c",
      name: "AETERNALIS",
      description:
        "Four Divine Beings known as the AETERNALIS. Designed by Antoni and Marc Tudisco.",
      icon_url: "https://i.imgur.com/ungOSyU.jpg",
      collection_image_url: "https://i.imgur.com/ungOSyU.jpg",
      project_id: 10080,
      project_owner_address: "0x867aa0af3253a8eb047d9a7aa46122423fbde28f",
      metadata_api_url:
        "https://arweave.net/lYs1MTYsVj_yTZ7ps1AKxf1-p-q_PAXKTkWg1JWkLME",
      created_at: "2022-11-29T14:08:25.243003Z",
      updated_at: "2022-11-29T14:08:25.243003Z"
    },
    {
      address: "0x9cff05e39a8f838b95c6614d51c438d6c2e29f30",
      name: "House of Boxing",
      description: "",
      icon_url: "",
      collection_image_url:
        "https://eterlast-prod-eu-west-1-django-storage.s3.amazonaws.com/collection-images/logo_hob_gR4F77r.png",
      project_id: 10079,
      project_owner_address: "0xbef308502cd76c8bb7a96493ac10ec1bcff18663",
      metadata_api_url:
        "https://omstiel.houseofboxing.com/s/api/1.0/nft/metadata",
      created_at: "2022-11-28T18:29:53.960553Z",
      updated_at: "2022-11-28T18:29:53.960553Z"
    },
    {
      address: "0x1948cca32085c1174c92f92b0c93a25520c4ee02",
      name: "Demonica Demons",
      description:
        "Demonica is a bold new soft rogue-like RPG P2E. In the game, you\u2019ll explore an ocean of shattered realities in beautiful isometric 3D. Explore dungeon spaces as small as a haunted diner, or vast as an cyberpunk arcology. Plucked from myth, popular culture, and even Earth\u2019s history - each world space will have its own rules. You\u2019ll fight in turn-based combat against an array of creatures, level up and gain new skills and abilities. And yes, you\u2019ll earn NFTs by playing.",
      icon_url:
        "https://lh3.googleusercontent.com/KKThWCcmzIPvGDfDcxtFY0yAwTvXEq_oIlmxG8OJNXZ6F5pIVeQWK1-6oktxEInIfRs0MoboPII7jvwbTzuJ2pr5u4b26NlijGh3ng=s0",
      collection_image_url:
        "https://i.seadn.io/gae/tmpPu4-lnpN-jBw8U7s_9MnUETku3xwjiDn4SDsynvZtSxn6zfGDt5AmkAtaqX2INvKCtstM3ncV7XnE7n6ETUvg7DZfDBUk2e137w?auto=format&w=1920",
      project_id: 10078,
      project_owner_address: "0x87003ee80af44e57bb530a83f557f167d48abb33",
      metadata_api_url:
        "https://demonica-dev.azurewebsites.net/api/metadata/imx/characters/demons",
      created_at: "2022-11-27T12:43:03.001778Z",
      updated_at: "2022-11-27T12:43:03.001778Z"
    },
    {
      address: "0x0738f81f7d45f97b73c2981f4915b8e8e77d7452",
      name: "Merry Modz Bark 2022",
      description:
        "Bark is an exclusive NFT drop for Merry Modz NFT holders. Bark is a custom one-of-one NFT designed by each Merry Modz holder allowing for maximum creativity and festive cheer. Merry Modz is a Christmas-themed feature length narrative franchise by Impact Theory Studios and legendary artist HerreraBox that debuted as a generative NFT project.",
      icon_url: "https://merrymodz.io/images/bark/2022/bark-2022.png",
      collection_image_url: "https://merrymodz.io/images/bark/2022/bark-2022.png",
      project_id: 10077,
      project_owner_address: "0xed6d4e598e2fb55fa4f8ba1c0297ecf863f9f332",
      metadata_api_url: "https://merrymodz.io/api/bark/2022/token",
      created_at: "2022-11-26T00:17:44.957487Z",
      updated_at: "2022-11-26T00:17:44.957487Z"
    },
    {
      address: "0xaf626ab49052cc2982be4269ea1efde964f33acd",
      name: "Supremacy War Machines",
      description: "Battle ready mechs for the Supremacy World.",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_war_machines.png",
      project_id: 10075,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0xAf626ab49052CC2982Be4269ea1EfDE964f33acD",
      created_at: "2022-11-25T15:23:34.093443Z",
      updated_at: "2022-11-25T15:23:34.093443Z"
    },
    {
      address: "0xbde74cc7df109bbab9b5ccf66a28b46ff3f2096e",
      name: "Supremacy Merchandise",
      description: "Be different, and discover the latest merchandise.",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_merchandise.png",
      project_id: 10075,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0xBDE74CC7DF109bBAB9B5CCf66a28B46FF3f2096e",
      created_at: "2022-11-25T15:23:28.674374Z",
      updated_at: "2022-11-25T15:23:28.674374Z"
    },
    {
      address: "0xb1c368f72c765b7d2e564b7d95ea2165d0b73978",
      name: "Supremacy Companions",
      description: "Loyal companions for the special citizen.",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_companions.png",
      project_id: 10075,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0xb1C368F72C765b7D2e564b7d95eA2165d0B73978",
      created_at: "2022-11-25T15:23:15.856217Z",
      updated_at: "2022-11-25T15:23:15.856217Z"
    },
    {
      address: "0xc7734cc5601d7fb5a3f57e8dffb8edc298d37acd",
      name: "Supremacy Weapons",
      description: "Equip your war machines, and defend your assets!",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_weapons.png",
      project_id: 10075,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0xC7734CC5601d7Fb5a3F57e8dFFb8edC298D37Acd",
      created_at: "2022-11-25T15:22:40.506796Z",
      updated_at: "2022-11-25T15:22:40.506796Z"
    },
    {
      address: "0x0d4dd8b4040bc7462013b282f834706844a10e01",
      name: "Supremacy Consumables",
      description: "Consumable items for use in Supremacy World.",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_consumables.png",
      project_id: 10050,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0x0d4dd8B4040BC7462013b282F834706844a10E01",
      created_at: "2022-11-25T15:05:01.240538Z",
      updated_at: "2022-11-25T15:05:01.240538Z"
    },
    {
      address: "0x4a068121dd608fdb18a331fcac539e7b74a7ae43",
      name: "Supremacy Furniture and Decor",
      description: "General items for furnishing your living space.",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/furniture.png",
      project_id: 10050,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0x4A068121DD608fDB18a331fcaC539E7b74a7Ae43",
      created_at: "2022-11-23T11:32:13.23878Z",
      updated_at: "2022-11-23T15:58:18.536815Z"
    },
    {
      address: "0x2c952692a1635278da4ca96f7b2953ababf9f00c",
      name: "MetaStar VIP Pass Collection",
      description:
        "VIP passes granting exclusive early access to the the very first MetaStar Strikers League!",
      icon_url: "",
      collection_image_url:
        "https://gold-electric-toucan-731.mypinata.cloud/ipfs/QmNugrdkbTN1aJ1oC9Lc8koab7nc84qmpjEqCnQ8PCjcW5",
      project_id: 10074,
      project_owner_address: "0xba1cb764304b29440d91cffca8ac5aa98d2efe0b",
      metadata_api_url:
        "https://gold-electric-toucan-731.mypinata.cloud/ipfs/QmWi6yyTL5FamCQUchJ98h8z4JZzFU9x3u2HoyRhwQfe6q",
      created_at: "2022-11-22T17:25:50.991347Z",
      updated_at: "2022-11-29T16:10:13.500921Z"
    },
    {
      address: "0x63ecb404fdcef8395819733847f7f282b18e9882",
      name: "Teste",
      description:
        "VIP passes granting exclusive early access to the the very first MetaStar Strikers League!",
      icon_url: "",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmZL5wjczK612mCbGTBuv38SiTsBmxxhFgWSxFyqbebDmb",
      project_id: 10073,
      project_owner_address: "0xba1cb764304b29440d91cffca8ac5aa98d2efe0b",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmSUxUkRGDzuZxCesFy5qZERU1vJiifgD8KcTsZoB53Bpa",
      created_at: "2022-11-22T11:29:57.915593Z",
      updated_at: "2022-11-22T16:47:42.922831Z"
    },
    {
      address: "0xc21909b7e596000c01318668293a7dfb4b37a578",
      name: "Nifty League: Items",
      description: "Collection of items used in Nifty League games!",
      icon_url:
        "https://raw.githubusercontent.com/NiftyLeague/Nifty-League-Images/main/NFTL-256x256.png",
      collection_image_url:
        "https://raw.githubusercontent.com/NiftyLeague/Nifty-League-Images/main/NFTL.png",
      project_id: 10070,
      project_owner_address: "0x6c287e19065661ca590a11cf0b419d1434991b67",
      metadata_api_url: "https://api.niftyleague.com/imx/items/metadata",
      created_at: "2022-11-17T14:21:30.891397Z",
      updated_at: "2022-11-17T14:21:30.891397Z"
    },
    {
      address: "0x2af9904103340c5106f6c5ecc51da17e9ba12bc6",
      name: "Merry Modz: Krampus",
      description:
        "Make your clawed footprint known in the world of NFTs with this exclusive drop from the legendary Francisco Herrera. Yes, it\u2019s KRAMPUS the ultimate Christmas villain! Witness as he tears through the Merry Modz world like it\u2019s cheap Christmas wrapping paper.Maybe you\u2019re over Christmas or maybe you just like the look of this magnificent monster - either way you\u2019re going to THRILL as you burn three 2021 Barks to receive your EXCLUSIVE Krampus. Head over to the MerryModz.io NOW. Get your Barks ready - and let the Krampus summoning commence!",
      icon_url: "https://merrymodz.io/images/krampus/krampus_icon.png",
      collection_image_url: "https://merrymodz.io/images/krampus/krampus.jpeg",
      project_id: 10069,
      project_owner_address: "0x1200839830ca09317e8cb1e849d8fd1c00fdebb9",
      metadata_api_url: "https://merrymodz.io/api/krampus/token",
      created_at: "2022-11-15T05:13:49.106912Z",
      updated_at: "2022-11-15T05:37:13.606078Z"
    },
    {
      address: "0xe57a54152792475e94cbc0b197afcbe15a22b614",
      name: "Tokies Test Collection",
      description: "Tokies Test Collection",
      icon_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmSZAw8MnXQZapzsndC15w7tXJ1Ttd4HamgGrBFGpTu4Sx/collection_image.png",
      collection_image_url: "",
      project_id: 10066,
      project_owner_address: "0xa0eea3aa8815c296ec38e8e8d6357e7f94b2ec10",
      metadata_api_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmZSneEAuWQ44BQwq4vxh2T5W4W99MCazSHTyZ6ysSigb6",
      created_at: "2022-11-14T22:23:17.840731Z",
      updated_at: "2022-11-14T22:23:17.840731Z"
    },
    {
      address: "0xe2c921ed59f5a4011b4ffc6a4747015dcb5b804f",
      name: "Kira Genesis Collection",
      description: "Kira Genesis Collection",
      icon_url:
        "https://prismacontent.sfo2.cdn.digitaloceanspaces.com/kiraverse/images/Kira-500x500.png",
      collection_image_url:
        "https://prismacontent.sfo2.cdn.digitaloceanspaces.com/kiraverse/images/Kira-500x500.png",
      project_id: 10065,
      project_owner_address: "0x867aa0af3253a8eb047d9a7aa46122423fbde28f",
      metadata_api_url:
        "http://arweave.net/GHb-wsIJZ2cpmcfmt8oHkPtCt-nXzdLbZ0sHy2JNfVI/1",
      created_at: "2022-11-11T14:56:22.993481Z",
      updated_at: "2023-03-08T06:18:19.358475Z"
    },
    {
      address: "0x6d7e845b55bfbbf55e80082bf60c50f0ed5cfe4d",
      name: "GenZers.io",
      description: "GenZers.io - NFT Marketplace",
      icon_url:
        "https://imagedelivery.net/fev7FiGQXQvnfCGqkBgnlA/icon-80-80/avatar",
      collection_image_url:
        "https://imagedelivery.net/fev7FiGQXQvnfCGqkBgnlA/collection-270-270/collection",
      project_id: 10063,
      project_owner_address: "0xe68445d70f7862ad33d9068dbbe5506d3d17d766",
      metadata_api_url: "https://metadata.l2api.art",
      created_at: "2022-11-11T14:04:28.376702Z",
      updated_at: "2022-12-12T15:36:17.051208Z"
    },
    {
      address: "0xc690a08cd7cf1b4d70617428da96bb48cd60e4fd",
      name: "Merry Modz Bark 2021",
      description:
        "Bark is an exclusive NFT drop for Merry Modz NFT holders. Bark is a custom one-of-one NFT designed by each Merry Modz holder allowing for maximum creativity and festive cheer. Merry Modz is a Christmas-themed feature length narrative franchise by Impact Theory Studios and legendary artist HerreraBox that debuted as a generative NFT project.",
      icon_url: "https://merrymodz.io/images/bark/v2/bark.png",
      collection_image_url: "https://merrymodz.io/images/bark/v2/bark.png",
      project_id: 10060,
      project_owner_address: "0xed6d4e598e2fb55fa4f8ba1c0297ecf863f9f332",
      metadata_api_url: "https://merrymodz.io/api/bark/v2/token",
      created_at: "2022-11-11T05:02:42.715052Z",
      updated_at: "2022-11-14T05:29:41.088831Z"
    },
    {
      address: "0xc2e5080a289577e7f902e83367ae2c4c5124fd5c",
      name: "Merry Modz Bark",
      description:
        "Bark is an exclusive NFT drop for Merry Modz NFT holders. Bark is a custom one-of-one NFT designed by each Merry Modz holder allowing for maximum creativity and festive cheer. Merry Modz is a Christmas-themed feature length narrative franchise by Impact Theory Studios and legendary artist HerreraBox that debuted as a generative NFT project.",
      icon_url: "https://merrymodz.io/images/bark/v2/bark.png",
      collection_image_url: "https://merrymodz.io/images/bark/v2/bark.png",
      project_id: 10057,
      project_owner_address: "0x457453cf4e80201743f5517996c099dea530f747",
      metadata_api_url: "https://merrymodz.io/api/bark/v2/token",
      created_at: "2022-11-10T06:07:34.976364Z",
      updated_at: "2022-11-10T06:25:49.606925Z"
    },
    {
      address: "0xdf715464d7521785447516b93b685484bf9602aa",
      name: "Impact Theory Legendary Dinners",
      description:
        "This NFT collection is for Impact Theory Legendary Dinners with Tom Bilyeu and other Impact Theory Legendary Key Holders.",
      icon_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn4_icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn4.jpeg",
      project_id: 10056,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url:
        "https://crm-api.founderskey.io/account/drip/metadata/lqdn4",
      created_at: "2022-11-08T01:36:48.840871Z",
      updated_at: "2022-11-08T01:36:48.840871Z"
    },
    {
      address: "0xb42df384dfc1b9227f63f12b753db0964d534c7b",
      name: "testy-bois",
      description: "test data but cool",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmecQRNuLCsFYt2fEwjYoUhHskdE27BM5yJuS7tnvZdoUK",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmecQRNuLCsFYt2fEwjYoUhHskdE27BM5yJuS7tnvZdoUK",
      project_id: 10055,
      project_owner_address: "0x606de01d44530fb8fabaaa204af17c6911bb9075",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmWz952HcsFqa6AR6A4vJJ26NzkpRyfB9FB4EPRYy9GH8r",
      created_at: "2022-11-07T05:30:04.918367Z",
      updated_at: "2022-11-07T05:30:04.918367Z"
    },
    {
      address: "0xfbf591f2f45dd28e4ab487f82bf2c4cc798ab235",
      name: "BLOCKLORDS HEROES",
      description:
        "BLOCKLORDS Heroes make up the characters of the game universe! Collect heroes by burning BLOCKLORDS Banners and play with them in-game!",
      icon_url: "https://cdn.blocklords.com/nfts/banner/icon.png",
      collection_image_url: "https://cdn.blocklords.com/nfts/hero/logo.png",
      project_id: 10044,
      project_owner_address: "0x35eed42be404fe4eb70c0a4bc0d5b80758f5bb2d",
      metadata_api_url: "https://hero-nft.blocklords.com/v1/hero-nfts/meta",
      created_at: "2022-11-04T13:54:36.408679Z",
      updated_at: "2022-11-07T12:18:15.053421Z"
    },
    {
      address: "0x7c3214ddc55dfd2cac63c02d0b423c29845c03ba",
      name: "Gods Unchained Cosmetics",
      description: "",
      icon_url: "https://images.godsunchained.com/misc/gu-sigel.png",
      collection_image_url:
        "https://images.godsunchained.com/misc/collection-cosmetics.png",
      project_id: 1,
      project_owner_address: "0xe0e1edcc95deb6db19f0618796bac59abfc2fe44",
      metadata_api_url:
        "https://assets.prod.prod.godsunchained.com/nft/metadata/0x7c3214ddc55dfd2cac63c02d0b423c29845c03ba",
      created_at: "2022-11-04T02:57:56.169163Z",
      updated_at: "2022-11-24T00:28:44.470568Z"
    },
    {
      address: "0x000009d284bc833fcb2b5b648f0be7f432dbf5ed",
      name: "Ape Haters Club",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmcBz5cbTwVVWrkHmjAfYku1kWJ965xb93Y9zEcKU5NGEi/5858.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmcBz5cbTwVVWrkHmjAfYku1kWJ965xb93Y9zEcKU5NGEi/5858.png",
      project_id: 10054,
      project_owner_address: "0x5d4ab251a6750315b38316ca2fedbbba444be76f",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmPYBCMoCkur83cLbSc2rzoMpYEoVdm38XbLLA3o9Mu2wJ",
      created_at: "2022-11-03T09:02:38.084601Z",
      updated_at: "2022-11-03T09:02:38.084601Z"
    },
    {
      address: "0x36ce3afef8c32443a3ac6b165dcd5e656701b1b6",
      name: "Mint pass Collection",
      description: "Collection of the mint passes to get packs",
      icon_url: "",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmUYcLz96JaUn4KpbgGNnkq4TuRyZqVNF26HRWKXmUKTyF",
      project_id: 10053,
      project_owner_address: "0x63768d92a13b746a51ca8dcad07d0181075a7742",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmRjpoDQBRCb7BL1g4Mv1qKWjUfaDb3pKgM1Lo26AuvWkq",
      created_at: "2022-11-02T09:02:38.164026Z",
      updated_at: "2022-11-10T15:03:41.490908Z"
    },
    {
      address: "0x4b505688e3ad77fbb4dfdaadfffc3dcfbfb0c281",
      name: "Brigadier - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/brigadier/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/Brigadier",
      created_at: "2022-11-02T07:09:14.539191Z",
      updated_at: "2022-11-02T07:09:14.539191Z"
    },
    {
      address: "0x0f96483b0286d478be6cc6d0faf6a43f3f4dcd1d",
      name: "Colonel - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/colonel/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/colonel",
      created_at: "2022-11-02T05:19:15.614339Z",
      updated_at: "2022-11-02T05:19:15.614339Z"
    },
    {
      address: "0x23004d1910adcf600518973730f71f9e050788e3",
      name: "Major - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/major/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/major",
      created_at: "2022-11-02T05:17:18.67106Z",
      updated_at: "2022-11-02T05:17:18.67106Z"
    },
    {
      address: "0x0f64e99768dc3ba2f0e8c6e30fd40c82352e21b1",
      name: "Captain - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/captain/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/captain",
      created_at: "2022-11-02T05:15:02.1923Z",
      updated_at: "2022-11-02T05:15:02.1923Z"
    },
    {
      address: "0x00a0659c3d44f5e5c857f42bdd10372634ef0229",
      name: "Hoplite - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/hoplite/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/hoplite",
      created_at: "2022-11-02T05:11:47.292341Z",
      updated_at: "2022-11-02T05:11:47.292341Z"
    },
    {
      address: "0xd19273543f5630fa6c848a0ac3a5931bfa1d1bfc",
      name: "Novice - Polemos Forge Public Beta",
      description:
        "Awarded for achievements in the Forge Public Beta, cosmetic item only.",
      icon_url: "https://mstatic.zeus.polemos.io/publicbeta/polemos_logo.png",
      collection_image_url:
        "https://mstatic.zeus.polemos.io/publicbeta/novice/badge.png",
      project_id: 10049,
      project_owner_address: "0xb0402a9ccc3756cd9fd2685034f6926d8183c28b",
      metadata_api_url: "https://mstatic.zeus.polemos.io/publicbeta/novice",
      created_at: "2022-11-02T04:36:26.300104Z",
      updated_at: "2022-11-02T04:36:26.300104Z"
    },
    {
      address: "0x2556c60dc201aa147493baa7071ef825b5b0cef2",
      name: "Arcade Games",
      description: "A collection of interactive arcade games.",
      icon_url:
        "https://beyourownarcade.mypinata.cloud/ipfs/QmNc8QDR5Mf2nAePnFaqbH1KL37dcxQeYMqjwXHZbu1Vhd",
      collection_image_url:
        "https://beyourownarcade.mypinata.cloud/ipfs/QmNc8QDR5Mf2nAePnFaqbH1KL37dcxQeYMqjwXHZbu1Vhd",
      project_id: 10052,
      project_owner_address: "0xe021f036eb12ea0e2f099d9b72a5501edc79cc7f",
      metadata_api_url:
        "https://beyourownarcade.mypinata.cloud/ipfs/QmRsh8BisiFEv7JsUpKQ6RirhuQw7RD6hJLvVFaRXuPhnD",
      created_at: "2022-11-01T20:14:14.766692Z",
      updated_at: "2022-11-04T11:50:39.456749Z"
    },
    {
      address: "0xd28048f8a521653a9b5199107b8c5f7efde654cd",
      name: "Narcos: Metaverse Boarding Pass",
      description:
        "The Narcos: Metaverse Boarding Pass - your ticket to the Narcos: Metaverse experience.  Learn more at https://narcosmetaverse.com",
      icon_url:
        "https://ipfs.everyrealm.com/ipfs/QmfVYRvkHoDAGYaLrVArehTUczAMoXz57Dhy9JxixwNYRP/Narcos-Icon.png",
      collection_image_url:
        "https://ipfs.everyrealm.com/ipfs/QmfVYRvkHoDAGYaLrVArehTUczAMoXz57Dhy9JxixwNYRP/Narcos-Banner.png",
      project_id: 10051,
      project_owner_address: "0x191912365e263bf3cee2c49c999629e26142900f",
      metadata_api_url: "https://api.narcosmetaverse.com/metadata",
      created_at: "2022-10-31T20:27:14.005889Z",
      updated_at: "2022-10-31T20:27:14.005889Z"
    },
    {
      address: "0xe1fe9873497c3c236f2826caf010db761bb23acd",
      name: "Supremacy Fashion",
      description: "Fashion for Supremacy MMO",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/fashion.png",
      project_id: 10050,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/0xE1fE9873497C3C236F2826CaF010dB761bB23AcD",
      created_at: "2022-10-31T07:50:43.354893Z",
      updated_at: "2022-11-25T16:14:50.64624Z"
    },
    {
      address: "0x60208b17e2986033c8c79fceff004887c54421d5",
      name: "Supremacy Land Deeds",
      description: "Land Deeds for Supremacy MMO",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/land_deed.png",
      project_id: 10050,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/land_deeds",
      created_at: "2022-10-31T07:39:16.994905Z",
      updated_at: "2022-11-02T08:56:25.253993Z"
    },
    {
      address: "0x303cf5d2bf4993ed1ee8dddf2f2f96897503ec66",
      name: "Supremacy Title Deeds",
      description: "Title Deeds for Supremacy MMO",
      icon_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/supremacy_world_collection.png",
      collection_image_url:
        "https://afiles.ninja-cdn.com/supremacy-world/images/nfts/imx_collections/supremacy_world/title_deed.png",
      project_id: 10050,
      project_owner_address: "0xecfb1f31f012db0bf6720610301f23f064c567f9",
      metadata_api_url:
        "https://api.supremacyworld.com/api/metadata/immutablex/title_deeds",
      created_at: "2022-10-31T07:10:47.02565Z",
      updated_at: "2022-11-02T08:57:03.402129Z"
    },
    {
      address: "0x73002a1f5958592b38b10fe4e2aa1209ceaaf824",
      name: "Sparkadia - Access Cards",
      description: "Sparkadia Access Cards",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmQopafkmDVJ4F3Hfr5VpqRouJ4bBhkmuSxsxSzvDZvmFP",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmWPW8LckHv4HBwiGF7kDqsTqtrWReDszwg5xvqqBV6doj",
      project_id: 10048,
      project_owner_address: "0x107bdf159fdfc7d31e81fb366ea20441e70384cd",
      metadata_api_url:
        "https://sparkadia-nft-metadata.s3.us-west-1.amazonaws.com/sparkadia-accesscards",
      created_at: "2022-10-30T04:43:43.412839Z",
      updated_at: "2022-10-30T04:43:43.412839Z"
    },
    {
      address: "0x979ca6e786e8357970389b303dcb0154c2c06149",
      name: "Test-Heroes (Do Not Buy)",
      description:
        "BLOCKLORDS Heroes make up the characters of the game universe! Collect heroes by burning BLOCKLORDS Banners and play with them in-game!",
      icon_url: "https://cdn.blocklords.com/nfts/banner/icon.png",
      collection_image_url: "https://cdn.blocklords.com/nfts/banner/logo.png",
      project_id: 10005,
      project_owner_address: "0x75ed05e84dda28b3ef3509459d088a997e944d44",
      metadata_api_url: "https://pre-hero-nft.blocklords.com/v1/hero-nfts/meta",
      created_at: "2022-10-27T22:23:21.643586Z",
      updated_at: "2022-11-02T15:14:56.579271Z"
    },
    {
      address: "0x267b3094bc817cfef96b8924738b1f1701a69c35",
      name: "Blood Vessels",
      description: "A surreal horror fantasy set in late 1800s Chicago",
      icon_url: "https://bloodvessels.io/icon-512.png",
      collection_image_url: "https://bloodvessels.io/images/cover_image.jpg",
      project_id: 10047,
      project_owner_address: "0x8b7043009c840a5f67dd10dad585a71dbda84899",
      metadata_api_url: "https://bloodvessels.io/api/metadata",
      created_at: "2022-10-25T21:10:28.3906Z",
      updated_at: "2022-10-25T21:10:28.3906Z"
    },
    {
      address: "0x8e30af222660441db3d26f70ab734a946ff056a2",
      name: "ESL Collectibles",
      description: "ESL Collectibles",
      icon_url: "https://cdn.kolex.gg/assets/icons/esl_loadout.png",
      collection_image_url: "https://cdn.kolex.gg/assets/icons/esl_loadout.png",
      project_id: 10046,
      project_owner_address: "0x3f83184cbebe0eb1802f5803f2b93cd2d04c6654",
      metadata_api_url:
        "https://api.kolex.gg/public/v1/ethereum/metadata/0x8E30Af222660441DB3d26f70AB734A946Ff056a2",
      created_at: "2022-10-25T16:35:45.77163Z",
      updated_at: "2022-10-25T16:35:45.77163Z"
    },
    {
      address: "0x57dc3391c74c65d19454f860aff40a28ec1fd051",
      name: "BLOCKLORDS BANNERS",
      description:
        "This banner is a collectable digital asset and can be exchanged for Heroes, in-game rewards, and more! Collect more banners from chests or the market.",
      icon_url: "https://cdn.blocklords.com/nfts/banner/icon.png",
      collection_image_url: "https://cdn.blocklords.com/nfts/banner/logo.png",
      project_id: 10044,
      project_owner_address: "0x35eed42be404fe4eb70c0a4bc0d5b80758f5bb2d",
      metadata_api_url: "https://banner-nft.blocklords.com/v1/banner-nfts/meta",
      created_at: "2022-10-21T20:13:47.820229Z",
      updated_at: "2022-10-25T13:52:35.216063Z"
    },
    {
      address: "0xca28cc269ea067f12753a028c25b5b0f09bfcb8c",
      name: "CLIQUITA BRATANAS",
      description: "NFA",
      icon_url: "https://niftee-pub.s3.amazonaws.com/cliquita.jpg",
      collection_image_url: "https://niftee-pub.s3.amazonaws.com/cliquita.jpg",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2022-10-21T08:59:08.640431Z",
      updated_at: "2022-10-21T08:59:08.640431Z"
    },
    {
      address: "0x883127c3e25354542603c1fb6ff2d27d545a0fa0",
      name: "Undead Blocks Weapon Apocalypse (WEAPONS)",
      description: "",
      icon_url: "https://files.undeadblocks.com/ub_icon.png",
      collection_image_url: "https://files.undeadblocks.com/ub_icon.png",
      project_id: 10043,
      project_owner_address: "0x17813a6b890c82f6dae275686ad8f5ff969fe2f0",
      metadata_api_url:
        "https://be.undeadblocks.com/api/metadata/imx/0x883127C3e25354542603C1Fb6FF2D27D545A0fa0",
      created_at: "2022-10-19T15:55:35.377422Z",
      updated_at: "2022-10-19T15:55:35.377422Z"
    },
    {
      address: "0x80dbbdcb4280030fb22e2a9d671a368211d49d6e",
      name: "Undead Blocks Weapon Loadouts (LOADOUT)",
      description: "",
      icon_url: "https://files.undeadblocks.com/ub_icon.png",
      collection_image_url: "https://files.undeadblocks.com/ub_icon.png",
      project_id: 10043,
      project_owner_address: "0x17813a6b890c82f6dae275686ad8f5ff969fe2f0",
      metadata_api_url:
        "https://be.undeadblocks.com/api/metadata/imx/0x80DBBdcB4280030Fb22E2a9d671A368211D49D6e",
      created_at: "2022-10-19T15:53:44.583851Z",
      updated_at: "2022-10-19T15:53:44.583851Z"
    },
    {
      address: "0xbbfa5a8eacc76ee97f127b6e7b76e69efed17235",
      name: "Amsterdam Dance Event 2022 Demo Proof Of Attendance",
      description:
        "A collection of proof of attendance tokens for the Amsterdam Dance Event 2022 verified by Fr0ntierX",
      icon_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086361/poa-assets/poa-ade-logo_c3cusp.png",
      collection_image_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086362/poa-assets/poa-ade-feature_kyobop.png",
      project_id: 10042,
      project_owner_address: "0xa2665f68a69aa160e19a8427160d41ef1a6db548",
      metadata_api_url:
        "https://jz5tgzyqpl.execute-api.eu-central-1.amazonaws.com/prod/metadata",
      created_at: "2022-10-19T11:34:03.698002Z",
      updated_at: "2022-10-19T11:52:11.783741Z"
    },
    {
      address: "0xef49641d7f5e3aed31dba5b2b390c34cb17699a2",
      name: "Amsterdam Dance Event 2022 Proof Of Attendance",
      description:
        "A collection of proof of attendance tokens for the Amsterdam Dance Event 2022 verified by Fr0ntierX",
      icon_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086361/poa-assets/poa-ade-logo_c3cusp.png",
      collection_image_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086362/poa-assets/poa-ade-feature_kyobop.png",
      project_id: 10040,
      project_owner_address: "0x3abd3ba1be0805ed5d6fb68c4fdf3ca2cbd14385",
      metadata_api_url:
        "https://63mgryulb6.execute-api.eu-central-1.amazonaws.com/prod/metadata",
      created_at: "2022-10-19T00:00:17.591822Z",
      updated_at: "2022-10-19T00:00:17.591822Z"
    },
    {
      address: "0x082ee29c847857a0f5f4a3a96eeb912eb784da52",
      name: "Amsterdam Dance Event 2022 Proof Of Attendance",
      description:
        "A collection of proof of attendance tokens for the Amsterdam Dance Event 2022 verified by Fr0ntierX",
      icon_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086361/poa-assets/poa-ade-logo_c3cusp.png",
      collection_image_url:
        "https://res.cloudinary.com/fr0ntier-x/image/upload/v1666086362/poa-assets/poa-ade-feature_kyobop.png",
      project_id: 10038,
      project_owner_address: "0x3abd3ba1be0805ed5d6fb68c4fdf3ca2cbd14385",
      metadata_api_url:
        "https://63mgryulb6.execute-api.eu-central-1.amazonaws.com/prod/metadata",
      created_at: "2022-10-18T12:52:40.366454Z",
      updated_at: "2022-10-18T12:52:40.366454Z"
    },
    {
      address: "0x07ffd4bc1c731b9e1cf33d2022e0f08f4cb13868",
      name: "Test Collection",
      description: "Test Collection Description",
      icon_url: "https://example.com/icon.png",
      collection_image_url: "https://example.com/collection.png",
      project_id: 10036,
      project_owner_address: "0xa75b22cc605e024a7c64c597ba539e0448708c0c",
      metadata_api_url:
        "https://marketplace-api.stardust.gg/v1/token-get/immutablex",
      created_at: "2022-10-17T18:10:07.541607Z",
      updated_at: "2023-02-25T19:17:23.818476Z"
    },
    {
      address: "0xd6290ac02981dfca715a4c760d1eb8073a849657",
      name: "Aethereal Parcels",
      description:
        "Beautiful, stable, and saturated with raw power, a Parcel is a mystical garden connected to the soul of the owner, providing a constant flow of energy, strength and protection.",
      icon_url:
        "https://cdn.tatsu.gg/static/aethereal-parcel/Icon_AetherealParcel_50x50.jpg",
      collection_image_url:
        "https://cdn.tatsu.gg/static/aethereal-parcel/Cover_AetherealParcel_500x500.jpg",
      project_id: 10033,
      project_owner_address: "0x7a7546a486b0804cc86227f8e6123d710ecdcb86",
      metadata_api_url: "https://cdn.tatsu.gg/static/aethereal-parcel/token",
      created_at: "2022-10-14T08:15:03.472555Z",
      updated_at: "2022-10-14T08:15:03.472555Z"
    },
    {
      address: "0x3f03e82867e2fc7318e2ea561ac3963e6924fc0a",
      name: "Fanisko Metaverse Baseball League - MBL",
      description:
        "World first Metaverse Baseball League with NFTs that allows fans to own teams, coaches, players, stadiums, and a lot more!",
      icon_url:
        "https://d1u2maujpzk42.cloudfront.net/fanisko-nft-collection/nft-collection-icon.jpg",
      collection_image_url:
        "https://d1u2maujpzk42.cloudfront.net/fanisko-nft-collection/nft-collection-image.jpg",
      project_id: 10029,
      project_owner_address: "0xbeb871c6d60f599d4781a2b12effe3adc99c502e",
      metadata_api_url: "https://dyuk1idvf0dxa.cloudfront.net/imx-meta",
      created_at: "2022-10-09T20:24:59.857509Z",
      updated_at: "2022-10-09T20:24:59.857509Z"
    },
    {
      address: "0xfe6c2640ddc303def89a8d69c51dc990df14b573",
      name: "00000000 Oddities",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmRBmCS4QsCW5DfYJhTdLnzV2LczW75hs5a1HHFFrhxomd",
      collection_image_url:
        "https://ipfs.io/ipfs/QmRBmCS4QsCW5DfYJhTdLnzV2LczW75hs5a1HHFFrhxomd",
      project_id: 10027,
      project_owner_address: "0xfc7d14345330000cd5a24119f36660e2144c0f2a",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmS1MC2zZtec8wDuvqTuJt7nB6aQf4MjjwL5SuraSDi5w7",
      created_at: "2022-10-07T07:20:44.554332Z",
      updated_at: "2022-10-07T07:20:44.554332Z"
    },
    {
      address: "0xc17aa29c43e4ce0c349749c8986a03b2734813fa",
      name: "E4C Rangers Rangers Edition",
      description:
        "E4C Rangers consists of avatars derived from 7 champions in the E4Cverse. Holders have special utilities, including the partial in-game IP ownership of the corresponding character and game assets airdrops, such as champions and skins. For more info, please refer to our website https://www.ambrus.studio/",
      icon_url: "https://cdn.ambrus.studio/NFTs/Logo-Rangers.jpg",
      collection_image_url: "https://cdn.ambrus.studio/NFTs/Logo-Rangers.jpg",
      project_id: 10024,
      project_owner_address: "0xe4cf86f7adbac98fab983f35fcd3c71e3e3c2720",
      metadata_api_url: "https://api.ambrus.studio/e4c-ranger/rangers/metadata",
      created_at: "2022-10-05T16:12:16.912667Z",
      updated_at: "2022-12-02T06:14:02.334577Z"
    },
    {
      address: "0xba265b93519e6473f34f46ee35f4b23970f41a3f",
      name: "E4C Rangers Gold Edition",
      description:
        "E4C Rangers consists of avatars derived from 7 champions in the E4Cverse. Holders have special utilities, including the partial in-game IP ownership of the corresponding character and game assets airdrops, such as champions and skins. For more info, please refer to our website https://www.ambrus.studio/",
      icon_url: "https://cdn.ambrus.studio/NFTs/Logo-Gold.jpg",
      collection_image_url: "https://cdn.ambrus.studio/NFTs/Logo-Gold.jpg",
      project_id: 10024,
      project_owner_address: "0xe4cf86f7adbac98fab983f35fcd3c71e3e3c2720",
      metadata_api_url: "https://api.ambrus.studio/e4c-ranger/gold/metadata",
      created_at: "2022-09-30T01:33:56.717159Z",
      updated_at: "2022-11-06T15:05:53.324949Z"
    },
    {
      address: "0xbb0e6397a02d44ca87f7121b9e5522b21d94e1f4",
      name: "Oxya X Superstonk",
      description:
        "This collection was born through a giveway made by Oxya Origin to the Superstonk Reddit community. It features the key symbols of the superstonk community mixed with Oxyan traits and designs. Holders of the NFT are automatically whitelisted for Oxya Origin Landmint taking place on October 9th 2022 and benefit from various perks.",
      icon_url:
        "https://oxya-origin.mypinata.cloud/ipfs/QmSNxfWLYUmNPrzh3wRLDgR2Lq77iAzYofwPH7Fc2tS9Jo",
      collection_image_url:
        "https://oxya-origin.mypinata.cloud/ipfs/QmSNxfWLYUmNPrzh3wRLDgR2Lq77iAzYofwPH7Fc2tS9Jo",
      project_id: 10023,
      project_owner_address: "0x971f8fc9eedc9cfba75a716aff559ba87bbf3940",
      metadata_api_url: "https://api.oxyaorigin.com/api/metadata/superstonks",
      created_at: "2022-09-29T16:57:26.637748Z",
      updated_at: "2022-09-29T16:57:26.637748Z"
    },
    {
      address: "0xc03253f5a3482fc380e1dc64c2bf973d1b343a6c",
      name: "The Launch Collection",
      description: "Collection of the Launch",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmdXjKFNCUiJY9i1JRzRpqdswidH1FNynXJoHKFAwiopMy",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmdXjKFNCUiJY9i1JRzRpqdswidH1FNynXJoHKFAwiopMy",
      project_id: 10022,
      project_owner_address: "0x57b8228de687e4bd0660524f2fd43991766989c0",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmW5dyhrWYs6JWxu5XqLyEhTYGwGwUatE34NnX6ZdPj8R2",
      created_at: "2022-09-28T06:46:00.235869Z",
      updated_at: "2022-10-21T06:46:30.95125Z"
    },
    {
      address: "0xf03c8f35b0213b5872e6f56fa7c54ed3e2ddda83",
      name: "BERTELSMANN MANAGEMENT MEETING 2022",
      description:
        "A digital collectible was created for this event. This is a proof of attendance at virtual and real events. This proof is provided by a unique NFT badge that can only be earned by attending this specific event. With these badges, you can document your crypto activities not only for yourself, but also present them to the outside world.",
      icon_url: "https://niftee-pub.s3.amazonaws.com/brtls_logo_breit.jpg",
      collection_image_url:
        "https://niftee-pub.s3.amazonaws.com/brtls_logo_breit.jpg",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2022-09-27T09:26:33.746234Z",
      updated_at: "2022-09-27T09:26:33.746234Z"
    },
    {
      address: "0xdefc1ebc71bf7684437e53f552e762e1763c0836",
      name: "001GEN Red Rocks",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmeGWwMh5T5CB1EQ7aBkJqVJ5gJuGLcdztukFJracmY57N/100.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmeGWwMh5T5CB1EQ7aBkJqVJ5gJuGLcdztukFJracmY57N/100.png",
      project_id: 10021,
      project_owner_address: "0x815f5015e5c2b9ae49f53a609993524bfed67d20",
      metadata_api_url:
        "http://ipfs.io/ipfs/QmdQe8twjoi4LaUjphPc9XhjRxwAzJLWZfMrFeSvaA2hjg",
      created_at: "2022-09-25T17:12:55.385381Z",
      updated_at: "2022-09-25T17:12:55.385381Z"
    },
    {
      address: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
      name: "test123",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 10017,
      project_owner_address: "0x3b333e68ac5bdab09cf1a402e07bba3041aaf11d",
      metadata_api_url: "",
      created_at: "2022-09-23T07:14:01.689826Z",
      updated_at: "2022-09-23T07:14:01.689826Z"
    },
    {
      address: "0x4f7e0538827bbf082fce398c3877ba950d1c0896",
      name: "Delysium",
      description:
        "All Delysium Universes gather together to become Delysium Multiverse, and each universe is run by a different Delysium Multiverse Operator(DMO), creating highly diverse game experience and unique On-chain Incentive Layer(OIL) for players.",
      icon_url:
        "https://storage.delysium.com/ui/marketplace/suitsales/delysium_logo_black.png",
      collection_image_url:
        "https://storage.delysium.com/ui/marketplace/suitsales/suitsales_poster.png",
      project_id: 10016,
      project_owner_address: "0x368ccb06097ef6d6f32f51fd8ec14e9388d9e151",
      metadata_api_url: "https://market-api.delysium.com/contracts/imx",
      created_at: "2022-09-23T06:14:16.223219Z",
      updated_at: "2022-09-23T06:14:16.223219Z"
    },
    {
      address: "0x6465ef3009f3c474774f4afb607a5d600ea71d95",
      name: "Bitverse Heroes",
      description:
        "Own your progress. Own your brand. Access exclusive content. Bitverse Heroes are your key to the exciting Bitverse.",
      icon_url: "https://thebitverse.io/nft-assets/heroes_cover_image.png",
      collection_image_url:
        "https://thebitverse.io/nft-assets/heroes_cover_image.png",
      project_id: 10014,
      project_owner_address: "0x771642c8ad544b48308f5e3a49d73da94d62be3f",
      metadata_api_url: "https://thebitverse.io/api/heroes/metadata/imx",
      created_at: "2022-09-17T00:50:57.31643Z",
      updated_at: "2022-09-17T00:50:57.31643Z"
    },
    {
      address: "0xe4ac52f4b4a721d1d0ad8c9c689df401c2db7291",
      name: "Bitverse Portals",
      description:
        "A Bitverse Portal serves as the gateway for summoning a Bitverse Hero. Burn this NFT on thebitverse.io and receive a freshly mint Bitverse Hero. Rarities and drop percentages determine the rarity of your hero.",
      icon_url: "https://thebitverse.io/nft-assets/portals_cover_image.png",
      collection_image_url:
        "https://thebitverse.io/nft-assets/portals_cover_image.png",
      project_id: 10014,
      project_owner_address: "0x771642c8ad544b48308f5e3a49d73da94d62be3f",
      metadata_api_url: "https://thebitverse.io/api/packs/metadata/imx",
      created_at: "2022-09-17T00:34:54.526894Z",
      updated_at: "2022-09-17T00:34:54.526894Z"
    },
    {
      address: "0xe62eafb6601e37728d7a5fcdf7edba89b8c3227f",
      name: "MetaJuice Collection - Copper",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 10012,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-09-16T22:18:34.438385Z",
      updated_at: "2022-10-05T20:48:19.300594Z"
    },
    {
      address: "0x203ddf7efd1d5959f58a77381dce5691f4bdea15",
      name: "Sparkadia Origin",
      description: "Sparkadia Origin",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmQopafkmDVJ4F3Hfr5VpqRouJ4bBhkmuSxsxSzvDZvmFP",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmWPW8LckHv4HBwiGF7kDqsTqtrWReDszwg5xvqqBV6doj",
      project_id: 10007,
      project_owner_address: "0x77d8a1467a825c81a4d1dd58722323e3cabcbbd0",
      metadata_api_url:
        "https://sparkadia-nft-metadata.s3.us-west-1.amazonaws.com/sparkadia-origin",
      created_at: "2022-09-13T17:53:05.248616Z",
      updated_at: "2022-09-13T17:53:05.248616Z"
    },
    {
      address: "0x2268d9cacaa1b1735098b80391c52b2bf4b40960",
      name: "IMX SWE Interns 2022 Edition",
      description:
        "You thought the interns were only here for three months. Wrong. We stay forever. On the blockchain.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmQbp2QSoM62NAgExaN32BZz41pXnXnoJUPNL6bTiuNadT",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmQbp2QSoM62NAgExaN32BZz41pXnXnoJUPNL6bTiuNadT",
      project_id: 10006,
      project_owner_address: "0x9e138642eb0b85ab13db0087e981fcd49291853f",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmVcdea6PAFBNRrW597uJLiB61UFyFW5h4NYRXfhMRqAPB",
      created_at: "2022-09-08T15:01:32.782789Z",
      updated_at: "2022-09-08T15:01:32.782789Z"
    },
    {
      address: "0xf048aed0c64b9d4f74e88f8f7f0d63ab403a04b2",
      name: "DAPPXPR-917 Test Data",
      description: "<p>Test data for DAPPXPR-917</p>\n",
      icon_url: "https://www.svgrepo.com/show/185271/laptop-technology.svg",
      collection_image_url:
        "https://www.svgrepo.com/show/185271/laptop-technology.svg",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmNdaTKtMWWiTg8HN4vXP7kWyGkn2GdhHeAqfMxkMU8ntV",
      created_at: "2022-09-08T05:14:07.950902Z",
      updated_at: "2022-09-08T05:14:07.950902Z"
    },
    {
      address: "0x0dd260d4d708dcbe701be3266d6c8650fc55475c",
      name: "DAPPXPR-918",
      description: "<p>Test collection for DAPPXPR-918</p>\n",
      icon_url:
        "https://www.svgrepo.com/show/424694/business-factory-illustration.svg",
      collection_image_url:
        "https://www.svgrepo.com/show/424694/business-factory-illustration.svg",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmP7MesUwzjFhUA4CYGARM5Hm9zU3nJPnuMAMoAkm1Uo5W",
      created_at: "2022-09-07T10:09:23.545152Z",
      updated_at: "2022-09-07T10:09:23.545152Z"
    },
    {
      address: "0x8946e890db07320ab2dee22a82d7340991c85dc5",
      name: "Test-Banners (Do Not Buy)",
      description:
        "This banner is a collectable digital asset and can be exchanged for Heroes, in-game rewards, and more! Collect more banners from chests or the market.",
      icon_url: "https://cdn.blocklords.com/nfts/banner/icon.png",
      collection_image_url: "https://cdn.blocklords.com/nfts/banner/logo.png",
      project_id: 10005,
      project_owner_address: "0x75ed05e84dda28b3ef3509459d088a997e944d44",
      metadata_api_url:
        "https://pre-banner-nft.blocklords.com/v1/banner-nfts/meta",
      created_at: "2022-09-07T00:06:06.681281Z",
      updated_at: "2022-10-25T13:51:27.432897Z"
    },
    {
      address: "0x2f6dddffdf9415b50244baef61c728814693f1f3",
      name: "YED Revenue Asset",
      description: "<p></p>\n",
      icon_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmRBiQm2GEDtMWLHNPGAuE3trU4sCBxvb3e1r4otkLNEEC",
      collection_image_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmNRABv2oPh2rWiLhpmo4ocw4Z1ikdRbATbzYXbGMXgR7u",
      project_id: 10003,
      project_owner_address: "0xce7f9026a905f52789afe1798543a6e6347389cb",
      metadata_api_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmPTbMXJD8kqDFM1pPSw1AHvYwBvby3xBLpRRcKYA1rSN1",
      created_at: "2022-09-06T06:17:09.169895Z",
      updated_at: "2022-09-06T06:17:09.169895Z"
    },
    {
      address: "0xec05b69ba4c192fecd98a4baecf156ec429d4a61",
      name: "YED Regular Spot",
      description:
        "<p>Owners may mine $ACE crypto through EDAO earnings, generate digital electricity to be traded in the Acent DEX, build their own metasites, play-to-earn games and run their own businesses. Important details on the availability of its function is constantly updated within the Metaweb OS release notes and the Your Earth DAO social media channels.</p>\n",
      icon_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmRBiQm2GEDtMWLHNPGAuE3trU4sCBxvb3e1r4otkLNEEC",
      collection_image_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmTDni5AkuqgRhsDwKs2jrDVdDZfW59PHE1QafjqJdQPBD",
      project_id: 10003,
      project_owner_address: "0xce7f9026a905f52789afe1798543a6e6347389cb",
      metadata_api_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmYsEBs7ZKT1Pg4VEyAQJAoVbY3ZSuhhHsZ2t16hr7XEEm",
      created_at: "2022-09-06T06:15:05.268079Z",
      updated_at: "2022-09-06T06:15:05.268079Z"
    },
    {
      address: "0x43a8a50f8bcb02f93e1fd32361ae21dad47614cd",
      name: "YED Themed Spot",
      description:
        "<p>Themed Spots have substantial advantages over Regular Spots. $ACE mining profitability is 4.5 times of regular land spots. Additionally, the Acent core team develops the real estates of the Themed Spots to guarantee high demand rental revenue and traffic generation. Important details on additional powerful features of Themed Spots are constantly updated within the Metaweb OS release notes and the Your Earth DAO social media channels.</p>\n",
      icon_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmRBiQm2GEDtMWLHNPGAuE3trU4sCBxvb3e1r4otkLNEEC",
      collection_image_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmchVYVBdVCjMgYLFP1wtoCoqT6f4Je6RnVLop6J9nCBbn",
      project_id: 10003,
      project_owner_address: "0xce7f9026a905f52789afe1798543a6e6347389cb",
      metadata_api_url:
        "https://acentnftgateway.mypinata.cloud/ipfs/QmNdaTKtMWWiTg8HN4vXP7kWyGkn2GdhHeAqfMxkMU8ntV",
      created_at: "2022-09-06T06:13:59.181338Z",
      updated_at: "2022-09-06T06:13:59.181338Z"
    },
    {
      address: "0x5f6e8f059be880474a8aad1a0d8716848a5e7efa",
      name: "Community Playing Cards",
      description: "Cards built by the Community, for the Community. Be an O.G.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmVG2zS1bVj27T3RerQo6saeeckRKuvwEB8APqpcwe2brs",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmQAEXxsCCSFUc2SATA8GfV7ZjPgFeYirRHMAbodch3FkY",
      project_id: 10004,
      project_owner_address: "0x42cd5d955083a6381c883b9927dc6e9294df4895",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmcQvTTVxHjKp8waM9nSWwwGEBMer89khN677N5MnvGULK",
      created_at: "2022-09-05T10:51:40.943733Z",
      updated_at: "2022-09-05T11:27:17.009989Z"
    },
    {
      address: "0x5d0b14bbc804a12b807f8d71a8161b4f8cd20232",
      name: "Dark Taverns Cast Keys",
      description: "",
      icon_url:
        "https://ipfs.filebase.io/ipfs/Qmf4GGujqabL5T4dBiPxCfUmJQ6BaBrCULK1Jd7BTSyYWD/DarkTaverns_circle_logo_350x350.png",
      collection_image_url:
        "https://ipfs.filebase.io/ipfs/Qmf4GGujqabL5T4dBiPxCfUmJQ6BaBrCULK1Jd7BTSyYWD/DarkTaverns_logo_1024x1024.png",
      project_id: 3521,
      project_owner_address: "0xa9a947b9882e94247ebfe250f60cd742d0c99c7d",
      metadata_api_url:
        "https://content-pan.s3.amazonaws.com/castkeys_json_220829",
      created_at: "2022-09-02T01:35:55.52666Z",
      updated_at: "2022-09-02T22:30:07.518489Z"
    },
    {
      address: "0xffe41442f590e8d038bea634fc4e157132ce2c5b",
      name: "Bad Bunnies PAW WARZ",
      description: "The trait matching, bunny brawling TCG from Bad Bunnies",
      icon_url: "https://badbunnies.xyz/assets/collection/logo.png",
      collection_image_url:
        "https://badbunnies.xyz/assets/collection/collection.png",
      project_id: 3488,
      project_owner_address: "0x99613f187fc3916b1bd6faa2267b0ee0b3447d82",
      metadata_api_url: "https://badbunnies.xyz/api/metadata/imx",
      created_at: "2022-09-01T00:19:02.849719Z",
      updated_at: "2022-09-01T00:19:02.849719Z"
    },
    {
      address: "0x1b82a2124519eaffb1eec0c2aec5f28aefc3ab71",
      name: "MetaJuice Collection - Copper",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 3487,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-08-31T23:17:41.151323Z",
      updated_at: "2022-10-05T20:48:18.61289Z"
    },
    {
      address: "0x3205de76ac027870f8fd7ee2b3585484752d0067",
      name: "Legacy",
      description: "Legacy network collections",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/bafybeih3cq2a76n5nwfpautsl3qlgsksbt4emqqgjeb34gdu4lrdxt2riu/legacy/icon.jpg",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/bafybeih3cq2a76n5nwfpautsl3qlgsksbt4emqqgjeb34gdu4lrdxt2riu/legacy/icon.jpg",
      project_id: 2885,
      project_owner_address: "0x381e0e797368930a8b849ec19373054401ad22d6",
      metadata_api_url: "https://api.legacy.page/v1/element/token",
      created_at: "2022-08-31T17:13:18.677676Z",
      updated_at: "2022-08-31T17:13:18.677676Z"
    },
    {
      address: "0xf5af9397fee04537e59fe31141a032bb8a3985a0",
      name: "Mojo Multiplier",
      description:
        "Web3 Has Lost It's Mojo. Funky Is Here To Restore It Back Time. To Enter The Funk",
      icon_url:
        "https://s3.us-west-2.amazonaws.com/prod.art.assets/funky/marketplace/market_icon.png",
      collection_image_url:
        "https://s3.us-west-2.amazonaws.com/prod.art.assets/funky/marketplace/collection_image.png",
      project_id: 3454,
      project_owner_address: "0x14ae108c0f2ec11ba25cedb60b54ee75040aaf31",
      metadata_api_url: "https://prod.supercomplex.co/api/v1/imx/mojo-multiplier",
      created_at: "2022-08-31T16:48:40.066119Z",
      updated_at: "2022-08-31T16:48:40.066119Z"
    },
    {
      address: "0x760b35c6e1474ffc25a59932929363fd52fca3be",
      name: "Creator Card Game",
      description: "Creator Card Game Genesis Season",
      icon_url:
        "https://nftstorage.link/ipfs/QmQcfoZwzB3NTScm8GWsDFprzLkMZTpgZkruMvms8pqWc7",
      collection_image_url:
        "https://nftstorage.link/ipfs/QmRgZcM6bWZSjsUUX4KxWABSTyb2HNiXnNAAqaXKexS7BP",
      project_id: 3117,
      project_owner_address: "0x363cabe10b88ee4016c749ea78c7f5116165ee2e",
      metadata_api_url:
        "https://yumon.mypinata.cloud/ipfs/QmWJUaGAYSYFfGs67Y6FfGUzKBt6rreeXuSSvnjCuHq84w/CollectionMetadata",
      created_at: "2022-08-31T15:32:19.520093Z",
      updated_at: "2023-02-14T11:23:23.093353Z"
    },
    {
      address: "0x47fa93aacb5370bc3c2a7154e1a0d5a4b678ebb2",
      name: "MintPaid",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 3421,
      project_owner_address: "0xe0420ee56b44aadb7cbd75ddf312df4b68edbb5e",
      metadata_api_url: "https://mintpaid.com/api/v1//metadata",
      created_at: "2022-08-31T10:16:16.218166Z",
      updated_at: "2022-09-18T05:16:10.424579Z"
    },
    {
      address: "0x2cc4ab45c0ad393edce2ab137c3651b91df94a6b",
      name: "Impact Theory Legendary Dinners",
      description:
        "This NFT collection is for Impact Theory Legendary Dinners with Tom Bilyeu and other Impact Theory Legendary Key Holders.",
      icon_url:
        "https://crm-api.founderskey.io/account/static/prod/nft-dinner-icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/lqdn.png",
      project_id: 3388,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url: "https://crm-api.founderskey.io/account/drip/metadata",
      created_at: "2022-08-26T14:06:44.39913Z",
      updated_at: "2022-08-26T14:06:44.39913Z"
    },
    {
      address: "0xdb30df671550fc1c295ae4de62180c49cbc02c6d",
      name: "Metajuice Collection - Apricot",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 3355,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-08-25T15:22:02.827916Z",
      updated_at: "2022-10-17T17:22:10.223987Z"
    },
    {
      address: "0x1e7b4c7d9902631c273df72d8a8c2a89ce2e8d2c",
      name: "Ascended Krows",
      description:
        "Ascended Krows - Community driven NFT project on ImmutableX. Born from the MoodyKrows aftermath. Join our discord server at https://discord.gg/bNrReWVfvY",
      icon_url:
        "https://bafybeihrawfaoauvp5z354f3fmg2i4v66355u3km4k5tydtqi34bfv5oxy.ipfs.w3s.link/AscendedKrows.jpg",
      collection_image_url:
        "https://bafybeihrawfaoauvp5z354f3fmg2i4v66355u3km4k5tydtqi34bfv5oxy.ipfs.w3s.link/AscendedKrows.jpg",
      project_id: 3321,
      project_owner_address: "0x3c228b2bbfea5f09aeb7dec8935fb2e73acc5ce3",
      metadata_api_url:
        "https://bafybeifjsur72r4zorq4kjrsua4tei5wtvmeiti7nowasy2muohodoanv4.ipfs.w3s.link/ascended_krows_data",
      created_at: "2022-08-24T20:47:24.226991Z",
      updated_at: "2022-09-01T03:49:35.894171Z"
    },
    {
      address: "0x92ee7a7b16dbb23c0ba008d534388e4a297fd55f",
      name: "Taktika - Rap Queb Monuments #1",
      description: "Taktika - Rap Queb Monuments #1",
      icon_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmQ8Wcmjmmosv3UVx4Q5Ws9hYvsoDau1zFUtEpYGu8iZ9T/collection_image.png",
      collection_image_url: "",
      project_id: 3320,
      project_owner_address: "0x72288b0a088e00f462a31db4069c880a08ddf6f6",
      metadata_api_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmQWLyvZEaoJMePosxRRQYXi5XGtJyxPyQPAgeK3F2G3ru",
      created_at: "2022-08-24T18:52:25.613837Z",
      updated_at: "2022-08-24T18:52:25.613837Z"
    },
    {
      address: "0x315061da0f44527eb0c534b62df4e5cefc0d5cdb",
      name: "Metajuice Collection - Apricot",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 3287,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-08-19T22:18:27.381433Z",
      updated_at: "2022-10-12T15:50:38.721044Z"
    },
    {
      address: "0x42373fb90e871e6aa06758f58d093bb03db392da",
      name: "Sewlie's Collectibles",
      description: "",
      icon_url:
        "https://sewlie.mypinata.cloud/ipfs/QmbTzWmWsFZh89z6v9HxQSMztij4WkoLesQTjmj7QaxUZP",
      collection_image_url:
        "https://sewlie.mypinata.cloud/ipfs/QmYHoGBVn5AwFPUoPjmgDLAw2aF9ChAXSQhyZXJpDgE9p1",
      project_id: 3254,
      project_owner_address: "0x4be2457d739fba4a3d8f0e21b75a19ca89247970",
      metadata_api_url:
        "https://sewlie.mypinata.cloud/ipfs/QmWuXN9XsGS7Hkj4YMKjAAwfcGnHM9rG5M6fkPHesvhf9a",
      created_at: "2022-08-19T05:55:34.857804Z",
      updated_at: "2023-02-08T02:08:00.756507Z"
    },
    {
      address: "0xb226dac4ff57de7c423062a25c7ff39e702d2d05",
      name: "Metajuice Collection - Apricot",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 3186,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-08-15T21:48:23.79938Z",
      updated_at: "2022-10-05T20:48:16.435684Z"
    },
    {
      address: "0xb93a4e2c02ed1486351e90cf52de8d51a67aaaf6",
      name: "Deviants' Factions",
      description: "NFT Card Game",
      icon_url:
        "https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/12018/icon.png",
      collection_image_url:
        "https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/12018/icon.png",
      project_id: 3183,
      project_owner_address: "0x698d82fdefb9bf15230af70c4d2d19973f7cc06d",
      metadata_api_url:
        "https://deviantsfactions.com/api/v1/collection/DF/tokens/IMX",
      created_at: "2022-08-15T17:43:51.39913Z",
      updated_at: "2022-08-15T17:43:51.39913Z"
    },
    {
      address: "0xfd1c210ab72460594d5644b97b94d5aa7043f479",
      name: "Creator Card Game - Guardians",
      description: "Creator Card Game - Guardians",
      icon_url:
        "https://nftstorage.link/ipfs/QmapADbqMnN2a2MHPLhmEzUdGGcqUyuhSwk1CNrdL9QirE",
      collection_image_url:
        "https://nftstorage.link/ipfs/QmRgZcM6bWZSjsUUX4KxWABSTyb2HNiXnNAAqaXKexS7BP",
      project_id: 3117,
      project_owner_address: "0x363cabe10b88ee4016c749ea78c7f5116165ee2e",
      metadata_api_url:
        "https://yumon.mypinata.cloud/ipfs/QmSrBi8T6eeUK6kKJArjRCRF71LnUzRcTWvBWTXfV49AGT/CollectionMetadata",
      created_at: "2022-08-08T17:46:22.074806Z",
      updated_at: "2023-02-14T11:45:14.281217Z"
    },
    {
      address: "0xc4a12543bc217bd914ca130b15280e4abc5d6ccb",
      name: "0803 UAT Test",
      description: "<p>Description .....</p>\n",
      icon_url:
        "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png",
      collection_image_url:
        "https://media.istockphoto.com/photos/test-pushing-keyboard-with-finger-3d-illustration-picture-id952729630?k=20&m=952729630&s=612x612&w=0&h=J84TjX6pxZigsUI5rKMVAYgZxJPKgstXOCkov6vavsM=",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://gatewaytest.mypinata.cloud/ipfs/QmYbW6y6VpJaPXx1wj6uQrE5jG5E7A7HATVD1XB2UQKY3x",
      created_at: "2022-08-03T08:23:10.764596Z",
      updated_at: "2022-08-03T08:23:10.764596Z"
    },
    {
      address: "0x2b9c92241393467d7fdf46e5a0dc11330475e51f",
      name: "Amrita Test UAT 75 tokens",
      description: "<p>Amrita Test UAT 75 tokens</p>\n",
      icon_url: "https://www.svgrepo.com/show/100926/picture-frame.svg",
      collection_image_url:
        "https://gatewaytest.mypinata.cloud/ipfs/QmYbsizvg26MwekEA3aQJMmHtShAq2HqvrFd671gLjFbiv/vadim1%20copy%2010.jpg",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://gatewaytest.mypinata.cloud/ipfs/QmYbW6y6VpJaPXx1wj6uQrE5jG5E7A7HATVD1XB2UQKY3x",
      created_at: "2022-08-01T08:24:15.709351Z",
      updated_at: "2022-08-01T08:24:15.709351Z"
    },
    {
      address: "0x09fcbe02560601286677c7dcc200dc305b499fb7",
      name: "UAT Amrita Test Collection  1 August",
      description: "<p>UAT Amrita Test Collection  1 August</p>\n",
      icon_url: "https://www.svgrepo.com/show/100926/picture-frame.svg",
      collection_image_url: "https://www.svgrepo.com/show/11140/picture.svg",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://gatewaytest.mypinata.cloud/ipfs/QmRcDHqDiB3kggQAB8n66MPAZtCwa9jEnDd2UeycWerg18",
      created_at: "2022-08-01T06:19:45.78571Z",
      updated_at: "2022-08-01T06:19:45.78571Z"
    },
    {
      address: "0x16d4d3030b3b7fb029befa0a168fa6f5ffdecd6d",
      name: "000000 Koalas 000000",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmVS4EpMXQWeMddu9BRpkVcuBAR9WkrKBqBSbhpTK3dBsR",
      collection_image_url:
        "https://ipfs.io/ipfs/QmVS4EpMXQWeMddu9BRpkVcuBAR9WkrKBqBSbhpTK3dBsR",
      project_id: 3083,
      project_owner_address: "0xe12983929050ab83c21adf304a8e38e8539903a3",
      metadata_api_url: "https://nftsmeta.club/db_koala.php?id=",
      created_at: "2022-07-31T16:24:01.124159Z",
      updated_at: "2022-07-31T16:24:01.124159Z"
    },
    {
      address: "0x05a95995692c7f97e21267591d24348042f0bf33",
      name: "APE DAO",
      description:
        "100k free NFTs celebrating the APE Coin DAO and free to claim for $APE token holders.",
      icon_url: "https://cdn.apesonl2.com/logo_icon.png",
      collection_image_url: "https://cdn.apesonl2.com/logo.png",
      project_id: 3050,
      project_owner_address: "0x6732a68eac356a054f33cba3aa3983c895e77a04",
      metadata_api_url:
        "https://api.apesonl2.com/api/v1/immutable/metadata/0x05A95995692c7f97E21267591d24348042F0Bf33",
      created_at: "2022-07-29T17:47:42.010562Z",
      updated_at: "2022-07-29T17:47:42.010562Z"
    },
    {
      address: "0x99ada33b4f7f63e4b1378c51f4ae84ee755f8460",
      name: "Cyber Galz - OOTD\ud83c\udfc6",
      description:
        "Winners\u2019 Galz of the OOTD events using crafting feature of Cyber Galz NFT.",
      icon_url:
        "https://galz.cybergalznft.com/collection_thumbnail/opensea(IMX)_logo.png",
      collection_image_url:
        "https://galz.cybergalznft.com/collection_thumbnail/IMX_OOTD.png",
      project_id: 298,
      project_owner_address: "0x63e3c398609184f948a671a02cb87740d0aff856",
      metadata_api_url: "http://galz.cybergalznft.com/ootd/imx",
      created_at: "2022-07-29T14:31:48.051556Z",
      updated_at: "2022-07-30T09:16:17.840249Z"
    },
    {
      address: "0x541018d5eeee6bb473a924d947d9a620d373b1c4",
      name: "Amrita Test UAT 29 July",
      description: "<p>Amrita Test UAT 29 July</p>\n",
      icon_url: "https://www.svgrepo.com/show/100926/picture-frame.svg",
      collection_image_url: "https://www.svgrepo.com/show/11140/picture.svg",
      project_id: 3017,
      project_owner_address: "0x2acb9719c174b7cf82e9431a992eda899a169330",
      metadata_api_url:
        "https://gatewaytest.mypinata.cloud/ipfs/QmRcDHqDiB3kggQAB8n66MPAZtCwa9jEnDd2UeycWerg18",
      created_at: "2022-07-29T11:06:42.679978Z",
      updated_at: "2022-07-29T11:06:42.679978Z"
    },
    {
      address: "0xed252b64a49e92ee10cceb3dd942e20e7561bcf5",
      name: "Vy Worlds Items",
      description:
        "As Vy explore the breathtaking and at times, very dangerous Vy Worlds they'll need some powerful tools.\n            Vy Items will allow you to personalize your Vy Worlds experience while collecting rare, limited-edition, in-game NFTs.",
      icon_url: "https://skins.vyworlds.com/gameItems/icon.png",
      collection_image_url:
        "https://skins.vyworlds.com/gameItems/collection_image.png",
      project_id: 827,
      project_owner_address: "0x58b169c8a942df45f65ecb6b2803030f9e3d9aec",
      metadata_api_url: "https://metadata.vyworlds.com/getItemsMeta",
      created_at: "2022-07-26T19:55:58.943514Z",
      updated_at: "2022-07-26T19:55:58.943514Z"
    },
    {
      address: "0xeb05cb1c82acc87ad8e0bb7927a1dc39cd300402",
      name: "E4C Rangers Ultimate Edition",
      description:
        "E4C Rangers consists of avatars derived from 7 champions in the E4Cverse. Holders have special utilities, including the partial in-game IP ownership of the corresponding character and game assets airdrops, such as champions and skins. For more info, please refer to our website https://www.ambrus.studio/",
      icon_url: "https://cdn.ambrus.studio/NFTs/Logo-Ultimate.gif",
      collection_image_url: "https://cdn.ambrus.studio/NFTs/Logo-Ultimate.gif",
      project_id: 2984,
      project_owner_address: "0xe4cf86f7adbac98fab983f35fcd3c71e3e3c2720",
      metadata_api_url: "https://api.ambrus.studio/e4c-ranger/ultimate/metadata",
      created_at: "2022-07-26T16:12:50.722685Z",
      updated_at: "2022-11-06T15:07:11.25239Z"
    },
    {
      address: "0x987493b651f91d01f5bc8f59e9f701765e31c5b4",
      name: "Test NFT",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2951,
      project_owner_address: "0xe4cfe788904c1db2cb55231e3a72ceff27410928",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmWfKt2pXLnQ2AB5jfS2KYB9K2hxFtgcMNxyndkSGT3yuj",
      created_at: "2022-07-23T16:00:18.981562Z",
      updated_at: "2022-07-23T16:00:18.981562Z"
    },
    {
      address: "0x5713c8746fbfb5f2b2b8605ebe31ae6650982154",
      name: "IMVU-6-royalty-0-percent",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2918,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-07-22T20:20:59.894428Z",
      updated_at: "2022-10-05T20:48:15.465614Z"
    },
    {
      address: "0x92bb33b11b812b1756977a497a6357f5444ea6d2",
      name: "Legacy Collections",
      description: "Legacy Network collections",
      icon_url:
        "https://s3.eu-central-1.amazonaws.com/dev.legacy.page/imx/legacy-icon.png",
      collection_image_url:
        "https://s3.eu-central-1.amazonaws.com/dev.legacy.page/imx/legacy.png",
      project_id: 2885,
      project_owner_address: "0x381e0e797368930a8b849ec19373054401ad22d6",
      metadata_api_url: "https://dev-api.legacy.page/v1/element/token",
      created_at: "2022-07-21T07:33:28.113448Z",
      updated_at: "2022-07-21T07:33:28.113448Z"
    },
    {
      address: "0x00ed5f674cd4a340bd8023dc1ffb0dcf840fbf41",
      name: "Pirates of the Arrland: Items",
      description: "Pirates of the Arrland: Items collection.",
      icon_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      collection_image_url:
        "https://ipfs.moralis.io:2053/ipfs/QmQcii7bdHuVBXunWQsA34ZH96hR7H5e4aRhSNnFPwmCJh/12f98aee8ba64bbba91a67e6a6b2321e.png",
      project_id: 1223,
      project_owner_address: "0x72a669f921543f234653b9401db406bedc32ea0e",
      metadata_api_url:
        "https://ipfs.moralis.io:2053/ipfs/Qmea8HYQMwZDmrZJgei6mePSmGX37qRfFGT2kWqSnxec1S",
      created_at: "2022-07-21T00:19:53.915338Z",
      updated_at: "2022-08-25T09:57:11.451629Z"
    },
    {
      address: "0x0071b30209fc069dc23412c68bd98314b20b4a09",
      name: "0000000 Free Mint Bananas",
      description: "",
      icon_url: "https://freemintbananas.com/banana_logo_64.png",
      collection_image_url: "https://freemintbananas.com/banana_logo.png",
      project_id: 2852,
      project_owner_address: "0xcb32935b5e9ffcefc7ed95d059fbc61acf3adcf1",
      metadata_api_url: "https://freemintbananas.com/tokens.php?id=",
      created_at: "2022-07-20T16:50:41.40982Z",
      updated_at: "2022-07-20T16:50:41.40982Z"
    },
    {
      address: "0x8e3c7e22566983e1ede005762a6afab6bdf28277",
      name: "Stardust",
      description: "Stardust's Main Collection",
      icon_url:
        "https://pbs.twimg.com/profile_images/1425222794594291713/IaazQrN8_400x400.jpg",
      collection_image_url:
        "https://pbs.twimg.com/profile_images/1425222794594291713/IaazQrN8_400x400.jpg",
      project_id: 2851,
      project_owner_address: "0x3b333e68ac5bdab09cf1a402e07bba3041aaf11d",
      metadata_api_url:
        "https://marketplace-api.stardust.gg/v1/token-get/immutablex",
      created_at: "2022-07-20T13:03:14.204642Z",
      updated_at: "2022-09-21T05:33:37.913779Z"
    },
    {
      address: "0xa1c59514b703ba8c6479d05405fba6390515cfc8",
      name: "Immortal Game",
      description:
        "Play for free: https://immortal.game\n  \t\t\tImmortal Game is the ultimate Play-and-Earn chess experience, introducing a new layer of strategy to the most played board game in the world. Collect Immortal NFT chess pieces, trade them on the Marketplace, complete their quests, refine your strategies, dominate the Leaderboards, and earn rewards!",
      icon_url: "https://ik.imagekit.io/subman/immutable/Profil-IGE.png",
      collection_image_url:
        "https://ik.imagekit.io/subman/immutable/Cover-IGE.png",
      project_id: 2384,
      project_owner_address: "0xf197dfb50039577d4efdd3e4eb370e91e5083aef",
      metadata_api_url: "https://beta.immortal.game/api/metadata/immortals",
      created_at: "2022-07-20T11:25:43.03911Z",
      updated_at: "2022-10-12T14:05:01.200047Z"
    },
    {
      address: "0xa00108f4cfb6400d43c911af0d7a3422f7c011e5",
      name: "asd",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2818,
      project_owner_address: "0xda514a8bd5f1cd7dc754252bd7012ee0357b4d91",
      metadata_api_url: "",
      created_at: "2022-07-20T00:24:02.989537Z",
      updated_at: "2022-08-09T01:50:06.081832Z"
    },
    {
      address: "0xbfa4016d23fc5dbdfd404006b23efec9dcc54830",
      name: "GO!Loot",
      description: "",
      icon_url:
        "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/191995/850601_445095.png",
      collection_image_url:
        "https://city.gohealthhero.com/static/media/GoBots.f1c6fe33.png",
      project_id: 2785,
      project_owner_address: "0xc7ad868f9b421dabf7cdaa0e6c508ff74e2f1cfd",
      metadata_api_url:
        "https://healthhero.mypinata.cloud/ipfs/QmTXb7MWhZzsEzGhYybZFkyt23fT7fsjSRbqVKeMdoPnZW",
      created_at: "2022-07-16T11:21:16.835695Z",
      updated_at: "2022-07-16T11:21:16.835695Z"
    },
    {
      address: "0x46e0253e411a7dd3ec7e4c26700d93d056ac5b86",
      name: "ZHENKE",
      description: "ZHENKE COLLECTION",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmNboDQibxBqyR3g6QycN2gM3yJPwGBAyEi3FEWEa36kjk",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmYHPxkBP5m9eBtBHo7siAMaBVzGkMoNXhokpnq1HZ8ZfV",
      project_id: 2719,
      project_owner_address: "0x6c56d3b3fd78e734f8981c0784c21907257471b2",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmY72w6CHJz3XnjXbUDM6jdtWAHq9WfiRDJPncH5wFLAgk",
      created_at: "2022-07-14T15:46:18.129543Z",
      updated_at: "2022-07-14T15:46:18.129543Z"
    },
    {
      address: "0x79251c8c35a39ed07671f200ab4d31188ff05e34",
      name: "( Doodles )",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmUEfFfwAh4wyB5UfHCVPUxis4j4Q4kJXtm5x5p3g1fVUn",
      collection_image_url:
        "https://ipfs.io/ipfs/QmUEfFfwAh4wyB5UfHCVPUxis4j4Q4kJXtm5x5p3g1fVUn",
      project_id: 2653,
      project_owner_address: "0x865d7da7dfc097364a87564d5c3499aaf21e380c",
      metadata_api_url:
        "https://raw.githubusercontent.com/dodlz/main/main/doodles",
      created_at: "2022-07-13T07:38:54.177407Z",
      updated_at: "2022-07-13T07:38:54.177407Z"
    },
    {
      address: "0x95c31e50d3909f90747cf3048124af01c0bb6c38",
      name: "IMX MAYC",
      description:
        "Mutant Ape Yacht Club NFT collection is coming to ImmutableX: a Layer 2 for NFTs on Ethereum. This means ETH with NO GAS!",
      icon_url: "https://i.ibb.co/tpQTqF4/imx-mayc.jpg",
      collection_image_url: "https://i.ibb.co/tpQTqF4/imx-mayc.jpg",
      project_id: 2620,
      project_owner_address: "0x33366f3a14a3b7a5ded830ec11291739ee6ac745",
      metadata_api_url: "https://maycx.netlify.app/metadata",
      created_at: "2022-07-10T13:03:54.591178Z",
      updated_at: "2022-07-14T12:19:45.809991Z"
    },
    {
      address: "0xde7cfc172856515345c904db6c52e19426f40f88",
      name: "Satoshi Master of Disguise",
      description: "The inaugral hero NFT for Block Chain comics new series",
      icon_url: "https://satoshimasterofdisguise.com/favicon.ico",
      collection_image_url: "https://satoshimasterofdisguise.com/smod.png",
      project_id: 2619,
      project_owner_address: "0x021d36a8bc89a9354df9f732218c40ae2aedad35",
      metadata_api_url:
        "https://satoshimasterofdisguise.com/ipfs/QmcMGgbuL8WtqYyv3QrctQzTqrYa4YHzoaPCSxrsqrdAVE",
      created_at: "2022-07-10T09:40:39.008744Z",
      updated_at: "2022-07-10T09:40:39.008744Z"
    },
    {
      address: "0xe4ea9b6c4ecd6716779a6a4e6c19566b9a662fee",
      name: "Pirates of the Arrland: Assets",
      description: "Pirates of the Arrland: Assets",
      icon_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      collection_image_url:
        "https://ipfs.moralis.io:2053/ipfs/QmehbttHjWps8jqnfNEBjStUxRKuUnSfuYdWK4UCNWSXNW/5b6631df8a6946b594e3d3cc2e868040.png",
      project_id: 1223,
      project_owner_address: "0x72a669f921543f234653b9401db406bedc32ea0e",
      metadata_api_url:
        "https://arrland-media.s3.eu-central-1.amazonaws.com/meta/assets/l2",
      created_at: "2022-07-08T15:06:41.39065Z",
      updated_at: "2022-09-21T14:18:38.89896Z"
    },
    {
      address: "0xe8aca893624c6329c9ecc0aef47e39e867d98ef6",
      name: "Moorboard: Arte Vivo for Ukraine",
      description:
        "Arte Vivo joined forces with Moodboard to help Ukraine. With Kuryliuk's reimagination of Bouguereau's Venus in Twilight, this video NFT shows the transformation of a society.",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xe8aca893624c6329c9ecc0aef47e39e867d98ef6/icon.img",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xe8aca893624c6329c9ecc0aef47e39e867d98ef6/icon.img",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0xe8aca893624c6329c9ecc0aef47e39e867d98ef6",
      created_at: "2022-07-08T13:39:55.021517Z",
      updated_at: "2022-07-08T13:39:55.021517Z"
    },
    {
      address: "0x8f07ad9336c76be9f41d36ff93886faaf8713068",
      name: "Thalon Wormholes (Founders)",
      description:
        "Thalon Wormholes are unique, 3D rendered, limited edition NFTs with a total supply of 50. These NFTs were gifted to founding members of the community with significant benefits to holders.",
      icon_url: "",
      collection_image_url:
        "https://bafybeibqppzr36yvlkkwhecugipirdm2fjmkvnycb4k32v2vzowtxb2ski.ipfs.nftstorage.link/thalon_thumbnail2.png",
      project_id: 2586,
      project_owner_address: "0x529d8b1c962e73b6040929d077f9eb6d1ec16a56",
      metadata_api_url:
        "https://nftstorage.link/ipfs/bafybeidofe4fd5lfrxzr7fi3zb362dhb3mzay4bpmgknfk4cqycy3nxie4",
      created_at: "2022-07-07T05:57:23.169186Z",
      updated_at: "2022-07-07T05:57:23.169186Z"
    },
    {
      address: "0xd670418bf839d68c32f01883b00d2f5c4356a014",
      name: "HISTORISCHES MUSEUM SAAR",
      description: "HisMus",
      icon_url: "https://niftee-pub.s3.amazonaws.com/Header_Hismus.png",
      collection_image_url:
        "https://niftee-pub.s3.amazonaws.com/Header_Hismus.png",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2022-07-06T16:37:25.097437Z",
      updated_at: "2022-07-06T16:37:25.097437Z"
    },
    {
      address: "0x6949bd0714ee62589694ac37688ad6568ab2b112",
      name: "OMEGA",
      description: "safa",
      icon_url: "https://niftee-pub.s3.amazonaws.com/comingsoon.jpg",
      collection_image_url: "https://niftee-pub.s3.amazonaws.com/comingsoon.jpg",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2022-07-06T15:15:55.232034Z",
      updated_at: "2022-07-06T15:15:55.232034Z"
    },
    {
      address: "0x0068480117c63fe2e42ecc5e9b3033c91dec2aec",
      name: "OMEGA",
      description: "OMG",
      icon_url: "https://niftee-pub.s3.amazonaws.com/comingsoon.jpg",
      collection_image_url: "https://niftee-pub.s3.amazonaws.com/comingsoon.jpg",
      project_id: 2553,
      project_owner_address: "0x15e290bf27368f00064302d7c639185b950655aa",
      metadata_api_url:
        "https://api.niftee.eu/api/23a5e0717540f3871c2b94e65f066c61994bb294cd6565136f95a135f62f43d/immutablex",
      created_at: "2022-07-06T11:12:38.066803Z",
      updated_at: "2022-07-06T11:12:38.066803Z"
    },
    {
      address: "0x486a7799e9d77419b3be46ab62520d0430d13d95",
      name: "10 000 Banana Task Force Apes",
      description: "",
      icon_url:
        "https://bafybeicw4ttci3ka4kxwpt7l466vvifunaom3vzxik4hxxzsu7ko7mrbju.ipfs.nftstorage.link/1002.png",
      collection_image_url:
        "https://bafybeicw4ttci3ka4kxwpt7l466vvifunaom3vzxik4hxxzsu7ko7mrbju.ipfs.nftstorage.link/1002.png",
      project_id: 2520,
      project_owner_address: "0xe18a6fa6409e9291014dc73d907ac3acb59c066f",
      metadata_api_url: "https://raw.githubusercontent.com/gitban4/bananas/main",
      created_at: "2022-07-04T19:36:03.792065Z",
      updated_at: "2022-07-04T19:36:03.792065Z"
    },
    {
      address: "0xac4a12f914b402f4f06306bd7e7e2560f5173afb",
      name: "The Beautiful Game - 80s Icons",
      description: "",
      icon_url:
        "https://bafkreifqzpabcgzhggzmx3lap2dllktdeaeyvp4ydyvmxe7jq4jqhiktsi.ipfs.nftstorage.link",
      collection_image_url:
        "https://ipfs.qonka.io/ipfs/QmPpUTcKZWDnvgi2a3GCEi789q6W7hsfwEC9MGD48mPZbt",
      project_id: 2380,
      project_owner_address: "0x7e2f5561185d822a3e35b73707b5fd98740bae5c",
      metadata_api_url:
        "https://ipfs.qonka.io/ipfs/bafybeif5wwr6wt5j6vcegcnhfso65lscxp7f4xeoupr4lhw336urjwugrm",
      created_at: "2022-07-03T02:49:37.497156Z",
      updated_at: "2022-07-03T02:49:37.497156Z"
    },
    {
      address: "0x9384a05b7d8e3570fdb0bde85f24bf10658cca22",
      name: "IMVU-3-royalty-0-percent",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2487,
      project_owner_address: "0x10cbbbb225bbea137ac01f0f6d91cdb126bccaa6",
      metadata_api_url: "https://secure.imvu.com/api/nft",
      created_at: "2022-06-28T21:42:54.050055Z",
      updated_at: "2022-10-05T20:48:14.489271Z"
    },
    {
      address: "0x662f4c65a639b7fa257e241d70c82b6ed3554bf2",
      name: "00000 Oxya",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmeCLXcxRMyPaDC8vWJWxyMsL3RCuhLyAVcb3fAoNYNZ5q/232.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmeCLXcxRMyPaDC8vWJWxyMsL3RCuhLyAVcb3fAoNYNZ5q/232.png",
      project_id: 2452,
      project_owner_address: "0xcd517773f657add92728c3a7993eb81e5404705b",
      metadata_api_url:
        "https://raw.githubusercontent.com/gitsome22/oxproject/main",
      created_at: "2022-06-26T18:29:28.946978Z",
      updated_at: "2022-06-26T18:29:28.946978Z"
    },
    {
      address: "0xc1ac24fb8242848c676a499b45579e6886d4707d",
      name: "10000 Azuki",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/776.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/776.png",
      project_id: 2451,
      project_owner_address: "0xc31d4ba6412afe5cb614b92ebcc6d0a4d3fe76e7",
      metadata_api_url: "https://nftsmeta.club/db_azuki.php?id=",
      created_at: "2022-06-25T08:29:06.700936Z",
      updated_at: "2022-06-27T01:01:27.871788Z"
    },
    {
      address: "0x81f91e37f7cb97aac875ab9ea83dccdbc8c9e0bf",
      name: "10000 Goblintownwtf",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmSifFzarzzen5Vv4TWWhpN56VksqZrF3Bmuuc4gdGTEv1/1298.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmSifFzarzzen5Vv4TWWhpN56VksqZrF3Bmuuc4gdGTEv1/1298.png",
      project_id: 2450,
      project_owner_address: "0x9b8101558ce826d0beb28c901993011c5f868509",
      metadata_api_url: "https://nftsmeta.club/db_goblins.php?id=",
      created_at: "2022-06-25T08:04:37.981945Z",
      updated_at: "2022-06-25T08:04:37.981945Z"
    },
    {
      address: "0xecee68efc07a70046eca074aecb3e49b2d19bab5",
      name: "10,021 Mfers",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmakAjuFugcxifLrPEFHcUzezZqwtQExjd5XJhkL9woYvA",
      collection_image_url: "https://mfers.art/images/main-image.png",
      project_id: 2417,
      project_owner_address: "0xfed69f33c08af226df65e762b44af956b9e50237",
      metadata_api_url: "https://nftsmeta.club/db_mfer.php?id=",
      created_at: "2022-06-20T08:01:52.280699Z",
      updated_at: "2022-06-20T08:01:52.280699Z"
    },
    {
      address: "0xfdd45513cf4753d4df2ab7423aa10ff7c97a3bef",
      name: "Immortal Game Mystery Box",
      description: "Immortal Game Mystery Box",
      icon_url:
        "https://beta-dev.immortal.game/images/metadata/mystery/mystery-box.png",
      collection_image_url:
        "https://beta-dev.immortal.game/images/metadata/mystery/mystery-box.png",
      project_id: 2384,
      project_owner_address: "0xf197dfb50039577d4efdd3e4eb370e91e5083aef",
      metadata_api_url: "https://beta-dev.immortal.game/api/metadata/mystery",
      created_at: "2022-06-17T20:06:06.812878Z",
      updated_at: "2022-06-22T08:22:20.578806Z"
    },
    {
      address: "0x3dfce1603925b82c1096cfafe3f874b5f4b93b9a",
      name: "3dle",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2382,
      project_owner_address: "0xd4b2653ece1432c9ed2d60a4ed7fc00a22726b85",
      metadata_api_url:
        "https://web3dle-prod-metadatabucket37e0ad0a-pcv34cnxjeco.s3.amazonaws.com",
      created_at: "2022-06-17T05:32:27.995925Z",
      updated_at: "2022-06-17T05:32:27.995925Z"
    },
    {
      address: "0x52ec04aa72df116e07a7cc3d4e5270e9ca649fba",
      name: "3dle",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2381,
      project_owner_address: "0xd4b2653ece1432c9ed2d60a4ed7fc00a22726b85",
      metadata_api_url:
        "https://web3dle-prod-metadatabucket37e0ad0a-pcv34cnxjeco.s3.amazonaws.com",
      created_at: "2022-06-17T03:55:36.208976Z",
      updated_at: "2022-06-17T03:55:36.208976Z"
    },
    {
      address: "0xaf644341f583b2fa1924a3496ae8dd4187879356",
      name: "Herolight Potions",
      description:
        "Herolight is a play to earn rewards game for console gamers. Potions are perpetual allowlist tokens for any season of Herolight. Drinking a potion consumes it and enables the minting of a hero",
      icon_url:
        "https://gamers-service.s3.amazonaws.com/static/img/Herolight_fire_mark.png",
      collection_image_url: "",
      project_id: 2379,
      project_owner_address: "0x24d2e64c19c655d6f09963fb47ab227e0a3f4fdf",
      metadata_api_url: "https://api.herolight.xyz/networks/demo",
      created_at: "2022-06-16T03:11:24.925092Z",
      updated_at: "2023-03-07T22:45:39.85813Z"
    },
    {
      address: "0x46b086541c81e7f1b40cfacefb8eebf7555b4e69",
      name: "The Smoked Out Silverbacks",
      description:
        "A shrewdness of 420 smoked out silverback gorillionaires navigating the clown world.  https://harambewouldgo.com",
      icon_url: "https://assets.imx-toolshed.io/smoked-out-silverbacks/icon.png",
      collection_image_url:
        "https://assets.imx-toolshed.io/smoked-out-silverbacks/collection.png",
      project_id: 2346,
      project_owner_address: "0xc2d6cc2310f25f9309937df6aec57a0b77fcd568",
      metadata_api_url:
        "https://harambewouldgo.mypinata.cloud/ipfs/QmcR7P7UyPjyNhVWepo1vGibjDQ8XWjSqcYsBQiGphKt7S",
      created_at: "2022-06-14T05:14:31.770715Z",
      updated_at: "2022-06-14T05:14:31.770715Z"
    },
    {
      address: "0xb89e41182d056cf090f24ee8a47d0fe20b837027",
      name: "Jon Gordon Genesis",
      description: "Jon Gordon Genesis",
      icon_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmSxkEBi58boDdUpjajckCzBjcacuqM4xaEvcNrrB1zaTv",
      collection_image_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmSxkEBi58boDdUpjajckCzBjcacuqM4xaEvcNrrB1zaTv",
      project_id: 2345,
      project_owner_address: "0x46c3ba9e6911dc1d588d500e5c8a9f00af286c6b",
      metadata_api_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmUtJoPRk6LMQAcDZrzszM3jhbo5MHmbp314WwPctPunWt",
      created_at: "2022-06-14T02:52:35.302132Z",
      updated_at: "2022-07-20T23:04:35.54043Z"
    },
    {
      address: "0x4fcf5fba13a6cd3f6a710358638fc21932e978e5",
      name: "dBriscola",
      description:
        "dBriscola is a collection of luxury Italian playing card collectibles created with fun and familiar designs inspired primarily by Italian culture.",
      icon_url:
        "https://nftvnft.mypinata.cloud/ipfs/QmWs3ksDKQnCo7vKA8KQKTejKBHvjcXgtysbhLDVndGnJu/icon.png",
      collection_image_url:
        "https://nftvnft.mypinata.cloud/ipfs/QmUVmNRbKRqNBDy3K8JMGhH3cYaAGZswYgMHCE6bgZTh9b/collectionicon.gif",
      project_id: 2311,
      project_owner_address: "0x7c0c2d6a1ebe0c3545d28be7ce8624f18bcdf6b9",
      metadata_api_url:
        "https://nftvnft.mypinata.cloud/ipfs/QmRmvqKvHf2sipPUfroQ8xp2gmVTT91Jif3UPhnJrEC3A5",
      created_at: "2022-06-12T23:22:20.613415Z",
      updated_at: "2022-06-15T18:15:59.692422Z"
    },
    {
      address: "0x1190c90e6215cfcadf7ec06abf15259fa4b64d4a",
      name: "Vynni",
      description: "The Vynni marketplace",
      icon_url:
        "https://ipfs.vynni.com/ipfs/bafkreif7623ffpwxgeaoisqh26njgeyvtredhc5z3rq3puu3lns5gvytg4",
      collection_image_url:
        "https://ipfs.vynni.com/ipfs/bafkreif7623ffpwxgeaoisqh26njgeyvtredhc5z3rq3puu3lns5gvytg4",
      project_id: 2312,
      project_owner_address: "0xf3d71d12f8aa94ac45bde929a5e333a62fb3b4e6",
      metadata_api_url: "https://api.vynni.com/meta",
      created_at: "2022-06-11T04:47:54.064281Z",
      updated_at: "2022-06-11T04:47:54.064281Z"
    },
    {
      address: "0x6c4944e465875155ff454699db5adfc650847cb5",
      name: "Ember Sword Badge",
      description:
        "Ember Sword is a Platform-Agnostic Free-to-Play MMORPG with a player-driven economy, a classless combat system, and scarce, tradable cosmetic collectibles and land. Ember Sword has the fast-paced combat of aRPGs, combined with the isometric view and skill-based abilities of MOBAs, set in a persistent MMORPG fantasy universe.",
      icon_url:
        "https://lh3.googleusercontent.com/J7SSCNIDh1ui59aoqyNywPtnUAUB-Q80Cnl1txbxmJOAIKcRJT1bUYidkDPNegOk2W0zyjqVkLbdcI6g6KTYgQCDplCo3DXpDSeaPg=s168",
      collection_image_url:
        "https://embersword.com/metadata/badges/badge_platinum.png",
      project_id: 2216,
      project_owner_address: "0x09b4d9ead30d41c2c20594adb05c05dc211f03e2",
      metadata_api_url: "https://es.imxfaucet.xyz/badge",
      created_at: "2022-06-08T19:10:43.338289Z",
      updated_at: "2022-06-17T03:47:53.914965Z"
    },
    {
      address: "0x1b1509ae2dec28d34cc000a07487621b1d019edd",
      name: "F.U.D.",
      description:
        "F.U.D. are Dogggo's illegitimate sons who live the good life, spending Dogggo's money on shopping sprees and partying hard!",
      icon_url:
        "https://storageapi.fleek.co/4652ad24-7cf4-452e-ab7e-763627f54b05-bucket/icon.jpg",
      collection_image_url:
        "https://storageapi.fleek.co/4652ad24-7cf4-452e-ab7e-763627f54b05-bucket/collectionImage.gif",
      project_id: 2278,
      project_owner_address: "0x0ebf027728959d04d9511e2f59f4c8f3b02ff2be",
      metadata_api_url:
        "https://dogggo.infura-ipfs.io/ipfs/QmVEJFR8yX8cTGmD5MaCSrk7m6CweKXfYY5sTc51XttAsj",
      created_at: "2022-06-07T23:28:11.694003Z",
      updated_at: "2022-06-07T23:28:11.694003Z"
    },
    {
      address: "0x4fb656d9c7ad031e4eaad15e92ff10af75d8d621",
      name: "Ember Sword Land",
      description:
        "Ember Sword is a Platform-Agnostic Free-to-Play MMORPG with a player-driven economy, a classless combat system, and scarce, tradable cosmetic collectibles and land. Ember Sword has the fast-paced combat of aRPGs, combined with the isometric view and skill-based abilities of MOBAs, set in a persistent MMORPG fantasy universe.",
      icon_url:
        "https://lh3.googleusercontent.com/J7SSCNIDh1ui59aoqyNywPtnUAUB-Q80Cnl1txbxmJOAIKcRJT1bUYidkDPNegOk2W0zyjqVkLbdcI6g6KTYgQCDplCo3DXpDSeaPg=s168",
      collection_image_url:
        "https://embersword.mypinata.cloud/ipfs/QmPrjUk1VEjkRK4s2v1x9Rqx4uQQ1K4yjGXsGEnTfkeUPA",
      project_id: 2216,
      project_owner_address: "0x09b4d9ead30d41c2c20594adb05c05dc211f03e2",
      metadata_api_url: "https://es.imxfaucet.xyz/land",
      created_at: "2022-06-03T09:44:37.568293Z",
      updated_at: "2022-06-07T04:50:05.372194Z"
    },
    {
      address: "0x335f2df017437c35e9bec66e91c263e69c80d144",
      name: "ENTER_COLLECTION_NAME",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2216,
      project_owner_address: "0x09b4d9ead30d41c2c20594adb05c05dc211f03e2",
      metadata_api_url: "",
      created_at: "2022-06-03T09:43:27.265272Z",
      updated_at: "2022-06-03T09:43:27.265272Z"
    },
    {
      address: "0x8c15d753c4336617890ff9e82c88aa047762b867",
      name: "Habbo Clothes",
      description: "Habbo NFT Clothes that you can use in Habbo",
      icon_url: "",
      collection_image_url:
        "https://nft-tokens.habbo.com/clothes/images/clothescollection.png",
      project_id: 10025,
      project_owner_address: "0x1d1c83bc7130ac927ebea2c73bbe723ab2e3dfc0",
      metadata_api_url: "https://nft-tokens.habbo.com/clothes/metadata",
      created_at: "2022-06-01T15:57:04.720588Z",
      updated_at: "2022-10-06T07:36:12.921553Z"
    },
    {
      address: "0x76ae688e63b003fbcc5d93309b6c67fca109ca0d",
      name: "Peace Koalas",
      description:
        "Peace Koalas is a charitable NFT collection, organised by Finder. 100% of collected funds from minting and royalties from secondary marketplace sales will be donated to the Ministry of Digital Transformation of Ukraine, supporting the victims of the war in Ukraine.",
      icon_url:
        "https://s3-ap-southeast-2.amazonaws.com/findercdn.com.au/peace-koalas/peace-koala-icon.png",
      collection_image_url:
        "https://s3-ap-southeast-2.amazonaws.com/findercdn.com.au/peace-koalas/collection-image.png",
      project_id: 2184,
      project_owner_address: "0x7b63f6c3fbca5f85da9035522233cae76ce91b78",
      metadata_api_url:
        "https://bafybeibzlhyiigijndvwql6zp6ouwgscrjp5yvub4d4on4oe6226gazbnu.ipfs.nftstorage.link",
      created_at: "2022-06-01T08:34:13.171302Z",
      updated_at: "2022-06-01T08:34:13.171302Z"
    },
    {
      address: "0xc6185055ea9891d5d9020c927ff65229baebdef2",
      name: "Gods Unchained",
      description: null,
      icon_url: null,
      collection_image_url: null,
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: null,
      created_at: "2022-06-01T07:08:19.23206Z",
      updated_at: "2022-06-01T07:08:19.23206Z"
    },
    {
      address: "0x2ca7e3fa937cae708c32bc2713c20740f3c4fc3b",
      name: "Gods Unchained",
      description: null,
      icon_url: null,
      collection_image_url: null,
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: null,
      created_at: "2022-06-01T07:08:18.921315Z",
      updated_at: "2022-06-01T07:08:18.921315Z"
    },
    {
      address: "0x291466351320e6e3bd1eec492c36735bafaf468f",
      name: "GrapeVyn",
      description:
        "GrapeVyn is a web3 social media platform that runs on the ethereum network. It gives people ownership to their words and turns them into NFTs (Non-fungible tokens). These posts can be viewed on our website, https://www.grapevyn.co.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmV46bW4ygxSRj6UNNAGkjn5S2wcWoM9qufaFgrzRh4W11",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmV46bW4ygxSRj6UNNAGkjn5S2wcWoM9qufaFgrzRh4W11",
      project_id: 2147,
      project_owner_address: "0x3b2c1a87e8adb7ea468438a820f0cd125ca94ecd",
      metadata_api_url: "https://atiw8kpo8a.execute-api.eu-west-1.amazonaws.com",
      created_at: "2022-05-31T12:49:55.552527Z",
      updated_at: "2022-05-31T12:49:55.552527Z"
    },
    {
      address: "0xf4875cf96993d54d0dc6ab095de439b948ac8fee",
      name: "ZHENKE_COLLECTION_V1",
      description: "FIRST VERSION OF ZHENKE COLLECTIONS",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmNboDQibxBqyR3g6QycN2gM3yJPwGBAyEi3FEWEa36kjk",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmYHPxkBP5m9eBtBHo7siAMaBVzGkMoNXhokpnq1HZ8ZfV",
      project_id: 2146,
      project_owner_address: "0x6c56d3b3fd78e734f8981c0784c21907257471b2",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmY72w6CHJz3XnjXbUDM6jdtWAHq9WfiRDJPncH5wFLAgk",
      created_at: "2022-05-31T09:05:43.928622Z",
      updated_at: "2022-06-09T16:40:28.681051Z"
    },
    {
      address: "0x608f46c0b28c82c8d17bd5922ec5bb820b0a63b8",
      name: "CertSeal",
      description:
        "CertSeal Certificates of Authenticity. This collection represents physical items in the real world. In order to enjoy the full benefits of this NFT, you must create a free account with CertSeal. Visit https://certseal.ca to create your free account.",
      icon_url: "",
      collection_image_url:
        "https://certseal.ca/wp-content/uploads/2022/04/Screen-Shot-2022-04-17-at-10.31.28-PM.png",
      project_id: 2113,
      project_owner_address: "0x3846a86edd465a1ad6d86947fb724788500baf25",
      metadata_api_url: "https://app.certseal.ca/api/certs/metadata",
      created_at: "2022-05-30T04:09:12.065354Z",
      updated_at: "2023-01-19T17:40:57.242826Z"
    },
    {
      address: "0x037d37bda4c7887982b1fea96a5bd61bfd9db935",
      name: "Les Cercles de Cassiodore",
      description:
        "La toute premi\u00e8re collection de SCRIPTORIUM est con\u00e7ue en signe d\u2019hommage \u00e0 Cassiodore, cet \u00e9rudit n\u00e9 en 480 \u00e0 Calabre en Italie. Sans lui, le savoir, la culture europ\u00e9enne, les biblioth\u00e8ques et les universit\u00e9s ne seraient pas telles que nous les connaissons aujourd\u2019hui ! Il a naturellement toute sa place, plus de 15 si\u00e8cles plus tard, dans le M\u00e9tavers. \u00ab Les Cercles de Cassiodore \u00bb sont une collection de 32 \u0153uvres originales r\u00e9alis\u00e9es par le calligraphe Charles Boisart : tout simplement l\u2019un parmi les meilleurs artistes de notre \u00e9poque ! The very first collection of SCRIPTORIUM is designed as a sign of tribute to Cassiodore, this scholar born in 480 in Calabria in Italy. Without him, knowledge, European culture, libraries and universities would not be as we know them today! He naturally has its legitimacy, more than 15 centuries later, in the Metaverse. \u00ab The circles of Cassiodore \u00bb is a collection of 32 original artworks by the calligrapher Charles Boisart: quite simply one among the best artists of our time!",
      icon_url:
        "https://fleursetfeuillages.mypinata.cloud/ipfs/QmYDGRRZP6dku7zTuuq8iPnnQG7mHvRVbJdjozDXyknPXD",
      collection_image_url:
        "https://fleursetfeuillages.mypinata.cloud/ipfs/QmYDGRRZP6dku7zTuuq8iPnnQG7mHvRVbJdjozDXyknPXD",
      project_id: 2080,
      project_owner_address: "0x4fe724e2021441d7a7bf0d474f461ac01775643b",
      metadata_api_url:
        "https://fleursetfeuillages.mypinata.cloud/ipfs/QmUpB7nhrnoTKnEji5KVESB3QHCidgBTgCwovPpLZxvJMx",
      created_at: "2022-05-28T15:02:39.970215Z",
      updated_at: "2022-05-31T09:30:57.581367Z"
    },
    {
      address: "0x9e0d99b864e1ac12565125c5a82b59adea5a09cd",
      name: "Illuvium Land",
      description:
        "Land Plots generate FUEL in Illuvium: Zero, the companion game to Illuvium. There are only 100,000 plots in the Illuvium Universe ranging from Tier 1 to 5. Higher tier plots have more elements and FUEL sites.",
      icon_url: "https://assets.illuvium-game.io/illuvidex/imx/land/icon.png",
      collection_image_url:
        "https://assets.illuvium-game.io/illuvidex/imx/land/collection_image.png",
      project_id: 2047,
      project_owner_address: "0x9989818ae063f715a857925e419ba4b65b793d99",
      metadata_api_url:
        "https://api.illuvium-game.io/gamedata/illuvidex/land/metadata",
      created_at: "2022-05-26T08:46:21.930644Z",
      updated_at: "2022-05-26T08:46:21.930644Z"
    },
    {
      address: "0x73313118cf4a91a420c3c5bd7110d245d0c04596",
      name: "Morphlings",
      description:
        "The Morphlings are one of seven fantasy civilizations in the Fruition of the Damned universe. They\u2019re fuzzy, feudalistic philosophers with the potential to morph into more powerful versions of themselves through study and enlightenment\u2026\nFind us.\nWe\u2019ll be waiting, Elsewhere.",
      icon_url:
        "https://ipfs.io/ipfs/QmRtSxR2uLv71sQxCCWDEwaRvnqXWjY6Atpg3DRFnoNKjd",
      collection_image_url:
        "https://ipfs.io/ipfs/QmebLhLnRwY7YmvJKdU6yNAfkyaQXnNr6aaa6TCyY2R9aU",
      project_id: 2015,
      project_owner_address: "0xb600309e9dfa998528a9f787bacea41dc8f23ce7",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmatvHXtNLgDJay1BuGfBTw7q1XPkoWhEWpMqx9uT24Fu2",
      created_at: "2022-05-23T04:00:40.419185Z",
      updated_at: "2022-06-13T05:18:36.396028Z"
    },
    {
      address: "0xa97ea11858b13c1993e8bbd4d4e03d6a7d963423",
      name: "Aetheron - Faction Banners",
      description:
        "Faction banners of all 5 starting races of Aetheron, a massive free-to-play virtual world. These banners bestow upon their owners unique in-game utility functions.",
      icon_url: "",
      collection_image_url:
        "https://app.worldoverlay.com/images/aetheron_insignia.png",
      project_id: 2014,
      project_owner_address: "0xabfd868164443aab11170c6d16042ffe46762783",
      metadata_api_url:
        "https://worldoverlay.mypinata.cloud/ipfs/Qmeeqkv6aCdx9H7KR3JB9ntz9ZKXgNhe8i1wpRjbeez7jx",
      created_at: "2022-05-22T13:47:54.640065Z",
      updated_at: "2022-05-23T15:22:23.141438Z"
    },
    {
      address: "0x937ce7fd5ee5539b7acf37f7967a9536a2eedb7c",
      name: "NIL",
      description: "Obsolete",
      icon_url: "",
      collection_image_url: "https://app.worldoverlay.com",
      project_id: 2014,
      project_owner_address: "0xabfd868164443aab11170c6d16042ffe46762783",
      metadata_api_url: "https://worldoverlay.mypinata.cloud",
      created_at: "2022-05-21T13:59:02.194058Z",
      updated_at: "2022-05-22T14:09:46.085393Z"
    },
    {
      address: "0xd691b07c44a05d5b3fbca0546e90ef86c3e3a48b",
      name: "Project Kyzen: Pre-Genesis",
      description:
        "Project Kyzen Pre-Genesis collection contains the first 3D assets that collectors will be able to equip inside the world of Kyzen.",
      icon_url: "https://crm-api.founderskey.io/account/static/prod/bnt_icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/bnt_icon.png",
      project_id: 1981,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url: "https://crm-api.founderskey.io/account/bnt/metadata",
      created_at: "2022-05-17T00:10:17.179657Z",
      updated_at: "2022-05-17T00:10:17.179657Z"
    },
    {
      address: "0x5b5135e023d9638ad7a663a2740593eb0417e554",
      name: "Cyber Galz - Galz Partz\u2699\ufe0f",
      description:
        "Cyber Galz is a gynoid NFT content & P2E game platform for cyberpunk and sci-fi enthusiasts. Galz masters a.k.a. Galz NFT holders can customise their NFTs by changing the combination of changeable attributes, Partz nfts. Galz VM_ETH and VM_IMX to redeem Galz. Visit cybergalznft.com to connect your wallet, cybergalznft.com/finder to check Galz attributes and cybergalznft.com/factory to customize your Galz. Join our discord.gg/cybergalznft and twitter.com/CybergalzNFT for latest updates.",
      icon_url:
        "https://galz.cybergalznft.com/collection_thumbnail/opensea(IMX)_logo.png",
      collection_image_url:
        "http://galz.cybergalznft.com/collection_thumbnail/IMX_Parts_crafting.png",
      project_id: 1882,
      project_owner_address: "0x5f63353dbd936a154a5b2c46e9dfd98a2f9127d7",
      metadata_api_url: "http://cybergalzpte.com/partz/imx",
      created_at: "2022-05-16T05:56:23.455246Z",
      updated_at: "2022-06-03T07:10:21.9835Z"
    },
    {
      address: "0x4629ab1e07c75aedf3b79ca4f840ec8d9a829fd6",
      name: "0000GEN Rare Art",
      description: "",
      icon_url: "https://rareimx.art/1292.jpg",
      collection_image_url: "https://rareimx.art/1292.jpg",
      project_id: 1950,
      project_owner_address: "0x4c8369fa0531072ae6f0cb58ab954ce62fbe6a65",
      metadata_api_url: "https://rareimx.art/tokens.php?id=",
      created_at: "2022-05-14T18:22:29.313674Z",
      updated_at: "2022-05-14T18:22:29.313674Z"
    },
    {
      address: "0x1963816c0b8d62f773eef9d5f87f595ef59ce47f",
      name: "Forever Pieces by DHL x Mykke Hofmann",
      description: "Forever Pieces by DHL x Mykke Hofmann",
      icon_url: "https://mh-dev.fr0ntierx.com/collection_logo.png",
      collection_image_url:
        "https://mh-dev.fr0ntierx.com/collection_feature_image.jpg",
      project_id: 1949,
      project_owner_address: "0xaf998a9ff8b15fa442b27f4f7441c3b90fa529f8",
      metadata_api_url:
        "https://ipfs.fr0ntierx.com/ipfs/QmQYuEuexE3FhDi4N5zetvu7hZwc8oJZGN899bH6SzKsnb",
      created_at: "2022-05-13T15:45:47.702275Z",
      updated_at: "2022-05-13T15:45:47.702275Z"
    },
    {
      address: "0x21e1dda790f74b7e22a260f5302f3d841f68d065",
      name: "Bad Bitch Boots",
      description:
        "Own the Bad Bitch Boot NFT by Radical Confidence Author Lisa Bilyeu, designed by Julia Haart. An official part of the Impact Theory\u2019s suite of interconnected NFTs. That will act as a reminder to give your fear the Bad Bitch Boot and become the hero of your own. Damn. Life!  The items in this collection will have future utility inside of Project Kyzen.",
      icon_url: "https://crm-api.founderskey.io/account/static/prod/icon.png",
      collection_image_url:
        "https://crm-api.founderskey.io/account/static/prod/collection_image.jpg",
      project_id: 1915,
      project_owner_address: "0x98d0a0762b264c722e1fcc855f49465b862b1beb",
      metadata_api_url: "https://crm-api.founderskey.io/account/bbb/metadata",
      created_at: "2022-05-13T00:21:29.007657Z",
      updated_at: "2022-05-13T00:21:29.007657Z"
    },
    {
      address: "0x7e647fd76c7b34bef0958c18283f60594fc514f8",
      name: "Oxford Club Inaugural Mint",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 1883,
      project_owner_address: "0x22a562917ed28a4ccbcadf313034366e658b5403",
      metadata_api_url: "",
      created_at: "2022-05-10T12:56:16.394252Z",
      updated_at: "2022-05-10T12:56:16.394252Z"
    },
    {
      address: "0xeea53781a6e3ee1f9dbbb838229cda7f717ab001",
      name: "zzz",
      description: "zzz",
      icon_url:
        "https://galz.cybergalznft.com/collection_thumbnail/opensea(IMX)_logo.png",
      collection_image_url:
        "http://galz.cybergalznft.com/collection_thumbnail/IMX_Parts_crafting.png",
      project_id: 1882,
      project_owner_address: "0x5f63353dbd936a154a5b2c46e9dfd98a2f9127d7",
      metadata_api_url: "http://cybergalzpte.com/partz/imx",
      created_at: "2022-05-10T12:41:58.346536Z",
      updated_at: "2022-06-03T07:09:20.656001Z"
    },
    {
      address: "0x49df9c173be64fe295a77a866a27faa5fb4abfb4",
      name: "Groove House",
      description: "Groove House",
      icon_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmS3xuxGFqbepcc3zVKLbJYihDFwsSDXLPKf2PPe2m2saR/collection_image.png",
      collection_image_url: "",
      project_id: 1849,
      project_owner_address: "0x08e8bedf1e00957b1e8a06ae949a428b3e6cc840",
      metadata_api_url:
        "https://angelsoftwares.mypinata.cloud/ipfs/QmPK2akKz7Qx3qXXqTNeGZC89R9zWQ4kim6fmkUkKMKYZs",
      created_at: "2022-05-07T16:15:10.795383Z",
      updated_at: "2022-05-07T16:15:10.795383Z"
    },
    {
      address: "0x75cf94a722d8d0190a33f6e7d1bf2a9e0290df56",
      name: "Immutable KongX",
      description: "",
      icon_url:
        "https://api.immutablekongz.io/collection/immutableKongX/icon.png",
      collection_image_url:
        "https://api.immutablekongz.io/collection/immutableKongX/image.gif",
      project_id: 100,
      project_owner_address: "0x735f7c8291e6bb526f053d51a2b1021b6f4c4771",
      metadata_api_url: "https://api.immutablekongz.io/metadata/kongx",
      created_at: "2022-05-03T21:47:25.219645Z",
      updated_at: "2022-05-03T21:47:25.219645Z"
    },
    {
      address: "0xaaeff922d548cccf351d7ba92f33e248f84a43a1",
      name: "Earlyverse",
      description:
        "Humans of Earlywork (earlywork.co). Showcasing awesome young people creating the careers of tomorrow in tech, startups & social impact.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/Qme83Ct9vL4mYYyfcoTs8Aw7jMfKvGyZa7t42BFRKf4uMc",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/Qme83Ct9vL4mYYyfcoTs8Aw7jMfKvGyZa7t42BFRKf4uMc",
      project_id: 1816,
      project_owner_address: "0x2a181775fe023fd7e7aaa71da5ec7780c3205023",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmfKy7r57b2KBsgpLb81y91u4SZ9DZ2hBeEFxxp21MPbZV",
      created_at: "2022-05-02T05:25:18.151309Z",
      updated_at: "2022-05-16T02:01:27.391094Z"
    },
    {
      address: "0x0a220fd271397ea206af2831c35ff408deda79fc",
      name: "Aglet Sneakers 1",
      description: "Aglet Sneakers 1",
      icon_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      collection_image_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      project_id: 1790,
      project_owner_address: "0x41d70b3565d1e510a4e7c8e8ef1871f475b87a04",
      metadata_api_url:
        "https://api.on.life/blockchain/api/collections/864c482e-1511-49e6-bbfd-5b2a26b8134c/tokens/metadata",
      created_at: "2022-04-27T11:49:23.748738Z",
      updated_at: "2022-04-27T11:49:23.748738Z"
    },
    {
      address: "0xf08f31b8adc65624dfa24f668be91c20a163efad",
      name: "Spry Skulls",
      description:
        "Biggest project of this year on L2 Gas Free IMX capable of changing lives by giving away 1 Million$ | 5k FREE Young Skulls NFTs to all Spry Skulls owners.",
      icon_url:
        "https://spryskulls.mypinata.cloud/ipfs/QmXkpBftU3p7GHDuywQGv6P9eDfqig49ymH4q8A9gj2Azh",
      collection_image_url:
        "https://spryskulls.mypinata.cloud/ipfs/QmQRw9AC6hLq9V5ZtibhNcxqPAFkmJvMzqG3oT1LzuUW6g",
      project_id: 1789,
      project_owner_address: "0x8068758b73a230d9785fc1cc10a1149a88e617e8",
      metadata_api_url:
        "https://spryskulls.mypinata.cloud/ipfs/Qmb5hYQ4fmrDKdkWNV86UUMDtBwBuvPfuxBAKQrw89QaXX",
      created_at: "2022-04-26T09:38:08.82405Z",
      updated_at: "2022-04-26T09:38:08.82405Z"
    },
    {
      address: "0x05c415d43dbb0a749bb7753d1f51fe23ff3d1f32",
      name: "000GEN Moonbirds",
      description: "",
      icon_url: "https://live---metadata-5covpqijaa-uc.a.run.app/images/0",
      collection_image_url:
        "https://live---metadata-5covpqijaa-uc.a.run.app/images/0",
      project_id: 1788,
      project_owner_address: "0x05efea8e4b502cf2cd841dd18bf1829b5c402924",
      metadata_api_url: "https://nftsmeta.club/db_moonbirds.php?id=",
      created_at: "2022-04-25T11:16:11.962343Z",
      updated_at: "2022-04-25T11:16:11.962343Z"
    },
    {
      address: "0x9876c63219556850959795768b935b0561a28728",
      name: "Project Kyzen 7 Character Reveals",
      description: "Project Kyzen's 7 Character Reveals",
      icon_url:
        "https://ipfs.io/ipfs/QmPdhTv9MkEMoEkm2MkG7NksR1s6HRACikLNg19PiMh5eE",
      collection_image_url:
        "https://ipfs.io/ipfs/QmNVHRXsFM3xLmB1rGoJyPQuQ6qk2Rem24mEXm6yRjyj5k",
      project_id: 1787,
      project_owner_address: "0x7e7b2fe3842a3948459398d63f4d8f6c37e2714f",
      metadata_api_url:
        "http://18.166.59.40:8080/cv-api/metadata/0x9876c63219556850959795768b935b0561a28728",
      created_at: "2022-04-23T15:17:17.546014Z",
      updated_at: "2022-04-23T15:17:17.546014Z"
    },
    {
      address: "0xf01d46fd103fcb74c80b43f5b4412fdc4585e6d4",
      name: "00000 Azuki X",
      description:
        "Azuki collection is coming to ImmutableX: a Layer 2 for NFTs on Ethereum. This means ETH with NO GAS!",
      icon_url: "https://i.ibb.co/dPjwN68/azuki-x.png",
      collection_image_url: "https://i.ibb.co/dPjwN68/azuki-x.png",
      project_id: 1586,
      project_owner_address: "0x93f4ccd9f3b1336617bba1868a80130c6cf74053",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmeDZcq6JeUjRw2RvZBFxaMrpfX1vJyVy476o3BvCEH8KY",
      created_at: "2022-04-22T08:48:42.492663Z",
      updated_at: "2022-07-05T09:23:51.795894Z"
    },
    {
      address: "0xee8a7a6d7b3819d49f0a2a0e57d6a8f6b93ecc97",
      name: "051 Animated Monsters",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmQJoARB8QGU4mFhKSLFTwPPcKFJ1KqGEHY4W6MtPMPrCv/image.gif",
      collection_image_url:
        "https://ipfs.io/ipfs/QmQJoARB8QGU4mFhKSLFTwPPcKFJ1KqGEHY4W6MtPMPrCv/image.gif",
      project_id: 1786,
      project_owner_address: "0x3d6f676a578dad0c7f299dfee7b6168bb4ad4433",
      metadata_api_url: "https://nftsmeta.club/db_monsters.php?id=",
      created_at: "2022-04-22T08:15:27.344138Z",
      updated_at: "2022-04-22T08:15:27.344138Z"
    },
    {
      address: "0x30fe8a3ed4f576558e2975bc9877a285879c18a2",
      name: "VeloVerse Betapass",
      description:
        "VeloVerse Cycling is a new browser-based cycling manager game. Buy Betapass to play and to be whitelisted for airdrops of VeloVerse token when launched.",
      icon_url: "https://assets.imx-toolshed.io/velo-verse-betapass/icon.png",
      collection_image_url:
        "https://assets.imx-toolshed.io/velo-verse-betapass/collection.png",
      project_id: 1751,
      project_owner_address: "0x6199b1842485bc7605c858ce732914bea1331aa0",
      metadata_api_url: "https://assets.imx-toolshed.io/velo-verse-betapass",
      created_at: "2022-04-22T08:06:18.57407Z",
      updated_at: "2022-04-22T08:06:18.57407Z"
    },
    {
      address: "0x601ba08507555e1bc98ee6694b9de65293b21ebf",
      name: "10,000 Deez Nuts",
      description: "",
      icon_url:
        "https://lh3.googleusercontent.com/ya8SNFxSNF-hEC3btIEwtX0U03KUvz3N65BhTKdLrOoW9VC0145YQK2XyNS58J4R2Ze1mA6mFKr4k0iciiHRZtC9Z0ducTvpScYcww=s0",
      collection_image_url:
        "https://lh3.googleusercontent.com/ya8SNFxSNF-hEC3btIEwtX0U03KUvz3N65BhTKdLrOoW9VC0145YQK2XyNS58J4R2Ze1mA6mFKr4k0iciiHRZtC9Z0ducTvpScYcww=s0",
      project_id: 1785,
      project_owner_address: "0xc0aaeac9f7f225ac78b022a3848a259c3c6edc89",
      metadata_api_url: "https://nftsmeta.club/db_deeznuts.php?id=",
      created_at: "2022-04-22T07:06:16.651203Z",
      updated_at: "2022-04-22T07:06:16.651203Z"
    },
    {
      address: "0x86b2af322780f07086ac0fd4adf1b672e956a791",
      name: "ZZZ",
      description: "Aglet Sneakers Development",
      icon_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      collection_image_url:
        "https://storage.googleapis.com/aglet-public/media/aglet-logo.png",
      project_id: 1750,
      project_owner_address: "0xc7e4f43274da953454c21667799ee4c903b9e9e1",
      metadata_api_url:
        "https://api.staging.on.life/blockchain/api/collections/15174083-d368-45bc-9107-c2720b744c86/tokens/metadata",
      created_at: "2022-04-22T05:23:56.173122Z",
      updated_at: "2022-04-22T11:24:52.447941Z"
    },
    {
      address: "0xb384ceeccc9a6e93fea84e2c84e21edd607ec637",
      name: "Alanna",
      description:
        "Alanna are 10000 unique portraits of women created by Alanna, randomly generated through coding using 1120 different traits. They live in the metaverse of the ETH blockchain. It is easy to recognize them by their distinctive characteristics as well as their futuristic costumes. Just like the Mona Lisa, they are elegant but also pretty much mysterious. Some Alanna look more rare than the others, but all of them are extremely valuable.",
      icon_url: "https://i.postimg.cc/V60mZT7V/Alanna-avatar.gif",
      collection_image_url: "https://s2.loli.net/2022/04/22/hy8K2BYP3uwtoSV.gif",
      project_id: 1717,
      project_owner_address: "0xd81a77d9be5629d36d2d922bc34dfe0c2fffccad",
      metadata_api_url: "https://wby823.xyz/imx/Cob39b3d23e3219c",
      created_at: "2022-04-22T03:50:34.614304Z",
      updated_at: "2022-04-22T08:09:41.151831Z"
    },
    {
      address: "0xb603dd051af875d64c55794d03a5ddc1694103ed",
      name: "Cryptees",
      description: "NFTs Meet Innovative Fashion",
      icon_url: "https://cdn.cryptees.gg/assets/images/cryptees_logo.png",
      collection_image_url:
        "https://cdn.cryptees.gg/assets/images/cryptees_logo.png",
      project_id: 1784,
      project_owner_address: "0x3ec17027e19483e08cd378ff0b6d377e86bb2d7a",
      metadata_api_url:
        "https://api.cryptees.gg/api/v1/immutable/metadata/0xb603dd051af875d64c55794d03a5ddc1694103ed",
      created_at: "2022-04-22T03:10:37.084973Z",
      updated_at: "2022-05-09T05:14:17.326175Z"
    },
    {
      address: "0x5c9f8b00db5ae281e8f401789224fe0227f24d81",
      name: "ETHX AI",
      description: "",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x5c9f8b00db5ae281e8f401789224fe0227f24d81/icon.img",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x5c9f8b00db5ae281e8f401789224fe0227f24d81/icon.img",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0x5c9f8b00db5ae281e8f401789224fe0227f24d81",
      created_at: "2022-04-18T18:49:06.239466Z",
      updated_at: "2022-04-18T18:49:06.239466Z"
    },
    {
      address: "0x6777f9d77a7d0eafe82bcb7e9f0766a159e2e0ce",
      name: "Crypto phrases",
      description: "Some nice things to say",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmXqfCPF1191zxsauXgyV2gPZZXtdtQbnG7vwByQkpLco3",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmXqfCPF1191zxsauXgyV2gPZZXtdtQbnG7vwByQkpLco3",
      project_id: 1684,
      project_owner_address: "0x6c443510cf6a4a56341d4ce1aea3b4399a14fbc7",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmfZH1GZBnc9JK1xk2Hcm8TavmSuD5QB6dzXwkBfBMR4e9",
      created_at: "2022-04-14T08:41:06.909603Z",
      updated_at: "2022-09-09T05:38:38.040885Z"
    },
    {
      address: "0x5a123f4241d60de5b1d3f6cdd92c129d6047d6c6",
      name: "Crypto Canines",
      description:
        "Crypto Canines are a bunch of salty online avatars, some of these mutts are privileged, born with a silver spoon in their mouths whilst others have come up the hard way. Every proud owner of a Crypto Canine will be able to connect to our website (cryptocanines.dog) and upon logging in will be presented with their canine\u2019s backstory.",
      icon_url: "https://cdn.cryptocanines.dog/collection/favicon.png",
      collection_image_url:
        "https://cdn.cryptocanines.dog/collection/collection.png",
      project_id: 1587,
      project_owner_address: "0xfb37edacde59c05072ba2d2a6e5bf5d8b981ccd4",
      metadata_api_url:
        "https://imxlauncher.com/json/get_metadata.php?cid=16&asset_id=",
      created_at: "2022-04-08T11:17:20.543759Z",
      updated_at: "2022-04-13T06:28:02.395567Z"
    },
    {
      address: "0xc3193b542b084195a6973d987631cc2f8f0c559f",
      name: "Crypto Canines",
      description:
        "Crypto Canines are a bunch of salty online avatars, some of these mutts are privileged, born with a silver spoon in their mouths whilst others have come up the hard way. Every proud owner of a Crypto Canine will be able to connect to our website (cryptocanines.dog) and upon logging in will be presented with their canine\u2019s backstory.",
      icon_url: "https://cdn.cryptocanines.dog/collection/favicon.png",
      collection_image_url:
        "https://cdn.cryptocanines.dog/collection/favicon.png",
      project_id: 1585,
      project_owner_address: "0x393a113261da843e7a7fd9774cf4bdefc4d954be",
      metadata_api_url:
        "https://imxlauncher.com/json/get_metadata.php?cid=16&asset_id=",
      created_at: "2022-04-08T08:07:55.555664Z",
      updated_at: "2022-04-08T10:32:42.086314Z"
    },
    {
      address: "0x539b96754ae21245b413896efe39a49ed2e8ec37",
      name: "IMX Bulls",
      description:
        "The modified IMX Bulls are ready to explore and visit the human race",
      icon_url:
        "https://infura-ipfs.io/ipfs/QmaujxScC3tHwM3Lwk4SkzMcQFZZwFLhsFPV5Zbp4XSYfw/icon.png",
      collection_image_url:
        "https://infura-ipfs.io/ipfs/QmaujxScC3tHwM3Lwk4SkzMcQFZZwFLhsFPV5Zbp4XSYfw/collection_image.png",
      project_id: 1552,
      project_owner_address: "0x5246462026736972c0324b4ef4d2190c54f57651",
      metadata_api_url:
        "https://infura-ipfs.io/ipfs/QmRTtjH5khiaEVwShmUw1a1ENgmX76w242P9BDfU9Fuf4h",
      created_at: "2022-04-05T09:43:24.93812Z",
      updated_at: "2022-04-05T09:43:24.93812Z"
    },
    {
      address: "0xcb9ed5cc6445b4cc22cd56cdd81e69a03539b608",
      name: "Vy Worlds Stickers",
      description:
        "No one knows what mysterious power created the Vy. All we know is they call it The Maker. Vy rained down from the sky like shooting stars with an urge to play, build, and connect in an infinite number of digital Game Worlds \u2014 built by you.\n            Vy Worlds Stickers are limited-edition stickers that you can collect and trade, and you will even be able to use them to decorate your Game Worlds. Get them from airdrops, by owning Vy NFT, and completing in-game challenges!\n            We play together. We build together. We earn together.",
      icon_url: "https://skins.vyworlds.com/stickers/collection_image.png",
      collection_image_url:
        "https://skins.vyworlds.com/stickers/collection_image.png",
      project_id: 827,
      project_owner_address: "0x58b169c8a942df45f65ecb6b2803030f9e3d9aec",
      metadata_api_url: "https://metadata.vyworlds.com/getStickersMeta",
      created_at: "2022-04-01T23:34:32.196184Z",
      updated_at: "2022-07-07T05:35:10.588642Z"
    },
    {
      address: "0xf264d140301b89521229ada077b6614b67315dec",
      name: "10,000 Degen Apes",
      description: "",
      icon_url: "https://imxdegens.com/icon.jpg",
      collection_image_url: "https://imxdegens.com/logo.jpg",
      project_id: 1519,
      project_owner_address: "0x2c3569d587212f1ff956efeb683257f0687b67f4",
      metadata_api_url: "https://imxdegens.com/tokens.php?id=",
      created_at: "2022-03-30T09:11:27.252844Z",
      updated_at: "2022-03-30T09:11:27.252844Z"
    },
    {
      address: "0x8ade6ea8c4fcd031138a5f0c9173dd9926d66322",
      name: "RAVERSE",
      description:
        "In the early 90s we were the only video artists crew authorized to shoot what was happening in RAVE parties across Europe. We kept all that precious material for thirty years. We digitized tape after tape. For us, it is the right time to share these historical assets. We hope our archives can create a link between generations. WELCOME TO THE RAVERSE! Drop Link : https://gaspardetjoseph.fr/raverse?lang=en",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmSLrZ8BhSkumPR3P6ofS5R67Kv4RGBxpqJKp54iovXYTR/Gif-bannie%CC%80re-plus-grand-moyennement.gif",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmSLrZ8BhSkumPR3P6ofS5R67Kv4RGBxpqJKp54iovXYTR/Gif-bannie%CC%80re-plus-grand-moyennement.gif",
      project_id: 1453,
      project_owner_address: "0x18585a63f9b73a763cbc632ca4dc4441facb71d8",
      metadata_api_url:
        "https://raverse.mypinata.cloud/ipfs/QmNn3jNZ28xTaw57xh1xt7oti8yCXaSKJgJfXFvjXVLQGD",
      created_at: "2022-03-28T17:37:00.850635Z",
      updated_at: "2022-06-18T13:49:52.532939Z"
    },
    {
      address: "0x3b3cf8275aed69e403711ffe196e6f763272c486",
      name: "001GEN Blue Rocks",
      description: "",
      icon_url: "https://xblue.rocks/logo_500.png",
      collection_image_url: "https://xblue.rocks/logo_968.png",
      project_id: 1421,
      project_owner_address: "0x1009acf96ffb47c4584e018357f63ac292d18263",
      metadata_api_url: "https://xblue.rocks/tokens.php?id=",
      created_at: "2022-03-23T06:24:36.249142Z",
      updated_at: "2022-03-23T06:24:36.249142Z"
    },
    {
      address: "0x154c512b8a52fdc13c36bbfb36d909c3bc814bc1",
      name: "supernovas.app",
      description: "A shared collection of 1:1 NFTs minted on Supernovas.",
      icon_url: "https://arweave.net/kNnvuog6IkxW72khxgEC1vyUlfE-Ab3bkhPHqtCsLHw",
      collection_image_url:
        "https://arweave.net/UbSt6HbNObzXRKuHrkVBtqCRI-2xGXKXXekCsxaTUvE",
      project_id: 1387,
      project_owner_address: "0x40927d3252bcc9f2f0edfd4632eff398b0214c01",
      metadata_api_url: "https://supernovas.app/api/v0/imx/metadata",
      created_at: "2022-03-22T16:37:24.266381Z",
      updated_at: "2022-03-22T16:37:24.266381Z"
    },
    {
      address: "0x3045adf10368ed30bf66332724b15333e1313432",
      name: "Certificate of Ownership",
      description:
        "Certificate of Ownership NFTs grant fractionalized ownership over all virtual land, virtual experiences, and digital assets acquired and developed by ASRA City DAO - entitling holders to quarterly revenue and profit distributions.",
      icon_url: "https://files.asracity.io/images-public/ASRA_logo.png",
      collection_image_url:
        "https://files.asracity.io/images-public/asra-certificate.gif",
      project_id: 1321,
      project_owner_address: "0xc4feb19c1c27dd5f40d0b55660bca17d92b4a5b1",
      metadata_api_url:
        "https://asracitydao.mypinata.cloud/ipfs/QmU2doaUdnXsF7JPiUCXQoBSgoU6VWqvDZvcxe9RKWgz6L",
      created_at: "2022-03-20T09:11:53.464389Z",
      updated_at: "2022-03-20T09:11:53.464389Z"
    },
    {
      address: "0xa87f4095a85b35b4782611801609a931a7c2cd01",
      name: "Item",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.prod.guildofguardians.com/api/imx/nfts/0xa87F4095a85b35b4782611801609A931a7C2cd01",
      created_at: "2022-03-17T11:20:04.92083Z",
      updated_at: "2022-07-07T11:40:21.449246Z"
    },
    {
      address: "0x2cd686bef22f6b49a2bc286b15e7571217f838f2",
      name: "Guild of Guardians Art Collectibles",
      description: "",
      icon_url:
        "https://guildofguardians.mypinata.cloud/ipfs/QmZci2nV9ovvuJvkzz8hyJD5yTb95MqBgvJ9qPpC731DF7",
      collection_image_url:
        "https://guildofguardians.mypinata.cloud/ipfs/QmZci2nV9ovvuJvkzz8hyJD5yTb95MqBgvJ9qPpC731DF7",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.prod.guildofguardians.com/api/imx/nfts/0x2Cd686BEF22F6B49a2BC286B15E7571217f838f2",
      created_at: "2022-03-17T11:16:33.215216Z",
      updated_at: "2022-07-07T11:40:21.42501Z"
    },
    {
      address: "0xfbf1c1c09a94fe45ea8cc981c478816963ec958c",
      name: "Habbo Tokens",
      description:
        "Habbo Tokens is a collection of NFTs that can be used for different purposes in the Habbo NFT ecosystem. Currently this includes NFT credit furni, which can be exchanged for NFT credits at https://nft.habbo.com/credits",
      icon_url: "",
      collection_image_url:
        "https://nft-tokens.habbo.com/htokens/images/tokenscollection.png",
      project_id: 10025,
      project_owner_address: "0x1d1c83bc7130ac927ebea2c73bbe723ab2e3dfc0",
      metadata_api_url: "https://nft-tokens.habbo.com/htokens/metadata",
      created_at: "2022-03-16T08:33:36.199064Z",
      updated_at: "2022-10-06T07:36:07.291516Z"
    },
    {
      address: "0x43e37ffc02ec45ab574a66826ba8e881bc4d955b",
      name: "14041 Mutant Apes",
      description:
        "A collection of 14041 mutant apes that can travel, perform in the circus and bring money to their owner. The higher the mutation level, the more profit the ape can bring. Everyone can mint their own mutant ape. 10% referral bonus on each mint. It looks rare www.mayc.art",
      icon_url:
        "https://ipfs.io/ipfs/QmTpbq6yZZ4s1tHcQMTjz6bhkjjmj8MjGVUUmjzQerM1wE",
      collection_image_url:
        "https://ipfs.io/ipfs/QmTpbq6yZZ4s1tHcQMTjz6bhkjjmj8MjGVUUmjzQerM1wE",
      project_id: 1255,
      project_owner_address: "0x0509a0584809869a0a2486b499f800be45528923",
      metadata_api_url: "https://mayc.art/tokens.php?id=",
      created_at: "2022-03-15T07:26:57.681006Z",
      updated_at: "2022-03-15T07:26:57.681006Z"
    },
    {
      address: "0xdff1faa4280aed96bdf59409e818cddf3393e561",
      name: "Gaspard & Joseph - Hors-S\u00e9rie",
      description:
        "D\u00e9couvrez la collection Hors-S\u00e9rie de Gaspard & Joseph. Discover Gaspard & Joseph's special collection.",
      icon_url:
        "https://nftstorage.link/ipfs/bafkreiesrhtnl5miq2yi6s74gc3qjkrzsilkghybai4nh77kncz3pg3ile",
      collection_image_url:
        "https://nftstorage.link/ipfs/bafkreiabkmknc4hfhg6evhnsuyyjufl7wnsanb4y5vqfgiv6mv2wkpgesq",
      project_id: 1222,
      project_owner_address: "0xc5dec19261a5b9585f2f8f91601ba6a7e699b45d",
      metadata_api_url:
        "https://nftstorage.link/ipfs/bafybeigwlmys4lwrbcfll3gvzork3b3qz4ga7drzyks664y2pej6q5pxve",
      created_at: "2022-03-09T19:52:40.491775Z",
      updated_at: "2022-10-20T22:13:12.146449Z"
    },
    {
      address: "0x091232627e832510891f0a1b0717a0033ad6c6c2",
      name: "Not Valid",
      description: "Not Valid",
      icon_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eifl.net%2Feifl-in-action%2Fopen-access-and-open-science-ukraine&psig=AOvVaw0FDv2CYG8tOn_u6qK3_Mf_&ust=1646942458160000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi9kPToufYCFQAAAAAdAAAAABAJ",
      collection_image_url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eifl.net%2Feifl-in-action%2Fopen-access-and-open-science-ukraine&psig=AOvVaw0FDv2CYG8tOn_u6qK3_Mf_&ust=1646942458160000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi9kPToufYCFQAAAAAdAAAAABAJ",
      project_id: 1222,
      project_owner_address: "0xc5dec19261a5b9585f2f8f91601ba6a7e699b45d",
      metadata_api_url:
        "https://ipfs.gaspardetjoseph.fr/ipfs/QmQjL895Bjs6h8fSGZaaJujxVkkq7g1GTjjqWMHro1s2nQ/IMX",
      created_at: "2022-03-09T17:26:49.811563Z",
      updated_at: "2022-03-09T20:01:55.454991Z"
    },
    {
      address: "0xe804f5a2b14ae03345fffb89bded13a2ef5cefa7",
      name: "Pirates of the Arrland",
      description:
        "Pirates of the Arrland is the first collection of 10,000 Pirate characters created for the upcoming 3D high quality game with the Play to Earn concept. Having more than one Pirate means that you can seek for the most rare & unique traits, as they will have a real impact on the game. Pirates will have the ability to generate a utility $RUM token that later on will be used for breeding young Pirates, crafting items, levelling up abilities and more.",
      icon_url:
        "https://ipfs.moralis.io:2053/ipfs/QmdrgZtwD9W4MkaW5Q6ic8BM6WkwWWqZA8nWDQp8rRxpFL/00c23f2b5ac9491eb67a2fb9a8c6ac05.png",
      collection_image_url:
        "https://ipfs.moralis.io:2053/ipfs/QmP1LzCsx9qJcKA1TjHLw7WKZ8umo2X9Xmttf1sFtWM3N2/864ac41354a14647a89b0b9854a36a1c.png",
      project_id: 1223,
      project_owner_address: "0x72a669f921543f234653b9401db406bedc32ea0e",
      metadata_api_url: "https://arrland.app/a436690bb2654a5496551aaac43756b2",
      created_at: "2022-03-07T21:05:31.84064Z",
      updated_at: "2022-03-07T21:05:31.84064Z"
    },
    {
      address: "0xcf3d8a4d8999072a2ac8dc014d8391de135b1caa",
      name: "ChronoForge Mounts",
      description:
        "Hussari are rideable mounts in the ChronoForge action RPG. Ancient winged creatures that evolved in fractured spacetime, hussari can only be tamed by those willing to make the arduous journey across the fractured lands to the Edge of Reason. Learn more at https://chronoforge.gg ",
      icon_url:
        "https://d3uzvcdvguxi7x.cloudfront.net/images/chronoforge/android-chrome-192x192.png",
      collection_image_url:
        "https://d3uzvcdvguxi7x.cloudfront.net/images/chronoforge/mounts_imx_square.png",
      project_id: 465,
      project_owner_address: "0x17a45f80efd20594afe2c59d7e1ae7ab0c6954cc",
      metadata_api_url: "https://api.pxquest.com/meta/imx/mounts",
      created_at: "2022-03-06T23:48:27.876879Z",
      updated_at: "2022-11-08T01:13:42.069329Z"
    },
    {
      address: "0x64b51d2dd4d2dd489bb72f7f8bb213edc3506365",
      name: "Cooler Cats",
      description:
        "Cooler Cats is a collection of 10,000 randomly generated NFTs from over 300 traits. Each Cooler Cat is unique and special",
      icon_url:
        "https://bafybeiddxaupzt4ga2pyggbcolrbgwc4kd2q7spjlih6gcjzygqh7vzrx4.ipfs.nftstorage.link/images/10000.png",
      collection_image_url:
        "https://bafybeiddxaupzt4ga2pyggbcolrbgwc4kd2q7spjlih6gcjzygqh7vzrx4.ipfs.nftstorage.link/images/10000.png",
      project_id: 1190,
      project_owner_address: "0xd0e845b448f64d1f16b6d09cec3020e81a975e88",
      metadata_api_url:
        "https://bafybeibtzafdublhqiip4ks6wchmxw4mss2vwabyk6vddzbr5d6ydtqy3m.ipfs.nftstorage.link",
      created_at: "2022-03-02T01:41:19.915426Z",
      updated_at: "2022-06-04T02:26:08.229227Z"
    },
    {
      address: "0xe8bccf7877d889c2d6ca4bda947b38e498cbd19b",
      name: "IMX ROVERS",
      description: "",
      icon_url:
        "https://oci.mypinata.cloud/ipfs/QmT1KzD1awPvhB3jkJYbStP4weT3LQDz4MvhKTmxE6YUX6",
      collection_image_url:
        "https://oci.mypinata.cloud/ipfs/QmT1KzD1awPvhB3jkJYbStP4weT3LQDz4MvhKTmxE6YUX6",
      project_id: 1189,
      project_owner_address: "0xc5c159b043f6d4c4d01a02b6caa00043ef2d0e16",
      metadata_api_url:
        "https://oci.mypinata.cloud/ipfs/QmZPqJW7LmYSmuYPZPGeaxF6kKskyDThiKYEUMzfK1cL8E",
      created_at: "2022-03-01T16:49:52.211814Z",
      updated_at: "2022-03-03T16:31:49.032543Z"
    },
    {
      address: "0x999753cac49a3c46659a93ebe35b3698186f0669",
      name: "Unfamiliar Territory Land",
      description: "Unfamiliar Territory Land",
      icon_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmXtJXdrYKW88kLmsGi6J4JZUhEpgiY6zJQft71xhKXmJx",
      collection_image_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmeXb2Yf1U4S3JRXv6K5vSK7g3WhQ5rPHcLboewY6jZkHk",
      project_id: 1156,
      project_owner_address: "0xd7fd09b49843cd9f1580d9a2ab7522c612fa5a26",
      metadata_api_url: "https://api.unfamiliar.online/asset/land",
      created_at: "2022-03-01T02:55:40.916205Z",
      updated_at: "2022-03-01T02:55:40.916205Z"
    },
    {
      address: "0x49bc6ef4daf9441571ed1578ca8407ca2a333785",
      name: "ImmutaSwap.io",
      description: "NFTs that can be used for swapping ERC20 tokens.",
      icon_url: "https://immutaswap.io/assets/thumbnail.svg",
      collection_image_url:
        "https://immutaswap.io/assets/collection_image_url.png",
      project_id: 1123,
      project_owner_address: "0xe250a76414ec1e3085f7c482eb8fcbf6cc57c515",
      metadata_api_url: "https://immutaswap.io/api",
      created_at: "2022-02-27T15:57:33.86129Z",
      updated_at: "2022-08-15T14:12:31.02632Z"
    },
    {
      address: "0x0d62bf3334a1cea06deb046beb92f3936a02967a",
      name: "Uncanny Cats by Feral Cat Club",
      description:
        "Uncanny Cats by Feral Cat Club. Promotional collection of AI generated cats in the style of Feral Cat Club NFTs.",
      icon_url: "https://i.ibb.co/DDjx4nL/Uncanny-Cats-Logo.png",
      collection_image_url: "",
      project_id: 1090,
      project_owner_address: "0xcd9a20e017562c7713a9030ecdaeb6090d998523",
      metadata_api_url: "https://meta.feralcatclub.art/json-imx",
      created_at: "2022-02-26T06:34:42.41223Z",
      updated_at: "2022-03-21T09:59:02.592434Z"
    },
    {
      address: "0x699711910e980f4f6a44b6a2a566c2f6d6dfff56",
      name: "Goons of Balatroon Badges",
      description: "The Rank Badges of the Goons of Balatroon Trading Card Game",
      icon_url: "https://gobstaticfiles.s3.amazonaws.com/Icon_120x120.png",
      collection_image_url:
        "https://d3v39qzpd9ch3p.cloudfront.net/CollectionLogo.png",
      project_id: 826,
      project_owner_address: "0xb322f8590e78be096e6349bfe6448c302d4ddcd1",
      metadata_api_url: "https://goons-metadata.herokuapp.com/rank",
      created_at: "2022-02-25T22:02:15.480747Z",
      updated_at: "2022-08-02T20:58:01.675764Z"
    },
    {
      address: "0x3c2b305c411dc625db576c6efb0f62e2c4e22b52",
      name: "MetaOps Founders Pass",
      description:
        "Our Founder's Pass NFT combines the most advanced principles of design and technology to bring power to the hands of gamers through utility. This pass will act as a key card in our metaverse, allowing the owner to unlock perks available only to Founder\u2019s Pass holders. Additionally, every holder will receive a whitelist spot on all future NFT drops as long as they hold the pass. Founders will have the option to burn their pass for a certain mystery box/special incentive, as listed below:\n    A 1/1 Legendary Founder's Pass grants the option to cash in and burn for a 1/1 custom character skin designed by the user. \n    A 1/10 Epic Founder's Pass grants the option to cash in and burn for a 1/10 weapon skin provided by us through a special 1/10 Epic Mystery Box. \n    A 1/50 Rare Founder's Pass grants the option to burn for a unique 1/50 Rare Mystery Box.\n    The remaining 1,939 beta passes are Common Founder's Passes which grants the option to cash in for a 1/1939 Common Mystery Box.",
      icon_url: "https://metaops-assets.s3.amazonaws.com/LEGENDARY.jpg",
      collection_image_url: "",
      project_id: 1059,
      project_owner_address: "0xe2e13184b8a623a9455d82592114ceddc668571d",
      metadata_api_url:
        "https://metaops.mypinata.cloud/ipfs/Qme81UmFeUVpLRt4uBqnex2xUqNF2oF3jJdiKDinTGZ62w",
      created_at: "2022-02-24T21:08:27.102984Z",
      updated_at: "2022-02-24T21:08:27.102984Z"
    },
    {
      address: "0x112c87e67834460a43daeca04f27359f561d4c6b",
      name: "Surfsnappers Metagateway",
      description:
        "By holding one of these NFT Collectibles you become a founding member of surfsnappers Club. Join our Discord for more information (https://discord.gg/tVV6HyHBAh)",
      icon_url:
        "https://ipfs.io/ipfs/QmPdvP2brEFotwcVYSuycNMLH5YN7BRcLhTVoUbLzkgoj8/mercury.png",
      collection_image_url:
        "https://ipfs.io/ipfs/QmPdvP2brEFotwcVYSuycNMLH5YN7BRcLhTVoUbLzkgoj8/mercury.png",
      project_id: 991,
      project_owner_address: "0xe99ecb655ef54a9d9737327ae5ce850466cd19c3",
      metadata_api_url: "https://api.surfsnappers.io/metadata",
      created_at: "2022-02-24T15:46:01.61052Z",
      updated_at: "2022-02-24T15:58:02.762208Z"
    },
    {
      address: "0xb7e0f4380e67fd0a3a35cc8142b50bf8229ee807",
      name: "IMX Kongz Bananas",
      description: "",
      icon_url: "https://imxkongz.xyz/logo/banana-logo.png",
      collection_image_url: "https://imxkongz.xyz/logo/banana-logo.png",
      project_id: 958,
      project_owner_address: "0xa31918410f6e6bb6b1b667e443249e1d06485052",
      metadata_api_url: "https://api.imxkongz.xyz/banana/item",
      created_at: "2022-02-18T22:09:46.536785Z",
      updated_at: "2022-02-18T22:09:46.536785Z"
    },
    {
      address: "0xd3fc45dbb5ebb6aab7245823720a972d98e7f546",
      name: "Sly Wolf Racing Club",
      description: "",
      icon_url: "https://slywolfracingclub.com/assets/lower_res/15.png",
      collection_image_url:
        "https://slywolfracingclub.com/assets/lower_res/15.png",
      project_id: 925,
      project_owner_address: "0x6fd5c9ed088fc36d153d0d87686b7216d4e47059",
      metadata_api_url:
        "https://ipfs.io/ipfs/bafybeigzqn3roljicozdtvvmwh7nqndm3dbygnxbo5uwhq6go2tomfsurm/swrc-meta",
      created_at: "2022-02-15T21:06:18.918478Z",
      updated_at: "2022-03-08T19:41:53.657444Z"
    },
    {
      address: "0x20016fa709765558ed8229d8572a4275d3a1899f",
      name:
        "Cyber Galz - Galz\ud83e\uddbe\ud83c\udd7e\ufe0f\ud83d\udc93\u26a1\ufe0f",
      description:
        "Cyber Galz is a gynoid NFT content & P2E game platform for cyberpunk and sci-fi enthusiasts. Galz masters a.k.a. Galz NFT holders can customise their NFTs by changing the combination of changeable attributes, Partz nfts. Galz VM_ETH and VM_IMX to redeem Galz. Visit cybergalznft.com to connect your wallet, cybergalznft.com/finder to check Galz attributes and cybergalznft.com/factory to customize your Galz. Join our discord.gg/cybergalznft and twitter.com/CybergalzNFT for latest updates.",
      icon_url:
        "http://galz.cybergalznft.com/collection_thumbnail/opensea(IMX)_logo.png",
      collection_image_url:
        "http://galz.cybergalznft.com/collection_thumbnail/IMX_CG_pfp.png",
      project_id: 1882,
      project_owner_address: "0x5f63353dbd936a154a5b2c46e9dfd98a2f9127d7",
      metadata_api_url: "http://cybergalzpte.com/galz/imx",
      created_at: "2022-02-15T14:07:21.836504Z",
      updated_at: "2022-06-03T07:12:20.47272Z"
    },
    {
      address: "0x8cb332602d2f614b570c7631202e5bf4bb93f3f6",
      name: "Hro",
      description: "",
      icon_url: "https://cdn.hro.gg/assets/images/imximage.png",
      collection_image_url: "https://cdn.hro.gg/assets/images/imximage.png",
      project_id: 13,
      project_owner_address: "0x007084b21ccf6d360fa002c0ab4f4d79b7d7ed61",
      metadata_api_url:
        "https://api.hro.gg/public/v1/ethereum/metadata/0x8cb332602d2f614b570c7631202e5bf4bb93f3f6",
      created_at: "2022-02-15T07:23:17.539551Z",
      updated_at: "2022-03-10T04:51:41.972743Z"
    },
    {
      address: "0xf54831e9dea774ac055a24918375056fd083d307",
      name: "Feisty Foxes",
      description:
        "A limited and historical NFT Impact Project.  6 battles, 6 sales and 6969 foxes to reforest the world. 1 NFT=20 trees to be planted in burned forests.",
      icon_url:
        "https://apiv2.immutable.mantial.io/assets/img/0xf54831e9dea774ac055a24918375056fd083d307/icon",
      collection_image_url:
        "https://apiv2.immutable.mantial.io/assets/img/0xf54831e9dea774ac055a24918375056fd083d307/icon",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0xf54831e9dea774ac055a24918375056fd083d307",
      created_at: "2022-02-14T18:30:07.482149Z",
      updated_at: "2022-02-14T19:11:19.255108Z"
    },
    {
      address: "0x2e03f59290e4e0809b4f159187d6f2fb4da2e10f",
      name: "default",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 859,
      project_owner_address: "0x06f7e845099b5fd7bcddb81029c8e04dcaaaed47",
      metadata_api_url: "https://www.eventssmarter.com/api/nft",
      created_at: "2022-02-14T16:49:08.223525Z",
      updated_at: "2022-02-14T16:49:08.223525Z"
    },
    {
      address: "0xb77b1d03da02598c117910f6f014ff05ccd6a09a",
      name: "Vy Worlds",
      description:
        "No one knows what mysterious power created the Vy. All we know is they call it The Maker. Vy rained down from the sky like shooting stars with an urge to play, build, and connect in an infinite number of digital Game Worlds \u2014 built by you. \n    Jump into playing and building games with your Vy instantly, no coding necessary. Collect new Vy as The Maker creates future generations. Learn all about the project and meet the team at VyWorlds.com. \n    We play together. We build together. We earn together.",
      icon_url: "https://skins.vyworlds.com/static/icon.png",
      collection_image_url:
        "https://skins.vyworlds.com/static/collection_image.png",
      project_id: 827,
      project_owner_address: "0x58b169c8a942df45f65ecb6b2803030f9e3d9aec",
      metadata_api_url: "https://metadata.vyworlds.com/getSkinMeta",
      created_at: "2022-02-13T03:21:22.368416Z",
      updated_at: "2022-02-13T03:21:22.368416Z"
    },
    {
      address: "0xeab6c4c4c41632dfbb51b3efb79bb48154f18f50",
      name: "Goons of Balatroon Cards",
      description: "The Goon Cards of the Goons of Balatroon Trading Card Game",
      icon_url: "https://gobstaticfiles.s3.amazonaws.com/Icon_120x120.png",
      collection_image_url:
        "https://d3v39qzpd9ch3p.cloudfront.net/CollectionLogo.png",
      project_id: 826,
      project_owner_address: "0xb322f8590e78be096e6349bfe6448c302d4ddcd1",
      metadata_api_url:
        "https://store-api.goonsofbalatroon.com/api/v1/goons-cards-meta",
      created_at: "2022-02-12T23:20:06.591022Z",
      updated_at: "2022-03-05T10:27:27.364742Z"
    },
    {
      address: "0x87eeaa9f25cfbdbc8be0362e8993d9e0eac2bc65",
      name: "BattleStar NFT",
      description:
        "P2E retro space game. Battle other captains, raid planets, craft ships and rule the galaxy!",
      icon_url: "",
      collection_image_url: "",
      project_id: 794,
      project_owner_address: "0xb53139a490aa9e6ae009f143805d5e5bd7791bdd",
      metadata_api_url: "https://metadata.battlestarnft.com",
      created_at: "2022-02-12T14:08:30.01777Z",
      updated_at: "2022-02-16T01:17:33.552974Z"
    },
    {
      address: "0xb750fc4cc3f825c01998d3e1a4daccf1af56d203",
      name: "Deprecated Collection",
      description: "Deprecated",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xb750fc4cc3f825c01998d3e1a4daccf1af56d203/deprecated.jpeg",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xb750fc4cc3f825c01998d3e1a4daccf1af56d203/deprecated.jpeg",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url: "http://some.api.url",
      created_at: "2022-02-11T21:10:03.336122Z",
      updated_at: "2022-02-14T19:16:37.616742Z"
    },
    {
      address: "0x591e54a7c11c3a4395b10d318aaffd2e059d1e1e",
      name: "CryptoMap",
      description:
        "Explore the map of a new world of possibilities. 10 653 696 NFTs. 1 065 369 600 pixels.",
      icon_url:
        "https://apiv2.immutable.mantial.io/assets/img/0x591e54a7c11c3a4395b10d318aaffd2e059d1e1e/icon",
      collection_image_url:
        "https://apiv2.immutable.mantial.io/assets/img/0x591e54a7c11c3a4395b10d318aaffd2e059d1e1e/icon",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0x591e54a7c11c3a4395b10d318aaffd2e059d1e1e",
      created_at: "2022-02-10T21:38:25.750964Z",
      updated_at: "2022-02-14T19:12:40.226706Z"
    },
    {
      address: "0x6c81037ba3418f31ab7e69d43daf33d737076392",
      name: "ShibArmy NFT",
      description:
        "ShibArmy NFT is a randomly generated NFT collection with a passive income utility of 8216 NFTs on Immutable, a Layer 2 solution on the Ethereum Blockchain",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/Qma4jmEjZ7nmwCyuRAq7APLvAZw78fe5Tm4PChGFtPC4BG",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmZPNy8cMMrBmKdrcBmKjCm9kb6KMtSAH5dRuMLsbhrvzp",
      project_id: 696,
      project_owner_address: "0xef7a6ea059c56a1a0e01428d28397a430ae5e5a7",
      metadata_api_url:
        "https://infura-ipfs.io/ipfs/QmPFYAwKdMgWkH9PoDyJDJqRCaF8SBxVigatHGfJicxA8v",
      created_at: "2022-02-07T23:00:06.543152Z",
      updated_at: "2022-02-11T09:10:53.722931Z"
    },
    {
      address: "0x6ce5ceccd720e7633b0e544b7da8657774e47102",
      name: "WarEden | Genesis",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmWBFpSbm51AhuPSHtbDzCAUsYSqZM1cUKS28xjXcyfQAm",
      collection_image_url:
        "https://ipfs.io/ipfs/QmULaeWmJC5o5YUFGfAhmkPzd9VUYr7Y9RcCHN4mTQNVoP",
      project_id: 695,
      project_owner_address: "0x04d3958a75c410fdc7a7c3ea237d7e0d538fd997",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmfAuXzTb4Cmb3yYffgF9ws6T7Ysi9GKrfWDeydmWZZxpE",
      created_at: "2022-02-07T17:50:02.990655Z",
      updated_at: "2022-02-07T17:50:02.990655Z"
    },
    {
      address: "0xb8902cc95316dc4767929f636d42c4fc9c6d51a1",
      name: "Blockchain Birds",
      description:
        "Blockchain Birds is a collection of 10,000 randomly generated collectibles living on the ImmutableX.",
      icon_url:
        "https://ipfs.io/ipfs/QmNVJz7YEYyzo8r4ZxdjpP9TPfeiYvxaPfxmt4t8mQaSWF",
      collection_image_url:
        "https://ipfs.io/ipfs/QmYULKextbV2knbMibizm4huiZY4LfYoZ4HN5Kcsi1BTCC",
      project_id: 661,
      project_owner_address: "0xf0ca4ffbc28393e5e1805e5bca465b35714d5ec3",
      metadata_api_url:
        "https://ipfs.portal.blockchain-birds.com/ipfs/QmajT6VFSWz2n6GSPM6XzjoKng43uHimGTQKnJokdedPZj",
      created_at: "2022-02-07T15:05:44.379966Z",
      updated_at: "2022-08-31T14:10:48.167535Z"
    },
    {
      address: "0x5f53552de6d3fa5306e90c68efeb9bded633e00a",
      name: "BadBeat",
      description: "",
      icon_url:
        "https://s3.amazonaws.com/assets.badbeatnft.com/images/Bad-Beat-White-Logo.png",
      collection_image_url:
        "https://s3.amazonaws.com/assets.badbeatnft.com/images/Bad-Beat-White-Logo.png",
      project_id: 694,
      project_owner_address: "0x6787cf715aabc09dfd7f417995db123f9966c048",
      metadata_api_url: "https://api.badbeatnft.com/api/v1.0/tpa/token-uri",
      created_at: "2022-02-07T12:57:45.193416Z",
      updated_at: "2022-02-21T00:46:27.96168Z"
    },
    {
      address: "0xa5ae5b646f72d0ed0bb525751aad1f9117531e70",
      name: "001GEN Rare Cats",
      description: "",
      icon_url: "",
      collection_image_url: "https://rarecats.art/logo.jpg",
      project_id: 565,
      project_owner_address: "0x2c7d77893a79ef7d887406dd7b620a2c16f0f264",
      metadata_api_url: "https://rarecats.art/tokens.php?id=",
      created_at: "2022-02-03T14:45:29.897318Z",
      updated_at: "2022-02-03T14:45:29.897318Z"
    },
    {
      address: "0xb029eeb574428deb9c9f5d248e23c0862d1df2cc",
      name: "A Pleasant Cat",
      description:
        "A collection of 10,000 Unique NFT Pleasant cats. Some are crazy, some are weird, some are gross but all are down right pleasant!",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmdbEMsiUkzGKYU26onRVB4tdrmSwhXTassvpbq1NVvHHY",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmdbEMsiUkzGKYU26onRVB4tdrmSwhXTassvpbq1NVvHHY",
      project_id: 563,
      project_owner_address: "0xd0e845b448f64d1f16b6d09cec3020e81a975e88",
      metadata_api_url:
        "https://nftstorage.link/ipfs/bafybeifs6ziyr6ldeyznddohlvab4atibyx6fwdyxxe55txgaxtjcgku2q",
      created_at: "2022-02-03T00:44:09.595157Z",
      updated_at: "2022-06-04T02:48:12.748491Z"
    },
    {
      address: "0x682acdda55cd74aa639e65c8835af070ed89b6a0",
      name: "Legends Of The Metaverse Shards",
      description: "",
      icon_url: "https://api.legendsofthemetaverse.com/collections/icon.png",
      collection_image_url:
        "https://api.legendsofthemetaverse.com/collections/shards.jpeg",
      project_id: 562,
      project_owner_address: "0xb0d2fa84fcf2bbefaa275d88c9687b66644100cb",
      metadata_api_url: "https://api.legendsofthemetaverse.com/shards",
      created_at: "2022-02-02T19:46:18.550196Z",
      updated_at: "2022-02-02T21:31:43.408974Z"
    },
    {
      address: "0x327ab8a108fa04018756efda90967f752cdfa6fe",
      name: "Sad Clown Collective",
      description:
        "Clown popularity has dwindled for the last century, as more and more people have come to see them as creepy or weird. This has caused a wave of sad clowns, who are unwanted by those they wish to entertain.\n            Desperate, they have decided to band together to become the Sad Clown Collective; this Circus is coming to the blockchain and they are gathering up NFT's... and in numbers. Will the Collective's collection put a smile on your face?",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x327ab8a108fa04018756efda90967f752cdfa6fe/icon.png",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x327ab8a108fa04018756efda90967f752cdfa6fe/icon.png",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0x327ab8a108fa04018756efda90967f752cdfa6fe",
      created_at: "2022-02-02T04:54:15.822066Z",
      updated_at: "2022-02-02T04:54:15.822066Z"
    },
    {
      address: "0x6353df41f97d831829c04677ddf2663e990522c0",
      name: "Pro Bowl 2022",
      description: "A souvenir NFT for NFL PRO BOWL 2022",
      icon_url: "https://r.tixngo.io/nfl/nfl_logo.png",
      collection_image_url: "https://r.tixngo.io/nfl/banner.jpg",
      project_id: 496,
      project_owner_address: "0x21f75c80d1b18ba5336c50bc48bd78cfa0d3e20a",
      metadata_api_url: "https://r.tixngo.io/tixngo-nft/tixngo-nfl/metadata",
      created_at: "2022-02-01T08:27:14.704557Z",
      updated_at: "2022-02-01T08:27:14.704557Z"
    },
    {
      address: "0xf54198948162508672ff0078bca76509ec9d9139",
      name: "ChronoForge Pets",
      description:
        "ChronoForge pets are in-game companions to adventurers in the ChronoForge action RPG, providing stats boosts and other passive buffs. Reclaim a time-fractured world at chronoforge.gg",
      icon_url:
        "https://d3uzvcdvguxi7x.cloudfront.net/images/chronoforge/android-chrome-192x192.png",
      collection_image_url:
        "https://d3uzvcdvguxi7x.cloudfront.net/images/chronoforge/pets_imx_square.png",
      project_id: 465,
      project_owner_address: "0x17a45f80efd20594afe2c59d7e1ae7ab0c6954cc",
      metadata_api_url: "https://api.pxquest.com/meta/imx/pets",
      created_at: "2022-02-01T04:43:04.365407Z",
      updated_at: "2022-11-08T01:09:44.992075Z"
    },
    {
      address: "0x21600256764eba88de3640e262d8b283144193ee",
      name: "The High Society",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0x21600256764eba88de3640e262d8b283144193ee",
      created_at: "2022-01-27T22:08:36.957845Z",
      updated_at: "2022-01-27T22:08:36.957845Z"
    },
    {
      address: "0xe0c46fb883274eaf7cd9037b557a0715e44341bb",
      name: "3D HIGHROLLERS",
      description: "",
      icon_url:
        "https://highrollersnft.com/assets/images/min/high-rollers-logo-min.png",
      collection_image_url:
        "https://highrollersnft.com/assets/images/min/high-rollers-logo-min.png",
      project_id: 397,
      project_owner_address: "0x279c0eea15c5547fb803a196d48e14eb1cbfe44b",
      metadata_api_url: "https://highrollersnft.com/highapi3d/pages/getnft",
      created_at: "2022-01-26T23:19:51.250062Z",
      updated_at: "2022-01-27T04:02:21.715069Z"
    },
    {
      address: "0x862504e5d1a2e967a2fffd163a3453da1fa172de",
      name: "IMX Pups",
      description:
        "The IMX Pups is a collection of 10,000 unique Pups with varying rarity and style. Each IMX Pup is a companion for the IMX Punks to explore the Metaverse together. It is an algorithmically generated digital collection of diverse Pup NFTs chilling on the Immutable X, a Layer 2 for NFTs on Ethereum. Each Pup is carefully designed, thoughtfully created, and super cute! #PupItUp",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmbrDrjWhNRzaN7wU93qiYg4i1QvPqWCeqVNC6D1xTNSG3/gif1.gif",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmbrDrjWhNRzaN7wU93qiYg4i1QvPqWCeqVNC6D1xTNSG3/gif1.gif",
      project_id: 364,
      project_owner_address: "0xd54b3f9d83fa8340f8291859e0b2de2a04522b67",
      metadata_api_url:
        "http://imxpupsapi-env-1.eba-wuebexsa.us-east-2.elasticbeanstalk.com",
      created_at: "2022-01-25T15:49:00.227187Z",
      updated_at: "2022-03-31T03:34:29.095056Z"
    },
    {
      address: "0x727ddea4df2500b2fd4c5496e683c3047374ccaf",
      name: "Billionaire Bigfoot Club",
      description:
        "The Billionaire Bigfoot Club is a genesis collection of 3,333 adorable wealthy bigfoots living in the Ethereum blockchain. We are launching on Immutable X (ETH with no gas fees). We have ambitious plans including but not limited to giving back 100% of total offered IMX royalties back to our community, creating a private alpha group (The Passport Club), and donating to rainforest conservation organizations. We also plan on launching a P2E game and purchasing metaverse land for our community to hang out in, at 100% of mints. Our goal is to create a community of NFT and crypto lovers who benefit from holding the NFT, feel like they have a voice in the space, and get to be a part of future projects. This is a genesis collection and all who mint will receive a baby bigfoot on IMX as part of a thank you down the road.",
      icon_url:
        "https://orcs.mypinata.cloud/ipfs/QmUVD6wF5G6uS6e64JdJfqN5BGCZKWEbw8EPnRcgHiwHiR",
      collection_image_url:
        "https://orcs.mypinata.cloud/ipfs/QmXnm6anmNwumLz2fNxqp88iQwgdVW9NYUmvZmEDVnf1JV",
      project_id: 331,
      project_owner_address: "0xd53244a822dfe75554377cb0e13fa0ab95fa5699",
      metadata_api_url:
        "https://orcs.mypinata.cloud/ipfs/QmSrRwboNqQ4wGuXRZ87Zvvk1bUPD43o9xUHUS2Zytisqb",
      created_at: "2022-01-24T07:13:15.136169Z",
      updated_at: "2022-02-03T05:53:24.057998Z"
    },
    {
      address: "0x3f61882acf17110536f9afc65e60216927871f2b",
      name: "Galz VM_IMX\u26a1\ufe0f",
      description:
        "Use this Vending Machine to redeem a Galz. Cyber Galz is a gynoid NFT content & P2E game platform for cyberpunk and sci-fi enthusiasts. 9,999 Galz NFTs feature customisation via a crafting solution. Cyber Galz masters a.k.a. Galz NFT holders can customise their NFTs by changing a combination of changeable attributes.",
      icon_url:
        "http://galz.cybergalznft.com/collection_thumbnail/opensea(IMX)_logo.png",
      collection_image_url:
        "http://galz.cybergalznft.com/collection_thumbnail/IMX_VM.png",
      project_id: 298,
      project_owner_address: "0x63e3c398609184f948a671a02cb87740d0aff856",
      metadata_api_url: "http://galz.cybergalznft.com/gvmimx/imx",
      created_at: "2022-01-22T22:00:06.016871Z",
      updated_at: "2022-01-22T22:00:06.016871Z"
    },
    {
      address: "0xc6a1d24828b05742baf8003319e433dcafcd368b",
      name: "0ctopix",
      description:
        "The Octopix Collection will be composed of 4321 uniquely randomly generated NFT\u2019s which will grant you access to the Metaverse",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xc6a1d24828b05742baf8003319e433dcafcd368b/icon.gif",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xc6a1d24828b05742baf8003319e433dcafcd368b/icon.gif",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0xc6a1d24828b05742baf8003319e433dcafcd368b",
      created_at: "2022-01-21T17:55:56.324164Z",
      updated_at: "2022-01-21T17:55:56.324164Z"
    },
    {
      address: "0x05802ce9f5022948ea254e36db4f0918ca107a5a",
      name: "Erica Gift 1/1",
      description: "Erica Gift 1/1",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmNXXg1iJgaWHjFJ4SthJdsTg7rW1b4beUHpn9a2fDYz2c",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmNXXg1iJgaWHjFJ4SthJdsTg7rW1b4beUHpn9a2fDYz2c",
      project_id: 232,
      project_owner_address: "0x55a1d026da2438a758b0c0f45f8144f6a18e31a7",
      metadata_api_url: "https://idkravitz.me/erica",
      created_at: "2022-01-20T05:24:42.902488Z",
      updated_at: "2022-01-20T05:24:42.902488Z"
    },
    {
      address: "0xa8b02283bc81dabf8bf3fcebef7b6af167894231",
      name: "OMG Babies",
      description: "",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xa8b02283bc81dabf8bf3fcebef7b6af167894231/icon.png",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0xa8b02283bc81dabf8bf3fcebef7b6af167894231/icon.png",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0xa8b02283bc81dabf8bf3fcebef7b6af167894231",
      created_at: "2022-01-19T16:28:04.248168Z",
      updated_at: "2022-01-20T12:10:49.903628Z"
    },
    {
      address: "0x7a888581afe3c03392a1fbeac5b8270dc5c4a41b",
      name: "",
      description: "",
      icon_url: "http://some.url.com",
      collection_image_url: "http://some.url.com",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url: "http://some.url.com",
      created_at: "2022-01-19T15:17:51.363763Z",
      updated_at: "2022-01-19T16:29:47.491824Z"
    },
    {
      address: "0x8a17c9a998d78f5fb38d92b88c63f59ebee73d8b",
      name: "Big Brain Ape Club",
      description: "",
      icon_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x8a17c9a998d78f5fb38d92b88c63f59ebee73d8b/icon.gif",
      collection_image_url:
        "https://mantial-collections-production.s3.amazonaws.com/0x8a17c9a998d78f5fb38d92b88c63f59ebee73d8b/icon.gif",
      project_id: 166,
      project_owner_address: "0x9d2877a1ec24aee64f3a945ed7c011bb98afdb68",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/imx/0x8a17c9a998d78f5fb38d92b88c63f59ebee73d8b",
      created_at: "2022-01-18T19:50:07.647046Z",
      updated_at: "2022-01-18T19:50:07.647046Z"
    },
    {
      address: "0xa3c3882d915f46fe2a6ef79d100a9b6901634379",
      name: "Launch Chads",
      description:
        "The first 1000 brave Launch Chads are headed to the moon, and beyond.",
      icon_url:
        "https://launchchads.com/immutable/Launchchads-immutablex-icon.jpg",
      collection_image_url:
        "https://launchchads.com/immutable/Launchchads-immutablex-cover.jpg",
      project_id: 103,
      project_owner_address: "0x1657b62d7d5558ad94e22a7201bb3698d792958c",
      metadata_api_url:
        "https://ipfs.launchchads.com/ipfs/QmW6NepJ5xCgg4Gir767aSCiGwUEFtHA5rUw1ZWwAfu82c",
      created_at: "2022-01-15T14:47:49.993958Z",
      updated_at: "2022-01-18T21:40:54.32726Z"
    },
    {
      address: "0x04b98b2b550f2762c9fcd66d74d5c495372e5fe9",
      name: "Immutable KongZ | Legends",
      description: "",
      icon_url:
        "https://api.immutablekongz.io/collection/immutableKongzLegends/icon.gif",
      collection_image_url:
        "https://api.immutablekongz.io/collection/immutableKongzLegends/image.gif",
      project_id: 100,
      project_owner_address: "0x735f7c8291e6bb526f053d51a2b1021b6f4c4771",
      metadata_api_url: "https://api.immutablekongz.io/metadata/kongz/legends",
      created_at: "2022-01-15T08:54:10.789149Z",
      updated_at: "2022-01-15T08:54:10.789149Z"
    },
    {
      address: "0x3dbb36b945a9f6defedd8f9744648d11438eaf3a",
      name: "MoonZilla NFT",
      description:
        "MoonZillas is a collection of 10,000 randomly generated NFTs that exist on the Ethereum Blockchain. Holders can participate in exclusive events, community giveaways, decide on the future of MOONZ and more. ",
      icon_url: "https://moonzillas.com/favicon.ico",
      collection_image_url: "https://moonzillas.com/assets/img/moonzilla.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://moonzillas.com/collection/json",
      created_at: "2022-01-13T22:09:27.345312Z",
      updated_at: "2022-01-13T22:09:27.345312Z"
    },
    {
      address: "0x6c82e53cbbd8a6afaf9663d58547cfc1a43be7aa",
      name: "Galaxiators",
      description:
        "Galaxiators is an On-blockchain, play-to-earn gladiatorial simulator game built on 11 distinct NFT collections of the most vicious extra-galactic warrior races in the metaverse!\n\n\u200b\n\nEach collection features a new race designed by an A.I program, and drawn by hand. Each and every Galaxiator is an inimitable, ruthless combatant living forever as an ERC-721 token on the Immutable-X L2 Ethereum blockchain.",
      icon_url: "https://i.ibb.co/jGNFL5V/ICON.png",
      collection_image_url: "https://i.ibb.co/nwq9Z2f/Banner.png",
      project_id: 10072,
      project_owner_address: "0x12b14e7413502391ca8d4bb418d988b49cbacf02",
      metadata_api_url: "https://tokens.galaxiators.com/tokenId",
      created_at: "2022-01-13T22:06:03.079164Z",
      updated_at: "2022-11-21T23:39:18.27674Z"
    },
    {
      address: "0xc097c3e9727d3c3b619c00a8b191f75741ea8d8a",
      name: "MetaCake CollabitClub",
      description:
        "Cryptocurrency was invented in 2008. The word \u201cbitcoin\u201d was defined in a whitepaper published on October 31, 2008. Crypto world is a \u201cmeta\u201d environment where all people are \u201cmeta-ly\u201d investing to their future beyond the norms. Achieving \u201cmeta\u201d success, people celebrate every bit of crypto with joy and happiness. Cake is often served as a celebratory dish on ceremonial occasions. As a CollabitClub (CC) family, we decentralized every bit of crypto-valuable objects into one \u201cmeta\u201d piece - MetaCake CC NFT with 10000 unique MetaCakes in the collection. Celebrate every moment of life by sending MetaCakes to people who dear to you for their weddings, anniversaries, birthdays with one click. If you don\u2019t celebrate success, it won\u2019t celebrate you. We are MetaCake CC NFT, we celebrate!",
      icon_url:
        "https://drive.google.com/file/d/11pWsz6WJrHoDTLzxaFCTf6_HdpFEG6DR/view?usp=sharing",
      collection_image_url:
        "https://drive.google.com/file/d/11pWsz6WJrHoDTLzxaFCTf6_HdpFEG6DR/view?usp=sharing",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmNeQhpVVj6BeJvcCGGkGtRrQ1sSaD5Fqhsd1e6MuvUyb4/_metadata.json",
      created_at: "2022-01-13T22:04:35.620323Z",
      updated_at: "2022-01-13T22:04:35.620323Z"
    },
    {
      address: "0x49bf9f0958dbba9cca9a33535ab7a0ba9626d518",
      name: "Launch Chads",
      description:
        "The first 1000 brave Launch Chads are headed to the moon, and beyond.",
      icon_url:
        "https://launchchads.com/immutable/Launchchads-immutablex-icon.jpg",
      collection_image_url:
        "https://launchchads.com/immutable/Launchchads-immutablex-cover.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://ipfs.launchchads.com/ipfs/Qmb6pciuB3Y8R6Ds6YQQSfWgLoBRbwb9VUAUxWw8y7habk",
      created_at: "2022-01-13T22:02:58.535405Z",
      updated_at: "2022-01-13T22:02:58.535405Z"
    },
    {
      address: "0x54d5a31170aee4922553be5f8f84a2a58ad54457",
      name: "ShibArmy NFT",
      description:
        "ShibArmy NFT is a randomly generated NFT collection with a passive income utility of 8216 NFTs on Immutable, a Layer 2 solution on the Ethereum Blockchain.",
      icon_url:
        "https://nfts.mypinata.cloud/ipfs/Qma4jmEjZ7nmwCyuRAq7APLvAZw78fe5Tm4PChGFtPC4BG",
      collection_image_url:
        "https://nfts.mypinata.cloud/ipfs/QmZPNy8cMMrBmKdrcBmKjCm9kb6KMtSAH5dRuMLsbhrvzp",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://bucket-shibarmy.s3.us-east-1.amazonaws.com",
      created_at: "2022-01-11T13:11:36.553238Z",
      updated_at: "2022-01-24T23:35:07.754357Z"
    },
    {
      address: "0x9e89674d2b934ffaa33418a3986a8d5ac8cdf654",
      name: "Unfamiliar Territory Wells",
      description:
        "Unfamiliar Territory Wells NFT Collection. Each Well NFT sold unlocks an in-game Well that is central to gameplay and funds the building of a real-world Well in Eastern Africa through our partnership with Hydrating Humanity.",
      icon_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmXtJXdrYKW88kLmsGi6J4JZUhEpgiY6zJQft71xhKXmJx",
      collection_image_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmU9E7QNCsTHPBSyNWXh8JJPQ1UrufhccvhP7GhXVwqpcw",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.unfamiliar.online/asset/wells",
      created_at: "2022-01-06T23:05:42.423082Z",
      updated_at: "2022-01-06T23:05:42.423082Z"
    },
    {
      address: "0xac98d8d1bb27a94e79fbf49198210240688bb1ed",
      name: "Book Games",
      description:
        "The Book Games are a first-of-its-kind NFT created by Gary Vaynerchuk, linking to his best-selling book, Twelve and a Half.  Before embarking on this journey, players must remember...BOOK GAMES IS PLAYED FOREVER!  Each token grants the holder special opportunities within the VeeFriends universe.  Visit veefriends.com/book-games to connect your wallet and play.",
      icon_url: "https://veefriends.com/images/imx/icon.png",
      collection_image_url: "https://veefriends.com/images/imx/collection.png",
      project_id: 20,
      project_owner_address: "0xefbf105ca4bd45c3bdff25a7a4e2fe0a7ff2b8a8",
      metadata_api_url: "https://series1.VeeFriends.com/api/metadata/book",
      created_at: "2022-01-06T03:39:41.226577Z",
      updated_at: "2022-10-26T01:49:12.386977Z"
    },
    {
      address: "0x5e50b51d486c2fb07657d399c27b5409f96d700a",
      name: "K9's",
      description:
        "4,444 mechanized K9's Prowling the streets of the new world. Join us on discord.gg/k9 or https://k9artworks.com/",
      icon_url:
        "https://cdn.imxrarity.io/0x5e50b51d486c2fb07657d399c27b5409f96d700a.gif",
      collection_image_url:
        "https://cdn.imxrarity.io/0x5e50b51d486c2fb07657d399c27b5409f96d700a.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://apiv2.immutable.mantial.io/assets/os/0x5e50b51d486c2fb07657d399c27b5409f96d700a",
      created_at: "2022-01-05T23:28:59.998393Z",
      updated_at: "2022-01-09T08:35:24.07436Z"
    },
    {
      address: "0x379038284eeb9e12f0d9efb46f1578aaba53a9ab",
      name: "001GEN Turtles",
      description: "",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmUXN42Jxkba249mLWFiDbop98Ytc96HY8ZthE8HJLj2mn",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmVfxVkki1zwQogfh5jv7XwFyisYwicT38AMNZmv7wusEE",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmU6SmwQXo2tJDQ4WhY7yoyJD28mfHTKkPi9iMjyLNEkAs",
      created_at: "2021-12-30T07:58:09.076875Z",
      updated_at: "2021-12-30T22:23:04.498652Z"
    },
    {
      address: "0xe426b80fa8eb2eb9e5ee5ca9d33e9a22019b1636",
      name: "Centuries: The Five Families",
      description:
        "Through Centuries we aim to rediscover the most interesting periods throughout human history by bringing the most important characters, settings and stories back to life. Our holders will be able to own real historical figures and events. Claim your piece of history today!",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmTxFgUu4nejvJbw7hgdAXy7nCkkvgB88L6pMCK8t94yQ3/44.png",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmTxFgUu4nejvJbw7hgdAXy7nCkkvgB88L6pMCK8t94yQ3/44.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://bafybeidc6vz66qcotd5ovi2jytlfgqciiob6nuajj7k3escdytwyx7utaq.ipfs.dweb.link",
      created_at: "2021-12-26T09:56:04.171037Z",
      updated_at: "2021-12-26T09:56:04.171037Z"
    },
    {
      address: "0x177c23722581262d2f76a419c4a4e9963dcf70ca",
      name: "01GEN CryptoButlers",
      description:
        "CryptoButlers is a collection of anime-themed randomly generated 555 NFTs on Ethereum, a twin project of CryptoMaids NFT. The artwork is done by a Japanese artist working professionally in the anime illustration field.\n\nFor more details of CryptoButlers and its utilities, please visit our website. https://cryptomaids.tokyo ",
      icon_url:
        "https://cryptocollection.s3.ap-northeast-1.amazonaws.com/imx/icon.jpg",
      collection_image_url:
        "https://cryptocollection.s3.ap-northeast-1.amazonaws.com/imx/collection.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.cryptomaids.tokyo/metadata/butler",
      created_at: "2021-12-26T09:53:16.886139Z",
      updated_at: "2021-12-26T09:53:16.886139Z"
    },
    {
      address: "0x1082d24367f97ca8bd743797593c766d321ded97",
      name: "ImmutaBulls",
      description:
        "ImmutaBulls are basically your one-way ticket to the MOON!! Just by being a hodler of a very special/unique ImmutaBull you have a good chance to win a random giveaway for life changing amounts of money.",
      icon_url: "https://api.immutabulls.com/icon.png",
      collection_image_url: "https://api.immutabulls.com/collection.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.immutabulls.com/token",
      created_at: "2021-12-26T08:55:27.57915Z",
      updated_at: "2021-12-26T08:55:27.57915Z"
    },
    {
      address: "0x83f120283c30c796ebe9216ccaf6718c31213681",
      name: "Guild of Guardians Avatars",
      description: "",
      icon_url: "https://i.imgur.com/QyaF9YK.jpg",
      collection_image_url: "https://i.imgur.com/QyaF9YK.jpg",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://guildofguardians.mypinata.cloud/ipfs/QmeR7pkpdyYHgkUg9dahonh1NZKxcEDVqUmy3H5goNfqyE",
      created_at: "2021-12-23T23:54:23.187188Z",
      updated_at: "2023-02-12T23:21:45.152667Z"
    },
    {
      address: "0xd59ca186975d9e4ecb0e278b658aba35248eea5a",
      name: "Immutable Imps",
      description:
        "Immutable Imps is the first generative Imp project, consisting of 6666 hellish imps.",
      icon_url: "https://cdn.immutableimps.com/assets/icon.png",
      collection_image_url: "https://cdn.immutableimps.com/assets/banner.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://cdn.immutableimps.com/meta",
      created_at: "2021-12-23T07:38:57.095292Z",
      updated_at: "2021-12-23T07:38:57.095292Z"
    },
    {
      address: "0x7e9c8248ca540095f456c9306178bf4b1b17584d",
      name: "Battle Elves",
      description:
        "Description - While the inhabitants on the North Pole may have been spared the mutation side effects of the great storm they cannot escape the chaos that ensued afterwards. In order to protect this last remaining remnant of what used to be the fat jolly St. Nick employed an army of brave, and very mischievous, elves. These Battle Elves no longer manufacture toys but continue to use their ingenuity to devise very effective, and often humiliating, weapons",
      icon_url: "https://www.battlefactions.com/metadata/BattleElves/icon.png",
      collection_image_url:
        "https://www.battlefactions.com/metadata/BattleElves/cover.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://www.battlefactions.com/metadata/BattleElves/json",
      created_at: "2021-12-23T07:34:53.69039Z",
      updated_at: "2021-12-23T07:34:53.69039Z"
    },
    {
      address: "0xc67086049c5586e405a9d4f05c9cbe405e173c0e",
      name: "Guild of Guardians Avatars",
      description: "",
      icon_url: "",
      collection_image_url: "",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0xc67086049c5586e405a9d4f05c9cbe405e173c0e",
      created_at: "2021-12-22T23:56:26.763702Z",
      updated_at: "2022-01-24T05:41:47.469692Z"
    },
    {
      address: "0x735717ca894e98d887c1fd8823b8097f00dca725",
      name: "Right-Click Saverz",
      description:
        'Right-Click Saverz is an NFT collection of 7,777 unique villains randomly generated with 8 properties and over 180 hand-drawn features. Right-Click Saverz are the nightmare of many creators & collectors, and sneaky villains of the blockchain. Help us change the web culture from "just" saving to building and creating. Let\'s all lock these villains to the blockchain forever, visit https://rightclicksaverz.co',
      icon_url:
        "https://bafybeihk4rwwwg3fb7oimx3snkjk7u7hwlk5ji63zkhalhoykcp3m4pouu.ipfs.dweb.link/",
      collection_image_url:
        "https://bafybeifprz6xynz4amhd7srfrsxveorg2nvlxco5atxulzakyd6evv7hrq.ipfs.dweb.link/",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://rightclicksaverz.mypinata.cloud/ipfs/Qmf6Ea2NmiKo1WjP5d1tsyTqSKDUJ3iyHShwTMUNtv2DKs",
      created_at: "2021-12-17T09:26:24.911986Z",
      updated_at: "2021-12-17T09:26:24.911986Z"
    },
    {
      address: "0x8063fbab7e2b5a21a121857273a3ae1f1666504d",
      name: "Doodles",
      description: "",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmbawMCrggzYC4fWPTFhz6KeNH7PSq2NUVrreLfaBv3CNW",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmbawMCrggzYC4fWPTFhz6KeNH7PSq2NUVrreLfaBv3CNW",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxdoodles.com/item",
      created_at: "2021-12-17T09:24:27.251928Z",
      updated_at: "2021-12-17T09:24:27.251928Z"
    },
    {
      address: "0xf66136083496c756ac956f8e9a2f7e72ae7fe177",
      name: "Legends Of The Metaverse",
      description: "",
      icon_url: "https://api.legendsofthemetaverse.com/collections/icon.png",
      collection_image_url:
        "https://api.legendsofthemetaverse.com/collections/LOTM_Legends.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.legendsofthemetaverse.com/legends",
      created_at: "2021-12-16T01:02:58.410724Z",
      updated_at: "2021-12-16T01:02:58.410724Z"
    },
    {
      address: "0xe47fa735f0bdc8c601dbe9ec531485ce542bd854",
      name: "Legends Of The Metaverse Land",
      description: "",
      icon_url: "https://api.legendsofthemetaverse.com/collections/icon.png",
      collection_image_url:
        "https://api.legendsofthemetaverse.com/collections/LOTM_Land.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.legendsofthemetaverse.com/land",
      created_at: "2021-12-16T01:01:23.789654Z",
      updated_at: "2021-12-16T01:01:23.789654Z"
    },
    {
      address: "0xd5517e37a62e453a3a6144da8f63c3c563d4fc51",
      name: "MetaOps Battle Pass",
      description:
        "This is a collection of 2,000 MetaOps Beta Battle passes! These battle passes come with unique rarity -\n\nEvery battle pass holder gets early access to our first person shooter MetaOps as well as a whitelist spot on all future NFT drops as long as they hold the pass. Everyone has the option to cash in their beta pass for a certain mystery box/special incentive as listed below - \n\n\n1/1 Platinum edition battle pass which grants you the option to cash it in and BURN it for a 1/1 custom character skin designed by the user. \n\n1/10 Gold edition battle pass. Grants you the option to cash it in and burn it for a 1/10 weapon skin provided by us through a special 1/10 legendary mystery box.\n\n1/50 bronze battle pass giving you the option burn it for a special legendary 1/50 mystery box. \n\n1/1,939 are common battle passes giving you the option to cash it in for a 1/1939 legendary mystery box only available to beta pass holders!",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/Qmcpb1MpVFHA4Yvb79cyDC21WWH8UyFMFRjhBFBdgVhqjg",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmVrXSv43x9qizzRq83hUSsUgmno3Yms3bpast827jSBEk",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmTUgnoHbhCB1hhE3WFEDRJWz5Dkv8WkhnnGNtsBHottvj",
      created_at: "2021-12-16T00:59:27.805075Z",
      updated_at: "2021-12-23T05:14:04.418266Z"
    },
    {
      address: "0x910101011931df46fc86b2d4025c552e5a59ba50",
      name: "IMX Fruity Cats",
      description:
        'One day 3,333 small little kitties ate so many fruits that they transformed into them. You know what they say "You are what you eat". \nFruity Cats is an NFT project launched on IMX, a layer 2 ETH platform, which saves the community from paying the gas fees. You just pay for the mint itself!',
      icon_url: "https://landloot.org/icon_fc.jpg",
      collection_image_url: "https://landloot.org/icon_image_fc.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://landloot.org/api/v1/projects/imxfruitycats",
      created_at: "2021-12-16T00:56:12.419674Z",
      updated_at: "2021-12-16T00:56:12.419674Z"
    },
    {
      address: "0x0999c765ca3b400cbd8c29ba1f943517df85b543",
      name: "Neo New York",
      description: "",
      icon_url: "https://landloot.org/icon_ny.jpeg",
      collection_image_url: "https://landloot.org/icon_ny_image.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://landloot.org/api/v1/projects/neonewyork",
      created_at: "2021-12-16T00:52:44.506333Z",
      updated_at: "2021-12-16T00:52:44.506333Z"
    },
    {
      address: "0xb01cd34306732bc3c23563f94531b3e727956694",
      name: "Galaxiators",
      description:
        "Galaxiators is a blockchain, play-to-earn, gladiatorial management game of epic proportions!\n\nThe complete Galaxiators' collection will be assembled from a series of 11 distinct, low-volume drops, each one representing a vicious extra-galactical warrior species.",
      icon_url:
        "https://firebasestorage.googleapis.com/v0/b/images-storage-d9c2b.appspot.com/o/IMX%2FICON.png?alt=media&token",
      collection_image_url:
        "https://firebasestorage.googleapis.com/v0/b/images-storage-d9c2b.appspot.com/o/IMX%2Fbanner.png?alt=media&token",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://firebasestorage.googleapis.com/v0/b/images-storage-d9c2b.appspot.com/o/Pods%2FCylndr%2FClyndr_Pod.json?alt=media&token",
      created_at: "2021-12-16T00:51:43.890182Z",
      updated_at: "2021-12-16T00:51:43.890182Z"
    },
    {
      address: "0x7cafac1a8a0d316449c944b0d6cb71328646f3c0",
      name: "Goon Card Packs Genesis",
      description:
        "Goon Card Packs Genesis is the first card series in the upcoming play-to-earn Goons of Balatroon game. Each card pack contains 5 Goon Cards with varying rarities.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmcHaymRNNaT7HRJNoGJRvtzmb3t51JZz2vN8VRUyKqyXx",
      collection_image_url:
        "https://d3v39qzpd9ch3p.cloudfront.net/CollectionLogo.png",
      project_id: 826,
      project_owner_address: "0xb322f8590e78be096e6349bfe6448c302d4ddcd1",
      metadata_api_url:
        "https://store-api.goonsofbalatroon.com/api/v1/goons-packs-meta",
      created_at: "2021-12-16T00:45:52.549212Z",
      updated_at: "2022-12-01T21:15:49.843228Z"
    },
    {
      address: "0x52edbce9d8a45e0e9ce2eb0d9a31bbef104a6b7a",
      name: "Unfamiliar Territory Equipment",
      description:
        "Unfamiliar Territory Equipment NFT Collection. Each NFT unlocks an in-game item.",
      icon_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmXtJXdrYKW88kLmsGi6J4JZUhEpgiY6zJQft71xhKXmJx",
      collection_image_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmX44hU4efMMuKG2xfreCqawbRW2tiedbknREDG1nQmeky",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.unfamiliar.online/asset/equipment",
      created_at: "2021-12-16T00:28:11.708961Z",
      updated_at: "2021-12-16T00:28:11.708961Z"
    },
    {
      address: "0x238617a39bfdaa90baf79c4335a03c68f1db69a3",
      name: "BattleFactions Inventory",
      description:
        "The Weapons, Armor and Accessories for the BattleFactions Game!",
      icon_url: "https://battlefactions.com/bfweapons/ICON.png",
      collection_image_url: "https://battlefactions.com/bfweapons/cover.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://battlefactions.com/bfweapons/json",
      created_at: "2021-12-16T00:23:31.48203Z",
      updated_at: "2021-12-16T00:23:31.48203Z"
    },
    {
      address: "0xd17c47532860ed223910da50c64a8dc8f69ad18a",
      name: "PlanetQuest",
      description:
        "PlanetQuest Collectibles is a collectible series of NFTs within the PlanetQuest Universe, a multiplayer exploration and survival game that allows players to own entire planets, discover rare artifacts and even vote on a decentralized storyline, join us on this journey and claim your first limited edition collectible at https://planetquest.io",
      icon_url:
        "https://pqspaces.ams3.digitaloceanspaces.com/DZCpZCYBXgM8ZN3x.png",
      collection_image_url:
        "https://pqspaces.ams3.digitaloceanspaces.com/q7C7a9FwqrCY3W2E.jpg",
      project_id: 18,
      project_owner_address: "0x6ba6fa6db58394e3768db23b446d98dedbb8ad01",
      metadata_api_url:
        "https://planetquest-imx-backend-rk3u7.ondigitalocean.app/tokens",
      created_at: "2021-12-15T04:17:24.020064Z",
      updated_at: "2022-09-26T21:42:48.931115Z"
    },
    {
      address: "0x4f1536b8fc15ec9d9177b9f27198883b96bcb257",
      name: "Gaspard & Joseph - \u00c9diteur NFT du Patrimoine Fran\u00e7ais",
      description:
        "Gaspard & Joseph est un \u00e9diteur fran\u00e7ais de NFT, sp\u00e9cialis\u00e9 dans la digitalisation du patrimoine fran\u00e7ais en mati\u00e8re d\u2019art, de culture et de savoir-vivre.\n\nGaspard & Joseph is a French NFT editor, specializing in the digitalization of French heritage in terms of art, culture and savoir-vivre.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmTwHbif3JsW4er32zkyu5QgHeUV5m39sixNcL43C2KmYt",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmUx2PYyxRkhr4StteWbwACMaJUZFfScn7PLVvtnjLXg8A",
      project_id: 1222,
      project_owner_address: "0xc5dec19261a5b9585f2f8f91601ba6a7e699b45d",
      metadata_api_url:
        "https://nftstorage.link/ipfs/bafybeigbtwx6ruf3pxob4di6upef6xmjkboew5nx2rhiz4wjmuowaz7osa",
      created_at: "2021-12-14T04:56:01.008805Z",
      updated_at: "2022-10-20T10:29:14.837409Z"
    },
    {
      address: "0xc6a4bdddc7412263f58efbdcc09256f15405aad8",
      name: "Raptor Adventure Club",
      description:
        "Raptor Adventure Club is the first randomly generated PVP NFTs Collection of 20,000 on Immutable, a Layer 2 solution on the Ethereum blockchain",
      icon_url:
        "https://ipfs.io/ipfs/Qmed5uKK3J9iApav1P6bnakfnmEcdtCX3RyHZeMeesnaNu?filename=RAC%20logo.jpeg",
      collection_image_url:
        "https://ipfs.io/ipfs/Qmed5uKK3J9iApav1P6bnakfnmEcdtCX3RyHZeMeesnaNu?filename=RAC%20logo.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://nfts.mypinata.cloud/ipfs/QmY5mDTkyhMHQg3Vs5wU2p3dKMA7dkaHhH1KWn39Qde38Y",
      created_at: "2021-12-14T04:54:26.755758Z",
      updated_at: "2022-01-24T23:14:38.564368Z"
    },
    {
      address: "0x4bfc33623ad76c05ea14096740e61413cd6900c1",
      name: "Angry Elves",
      description: "",
      icon_url:
        "https://orcs.mypinata.cloud/ipfs/QmdWteAgkts8nQFrPX1ExQcnhs3As7ef2z3Jr2DC5P5mpT",
      collection_image_url:
        "https://orcs.mypinata.cloud/ipfs/QmdWteAgkts8nQFrPX1ExQcnhs3As7ef2z3Jr2DC5P5mpT",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://orcs.mypinata.cloud/ipfs/QmX3ej2JVTAWiJrr9z8yvSTXUornVxargvkNaRPTUk6eqt",
      created_at: "2021-12-14T04:52:08.495937Z",
      updated_at: "2022-01-24T00:42:22.495864Z"
    },
    {
      address: "0x8a9c06fe49ffba191609ca45505b869ca0270b71",
      name: "Apes with Attitude",
      description:
        "Apes with Attitude, a breed of Apes full of joy and positive vibes. But don't be fooled by their kindness, if you mess with them you'll feel their wrath. They were left to die in the wilderness but they got together and became stronger than ever. Join them in their fight for happiness, justice and freedom.",
      icon_url:
        "https://bucket-aff-ape-club.s3.us-east-2.amazonaws.com/collection.gif",
      collection_image_url:
        "https://bucket-aff-ape-club.s3.us-east-2.amazonaws.com/collection.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://bucket-apes-w-attitude.s3.us-east-1.amazonaws.com",
      created_at: "2021-12-13T03:45:29.743367Z",
      updated_at: "2022-02-18T02:25:44.938511Z"
    },
    {
      address: "0xb5785d1c860110d772e5c9bad45b2bbd21c6821b",
      name: "IMX main collection",
      description:
        "IMX main collection minted from https://imxflow.com marketplace",
      icon_url: "https://imxflow.com/img/logo_coll.png",
      collection_image_url: "https://imxflow.com/img/image_coll.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://imxflow.com/json/metadata.php?token=",
      created_at: "2021-12-13T03:43:55.003355Z",
      updated_at: "2021-12-13T03:43:55.003355Z"
    },
    {
      address: "0xcc36860720a7acbd954ca07d4a59f1f60ad8a531",
      name: "STM: Space Karts",
      description:
        "Save the Martians' very own Unidentified Flying Objects!\n\nhttps://savethemartians.com",
      icon_url:
        "https://storage.googleapis.com/stm-metadata--yellow-red-doberman/ufos/collection-images/logo.png",
      collection_image_url:
        "https://storage.googleapis.com/stm-metadata--yellow-red-doberman/ufos/collection-images/logo.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://storage.googleapis.com/stm-metadata--yellow-red-doberman/ufos/l2-metadata",
      created_at: "2021-12-13T03:41:49.890391Z",
      updated_at: "2021-12-13T03:41:49.890391Z"
    },
    {
      address: "0x1439dba9460b1b79f2fe0ad67ac0e740d164faa4",
      name: "BeeFriends",
      description:
        '"BeeFriends is a friendly community of 8888 explorers buzzing through the metaverse. By owning a BeeFriend NFT, you will have a chance to devour, enjoy and flourish at the same time. We created BeeFriends as a community focused on the protection of bees but not only, we are also very passionate about art, blockchain technology and gaming. The BeeFriends NFTs will be packed with value and utility : charity donations, hive sponsoring, honey delivery from the hive, NFT fusion (Deflationary), free access to a respected artist collection, NFT staking and Blockchain game with your own NFT',
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmazL1dGTLx8bQmxVauYaXtE2cPdav4PwnP2qVUaVHXUmQ",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmU7LmiVjCxR6Fn1gQbszJGmWSdD2uTQvfCKVMAaBJgSxD",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://zxlmhaup6f.execute-api.us-east-2.amazonaws.com/beefriends-nft/bees",
      created_at: "2021-12-13T03:41:14.492081Z",
      updated_at: "2021-12-13T03:41:14.492081Z"
    },
    {
      address: "0x80c38dbde00b6ed0b8fbfe3250aad9857fc1834d",
      name: "IMX Kongz-Warriors",
      description: "",
      icon_url: "https://api.imxkongz.xyz/images/logo.png",
      collection_image_url: "https://api.imxkongz.xyz/images/imageurl.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxkongz.xyz/warrior/item",
      created_at: "2021-12-13T03:40:04.098233Z",
      updated_at: "2021-12-16T04:23:49.326705Z"
    },
    {
      address: "0x8d430f4a3d28b8e26900d168c3231d5289e76907",
      name: "FoodFrogs",
      description:
        "A LIMITED HAND DRAWN NFT COLLECTION WHERE THE TOKEN ALLOWS YOU ACCESS TO THE CRYPTOCUISINE.IO MARKETPLACE WITH MEMBERSHIP AND REWARDS",
      icon_url: "https://mint.foodfrogs.com/logo.jpg",
      collection_image_url: "https://mint.foodfrogs.com/logo.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://mint.foodfrogs.com/api",
      created_at: "2021-12-13T03:38:26.571611Z",
      updated_at: "2021-12-13T03:38:26.571611Z"
    },
    {
      address: "0xe6c2ad2d8a9367732f95bb997cb239de671b5b7a",
      name: "LlamaPunkz",
      description:
        "Llama Punkz are 5100 uniquely generated NFTs set to launch on IMX. All NFT holders will be rewarded with the $llama token which will be used as an ingame currency. This token will provide users the ability to unlock levels, a minigame and custom features in our game. 10% of all profits will be donated to a llama conservation program, and 5% will be placed in our community DAO wallet.",
      icon_url: "https://llamapunkz.com/logo.jpg",
      collection_image_url: "https://llamapunkz.com/logo.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://llamapunkz.com/api",
      created_at: "2021-12-13T03:37:23.963853Z",
      updated_at: "2021-12-13T03:37:23.963853Z"
    },
    {
      address: "0x2880c6ecf2f770bd31ddb0d776cc81048899b600",
      name: "Mintable Shared Store",
      description:
        "A collection of NFTs made by the millions of creators on Mintable.com",
      icon_url: "https://mintable.app/logo.png",
      collection_image_url: "https://mintable.app/logo.png",
      project_id: 6,
      project_owner_address: "0x02a522d98ec2d2c3bbe91acc29ee7fd32ab880ab",
      metadata_api_url: "https://metadata.mintable.app/imx",
      created_at: "2021-12-10T08:54:39.782293Z",
      updated_at: "2022-01-20T23:23:23.695609Z"
    },
    {
      address: "0x273de487f7546c8e0b74751e96ce4d9b0f48e5c8",
      name: "Terra Obscura",
      description: "",
      icon_url: "https://i.imgur.com/y14fFAV.jpg",
      collection_image_url: "https://i.imgur.com/y14fFAV.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x273de487f7546c8e0b74751e96ce4d9b0f48e5c8",
      created_at: "2021-12-10T06:15:26.8329Z",
      updated_at: "2021-12-10T06:15:26.8329Z"
    },
    {
      address: "0x36b062b9a8e7f28f0ab12ac65bb4c90528e01fa6",
      name: "IMX BAYC",
      description:
        "Bored Ape Yacht Club NFT collection is coming to ImmutableX: a Layer 2 for NFTs on Ethereum. This means ETH with NO GAS!",
      icon_url:
        "https://pbs.twimg.com/profile_images/1452823375768788994/AGtrSIzN_400x400.jpg",
      collection_image_url:
        "https://pbs.twimg.com/profile_images/1452823375768788994/AGtrSIzN_400x400.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://nfts.mypinata.cloud/ipfs/QmREiK4J9kNkC21FubyKgcgnpm2wF5kcDgEU5yqo7HC4NK",
      created_at: "2021-12-10T00:49:11.333581Z",
      updated_at: "2022-01-14T22:21:07.078474Z"
    },
    {
      address: "0x42fd586fb80fb0ae1ec54149a51317860f7ffc0b",
      name: "Pigs.game Barns",
      description:
        "One thousand barns for our piggies in pigs.game - A Game Theory & Risk-Based Blockchain Economy on Immutable X - the Layer 2 for NFTs. $POINK Token. Staking, Breeding, Burning, Upgrading & more P2E.",
      icon_url:
        "https://pigtograph.mypinata.cloud/ipfs/QmcRZdjtXkrkgotYChxFnoMMQuGgKMKXnXBEJLHWFsDBnj",
      collection_image_url:
        "https://pigtograph.mypinata.cloud/ipfs/QmcRZdjtXkrkgotYChxFnoMMQuGgKMKXnXBEJLHWFsDBnj",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://barn-metadata-prod.pigs.game/metadata",
      created_at: "2021-12-10T00:48:06.153627Z",
      updated_at: "2021-12-23T05:09:25.459712Z"
    },
    {
      address: "0xcf2a76497d9a38ccd7fc299e3c5592f6f76b4c46",
      name: "DOGEVILLE PACK",
      description:
        "DogeVille is a play-to-earn pixel art gaming metaverse on Immutable X with 10,000 NFT characters known as the DogeVille Pack.",
      icon_url: "https://api.dogevillepack.io/collectionicon.png",
      collection_image_url: "https://api.dogevillepack.io/collectionimg.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.dogevillepack.io/tokenids",
      created_at: "2021-12-10T00:46:58.110428Z",
      updated_at: "2021-12-10T00:46:58.110428Z"
    },
    {
      address: "0xf05fb8e426ee740560cb5cbcc1499a8ded132c0f",
      name: "64 Fractionalized Doge NFT",
      description:
        "The most iconic meme in internet history Doge NFT, is now fractionalized and available for anyone to own. Practically everyone knows the picture of Kabosu, the Shiba Inu from Japan, with the somewhat goofy, somewhat knowing look on her face that was all over the internet in 2013, when Dogecoin launched as a joke cryptocurrency and adopted the image. Image of Doge turned Dogecoin mascot, was turned into an NFT. Fractionalizing this NFT means that now anyone can own a piece of one of the most recognized and loved images of our generation.",
      icon_url: "https://doges.art/doges.gif",
      collection_image_url: "https://doges.art/doges.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://doges.art/tokens.php?id=",
      created_at: "2021-12-10T00:46:08.543008Z",
      updated_at: "2021-12-10T00:46:08.543008Z"
    },
    {
      address: "0x8d194506a31951473609474b9a8f1b7a642c5207",
      name: "Love Birds Club",
      description:
        "A long long time ago, thousands of LoveBirds from the Winger Universe were forced apart by an unknown entity.\ud83d\udc26\ud83d\udc24 As time flew by, more and more lovebirds have flown to our universe in search of their soulbirds and many are now flying all around the #Metaverse to find each other.",
      icon_url:
        "https://lb-nft.s3.ap-southeast-1.amazonaws.com/lbc_collection.gif",
      collection_image_url:
        "https://lb-nft.s3.ap-southeast-1.amazonaws.com/lbc_collection.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://art.lovebirds-nft.com/metadata",
      created_at: "2021-12-10T00:44:50.417975Z",
      updated_at: "2021-12-10T00:44:50.417975Z"
    },
    {
      address: "0x99023e07fd846c00c724408cc8bfdeaa78b12905",
      name: "ArcticBearz",
      description:
        "Arctic Bearz \u2013 The NFT helping endangered animals and your crypto wallet. With this project we want to point the crypto spotlight at climate change + the species it is endangering starting with Polar Bears. We plan to donate portions of the revenue towards adopting and sponsoring vulnerable Polar Bears, with the first 100 Arctic Bearz holders receiving an adoption pack for a polar bear! We aim to create a whole ecosystem of male, female and baby cubs created via a breeding system, and to show appreciate and gratitude to our early supporters. Everyone on the Whitelist, and some lucky winners of giveaways, will receive a female polar bear!",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmQKPiJ7xGsa3mRRmxzq9SyfoMu3VtmMb5YnxJCojEfwLJ",
      collection_image_url:
        "https://p15.zdusercontent.com/attachment/9775828/CmZTX78AcbgJmz1ERUaofoOwy?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..VaTCu7mHsNWLAySfhazGeA.Sblq6u6jmnQseCNWNsSPkNQtHV3KZ9sTaHQNPMTgXr0XEQKF0ko97gvurMCgVLk1oxhbbREQ6m_M8t0_yOKYAPPPGeFemTvSwlGdlU65VRvAF0dkS_akbdaqVGP65uIV1wMKCywD_l5BP4URRYzvEZcqJHaSx7J18xkg-uaKzCK_J4JmnhDls_GMSxazkp93aeYoARiHDba3ptfm7LzWnkgHEckpibIFSwX0X9lCii6thaGJ9p_go1LBUqsZCF6Wwm_tkVejLuImDBHAKhiYP7230ukhK-psi_p0r2QLm-o.C9qyoCnsSswJ6N7zs8yHxA",
      project_id: 1553,
      project_owner_address: "0xabd9ea4f50bf7d5c8f1cb9417e3f0f08e16b842f",
      metadata_api_url:
        "https://arcticbearz.mypinata.cloud/ipfs/QmUjXC4j5k8yhhST6uAuZBrR4BVxuSGDjoU4TxEeHzvGTQ",
      created_at: "2021-12-06T05:35:43.587814Z",
      updated_at: "2022-04-06T12:54:54.646613Z"
    },
    {
      address: "0x6a48058d26244b4f52ae22fad059e20606909e82",
      name: "HIGHROLLERS",
      description:
        "High Rollers NFTs are play to earn NFTs used in an actual Metaverse game. High Rollers are part of the BallerX Ecosystem, and as such are exclusive with many rewards for holders. When you mint a High Roller, you will automatically receive a big bag of BallerX Tokens as well as receive daily BallerX by simply holding the NFT.",
      icon_url:
        "https://highrollersnft.com/assets/images/min/high-rollers-logo-min.png",
      collection_image_url:
        "https://highrollersnft.com/assets/images/min/high-rollers-logo-min.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://highrollersnft.com/highapi/pages/getnft",
      created_at: "2021-12-06T05:34:35.738973Z",
      updated_at: "2021-12-06T05:34:35.738973Z"
    },
    {
      address: "0x9abcd1ebadb20b1f404f0e5a6c8c21b17652e716",
      name: "IMXLocations",
      description:
        "A one dollar mint project on gas-free Ethereum Layer 2 ImmutableX featuring information about 41.000 capital cities around the globe. Community Driven.",
      icon_url: "https://imxlocations.com/assets/images/globe_white.png",
      collection_image_url:
        "https://imxlocations.com/assets/images/store_logo.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxlocations.com/metadata/main",
      created_at: "2021-12-06T05:33:42.687238Z",
      updated_at: "2021-12-06T05:33:42.687238Z"
    },
    {
      address: "0xec4de0a00c694cc7957fb90b9005b24a3f4f8b99",
      name: "Habbo Furni",
      description: "Habbo NFT Furni that you can use in Habbo",
      icon_url: "https://nft-tokens.habbo.com/items/furnicollection-icon.png",
      collection_image_url:
        "https://nft-tokens.habbo.com/items/furnicollection.png",
      project_id: 10025,
      project_owner_address: "0x1d1c83bc7130ac927ebea2c73bbe723ab2e3dfc0",
      metadata_api_url: "https://nft-tokens.habbo.com/items/metadata",
      created_at: "2021-12-06T05:32:42.02708Z",
      updated_at: "2022-10-06T07:36:20.026555Z"
    },
    {
      address: "0xda8ed06317ba8a7ba3131172065dc114a8d783af",
      name: "Grumpy Boomers",
      description:
        "8,888 NFTs of boomers with randomly assigned traits from 400+ available attributes. Grab a Boomer that looks like your dad, grandad, co-worker or neighbor. ",
      icon_url: "https://grumpyboomers.com/logo.png",
      collection_image_url: "https://grumpyboomers.com/cover_gold.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://cloudflare-ipfs.com/ipfs/QmSMgy7rv4xGFHsbRVHyU8iEMLYCXeTZohGnZPr94Uzxaf",
      created_at: "2021-12-06T05:30:10.27425Z",
      updated_at: "2021-12-06T05:30:10.27425Z"
    },
    {
      address: "0xa4de6f068fa86b7516aedbb16b8471ac65e7d361",
      name: "IMX Wolf Pack",
      description: "An IMX Utility Fighting Game",
      icon_url:
        "https://imxwolfpack.com/assets/images/photos/wolfpack-collection-image.jpg",
      collection_image_url:
        "https://imxwolfpack.com/assets/images/photos/wolfpack-collection-image.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://imxwolfpack.com/tokenInfo",
      created_at: "2021-12-06T05:29:23.254105Z",
      updated_at: "2021-12-06T05:29:23.254105Z"
    },
    {
      address: "0x6c2e712856e0a6682972726770de041e49030d0f",
      name: "10,000 Christmas Punks",
      description:
        "Inspired by the original CryptoPunks released by Larva Labs back in 2017 which is like 100 BCE in crypto terms, we've created the exclusive Christmas Punks NFT collection.\n10,000 unique collectible characters with proof of ownership stored on the ImmutableX.",
      icon_url: "https://punks.christmas/punks.gif",
      collection_image_url: "https://punks.christmas/punks.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://punks.christmas/tokens.php?id=",
      created_at: "2021-12-06T05:23:38.710375Z",
      updated_at: "2021-12-13T02:50:28.090949Z"
    },
    {
      address: "0xa54524b98ba3e3e5f20d16d6dceb54509ba63502",
      name: "The Blockology Foundation",
      description:
        "The Blockology Foundation is a collection of 10,000 unique Blockology Cyborg NFTs. Blockology is the ideology of the Metaverse. We believe in protecting the open metaverse, worship the virtual simulation and our mission to drive mankind towards the technological singularity. Visit www.blockology.co for more details.",
      icon_url:
        "https://blockology-collection.s3.us-east-2.amazonaws.com/logo.png",
      collection_image_url:
        "https://blockology-collection.s3.us-east-2.amazonaws.com/cover.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://metadata.blockology.co",
      created_at: "2021-12-06T05:22:44.768948Z",
      updated_at: "2021-12-17T00:36:39.196628Z"
    },
    {
      address: "0x891a067bc8d050f9f1aacdb655e2e0be1b9f4649",
      name: "Wild Safari",
      description:
        "Inspired by the beauty of Africa and it's wildlife, to support conservation and charities. Wild Safari is a collection of 10,000 algorithmically generated NFTs, based around Africa's 'Big Five', which consists of the African Elephant, Black Rhino, Lion, Leopard, and Buffalo. The main goal of this project is to create lasting change in our homeland, Africa, through the metaverse.",
      icon_url: "https://i.imgur.com/rjtH829.jpg",
      collection_image_url: "https://i.imgur.com/rjtH829.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x891a067bc8d050f9f1aacdb655e2e0be1b9f4649",
      created_at: "2021-12-02T02:17:03.088727Z",
      updated_at: "2021-12-02T02:17:03.088727Z"
    },
    {
      address: "0x5cc1bd2c6fe65c9442836533c760513d7e4ce75b",
      name: "Alpha Dragon Clan",
      description:
        "The Alpha Dragon Clan is an exclusive NFT game that allows players to evolve their NFT's by earning alpha and leveling up. ",
      icon_url: "https://images.alphadragonclan.com/icon.jpg",
      collection_image_url: "https://images.alphadragonclan.com/banner.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.alphadragonclan.com",
      created_at: "2021-12-01T00:41:37.717754Z",
      updated_at: "2021-12-01T00:41:37.717754Z"
    },
    {
      address: "0x608182340298d4e366280c279ca6df385d02f650",
      name: "OG Reaper Hills",
      description:
        "OG Reaper Hills is a collection of unique generative art !!  Join as you still can !!\n",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmcmDcxMkrrceqnnPcTWZn3RNbAXEEuZFyyqKK2JS1MRZg",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmdfGjusKk5wD2fad7RwNtyAzqhSSoMt9rHu7fJb927feB",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://cloudflare-ipfs.com/ipfs/QmYi9SXCYepRFVwcQWNiwNmZE6LCYtQyCcttWjphxR5aGS",
      created_at: "2021-11-30T07:02:29.969293Z",
      updated_at: "2021-12-13T05:34:31.853651Z"
    },
    {
      address: "0x4f17e8e976b809408d4aa3485bff9326df8ab505",
      name: "Chosen Ones",
      description:
        "Everybody worships. The only choice is what we get to worship.",
      icon_url: "https://i.imgur.com/h3iLZft.png",
      collection_image_url: "https://i.imgur.com/48W6dja.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://chosenones.xyz/api/cultist",
      created_at: "2021-11-30T01:08:55.061803Z",
      updated_at: "2021-11-30T01:08:55.061803Z"
    },
    {
      address: "0x0d3f90bbdbc737daac273e286c0dc5ac0d0b8882",
      name: "100 Immutable Rocks",
      description:
        "100 right facing ImmutableX rocks NFT with innovative upside down technology",
      icon_url: "https://immx.rocks/rocks_200.png",
      collection_image_url: "https://immx.rocks/rocks_640.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://immx.rocks/tokens.php?id=",
      created_at: "2021-11-29T02:13:11.968769Z",
      updated_at: "2021-11-29T02:13:11.968769Z"
    },
    {
      address: "0xfa0ad667bc1496de02dcc50a37cb827f1b78335c",
      name: "Blockchains and Dragons",
      description:
        "We are bringing the dungeons and dragons world online and giving all ownership to the players",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/Qme9Ui59m5J8E6CcWhi8CtyckvquHcxfhGLVymemLtaXW7",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmcFJ52JL2B1FwHrmHxdobk1DzXAKk82jSXzeugGVH62DS",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://blockchainanddragons.vercel.app/api/imx",
      created_at: "2021-11-29T02:11:04.082297Z",
      updated_at: "2021-11-29T02:11:04.082297Z"
    },
    {
      address: "0x084820cd4fc214dd782a21b7d486f83b3a9c84a4",
      name: "Immutable KongZ",
      description: "",
      icon_url:
        "https://immutablekongz.io/wp-content/uploads/collection/Immutablekongz_icon.png",
      collection_image_url:
        "https://immutablekongz.io/wp-content/uploads/collection/Immutablekongz_image.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.immutablekongz.io/metadata/kongz",
      created_at: "2021-11-29T02:02:12.053209Z",
      updated_at: "2021-12-03T04:50:42.490722Z"
    },
    {
      address: "0xb0e827c9ab5e68d243f707f832b756981987f704",
      name: "Highrise Creature Club",
      description:
        "Highrise Creature Club is Highrises first NFT collection. Each creature is composed of unique, hand-crafted items that can be individually worn within the Highrise Metaverse. With over 13 million members, Highrise is bringing digital ownership via blockchain to the leading mobile-first metaverse. Every day, Highrise citizens create rooms, style avatars, trade items, host experiences, and much more.",
      icon_url:
        "https://cdn-production.joinhighrise.com/hcc/hcc_collectionicon.png",
      collection_image_url:
        "https://cdn-production.joinhighrise.com/hcc/hcc_collectionimage.png",
      project_id: 9,
      project_owner_address: "0xc4862a6e1c1552bce246e3dc7e7fc0f7bc647bfb",
      metadata_api_url:
        "https://highrise-creature-club.s3.amazonaws.com/metadata",
      created_at: "2021-11-28T08:58:02.395339Z",
      updated_at: "2022-01-19T03:25:23.470583Z"
    },
    {
      address: "0x91817fd3af396bcabdd964706c67c017a1245e25",
      name: "SuperBird Test Collection",
      description: "SuperBirds description",
      icon_url: "",
      collection_image_url: "",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://super-birds.s3.amazonaws.com/metadata",
      created_at: "2021-11-26T23:55:08.316619Z",
      updated_at: "2021-11-26T23:55:08.316619Z"
    },
    {
      address: "0x6848731642406811ed3606dc4c73ac32d678b35f",
      name: "Nestheads",
      description: "",
      icon_url: "https://i.imgur.com/tXA8qQl.jpg",
      collection_image_url: "https://i.imgur.com/tXA8qQl.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x6848731642406811ed3606dc4c73ac32d678b35f",
      created_at: "2021-11-26T05:21:12.264518Z",
      updated_at: "2021-11-26T05:21:12.264518Z"
    },
    {
      address: "0x8b8c008c7cd77b871ad22aaa996f44a05612f81c",
      name: "Outcastverse Founders Pass",
      description: "",
      icon_url: "https://i.imgur.com/zBb6afW.png",
      collection_image_url: "https://i.imgur.com/zBb6afW.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x8b8c008c7cd77b871ad22aaa996f44a05612f81c",
      created_at: "2021-11-26T00:58:15.183441Z",
      updated_at: "2021-11-26T00:58:15.183441Z"
    },
    {
      address: "0xc98364e6bff6c99140a70ab33c5c525340fc4cef",
      name: "Rexemonz",
      description: "6666 Rexemonz led by King Rex and his prehistoric disciples.",
      icon_url: "https://rexemonz.com/img/Placeholder%20Egg.gif",
      collection_image_url:
        "https://moonshotgarageproject.mypinata.cloud/ipfs/QmbLRRPPgS4H5BGSjKEdeND5tN4XALsK5AoAWdPYeBRFyu",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://rexemonz.mypinata.cloud/ipfs/QmZ9cjieq1soG7haAu9jzEf9reeEXEgx3LkdaJ8RNonoy4",
      created_at: "2021-11-26T00:51:28.428047Z",
      updated_at: "2021-12-09T05:54:48.76547Z"
    },
    {
      address: "0x3a4ba077781d4471f301b1a3eff5fc9e2723f219",
      name: "IMX Kaijuz",
      description:
        "IMX Kaijuz are a randomly generated, gas free NFT collection available on ImmutableX. Land of the Kaijuz coming soon to IMX Kaijuz.",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmR95QJwk6FcfEPmHmV9CbCLPxWphtQAppRFaJim6r12Q4/icon.png",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/QmR95QJwk6FcfEPmHmV9CbCLPxWphtQAppRFaJim6r12Q4/icon.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://imxkaijuz.mypinata.cloud/ipfs/QmRSp2mhzhC5muYaeebAh87VnKTrMVgA2q3xBGPpacyA47",
      created_at: "2021-11-25T08:51:41.61835Z",
      updated_at: "2021-12-03T10:36:23.25828Z"
    },
    {
      address: "0xe71833bae4d58f35cad37a213632c2466218f25d",
      name: "Treasure Island Land",
      description: "",
      icon_url: "https://landloot.org/icon_ti_image.jpeg",
      collection_image_url: "https://landloot.org/icon_ti.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://landloot.org/api/v1/projects/treasureislandland",
      created_at: "2021-11-24T23:34:36.548795Z",
      updated_at: "2021-11-24T23:34:36.548795Z"
    },
    {
      address: "0x757459040f276dcc28c13b82faab2bf934c15cfb",
      name: "PunkGame",
      description:
        "Apex Punks is a collection of unique generative art !!  Generate tokens by owning Apex Punks and be alert for what's to come. Join as you still can.!!",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmY7ksBXGvYQmiaEGsJf9JwEDenzgAL8peHAmgJuW4UFqN/apex.gif",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmY7ksBXGvYQmiaEGsJf9JwEDenzgAL8peHAmgJuW4UFqN/logo.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmNzKkkDfJ4NP3tsHTW7dL4XTkowC2744UZLnJoGCrybFm",
      created_at: "2021-11-24T00:44:59.389658Z",
      updated_at: "2021-11-24T00:44:59.389658Z"
    },
    {
      address: "0xda53ebc415955f61fc77d63772df5574840842aa",
      name: "Cat Club",
      description: "400 cute cats chilling on IMX",
      icon_url:
        "https://cdn.discordapp.com/attachments/900819211113349140/908347794258022480/Catpixel.png",
      collection_image_url:
        "https://cdn.discordapp.com/attachments/900819211113349140/908347794258022480/Catpixel.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmVeBk6bA8oGkC5Wxfm3XMAyM2nGQJqRctA4AFAKJntkZe",
      created_at: "2021-11-24T00:42:49.510638Z",
      updated_at: "2021-11-24T00:42:49.510638Z"
    },
    {
      address: "0x93ea8fd40964d2e20b4ded0709b79939062822e4",
      name: "Pixel Degen Gang",
      description:
        "7,000 Pixel Degens lurking around on the Immutable X network.",
      icon_url: "https://degengang.io/images/ICON.jpg",
      collection_image_url: "https://degengang.io/images/Collection.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://degengang.mypinata.cloud/ipfs/QmSActxKURTenTz3E9XPaQ1128psBnK4KEBnsaZHPPqoQE",
      created_at: "2021-11-24T00:41:00.833359Z",
      updated_at: "2021-11-24T00:41:00.833359Z"
    },
    {
      address: "0xf1336d00f929caab6471dfbc6c35b66ef21c59b8",
      name: "First",
      description:
        "The first NFT issued by an known artist/photographer, the first show of a brand launch etc\u2026 Everything about first  NFT, selected by community member",
      icon_url: "https://bloock.art/first_icon.jpeg",
      collection_image_url: "https://bloock.art/first_collection_image.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://bloock.art/api/v1/projects/first",
      created_at: "2021-11-22T04:13:59.265925Z",
      updated_at: "2021-11-22T04:13:59.265925Z"
    },
    {
      address: "0xefcfca05c91b737b8bd6487f9c9328a4ce409914",
      name: "IMX Bears",
      description:
        "IMX Bears is a collection of 7,000 unique cute pixelated bears consisting of 200+ hand drawn traits. IMX bears launches on Immutable X, Layer 2 Ethereum, meaning there will be no gas fees for all transactions.",
      icon_url:
        "https://launchmeta.sfo3.cdn.digitaloceanspaces.com/imxbears/imxbears.png",
      collection_image_url:
        "https://launchmeta.sfo3.cdn.digitaloceanspaces.com/imxbears/imxbears.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxbears.com/metadata",
      created_at: "2021-11-22T01:22:22.090756Z",
      updated_at: "2021-12-06T04:46:48.418883Z"
    },
    {
      address: "0x4dba12824f1533a924699a7913a9ca7ee1e6b863",
      name: "The Kornz",
      description:
        "Utopian Unicorns are the OG collection of 3500 unicorn NFTs that started the Utopia! Each unique unicorn is randomly generated on Immutable X, an Ethereum Layer 2 solution, from a set of 189 traits.",
      icon_url:
        "https://p15.zdusercontent.com/attachment/9775828/nRS2ScJsTk5uSGjDHHuas2Obs?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..mWbeYyslYwG68BtJTP6VqQ.MvYf4FLnOMdnMgUI2mRHT5iV7NJdlz3_fIP3r00-oWBZcj3SlPjZsZ_b-nQbtj0EWOQQd6iggwmgzFUZ3oFG32SQjK_Xmo7HblgoxzaABhUVeq92cz-G72NorOf4w0tT0OwIV7YZrXlrz81BkGdT4B8vSY4GuPViJziPf56_cXk0hmD4-1N2-5M78E2JJHmzgnERNwv_WYyqztwqoywvg6EiFGEJfR2oARh8SC8j4RUX85gzhKFtzAxji90S-9IAXXbvlIJ6kpNj10COqqV7n0igGPU1ZQn41RjT439yL-g.pgsp-b_D1UYePj-7nRdxnw",
      collection_image_url:
        "https://p15.zdusercontent.com/attachment/9775828/nRS2ScJsTk5uSGjDHHuas2Obs?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..mWbeYyslYwG68BtJTP6VqQ.MvYf4FLnOMdnMgUI2mRHT5iV7NJdlz3_fIP3r00-oWBZcj3SlPjZsZ_b-nQbtj0EWOQQd6iggwmgzFUZ3oFG32SQjK_Xmo7HblgoxzaABhUVeq92cz-G72NorOf4w0tT0OwIV7YZrXlrz81BkGdT4B8vSY4GuPViJziPf56_cXk0hmD4-1N2-5M78E2JJHmzgnERNwv_WYyqztwqoywvg6EiFGEJfR2oARh8SC8j4RUX85gzhKFtzAxji90S-9IAXXbvlIJ6kpNj10COqqV7n0igGPU1ZQn41RjT439yL-g.pgsp-b_D1UYePj-7nRdxnw",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://token.moonshotgarageproject.com/utopianunicorns",
      created_at: "2021-11-22T01:21:23.384288Z",
      updated_at: "2022-02-14T22:42:50.370169Z"
    },
    {
      address: "0x2322fe4290ddbceb7c9f49a4d39062d10b3ac69a",
      name: "Yellowcake Park Mutants",
      description:
        "Yellowcake Park: First mutant reserve on Earth. Formerly: Wildlife Sanctuary. Population: 9,999. Adopt your mutant.",
      icon_url: "https://www.yellowcakeparkmutants.com/banner.jpg",
      collection_image_url: "https://www.yellowcakeparkmutants.com/logo.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://mainnet.yellowcakeparkmutants.com/api",
      created_at: "2021-11-22T01:20:21.049106Z",
      updated_at: "2021-11-22T01:20:21.049106Z"
    },
    {
      address: "0x1a95384d918eee66fe3fe33fd275aeafc0a7c0d5",
      name: "Immutable Ice Creams",
      description: "Our Ice Creams are unique. Ice Creams? Made Immutable",
      icon_url:
        "https://static.wixstatic.com/media/82d4d9_619449a91c754fdcaaef5b0ee5489590~mv2.png/v1/fill/w_512,h_512,al_c,q_85/logo251.webp",
      collection_image_url:
        "https://static.wixstatic.com/media/82d4d9_619449a91c754fdcaaef5b0ee5489590~mv2.png/v1/fill/w_512,h_512,al_c,q_85/logo251.webp",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x1a95384d918eee66fe3fe33fd275aeafc0a7c0d5",
      created_at: "2021-11-19T06:18:56.901082Z",
      updated_at: "2021-11-19T06:18:56.901082Z"
    },
    {
      address: "0x2c453df1dfd270602b3dbd498aec3cd0cb4851ff",
      name: "Wild Turtles",
      description: "Save the turtles. One NFT, one turtle saved.",
      icon_url: "https://i.imgur.com/DWT77GA.png",
      collection_image_url: "https://i.imgur.com/DWT77GA.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x2c453DF1DFd270602b3dBd498AEC3cD0CB4851fF",
      created_at: "2021-11-19T06:16:28.452158Z",
      updated_at: "2021-12-28T22:09:23.988881Z"
    },
    {
      address: "0x65d16036cacd2b88d6bc724de9a3975967273377",
      name: "IMX Beasts",
      description:
        "IMX Beasts tells the story of the ancient protectors fighting for our universe against the Incinerators. Join the fight now!",
      icon_url:
        "https://imxlaunch.mypinata.cloud/ipfs/QmR43W8rwV9daye8Msa5PDkyss4BRdjBLpgfBwJxWqKo7b/icon.png",
      collection_image_url:
        "https://imxlaunch.mypinata.cloud/ipfs/QmR43W8rwV9daye8Msa5PDkyss4BRdjBLpgfBwJxWqKo7b/cover.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://imxlaunch.mypinata.cloud/ipfs/QmcJtWnUuhXZsigwt5pDATZoDfB5C52RA9ReV8hCpf1ajy",
      created_at: "2021-11-19T05:50:07.738546Z",
      updated_at: "2021-11-25T04:04:59.117677Z"
    },
    {
      address: "0x6cb1480011198f005e7729bf72b03246a6abd03b",
      name: "Light Bodies",
      description:
        "3 factions of Metaphysical Mentors assisting humans in accessing the untapped resources of power and potential that lies within. Interdimensional beings crossing through to uncover and contribute to the great awakening and new understanding of what humans are truly capable of. The Light Bodies are here to remove the shackles of control and guide you in taking your power back!",
      icon_url:
        "https://light-bodies.mypinata.cloud/ipfs/QmVwk5rNy4cP1uDgwRvgnVLNx494tUzae63iH51FB1Ndk9",
      collection_image_url:
        "https://light-bodies.mypinata.cloud/ipfs/QmdfxUtivUsUV5WzqoGo99d74nVtYtYWxof8QVGLHwBbYv",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://light-bodies.mypinata.cloud/ipfs/QmSr1YrGZk2tHkPwEFis35yV8DajQBhRWZ3T6Cyqo7DHiu",
      created_at: "2021-11-19T04:59:51.691707Z",
      updated_at: "2021-11-26T04:35:25.995961Z"
    },
    {
      address: "0xfcb99f6b2e6e37f1cf590dedf12cf6affc49fa45",
      name: "Confidential Comrades IMX",
      description:
        "An agency in ruins. Past operatives in hiding. 5,000 recruits to save it all. The Confidential Comrades are agents in disguise preparing for their most important mission to date.",
      icon_url:
        "https://confidential-comrades-metadata.s3.us-east-2.amazonaws.com/icon.png",
      collection_image_url:
        "https://confidential-comrades-metadata.s3.us-east-2.amazonaws.com/main.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://confidential-comrades.s3.us-east-2.amazonaws.com",
      created_at: "2021-11-19T04:49:50.087378Z",
      updated_at: "2021-11-26T03:22:57.757401Z"
    },
    {
      address: "0x3d88c23d2d93d1f0391d2062e0189b99b0ce8dcb",
      name: "Nifty Nuggets",
      description:
        "Nifty Nuggets are only a 1000 unique nuggets collection on the IMX Ethereum blockchain - for now. Nothing exists.",
      icon_url: "https://cdn.niftynuggets.org/assets/icon.png",
      collection_image_url: "https://cdn.niftynuggets.org/assets/icon.png",
      project_id: 10118,
      project_owner_address: "0x4a7c890856c1c7595e4b20c8f087250371a8b187",
      metadata_api_url: "https://api.niftynuggets.org/api/niftynuggetsnfts",
      created_at: "2021-11-17T08:24:50.879502Z",
      updated_at: "2023-02-03T23:26:38.059784Z"
    },
    {
      address: "0xc262b34f12207ac4a47b47b79839ff969e89a995",
      name: "SuperBirds 2",
      description: "Another SuperFarm testing contract.",
      icon_url: "https://super-birds.s3.amazonaws.com/images/parrot.jpg",
      collection_image_url:
        "https://super-birds.s3.amazonaws.com/images/parrot.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://super-birds.s3.amazonaws.com/metadata",
      created_at: "2021-11-17T02:38:39.531866Z",
      updated_at: "2021-11-17T02:38:39.531866Z"
    },
    {
      address: "0x69f631e3e0f262be0248c554f7de9467ad610f1a",
      name: "SuperBirds",
      description: "A SuperFarm mainnet testing contract.",
      icon_url: "https://super-birds.s3.amazonaws.com/images/duck.jpg",
      collection_image_url:
        "https://super-birds.s3.amazonaws.com/images/duck.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://super-birds.s3.amazonaws.com/metadata",
      created_at: "2021-11-17T02:37:27.857452Z",
      updated_at: "2021-11-17T02:37:27.857452Z"
    },
    {
      address: "0xbf6878086fb7d3a396578b11ac5b434b2205182c",
      name: "Oh my GA$",
      description:
        "Everyone knows that gas fees are too damn high! Our solution is simple. We distribute gas masks. And we wait for Vitalik to fix the problem.",
      icon_url: "https://i.imgur.com/RPrYnLp.png",
      collection_image_url: "https://i.imgur.com/RPrYnLp.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0xBF6878086FB7D3A396578B11aC5B434b2205182c",
      created_at: "2021-11-16T23:09:33.86348Z",
      updated_at: "2021-11-16T23:09:33.86348Z"
    },
    {
      address: "0xa71c22bc9e7d697d060a85f7fb446b5230722bd6",
      name: "ChainVille - Chaintectives",
      description:
        "Chaintectives are a playable character in ChainVille and earn yield in ChainVille tokens",
      icon_url: "https://i.imgur.com/Rh621Be.jpg",
      collection_image_url: "https://i.imgur.com/Rh621Be.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://imxlauncher.com/json/get_metadata.php?cid=12&asset_id=",
      created_at: "2021-11-15T06:40:12.239941Z",
      updated_at: "2021-12-01T06:48:12.882647Z"
    },
    {
      address: "0x62e71a89d9a306d32bc7b20f8d1df79310c1323f",
      name: "Foreign Fuels",
      description:
        "Foreign Fuels is the first decentralized blockchain-based racing platform on Immutable X that joins millions of car enthusiasts in a community where you can buy, race, and mod NFT cars, and earn money while doing it. Owners of our NFTs will also be able to customize their garage and other assets in our open-world metaverse.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmW15ACmHzv25CYD2Zfr5Tat2i2R5VF6VswP8FHm5KjxdR",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmW15ACmHzv25CYD2Zfr5Tat2i2R5VF6VswP8FHm5KjxdR",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://metadata.foreignfuels.io",
      created_at: "2021-11-15T05:29:56.900821Z",
      updated_at: "2021-11-15T05:29:56.900821Z"
    },
    {
      address: "0xfd753bb372272699dc21a5d509650c27c80fbea4",
      name: "50ETHcat",
      description:
        "3,333 MANEKI NEKO GOOD LUCK CATS LIVING ON THE ETHERIUM BLOCKCHAIN! RESALABLE NON-FUNGIBLE RAFFLE TOKEN! 5 ETH RAFFLE, 50ETH JACKPOT, 1ETH WEEKLY.",
      icon_url: "https://50ethcat.com/meta/cover/logo.png",
      collection_image_url: "https://50ethcat.com/meta/cover/cover.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://imxlauncher.com/json/get_metadata.php?cid=10&asset_id=",
      created_at: "2021-11-15T05:26:32.883787Z",
      updated_at: "2021-12-10T05:30:53.364537Z"
    },
    {
      address: "0xa98c628a7c15fdea4f45164ccf22c605f8adaa4d",
      name: "Bad Baby Daycare",
      description:
        "Bad Baby Daycare - the first NFT that ages and will let you choose your baby\u2019s path of life over a span of many seasons. At each age level you can choose to be a good or bad parent. And the coolest part: your kid's traits will change depending on your decisions. Watch your baby become the reincarnation of the devil or the holy saint or...something in between. It's your choice!",
      icon_url: "https://sneakersociety.io/images/babies/ic.png",
      collection_image_url: "https://sneakersociety.io/images/babies/collec.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://h1u238dhdgzz378qggg.herokuapp.com",
      created_at: "2021-11-15T05:25:33.025815Z",
      updated_at: "2021-11-15T05:25:33.025815Z"
    },
    {
      address: "0x0d7cab29755a2bec1b877c859e25770d6fce6331",
      name: "IMX Kongz",
      description: "IMX Kongz is a collection of 1000 unique generative art",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/Qmf8F2AyBxzMDnnVeDPp12YNj9gaMBoPoDjhptr6RNsD9d",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/Qmf8F2AyBxzMDnnVeDPp12YNj9gaMBoPoDjhptr6RNsD9d",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxkongz.xyz/item",
      created_at: "2021-11-12T04:56:11.175523Z",
      updated_at: "2021-11-12T04:56:11.175523Z"
    },
    {
      address: "0x9bf97ec4c05f1f31e2641eec19381e30abfa08cb",
      name: "NFTrack",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmeMnGTYcASS26gQAUiGLp5SoDWLq6sv587b7s3opMFn8N",
      collection_image_url:
        "https://ipfs.io/ipfs/QmeM8CHVR9mGdU3R1XDoKdSeD1jpGBWLeb4Pg5Rmx94bU7",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.nftrackracing.com/immutablex",
      created_at: "2021-11-12T04:54:20.705048Z",
      updated_at: "2021-11-12T04:54:20.705048Z"
    },
    {
      address: "0x5b97f435ee9f08993b99de4af874ea2ab2330433",
      name: "Immutable Giraffes",
      description:
        "10,000 \ud83e\udd92 travelling \u27a1\ufe0f Immutable X. Stopping in a few different cities and then anchoring in the Decentraland metaverse. Born and raised on ETH layer 2.",
      icon_url: "https://immutablegiraffes.com/logo.gif",
      collection_image_url: "https://immutablegiraffes.com/logo.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://immutablegiraffes.com/api",
      created_at: "2021-11-12T04:50:29.671116Z",
      updated_at: "2021-12-10T04:47:25.49731Z"
    },
    {
      address: "0x41ec91704f77bccae585c12501b361d1734e7f69",
      name: "Color Therapies",
      description:
        "We add color to the Metaverse! Color Therapies is a collection of 10,000 functional colors minted as NFTs on the blockchain. Collect them to create Color Palettes and win valuable prizes, stake your NFTs to earn $TINT token or apply Color Therapies to other on-chain items to modify their appearance.",
      icon_url:
        "https://colortherapies.rehab/images/imx/color-therapies-imx-icon.jpg",
      collection_image_url:
        "https://colortherapies.rehab/images/imx/color-therapies-collection-cover.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://imxct.com",
      created_at: "2021-11-12T04:32:21.073526Z",
      updated_at: "2021-11-12T04:32:21.073526Z"
    },
    {
      address: "0xdbce5b8b8befa06057459767c8a585a418a6e8d2",
      name: "Immutable Apes X",
      description: "Blessed be the holders.",
      icon_url:
        "https://ipfs.io/ipfs/QmYSB7uVxLv8BehkQASFmPcMmUF1n8AXdbuYjFqew1n4to",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/Qme4DEfxGbkP9ESxdgLFtxMHrq5jyhbD2yHYSzJPEcgS8y",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.theapesarecoming.com/immutablex",
      created_at: "2021-11-12T04:31:09.719008Z",
      updated_at: "2022-03-16T02:56:11.374343Z"
    },
    {
      address: "0xf2116e27df4e505b50f60a2bcbda2dc0c5bee8b8",
      name: "Stage",
      description: "Stage NFTs",
      icon_url: "https://d2i3fef0wqf1sc.cloudfront.net/stage-logo.png",
      collection_image_url:
        "https://d2i3fef0wqf1sc.cloudfront.net/stage-banner.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://ethereum.yourstage.io/stage",
      created_at: "2021-11-12T04:30:42.332851Z",
      updated_at: "2021-11-19T00:40:58.001618Z"
    },
    {
      address: "0x1a7f16c514e6f57f7092e19ff6d1c5d75e5f093d",
      name: "Bad Grandpa",
      description:
        "Bad Grandpa is a collection of 10,000 randomly generated & unique collectibles living on ImmutableX and carefully chosen by some of the greatest grandkids who love their grandpas.",
      icon_url: "",
      collection_image_url: "https://badgrandmanft.com/img/imx_bgp.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://nftartisans.mypinata.cloud/ipfs/QmUKJc5YGm36bPzPHQJDautjRgy5UgWMZdLqjXhNCMybFr",
      created_at: "2021-11-11T03:30:55.271341Z",
      updated_at: "2021-11-11T03:30:55.271341Z"
    },
    {
      address: "0xec8c42b9a09f8b8ec98f6ba1a4cc455c346120a5",
      name: "Droplt",
      description: "Droplt digital art marketplace",
      icon_url: "https://droplt-media.s3.amazonaws.com/Droplt_logo_small.png",
      collection_image_url:
        "https://droplt-media.s3.amazonaws.com/droplt-logo-black.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://json.droplt.co",
      created_at: "2021-11-11T03:17:35.27545Z",
      updated_at: "2021-11-11T03:17:35.27545Z"
    },
    {
      address: "0xd595e82f016843bb15e469eedc357fda27a71a6b",
      name: "Baby Krows",
      description:
        "From the creators of Moody Krows - Baby Krows are the adorable offspring of our genesis collection! Fuse them with gems in the future to help them achieve their final form: Ascended Krows!",
      icon_url: "https://i.imgur.com/q6Z87d8.png",
      collection_image_url: "https://i.imgur.com/q6Z87d8.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0xd595e82f016843bb15e469eedc357fda27a71a6b",
      created_at: "2021-11-10T23:17:00.308496Z",
      updated_at: "2021-11-10T23:17:00.308496Z"
    },
    {
      address: "0x1618cc074b7bed1b8901316449af7685bc265c6f",
      name: "Rancid Royalty",
      description:
        "In a brutal quest for power everyone is out to destroy the Krypto Kingdom!",
      icon_url:
        "https://i.ibb.co/mc15B0n/01-B33075-44-A4-438-E-A6-FB-384-C6946-E167.png",
      collection_image_url:
        "https://i.ibb.co/mc15B0n/01-B33075-44-A4-438-E-A6-FB-384-C6946-E167.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x1618cc074b7bed1b8901316449af7685bc265c6f",
      created_at: "2021-11-10T07:25:18.291726Z",
      updated_at: "2021-11-10T07:25:18.291726Z"
    },
    {
      address: "0xe91c777deb5c75f7e4e797e337f82e535b6dd866",
      name: "Bad Baby Daycare",
      description:
        "Bad Baby Daycare - the first NFT that ages and will let you choose your baby\u2019s path of life over a span of many seasons. At each age level you can choose to be a good or bad parent. And the coolest part: your kid's traits will change depending on your decisions. Watch your baby become the reincarnation of the devil or the holy saint or...something in between. It's your choice!",
      icon_url: "https://sneakersociety.io/images/babies/icon.png",
      collection_image_url:
        "https://sneakersociety.io/images/babies/collection.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://badbabydaycare.herokuapp.com",
      created_at: "2021-11-09T07:43:53.256998Z",
      updated_at: "2021-11-09T07:43:53.256998Z"
    },
    {
      address: "0xb941a7373e1dd60ad75e3460f849f28dd4bd6a07",
      name: "Battle Factions",
      description:
        "Battle factions are 7500 hand-drawn and unique art pieces that have been created by professional artists. These will be randomly minted, they are specially made to precision to tell a story. Join our community to be a part of the amazing story and represent your factions!",
      icon_url:
        "https://token.moonshotgarageproject.com/battlefactions/BattleFactionsCover.png",
      collection_image_url:
        "https://token.moonshotgarageproject.com/battlefactions/BattleFactionsCover.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://token.battlefactions.com",
      created_at: "2021-11-09T07:31:02.085524Z",
      updated_at: "2022-03-01T05:25:25.048861Z"
    },
    {
      address: "0x8de7521370e1b5f83f31be9edb0c4599cb000195",
      name: "Short Bear Cubs",
      description:
        "Short Bear Cubs are a collection of 10,000 uniquely generated NFTs \u2013 unique digital collectibles living on the Ethereum Network. We chose the name \u201cShort Bear\u201d as a play on words for market sentiment \u2013 Shorting and Bear market. ",
      icon_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Icon%20SBC.jpg",
      collection_image_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Icon%20SBC.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x8de7521370e1b5f83f31be9edb0c4599cb000195",
      created_at: "2021-11-09T02:49:15.546705Z",
      updated_at: "2021-11-09T02:49:15.546705Z"
    },
    {
      address: "0x5084e56a8c987c651f2aa6cc515aeb4518beee9a",
      name: "IMX Kaijuz",
      description:
        "IMX Kaijuz are a randomly generated, gas free NFT collection available on ImmutableX. There are only 8,888 Kaijuz available.",
      icon_url:
        "https://imxkaijuz.mypinata.cloud/ipfs/QmacvFvhsXUSx7zRAzPbnCmjeDJ9Log13WTSB5YrtV3YSR",
      collection_image_url:
        "https://imxkaijuz.mypinata.cloud/ipfs/QmacvFvhsXUSx7zRAzPbnCmjeDJ9Log13WTSB5YrtV3YSR",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://imxkaijuz.mypinata.cloud/ipfs/QmXVnuLWZo6sgDu7TfD8eXw6oWJcZWbJNxmfVJFt4NtXBq",
      created_at: "2021-11-08T06:02:14.833967Z",
      updated_at: "2021-11-18T22:02:51.719346Z"
    },
    {
      address: "0xe6d1b14467afaf1dab6cab4c484b67da214937e8",
      name: "Zombie Squirrels",
      description:
        "2,500 Zombie Squirrels have risen from the dead and now they are ready to take over IMX. 100% zombies, 0% gas, what's not to love?",
      icon_url: "https://api.imxzombiesquirrels.com/assets/icon.png",
      collection_image_url:
        "https://api.imxzombiesquirrels.com/assets/banner.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxzombiesquirrels.com/meta",
      created_at: "2021-11-08T05:32:26.862147Z",
      updated_at: "2021-11-11T10:32:31.660839Z"
    },
    {
      address: "0x6e8ba426586a96935c6b91fd12206557df6e3ec1",
      name: "GreenPark Sports",
      description: "",
      icon_url:
        "https://blog.greenparksports.com/content/images/size/w600/2019/11/Twitter-Icon.png",
      collection_image_url:
        "https://blog.greenparksports.com/content/images/2021/12/Virtue_Drive_logo_06.jpg",
      project_id: 14,
      project_owner_address: "0x3e3a71b8fcbb046dc2ff1aadd95b690ae67e3876",
      metadata_api_url:
        "https://api.nft.greenparksports.com/api/v1/immutable/metadata/0x6e8ba426586a96935c6b91fd12206557df6e3ec1",
      created_at: "2021-11-08T05:16:01.546017Z",
      updated_at: "2022-01-24T05:32:42.744023Z"
    },
    {
      address: "0xa4ddc0932b4e97523f8198eda7a28dac2327d365",
      name: "CryptoXolos",
      description:
        "CryptoXolos are inspired by Aztec Mythology and proceduraly generated from assets made by a Mexican artist. Featuring an exclusive collection of 1,737 Xolos with a roadmap towards a P2E game. Each CryptoXolo is completely unique and passively yields $CAO token according to its rarity score.",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/bafkreigzy6i4gni6ooiwrikluydpi4khj7whwm2v33lm6psontrxgwvapy",
      collection_image_url:
        "https://cloudflare-ipfs.com/ipfs/bafkreidqythw7mk4cuw5xmfgct2fc6ien5l2ap2p5za3expatovbgtscum",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.cryptoxolos.com/metadata",
      created_at: "2021-11-08T02:34:50.883408Z",
      updated_at: "2021-11-30T05:00:10.615527Z"
    },
    {
      address: "0xc78e755253834c8cc6d6a5aedbe56a173e4d764a",
      name: "Last Dragons",
      description: "Last Dragons NFTs by Akrij",
      icon_url:
        "https://ipfs.lastdragons.io/ipfs/QmfUWDqonpDkQJhQBEsvz32L7t8AMJQNWH1SsBpt4WE1Tm/icon.png",
      collection_image_url:
        "https://ipfs.lastdragons.io/ipfs/QmdiF9C7B31J7drkbC1AbjjgpQENUWydfb57Lo1bGUz2ZG/5.gif",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://crypto.lastdragons.io/metadata",
      created_at: "2021-11-04T03:28:51.243756Z",
      updated_at: "2021-12-13T02:36:08.63612Z"
    },
    {
      address: "0xdc0fb8b27daadcd897cc2a2facf6416f430b08a7",
      name: "Oh My Giraffe!",
      description:
        "OMG is the first launchpad for IMX. Oh My Giraffe's founders will devote a portion of its revenue to rewild and save endangered animals from the hand of man.",
      icon_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Icon%20giraffes.jpeg",
      collection_image_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Icon%20giraffes.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0xdc0fb8b27daadcd897cc2a2facf6416f430b08a7",
      created_at: "2021-11-03T05:09:52.135592Z",
      updated_at: "2021-11-03T05:09:52.135592Z"
    },
    {
      address: "0x3ce2cbfca53ac177908eee958f823448c7b82826",
      name: "Momentous",
      description:
        "NFTs for everyone. Capture, mint, and share life's great moments. This is Social Minting.",
      icon_url:
        "https://momentous-brand-assets.s3.us-east-2.amazonaws.com/Momentous-Lockup-White-On-Black.png",
      collection_image_url:
        "https://momentous-brand-assets.s3.us-east-2.amazonaws.com/Momentous-Lockup-White-On-Black.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api-v1.onmomentous.io/api/immutable/meta/0x3ce2cbfca53ac177908eee958f823448c7b82826",
      created_at: "2021-11-02T11:22:54.138302Z",
      updated_at: "2021-11-09T22:47:28.621061Z"
    },
    {
      address: "0x82b1ce6e5d0f870c453cec0ce1b1f177e8fe50f8",
      name: "Battle Catz",
      description:
        "Battle Catz is a state-of-the-art initiative that connects the digital world of the modern day to the real world through its creative way of leveraging digital art (NFTs) to help the cause of various charities involved with helping big cats from being poached and going extinct. At battle Catz, our purpose is clear, and our brand name is an expression of what we believe in. Simply put, Battle Catz stands for \u201cBattle for the life of big cats\u201d. Battle Catz is a collection of 8080 unique digital collectibles roaming on the Ethereum blockchain. The eye-capturing aesthetics, the unique, stylish, and imaginative design of the NFTs compliment the soul-stirring goal of Battle Catz which is to bring big cats into people\u2019s hearts. 5% of all proceeds are going towards helping various charities involved with helping big cats from being poached and going extinct.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmaAcVSJcqbt651RkVMAiNvTaw5Q5uh6gsCasUe6hcggdQ",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmaAcVSJcqbt651RkVMAiNvTaw5Q5uh6gsCasUe6hcggdQ",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://battlecatz.com/api/nftdetails",
      created_at: "2021-11-02T06:06:19.608491Z",
      updated_at: "2021-11-04T03:43:32.497417Z"
    },
    {
      address: "0x9998eae8ab9f8bfd0204df4bca8ca012f9b9d783",
      name: "IMX Apes",
      description:
        "After suffering from high-congestion in the old ETH jungle, the bravest of IMX Apes migrated to new lands in search of a world where an Ape can be free of ridiculous gas fees. This home is located on Immutable X, a Layer 2 solution on the Ethereum blockchain! This is a world where gwei is low and bananas are plentiful!",
      icon_url:
        "https://i.ibb.co/thQTV7s/24-D1-E8-A9-E31-E-48-BB-9-F79-ECADF9945-B26.png",
      collection_image_url:
        "https://i.ibb.co/thQTV7s/24-D1-E8-A9-E31-E-48-BB-9-F79-ECADF9945-B26.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0x9998eae8ab9f8bfd0204df4bca8ca012f9b9d783",
      created_at: "2021-11-01T08:10:27.700885Z",
      updated_at: "2021-11-10T07:26:31.51914Z"
    },
    {
      address: "0x343fd244ab5a1d1129a6edf21ba37c64aa725ff0",
      name: "The Doge Pound Halloween",
      description:
        "A 10,000 piece Halloween collection from the team that brought you The Doge Pound.",
      icon_url: "https://storage.googleapis.com/dogehalloween/dogepoundicon.jpg",
      collection_image_url:
        "https://storage.googleapis.com/dogehalloween/dogepoundicon.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://storage.googleapis.com/dogehalloween",
      created_at: "2021-10-31T07:15:15.050947Z",
      updated_at: "2021-10-31T07:15:15.050947Z"
    },
    {
      address: "0x8cc131fd208dd17b8420998217d414028d74877f",
      name: "IMX Punks",
      description:
        "The IMX Punks is a collection of 10,000 unique Punks with varying rarity and style. The First algorithmically generated digital collection of diverse Punk NFTs chilling on the Immutable X, a Layer 2 for NFTs on Ethereum. Each character is impeccably designed, thoughtfully picked, and super funky! #PunkItUp",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmX2nK6GqpP3yCDffXzP6dNgzyjwbqK2x5NhhJTSDHANMf",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmX2nK6GqpP3yCDffXzP6dNgzyjwbqK2x5NhhJTSDHANMf",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "http://metadataapi-env.eba-jpgmysdm.us-east-2.elasticbeanstalk.com",
      created_at: "2021-10-29T08:45:30.759441Z",
      updated_at: "2021-12-25T22:45:09.821918Z"
    },
    {
      address: "0x7770949d5695a5523045c8234cac29e47f49e017",
      name: "CollegeKids",
      description:
        "A collection of 10,000 uniquely generated CollegeKids transported into the metaverse who exist on chain.",
      icon_url:
        "https://collegekids.mypinata.cloud/ipfs/QmTTBG8JZykRjrjcviAgcBwEyvjQyTganmPeQEnjSYaupc",
      collection_image_url:
        "https://collegekids.mypinata.cloud/ipfs/QmTTBG8JZykRjrjcviAgcBwEyvjQyTganmPeQEnjSYaupc",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://collegekids.mypinata.cloud/ipfs/QmT2Ha6s5zFPf7KVHxA87J9e3c5ubYHEWwTCB6MX15HKbu",
      created_at: "2021-10-29T04:10:03.797662Z",
      updated_at: "2021-11-18T06:28:40.269335Z"
    },
    {
      address: "0xf4b80a4c21e3559c435f6b70f5d2a9ba55fe2443",
      name: "QuacksNFT",
      description:
        "QuacksNFT is a collection of 10.000 unique Quacks that are algorithmically generated from over 200 properties across 7 categories. It is one of the first projects launching on IMX! Owners of Quacks will be able to play multiple exclusive games, mint their own 3D Quack, stake their Quack to earn $Quack and breed! The projects also support ocean clean up!",
      icon_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Collection%20icons/Quacks.png",
      collection_image_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Collection%20icons/Quacks.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://api.immutable.mantial.io/assets/imx/0xf4b80a4c21e3559c435f6b70f5d2a9ba55fe2443",
      created_at: "2021-10-28T11:00:10.184761Z",
      updated_at: "2021-11-02T06:13:32.748651Z"
    },
    {
      address: "0x0bd6bd860ee0fe244766850ba201ca1c82a9effc",
      name: "IMX Chibi Club",
      description:
        "IMX Chibi club is a party house of chibis where all chibis are dressed to impress for the upcoming halloween party. Buy your costume to get your Halloween Party Ticket now",
      icon_url: "https://imx-chibi-club.s3.us-east-2.amazonaws.com/Logo.png",
      collection_image_url:
        "https://imx-chibi-club.s3.us-east-2.amazonaws.com/Thumbnail.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://metadata.imxchibi.com",
      created_at: "2021-10-28T05:07:56.670141Z",
      updated_at: "2021-10-28T05:07:56.670141Z"
    },
    {
      address: "0xdf1a6b88b8c1c3a6f6eaf3f43c6b052ef94a662d",
      name: "GeekPandaz",
      description:
        "8888 GeekPandaz Hailing from Pandaria and the Wandering Isle, are humanoid Pandaz with a great love of nature and strong ales.",
      icon_url: "https://api.cryptocrappies.com/geekpandaz/tokentrove_header.png",
      collection_image_url:
        "https://api.cryptocrappies.com/geekpandaz/tokentrove_title.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://geekpandazmint.com/metadata",
      created_at: "2021-10-28T05:03:17.115172Z",
      updated_at: "2021-11-11T04:11:29.055556Z"
    },
    {
      address: "0xdf71ba122e3d1484864fe72d3fe4533dca12335e",
      name: "ToonCars Garage 1",
      description:
        "Where automotive and crypto enthusiasts collide. A unique fusion of interests our founders share. ToonCars features top-notch art and a blossoming community.",
      icon_url: "https://i.imgur.com/Zim7Ko6.png",
      collection_image_url: "https://i.imgur.com/UXY0otb.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://cloudflare-ipfs.com/ipfs/QmVqUKy5ed74HUgWyipsmqTqfqpnfjzspPpsW3XAQ1xfJW",
      created_at: "2021-10-28T05:01:44.476014Z",
      updated_at: "2021-10-28T05:01:44.476014Z"
    },
    {
      address: "0xf4fbc0490f0fc9451a604018b818cc3750a26ed0",
      name: "CollegeKids",
      description:
        "A collection of 10,000 uniquely generated CollegeKids transported into the Metaverse who exist on the Ethereum Blockchain.",
      icon_url:
        "https://collegekids.mypinata.cloud/ipfs/QmNYo95GCSkHJkHSVRvmSHHzHvy8c1zN6W8Rz6CzMq8wWx",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmTZyMG49C1J4ovZFHBVUTbVarf7qeoV4TpB5gNXgYPoei",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://collegekids.mypinata.cloud/ipfs/QmT2Ha6s5zFPf7KVHxA87J9e3c5ubYHEWwTCB6MX15HKbu",
      created_at: "2021-10-27T06:23:08.091823Z",
      updated_at: "2021-10-27T06:23:08.091823Z"
    },
    {
      address: "0x04792367709c5daea4fd781f558cba092695bbc0",
      name: "ToonCars Garage 1",
      description: "Testing for Garage 1",
      icon_url: "https://i.imgur.com/Zim7Ko6.png",
      collection_image_url: "https://i.imgur.com/Zim7Ko6.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://cloudflare-ipfs.com/ipfs/QmRuYczvvB9JrFQygu3F22qLUtQeMGHB1v5cXEXzrNpyHd",
      created_at: "2021-10-26T07:12:06.234733Z",
      updated_at: "2021-10-26T07:12:06.234733Z"
    },
    {
      address: "0x7b7a9ec1978e382983a5e6826e66efb5bda12218",
      name: "The Painter",
      description:
        "You may call me The Painter. I am an AI trained to create modern works of art using a custom deep learning neural network and thousands of modern masterpieces in my training set. I have created a collection of 8192 original pieces that live exclusively on Immutable X. An homage to the past, built for the future.",
      icon_url: "https://painterai.s3.amazonaws.com/prod/icon.png",
      collection_image_url: "https://painterai.s3.amazonaws.com/prod/icon.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://painterai.s3.amazonaws.com/prod/metadata",
      created_at: "2021-10-25T10:25:20.58155Z",
      updated_at: "2021-10-25T10:25:20.58155Z"
    },
    {
      address: "0x3205c066d0560546a9aaf922e8e2caf88a1ff71c",
      name: "IMX Toadz",
      description: "First Toadz Collection on ImmutableX!",
      icon_url:
        "https://ipfs.io/ipfs/QmWChoZajGwgMuNetYb8tBmYtwpunMV7vFxhKLRtbxzuJD",
      collection_image_url:
        "https://ipfs.io/ipfs/QmWChoZajGwgMuNetYb8tBmYtwpunMV7vFxhKLRtbxzuJD",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.imxtoadz.com/nft",
      created_at: "2021-10-25T10:09:18.568203Z",
      updated_at: "2021-11-01T23:34:03.337716Z"
    },
    {
      address: "0x35d2ab1e3a8a44e8bf7a0f6af7f1b109666be805",
      name: "Narcoz",
      description:
        "Narcoz is the first cartel to dominate Layer 2. Trade your way to the top and take over.",
      icon_url: "https://cdn.narcoz.io/collection/icon.jpeg",
      collection_image_url:
        "https://cdn.narcoz.io/collection/collection_image.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://metadata.narcoz.io",
      created_at: "2021-10-24T03:30:46.824448Z",
      updated_at: "2021-10-24T03:30:46.824448Z"
    },
    {
      address: "0xc623da01c7bf9078db5070589b74e6c31f448571",
      name: "Baby Ape Mining Club",
      description:
        "Bloock.Art is the first platform to truly combine art with computer science. We believe that the combination of blockchain and art is not only to generative art, but also to assist artists worldwide with expressing themselves in a more future way. By our powerful cloud general computing and AI services, artists can create more artworks of their own. Besides artists can sell their NFT artworks easily with the help of our BloockArt's commitee, art lovers and NFT collectors.",
      icon_url: "https://bloock.art/icon.jpeg",
      collection_image_url: "https://bloock.art/icon.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://bloock.art/api/v1/projects/blookart",
      created_at: "2021-10-22T07:01:04.438062Z",
      updated_at: "2021-11-26T03:36:53.917832Z"
    },
    {
      address: "0xc8dfb9a414b4f5c247740ef6b68dcdc9f717e78d",
      name: "Little Rocketman",
      description:
        "Collection of 9,999 unique Little Rocketman & Friends NFTs randomly generated from hand drawings, each fighting to earn the respect and authority of the world. https://littlerocketman.co/",
      icon_url: "https://littlerocketman.co/img/imx_icon.png",
      collection_image_url: "https://littlerocketman.co/img/imx_icon.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmUggF8ESyRvF7wMrLMkVNi5HRQrNE1wcXb6UmS2gdoPeK",
      created_at: "2021-10-22T06:38:42.138464Z",
      updated_at: "2021-11-30T05:06:06.206261Z"
    },
    {
      address: "0x4ebfb80f9144713a690ec5a6485d0d4ed65194cd",
      name: "Bad Grandma",
      description:
        "Bad Grandma is a collection of 10,000 randomly generated & unique collectibles living on ImmutableX and carefully chosen by some of the greatest grandsons who love their grandmas. https://badgrandmanft.com",
      icon_url: "https://badgrandmanft.com/img/imx.png",
      collection_image_url: "https://badgrandmanft.com/img/imx.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://nftartisans.mypinata.cloud/ipfs/QmZcteQpWPoM7hN52ErMrVFTKky2Xckij3otoj41R738u2",
      created_at: "2021-10-22T06:34:31.062927Z",
      updated_at: "2021-11-30T05:07:47.038513Z"
    },
    {
      address: "0x9a7c2f7316052a8fdc843107752920b4cc01a5e8",
      name: "Crazy Cranks",
      description: "10 000 uniquely generated crazy cranks on the blockchain",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmczBQuVxU1oNzVwovKgKNDpG81c9A6CkwaGEC84wyBgHP",
      collection_image_url:
        "https://gateway.pinata.cloud/ipfs/QmczBQuVxU1oNzVwovKgKNDpG81c9A6CkwaGEC84wyBgHP",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmVgXLtHx9MmAu8Kpesk7GciHmxJPUqgZqnn6FuMjKb88n",
      created_at: "2021-10-22T06:23:42.240976Z",
      updated_at: "2021-11-23T06:35:29.94814Z"
    },
    {
      address: "0x541bd11e1c01d4db1ebd62b88d9960f1b2afe92b",
      name: "Sadge Badge",
      description: "",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmXLoNQfVJSHHnYQzrPR8DqRXh4uPa4WmtisPmFKLKFjJi",
      collection_image_url: "https://sadge.co/images/logo.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://gateway.pinata.cloud/ipfs/QmWjWqn9SArAm9SAVYC567RjVTrgsLoypM4CDfAnqKZDDw",
      created_at: "2021-10-22T05:19:18.127546Z",
      updated_at: "2022-01-08T11:15:33.914358Z"
    },
    {
      address: "0x3d5fcf081777b404a18f76dde001a6b5edf387c7",
      name: "Moonshot Garage Project",
      description: "",
      icon_url:
        "https://ipfs.io/ipfs/QmUSfPej6DYx7jRymDxu7MRcyQtrFhQtqp463rn54nRbdM",
      collection_image_url:
        "https://ipfs.io/ipfs/QmUSfPej6DYx7jRymDxu7MRcyQtrFhQtqp463rn54nRbdM",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://token.moonshotgarageproject.com",
      created_at: "2021-10-22T01:06:03.628465Z",
      updated_at: "2021-10-22T01:06:03.628465Z"
    },
    {
      address: "0xaa84c36e454e632c6880d2563986be75718fbc6f",
      name: "Angry Orc Club",
      description:
        "10,000 uniquely generated angry orcs, for use in our upcoming provably fair fantasy game built on the Ethereum Blockchain.",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmeQjkM4dKnTz4crD5yEgRRhYu3ep4QzYUMopJrEwrUJSv",
      collection_image_url:
        "https://orcs.mypinata.cloud/ipfs/QmVRAxQBerJsQ7xcuwa5k8jRUz2rNP99DgkeszvEC2fNK4",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://orcs.mypinata.cloud/ipfs/QmdBubEe7TPCNYRaqMr4Vjd73JB9eVyDaSRaqQ2d7ui9Bn",
      created_at: "2021-10-21T00:40:29.953493Z",
      updated_at: "2022-01-12T01:45:39.179903Z"
    },
    {
      address: "0xe8e1b3125372e4912773357691aeb7c305584751",
      name: "TikTok Top Moments",
      description: "",
      icon_url: "https://tiktok-metadata.immutable.com/logo.png",
      collection_image_url: "",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://tiktok-metadata.immutable.com/0xe8e1b3125372e4912773357691aeb7c305584751",
      created_at: "2021-10-18T10:38:08.41086Z",
      updated_at: "2021-10-18T10:38:08.41086Z"
    },
    {
      address: "0x23898c5de23318a8140812c517ead572f42a9540",
      name: "Lucky Dog Club",
      description:
        "The Lucky Dog Club is a dog lover club with NFT collectables. There are total 10,000 unique Lucky dog NFTs \u2014 unique digital collectibles living on the Ethereum blockchain. Visit www.luckydogclub.org to learn more.",
      icon_url: "https://www.luckydogclub.org/icon.jpeg",
      collection_image_url: "https://www.luckydogclub.org/icon.jpeg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://www.luckydogclub.org/api/v1/projects/luckdogclub",
      created_at: "2021-10-15T08:52:59.144187Z",
      updated_at: "2021-10-28T05:16:21.800638Z"
    },
    {
      address: "0xd278f51207d30cd9616ad0841a7486eca16e1f4a",
      name: "Land Loot",
      description: "landloot",
      icon_url: "https://landloot.org/icon.jpeg",
      collection_image_url: "",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://bloock.art/api/v1/projects/landloot",
      created_at: "2021-10-08T07:50:29.163389Z",
      updated_at: "2021-10-28T05:16:41.017641Z"
    },
    {
      address: "0x8d307ce47cd190aa8d9ecd3d533894517e994cd0",
      name: "Semblar",
      description: "The Metaverse, Decentralised.",
      icon_url:
        "https://res.cloudinary.com/ds2eaeuin/image/upload/v1633553201/Semblar/logo_kppffb.png",
      collection_image_url:
        "https://res.cloudinary.com/ds2eaeuin/image/upload/v1633553201/Semblar/logo_kppffb.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://ipfs.moralis.io:2053/ipfs",
      created_at: "2021-10-08T07:48:18.316637Z",
      updated_at: "2021-11-13T10:45:59.815198Z"
    },
    {
      address: "0x5f32923175e13713242b3ddd632bdee82ab5f509",
      name: "Moody Krows",
      description:
        "Moody Krows is the first randomly generated PFP NFTs collection of 10,000 on Immutable, a Layer 2 solution on the Ethereum blockchain.",
      icon_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Collection%20icon.jpg",
      collection_image_url:
        "https://storage.googleapis.com/wired-glider-326915.appspot.com/Collection%20icon.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://wired-glider-326915.uc.r.appspot.com/api/immutablex",
      created_at: "2021-09-30T13:16:43.968541Z",
      updated_at: "2021-10-22T07:06:58.799012Z"
    },
    {
      address: "0xba5d907b75af5becf9fa68d1ea9823963f092176",
      name: "CryptoCrappies",
      description:
        "Combining vivid colors and a variety of extras, BossShits feature digested versions of your favorite coins. These Crappies nailed their life instead of shitting on it and therefore made it to the top.",
      icon_url: "https://api.cryptocrappies.com/logo.jpg",
      collection_image_url: "https://api.cryptocrappies.com/logo.jpg",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.cryptocrappies.com/bossshits",
      created_at: "2021-09-28T07:53:18.053135Z",
      updated_at: "2021-09-30T09:10:47.567497Z"
    },
    {
      address: "0x9c77027170eda1808262809771067bee23830050",
      name: "Astrobros",
      description:
        "10,000 randomly assembled, animated pixel 'bros, blasting off into dimensions unknown! Their quest? To become Mr.Omniverse, crush the Skeldar and establish a muscle beach on every stretch of sand from here to the Universal Core!",
      icon_url: "https://api.astrobros-nft.com/collection/icon",
      collection_image_url: "https://api.astrobros-nft.com/collection/icon",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.astrobros-nft.com/bros/data/imx",
      created_at: "2021-09-25T08:46:51.938091Z",
      updated_at: "2021-09-28T07:46:21.299156Z"
    },
    {
      address: "0x4bc88ecdeb1d8af4375d96c4bc92021f3a4a337b",
      name: "Friendly Neighbourhood Buds",
      description: "",
      icon_url:
        "https://cloudflare-ipfs.com/ipfs/QmXUSdm3KDTjTN3SWtDZJYBcccc9Xb4Ctx6vT8D1NcFriw",
      collection_image_url: "",
      project_id: 10008,
      project_owner_address: "0xf651c43ba6c694724f77147c0336b532ae27e67f",
      metadata_api_url:
        "https://ipfs.io/ipfs/QmdXi8pozx1RihqCy2bbHt1avubDbdb91racRFwBzGfksG",
      created_at: "2021-09-24T12:00:53.633701Z",
      updated_at: "2022-09-16T05:13:41.456115Z"
    },
    {
      address: "0xfe810b206c6aea5975140934db5d5a77c5515286",
      name: "Unfamiliar Territory Founder Series",
      description: "",
      icon_url:
        "https://gateway.pinata.cloud/ipfs/QmYZ8NWRtUMQ5y1VQiJ8ESjf7C4GBmFzpC2auxd7Tz46JT",
      collection_image_url:
        "https://unfamiliaronline.mypinata.cloud/ipfs/QmU3VDFz4GsreWduSm5JEiqPbKWGWc8ceeRDkmK891A5Ap",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://api.unfamiliar.online/asset",
      created_at: "2021-09-23T07:17:16.253635Z",
      updated_at: "2022-01-06T09:25:31.223893Z"
    },
    {
      address: "0xa7aefead2f25972d80516628417ac46b3f2604af",
      name: "VEVE",
      description: "Veve Token - Production",
      icon_url: "https://d3bu0v2u3oz979.cloudfront.net/veve-v.png",
      collection_image_url: "https://d3bu0v2u3oz979.cloudfront.net/VeVe-logo.png",
      project_id: 5,
      project_owner_address: "0x027e548e441cf4391bdaf544ee0fa6e39f092933",
      metadata_api_url: "https://api.prod.veve.me/api/nft/metadata",
      created_at: "2021-09-21T08:43:37.629931Z",
      updated_at: "2022-08-24T08:59:06.74892Z"
    },
    {
      address: "0x184612188346bf155f40861c3e72ae54e87358e6",
      name: "Kolex",
      description: "Kolex - Production",
      icon_url: "https://cdn.epics.gg/assets/icons/kolex_icon.png",
      collection_image_url: "https://cdn.epics.gg/assets/icons/kolex_icon.png",
      project_id: 12,
      project_owner_address: "0x462f33cbb0db7399940b1363c7767f811b21a998",
      metadata_api_url:
        "https://api.epics.gg/public/v1/ethereum/metadata/0x184612188346bf155f40861c3e72ae54e87358e6",
      created_at: "2021-09-21T08:36:26.844861Z",
      updated_at: "2022-01-24T05:31:44.373121Z"
    },
    {
      address: "0xcdb185260f86808b875005540ee4a36a28a05d52",
      name: "Photocentra.com",
      description: "NFT stock & art photography marketplace",
      icon_url: "https://photocentra.com/img/logo500.png",
      collection_image_url: "https://photocentra.com/img/logo500.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://photocentra.com/ajax/get_photo.php?id_photo=",
      created_at: "2021-09-20T10:24:35.622623Z",
      updated_at: "2021-09-30T09:16:54.576795Z"
    },
    {
      address: "0x41ff943a5a31652a33cb23fb942769abb3dbaf97",
      name: "Swift Mint: Images",
      description: "",
      icon_url:
        "https://cdn.discordapp.com/attachments/879249079618650153/887861357339369522/IMXICon.png",
      collection_image_url:
        "https://cdn.discordapp.com/attachments/879249079618650153/887861357339369522/IMXICon.png",
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url:
        "https://frictionless.eastus.cloudapp.azure.com/metadatas",
      created_at: "2021-09-03T11:13:17.709329Z",
      updated_at: "2021-09-17T06:06:19.997089Z"
    },
    {
      address: "0x1b0cdc9d03acfa86bed73697e2fef389e2a927ca",
      name: "Islands",
      description: "Islands Production",
      icon_url:
        "https://pbs.twimg.com/profile_images/1437888798247972864/-Kd4S9on_200x200.jpg",
      collection_image_url: null,
      project_id: 67,
      project_owner_address: "0x0000000000000000000000000000000000000000",
      metadata_api_url: "https://backend.islands.xyz/api/immutablex",
      created_at: "2021-08-07T02:39:30.8153Z",
      updated_at: "2021-09-17T04:52:22.849572Z"
    },
    {
      address: "0x56a900b85d309e0a981d59377ea76f12dcd4b8de",
      name: "Guild of Guardians Other",
      description: "Guild of Guardians Other",
      icon_url: "https://miro.medium.com/max/3150/1*uZJEv6HpPe_PLkAVqFIxlA.png",
      collection_image_url:
        "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Tokens/Token_Guild_Mythic.png",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.prod.guildofguardians.com/api/imx/nfts/0x56a900B85d309E0A981d59377EA76F12dCD4B8DE",
      created_at: "2021-08-06T07:03:47.378274Z",
      updated_at: "2022-07-07T11:40:21.44662Z"
    },
    {
      address: "0xf797fa8b22218f4a82286e28a2727cd1680f4237",
      name: "Guild of Guardians Pets",
      description: "Guild of Guardians Pets",
      icon_url: "https://miro.medium.com/max/3150/1*uZJEv6HpPe_PLkAVqFIxlA.png",
      collection_image_url:
        "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Pets/Cadmus/Thumbnail_Pet_Cadmus.png",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.prod.guildofguardians.com/api/imx/nfts/0xF797fA8b22218F4a82286e28A2727cd1680F4237",
      created_at: "2021-08-06T07:01:31.116402Z",
      updated_at: "2022-07-07T11:40:22.100433Z"
    },
    {
      address: "0xee972ad3b8ac062de2e4d5e6ea4a37e36c849a11",
      name: "Guild of Guardians Heroes",
      description: "Guild of Guardians Heroes",
      icon_url: "https://miro.medium.com/max/3150/1*uZJEv6HpPe_PLkAVqFIxlA.png",
      collection_image_url:
        "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Heroes/Lia/Thumbnail_Hero_Lia_Base.png",
      project_id: 2,
      project_owner_address: "0xe6d2b07c24e364adc527124f5ba2ae4debd6d285",
      metadata_api_url:
        "https://api.prod.guildofguardians.com/api/imx/nfts/0xEE972Ad3b8Ac062dE2e4d5E6Ea4A37e36c849a11",
      created_at: "2021-08-06T06:52:25.583438Z",
      updated_at: "2022-07-07T11:40:21.424494Z"
    },
    {
      address: "0x4764bc088a27f490353e8cf1558ba02fdc418c65",
      name: "Kolectiv",
      description: null,
      icon_url:
        "https://kolectiv-public.s3.eu-west-1.amazonaws.com/assets/1024icon.png",
      collection_image_url:
        "https://kolectiv-public.s3.eu-west-1.amazonaws.com/assets/1024text.png",
      project_id: 12,
      project_owner_address: "0x462f33cbb0db7399940b1363c7767f811b21a998",
      metadata_api_url:
        "https://api.kolectiv.gg/api/v1/immutable/metadata/0x4764bC088A27F490353E8cf1558ba02fDc418C65",
      created_at: "2021-06-04T13:34:09.711884Z",
      updated_at: "2022-01-24T05:32:07.541046Z"
    },
    {
      address: "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",
      name: "Gods Unchained Cards",
      description: "",
      icon_url: "https://images.godsunchained.com/misc/gu-sigel.png",
      collection_image_url:
        "https://images.godsunchained.com/misc/collection-cards.png",
      project_id: 1,
      project_owner_address: "0xe0e1edcc95deb6db19f0618796bac59abfc2fe44",
      metadata_api_url:
        "https://assets.prod.prod.godsunchained.com/nft/metadata/0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",
      created_at: "2021-03-25T07:27:36.496448Z",
      updated_at: "2022-11-24T00:29:51.584067Z"
    }
  ];