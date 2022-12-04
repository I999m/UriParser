import { UriParser } from "./mod.ts";

const withoutQueryString_uri = "https://example.com/script/type?key=value&type=script";
const withQueryString_uri = "https://example.com/script/type";

const withoutQueryString_parsed = UriParser(withoutQueryString_uri);
const withQueryString_parsed = UriParser(withQueryString_uri);

console.log("without QueryString");
console.log(withoutQueryString_parsed);
console.log("with QueryString");
console.log(withQueryString_parsed);