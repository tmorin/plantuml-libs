# AutoAwesomeMotion


```text
material-4/Image/AutoAwesomeMotion
```

```text
include('material-4/Image/AutoAwesomeMotion')
```



| Illustration | AutoAwesomeMotion |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoAwesomeMotion.png) | ![illustration for AutoAwesomeMotion](../../material-4/Image/AutoAwesomeMotion.Local.png) |




## AutoAwesomeMotion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoAwesomeMotion
include('material-4/Image/AutoAwesomeMotion')

' renders the element
AutoAwesomeMotion('AutoAwesomeMotion', 'Auto Awesome Motion', 'an optional tech label')
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

' loads the Item which embeds the element AutoAwesomeMotion
include('material-4/Image/AutoAwesomeMotion')

' renders the element
AutoAwesomeMotion('AutoAwesomeMotion', 'Auto Awesome Motion', 'an optional tech label')
@enduml
```

