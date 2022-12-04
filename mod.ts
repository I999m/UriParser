
export class Uri{
  host:string
  protocol: string
  path:string
  queryString:{[key:string]: string}

  constructor(_host?:string, _protocol?:string, _path?:string, _queryString?: {[key:string]: string}){
    this.host = _host === undefined ? "": _host;
    this.protocol = _protocol  === undefined ? "": _protocol;
    this.path = _path  === undefined ? "": _path;
    this.queryString = _queryString  === undefined ? {}: _queryString;
  }
}


export function UriParser(_uri:string): Uri{

  const ParsedUri = new Uri;
  
  if(_uri === "") return ParsedUri;
  if(_uri === null) return ParsedUri;
  if(_uri === undefined) return ParsedUri;


  const getWithoutQueryString = (getQueryString: string[]) =>{
    const not_QueryString = getQueryString[0];

    const scheme_domain_path = not_QueryString.split("://");
    
    const domain_path = scheme_domain_path[scheme_domain_path.length - 1].split("/");

    ParsedUri.host = domain_path[0];
    
    //domainを削除
    // ["domain", "path"].splice(0,1);
    // ["path"]
    domain_path.splice(0,1)
  
    ParsedUri.path = `/${domain_path.join("/")}`;

    ParsedUri.protocol = scheme_domain_path[0];
  }

  const getQueryString = _uri.split("?");
  if(getQueryString.length > 1){
    //QueryStringあり

    getWithoutQueryString(getQueryString);

    const queryList = getQueryString[getQueryString.length -1].split("&");
          queryList.forEach( query => {
          const key_value = query.split("=");
          ParsedUri.queryString[key_value[0]] = key_value[1];
      });


  } else{
    //QueryStringなし
    getWithoutQueryString(getQueryString);

  }

  return ParsedUri;
}
