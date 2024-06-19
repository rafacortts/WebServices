import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'produtos',
		label: 'Produtos',
		path: '/Produtos',
		icon: <HiOutlineCube />
	},
	{
		key: 'pedidos',
		label: 'Pedidos',
		path: '/Pedidos',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'clientes',
		label: 'Clientes',
		path: '/Clientes',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transações',
		label: 'Transações',
		path: '/Transações',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'mensagens',
		label: 'Mensagens',
		path: '/Mensagens',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Configurações',
		label: 'Configurações',
		path: '/Configurações',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Ajuda & Suporte',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]