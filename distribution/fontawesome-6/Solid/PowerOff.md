# PowerOff


```text
fontawesome-6/Solid/PowerOff
```

```text
include('fontawesome-6/Solid/PowerOff')
```



| Illustration | PowerOff |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PowerOff.png) | ![illustration for PowerOff](../../fontawesome-6/Solid/PowerOff.Local.png) |




## PowerOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PowerOff
include('fontawesome-6/Solid/PowerOff')

' renders the element
PowerOff('PowerOff', 'Power Off', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PowerOff
include('fontawesome-6/Solid/PowerOff')

' renders the element
PowerOff('PowerOff', 'Power Off', 'an optional tech label', 'an optional description')
@enduml
```

