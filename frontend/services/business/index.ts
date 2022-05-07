const VERTICAL_ART_SIREN = 833084205;

export const getBusiness = async () => {
  const res = await fetch(
    `https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/${VERTICAL_ART_SIREN}`,
  );
  const data = await res.json();
  const { denomination, date_creation, etablissement_siege } =
    data.unite_legale;
  const { siret, geo_adresse } = etablissement_siege;
  return {
    siret,
    name: denomination,
    creationDate: date_creation,
    address: geo_adresse,
  } as Business;
};
