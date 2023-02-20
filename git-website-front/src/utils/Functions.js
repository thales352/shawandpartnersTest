export function formatDate(iso) {
  const date = new Date(iso);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  return date.toLocaleString("en-US", options);
}
export function formatLinks(linkHeader) {
  const linkRegex = /<([^>]+)>;\s*rel="([^"]+)"/g;
  let matches;
  let links = [];
  while ((matches = linkRegex.exec(linkHeader)) !== null) {
    links.push({ url: matches[1], rel: matches[2] });
  }
  return links;
}
