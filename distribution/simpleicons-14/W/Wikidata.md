# Wikidata


```text
simpleicons-14/W/Wikidata
```

```text
include('simpleicons-14/W/Wikidata')
```



| Illustration | Wikidata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wikidata.png) | ![illustration for Wikidata](../../simpleicons-14/W/Wikidata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikidataXs>`
- `<$WikidataSm>`
- `<$WikidataMd>`
- `<$WikidataLg>`





## Wikidata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons-14/W/Wikidata')

' renders the element
Wikidata('Wikidata', 'Wikidata', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons-14/W/Wikidata')

' renders the element
Wikidata('Wikidata', 'Wikidata', 'an optional tech label', 'an optional description')
@enduml
```

