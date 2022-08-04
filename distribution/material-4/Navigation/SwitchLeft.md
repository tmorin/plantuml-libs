# SwitchLeft


```text
material-4/Navigation/SwitchLeft
```

```text
include('material-4/Navigation/SwitchLeft')
```



| Illustration | SwitchLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/SwitchLeft.png) | ![illustration for SwitchLeft](../../material-4/Navigation/SwitchLeft.Local.png) |




## SwitchLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchLeft
include('material-4/Navigation/SwitchLeft')

' renders the element
SwitchLeft('SwitchLeft', 'Switch Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwitchLeft
include('material-4/Navigation/SwitchLeft')

' renders the element
SwitchLeft('SwitchLeft', 'Switch Left', 'an optional tech label', 'an optional description')
@enduml
```

