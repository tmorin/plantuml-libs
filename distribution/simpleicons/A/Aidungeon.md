# Aidungeon


```text
simpleicons/A/Aidungeon
```

```text
include('simpleicons/A/Aidungeon')
```



| Illustration | Aidungeon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Aidungeon.png) | ![illustration for Aidungeon](../../simpleicons/A/Aidungeon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AidungeonXs>`
- `<$AidungeonSm>`
- `<$AidungeonMd>`
- `<$AidungeonLg>`





## Aidungeon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aidungeon
include('simpleicons/A/Aidungeon')

' renders the element
Aidungeon('Aidungeon', 'Aidungeon', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aidungeon
include('simpleicons/A/Aidungeon')

' renders the element
Aidungeon('Aidungeon', 'Aidungeon', 'an optional tech label', 'an optional description')
@enduml
```

