# Hono


```text
simpleicons-14/H/Hono
```

```text
include('simpleicons-14/H/Hono')
```



| Illustration | Hono |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hono.png) | ![illustration for Hono](../../simpleicons-14/H/Hono.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HonoXs>`
- `<$HonoSm>`
- `<$HonoMd>`
- `<$HonoLg>`





## Hono

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hono
include('simpleicons-14/H/Hono')

' renders the element
Hono('Hono', 'Hono', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hono
include('simpleicons-14/H/Hono')

' renders the element
Hono('Hono', 'Hono', 'an optional tech label', 'an optional description')
@enduml
```

