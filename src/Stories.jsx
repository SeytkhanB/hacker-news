import { useGlobalContext } from "./context";

export default function Stories() {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <a href={url} target="_blank" className='read-link'>
              read more
            </a>
            <button onClick={() => removeStory(objectID)} className="remove-btn">remove</button>
          </article>
        );
      })}
    </section>
  );
}
