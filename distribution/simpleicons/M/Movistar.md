# Movistar


```text
simpleicons/M/Movistar
```

```text
include('simpleicons/M/Movistar')
```



| Illustration | Movistar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Movistar.png) | ![illustration for Movistar](../../simpleicons/M/Movistar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MovistarXs>`
- `<$MovistarSm>`
- `<$MovistarMd>`
- `<$MovistarLg>`





## Movistar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Movistar
include('simpleicons/M/Movistar')

' renders the element
Movistar('Movistar', 'Movistar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Movistar
include('simpleicons/M/Movistar')

' renders the element
Movistar('Movistar', 'Movistar', 'an optional tech label', 'an optional description')
@enduml
```

