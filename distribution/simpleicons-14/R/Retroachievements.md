# Retroachievements


```text
simpleicons-14/R/Retroachievements
```

```text
include('simpleicons-14/R/Retroachievements')
```



| Illustration | Retroachievements |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Retroachievements.png) | ![illustration for Retroachievements](../../simpleicons-14/R/Retroachievements.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RetroachievementsXs>`
- `<$RetroachievementsSm>`
- `<$RetroachievementsMd>`
- `<$RetroachievementsLg>`





## Retroachievements

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Retroachievements
include('simpleicons-14/R/Retroachievements')

' renders the element
Retroachievements('Retroachievements', 'Retroachievements', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Retroachievements
include('simpleicons-14/R/Retroachievements')

' renders the element
Retroachievements('Retroachievements', 'Retroachievements', 'an optional tech label', 'an optional description')
@enduml
```

