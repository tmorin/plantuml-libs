# HeartPulse


```text
fontawesome-6/Solid/HeartPulse
```

```text
include('fontawesome-6/Solid/HeartPulse')
```



| Illustration | HeartPulse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HeartPulse.png) | ![illustration for HeartPulse](../../fontawesome-6/Solid/HeartPulse.Local.png) |




## HeartPulse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HeartPulse
include('fontawesome-6/Solid/HeartPulse')

' renders the element
HeartPulse('HeartPulse', 'Heart Pulse', 'an optional tech label')
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

' loads the Item which embeds the element HeartPulse
include('fontawesome-6/Solid/HeartPulse')

' renders the element
HeartPulse('HeartPulse', 'Heart Pulse', 'an optional tech label')
@enduml
```

