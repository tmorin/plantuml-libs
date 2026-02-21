# Replay


```text
material/Av/Replay
```

```text
include('material/Av/Replay')
```



| Illustration | Replay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Replay.png) | ![illustration for Replay](../../material/Av/Replay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplayXs>`
- `<$ReplaySm>`
- `<$ReplayMd>`
- `<$ReplayLg>`





## Replay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Replay
include('material/Av/Replay')

' renders the element
Replay('Replay', 'Replay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replay
include('material/Av/Replay')

' renders the element
Replay('Replay', 'Replay', 'an optional tech label', 'an optional description')
@enduml
```

