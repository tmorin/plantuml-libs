# AutoFixOff


```text
material-4/Image/AutoFixOff
```

```text
include('material-4/Image/AutoFixOff')
```



| Illustration | AutoFixOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoFixOff.png) | ![illustration for AutoFixOff](../../material-4/Image/AutoFixOff.Local.png) |




## AutoFixOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoFixOff
include('material-4/Image/AutoFixOff')

' renders the element
AutoFixOff('AutoFixOff', 'Auto Fix Off', 'an optional tech label')
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

' loads the Item which embeds the element AutoFixOff
include('material-4/Image/AutoFixOff')

' renders the element
AutoFixOff('AutoFixOff', 'Auto Fix Off', 'an optional tech label')
@enduml
```

