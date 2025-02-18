# Starship


```text
simpleicons-14/S/Starship
```

```text
include('simpleicons-14/S/Starship')
```



| Illustration | Starship |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Starship.png) | ![illustration for Starship](../../simpleicons-14/S/Starship.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Starship
include('simpleicons-14/S/Starship')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Starship
include('simpleicons-14/S/Starship')

' renders the element
Starship('Starship', 'Starship', 'an optional tech label', 'an optional description')
@enduml
```

