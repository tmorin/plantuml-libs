# FilterCenterFocus


```text
material-4/Image/FilterCenterFocus
```

```text
include('material-4/Image/FilterCenterFocus')
```



| Illustration | FilterCenterFocus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FilterCenterFocus.png) | ![illustration for FilterCenterFocus](../../material-4/Image/FilterCenterFocus.Local.png) |




## FilterCenterFocus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterCenterFocus
include('material-4/Image/FilterCenterFocus')

' renders the element
FilterCenterFocus('FilterCenterFocus', 'Filter Center Focus', 'an optional tech label')
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

' loads the Item which embeds the element FilterCenterFocus
include('material-4/Image/FilterCenterFocus')

' renders the element
FilterCenterFocus('FilterCenterFocus', 'Filter Center Focus', 'an optional tech label')
@enduml
```

