import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import {IconType} from 'react-icons';

interface ILinks {
  name: string,
  to: string
  icon: IconType
}
export const links:ILinks[] = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Example 1', to: '#', icon: HiOutlinePhotograph },
  { name: 'Example 2', to: '#', icon: HiOutlineUserGroup },
  { name: 'Example 3', to: '#', icon: HiOutlineHashtag },
];
