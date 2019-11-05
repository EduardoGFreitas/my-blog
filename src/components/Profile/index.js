import React from 'react';
import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => (
  <S.ProfileWrapper>
    <S.ProfileLink>
      <Avatar />
      <S.ProfileAuthor>
        Eduardo
        <S.ProfilePosition>Desenvolvedor front-end</S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>
      Pedreiro digital, tio do João e praticante do deboísmo clássico
    </S.ProfileDescription>
  </S.ProfileWrapper>

);

export default Profile;
