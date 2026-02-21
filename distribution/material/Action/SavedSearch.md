# SavedSearch


```text
material/Action/SavedSearch
```

```text
include('material/Action/SavedSearch')
```



| Illustration | SavedSearch |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SavedSearch.png) | ![illustration for SavedSearch](../../material/Action/SavedSearch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SavedSearchXs>`
- `<$SavedSearchSm>`
- `<$SavedSearchMd>`
- `<$SavedSearchLg>`





## SavedSearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SavedSearch
include('material/Action/SavedSearch')

' renders the element
SavedSearch('SavedSearch', 'Saved Search', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SavedSearch
include('material/Action/SavedSearch')

' renders the element
SavedSearch('SavedSearch', 'Saved Search', 'an optional tech label', 'an optional description')
@enduml
```

