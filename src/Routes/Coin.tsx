import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchTickersInfo } from "../api";
import Chart from "./Chart";
import Price from "./Price";

interface routeParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Loading = styled.span`
  text-align: center;
  display: block;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`;

const Title = styled.div`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;

interface RouteState {
  name: string;
}

interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface ITickersInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Article = styled.div`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px 20px;
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const MiniContentDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentTitle = styled.span`
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;

const ContentText = styled.span`
  font-size: 16px;
  text-align: center;
  line-height: 20px;
`;

const Tab = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Tabs = styled.span<{ isActive: boolean }>`
  text-align: center;
  font-size: 16px;
  padding: 10px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.bgColor};
  border-radius: 10px;
  a {
    display: block;
  }
`;

const Home = styled.div`
  text-align: center;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  padding: 10px;
  right: 200px;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    transition: color 0.2s ease-in-out;
  }
  a {
    display: block;
  }
`;

function Coin() {
  const { coinId } = useParams<routeParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch(`/coinsite/coins/${coinId}/price`);
  const chartMatch = useRouteMatch(`/coinsite/coins/${coinId}/chart`);
  const { isLoading: CoinInfoLoading, data: CoinInfoData } =
    useQuery<ICoinInfo>(["coinInfo", coinId], () => fetchCoinInfo(coinId), {
      refetchInterval: 10000,
    });
  const { isLoading: TickersInfoLoading, data: TickersInfoData } =
    useQuery<ITickersInfo>(
      ["tickersInfo", coinId],
      () => fetchTickersInfo(coinId),
      {
        refetchInterval: 10000,
      }
    );
  const loading = CoinInfoLoading || TickersInfoLoading;
  /*
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoType>();
  const [priceInfo, setPriceInfo] = useState<PriceInfoType>();
  console.log(chartMatch);
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
      // console.log(state);
      // console.log(coinId);
    })();
  }, []);*/
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? state.name
            : loading
            ? "Loading..."
            : CoinInfoData?.name}
        </title>
      </Helmet>
      <Header>
        <Home>
          <Link to="/coinsite">Home</Link>
        </Home>
        <Title>
          {state?.name
            ? state.name
            : loading
            ? "Loading..."
            : CoinInfoData?.name}
        </Title>
        <div></div>
        <div></div>
      </Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ContentContainer>
          <Article>
            <MiniContentDiv>
              <ContentTitle>RANK:</ContentTitle>
              <ContentText>{CoinInfoData?.rank}</ContentText>
            </MiniContentDiv>
            <MiniContentDiv>
              <ContentTitle>SYMBOL:</ContentTitle>
              <ContentText>{CoinInfoData?.symbol}</ContentText>
            </MiniContentDiv>
            <MiniContentDiv>
              <ContentTitle>OPEN SOURCE:</ContentTitle>
              <ContentText>
                {CoinInfoData?.open_source ? "Yes" : "No"}
              </ContentText>
            </MiniContentDiv>
          </Article>
          <Article>
            <ContentText>{CoinInfoData?.description}</ContentText>
          </Article>
          <Article>
            <MiniContentDiv>
              <ContentTitle>TOTAL SUPPLY:</ContentTitle>
              <ContentText>{TickersInfoData?.total_supply}</ContentText>
            </MiniContentDiv>
            <MiniContentDiv>
              <ContentTitle>MAX SUPPLY:</ContentTitle>
              <ContentText>{TickersInfoData?.max_supply}</ContentText>
            </MiniContentDiv>
          </Article>
          <Tab>
            <Tabs isActive={chartMatch !== null}>
              <Link to={`/coinsite/coins/${coinId}/chart`}>Chart</Link>
            </Tabs>
            <Tabs isActive={priceMatch !== null}>
              <Link to={`/coinsite/coins/${coinId}/price`}>Price</Link>
            </Tabs>
          </Tab>
          <Switch>
            <Route path={`/coinsite/coins/${coinId}/chart`}>
              <Chart coinId={coinId}></Chart>
            </Route>
            <Route path={`/coinsite/coins/${coinId}/price`}>
              <Price coinId={coinId}></Price>
            </Route>
          </Switch>
        </ContentContainer>
      )}
    </Container>
  );
}

export default Coin;
