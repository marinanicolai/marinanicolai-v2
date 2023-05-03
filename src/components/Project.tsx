import { useEffect, useState } from "react";
// Mantine
import { Container, Grid, Skeleton, Title } from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import github from "../_mock/github.json";
import RepositoryCard from "./RepositoryCard";
import Card from "./Card";

// ----------------------------------------------------------------------------

export default function Github() {
  const [repos, setRepos] = useState<any>([]);

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users/marinanicolai/repos");
    const data = await res.json();
    setRepos(
      data
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 9)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(repos);
  return (
    <Container>
      <BoxWrapper withBackground={false}>
        <Grid>
          {/* <Title
          order={1}
          sx={(theme) => ({
            marginBottom: 25,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[5]
                : theme.colors.orange[5],
          })}
        >
          {github.project}
        </Title>
        <Grid>
          {repos.length > 0
            ? repos.slice(0, 6).map((repo: any, index: number) => (
                <Grid.Col sm={12} md={6} lg={4} key={index}>
                  <RepositoryCard
                    title={repo.name}
                    description={repo.description}
                    language={repo.language}
                    url={repo.svn_url}
                    created_at={repo.created_at}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                  />
                </Grid.Col>
              ))
            : Array.from(Array(6)).map((_, index) => (
                <Grid.Col sm={12} md={6} lg={4} key={index}>
                  <Skeleton height={150} sx={{ minWidth: 175 }} radius="xl" />
                </Grid.Col>
              ))}
        </Grid>
        <Grid>
          <Grid.Col sm={12} md={6} lg={4}>
            <RepositoryCard
              title={"live"}
              description={"gooogle"}
              url={"https:www.google.com"}
              stargazers_count={0}
              forks_count={0}
              language={"REact.js"}
              created_at={""}
            />
          </Grid.Col> */}

          <Grid.Col sm={12} md={12} lg={12}>
            <Card
              title={"Photo App"}
              description={
                "Created an app that utilizes REST API to display brief information on various pictures in a card style on the homepage. Users can search for pictures based on text. Each card is clickable and will redirect the user to the corresponding image page, where they can access more detailed information"
              }
              url={"https://unsplash-marinanicolai.vercel.app/"}
              stargazers_count={0}
              forks_count={0}
              language1={"React.js"}
              created_at={""}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={12} lg={12}>
            <Card
              title={"Crypto App"}
              description={
                "Created an app that utilizes REST API to display brief information on various cryptos in a list style on the homepage. "
              }
              url={"https://nicolai-crypto.netlify.app/"}
              stargazers_count={0}
              forks_count={0}
              language1={"React.js"}
              created_at={""}
            />
          </Grid.Col>
        </Grid>
      </BoxWrapper>
    </Container>
  );
}
