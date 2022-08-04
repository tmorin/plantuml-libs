# FilterList


```text
material-4/Content/FilterList
```

```text
include('material-4/Content/FilterList')
```



| Illustration | FilterList |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/FilterList.png) | ![illustration for FilterList](../../material-4/Content/FilterList.Local.png) |




## FilterList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FilterList
include('material-4/Content/FilterList')

' renders the element
FilterList('FilterList', 'Filter List', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilterList
include('material-4/Content/FilterList')

' renders the element
FilterList('FilterList', 'Filter List', 'an optional tech label', 'an optional description')
@enduml
```

