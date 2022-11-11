export class UriPaser{
    private uri:string
    private host:string
    private protocol:string
    private path:string
  
    constructor(_uri:string){

      this.protocol = _uri.match("^[ -~]*(://)")?.[0]!.replace("://","")!;
      this.uri = _uri.replace(_uri.match("^[ -~]*(://)")?.[0]!,"");
      this.host = this.toArray()[0];
      this.path = this.getPathToString();

    }

    public parse():{protocol:string, host:string, path:string}{
      return {
        protocol:this.protocol,
        host:this.host,
        path:this.path,
      }
    }
    private toArray(): string[]{
      return this.uri.split("/");
    }
    private getPathToString(): string{
  
      var _uri = this.toArray();
      
      //Remove host
      // example.com/main
      //  ↓
      // main
      _uri.splice(0,1)
  
      const joind_uri = `${_uri.join("/")}`;
  
      
      if(joind_uri.slice(-1) === "/"){
        
        return `/${joind_uri.slice(0,-1)}`;
      } 
      
      return `/${joind_uri}`;
      
    }
  }