# ExitToApp


```text
material-4/Action/ExitToApp
```

```text
include('material-4/Action/ExitToApp')
```



| Illustration | ExitToApp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ExitToApp.png) | ![illustration for ExitToApp](../../material-4/Action/ExitToApp.Local.png) |




## ExitToApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ExitToApp
include('material-4/Action/ExitToApp')

' renders the element
ExitToApp('ExitToApp', 'Exit To App', 'an optional tech label')
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

' loads the Item which embeds the element ExitToApp
include('material-4/Action/ExitToApp')

' renders the element
ExitToApp('ExitToApp', 'Exit To App', 'an optional tech label')
@enduml
```

