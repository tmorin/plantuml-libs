# MovieFilter


```text
material-4/Image/MovieFilter
```

```text
include('material-4/Image/MovieFilter')
```



| Illustration | MovieFilter |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/MovieFilter.png) | ![illustration for MovieFilter](../../material-4/Image/MovieFilter.Local.png) |




## MovieFilter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MovieFilter
include('material-4/Image/MovieFilter')

' renders the element
MovieFilter('MovieFilter', 'Movie Filter', 'an optional tech label')
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

' loads the Item which embeds the element MovieFilter
include('material-4/Image/MovieFilter')

' renders the element
MovieFilter('MovieFilter', 'Movie Filter', 'an optional tech label')
@enduml
```

