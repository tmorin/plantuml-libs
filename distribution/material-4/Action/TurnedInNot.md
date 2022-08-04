# TurnedInNot


```text
material-4/Action/TurnedInNot
```

```text
include('material-4/Action/TurnedInNot')
```



| Illustration | TurnedInNot |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TurnedInNot.png) | ![illustration for TurnedInNot](../../material-4/Action/TurnedInNot.Local.png) |




## TurnedInNot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TurnedInNot
include('material-4/Action/TurnedInNot')

' renders the element
TurnedInNot('TurnedInNot', 'Turned In Not', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TurnedInNot
include('material-4/Action/TurnedInNot')

' renders the element
TurnedInNot('TurnedInNot', 'Turned In Not', 'an optional tech label', 'an optional description')
@enduml
```

