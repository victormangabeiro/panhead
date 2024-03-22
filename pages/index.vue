
<template>
    <div class="w-full px-2">

        <div class="w-full p-4 flex items-center justify">
            <div class="w-full">
                <ProductList ref="itemsTable"></ProductList>
            </div>
        </div>

        
        <div class="w-full p-2 flex justify-center">
            <h1 class="text-2xl font-bold">Desconto</h1>
        </div>

        <div class="w-full p-5 mt-5 flex justify-center">
                
            <div class="w-50 px-5">
                <UCheckbox label="%5" v-model="option1" :value="5" :disabled="!itemsLength"/>
            </div>
            <div  class="w-50 px-5">
                <UCheckbox id="" v-model="option2" label="%15" :value="15" :disabled="!itemsLength"/>
            </div>
        </div>
        
        <div class="w-full p-4 flex justify-center">
            <UButton @click="calculate">Calcular</UButton>
        </div>

        <div class="w-full p-5 flex justify-center">
            <UCard class="w-64">
                <template #header>
                    Valores
                </template>
                <span>Boleto: </span>
                <div class="pl-5">
                    <ul>
                        <li>
                            1x: 40,00
                        </li>
                        <li>
                            2x: 20,20
                        </li>
                        <li>
                            3x: 13,45
                        </li>
                    </ul>
                </div>
                
                <span>Cartão:</span>

                <div class="pl-5">
                    <ul>
                        <li>
                            1x: 40,00
                        </li>
                        <li>
                            2x: 20,20
                        </li>
                        <li>
                            3x: 13,45
                        </li>
                    </ul>
                </div>

                <span>Brindes:</span>
                <div>
                    R$70,00 15%
                </div>

            </UCard>
        </div>

    </div>
</template>

<script setup lang="ts">
    let option1 = ref(false)
    let option2 = ref(false)
    const itemsTable = ref(null)

    function calculate() {
        console.log(itemsValue.value)
    }
    const itemsLength = computed(() => {
        return itemsTable?.value?.itemsTable.length ?? 123;
    });

    const itemsValue = computed(() => {
        return itemsTable?.value?.itemsTable?.reduce(function (acc, obj) { return acc + obj.value; }, 0);
    });

    watch(option1, (newVal) => {
        option2.value = !newVal
    });

    watch(option2, (newVal) => {
        option1.value = !newVal
    });
</script>