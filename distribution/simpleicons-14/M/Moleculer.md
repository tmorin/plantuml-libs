# Moleculer


```text
simpleicons-14/M/Moleculer
```

```text
include('simpleicons-14/M/Moleculer')
```



| Illustration | Moleculer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Moleculer.png) | ![illustration for Moleculer](../../simpleicons-14/M/Moleculer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoleculerXs>`
- `<$MoleculerSm>`
- `<$MoleculerMd>`
- `<$MoleculerLg>`





## Moleculer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Moleculer
include('simpleicons-14/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moleculer
include('simpleicons-14/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label', 'an optional description')
@enduml
```

