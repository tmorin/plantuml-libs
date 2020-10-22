# {{= it.pageName }}
{{ const families = Object.keys(it.entriesByFamily).sort(); }}
The module {{= it.pageName }} contains {{= it.entries.length }} entries.
{{ for (familyName of families.filter(f => f !== '_')) { }}
- [{{= familyName }}](#family-{{= familyName.toLowerCase() }}){{ } }}

{{
for (familyName of families) {
const entries = it.entriesByFamily[familyName];
if (familyName !== '_' )  {
}}
<span id="family-{{= familyName.toLowerCase() }}"></span>
## {{= familyName }}
{{ } }}
| |Name|
|:---:|---|{{ for (entry of entries) { }}
|![{{= entry.element.name }}](../{{= entry.image }})|[{{= entry.element.urn }}](../{{= entry.element.urn }}.md){{ } }}
{{ } }}
