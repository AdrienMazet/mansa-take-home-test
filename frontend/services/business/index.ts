const VERTICAL_ART_SIREN = 833084205;

export const getBusiness = async () => {
  const res = await fetch(
    `https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/${VERTICAL_ART_SIREN}`,
  );
  const data = await res.json();
  const { siren, denomination, date_creation, etablissement_siege } =
    data.unite_legale;
  return {
    siren,
    name: denomination,
    creationDate: date_creation,
    address: etablissement_siege.geo_adresse,
  } as Business;
};
