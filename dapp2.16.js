  // Ropsten
  const NETWORK = 'ropsten.'
  const BOX_ADDRESS = '0x49700447bd9ea896f2f999c1bf20eb630d2c65e4'
  const PIZZA_ADDRESS = '0x034bca7eb8d705f2a52bba52b94e98161d5370d4'
  // // Mainnet
  // const NETWORK = ''
  // const BOX_ADDRESS = '0x8f5AE25105C3c03Bce89aE3b5ed1E30456755fAb'
  // const PIZZA_ADDRESS = '0x4ae57798AEF4aF99eD03818f83d2d8AcA89952c7'
  // const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'

  const BOX_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "prePurchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "purchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalNewPurchases",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const PIZZA_ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "boxTokenId",
          "type": "uint256"
        }
      ],
      "name": "isRedeemed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "boxTokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "recipeId",
          "type": "uint256"
        }
      ],
      "name": "redeemRarePizzasBox",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  const WHITELIST = ['0x0048D02963b97445a012Ad6D44Bd38A0239C5B88','0x00bb9D27Dc01603FAa422E31F51e642C558b9ec8','0x0112e5b880503d80887e9a8713027071117ab707','0x0112e5b880503d80887e9a8713027071117ab707','0x0112e5b880503d80887e9a8713027071117ab707','0x01bd8aac958c6e728557bcac756273ddd65bf19c','0x01cB023186CAB05220554EE75b4D69921DD051f1','0x041E42371BD0DdF93c0dFDeAd7e89B3CC9bD9a91','0x0459fB6Db4D1F79F4938A0B077d3aE02405e2525','0x046bBe099CfA0b6cc71d59D6E4Cd38c5d0eEF71b','0x046bBe099CfA0b6cc71d59D6E4Cd38c5d0eEF71b','0x060c8C3e672f85c9cA86d7c3d15c27730b7A6E87','0x069383C54a36be476f53395135E3a5D2864F7870','0x072f38201348Cd61e39f1C41f05295466DCf35F2','0x076a7Bcb5f6803ae24CeCDEDc1f9054E13167E71','0x07F7aD934f81be64046f5E1A792D6c26Bb60972c','0x07F7aD934f81be64046f5E1A792D6c26Bb60972c','0x081E9623A73F4eD41d60ACbD0EF34A66C82c8B99','0x085527735711A744A18d858696aEd46dEaf616BF','0x08971491517fa2b7ae2b7606b4820588b3ebfa98','0x08971491517FA2b7ae2B7606B4820588B3EBfa98','0x096D22122236B3E62D934EC8354Ef37230F5C9E6','0x09DE262108795dB0037323B95e284825AC67516E','0x09ee3a243463f3ad0a276db78176de6ce28dab0a','0x0a3eb29ee9dc31901f201f1a803b977d9dae7172','0x0A3f54c019EbF918CfAA12b7C5ab84956ac43458','0x0a48B91c1560F0B5723ed10BeC1eD39D6eFD78be','0x0a84069C260e28E0bB1C7f3649b8180022aDcE17','0x0B53c82AE0A5caa911AA0C787Ec973cf65D6a6fF','0x0c0265f1fb8e226564dc130d089525ad57d315e5','0x0c0265f1fb8e226564dc130d089525ad57d315e5','0x0c1Bd9C2019e206963A886A2c1E7a0F11A0b634e','0x0c5d6982D0046E50a0eBA1040B7125ffD6DD4237','0x0d0722ad65bEd15211101C0e2191e76ADEacE9B1','0x0d2Ad2809FA12955531Bda8aC76485DD6BfE95c5','0x0dE9BE0C34634896ACc37c1a0bC7FFea1A1D2C96','0x0e2D124cBe57a2805D4ADe75061eEd5C31Ad4A7c','0x0eb92BC19020688414C577C6372cE128CFa5f02B','0x0F25809d8E83AbC5Ff0f4Ceb8A8C39c79746d0B6','0x0F398F8E611C5db4c0a60B0Db14ddd06DC0BE862','0x0F398F8E611C5db4c0a60B0Db14ddd06DC0BE862','0x0f7D8238185f907D5bc98cE87fff65b92CaF0C09','0x0f907E5FB3605f0aE8e60aFE8Ca4a289A2981b43','0x0fa8ddfc7719f1385095b2484b6e4928e0a0435c','0x0fb90B14e4BF3a2e5182B9b3cBD03e8d33b5b863','0x10876eba7877613F2204C9B6e68B36e24f5A7e1e','0x10876eba7877613F2204C9B6e68B36e24f5A7e1e','0x10876eba7877613F2204C9B6e68B36e24f5A7e1e','0x10b54d8e8E7EA708E5C71915401261F92E03B376','0x10e50be810a2914ee1896311Ccfb041b6A6bb7c7','0x11EeE6CDFee403Ee838D9AA7E10f8449AD7e6402','0x121c99d11809E44F2874e4142743fA3618936040','0x128e482c59E2370d65Cb273a0cf8e2AC0629d9a1','0x147b0BF026B15a8f7fDaBc4c3CD3A42Fdbb2f6BD','0x147b0bf026b15a8f7fdabc4c3cd3a42fdbb2f6bd','0x15cDE990eD76289Aaa17464fA29876a4F881F257','0x15d51e51CAF5585a40cB965080098Bfb68AF3336','0x1660207BF5681c9cDB8AFe3A16C03A497A438753','0x16ffe3938b69132c72a5b0250708792db72971b4','0x1b4bD7BCf2463DDe4eD9ABB38f35e2E1e7452f5E','0x1b6e29460979e09abbbbc66c1b98a184214d8c23','0x1Bcf05FBbF3dBde262bc439A3Cc4cCfb39eAc830','0x1C3046F0cabbe1D82f3B78f3B7747CA12Cc271Fc','0x1C3046F0cabbe1D82f3B78f3B7747CA12Cc271Fc','0x1cB720f7BDf9F3CF334b3396Ee1D081638a14B4e','0x1cB720f7BDf9F3CF334b3396Ee1D081638a14B4e','0x1d130d29b3906555030452f0f29cdb0b9750fd21','0x1dBFb61Fe4ec07E4c4F4fd43dE1abEd7f7DD3DC9','0x1e8b7dea2b3fee688a7b693c4713021dfa3ddf08','0x1eF03c6B2d2102ef4cc3fB71723351E1f5135d0C','0x1F2839c9Cd96442C492aEE69A7F4CEA5ae1BEaEB','0x1fbe71c76320faf71177647a7b0c2da263271B89','0x1fbe71c76320faf71177647a7b0c2da263271B89','0x20A81A3307E0847F20c42d927216638F21f9B8c1','0x20FA8F205Bc0971e699B16a01b828109356Ff76d','0x21018ca8155fE46b435D52B0a1fc90E5E629f8Bf','0x216FBB3cae4c5F7C5efD94F6C71d7F52dA7c7Be8','0x216FBB3cae4c5F7C5efD94F6C71d7F52dA7c7Be8','0x216FBB3cae4c5F7C5efD94F6C71d7F52dA7c7Be8','0x21d7a1A909620AB6aA7BbC82451A40aE74631A67','0x222348568A732B855d723E9b774cE0E15Bb7F8C7','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22755543d172D0E7F52536520813d44d2A74C03B','0x22BAFA0694d73fB7E774290135B98D15E2486508','0x23A2Fa0E0dcC3B4E718b1a94818e5B123D89B75e','0x240f76cc1f4b36c8c1b053f716be0e2eb8cfdc15','0x245482FD0a5A34771F221432Ca0CC1d64587D89C','0x245482FD0a5A34771F221432Ca0CC1d64587D89C','0x24E12C705D6A6FbAd19f4a84cd0B4c1c67646708','0x25031fFed42a05d7DEa7a37308819C7f02dd7C03','0x261890033FD1afb025df4e43A3e593df718443F7','0x2649Bd829e37463B27135D6B11ba75fe0fb24108','0x274433963a192F47E850E3A9c1df91728c6c7595','0x2773cb2d13c6ad6099c5f92410416809baacde78','0x27aa9F8c0728838e7795643DB0a58C37f4a88315','0x27df2658A62E22d3e7A75FbAe3D625Cb02CC636f','0x27e121bFB21f631496Ad5b9783D049FaCbdd411E','0x28265b4188ff587e5cfe1155606026cd2ccd243d','0x28af3356C6aaF449d20C59d2531941DDfB94d713','0x28af3356C6aaF449d20C59d2531941DDfB94d713','0x292C05A5d77e66D727629D14B1E0F334D57a9225','0x2969c63fc96a8ac4c8f658c2d1427867d3bea69f','0x2aA8C3aA07a3b6968a54749F0d770626239C0F43','0x2aA8C3aA07a3b6968a54749F0d770626239C0F43','0x2AC0B77652cfb7ebdE8190d7c3E1a41E18dCc66f','0x2B6247079ddD8e81B34093e911284253bd455EF6','0x2B6247079ddD8e81B34093e911284253bd455EF6','0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC','0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC','0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC','0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC','0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC','0x2CdbF64c0327a731b53bDD6ce715c3aD6BA099C7','0x2CDde5499D7131a7ad3d4653f326c4cB245Bd319','0x2CDde5499D7131a7ad3d4653f326c4cB245Bd319','0x2D66F9f52b173Eb6F64B740fe67913D0F5ee4436','0x2D948147074f046F6d1E4DFc2E2ab756BFa7431A','0x2D948147074f046F6d1E4DFc2E2ab756BFa7431A','0x2F075618681D45458aE20E17ca3CCf1C797d6E1a','0x2F4A27D3F5ECbD350BbcF3bc4dfD4b23B34527d2','0x300da191248a500b2174aeD992d6697BF97F9139','0x300da191248a500b2174aeD992d6697BF97F9139','0x324110e8A2f9D0D93ba9cba21688540b39cb79cb','0x325E0A8FcAd252f98B15E4B93A27D1389381f613','0x32B16CbCb8A2044417AC2D5b2422732015BE1301','0x3335cc8bda40fb5a5f8db1d0011dec98728d81e1','0x3335cc8bda40fb5a5f8db1d0011dec98728d81e1','0x33484678A59581100d6266d04910a7472eEF55B5','0x33b48210E5c1E6A1b214Ec3582538adA7102e103','0x33C8b8F21B44AB1805aFC93545a40dC39Fa07BC3','0x340A61C9f46b585f4430a236Be98A7021AA71703','0x3423010139f86f9FE84792A310113b438d004271','0x3423010139f86f9FE84792A310113b438d004271','0x342Ce009ca1DCFfF7219D86875891B8B89768ebB','0x34Abde12100336C55a759852AB081401Da03dc2a','0x34Abde12100336C55a759852AB081401Da03dc2a','0x36168D5d7D5B5e66Be7fDd0C353D1F3Ec074339c','0x367F0e332D74F71bDA1436bd50dBDEe0503C125e','0x37b76cE4a768bF4954e787B5ee4bED550811A22A','0x37ff6092225a5062300023514b47ee36074fecd0','0x37Ff6092225A5062300023514b47Ee36074feCD0','0x380A38Cca9cC898ddF8bE3B95D1B3af93707DF98','0x389654572305986F0f96D1f87B7fAe9278613411','0x38C26D3286E2a6458252D528417a1FbA84e0C2BE','0x39af86b922e466B1363FE6a04d0b2f8994a02a6E','0x3AD9e46849ac275FB8E829c7761A8B03B81dB11C','0x3b15a5f73535Dc6e27C1eff6950cBf3D03ef0979','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3bfb159c76833bc019e7c93708f26f318ad61504','0x3bfb159c76833bc019e7c93708f26f318ad61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3BfB159C76833Bc019E7c93708f26f318aD61504','0x3C2C1c48da5B09fCc7FCa261ad666429EC758030','0x3ca3eAdB1c7573f0Fd4Acf6679760675D07EE621','0x3CCd6131d1c5FE2bd277e0da6bbB63C4fb35547b','0x3D2198fC3907e9D095c2D973D7EC3f42B7C62Dfc','0x3d2661546781e092c69fc1154de99cc754f847f3','0x3d57eafdd0b549dffa8318577c8525930d505997','0x3eE06850C546672C3348bc9802291138ed2A6088','0x40825400fC5B820AfD0784b402b9eD4955aDC01b','0x415df528c33B8ad580FEedF5EfA3Afc3eEEfc17b','0x4334fE21C0e760f7579b8cA027cDe2F2e69680df','0x44D89C12975F2173F38BC8F81dAFD18b5e269642','0x453a6b83ba2dd467004f96b3ae5dd769f3da0995','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12','0x45ffADB496166a0cb634ce69C46fd57b8FED4658','0x461E722393361b28707f0D5aFf8981d127fD9d2a','0x46DD7DC34FD7326C8584EcAD84A75b2d107B018b','0x47ff511c763abbc477526dd3c02bc022b7e6932d','0x48fb74F1518E99de922333fE8444f800ad37A57A','0x4906f93826a17B796b7D406Af2efaB2eaEB7723f','0x49E26982E64dE40f68714B6E90F7eF50b1C62082','0x4aD4339a2FbBbA08E0cf5A75cB68e2C1deaE25c1','0x4aD4339a2FbBbA08E0cf5A75cB68e2C1deaE25c1','0x4b05a8D347e491115B51bFC474F87406C1ced927','0x4b05a8D347e491115B51bFC474F87406C1ced927','0x4b05a8D347e491115B51bFC474F87406C1ced927','0x4b05a8D347e491115B51bFC474F87406C1ced927','0x4D80e179018588178EB59b36f1f9B2110364BB6a','0x4d8B1B88499a2Ff701678A5f648bc365F5D41694','0x4E4fAb3De995F55ADf2e2c99C2b44070aeebd6BC','0x50cd0c5fc8fcfdea09083dc89fba303c518cc1bc','0x51f944Af16ED28c604b8cBbC5361912050cFC845','0x5297233BbCF7B58356Acf5e3B4d4F79821491B2E','0x52f71b4185458248C0e0a777aEA130d922462a0B','0x5365b4472a6E5D8eA296E38f4117b5BFFA61a525','0x538EA2312452F8F181Ab63aB96464C364A5C3453','0x54588Aad15b92D53fC8cFB3c6876C74B52D23491','0x54be9c677e243572ab91ada065ceed12b7e578da','0x562991460b569dB7bC0E6303416e48726b0F91a5','0x5696A8ba76fF5c6F6E1e46C20925F5a056167a2b','0x56dd5543e3D0cAd9a5c9fC6410EC4b1e6028a65f','0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E','0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E','0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E','0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E','0x58F7CdF32Be333e5A5C7FF8097742aC5535b7A65','0x59e65e3ba06eb96154a9098dcd4a0d4b24a9c6f8','0x5B8b10D99cB26200cBfd0C65d2543361FEc0Dc5D','0x5bFeb4Ca066c9458842AC89b6e5cd983bd1a1034','0x5C1444B4602Bf8e8B6Ab332b1CF71F504f5b4C6e','0x5C99B3890b172dd750aa05E9ea8147DdD8c9Db22','0x5cc5285df83F448af9569D788Feb2CCA9Fd418D0','0x5D474c3fcCB02fCaf8446cbcC2E507A113E2ECb2','0x5D51685b39942BFC6dcAD75D1d81248B9f92D0f8','0x5dB1db464BFA7a99e8774824192E9cEd09f2a266','0x5dc61faeccc3d45b736d388c3644e5a6c0c6d919','0x5eD7f34bCdBD6d8BC0A30913988a943b823d0E58','0x5faa31Ea9a79a8E4fa391dE7cAE5adC9B4b02833','0x5FBc9D75527A10892EEa6A161e0A3B6B72718349','0x5FBc9D75527A10892EEa6A161e0A3B6B72718349','0x602D2a713ECe658a76989F4CED1bD6179544E7aA','0x610199Bb6FcfCB288710a51337CbAeE9489B8d39','0x6194106E25E805c13461E761A170B71eC604A036','0x625fC4878A9086b017c6Bb5CB14310Ff78c62cdE','0x62E4df75e2BAaE9bdd07270ddbD22adFc8728E22','0x62FA652a839152c19A24778eeddf391C49AD0FE5','0x63C69d9dBCDE24b3057B3E850334AAbc421369dd','0x63ea0CbC3B601b325be6618C44B94e43F16be40e','0x652D7E1B706b10DE0bFEe179C1CC41DF73D3ED34','0x65B4B33E5E76aD345623fB1f7581fB2e060Dcac3','0x67d2f9223fa307bb1dbef672aa0b9bd5e762c8d2','0x6C5AfF9b892d841B8Bc5De629a8c24805cEBc550','0x6cef15E37392F13d0873dc18497CA8087C681e01','0x6ed5a435495480774Dfc44cc5BC85333f1b0646A','0x6f590e5325014B9e0DA13E2dc0bBb710F8c89184','0x6f7707673417115D8D0810D3acaA4678D6D644Fd','0x6f81e8957CF63FA5Fc5f9EB6865eB50b9EBBe1FD','0x6f81e8957CF63FA5Fc5f9EB6865eB50b9EBBe1FD','0x709e5c0e4ddae6306fc6905060dd74699a8f9eae','0x70ee2c2600Ac7EC2Bf1eaa7F69747fA4D07c8261','0x7290d639A85e8d107a7D8e8E490788e47C49746d','0x73594B5F4B563A17C6708d0F6302Ac7061CbdeA7','0x73977b29c1EB03adC1fbeE719c7A13e66707F6B9','0x7514c98e42Ab83BC914411E18B7703f5C9699aE5','0x7514c98e42Ab83BC914411E18B7703f5C9699aE5','0x781714EC69cd6961621b0c0BA952F67A5E8D235B','0x79672c0123EcEec30198f3E83401156F2f4c789E','0x7a1682faf72e41e1e23a11a4cc248c1d4444eb9f','0x7A5F9d4E83DCcd1AdbEAb3cf40Ddab1B24e39b8f','0x7a5f9d4e83dccd1adbeab3cf40ddab1b24e39b8f','0x7A782C3A8f513621D9563e2c08c915d4fD239075','0x7A782C3A8f513621D9563e2c08c915d4fD239075','0x7ab6a4cf7c8221a1204b3b568b4b09f91bfd63de','0x7C6553933A471b43cE3a76A02245c5162C82522c','0x7C7181962654fd97149dced8b8B8b523dc5f81e5','0x7C8A9D9dDE058CFa14cCd698390252627F80eF19','0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090','0x7d2e4d645c0acc5a6bf596b612cab351864f4090','0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090','0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090','0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090','0x7dfdBBC4a2626D02DF1F2380f6BB9765b2B57f4A','0x7F27072b55CF22fD63eb7Ba100F44425486E471E','0x7F57b3bdE2BE9bD46dECFd27776FC9b75FC68c8B','0x808044f380ff53a236600a9ba9f515468b4604f6','0x80b5A3680d1476E7511f5111d6ff8759F5A063D8','0x828d3Fff01cf78C96495aB1bD2C1e1b1b2384A9a','0x82B1F29C5608238DF2618F996827933c0d844079','0x82B907d53Ef5d100c63921E09A7217Ce02B20903','0x8396781b7644B78611b488cfde15992e8912FfF5','0x83d709977BeD753756B82045270dEAeDa10A59C0','0x848AE001e8378A7409337453C1D8f5B779945578','0x854D7B77B762B2ca07b1Ccc21e2a19eB1ccC34C7','0x86063ce7f0dbed7fb21981c325389e9b980b59da','0x86455ac5cbe7a2ce8527638bf9691fbb4bace7a1','0x865c529F7053ADc50aC9d3efc54D71DB7b28907C','0x86a8A293fB94048189F76552eba5EC47bc272223','0x882F9364F015637b54a2702D6448E0979DC9B449','0x887b86b6b6957f7bbea88b8cefd392f39236a88c','0x887b86b6b6957f7bbea88b8cefd392f39236a88c','0x888bb0767cc8db41c947FdcB8254289e746d7fb7','0x88be3fa60ede9f532af10aba5690dfc254db929b','0x88e8F4d4476131A9D6CaE4c55E79c45328fecb3C','0x88e8F4d4476131A9D6CaE4c55E79c45328fecb3C','0x8953719eebD47d2eE651c69cee6717dCBfe47583','0x89e12425d3eDD174baB9A8677D3bcA8b7F34f1AB','0x8A6003f75845a896925ddA2D91d1959021c1bE33','0x8A70dffa67DA1Df3fACf5D7FC664DDe788d30A52','0x8A70dffa67DA1Df3fACf5D7FC664DDe788d30A52','0x8af0A75ab18fC7055BF60eBAB7d041fc0b462D46','0x8B7b042c5ea16F64cA55aeb6B0F8315B4Bd6Fb23','0x8B7b042c5ea16F64cA55aeb6B0F8315B4Bd6Fb23','0x8c2682E403B1Be886e59315c4C3c66468f2F1a10','0x8c5461D9b6992D12FAd3Ae70943066BD32f9A86C','0x8CA547a0898642C5FCB49b97FFc15e9DB667ba5F','0x8cE584fe9609fe2F0EFD1a8b9b7fc4846C32e679','0x8DD76FA2687A87B4FF6771f75f41Ba4DAb56784c','0x8E81Df3F82A10831E709899f61A84b3f7896D6E6','0x8Ed2189157E00b72D276f01DdBdbB1641b4a0118','0x8efac15412de4a7ebdb2a40013598fbd7f7197e8','0x8F3a3F37cd8A92e7e72E5248c56096590512C67C','0x904aF80Ed68Ce1FC54629b4cBCc9c77DF195C24C','0x90576ccf3db979d6a61d1d4f05f4bd96a6edbe0e','0x9080b37411aD0826FDC869f5c94095eD6f395D0A','0x90abcf1598ed3077861bcfb3b11efcd1d7277223','0x90AF0d6cA9BC34940d77E33F76Cc027B24285950','0x9226beDb6BB34181A3d79088D3B2015F70826b6f','0x9293C35D6e1524609b7221a1C9A8D52DC81BA62c','0x9309453b990c46C2E8F3f9c53FC53D530e76059a','0x9309453b990c46C2E8F3f9c53FC53D530e76059a','0x9309453b990c46C2E8F3f9c53FC53D530e76059a','0x9316C578bd5AfFb2063F404E6e0082D394DEd8ef','0x944f2a6Ec69c2780b1148a01571ADE971957C2E4','0x9469Fe56447b3C33f8eD7Fd957ecC848ECe647F2','0x9490eb162ecd2f97df5772417e3a4cb35deb14d8','0x94AD7f675A9B9eB70C5Fd987235d21bf7Ad73aBf','0x95270f71252AF1F92E54c777237091F9382Ca5D8','0x95270f71252AF1F92E54c777237091F9382Ca5D8','0x95270f71252AF1F92E54c777237091F9382Ca5D8','0x95270f71252AF1F92E54c777237091F9382Ca5D8','0x95270f71252AF1F92E54c777237091F9382Ca5D8','0x9576cb54B5013Da91c732071FEb4F8EB778a474C','0x9576cb54B5013Da91c732071FEb4F8EB778a474C','0x95A83be2b7bEc07CC68a06fd3F4c7d9710caAFe1','0x95a858f1AfC74187827e46e5950baa850059E858','0x95c92eaee6A72e2884335F8bB37fd1BBB8E31145','0x95fc03D96396f1dac5B505c142b828d9B91F4c66','0x969ECfCf06FFa6049d7ad79dA575fC618Ed91542','0x971257beA317043f6aA786F5b88d0142e524305e','0x97A46F7F48C0bf82Aacb3C076b10C8379Ab6B4Bb','0x9848e3eaCd3725A32cF523dbcBd2E88f5f7086bb','0x986e92868A27548a31e88f7692E746CD7E86f39a','0x99602a10a1E95a2432C1ac2c865A47249dE819a5','0x9A53B419C10fAb2B4fdFE3F4B1b6264573BFF195','0x9aa70c212c01a01900b04319aed3b0d85bd0e06a','0x9b4a4Bf4bf8979D9B767c1d8A787eE6d61899F65','0x9b57444687077e7aA8B8c6F6e5dB93A20385b046','0x9b57444687077e7aA8B8c6F6e5dB93A20385b046','0x9Be6e30F2077b0DFab37FB7d7ad59B4a727ade67','0x9DDaE9B61B790E16d4Fe92A6eDE1339dA0F9e7BD','0x9ddFa8c806ACEdaE4836e5497f4EB2e69efC1b52','0x9EC5c0dee95cE7F106010f3f636c4170d6D44D81','0xA01c2AA47d6835F23284C358179e9AeF1Bf41Bd8','0xA052b52e9D3B6B5Bc7a5cF565891CD1f3dabe819','0xA0EAfF944D33a1D4656d38534621A00FfBB37648','0xa3892Dd0604358481b73e93Ee4b302a65c0B1aB2','0xa43eE0DdAC31bF684c2d0A678964402322AD7210','0xA46B29B1F8a06139c606F1912291D23B0141Ae62','0xa488bE157BE1F3b6d38f8A2E4fbeD4BCED0Abb78','0xA582aBB1a4b499f783EAdf0fF5D8C28D67806C2e','0xA58b4A80dE82b889FF40e487c58208A429c77f88','0xa5BFD95294Aee7d66CF7C5981C26C5ae21D217bc','0xA6303f0c3601139B285dE92e5D6f7f0A00979064','0xA63aC74C662604e0a510DE4c7c6b7BABECB47F5b','0xA6ddaBF6497976248fEACAd696720bfD1e8cd2b8','0xa77bcf3BeB4972fFD56E7cADA6D6f526Ab369b98','0xa77bcf3BeB4972fFD56E7cADA6D6f526Ab369b98','0xa7A90BDE26A3Cb6132D07AB1fB0B8845C1401aB7','0xa7A90BDE26A3Cb6132D07AB1fB0B8845C1401aB7','0xa9f1efc2e4D79635B393cd35c5F4993A5fa36d8C','0xAa66a53e01698873D22d49C69c4829190975cc32','0xAaf06e46124f454F6249993231ffC3742418E8b7','0xaaF76872d7ABef0c30e3adb7788A1df51cc934Ff','0xAB43a7FF49943aCB0d77BbB8Bc1a2C911C473d48','0xaC3a4438737a55F792e1BCe3398bABbED88a63D1','0xaC4361f56c82Ed59D533d45129F407015D84702a','0xaD39C5Ce05E04898a53Df733C2F8045ba27f0A42','0xad99a67ac78b80e00c0b07bb3f526cd26b843611','0xAdD36e3C697aD0E38A4A85CbBdB4265CC5dD37B0','0xAdD36e3C697aD0E38A4A85CbBdB4265CC5dD37B0','0xADd432C18449e38bEA3666c664ddb344132511B6','0xaE606597B2A7117E967048e33c4eBF48762875AB','0xaF4FAaa7624bD39dEE06BEE0Aee498536f8da318','0xb26fd0Ce30598058E2F056f1f390685300f0965F','0xB28663E8C526c2d3cDD944FC7b62beE19A4c4826','0xB313147594A87c08a92630dB38222DCF2BFd5219','0xb3522064694ac9870dbf00eebc2712762193bb64','0xb3522064694ac9870dbf00eebc2712762193bb64','0xb395cC8d01e48dc26470837c7bbC617d1cB3f9Fa','0xB4dF5FE59FEBf485Ab55AfEBB1ad4FAdE73E95dc','0xb4F95eD2765AC368C2c6414617905012F30fB03F','0xB50A20A8AD550fDD3C05508367EBC978e60dBEFD','0xB62430dA854A60D4607CCb8C7C40cc5E08c463b0','0xB62430dA854A60D4607CCb8C7C40cc5E08c463b0','0xb68Fde50a1E6A8A67e88109b6447F48Ec1da11D8','0xb7d3a787a39f25457ca511dc3f0591b546f5e02f','0xba2039974a2E088344B4Dc804Da8EF88AE00EDD9','0xBa3E6e7918F2b767930294545988B8143257518b','0xbA9F68fBF20a0316D80287d7ABC9B1377D622121','0xba9f68fbf20a0316d80287d7abc9b1377d622121','0xbaaaBce9D8b6e0e7b26E107f33DdfC7Bd582E301','0xbAb1315f63134691634F722F9e393fBE4F12c2AD','0xbAFa0ecd146C524bF4033b2Ec04Cb5774B08F75d','0xbc13Bc5ec044E556E118605d48a378d9b6B554B6','0xBC2DcE626B7e580dE71D285F5BCe77eE59c3b9d9','0xbDEd72aDD80598aFd9E2EC3C5e5fe6Aab48b0f89','0xbeb793c9071a5cca352b195925a364a99ae91114','0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62','0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62','0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62','0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62','0xbf36fa1f2027eDB47bd0cf3e927d6770D8aF90dE','0xBFC060893BA6C97364Dcf9f18a5EC1371df8eD28','0xbfDb50Dc66C8Df9fd9688D8fe5A0C34126427645','0xc07A18c4ccE7F95A413515d3D137De47BcFfb495','0xc0Ea231F9d8CfDcDe60B86175D1513478EBBC94e','0xc0F030eac8b588817f8dA16b9a2CDCcc6451B25c','0xc1b2DBA39C139933407e958306aF223e8c0FB1f1','0xc2ba77069899a2409440CF3Fe9fd246E1f7b75fA','0xc2ba77069899a2409440CF3Fe9fd246E1f7b75fA','0xc2ba77069899a2409440CF3Fe9fd246E1f7b75fA','0xc336d15b27f955FA85Bd35Db907eFb915b4c7ff6','0xC504BC5bb9be55C67f0FfB010BaAFD27232D0D5F','0xc5901C3cecCB6f757eaB6eb8e08DC53C24851380','0xc5C8295E649d7027916Fa9B25CD68D505cDed08f','0xc6A3EC4C5b05D826F1Fc52B5E5aA5649f570EB27','0xc7096B7F9f3B3dDFebc8e7aF518123fD494B9Ccf','0xC710c02aFee8e8e6fDCf18cf75A742F1c19D7ef7','0xc78A95019C52aD9856aA764D6908E88D5b7930eE','0xc8b0d32bc09fb11c12c82582825c1e6b624822b8','0xc90575711Cb48b706b3c7f04EaE188A9F3c8C547','0xc9A900B5C828aC2d30bCa757aB3d5A5Dd9E74a73','0xca35e851010b34ab47b5d713285b314340e57c39','0xCA35E851010b34aB47B5D713285B314340E57C39','0xCA35E851010b34aB47B5D713285B314340E57C39','0xcA808bF81aB2936BEc73eb6aAE5DC242E2977a8e','0xca85460d23Bfb2e0079bAb5AAC84921D9D0762a4','0xca85460d23Bfb2e0079bAb5AAC84921D9D0762a4','0xcaF6Fd54fB74C95B28F5e94952ca21B46E4071cc','0xCB4664578a6B53c29caEc0b884eEAEd55364B40B','0xcB93aE25dF9941677bC9D963db0893b44626163c','0xcd56a61fE76C08a4B5eabC53C8B0f5e8c38a1c06','0xcDa491efFa43Bc60d2F42d691d044C70a5F62E43','0xcDa491efFa43Bc60d2F42d691d044C70a5F62E43','0xceA110CF871ba2F88262AAba1026C371DA930a51','0xcebc89688742E1A9729cCa67FB5585CF7Dd461C7','0xD07910BbCc742aB53Fc38a76BaE502205Ac0FFA1','0xD1a2BfFa66A23b657ccB4e35425D9Db6f667B29F','0xD1cAB5bb147d39408deC7cD5e350b8eef11c4102','0xD204c770572C43576De034EDe6Cb24F741E565E2','0xD3Fe5B4B0f47C2acE545Cb72b8101A77582D8953','0xD465b4453898d5BEA91680C76695A5D780c090AA','0xD651E2c626eE210Fc38676124D5007Ac822AD749','0xd6818e7e12e7cd3605617e4e9b6106c1948a8069','0xD732748071e38a48B4E9a3Ff1b2e7e87c0a39C2E','0xD75de3C85F422660ae02dE4736359a633D4433A2','0xd781a066abb723492ead2d844515114e3e87ca83','0xD7e93B64adE18f7108CF5D7Ab91c76937aA30116','0xd8b41B798A7CE8d30cbC87F007eCb95E1D3C876C','0xd9569448E7d38aF4C72622Ab43E9A1B57Caa1855','0xd9944161833d1E9cF162DBAb987191D6904a8dD6','0xd9b96995CAf12ed498A80ad8F8F18B58E06A04eB','0xD9fD88913de000ea7134c8Ecaa405C078C2ffdDA','0xDA681804c795Db1535Ab4f5cffbF93FAd2b0FD2c','0xDaBfCc13Eb6Cd8D8c997b62B9721f5509067bf68','0xDb5DfA07B25C2d6625ad0D06a8147a474CA3eBB9','0xdd3Efb212Cf8Ee1C8F2A6eFd10DEDDadFca65672','0xddE7B4e278d0934641374Af68c4538fa8e185339','0xddE7B4e278d0934641374Af68c4538fa8e185339','0xdE2a649A23AFC45A55A4d68B7CFDd683279b62f6','0xde504C2a463DB1f42F91688aD2cf66325C4b019F','0xdeaD02eBe7A4F35e7A40c9031E836D463f8579e6','0xdf382F9C26028C0da7C56a84d6d6D485843BFEA7','0xDF4f2Bf9461B623DfDe4e888da2bf3cAEE50e22E','0xe0562acBbd336D44241B33fb267EA0F2E480b463','0xE066D04aD4Ca5641460B19982F827F0C58f0dC36','0xE144882127D15C1814262B81788FCeF18240c531','0xE161B46C732CE9D3a892e2751048f0fCc9449F08','0xe1ed349b22cbccb72220a7e4d26960f5d4e3be36','0xE2375d3759ac543f37DE8C999757F800E8299bED','0xe241bedb5a6270c5a96219a52f59c7c3690ae924','0xE26f5B7624cf6De8EeF3d93643a2A06aE8A7ef82','0xe288a00DF4b697606078876788e4D64633CD2e01','0xe3035CBBaa34A6B8b50d9262da962a0c42531dDa','0xe3035CBBaa34A6B8b50d9262da962a0c42531dDa','0xE37468c8FA3d47b797BC99236903896D26Dcc9d8','0xe3a7de1d14a362509a75b9ea008469bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0','0xe3db7fc4c8f844c7ff068ceb889693718d93145e','0xE5ab4AF22e4e49A9FDBcF821fD477b69c37085e5','0xe73395E4cea1550Ec3C1A16A03ae2890ECEccBEb','0xe74418C3aBFd2ADD3b262F8df41cB8C27e2EF05B','0xe756bE1ca7176F90799be3F9A19e2371d881aF56','0xE8bC94a354E4873285a69BD43e65531484935578','0xE92A983b1ceAC8836502016acD337980d98E6B38','0xe96DEcB942b8B5C6bd57f08F146fcA12772cb1ef','0xe96DEcB942b8B5C6bd57f08F146fcA12772cb1ef','0xe9c14aa57ba5ef9e98bbb59c7de546d031ff06f8','0xEaC4a477C275dd968F29267CC02DE31574F6B0F9','0xEBd6432Aaba073e240Fb9147866E059756a4aa8b','0xebE790E554f30924801B48197DCb6f71de2760BC','0xebE790E554f30924801B48197DCb6f71de2760BC','0xEC1C5F91fF6Ca0351D0bE13C88B5d9553ebc03A6','0xEc8ce3c314814373AEb4Af1e8efe4F0A4C46226A','0xeC952ED8e7c2AA466cac36fD611D2E87Df1243D7','0xeCA848dd377f44fb158cE66414d2dCf5A6081495','0xee4B68C5F60356118a1E87d20E4c2c72fbAEeD70','0xee4B68C5F60356118a1E87d20E4c2c72fbAEeD70','0xEeeB4dC650beAa34d0b42e52B4d8Af5B01391d3C','0xf0D66765151D41015a85BA14e19a7749A94C7D2e','0xF1299faD31bfBAf693282F8c85FD8A02f237230d','0xF2f13624c73f07D685AC2d39E1a914D7d6E17911','0xF34D00cE3fcd8989A9d445fbba39FE752ed03550','0xF3D9281fa183B74F32B96E1c5244596045f4edE8','0xf3f56e4aec96ac5551615c71250febd7b8966b02','0xF40a4eFDfeE5C38df12D3DEaAA0BF5560c979Ab5','0xf42Ec73fCB7b32717f0Daf1e842FdA4597831521','0xf42Ec73fCB7b32717f0Daf1e842FdA4597831521','0xf42Ec73fCB7b32717f0Daf1e842FdA4597831521','0xF45AE6fAA62B08D7744928191d5f20892f7b0b29','0xF45AE6fAA62B08D7744928191d5f20892f7b0b29','0xf4A34b37e19Eae6dEeE2c150B2F25CA161B1E0F1','0xf4e69f5f8814e4A1dF6c6e89613E8fe1bE949b31','0xF5Ae101251a564C6259D2188fD4Bced9897Ee157','0xf65DB13b5ee031CB0ebBa525eF21aa6C586681b3','0xF98A854bc00eAa854894d79e11315A2114C58120','0xF9A3C9FFB7C8082685258Ca27f88602c1B85d0E9','0xf9EBE7F36fF3F9Eb99007E233C05eCc0974Dd2f5','0xf9EBE7F36fF3F9Eb99007E233C05eCc0974Dd2f5','0xfa366B7Ec198B725035dF7e551E6473c76891Db0','0xfa366B7Ec198B725035dF7e551E6473c76891Db0','0xFB3e5B87fe403C5C16914e890145092c079d695C','0xfCa3997B592AdE2277be071714d0A5aD46BA959a','0xFD94034c51eAE2ba3EdA74c09F5daAF5c3Fe77Da','0xfd97B29a11086807B4583589f5dD4c2Fb0df35F8','0xFDA5EEaef6D7004f9Cf509bbaC1904458891DEf9','0xFE242365FFd2EBBeAa65d55F91EdE576FEb8A9Fa','0xFea62440CA9C4C76b6cbB57d51053Fa35fAf03E5','0xff7918f8587e5c7289dcCc51cBE3bF20057d4e45','0xFfe296bbbc86dFaC056B42c6180d9f8b4cB412aa','0xFfe296bbbc86dFaC056B42c6180d9f8b4cB412aa','0xd8b41b798a7ce8d30cbc87f007ecb95e1d3c876c','0x8ce584fe9609fe2f0efd1a8b9b7fc4846c32e679','0x94aa50fe3c1ad32b0419004eee4f278ca3908876','0x3f58588b59da010031dd8a355dcd7de229663ebf','0x6ecc35bc13c196e96df0ca1adeb0721ec4dd603d','0xd44ef5ba2f992f44db5f43630f0d0ecc3ae6d192','0xb6329dd8e68ded6c973d7b1d3098cc4fad3858da','0x035ffe28c0c6021a7b1b9092fe05918345847269','0xad99a67ac78b80e00c0b07bb3f526cd26b843611','0x72d778105b8af2c88cbb7b1551fbd6878b6c7d5d','0x5c217cc668b5a972f7df0ee87229dab1024028d3','0xa43ee0ddac31bf684c2d0a678964402322ad7210','0x3982de9d0b6fb0e12c89e0512c8fd903f0d9370b','0x88be3fa60ede9f532af10aba5690dfc254db929b','0xd3e2e76e4ab0322614fe7aaa3be0b04bed83d0d0','0xcb3d44cf3722a0e48b5d4ecf4c9b413a4fed5fc1','0xcb3d44cf3722a0e48b5d4ecf4c9b413a4fed5fc1','0xa01ef6858c9211c0e63519d7c38553f679a73bc0','0xb910bc25fc55b48fb073517487dc5ac71d90f601','0x09800064d8321571e657c507e62ca92faf5c039b','0x5365b4472a6e5d8ea296e38f4117b5bffa61a525','0xba69010b5ca7c8ae0984aaf4ad7d102605ba728c','0x0219d8688f5644373fe74057f350a125aabb8ded','0x94de7e2c73529ebf3206aa3459e699fbcdfcd49b']


  let BoxInstance
  let PizzaInstance
  let maxNewPurchases = 6000
  let priceInWei = 80000000000000000
  let walletAddress = 0
  let addresses = 0
  let ethPrice = 2045 // fallback (only used on v1 where pizza estimate were shown)
  let metamaskInstalled = false

  // Helpers
  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const onLoadHandler = () => {

    // Loading UI components
    const walletButton = document.querySelector('#walletButton')
    const boxesLabel = document.querySelector('#boxesLabel')
    const pizzasLabel = document.querySelector('#pizzasLabel')
    const selectMintQuantity = document.querySelector('#selectionMintQuantity')
    const buyButton = document.querySelector('#buyButton')
    const txLabel = document.querySelector('#txLabel')
    const boxIdField = document.querySelector('#BoxID')
    const checkButton = document.querySelector('#checkButton')
    const boxCheckLabel = document.querySelector('#boxCheckLabel')
    const disabledOrder = document.querySelector('#disabledOrder')
    const selectBox = document.querySelector('#selectBox')
    const selectRecipe = document.querySelector('#selectRecipe')
    const bakePie = document.querySelector('#bakePie')
    const pizzaWarning = document.querySelector('#pizzaWarning')
    const testPurchase = document.querySelector('#testPurchase')
    //const contractLabel = document.querySelector('#contractLabel')
    //contractLabel.innerHTML = `Contract Address: <p> <a href='https://${NETWORK}etherscan.io/address/${BOX_ADDRESS}' target='_blank'>${BOX_ADDRESS}</a> </p>`

    // Actions
    const promptMetamask = () => {
      window.ethereum.enable()
        .then(async () => {
          walletButton.innerHTML = '<center>Connected</center>'
        }).catch((err) => {
          console.log(err)
        })
    }

    const triggerPurchase = () => {
      txLabel.innerHTML = 'Waiting for confirmation'

      hide(buyButton)

      let txHash = 0
      let addressIndex = WHITELIST.indexOf(walletAddress)

      console.log("walletAddress: ", walletAddress)
      console.log("addressIndex: ", addressIndex)

      if (addressIndex === -1) {
        console.log("Not on whitelist")
      } else {
        console.log("Generating proof")
        //let proof = createPrePurchaseProof(addressIndex)
        let proof = generatePresaleProof(WHITELIST)

        console.log("proof: ", proof)
        console.log("Trying to buy box - presale")
        BoxInstance.methods.prePurchase(proof).send({
          from: walletAddress,
          value: priceInWei
        })
          .on('transactionHash', (hash) => {
            console.log('transactionHash: ', hash)

            txHash = hash
            display(buyButton)
          })
          .on('receipt', (receipt) => {
            console.log('receipt: ', receipt)
            txLabel.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
              <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`
            updateValues()
          })
          .on('error', (err, receipt) => {
            console.log('Transaction failed: ', err, 'br/', receipt)

            if (err.code === 4001) {
              txLabel.innerHTML = 'Transaction rejected'
            } else {
              txLabel.innerHTML = 'Something went wrong, try again!'
            }
            display(buyButton)
          })
      }

    }

    const updateValues = () => {

      // BoxInstance.methods.totalSupply().call()
      //   .then((amount) => {
      //     boxesLabel.innerHTML = numberWithCommas(10000 - 824 - amount)
      //   })
      //   .catch((error) => {
      //     console.log('box totalSupply failed: ', error)
      //   })

      BoxInstance.methods.totalNewPurchases().call()
        .then((amount) => {
          boxesLabel.innerHTML = numberWithCommas(maxNewPurchases - amount)
        })
        .catch((error) => {
          console.log('box totalNewPurchases failed: ', error)
        })

      // // Check number of boxes
      // BoxInstance.methods.balanceOf(walletAddress).call()
      //   .then((balance) => {
      //     pizzasToRedeem = 0
      //     for (let i = 0; i < balance; i++) {
      //
      //       // Check address owned ids
      //       BoxInstance.methods.tokenOfOwnerByIndex(walletAddress, i).call()
      //         .then((boxId) => {
      //           console.log("Owner of boxId: ", boxId)
      //
      //           // Check if it was redeemed
      //           PizzaInstance.methods.isRedeemed(boxIdField.value).call()
      //             .then((value) => {
      //               console.log('isRedeemed: ', value)
      //               if (value) {
      //                 console.log("Box already opened: ", boxId)
      //                 boxCheckLabel.innerHTML = 'Box was already opened!'
      //               } else {
      //                 console.log("Box still closed: ", boxId)
      //                 boxCheckLabel.innerHTML = 'Box is still closed!'
      //                 // Add option to bake pie selector
      //                 var opt = document.createElement('option');
      //                 opt.value = i;
      //                 opt.innerHTML = i;
      //                 selectBox.appendChild(opt)
      //                 pizzasToRedeem++
      //               }
      //             })
      //             .catch((error) => {
      //               boxCheckLabel.innerHTML = 'Error: ' + error
      //               console.log('isRedeemed failed: ', error)
      //             })
      //         })
      //         .catch((error) => {
      //           console.log('Failed to get boxId for index: ', i, ' with error: ', error)
      //         })
      //     }
      //   })
      //   .catch((error) => {
      //     console.log('box totalNewPurchases failed: ', error)
      //   })
      //
      // PizzaInstance.methods.balanceOf(walletAddress).call()
      //   .then((balance) => {
      //     console.log(walletAddress, " owns ", balance, "pizzas")
      //   })
      //   .catch((error) => {
      //     console.log('pizza balanceOf failed: ', error)
      //   })

    }

    const handleUser = () => {
      console.log("handling user")

      web3.eth.getAccounts()
        .then(async (accounts) => {
          addresses = accounts

          if (!accounts.length) {
            walletAddress = 0
            walletButton.innerHTML = '<center>Connect Wallet</center>'
          } else {
            walletAddress = accounts[0]
            walletButton.innerHTML = '<center>Connected</center>'
          }
        }).catch((err) => {
          console.log('Error fetching accounts: ', err)
        })
    }

    const buyButtonHandler = () => {
      console.log('Buy button pressed')

      handleUser()

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("triggering purchase")
        triggerPurchase()
      }
    }

    const testPurchaseHandler = () => {
      console.log('Testing purchase')

      handleUser()

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("Trying to purchase")
        BoxInstance.methods.purchase().send({
          from: walletAddress,
          value: priceInWei
        })
          .on('transactionHash', (hash) => {
            console.log('transactionHash: ', hash)

            txHash = hash
            display(buyButton)
          })
          .on('receipt', (receipt) => {
            console.log('receipt: ', receipt)

            txLabel.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
              <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`

            updateValues()
          })
          .on('error', (err, receipt) => {
            console.log('Transaction failed: ', err, 'br/', receipt)

            if (err.code === 4001) {
              txLabel.innerHTML = 'Transaction rejected'
            } else {
              txLabel.innerHTML = 'Something went wrong, try again!'
            }
            display(buyButton)
          })
      }
    }

    const bakePieHandler = () => {
      console.log('Bake pie button pressed')

      if (pizzasToRedeem > 0) {

        handleUser()

        if (!addresses.length) {
          console.log("prompting metamask")
          promptMetamask()
        } else {
          console.log("Trying to bake")
          PizzaInstance.methods.redeemRarePizzasBox(parseFloat(selectBox.value), parseFloat(selectRecipe.value)).send()
            .on('transactionHash', (hash) => {
              console.log('transactionHash: ', hash)

              txHash = hash
              display(buyButton)
            })
            .on('receipt', (receipt) => {
              console.log('receipt: ', receipt)

              pizzaWarning.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
                <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`

              updateValues()
            })
            .on('error', (err, receipt) => {
              console.log('Transaction failed: ', err, 'br/', receipt)

              if (err.code === 4001) {
                txLabel.innerHTML = 'Transaction rejected'
              } else {
                txLabel.innerHTML = 'Something went wrong, try again!'
              }
              display(buyButton)
            })
        }

      }

    }

    const checkButtonHandler = () => {
      console.log('Check button pressed')

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("checking redeemed: ", boxIdField.value)
        PizzaInstance.methods.isRedeemed(boxIdField.value).call()
          .then((value) => {
            console.log('isRedeemed: ', value)
            if (value) {
              boxCheckLabel.innerHTML = 'Box was already opened!'
            } else {
              boxCheckLabel.innerHTML = 'Box is still closed!'
            }
          })
          .catch((error) => {
            boxCheckLabel.innerHTML = 'Error: ' + error
            console.log('isRedeemed failed: ', error)
          })
      }
    }

    const walletButtonHandler = () => {
      console.log('Wallet button pressed')

        console.log("checkingMetamask")

      if (metamaskInstalled) {
        promptMetamask()
      } else {
        window.open('https://www.metamask.io')
      }

    }

    const hide = (element) => {
      element.style.display = 'none'
    }

    const display = (element) => {
      element.style.display = 'block'
    }

    const getEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const result = await response.json()
        ethPrice = result.ethereum.usd
      } catch (error) {
        console.log(error);
      }
    }

    const createPrePurchaseProof = (indexOfUser) => {
     const claimListHashes = WHITELIST.map((item) =>
         web3.utils.soliditySha3(item.toLowerCase())
     );
     const claimListMerkleTree = new MerkleTree(claimListHashes, keccak256, { sort: true });
     let proof = claimListMerkleTree.getProof(claimListHashes[indexOfUser]);
     proof = proof.map((item) => '0x' + item.data.toString('hex'));
     return proof
    }

    const generatePresaleProof = (claimList) => {
      const leaves = []
      const data = []

      claimList.forEach((item) => {
        if (!data.includes(item.address.toLowerCase())) {
          data.push(item.address.toLowerCase())

          leaves.push(ethers.utils.solidityKeccak256(['address'], [item.address.toLowerCase()]))
        }
      })
      const claimListMerkleTree = new MerkleTree(leaves, keccak256, { sort: true })
      return { tree: claimListMerkleTree, root: '0x' + claimListMerkleTree.getHexRoot(), data: data }
    }

    const startApp = async () => {
      BoxInstance = new web3.eth.Contract(BOX_ABI, BOX_ADDRESS)
      PizzaInstance = new web3.eth.Contract(PIZZA_ABI, PIZZA_ADDRESS)

      BoxInstance.events.Transfer((err, e) => { console.log(e) })
        .on('data', (e) =>{
          console.log('event: ', e)
          updateValues()
        })
        .on('changed', (i) => {
          console.log('changed: ', i)
        })
        .on('error on Transfer', console.error)

      updateValues()
      handleUser()
    }

    const initWeb3 = () => {
      if (window.ethereum) {
        console.log('Window.ethereum exists')

        metamaskInstalled = true
        window.web3 = new Web3(window.ethereum)

        startApp()
      } else if (window.web3) {
        console.log('Window.web3 exists')

        metamaskInstalled = true
        window.web3 = new Web3(window.web3.currentProvider)

        startApp()
      } else if (isMobile) {
        console.log('Mobile initiated')

        metamaskInstalled = true
        startApp()
      } else {
        console.log('Non-ethereum browser detected')

        window.alert('Browser not compatible. Try Chrome and MetaMask!')

        txLabel.innerHTML = 'Try Chrome and MetaMask!'
        metamaskInstalled = false
      }
    }

    initWeb3()

    walletButton.addEventListener('click', walletButtonHandler)
    buyButton.addEventListener('click', buyButtonHandler)
    checkButton.addEventListener('click', checkButtonHandler)
    bakePie.addEventListener('click', bakePieHandler)
    testPurchase.addEventListener('click', testPurchaseHandler)
  }

  window.addEventListener('load', onLoadHandler, { once: true })
