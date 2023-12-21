import {defineType} from 'sanity'


export default defineType({
                name: 'heroImage',
                type: 'document',
                fields: [
                    {
                        name: 'title',
                        type: 'string',
                    },
                    {
                        name: 'image',
                        type: 'image',
                        options: {
                            hotspot: true,
                        },
                    },
                ],
            },
            // ...other document types
        );
