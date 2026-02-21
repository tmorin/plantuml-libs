# Starship


```text
simpleicons/S/Starship
```

```text
include('simpleicons/S/Starship')
```



| Illustration | Starship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Starship.png) | ![illustration for Starship](../../simpleicons/S/Starship.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarshipXs>`
- `<$StarshipSm>`
- `<$StarshipMd>`
- `<$StarshipLg>`





## Starship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Starship
include('simpleicons/S/Starship')

' renders the element
Starship('Starship', 'Starship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Starship
include('simpleicons/S/Starship')

' renders the element
Starship('Starship', 'Starship', 'an optional tech label', 'an optional description')
@enduml
```

