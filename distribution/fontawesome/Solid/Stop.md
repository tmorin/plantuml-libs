# Stop


```text
fontawesome/Solid/Stop
```

```text
include('fontawesome/Solid/Stop')
```



| Illustration | Stop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stop.png) | ![illustration for Stop](../../fontawesome/Solid/Stop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StopXs>`
- `<$StopSm>`
- `<$StopMd>`
- `<$StopLg>`





## Stop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome/Solid/Stop')

' renders the element
Stop('Stop', 'Stop', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome/Solid/Stop')

' renders the element
Stop('Stop', 'Stop', 'an optional tech label', 'an optional description')
@enduml
```

