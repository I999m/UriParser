
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

export class UriPaser{
    private uriString:string
    private uri:Uri

    private constructorIsNullOrEmptyOrUndefined(){
      this.uri = new Uri();
    }
  
    constructor(_uri:string){

      if(_uri === "") this.constructorIsNullOrEmptyOrUndefined();
      if(_uri === null) this.constructorIsNullOrEmptyOrUndefined();
      if(_uri === undefined) this.constructorIsNullOrEmptyOrUndefined();

    
      // https://example.com/?key=value

      //" https "を取得
      const _protocol = _uri.match("^[ -~]*(://)")?.[0]!.replace("://","")!;
      //uriStringに " example.com/ "を入れる
      this.uriString = _uri.replace(_uri.match("^[ -~]*(://)")?.[0]!,"");
      //" exmaple.com "を取得
      const _host = this.toArray()[0];
      //" / "を取得
      const _path = this.getPathToString();
      //" ?key=valu "をクエリストリングとして取得
      const _queryString = this.getQueryString();


      this.uri = new Uri(_host, _protocol, _path, _queryString);




    }


    public parse():Uri{
      return this.uri;
    }

    private toArray(): string[]{
      return this.uriString.split("/");
    }
    private getPathToString(): string{
  
      var _uri = this.toArray();
      
      //Remove host
      // example.com/main
      //  ↓
      // main
      _uri.splice(0,1)
  
      const joind_uri = `${_uri.join("/")}`;
      
      return joind_uri.slice(-1) === "/" ? `/${joind_uri.slice(0,-1)}` : `/${joind_uri}`;
      
    }
    
    private getQueryString(): {[key:string]: string}{

      const querymap: {[key:string]: string} = {};

      const queryList_string = this.uriString.split("?")[1];
      const queryList = queryList_string.split("&");

      queryList.forEach( query => {
          const key_value = query.split("=");
          querymap[key_value[0]] = key_value[1];
      });

      return querymap;



    }
  }