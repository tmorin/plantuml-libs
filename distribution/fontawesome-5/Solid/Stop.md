# Stop


```text
fontawesome-5/Solid/Stop
```

```text
include('fontawesome-5/Solid/Stop')
```



| Illustration | Stop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Stop.png) | ![illustration for Stop](../../fontawesome-5/Solid/Stop.Local.png) |




## Stop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome-5/Solid/Stop')

' renders the element
Stop('Stop', 'Stop', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome-5/Solid/Stop')

' renders the element
Stop('Stop', 'Stop', 'an optional tech label')
@enduml
```

