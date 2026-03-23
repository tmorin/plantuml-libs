# LevelDown


```text
fontawesome/Solid/LevelDown
```

```text
include('fontawesome/Solid/LevelDown')
```



| Illustration | LevelDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LevelDown.png) | ![illustration for LevelDown](../../fontawesome/Solid/LevelDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LevelDownXs>`
- `<$LevelDownSm>`
- `<$LevelDownMd>`
- `<$LevelDownLg>`





## LevelDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LevelDown
include('fontawesome/Solid/LevelDown')

' renders the element
LevelDown('LevelDown', 'Level Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LevelDown
include('fontawesome/Solid/LevelDown')

' renders the element
LevelDown('LevelDown', 'Level Down', 'an optional tech label', 'an optional description')
@enduml
```

