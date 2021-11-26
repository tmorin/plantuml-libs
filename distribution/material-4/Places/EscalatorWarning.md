# EscalatorWarning


```text
material-4/Places/EscalatorWarning
```

```text
include('material-4/Places/EscalatorWarning')
```



| Illustration | EscalatorWarning |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/EscalatorWarning.png) | ![illustration for EscalatorWarning](../../material-4/Places/EscalatorWarning.Local.png) |




## EscalatorWarning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EscalatorWarning
include('material-4/Places/EscalatorWarning')

' renders the element
EscalatorWarning('EscalatorWarning', 'Escalator Warning', 'an optional tech label')
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

' loads the Item which embeds the element EscalatorWarning
include('material-4/Places/EscalatorWarning')

' renders the element
EscalatorWarning('EscalatorWarning', 'Escalator Warning', 'an optional tech label')
@enduml
```

