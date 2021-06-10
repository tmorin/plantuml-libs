# Dungeon


```text
fontawesome-5/Solid/Dungeon
```

```text
include('fontawesome-5/Solid/Dungeon')
```



| Illustration | Dungeon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dungeon.png) | ![illustration for Dungeon](../../fontawesome-5/Solid/Dungeon.Local.png) |




## Dungeon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dungeon
include('fontawesome-5/Solid/Dungeon')

' renders the element
Dungeon('Dungeon', 'Dungeon', 'an optional tech label')
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

' loads the Item which embeds the element Dungeon
include('fontawesome-5/Solid/Dungeon')

' renders the element
Dungeon('Dungeon', 'Dungeon', 'an optional tech label')
@enduml
```

