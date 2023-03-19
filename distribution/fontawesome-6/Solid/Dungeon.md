# Dungeon


```text
fontawesome-6/Solid/Dungeon
```

```text
include('fontawesome-6/Solid/Dungeon')
```



| Illustration | Dungeon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dungeon.png) | ![illustration for Dungeon](../../fontawesome-6/Solid/Dungeon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DungeonXs>`
- `<$DungeonSm>`
- `<$DungeonMd>`
- `<$DungeonLg>`





## Dungeon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dungeon
include('fontawesome-6/Solid/Dungeon')

' renders the element
Dungeon('Dungeon', 'Dungeon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dungeon
include('fontawesome-6/Solid/Dungeon')

' renders the element
Dungeon('Dungeon', 'Dungeon', 'an optional tech label', 'an optional description')
@enduml
```

