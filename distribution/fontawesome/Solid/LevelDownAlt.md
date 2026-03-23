# LevelDownAlt


```text
fontawesome/Solid/LevelDownAlt
```

```text
include('fontawesome/Solid/LevelDownAlt')
```



| Illustration | LevelDownAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LevelDownAlt.png) | ![illustration for LevelDownAlt](../../fontawesome/Solid/LevelDownAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LevelDownAltXs>`
- `<$LevelDownAltSm>`
- `<$LevelDownAltMd>`
- `<$LevelDownAltLg>`





## LevelDownAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LevelDownAlt
include('fontawesome/Solid/LevelDownAlt')

' renders the element
LevelDownAlt('LevelDownAlt', 'Level Down Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LevelDownAlt
include('fontawesome/Solid/LevelDownAlt')

' renders the element
LevelDownAlt('LevelDownAlt', 'Level Down Alt', 'an optional tech label', 'an optional description')
@enduml
```

