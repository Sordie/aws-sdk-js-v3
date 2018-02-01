import {Structure as _Structure_} from '@aws/types';

export const GetIdentityPoolRolesInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolId',
    ],
    members: {
        IdentityPoolId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};