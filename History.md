
1.0.1 / 2025-09-14
==================

 * move biome to dev dependencies

1.0.0 / 2025-09-14
==================

 * fix build badge in README
 * use `Object.fromEntries` to construct new objects
 * remove unused `str2obj` util
 * migrate to ESM format
 * use `biome` as a linter and formatter

0.0.5 / 2024-03-06
==================

 * handle addresses with unknown country or missing parts

0.0.4 / 2024-02-22
==================

 * if in doubt treat the last part as state rather than country when normalizing address

0.0.3 / 2024-02-18
==================

 * recognize 'United States' as US
 * remove zip from American normalized address

0.0.2 / 2024-02-11
==================

 * more country aliases
 * handle normalized addresses with no leading commas
 * rename field city to 'town' in the address structure
 * rename field state to 'province' in the address structure

0.0.1 / 2024-02-11
==================

 * Initial revision.
