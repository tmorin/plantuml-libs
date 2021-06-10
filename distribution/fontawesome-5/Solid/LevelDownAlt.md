# LevelDownAlt


```text
fontawesome-5/Solid/LevelDownAlt
```

```text
include('fontawesome-5/Solid/LevelDownAlt')
```



| Illustration | LevelDownAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LevelDownAlt.png) | ![illustration for LevelDownAlt](../../fontawesome-5/Solid/LevelDownAlt.Local.png) |




## LevelDownAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LevelDownAlt
include('fontawesome-5/Solid/LevelDownAlt')

' renders the element
LevelDownAlt('LevelDownAlt', 'Level Down Alt', 'an optional tech label')
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

' loads the Item which embeds the element LevelDownAlt
include('fontawesome-5/Solid/LevelDownAlt')

' renders the element
LevelDownAlt('LevelDownAlt', 'Level Down Alt', 'an optional tech label')
@enduml
```

