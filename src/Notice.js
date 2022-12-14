export default function Notice({ data }) {
  const loading = Object.keys(data).length === 0;

  if (loading) {
    return <div id="notice">Loading...</div>;
  } else if (data.error) {
    return <div id="notice">{data.error}</div>;
  } else {
    return <div id="notice"> Information About {data.name}</div>;
  }
}
