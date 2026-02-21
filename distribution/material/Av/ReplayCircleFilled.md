# ReplayCircleFilled


```text
material/Av/ReplayCircleFilled
```

```text
include('material/Av/ReplayCircleFilled')
```



| Illustration | ReplayCircleFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/ReplayCircleFilled.png) | ![illustration for ReplayCircleFilled](../../material/Av/ReplayCircleFilled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplayCircleFilledXs>`
- `<$ReplayCircleFilledSm>`
- `<$ReplayCircleFilledMd>`
- `<$ReplayCircleFilledLg>`





## ReplayCircleFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ReplayCircleFilled
include('material/Av/ReplayCircleFilled')

' renders the element
ReplayCircleFilled('ReplayCircleFilled', 'Replay Circle Filled', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element ReplayCircleFilled
include('material/Av/ReplayCircleFilled')

' renders the element
ReplayCircleFilled('ReplayCircleFilled', 'Replay Circle Filled', 'an optional tech label', 'an optional description')
@enduml
```

