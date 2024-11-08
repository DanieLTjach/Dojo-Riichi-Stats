const dayGamesList = [
    {
        id: 1,
        date: "2021-11-01",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15000 },
            { id: 2, name: "Anton Martynenko", score: 13000 },
            { id: 3, name: "Roman Doroshenko", score: 12000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 14000 },
        ],
        gameNumber: 100,
    },
    {
        id: 2,
        date: "2021-11-02",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 16000 },
            { id: 2, name: "Anton Martynenko", score: 12000 },
            { id: 3, name: "Roman Doroshenko", score: 14000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15000 },
        ],
        gameNumber: 101,
    },
    {
        id: 3,
        date: "2021-11-03",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 17000 },
            { id: 2, name: "Anton Martynenko", score: 12500 },
            { id: 3, name: "Roman Doroshenko", score: 13000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 13500 },
        ],
        gameNumber: 102,
    },
    {
        id: 4,
        date: "2021-11-04",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 14500 },
            { id: 2, name: "Anton Martynenko", score: 15000 },
            { id: 3, name: "Roman Doroshenko", score: 12000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 16000 },
        ],
        gameNumber: 103,
    },
    {
        id: 5,
        date: "2021-11-05",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15500 },
            { id: 2, name: "Anton Martynenko", score: 14000 },
            { id: 3, name: "Roman Doroshenko", score: 15000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 12500 },
        ],
        gameNumber: 104,
    },
    {
        id: 6,
        date: "2021-11-06",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 12000 },
            { id: 2, name: "Anton Martynenko", score: 13000 },
            { id: 3, name: "Roman Doroshenko", score: 15000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 16000 },
        ],
        gameNumber: 105,
    },
    {
        id: 7,
        date: "2021-11-07",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 13000 },
            { id: 2, name: "Anton Martynenko", score: 15500 },
            { id: 3, name: "Roman Doroshenko", score: 14000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15000 },
        ],
        gameNumber: 106,
    },
    {
        id: 8,
        date: "2021-11-08",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 16000 },
            { id: 2, name: "Anton Martynenko", score: 12000 },
            { id: 3, name: "Roman Doroshenko", score: 14500 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15500 },
        ],
        gameNumber: 107,
    },
    {
        id: 9,
        date: "2021-11-09",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 14000 },
            { id: 2, name: "Anton Martynenko", score: 12500 },
            { id: 3, name: "Roman Doroshenko", score: 16000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15000 },
        ],
        gameNumber: 108,
    },
    {
        id: 10,
        date: "2021-11-10",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15500 },
            { id: 2, name: "Anton Martynenko", score: 13000 },
            { id: 3, name: "Roman Doroshenko", score: 13500 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 12500 },
        ],
        gameNumber: 109,
    },
    {
        id: 11,
        date: "2021-11-11",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15000 },
            { id: 2, name: "Anton Martynenko", score: 16000 },
            { id: 3, name: "Roman Doroshenko", score: 12500 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 14000 },
        ],
        gameNumber: 110,
    },
    {
        id: 12,
        date: "2021-11-12",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 16000 },
            { id: 2, name: "Anton Martynenko", score: 12000 },
            { id: 3, name: "Roman Doroshenko", score: 14000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 13500 },
        ],
        gameNumber: 111,
    },
    {
        id: 13,
        date: "2021-11-13",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15500 },
            { id: 2, name: "Anton Martynenko", score: 13000 },
            { id: 3, name: "Roman Doroshenko", score: 12500 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15000 },
        ],
        gameNumber: 112,
    },
    {
        id: 14,
        date: "2021-11-14",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 13500 },
            { id: 2, name: "Anton Martynenko", score: 15500 },
            { id: 3, name: "Roman Doroshenko", score: 14000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 12000 },
        ],
        gameNumber: 113,
    },
    {
        id: 15,
        date: "2021-11-15",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 12500 },
            { id: 2, name: "Anton Martynenko", score: 14000 },
            { id: 3, name: "Roman Doroshenko", score: 15000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 16000 },
        ],
        gameNumber: 114,
    },
    {
        id: 16,
        date: "2021-11-16",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 13000 },
            { id: 2, name: "Anton Martynenko", score: 13500 },
            { id: 3, name: "Roman Doroshenko", score: 12000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 14500 },
        ],
        gameNumber: 115,
    },
    {
        id: 17,
        date: "2021-11-17",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 16000 },
            { id: 2, name: "Anton Martynenko", score: 12500 },
            { id: 3, name: "Roman Doroshenko", score: 14000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 15500 },
        ],
        gameNumber: 116,
    },
    {
        id: 18,
        date: "2021-11-18",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 14500 },
            { id: 2, name: "Anton Martynenko", score: 15000 },
            { id: 3, name: "Roman Doroshenko", score: 13000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 12500 },
        ],
        gameNumber: 117,
    },
    {
        id: 19,
        date: "2021-11-19",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 14000 },
            { id: 2, name: "Anton Martynenko", score: 13500 },
            { id: 3, name: "Roman Doroshenko", score: 15000 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 13000 },
        ],
        gameNumber: 118,
    },
    {
        id: 20,
        date: "2021-11-20",
        players: [
            { id: 1, name: "Yehor Mishcheriakov", score: 15500 },
            { id: 2, name: "Anton Martynenko", score: 16000 },
            { id: 3, name: "Roman Doroshenko", score: 12500 },
            { id: 4, name: "Oleksiy Dobrolezhenko", score: 14000 },
        ],
        gameNumber: 119,
    },
];

export default dayGamesList;
