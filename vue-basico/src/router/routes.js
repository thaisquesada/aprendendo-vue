import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeClientes from '@/views/ControleDeClientes.vue';
import ListaProdutosCards from '@/views/ListaProdutosCards.vue';
import Produto from '@/views/Produto.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        meta: { requiredAuth: false }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/novo',
        name: 'NovoProduto',
        component: Produto,
        title: 'Cadastrar Produto',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/editar',
        name: 'EditarProduto',
        component: Produto,
        title: 'Editar Produto',
        meta: { requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/lista-produtos-cards',
        name: 'ListaProdutosCards',
        component: ListaProdutosCards,
        title: 'Lista de Produtos em Cards',
        meta: { requiredAuth: true }
    },
];

  export default routes;