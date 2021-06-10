# LevelUpAlt


```text
fontawesome-5/Solid/LevelUpAlt
```

```text
include('fontawesome-5/Solid/LevelUpAlt')
```



| Illustration | LevelUpAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LevelUpAlt.png) | ![illustration for LevelUpAlt](../../fontawesome-5/Solid/LevelUpAlt.Local.png) |




## LevelUpAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LevelUpAlt
include('fontawesome-5/Solid/LevelUpAlt')

' renders the element
LevelUpAlt('LevelUpAlt', 'Level Up Alt', 'an optional tech label')
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

' loads the Item which embeds the element LevelUpAlt
include('fontawesome-5/Solid/LevelUpAlt')

' renders the element
LevelUpAlt('LevelUpAlt', 'Level Up Alt', 'an optional tech label')
@enduml
```

