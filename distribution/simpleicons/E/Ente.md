# Ente


```text
simpleicons/E/Ente
```

```text
include('simpleicons/E/Ente')
```



| Illustration | Ente |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Ente.png) | ![illustration for Ente](../../simpleicons/E/Ente.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnteXs>`
- `<$EnteSm>`
- `<$EnteMd>`
- `<$EnteLg>`





## Ente

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ente
include('simpleicons/E/Ente')

' renders the element
Ente('Ente', 'Ente', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ente
include('simpleicons/E/Ente')

' renders the element
Ente('Ente', 'Ente', 'an optional tech label', 'an optional description')
@enduml
```

