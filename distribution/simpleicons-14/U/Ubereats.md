# Ubereats


```text
simpleicons-14/U/Ubereats
```

```text
include('simpleicons-14/U/Ubereats')
```



| Illustration | Ubereats |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ubereats.png) | ![illustration for Ubereats](../../simpleicons-14/U/Ubereats.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UbereatsXs>`
- `<$UbereatsSm>`
- `<$UbereatsMd>`
- `<$UbereatsLg>`





## Ubereats

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ubereats
include('simpleicons-14/U/Ubereats')

' renders the element
Ubereats('Ubereats', 'Ubereats', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ubereats
include('simpleicons-14/U/Ubereats')

' renders the element
Ubereats('Ubereats', 'Ubereats', 'an optional tech label', 'an optional description')
@enduml
```

