# Moleculer


```text
simpleicons/M/Moleculer
```

```text
include('simpleicons/M/Moleculer')
```



| Illustration | Moleculer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Moleculer.png) | ![illustration for Moleculer](../../simpleicons/M/Moleculer.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Moleculer
include('simpleicons/M/Moleculer')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Moleculer
include('simpleicons/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label', 'an optional description')
@enduml
```

