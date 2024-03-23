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

  let options = ref([{
    id: 1,
    name: 'Frigideira 20 cm',
    value: Money({ amount: 299000}) ,
    qtd: 1,
  }, {
    id: 2,
    name: 'Paellera 26cm',
    value: Money({ amount: 389000}),
    qtd: 1
  }])

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