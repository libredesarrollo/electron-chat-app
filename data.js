const contacts = [
    {
        'name': 'Alex Alexis',
        'image': 'https://randomuser.me/api/portraits/women/56.jpg',
        'last_chat': [
            {
                'date': '9:15 AM',
                'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            }
        ]
    },
    {
        'name': 'Ramon Reed',
        'image': 'https://randomuser.me/api/portraits/women/59.jpg',
        'last_chat': [
            {
                'date': '9:15 AM',
                'message': 'Lorem Hello!',
            }
        ]
    },
    {
        'name': 'Eli Barrett',
        'image': 'https://randomuser.me/api/portraits/women/58.jpg',
        'last_chat': [
            {
                'date': '8:55 PM',
                'message': 'Lorem ipsum dolor sit ...',
            }
        ]
    },
]

const chats = [
    [
        {
            'user': {
                'name': 'Alex Alexis',
                'image': 'https://randomuser.me/api/portraits/women/56.jpg',
            },
            'chat':
            {
                'date': '9:15 AM',
                'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit voluptatibus cumque, deserunt deleniti consequatur adipisci nisi consequuntur sunt itaque? Sunt aspernatur, ratione labore ipsam enim unde itaque dolorum magni?',
            }
        },
        
        {
            'user': {
                'name': 'Luis Perez',
                'image': 'https://randomuser.me/api/portraits/women/58.jpg',
            },
            'chat':
            {
                'date': '9:50 AM',
                'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit voluptatibus cumque, deserunt deleniti consequatur adipisci nisi consequuntur sunt itaque? Sunt aspernatur, ratione labore ipsam enim unde itaque dolorum magni?',
            }
        },
    ],
    [

    ],
    [
        {
            'user': {
                'name': 'Anselmo Perez',
                'image': 'https://randomuser.me/api/portraits/women/1.jpg',
            },
            'chat':
            {
                'date': '10:45 PM',
                'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit voluptatibus cumque, deserunt deleniti consequatur adipisci nisi consequuntur sunt itaque? Sunt aspernatur, ratione labore ipsam enim unde itaque dolorum magni?',
            }
        },
    ]
]

module.exports.contacts = contacts
module.exports.chats = chats