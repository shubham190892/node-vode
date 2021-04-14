const Industry = Object.freeze({
    'AUTOMOBILE': 0,
    'IT': 1,
    'TEXTILE': 2,
    'PHARMACY': 3,
    'FINANCE': 4,
    'CONSUMER': 5
});

const Capital = Object.freeze({
    'SMALL': 0,
    'MID': 1,
    'LARGE': 2
});

const CompanyList = Object.freeze({
    [Industry.AUTOMOBILE]:[
        {
            id: 0,
            name: 'Maruti Suzuki',
            desc: 'Manufacture mid range cars',
            bse: '',
            nse: '',
            cap: Capital.LARGE,
            fundamentals: 100,

        },
        {
            id: 1,
            name: 'Tata Motors',
            desc: 'Manufacture mid range and luxury cars',
            bse: '',
            nse: '',
            cap: Capital.LARGE,
            fundamentals: 100
        },
        {
            id: 2,
            name: 'Eicher Motors',
            desc: 'Manufacture tractor, transport vehicle and iconic bullet',
            bse: '',
            nse: '',
            cap: Capital.LARGE,
            fundamentals: 100
        }
    ],
    [Industry.IT]:[
        {
            id: 0,
            name: 'Tata Consultancy Services',
            desc: 'Software service based company',
            bse: '',
            nse: '',
            cap: Capital.LARGE,
            fundamentals: 100
        }
    ],
    [Industry.TEXTILE]:[],
    [Industry.PHARMACY]:[],
    [Industry.FINANCE]:[],
});