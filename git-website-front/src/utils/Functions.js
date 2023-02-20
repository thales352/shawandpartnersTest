export default function formatDate(iso) {
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
