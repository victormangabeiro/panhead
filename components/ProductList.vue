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
        "id": "CO4641+CO4631",
        "name": "Combo Master 18 peças - CJ Familiar +CJ Especial",
        "value": Money({ amount: 3169000}),
        "qtd": "1"
    },
    {
        "id": "CO4651",
        "name": "CONJUNTO 15 PÇS PROFESSINL C/LVR&RS",
        "value": Money({ amount: 2499000}),
        "qtd": "1"
    },
    {
        "id": "CO4641",
        "name": "CONJUNTO 10 PEÇAS FAMILIAR C/LIV&RS",
        "value": Money({ amount: 1749000}),
        "qtd": "1"
    },
    {
        "id": "CO4631",
        "name": "CONJUNTO 8 PEÇAS ESPECIAL C/LVRO&RS",
        "value": Money({ amount: 1419000}),
        "qtd": "1"
    },
    {
        "id": "CO4621",
        "name": "CONJUNTO 7 PEÇAS CLÁSICO C/LVRO&RS",
        "value": Money({ amount: 1099000}),
        "qtd": "1"
    },
    {
        "id": "CO4611",
        "name": "CONJUNTO 5 PEÇAS COMPLNTR C/LVRO&RS",
        "value": Money({ amount: 939000}),
        "qtd": "1"
    },
    {
        "id": "CO4601",
        "name": "CONJUNTO 5 PEÇAS ESENCIAL C/LVRO&RS",
        "value": Money({ amount: 779000}),
        "qtd": "1"
    },
    {
        "id": "CO1258",
        "name": "RP PANELA DE PRESSÃO10L&LIVRO RECTS",
        "value": Money({ amount: 799000}),
        "qtd": "1"
    },
    {
        "id": "CO1253",
        "name": "RP PANELA DE PRESSÃO 6L&LIVRO RECTS",
        "value": Money({ amount: 699000}),
        "qtd": "1"
    },
    {
        "id": "CO9726",
        "name": "RP 6PC EASYRELEASE 3PC TOOL CVR GLS",
        "value": Money({ amount: 1419000}),
        "qtd": "1"
    },
    {
        "id": "CO9734",
        "name": "RP 12\" EASYRELEASE 3PC TOOL CVR GLS",
        "value": Money({ amount: 639000}),
        "qtd": "1"
    },
    {
        "id": "CO9733",
        "name": "RP 10\" EASYRELEASE 3PC TOOL CVR GLS",
        "value": Money({ amount: 449000}),
        "qtd": "1"
    },
    {
        "id": "CO9732",
        "name": "RP 8\" EASYRELEASE 3PC TOOL CVR GLS",
        "value": Money({ amount: 420000}),
        "qtd": "1"
    },
    {
        "id": "CO9714",
        "name": "RP EASY RELEASE 31CM C/3 ESPATULAS",
        "value": Money({ amount: 639000}),
        "qtd": "1"
    },
    {
        "id": "SP0018",
        "name": "JOGO DE UTENSILIOS 3PZ EASY RELEASE",
        "value": Money({ amount: 79900}),
        "qtd": "1"
    },
    {
        "id": "CO4650",
        "name": "RP CONJUNTO 4 PEÇAS FRIGIDE GOURMET",
        "value": Money({ amount: 519000}),
        "qtd": "1"
    },
    {
        "id": "CO4750",
        "name": "RP FRIGIDEIRA GOURMET 10\"/24CM C TA",
        "value": Money({ amount: 299000}),
        "qtd": "1"
    },
    {
        "id": "CO4745",
        "name": "RP FRIGIDEIRA GOURMET 8\"/20CM C TAM",
        "value": Money({ amount: 259000}),
        "qtd": "1"
    },
    {
        "id": "CO4751",
        "name": "RP FRIGIDEIRA GOURMET 10\"/24CM",
        "value": Money({ amount: 222200}),
        "qtd": "1"
    },
    {
        "id": "CO4746",
        "name": "RP FRIGIDEIRA GOURMET 8\"/20CM",
        "value": Money({ amount: 191400}),
        "qtd": "1"
    },
    {
        "id": "ES0029",
        "name": "RP POWER BLENDER W/BOOK 127-127V BZ",
        "value": Money({ amount: 1079000}),
        "qtd": "1"
    },
    {
        "id": "ES0030",
        "name": "RP POWER BLENDER W/BOOK 220-240V BZ",
        "value": Money({ amount: 1079000}),
        "qtd": "1"
    },
    {
        "id": "JU0055",
        "name": "MAXTRACTOR 127V (BZ)",
        "value": Money({ amount: 1079000}),
        "qtd": "1"
    },
    {
        "id": "JU0057",
        "name": "MAXTRACTOR 220V (BZ)",
        "value": Money({ amount: 1079000}),
        "qtd": "1"
    },
    {
        "id": "PR1452",
        "name": "FILTROS PARA MAXTRACTOR 3 PÇS",
        "value": Money({ amount: 214900}),
        "qtd": "1"
    },
    {
        "id": "CO9680",
        "name": "CAÇAROLA DE 30QT/38CM C/TAMPA - 28L",
        "value": Money({ amount: 649000}),
        "qtd": "1"
    },
    {
        "id": "CO9675",
        "name": "CAÇAROLA DE 20QT/35CM C/TAMPA - 19L",
        "value": Money({ amount: 539000}),
        "qtd": "1"
    },
    {
        "id": "CO9660",
        "name": "CAÇAROLA DE 12QT/30CM C/TAMPA - 11L",
        "value": Money({ amount: 459000}),
        "qtd": "1"
    },
    {
        "id": "CO4725",
        "name": "RP CAÇAROLA 8QT/26CM C TAMPA - 7,6L",
        "value": Money({ amount: 439000}),
        "qtd": "1"
    },
    {
        "id": "CO4720+CO4802",
        "name": "RP CAÇAROLA 6QT/26CM - 5,6L",
        "value": Money({ amount: 419000}),
        "qtd": "1"
    },
    {
        "id": "CO4715",
        "name": "RP CAÇAROLA 4QT/20CM C TAMPA - 3,8L",
        "value": Money({ amount: 349000}),
        "qtd": "1"
    },
    {
        "id": "CO4710+CO4801",
        "name": "RP PANELA 3QT/20CM - 2,8L",
        "value": Money({ amount: 319000}),
        "qtd": "1"
    },
    {
        "id": "CO4705+CO4800",
        "name": "RP PANELA 2QT/16CM - 1,9L",
        "value": Money({ amount: 279000}),
        "qtd": "1"
    },
    {
        "id": "CO4735+CO4802",
        "name": "RP FRIGIDEIRA 105\"/4QT/26CM - 3,8L",
        "value": Money({ amount: 389000}),
        "qtd": "1"
    },
    {
        "id": "CO4730+CO4801",
        "name": "RP FRIGIDEIRA 8\"/2QT/20CM - 1,9L",
        "value": Money({ amount: 299000}),
        "qtd": "1"
    },
    {
        "id": "CO4740",
        "name": "RP PANELA P/PAELLA 14\"/35CM C TAMPA - 6,5L",
        "value": Money({ amount: 479000}),
        "qtd": "1"
    },
    {
        "id": "CO4760",
        "name": "RP PANELA P/PAELLA 10\"/26CM C TAMPA - 3L",
        "value": Money({ amount: 389000}),
        "qtd": "1"
    },
    {
        "id": "CO6589",
        "name": "ASSADEIRA OVAL ROYAL PRESTIGE",
        "value": Money({ amount: 676000}),
        "qtd": "1"
    },
    {
        "id": "CO9687",
        "name": "GRELHA QUADRADA 27X27CM",
        "value": Money({ amount: 259000}),
        "qtd": "1"
    },
    {
        "id": "CO9685",
        "name": "RP GRELHA DUPLA 18\"X10\" - 46 X 25,5CM",
        "value": Money({ amount: 349000}),
        "qtd": "1"
    },
    {
        "id": "CO2124",
        "name": "CAÇAROLA ROYAL PRESTIGE",
        "value": Money({ amount: 159000}),
        "qtd": "1"
    },
    {
        "id": "PR1685",
        "name": "RP FERVEDOR MEDIO 1QT - 946ML",
        "value": Money({ amount: 109000}),
        "qtd": "1"
    },
    {
        "id": "CO0101",
        "name": "CHOCOLATERA RP - 2,6L",
        "value": Money({ amount: 269000}),
        "qtd": "1"
    },
    {
        "id": "CO4815",
        "name": "ROYAL PRESTIGE CUSCUZEIRA - 2,6L (600ML + 2L)",
        "value": Money({ amount: 269000}),
        "qtd": "1"
    },
    {
        "id": "CO4808",
        "name": "RP ESCORREDOR GRANDE 26CM",
        "value": Money({ amount: 249000}),
        "qtd": "1"
    },
    {
        "id": "CO4807",
        "name": "RP ESCORREDOR PEQUENO 20CM",
        "value": Money({ amount: 199000}),
        "qtd": "1"
    },
    {
        "id": "PR2129",
        "name": "CAFETEIRA ROYAL EXPRESSO 10 XÍCARAS",
        "value": Money({ amount: 189000}),
        "qtd": "1"
    },
    {
        "id": "PR2120",
        "name": "CAFETEIRA ROYAL EXPRESSO 4 XÍCARAS",
        "value": Money({ amount: 129000}),
        "qtd": "1"
    },
    {
        "id": "CO4803",
        "name": "RP TAMPA CUPULA C/BASE",
        "value": Money({ amount: 290000}),
        "qtd": "1"
    },
    {
        "id": "CO4802",
        "name": "RP TAMPA GRANDE 26CM",
        "value": Money({ amount: 107300}),
        "qtd": "1"
    },
    {
        "id": "CO4801",
        "name": "RP TAMPA GRANDE 20CM",
        "value": Money({ amount: 87800}),
        "qtd": "1"
    },
    {
        "id": "CO4800",
        "name": "RP TAMPA GRANDE 16CM",
        "value": Money({ amount: 83400}),
        "qtd": "1"
    },
    {
        "id": "CO4805",
        "name": "RP TAMPA GOURMET 10\"/24CM",
        "value": Money({ amount: 76800}),
        "qtd": "1"
    },
    {
        "id": "CO4804",
        "name": "RP TAMPA GOURMET 8\"/20CM",
        "value": Money({ amount: 67600}),
        "qtd": "1"
    },
    {
        "id": "PR0025",
        "name": "ROYAL PRESTIGE PERFECT POP",
        "value": Money({ amount: 99000}),
        "qtd": "1"
    },
    {
        "id": "*CEPO COMPLETO: 1 CU0700, 1 CU0715, 2 CU0720, CU0046",
        "name": "",
        "value": Money({ amount: 909900}),
        "qtd": "1"
    },
    {
        "id": "CU0700",
        "name": "CONJ,FACAS PRECISION - 5 PÇS",
        "value": Money({ amount: 289000}),
        "qtd": "1"
    },
    {
        "id": "CU0715",
        "name": "CONJUNTO DE CORTES PRECISION 4 PÇS",
        "value": Money({ amount: 203100}),
        "qtd": "1"
    },
    {
        "id": "CU0720",
        "name": "CONJ FACAS P/CARNES PRCISION 4 PCS",
        "value": Money({ amount: 131000}),
        "qtd": "1"
    },
    {
        "id": "CU0046",
        "name": "SUPORTE PARA 17 FACAS - CEPO",
        "value": Money({ amount: 153500}),
        "qtd": "1"
    },
    {
        "id": "CU0740",
        "name": "CONJUNTO DE 4 FACAS PARA CHURRASCO",
        "value": Money({ amount: 121900}),
        "qtd": "1"
    },
    {
        "id": "CU0725",
        "name": "CUTELO PRECISION SERIE III",
        "value": Money({ amount: 99000}),
        "qtd": "1"
    },
    {
        "id": "CU0712",
        "name": "AMOLADOR DE FACA PRECISION - CHAIRA",
        "value": Money({ amount: 41000}),
        "qtd": "1"
    },
    {
        "id": "CU0716",
        "name": "TESOURA DE CORTE PRECISION",
        "value": Money({ amount: 89000}),
        "qtd": "1"
    },
    {
        "id": "SP0196",
        "name": "FACAS ESTILO SANTOKU 12,7 CM",
        "value": Money({ amount: 49000}),
        "qtd": "1"
    },
    {
        "id": "SP0197",
        "name": "FACAS ESTILO SANTOKU 7,6 CM",
        "value": Money({ amount: 39000}),
        "qtd": "1"
    },
    {
        "id": "PR0008",
        "name": "TABUA DE BAMBOO PARA CORTAR - GRANDE",
        "value": Money({ amount: 69000}),
        "qtd": "1"
    },
    {
        "id": "PR0021",
        "name": "TABUA PARA CORTES DE BAMBU PQ C/ S",
        "value": Money({ amount: 49000}),
        "qtd": "1"
    },
    {
        "id": "SP0009",
        "name": "CONJ,TALHERES AMERICANA 24 PÇS",
        "value": Money({ amount: 99000}),
        "qtd": "1"
    },
    {
        "id": "PR0196",
        "name": "JOGO DE UTENSÍLIOS P/COZINHA - 6 PÇ",
        "value": Money({ amount: 123500}),
        "qtd": "1"
    },
    {
        "id": "SP0016",
        "name": "CONJ,TALHERES AMERICANA 6 PÇS",
        "value": Money({ amount: 34000}),
        "qtd": "1"
    },
    {
        "id": "SP0081",
        "name": "3PC NEW DELUXE SERVING SET 430SS",
        "value": Money({ amount: 26800}),
        "qtd": "1"
    },
    {
        "id": "SP0091",
        "name": "NOVO JOGO P/SRVIR COMPLE 3PZ-430SS",
        "value": Money({ amount: 22200}),
        "qtd": "1"
    },
    {
        "id": "SP0145",
        "name": "PORTA UTENSILIOS",
        "value": Money({ amount: 25200}),
        "qtd": "1"
    },
    {
        "id": "SP1861",
        "name": "JOGO 2 PEÇAS ESPÁTULAS DE SILICONE",
        "value": Money({ amount: 67700}),
        "qtd": "1"
    },
    {
        "id": "SP1852",
        "name": "ESPATULA VAZADA PRECISION",
        "value": Money({ amount: 43300}),
        "qtd": "1"
    },
    {
        "id": "SP0066",
        "name": "TIGELA DE MISTURA 10QT C BASE SILIC",
        "value": Money({ amount: 69000}),
        "qtd": "1"
    },
    {
        "id": "SP0262",
        "name": "2 TIGELAS C/TAMPA&BASE SILCNA 304SS",
        "value": Money({ amount: 89000}),
        "qtd": "1"
    },
    {
        "id": "PR1044",
        "name": "4 TIGELAS C/TAMPA&BASE SILICN 304SS",
        "value": Money({ amount: 179000}),
        "qtd": "1"
    },
    {
        "id": "SP1851",
        "name": "RALADOR SERIE PRECISION",
        "value": Money({ amount: 39300}),
        "qtd": "1"
    },
    {
        "id": "SP1856",
        "name": "CORTADOR DE PIZZA PRECISION",
        "value": Money({ amount: 39300}),
        "qtd": "1"
    },
    {
        "id": "SP1860",
        "name": "DESCASCADOR VERTICAL",
        "value": Money({ amount: 31800}),
        "qtd": "1"
    },
    {
        "id": "SP1854",
        "name": "DESCASCADOR HORIZONTAL",
        "value": Money({ amount: 35900}),
        "qtd": "1"
    },
    {
        "id": "SP1850",
        "name": "ABRIDOR SERIE PRECISION",
        "value": Money({ amount: 37000}),
        "qtd": "1"
    },
    {
        "id": "SP1853",
        "name": "BATEDOR DE OVOS PRECISION - FUÊ",
        "value": Money({ amount: 46600}),
        "qtd": "1"
    },
    {
        "id": "SP1857",
        "name": "ESPREMEDOR PRECISION",
        "value": Money({ amount: 45500}),
        "qtd": "1"
    },
    {
        "id": "SP0305",
        "name": "BASE MAGNÉTICA PARA PANELAS",
        "value": Money({ amount: 32300}),
        "qtd": "1"
    },
    {
        "id": "SP0135",
        "name": "JOGO DE 4 CANECAS TERMICAS",
        "value": Money({ amount: 69000}),
        "qtd": "1"
    },
    {
        "id": "SP2551",
        "name": "ROYAL PRESTIGE SMART TEMP",
        "value": Money({ amount: 34900}),
        "qtd": "1"
    },
    {
        "id": "SP0113",
        "name": "ROYALWARE CJ 8 PEÇAS PARA ALIMENTOS",
        "value": Money({ amount: 45200}),
        "qtd": "1"
    },
    {
        "id": "SP0111",
        "name": "ROYALWARE CJ 6 PEÇAS PARA ALIMENTOS",
        "value": Money({ amount: 32600}),
        "qtd": "1"
    },
    {
        "id": "SP5058",
        "name": "ROYALSHINE",
        "value": Money({ amount: 9000}),
        "qtd": "1"
    },
    {
        "id": "SP2420",
        "name": "JUNTA DE BORDA VERMELHA 16 CM",
        "value": Money({ amount: 13900}),
        "qtd": "1"
    },
    {
        "id": "SP2440",
        "name": "JUNTA DE BORDA VERMELHA 20 CM",
        "value": Money({ amount: 15900}),
        "qtd": "1"
    },
    {
        "id": "SP2460",
        "name": "JUNTA DE BORDA VERMELHA 26 CM",
        "value": Money({ amount: 18900}),
        "qtd": "1"
    },
    {
        "id": "SP2480",
        "name": "JUNTA DE BORDA VERMELHA 35 CM",
        "value": Money({ amount: 23900}),
        "qtd": "1"
    },
    {
        "id": "SP0488",
        "name": "TAMPA ALTA JUNTA DE BORDA VERMELHO",
        "value": Money({ amount: 18900}),
        "qtd": "1"
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