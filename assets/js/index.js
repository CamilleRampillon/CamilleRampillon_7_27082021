import '../sass/main.scss';
import {icon} from './search__icon';
import {recipes} from './recipes';
import {searchListenner} from './search__function';
import { pageBuild } from './page__rebuild';

icon();
pageBuild(recipes)
searchListenner