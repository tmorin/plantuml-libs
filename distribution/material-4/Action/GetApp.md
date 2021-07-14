# GetApp


```text
material-4/Action/GetApp
```

```text
include('material-4/Action/GetApp')
```



| Illustration | GetApp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/GetApp.png) | ![illustration for GetApp](../../material-4/Action/GetApp.Local.png) |




## GetApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GetApp
include('material-4/Action/GetApp')

' renders the element
GetApp('GetApp', 'Get App', 'an optional tech label')
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

' loads the Item which embeds the element GetApp
include('material-4/Action/GetApp')

' renders the element
GetApp('GetApp', 'Get App', 'an optional tech label')
@enduml
```

