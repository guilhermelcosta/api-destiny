let key_API = "05f906d0ef784254b0ea1e39e22d056a";

fetch(
  "https://www.bungie.net/platform/Destiny2/1/Profile/4611686018440450797/Character/2305843009753458018/?components=205",
  {
    method: "GET",
    headers: {
      "X-API-Key": key_API,
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    let qtdeItens = data.Response.equipment.data.items.length;
    var str = "";

    for (let i = 0; i < qtdeItens; i++) {
      let item = data.Response.equipment.data.items[i];

      //   Busca a descricao de cada item, de acordo com o seu codigo Hash.
      fetch(
        `https://www.bungie.net/platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${item.itemHash}/`,
        {
          method: "GET",
          headers: {
            "X-API-Key": key_API,
          },
        }
      )
        .then((response2) => response2.json())
        .then((data2) => {
          let icone = data2.Response.displayProperties.icon;
          let infoItem = data2.Response;

          // str += `  <div class=item>
          //               <img src="https://www.bungie.net${icone}" alt="Equipamento">
          //           </div>`;
          //   console.log(data2.Response);
          // document.querySelector("#equipments").innerHTML = str;
          verificaItem(infoItem, icone);
        });
    }
  });

function verificaItem(item, icone) {
  let posicaoInventario = item.equippingBlock.equipmentSlotTypeHash;
  let str = "";

  switch (posicaoInventario) {
    case 3284755031:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Class ability">`;
      document.querySelector("#class_ability").innerHTML = str;
      break;

    case 1498876634:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Kinetic weapon">`;
      document.querySelector("#kinetic_weapon").innerHTML = str;
      break;

    case 2465295065:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Energy weapon">`;
      document.querySelector("#energy_weapon").innerHTML = str;
      break;

    case 953998645:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Power weapon">`;
      document.querySelector("#power_weapon").innerHTML = str;
      break;

    case 3448274439:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Helmet">`;
      document.querySelector("#helmet").innerHTML = str;
      break;

    case 3551918588:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Gauntlets">`;
      document.querySelector("#gauntlets").innerHTML = str;
      break;

    case 14239492:
      str = ` <h2>${item.displayProperties.name}</h2>
      <img src="https://www.bungie.net${icone}" alt="Chest armor">`;
      document.querySelector("#chest_armor").innerHTML = str;
      break;

    case 20886954:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Leg armor">`;
      document.querySelector("#leg_armor").innerHTML = str;
      break;

    case 1585787867:
      str = ` <h2>${item.displayProperties.name}</h2>
              <img src="https://www.bungie.net${icone}" alt="Class armor">`;
      document.querySelector("#class_armor").innerHTML = str;
      break;

    default:
      break;
  }
}


