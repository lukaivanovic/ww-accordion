<template>
    <div class="ww-expand">
        <div class="toggle-container" @click="toggle">
            <div v-if="!isVisible || editLayout" class="unactive-toggle">
                <div v-if="editLayout" class="label unactive label-xs normal">closed</div>
                <wwLayout class="layout toggle-layout" :class="{ isEditing }" path="activeToggleLayout" />
            </div>
            <div v-if="isVisible || editLayout" class="active-toggle">
                <div v-if="editLayout" class="label active label-xs normal">opened</div>
                <wwLayout class="layout toggle-layout" :class="{ isEditing }" path="toggleLayout" />
            </div>
        </div>
        <wwExpandTransition transition-function="ease">
            <div v-show="isVisible || isEditing" class="content">
                <div v-if="editLayout" class="label content label-xs normal">content</div>
                {{ content.opened }}
                <wwLayout class="layout content-layout" :class="{ isEditing }" path="contentLayout" />
            </div>
        </wwExpandTransition>
    </div>
</template>

<script>
import wwExpandTransition from './wwExpandTransition.vue';

export default {
    components: { wwExpandTransition },
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    data() {
        return {
            isVisible: false,
            editLayout: false,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    watch: {
        isEditing() {
            this.editLayout = false;
        },
    },
    mounted() {
        this.editLayout = false;
    },
    beforeUnmount() {
        this.editLayout = false;
    },
    methods: {
        toggle() {
            if (this.isEditing) return;
            this.isVisible = !this.isVisible;
        },
        open() {
            this.isVisible = true;
        },
        close() {
            this.isVisible = false;
        },
        /* wwEditor:start */
        toggleEdit() {
            this.editLayout = !this.editLayout;
        },
        /* wwEditor:end */
    },
};
</script>

<style lang="scss" scoped>
.ww-expand {

    .active-toggle,
    .unactive-toggle,
    .content {
        position: relative;

        .layout {
            display: flex;
            flex-direction: column;

            &.isEditing {
                min-height: 50px;
                border: 1px dashed var(--ww-color-dark-500);
            }
        }

        .label {
            position: absolute;
            top: 0;
            right: 0;

            padding: var(--ww-spacing-00) var(--ww-spacing-01);
            border-bottom-left-radius: var(--ww-spacing-00);
            z-index: 101;
            color: white;

            &.unactive {
                background-color: var(--ww-color-dark-500);
            }

            &.active {
                background-color: var(--ww-color-green-500);
            }

            &.content {
                background-color: var(--ww-color-blue-500);
            }
        }
    }
}
</style>
