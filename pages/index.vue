
<template>
    <div class="w-full px-2">

        <div class="w-full p-4 flex items-center justify">
            <div class="w-full">
                <ProductList ref="itemsTable"></ProductList>
            </div>
        </div>

        
        <div class="w-full my-10 flex justify-center">

            <UForm :state="state" class="space-y-4" @submit="calculate">

                 <UFormGroup >
                    <URadioGroup v-model="state.init.perc" legend="Selecione a entrada" :options="options" @change="calculate" />
                </UFormGroup>
            </UForm>             

        </div>
        

        <div class="w-full mt-9 flex justify-center" v-if="showCard || itemsGifted?.length">
            <UCard class="w-96">
                <template #header>
                    Valores
                </template>
                <span>Boleto: </span>
                <div class="pl-5">
                    <ul>
                        <li>
                            Entrada: {{ state.init.value.toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{1}}x: {{ state.ticket.multiply(1.3).divide(1).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{2}}x: {{ state.ticket.multiply(1.3).divide(2).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{3}}x: {{ state.ticket.multiply(1.3).divide(3).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{18}}x: {{ state.ticket.multiply(1.3).divide(18).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{30}}x: {{ state.ticket.multiply(1.3).divide(30).toFormat('$0,0.00') }}
                        </li>
                    </ul>
                </div>
                
                <span>Cartão:</span>

                <div class="pl-5">
                    <ul>
                        <li>
                            {{1}}x: {{  state.card.toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{2}}x: {{ state.card.divide(2).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{3}}x: {{ state.card.divide(2).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{12}}x: {{ state.card.divide(12).toFormat('$0,0.00') }}
                        </li>
                        <li>
                            {{18}}x: {{ state.card.divide(18).toFormat('$0,0.00') }}
                        </li>
                    </ul>
                </div>

                <div v-if="itemsGifted.length">
                    <span>Brindes:</span>
                    <div class="pl-5">
                        <ul>
                            <li v-for="item in itemsGifted">
                                {{ item.name }} - {{ item.value.toFormat('$0,0.00') }}
                            </li>
                            <li>
                                <span>Total: {{ itemsValueGifted?.toFormat('$0,0.00') }}</span>
                            </li>
                            <li>
                                <span :class="{}">Porcentagem de brindes: {{ getPercetage(itemsValueGifted.getAmount(), itemsValue.getAmount()) }}%</span>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>


            </UCard>
        </div>

    </div>
</template>

<script setup lang="ts">
    import Dinero from 'dinero.js'
    
    const Money = Dinero;
    Money.defaultCurrency = 'BRL';
    Money.defaultPrecision = 2;

    let showCard = ref(false)
    const itemsTable = ref(null)
    const cardTimes = 18;
    const ticketTimes = 30;

    const options = [{
        value: 5,
        label: '5%'
        }, {
        value: 10,
        label: '10%'
        }, {
        value: 15,
        label: '15%'
    }]

    const state = reactive({
        init: {perc: options[0].value, value: Money({amount: 0})},
        card: Money({amount: 0}),
        ticket: Money({amount: 0})
    })

    function getPercetage(value1, value2) {
        const perc = ((value1 / value2) * 100)
        return perc < 100 ? perc.toFixed(2) : 100
    }

    function calculate() {
        
        state.card = itemsValue.value

        state.init.value = itemsValue.value.percentage(state.init.perc)
        state.ticket = itemsValue.value.subtract(state.init.value)
        showCard.value = state.card.getAmount() ? true : false
    }

    const itemsLength = computed(() => {
        return itemsTable?.value?.itemsTable.length ?? 123;
    });

    const itemsValue = computed(() => {
        return itemsTable?.value?.itemsTable?.reduce((acc, {value, gift}) => { 
            console.log(value)
            return !gift ? acc.add(value) : acc
        }, Money({ amount: 0 }));
    });

    const itemsGifted = computed(() => {
        return itemsTable?.value?.itemsTable?.filter((item) => { 
            return !!item.gift
        });
    });

    const itemsValueGifted = computed(() => {
        return itemsTable?.value?.itemsTable?.reduce((acc, {value, gift}) => { 

            return gift ? acc.add(value) : acc
        }, Money({ amount: 0 }));
    });

    watch(itemsValue, (newVal) => {
        calculate();
    });    

</script>