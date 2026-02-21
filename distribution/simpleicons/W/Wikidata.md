# Wikidata


```text
simpleicons/W/Wikidata
```

```text
include('simpleicons/W/Wikidata')
```



| Illustration | Wikidata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wikidata.png) | ![illustration for Wikidata](../../simpleicons/W/Wikidata.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons/W/Wikidata')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons/W/Wikidata')

' renders the element
Wikidata('Wikidata', 'Wikidata', 'an optional tech label', 'an optional description')
@enduml
```

