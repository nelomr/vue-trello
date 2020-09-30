<template>
    <div class="popup" :class="{'is-visible': popupState}">
        <div class="popup--overlay" @click="closePopup()"></div>
        <div class="popup--container">
            <NewTask @closePopup="closePopup()" />
        </div>
    </div>
</template>

<script>
import NewTask from './NewTaskCard';
export default {
    props: {
        statePopup: {
            type: Boolean,
            default: false
        }
    },
    components: {
        NewTask
    },
    computed: {
        popupState() {
            return this.statePopup;
        }
    },
    methods: {
        closePopup() {
            this.$emit('closePopup');
        }
    }
}
</script>

<style lang="scss">
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &.is-visible {
            display: block;
        }
    }

    .popup--container,
    .popup--overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .popup--overlay {
        background: $dark-color;
        opacity: .5;
        backdrop-filter: blur(2px);
    }

    .popup--container {
        top: 50%;
        left: 50%;
        width: 80%;
        height: auto;
        background-color: $grey-light-color;
        transform: translate(-50%,-50%);

        @include breakpoint($min-desktop) {
            max-width: 460px;
        }

        @include breakpoint($min-desktop-xlarge) {
            padding: 25px;
        }
    }
</style>