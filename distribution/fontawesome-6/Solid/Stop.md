# Stop


```text
fontawesome-6/Solid/Stop
```

```text
include('fontawesome-6/Solid/Stop')
```



| Illustration | Stop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Stop.png) | ![illustration for Stop](../../fontawesome-6/Solid/Stop.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome-6/Solid/Stop')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stop
include('fontawesome-6/Solid/Stop')

' renders the element
Stop('Stop', 'Stop', 'an optional tech label', 'an optional description')
@enduml
```

