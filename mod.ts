export class UriPaser{
    private uri:string
  
    constructor(_uri:string){
      // Remove " http:// "
      this.uri = _uri.replace(_uri.match("^[ -~]*(://)")?.[0]!,"");
    }
    public getPathToString(): string{
  
      var _uri = this.uri.split("/");
      
      //Remove Domain
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
  
    public toString(): string {
      return this.uri;
    }
    public toList(): string[]{
      return this.uri.split("/");
    }
  }