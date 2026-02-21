# PersonSearch


```text
material/Communication/PersonSearch
```

```text
include('material/Communication/PersonSearch')
```



| Illustration | PersonSearch |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PersonSearch.png) | ![illustration for PersonSearch](../../material/Communication/PersonSearch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonSearchXs>`
- `<$PersonSearchSm>`
- `<$PersonSearchMd>`
- `<$PersonSearchLg>`





## PersonSearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonSearch
include('material/Communication/PersonSearch')

' renders the element
PersonSearch('PersonSearch', 'Person Search', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PersonSearch
include('material/Communication/PersonSearch')

' renders the element
PersonSearch('PersonSearch', 'Person Search', 'an optional tech label', 'an optional description')
@enduml
```

