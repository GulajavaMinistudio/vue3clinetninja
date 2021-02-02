<template>
    <h1>Multi Component Root App</h1>
    <h2>{{ judul }}</h2>
    <div>
        <p>Isi component multi Root</p>
    </div>
    <button>Hello Vue App Button</button>
    <div>
        <h1>Input Refs</h1>
        <input type="text" id="textinput" ref="input_sampelref" />
        <button @click="handleClickButton()">Tekan Tombol Input</button>
        <p>Menggunakan ref atau refs untuk mengakses DOM component</p>
    </div>
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
        handleClickButton() {
            // Contoh penggunaan Ref untuk akses element DOM
            console.log(this.$refs.input_sampelref);
            this.$refs.input_sampelref.classList.add('active');
            this.$refs.input_sampelref.value = 'Data dari ref click';
            this.$refs.input_sampelref.focus();
        },
    },
};
</script>

<style lang="scss"></style>
