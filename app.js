// Renders a div containing 3 cheboxes into the DOM element with id 'main'
import {
    render,
    createElement
} from 'react';

import {
    FieldSet,
    TextInput,
    Checkbox
} from './lib';
import {Stage, CenteredBox} from './lib/themes/mnmo';
import {
    Checkbox as MnmoCheckbox,
    FieldSet as MnmoFieldSet 
} from './lib/themes/mnmo';
import mnmoCheckboxStyles from './lib/themes/mnmo/styles/checkbox';

render(
    createElement(Stage, null,
        createElement(CenteredBox, null,
            createElement(FieldSet, {styles: {fieldset: { borderColor: '#0bb' }}},
                createElement(TextInput, {placeholder: 'my placeholder'})
            ),
            createElement(MnmoFieldSet, { legend: 'Bem vindo' },
                createElement(TextInput, {placeholder: 'usuário'}),
                createElement(Checkbox, {
                        id: 'mycheckbox01',
                        checked: true,
                        styles: mnmoCheckboxStyles
                    },
                    'checked checkbox'
                ),
                createElement(Checkbox, {
                        id: 'mycheckbox02',
                        checked: false
                    },
                    'unchecked checkbox'
                ),
                createElement(MnmoCheckbox, {
                        id: 'mycheckbox03',
                    },
                    'checked property not defined'
                )
            )
        )
    ),
    document.getElementById('main')
);

