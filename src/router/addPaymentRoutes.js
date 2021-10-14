const addPaymentRoutes = [
    {
        path: '/add/payment/',
        component: () => import('../components/PaymentForm'),
    },
    {
        path: 'Food?value=:value',
        name: 'food',
        component: () => import('../components/PaymentForm'),
        props: true
    },
    {
        path: 'Transport?value=:value',
        name: 'transport',
        component: () => import('../components/PaymentForm'),
        props: true
    },
    {
        path: 'Entertainment?value=:value',
        name: 'entertainment',
        component: () => import('../components/PaymentForm'),
        props: true
    },
]

export default addPaymentRoutes