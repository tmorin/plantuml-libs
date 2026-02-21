# Immich


```text
simpleicons-14/I/Immich
```

```text
include('simpleicons-14/I/Immich')
```



| Illustration | Immich |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Immich.png) | ![illustration for Immich](../../simpleicons-14/I/Immich.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImmichXs>`
- `<$ImmichSm>`
- `<$ImmichMd>`
- `<$ImmichLg>`





## Immich

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Immich
include('simpleicons-14/I/Immich')

' renders the element
Immich('Immich', 'Immich', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Immich
include('simpleicons-14/I/Immich')

' renders the element
Immich('Immich', 'Immich', 'an optional tech label', 'an optional description')
@enduml
```

