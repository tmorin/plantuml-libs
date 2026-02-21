# Rocket


```text
simpleicons/R/Rocket
```

```text
include('simpleicons/R/Rocket')
```



| Illustration | Rocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rocket.png) | ![illustration for Rocket](../../simpleicons/R/Rocket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RocketXs>`
- `<$RocketSm>`
- `<$RocketMd>`
- `<$RocketLg>`





## Rocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rocket
include('simpleicons/R/Rocket')

' renders the element
Rocket('Rocket', 'Rocket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rocket
include('simpleicons/R/Rocket')

' renders the element
Rocket('Rocket', 'Rocket', 'an optional tech label', 'an optional description')
@enduml
```

