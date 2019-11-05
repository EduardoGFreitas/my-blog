import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { Container } from './styles';
import * as S from "./styled"


const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar;
