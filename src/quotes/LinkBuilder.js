const linkStringBase = "https://twitter.com/intent/tweet?text=";

export function buildLink(quote, author) {
  let quoteString = quote.replace(/\s/g, "%20");
  let authorString = "%20-";
  authorString.concat(author);

  let linkString = linkStringBase.concat(quoteString);
  linkString = linkString.concat(authorString);
  console.log(linkString);

  return linkString;
}
