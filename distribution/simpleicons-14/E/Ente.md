# Ente


```text
simpleicons-14/E/Ente
```

```text
include('simpleicons-14/E/Ente')
```



| Illustration | Ente |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ente.png) | ![illustration for Ente](../../simpleicons-14/E/Ente.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ente
include('simpleicons-14/E/Ente')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ente
include('simpleicons-14/E/Ente')

' renders the element
Ente('Ente', 'Ente', 'an optional tech label', 'an optional description')
@enduml
```

