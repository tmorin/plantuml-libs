# CircleStop


```text
fontawesome/Solid/CircleStop
```

```text
include('fontawesome/Solid/CircleStop')
```



| Illustration | CircleStop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleStop.png) | ![illustration for CircleStop](../../fontawesome/Solid/CircleStop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleStopXs>`
- `<$CircleStopSm>`
- `<$CircleStopMd>`
- `<$CircleStopLg>`





## CircleStop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleStop
include('fontawesome/Solid/CircleStop')

' renders the element
CircleStop('CircleStop', 'Circle Stop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleStop
include('fontawesome/Solid/CircleStop')

' renders the element
CircleStop('CircleStop', 'Circle Stop', 'an optional tech label', 'an optional description')
@enduml
```

