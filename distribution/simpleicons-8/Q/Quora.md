# Quora


```text
simpleicons-8/Q/Quora
```

```text
include('simpleicons-8/Q/Quora')
```



| Illustration | Quora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Quora.png) | ![illustration for Quora](../../simpleicons-8/Q/Quora.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Quora
include('simpleicons-8/Q/Quora')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Quora
include('simpleicons-8/Q/Quora')

' renders the element
Quora('Quora', 'Quora', 'an optional tech label', 'an optional description')
@enduml
```

