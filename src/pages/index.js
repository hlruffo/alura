import config from "../../config.json"
import styled from "styled-components"
import Menu from "../components/Menu"
import { StyledTimeline } from "../components/Timeline"
import React from "react"



function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")

  return (<>

    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      // backgroundColor: "red",
    }}>

      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
    </div>
  </>
  )
}

export default HomePage

const StyledHeader = styled.div`
background-color: ${({theme}) => theme.backgroundLevel1};

img{
  width:80px;
  height:80px;
  border-radius:50%;
}
.user-info{
 
  display:flex;
  align-items: center;
  width:100%;
  padding:16px 32px;
  gap:16px;
}
`;
const StyledBanner = styled.div`
  background-image:url(${config.topbanner});
  //background-image:url(${({topbanner})=> topbanner}); //conferir pq parou de funcionar
  height: 230px;

`

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}></img>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>)
}



function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase()
                const searchValueNormalized = searchValue.toLowerCase()
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}