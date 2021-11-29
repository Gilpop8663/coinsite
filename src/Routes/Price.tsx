import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import { fetchTickersInfo } from "../api";

interface ICoin {
  coinId: string;
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

const centerAni = keyframes`
 0%{
    opacity:0;
  }50%{

    opacity:0.5;
  }100%{
    
    opacity:1;
  }
`;

const ContainerDiv = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;
const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 15px;
  animation: ${centerAni} 0.5s ease-in-out;
  &:first-child {
    margin-top: 30px;
  }
`;

const TagTitle = styled.span`
  font-size: 12px;
`;
const TagContent = styled.span<{ isMinus: boolean }>`
  color: ${(props) =>
    props.isMinus ? props.theme.plusColor : props.theme.minusColor};
  font-size: 18px;
`;

function Price({ coinId }: ICoin) {
  const { isLoading, data } = useQuery<ITickersInfo>(
    ["price", coinId],
    () => fetchTickersInfo(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <ContainerDiv>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Container>
          <Tags>
            <TagTitle>Current Prices : </TagTitle>
            <TagContent
              isMinus={data?.quotes.USD.price.toString().slice(0, 1) !== "-"}
            >{`$${data?.quotes.USD.price.toFixed(3)}`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Percent Change 12 Hours : </TagTitle>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_12h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_12h}%`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Percent Change 24 Hourss : </TagTitle>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_24h.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_24h}%`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Percent Change 7 days : </TagTitle>
            <TagContent
              isMinus={
                data?.quotes.USD.percent_change_7d.toString().slice(0, 1) !==
                "-"
              }
            >{`${data?.quotes.USD.percent_change_7d}%`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Volume Change 24hours :</TagTitle>
            <TagContent
              isMinus={
                data?.quotes.USD.volume_24h_change_24h
                  .toString()
                  .slice(0, 1) !== "-"
              }
            >{`$${data?.quotes.USD.volume_24h_change_24h}`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Maximum Price : </TagTitle>
            <TagContent
              isMinus={
                data?.quotes.USD.ath_price.toString().slice(0, 1) !== "-"
              }
            >{`$${data?.quotes.USD.ath_price.toFixed(3)}`}</TagContent>
          </Tags>
          <Tags>
            <TagTitle>Maximum Price Date : </TagTitle>
            <TagContent isMinus={true}>{`${data?.quotes.USD.ath_date.slice(
              0,
              10
            )}`}</TagContent>
          </Tags>
        </Container>
      )}
    </ContainerDiv>
  );
}

export default Price;
