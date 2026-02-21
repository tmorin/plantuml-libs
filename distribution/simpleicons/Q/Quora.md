# Quora


```text
simpleicons/Q/Quora
```

```text
include('simpleicons/Q/Quora')
```



| Illustration | Quora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Quora.png) | ![illustration for Quora](../../simpleicons/Q/Quora.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuoraXs>`
- `<$QuoraSm>`
- `<$QuoraMd>`
- `<$QuoraLg>`





## Quora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Quora
include('simpleicons/Q/Quora')

' renders the element
Quora('Quora', 'Quora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quora
include('simpleicons/Q/Quora')

' renders the element
Quora('Quora', 'Quora', 'an optional tech label', 'an optional description')
@enduml
```

