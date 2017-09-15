import parse from './parse';
import Model from './Model';

let rawData = `CENTRE_NAME,LATITUDE,LONGITUDE,ADDRESS,URLLINK
Britannia,49.2756,-123.0738,1661 Napier St,http://vancouver.ca/parks/cc/britannia/index.htm
Carnegie Centre,49.2811,-123.1001,401 Main St,http://vancouver.ca/commsvcs/CARNEGIECENTRE/index.htm
Roundhouse,49.2733,-123.1217,181 Roundhouse Mews,http://vancouver.ca/parks/cc/roundhouse/index.htm
Coal Harbour,49.2902,-123.1259,480 Broughton St,http://vancouver.ca/parks/cc/westend/index.htm
Marpole-Oakridge,49.2145,-123.1275,990 W 59th Av,http://vancouver.ca/parks/cc/marpole/index.htm
Mount Pleasant,49.2643,-123.1002,1 Kingsway,http://vancouver.ca/parks/cc/mtpleasant/index.htm
Renfrew Park,49.2524,-123.043,2929 E 22nd Av,http://vancouver.ca/parks/cc/renfrew/index.htm
Hillcrest,49.2438,-123.1079,4575 Clancy Loranger Way,http://vancouver.ca/parks-recreation-culture/hillcrest-centre.aspx
Strathcona,49.2798,-123.0915,601 Keefer St,http://vancouver.ca/parks/cc/strathcona/index.htm
Sunset,49.2229,-123.1006,6810 Main St,http://vancouver.ca/parks/cc/sunset/index.htm
Thunderbird,49.2636,-123.0321,2311 Cassiar St,http://vancouver.ca/parks/cc/thunderbird/index.htm
Trout Lake,49.2553,-123.0655,3360 Victoria Drive,http://vancouver.ca/parks/cc/troutlake/index.htm
West End,49.2899,-123.1361,870 Denman St,http://vancouver.ca/parks/cc/westend/index.htm
West Point Grey,49.2718,-123.2045,4397 W 2nd Av,http://vancouver.ca/parks/cc/westptgrey/index.htm
False Creek,49.2694,-123.134,1318 Cartwright St,http://vancouver.ca/parks/cc/falsecreek/index.htm
Champlain Heights,49.2144,-123.0321,3350 Maquinna Drive,http://vancouver.ca/parks/cc/champla/index.htm
Ray-Cam Co-Operative Center,49.2807,-123.0841,920 E Hastings St,http://vancouver.ca/parks/cc/raycam/index.htm
Douglas Park,49.2529,-123.1213,801 W 22nd Av,http://vancouver.ca/parks/cc/douglas/index.htm
Dunbar,49.2428,-123.1883,4747 Dunbar St,http://vancouver.ca/parks/cc/dunbar/index.htm
Hastings,49.2809,-123.0393,3096 E Hastings St,http://vancouver.ca/parks/cc/hastings/index.htm
Kensington,49.2385,-123.0755,5175 Dumfries St,http://vancouver.ca/parks/cc/kensington/index.htm
Kerrisdale,49.2332,-123.1571,5851 West Boulevard,http://vancouver.ca/parks/cc/kerrisdale/index.htm
Killarney,49.2274,-123.0444,6260 Killarney St,http://vancouver.ca/parks/cc/killarney/index.htm
Kitsilano War Memorial,49.2621,-123.1601,2690 Larch St,http://vancouver.ca/parks/cc/kitsilano/index.htm
Creekside,49.2718,-123.1056,1 Athletes Way,http://vancouver.ca/parks/cc/creekside/index.htm
Evelyne Saller Centre,49.2839,-123.0971,320 Alexander St,http://vancouver.ca/parks-recreation-culture/evelyne-saller-centre.aspx
Gathering Place Community Centre,49.278,-123.1235,609 Helmcken St,http://vancouver.ca/parks-recreation-culture/gathering-place-community-centre.aspx`;

let createModel = () => new Model(parse(rawData));

export default createModel;
