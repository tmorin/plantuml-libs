# Spaceship


```text
simpleicons/S/Spaceship
```

```text
include('simpleicons/S/Spaceship')
```



| Illustration | Spaceship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spaceship.png) | ![illustration for Spaceship](../../simpleicons/S/Spaceship.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpaceshipXs>`
- `<$SpaceshipSm>`
- `<$SpaceshipMd>`
- `<$SpaceshipLg>`





## Spaceship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spaceship
include('simpleicons/S/Spaceship')

' renders the element
Spaceship('Spaceship', 'Spaceship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spaceship
include('simpleicons/S/Spaceship')

' renders the element
Spaceship('Spaceship', 'Spaceship', 'an optional tech label', 'an optional description')
@enduml
```

