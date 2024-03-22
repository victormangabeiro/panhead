
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
                    <URadioGroup v-model="state.init" legend="Selecione a entrada" :options="options" />
                </UFormGroup>

                <UButton type="submit">
                    calculate
                </UButton>
            </UForm>             

        </div>
        

        <div class="w-full mt-10 flex justify-center" v-if="showCard">
            <UCard class="w-64">
                <template #header>
                    Valores
                </template>
                <span>Boleto: </span>
                <div class="pl-5">
                    <ul>
                        <li v-for="time in ticketTimes">
                            {{time}}x: {{ time == 1 ? state.ticket.multiply(1.3).divide(time).toFormat('$0,0.00') 
                            : state.ticket.multiply(1.3).divide(time).toFormat('$0,0.00') }}
                        </li>
                    </ul>
                </div>
                
                <span>Cartão:</span>

                <div class="pl-5">
                    <ul>
                        <li v-for="time in cardTimes">
                            {{time}}x: {{ time == 1 ? state.card.toFormat('$0,0.00') : state.card.allocate([1, time - 1])[0].toFormat('$0,0.00') }}
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
        init: options[0].value,
        card: Money({amount: 0}),
        ticket: Money({amount: 0})
    })

    function calculate(event) {
        showCard.value = true

        state.card = itemsValue.value
        console.log(itemsValue.value.allocate([1, 1])[1].getAmount())

        const init = itemsValue.value.percentage(state.init)
        state.ticket = itemsValue.value.subtract(init)
        
    }

    const itemsLength = computed(() => {
        return itemsTable?.value?.itemsTable.length ?? 123;
    });

    const itemsValue = computed(() => {
        return itemsTable?.value?.itemsTable?.reduce((acc, {value}) => { 
            console.log(value)
            return acc.add(value) 
        }, Money({ amount: 0 }));
    });

    

</script>