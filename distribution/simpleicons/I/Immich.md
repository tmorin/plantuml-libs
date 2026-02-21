# Immich


```text
simpleicons/I/Immich
```

```text
include('simpleicons/I/Immich')
```



| Illustration | Immich |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Immich.png) | ![illustration for Immich](../../simpleicons/I/Immich.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Immich
include('simpleicons/I/Immich')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Immich
include('simpleicons/I/Immich')

' renders the element
Immich('Immich', 'Immich', 'an optional tech label', 'an optional description')
@enduml
```

