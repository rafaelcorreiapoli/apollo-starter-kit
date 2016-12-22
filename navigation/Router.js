import {
  createRouter,
} from '@exponent/ex-navigation';

import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import CuponsScreen from '../screens/CuponsScreen'
import RestaurantesScreen from '../screens/RestaurantesScreen'
import EscanearScreen from '../screens/EscanearScreen'
import VouchersScreen from '../screens/VouchersScreen'
import PromocoesScreen from '../screens/PromocoesScreen'
import RestauranteDetailScreen from '../screens/RestauranteDetail'
import CupomDetailScreen from '../screens/CupomDetail'

export default createRouter(() => ({
  restaurantes: () => RestaurantesScreen,
  restauranteDetail: () => RestauranteDetailScreen,
  cupomDetail: () => CupomDetailScreen,
  cupons: () => CuponsScreen,
  escanear: () => EscanearScreen,
  promocoes: () => PromocoesScreen,
  vouchers: () => VouchersScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
