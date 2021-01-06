import  { useDispatch, useSelector} from "react-redux";
import  { State } from "../../reducers";
import  { GoogleBooksActions } from "../../actions/googleBooks";
import {useState} from "react";

export GoogleBooks: React.FC= () => {
   const [searchString, changeSearchString]= useState('');
   const { VolumeList } =useSelector((state: State)=> ({ volumeList: state.googleBooks.volumeList}));

   const dispatch = useDispatch();

   const handleOnSearchButton = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
           event.preventDefault();
   const result = await searchGoogleBooks(searchString);
      if (result.isSuccess){
           dispatch(GoogleBooksActions.setVolumes(VolumeList.fromResponse(result.data)));
      } else {
        window.alert(String(result.error));
      }
   };
  return(
    <Wrapper>
      <Body>
          <Title> Google Books searching </Title>
        <SearchForm>
         <Inputplaceholder='検索ワードを入力してね！' onChange={event => changeSearchString(event.target.value)} />
            <SearchButton onClick={event => handleOnSearchButton(event)} disabled={!searchString}>
                検索
            </SearchButton>
        </SearchForm>
          {VolumeList.kind && <SearchResult  volumeList={volumelis}/>}
       </Body>
    </Wrapper>
  );
};