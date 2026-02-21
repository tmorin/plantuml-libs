# Gamescience


```text
simpleicons/G/Gamescience
```

```text
include('simpleicons/G/Gamescience')
```



| Illustration | Gamescience |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gamescience.png) | ![illustration for Gamescience](../../simpleicons/G/Gamescience.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamescienceXs>`
- `<$GamescienceSm>`
- `<$GamescienceMd>`
- `<$GamescienceLg>`





## Gamescience

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gamescience
include('simpleicons/G/Gamescience')

' renders the element
Gamescience('Gamescience', 'Gamescience', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamescience
include('simpleicons/G/Gamescience')

' renders the element
Gamescience('Gamescience', 'Gamescience', 'an optional tech label', 'an optional description')
@enduml
```

