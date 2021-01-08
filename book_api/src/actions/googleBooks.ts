import actionCreatorFactory from 'typescript-fsa';
import { VolumeList } from "../models/Volume";

const actionCreator = actionCreatorFactory('googleBooks');

export const GoogleBooksActions ={
    getVolumes: actionCreator<string>('getVolumes'),
    setVolumes: actionCreator<VolumeList>('setVolumes'),
    setIsSearching: actionCreator<boolean>('setIsSearching'),
};