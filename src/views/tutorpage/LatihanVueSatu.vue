<template>
    <h1>Multi Component Root App</h1>
    <h2>{{ judul }}</h2>
    <div>
        <p>Isi component multi Root</p>
    </div>
    <button>Hello Vue App Button</button>
</template>

<script>
export default {
    name: 'LatihanVueSatu',
    data() {
        return {
            judul: 'Judul dari Vue Component',
        };
    },
    methods: {
        fungsiPertama() {},
    },
};
</script>

<style lang="scss"></style>
