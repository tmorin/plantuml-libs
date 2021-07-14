# SavedSearch


```text
material-4/Action/SavedSearch
```

```text
include('material-4/Action/SavedSearch')
```



| Illustration | SavedSearch |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SavedSearch.png) | ![illustration for SavedSearch](../../material-4/Action/SavedSearch.Local.png) |




## SavedSearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SavedSearch
include('material-4/Action/SavedSearch')

' renders the element
SavedSearch('SavedSearch', 'Saved Search', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SavedSearch
include('material-4/Action/SavedSearch')

' renders the element
SavedSearch('SavedSearch', 'Saved Search', 'an optional tech label')
@enduml
```

