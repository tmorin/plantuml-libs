# Turso


```text
simpleicons/T/Turso
```

```text
include('simpleicons/T/Turso')
```



| Illustration | Turso |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Turso.png) | ![illustration for Turso](../../simpleicons/T/Turso.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TursoXs>`
- `<$TursoSm>`
- `<$TursoMd>`
- `<$TursoLg>`





## Turso

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Turso
include('simpleicons/T/Turso')

' renders the element
Turso('Turso', 'Turso', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Turso
include('simpleicons/T/Turso')

' renders the element
Turso('Turso', 'Turso', 'an optional tech label', 'an optional description')
@enduml
```

