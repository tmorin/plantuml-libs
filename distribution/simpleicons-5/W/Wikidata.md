# Wikidata


```text
simpleicons-5/W/Wikidata
```

```text
include('simpleicons-5/W/Wikidata')
```



| Illustration | Wikidata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wikidata.png) | ![illustration for Wikidata](../../simpleicons-5/W/Wikidata.Local.png) |




## Wikidata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons-5/W/Wikidata')

' renders the element
Wikidata('Wikidata', 'Wikidata', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wikidata
include('simpleicons-5/W/Wikidata')

' renders the element
Wikidata('Wikidata', 'Wikidata', 'an optional tech label')
@enduml
```

