import tagMods from '../data/tag_mods';
import mods from '../data/mods';
// import tags from '../data/tags';
import modValues from '../data/mod_values';

export function getModsFromTag(tag) {
  const modIds = tagMods[tag];
  return modIds.map(modId => {
    return mods[modId];
  });
}

// TODO: The issue is that sifting by tags is not enough
// e.g. "claws" includes abyss mods and doesn't include its "1h" mods
// We have to somehow be able to figure out every tag of the item
// and include all mods that have just those tags and no other
