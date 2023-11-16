export default {
    editor: {
        label: {
            en: 'Expand layout',
        },
        customStylePropertiesOrder: ['opened'],
    },
    actions: [
        { label: 'Toggle', action: 'toggle' },
        { label: 'Open', action: 'open' },
        { label: 'Close', action: 'close' },
    ],
    properties: {
        toggleEdit: {
            type: 'Button',
            section: 'settings',
            editorOnly: true,
            options: {
                text: { en: 'Toggle edition', fr: 'Toggle edition' },
                color: 'blue',
                action: 'toggleEdit',
            },
        },
        toggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        activeToggleLayout: {
            hidden: true,
            defaultValue: [],
        },
        contentLayout: {
            hidden: true,
            defaultValue: [],
        },
        opened: {
            label: { en: 'Open' },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines if the input is required: `true | false`',
            },
        },
    },
};
