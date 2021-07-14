# Router


```text
material-4/Hardware/Router
```

```text
include('material-4/Hardware/Router')
```



| Illustration | Router |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Router.png) | ![illustration for Router](../../material-4/Hardware/Router.Local.png) |




## Router

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Router
include('material-4/Hardware/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label')
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

' loads the Item which embeds the element Router
include('material-4/Hardware/Router')

' renders the element
Router('Router', 'Router', 'an optional tech label')
@enduml
```

