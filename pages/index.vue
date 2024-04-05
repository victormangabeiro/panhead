
<template>
    <div class="w-full py-2">

        <div class="w-full py-4 flex items-center justify">
            <div class="w-full">
                <ProductList ref="itemsTable"></ProductList>
            </div>
        </div>

        
        <div class="w-full my-10 flex justify-center">

            <UForm :state="state" class="space-y-4" @submit="calculate">

                 <UFormGroup>
                    <div class="flex-col" @click="resetInputInit">
                        <label>Selecione a % da entrada:</label>
                        <URadio v-model="state.init.perc" legend="Selecione a entrada" v-bind="options[0]" @change="calculate" />
                        <URadio v-model="state.init.perc" legend="Selecione a entrada" v-bind="options[1]" @change="calculate" />
                    </div>

                    <div class="mt-2">
                        <label>Ou o valor em reais:</label>
                        <UInput color="primary" type="number" variant="outline" v-model="state.init.inputValue" placeholder="Valor em reais" @click="resetRadioInit" @change="calculate" @keyup="calculate"/>
                    </div>

                    <div class="mt-2">
                        <UCheckbox color="primary" label="Considerar a entrada para o cartão" variant="outline" v-model="state.init.considerateCard" @change="calculate" @keyup="calculate"/>
                    </div>

                </UFormGroup>
            </UForm>             

        </div>
        

        <div class="w-full mt-9 flex justify-center" v-if="showCard || itemsGifted?.length">
            <UCard class="w-96">
                <template #header>
                    Valores
                </template>
                <span>Boleto: </span>
                <ValueList :times="ticketTimes" :values="state" type="ticket"></ValueList>
                
                <span>Cartão:</span>

                <ValueList :times="cardTimes" :values="state" type="card"></ValueList>

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
    import type { FormError } from '#ui/types'
    import Dinero from 'dinero.js'
    
    const Money = Dinero;
    Money.defaultCurrency = 'BRL';
    Money.defaultPrecision = 2;

    let showCard = ref(false)
    const itemsTable = ref(null)
    const cardTimes = [12,18,21];
    const ticketTimes = [12,24,10];

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
        init: {
            perc: options[0].value,
            value: Money({amount: 0}),
            inputValue: null,
            considerateCard: false
        },
        errors: {
            message: undefined
        },
        card: Money({amount: 0}),
        ticket: Money({amount: 0})
    })

    function getPercetage(value1, value2) {
        const perc = ((value1 / value2) * 100)
        return perc < 100 ? perc.toFixed(2) : 100
    }

    function calculate() {
        
        state.card = itemsValue.value
        state.ticket = itemsValue.value
        state.init.value = itemsValue.value.percentage(state.init.perc)

        if (state.init.inputValue) {
            state.init.value = Money({amount: state.init.inputValue * 100})
        }

        if (state.init.value.getAmount() === 0) {
            showCard.value = false    
            return
        }
        console.log(itemsValue.value.getAmount())
        console.log('card',state.card.getAmount())
        if (itemsValue.value.getAmount() > 0) state.ticket = itemsValue.value.subtract(state.init.value)
        if (state.init.considerateCard) state.card = itemsValue.value.subtract(state.init.value) 

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


    const resetRadioInit =  () => {
        state.init.perc = 0
    }

    const resetInputInit =  () => {
        state.init.inputValue = null
    }

    watch(itemsValue, (newVal) => {
        calculate();
    });    

</script>