# NavigateNext


```text
material-4/Image/NavigateNext
```

```text
include('material-4/Image/NavigateNext')
```



| Illustration | NavigateNext |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/NavigateNext.png) | ![illustration for NavigateNext](../../material-4/Image/NavigateNext.Local.png) |




## NavigateNext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NavigateNext
include('material-4/Image/NavigateNext')

' renders the element
NavigateNext('NavigateNext', 'Navigate Next', 'an optional tech label')
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

' loads the Item which embeds the element NavigateNext
include('material-4/Image/NavigateNext')

' renders the element
NavigateNext('NavigateNext', 'Navigate Next', 'an optional tech label')
@enduml
```

