# Cora


```text
simpleicons-14/C/Cora
```

```text
include('simpleicons-14/C/Cora')
```



| Illustration | Cora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cora.png) | ![illustration for Cora](../../simpleicons-14/C/Cora.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoraXs>`
- `<$CoraSm>`
- `<$CoraMd>`
- `<$CoraLg>`





## Cora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cora
include('simpleicons-14/C/Cora')

' renders the element
Cora('Cora', 'Cora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cora
include('simpleicons-14/C/Cora')

' renders the element
Cora('Cora', 'Cora', 'an optional tech label', 'an optional description')
@enduml
```

