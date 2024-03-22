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
      <UTable :columns="columns" :rows="itemsTable" />
    </div>

  </div>

</template>

<script setup lang="ts">

  const columns = [{
    key: 'id',
    label: 'Código'
  }, {
    key: 'name',
    label: 'Nome'
  }, {
    key: 'value',
    label: 'Valor'
  },
  {
    key: 'qtd',
    label: 'Quantidade'
  }
  ]

  const options = [{
    id: 1,
    name: 'P1',
    value: 100.20,
    qtd: 1
  }, {
    id: 2,
    name: 'F1',
    value: 1000,
    qtd: 1
  }, {
    id: 3,
    name: 'F1',
    value: 3000,
    qtd: 1
  }, {
    id: 4,
    name: 'F3',
    title: 'Copywriter',
    value: 5000,
    qtd: 1
  },
  {
    id: 5,
    name: 'F4',
    value: 12,
    qtd: 1
  },
  {
    id: 6,
    name: 'G2',
    value: 12,
    qtd: 1

  }]

  const selected = ref(options[0]);
  const itemsTable: any = ref([]);

  console.log(selected)

  watch(selected, (newVal) => {
    addToTable(selected);
  });

  function addToTable(item: any) {
    itemsTable.value.push(item)
  }

  defineExpose({
    itemsTable,
  });

</script>