import { signUp, login, logout } from './auth';
import { updateAccount, setAccount } from './account';
import { toggleSidebar } from './sidebar';

const actions = { signUp, login, logout, updateAccount, setAccount, toggleSidebar }

export default actions;