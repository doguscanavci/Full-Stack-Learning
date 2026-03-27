export const Karakter = ({ karakter }) => {
  return (
    <div className="karakter-card">
      <h3>{karakter.name}</h3>
      <p>
        <span class="label">Birth year</span>
        <span class="value">{karakter.birth_year}</span>
      </p>
      <p>
        <span class="label">Eye color</span>
        <span class="value">{karakter.eye_color}</span>
      </p>
      <p>
        <span class="label">Gender</span>
        <span class="value">{karakter.gender}</span>
      </p>
      <p>
        <span class="label">Height</span>
        <span class="value">{karakter.height}</span>
      </p>
      <p>
        <span class="label">Mass</span>
        <span class="value">{karakter.mass}</span>
      </p>
      <p>
        <span class="label">Skin color</span>
        <span class="value">{karakter.skin_color}</span>
      </p>
    </div>
  );
};
