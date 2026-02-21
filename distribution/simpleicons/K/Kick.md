# Kick


```text
simpleicons/K/Kick
```

```text
include('simpleicons/K/Kick')
```



| Illustration | Kick |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kick.png) | ![illustration for Kick](../../simpleicons/K/Kick.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KickXs>`
- `<$KickSm>`
- `<$KickMd>`
- `<$KickLg>`





## Kick

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kick
include('simpleicons/K/Kick')

' renders the element
Kick('Kick', 'Kick', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kick
include('simpleicons/K/Kick')

' renders the element
Kick('Kick', 'Kick', 'an optional tech label', 'an optional description')
@enduml
```

