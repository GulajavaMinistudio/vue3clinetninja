<template>
    <!-- Self mencegah element lain yang di klik ikut memberikan aksi  -->
    <div class="backdrop" @click.self="closeModal()">
        <div class="modal" :class="classModal">
            <!-- Tampilan untuk Slot  -->
            <slot>Default content</slot>
            <div class="actions">
                <!-- Dengan named slots -->
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlotsModals',
    props: {
        juduls: {
            type: String,
            default: '',
        },
        contents: {
            type: String,
            default: '',
        },
        theme: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            judulModal: '',
            contentModal: '',
            isSaleTheme: false,
        };
    },
    mounted() {
        this.judulModal = this.juduls;
        this.contentModal = this.contents;

        if (this.theme === 'sale') {
            this.isSaleTheme = true;
        } else {
            this.isSaleTheme = false;
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-event', { data: 'Sampel data' });
        },
    },
    computed: {
        classModal() {
            // Class binding dengan menggunakan computed property
            return {
                sale: this.isSaleTheme === true,
            };
        },
    },
    watch: {
        juduls(newValue) {
            if (newValue) {
                this.judulModal = newValue;
            }
        },
        contents(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.contentModal = newValue;
            }
        },
    },
};
</script>

<style lang="scss">
// Scoped Style untuk mencegah style terpakai di komponen
// Di luar dari komponen ini dan anak komponen yang ada di dalamnya
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    margin-left: 0em;
}

.modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
}

.modal p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
}

.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}

.modal.sale {
    background: crimson;
    color: white;
}

.modal.sale h1 {
    color: white;
}

.modal.sale .actions {
    color: white;
}

.modal.sale .actions a {
    color: white;
}
</style>
