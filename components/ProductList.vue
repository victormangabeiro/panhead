<template>
  <div class="w-full">

    <div class="w-full p-4 flex justify-center">
      <USelectMenu searchable searchable-placeholder="Procure um produto..." class="w-full lg:w-48"
        placeholder="Procure um produto" option-attribute="name" by="id" :options="options"
        @change="addToTable($event)">
        <template #option="{ option: options }">
          <span class="truncate" :key="options.id">{{ options.name }}</span>
        </template>
      </USelectMenu>

    </div>
    <div class="w-full p-4">
      <UTable :columns="columns" :rows="itemsTable">
        <template #value-data="{row}">
          {{ row.value.toFormat('$0,0.00') }}
        </template>
        <template #gift-data="{row}">
          <UCheckbox v-model="row.gift" name="gift" label=""/>
        </template>
      </UTable>
    </div>

  </div>

</template>

<script setup lang="ts">
  import Dinero from 'dinero.js'
  
  const Money = Dinero;
  Money.defaultCurrency = 'BRL';
  Money.defaultPrecision = 2;

  const columns = [{
    key: 'id',
    label: 'COD'
  }, {
    key: 'name',
    label: 'Nome'
  }, {
    key: 'value',
    label: 'Valor'
  },
  {
    key: 'qtd',
    label: 'Qtd'
  },
  {
    key: 'gift',
    label: 'Brinde'
  }
  ]

  let options = ref([
    {
      "id": "CO461 +CO4650 +CO4760 +CO4807 +CO4808",
      "name": "Combo Diamond - 25 peças - Conjunto Supremo +Conj. Gourmet + Paellera 26cm + Caçarola 5,7lts +Escorredores 20cm e 26cm",
      "value": Money({ amount: 4259000}),
      "qtd": 1
    },
    {
      "id": "CO4641+CO4631",
      "name": "Combo Master 18 peças - Conjunto Familiar +Conjunto Especial",
      "value": Money({ amount: 3169000}),
      "qtd": 1
    },
    {
      "id": "CO4651",
      "name": "Conjunto Supremo 15 pçs",
      "value": Money({ amount: 2499000}),
      "qtd": 1
    },
    {
      "id": "CO4641",
      "name": "Conjunto Familiar 10 pçs",
      "value": Money({ amount: 1749000}),
      "qtd": 1
    },
    {
      "id": "CO4631",
      "name": "Conjunto Especial 8 pçs",
      "value": Money({ amount: 1419000}),
      "qtd": 1
    },
    {
      "id": "CO4621",
      "name": "Conjunto Clássico 7 pçs",
      "value": Money({ amount: 1099000}),
      "qtd": 1
    },
    {
      "id": "CO4611",
      "name": "Conjuto Complementar 5 pçs",
      "value": Money({ amount: 939000}),
      "qtd": 1
    },
    {
      "id": "CO4601",
      "name": "Conjunto Essencial 5 pçs",
      "value": Money({ amount: 779000}),
      "qtd": 1
    },
    {
      "id": "CO4650",
      "name": "Conjunto Frigideiras Gourmet",
      "value": Money({ amount: 519000}),
      "qtd": 1
    },
    {
      "id": "CO1253",
      "name": "Panela de Pressão de 6 litros",
      "value": Money({ amount: 699000}),
      "qtd": 1
    },
    {
      "id": "CO1258",
      "name": "Panela de Pressão de 10 litros",
      "value": Money({ amount: 799000}),
      "qtd": 1
    },
    {
      "id": "CO9712",
      "name": "Frigideira Easy Release 20cm c/ 3 Espat.",
      "value": Money({ amount: 420000}),
      "qtd": 1
    },
    {
      "id": "CO9713",
      "name": "Frigideira Easy Release 26cm c/ 3 Espat.",
      "value": Money({ amount: 519000}),
      "qtd": 1
    },
    {
      "id": "CO9714",
      "name": "Frigideira Easy Release 31cm , c/ 3 Espat.",
      "value": Money({ amount: 639000}),
      "qtd": 1
    },
    {
      "id": "CO9718",
      "name": "Conjunto de Frigdeiras Easy Release",
      "value": Money({ amount: 1419000}),
      "qtd": 1
    },
    {
      "id": "SP0018",
      "name": "Acessórios para Easy Release",
      "value": Money({ amount: 95000}),
      "qtd": 1
    },
    {
      "id": "ES0029",
      "name": "Power Blender 127v + LIVRO",
      "value": Money({ amount: 1079000}),
      "qtd": 1
    },
    {
      "id": "ES0030",
      "name": "Power Blender 220v + LIVRO",
      "value": Money({ amount: 1079000}),
      "qtd": 1
    },
    {
      "id": "JU0055",
      "name": "Maxtractor - 127V",
      "value": Money({ amount: 1240000}),
      "qtd": 1
    },
    {
      "id": "JU0057",
      "name": "Maxtractor - 220v",
      "value": Money({ amount: 1240000}),
      "qtd": 1
    },
    {
      "id": "PR1452",
      "name": "Filtros para Maxtractor 3 pçs",
      "value": Money({ amount: 242000}),
      "qtd": 1
    },
    {
      "id": "CO0101",
      "name": "Chocolateira",
      "value": Money({ amount: 269000}),
      "qtd": 1
    },
    {
      "id": "CO4730+CO4801",
      "name": "Frigideira 20cm c/ tampa",
      "value": Money({ amount: 299000}),
      "qtd": 1
    },
    {
      "id": "CO4735+CO4802",
      "name": "Frigideira 26cm c/ tampa",
      "value": Money({ amount: 389000}),
      "qtd": 1
    },
    {
      "id": "CO4745",
      "name": "Frigideira Gourmet 20cm c/ tampa",
      "value": Money({ amount: 259000}),
      "qtd": 1
    },
    {
      "id": "CO4750",
      "name": "Frigideira Gourmet 24cm c/ tampa",
      "value": Money({ amount: 299000}),
      "qtd": 1
    },
    {
      "id": "CO4760",
      "name": "Panela Paellera 26cm",
      "value": Money({ amount: 389000}),
      "qtd": 1
    },
    {
      "id": "CO4740",
      "name": "Panela Paellera 35,5cm",
      "value": Money({ amount: 479000}),
      "qtd": 1
    },
    {
      "id": "CO4807",
      "name": "Caçarola 5,7lts",
      "value": Money({ amount: 349000}),
      "qtd": 1
    },
    {
      "id": "CO4808",
      "name": "Escorredor 20cm",
      "value": Money({ amount: 169000}),
      "qtd": 1
    },
    {
      "id": "CO4810",
      "name": "Escorredor 26cm",
      "value": Money({ amount: 219000}),
      "qtd": 1
    }
  ]
  )

  const selected = ref(options[0]);
  const itemsTable: any = ref([]);

  watch(selected, (newVal) => {
    addToTable(selected);
  });

  function addToTable(item: any) {
    itemsTable.value.push(item)
    options.value = options.value.filter((pan) => {
      return pan.id !== item.id
    })
  }

  defineExpose({
    itemsTable,
  });

</script>