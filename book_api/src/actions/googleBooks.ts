import actionCreatorFactory from 'typescript-fsa';
import { VolumeList } from "../models/Volume";

const actionCreator = actionCreatorFactory('googleBooks');

export const GoogleBooksActions ={
    setVolumes: actionCreator<VolumeList>('setVolumes')
};