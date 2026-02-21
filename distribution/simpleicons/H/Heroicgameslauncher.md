# Heroicgameslauncher


```text
simpleicons/H/Heroicgameslauncher
```

```text
include('simpleicons/H/Heroicgameslauncher')
```



| Illustration | Heroicgameslauncher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Heroicgameslauncher.png) | ![illustration for Heroicgameslauncher](../../simpleicons/H/Heroicgameslauncher.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeroicgameslauncherXs>`
- `<$HeroicgameslauncherSm>`
- `<$HeroicgameslauncherMd>`
- `<$HeroicgameslauncherLg>`





## Heroicgameslauncher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Heroicgameslauncher
include('simpleicons/H/Heroicgameslauncher')

' renders the element
Heroicgameslauncher('Heroicgameslauncher', 'Heroicgameslauncher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Heroicgameslauncher
include('simpleicons/H/Heroicgameslauncher')

' renders the element
Heroicgameslauncher('Heroicgameslauncher', 'Heroicgameslauncher', 'an optional tech label', 'an optional description')
@enduml
```

