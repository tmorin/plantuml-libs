# Traefikmesh


```text
simpleicons-14/T/Traefikmesh
```

```text
include('simpleicons-14/T/Traefikmesh')
```



| Illustration | Traefikmesh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Traefikmesh.png) | ![illustration for Traefikmesh](../../simpleicons-14/T/Traefikmesh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TraefikmeshXs>`
- `<$TraefikmeshSm>`
- `<$TraefikmeshMd>`
- `<$TraefikmeshLg>`





## Traefikmesh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Traefikmesh
include('simpleicons-14/T/Traefikmesh')

' renders the element
Traefikmesh('Traefikmesh', 'Traefikmesh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Traefikmesh
include('simpleicons-14/T/Traefikmesh')

' renders the element
Traefikmesh('Traefikmesh', 'Traefikmesh', 'an optional tech label', 'an optional description')
@enduml
```

