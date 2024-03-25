<template>
  <div class="pl-5">
      <ul>
          <li v-if="type === 'ticket'">
              Entrada: {{ values.init.value.toFormat('$0,0.00') }}
          </li>
          <li v-for="time in timesValue">
              {{time}}x: {{ values.ticket.multiply(1 + (time * 0.01)).divide(time).toFormat('$0,0.00') }}
          </li>
      </ul>
      <ULink
        @click="showMore"
        active-class="text-primary"
        inactive-class="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200"
      >
        {{ timesButtonMessage }}
      </ULink>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps([
    'times',
    'values',
    'type'
  ])

  let timesValue = ref(props.times)
  let timesButtonMessage = ref('Ver mais')
  let more = false

  const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

  const showMore = () => {
    more = !more
    timesButtonMessage.value = more ? 'Ver menos' : 'Ver mais'

    if (more) {
      if (props.type === 'ticket') {
        timesValue.value = range(1, 31)
      } else {
        timesValue.value = range(1, 22)
      }
      return
    } 

    timesValue.value = props.times    
    
  }

</script>