# Polestar


```text
simpleicons-14/P/Polestar
```

```text
include('simpleicons-14/P/Polestar')
```



| Illustration | Polestar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Polestar.png) | ![illustration for Polestar](../../simpleicons-14/P/Polestar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PolestarXs>`
- `<$PolestarSm>`
- `<$PolestarMd>`
- `<$PolestarLg>`





## Polestar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Polestar
include('simpleicons-14/P/Polestar')

' renders the element
Polestar('Polestar', 'Polestar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Polestar
include('simpleicons-14/P/Polestar')

' renders the element
Polestar('Polestar', 'Polestar', 'an optional tech label', 'an optional description')
@enduml
```

