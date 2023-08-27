<template>
    <div>
        Count of {{ countType }}: {{ count }}
        <br>
        <div>
        Counter Value: {{ count }}
        <br>
        <template v-if="isEven">The counter is even</template>
        <template v-else>The counter is odd</template>
        <button @click="increment">Increment</button>
        <ul>
            <template v-for="n in count">
            <li>{{ n }}</li>
            </template>
        </ul>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        countType: {
            type: String,
            default() {
                return 'Something';
            }
        }
    },
    data(){ 
        return{
        count: 0,
        }

    },
    computed:{
        isEven(){
        return this.count%2 == 0;
        }
    },
    methods: {
        increment() {
        this.count = this.count + 1;
        }
    }
}
</script>