# UriParser

## about

I don't know but, couldn't parse URI, so i made it.


## exmaple

```
const uri = "https://example.com/script/type?key=value&type=script";

const parse = UriParser(uri);

console.log(parse)


///////////////////////////////////////////////////////////
//
//  Uri {
//      host: "example.com",
//      protocol: "https",
//      path: "/script/type",
//      queryString: { key: "value", type: "script" }
//  }


```
## support

- [x] protocol
- [x] host
- [x] path
- [x] queryString

## some

If you find something interesting, please contact me






