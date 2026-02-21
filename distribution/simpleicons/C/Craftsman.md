# Craftsman


```text
simpleicons/C/Craftsman
```

```text
include('simpleicons/C/Craftsman')
```



| Illustration | Craftsman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Craftsman.png) | ![illustration for Craftsman](../../simpleicons/C/Craftsman.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CraftsmanXs>`
- `<$CraftsmanSm>`
- `<$CraftsmanMd>`
- `<$CraftsmanLg>`





## Craftsman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Craftsman
include('simpleicons/C/Craftsman')

' renders the element
Craftsman('Craftsman', 'Craftsman', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Craftsman
include('simpleicons/C/Craftsman')

' renders the element
Craftsman('Craftsman', 'Craftsman', 'an optional tech label', 'an optional description')
@enduml
```

