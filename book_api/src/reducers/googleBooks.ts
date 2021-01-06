import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

import { GoogleBooksActions } from 'actions/googleBooks';
import { VolumeList } from 'models/Volume';


export const GoogleBooksState extends Record<{
   volumeList: VolumeList;
}> ({
   volumeList: new VolumeList(),
})  {}

export const googleBooksReducer = reducerWithInitialState(new GoogleBooksState())
            .case(GoogleBooksactions.setVolumes, (state,payload) =>{
                return state.set('VolumeList',payload)
                }
            )