# Wikiversity


```text
simpleicons-14/W/Wikiversity
```

```text
include('simpleicons-14/W/Wikiversity')
```



| Illustration | Wikiversity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wikiversity.png) | ![illustration for Wikiversity](../../simpleicons-14/W/Wikiversity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikiversityXs>`
- `<$WikiversitySm>`
- `<$WikiversityMd>`
- `<$WikiversityLg>`





## Wikiversity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wikiversity
include('simpleicons-14/W/Wikiversity')

' renders the element
Wikiversity('Wikiversity', 'Wikiversity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikiversity
include('simpleicons-14/W/Wikiversity')

' renders the element
Wikiversity('Wikiversity', 'Wikiversity', 'an optional tech label', 'an optional description')
@enduml
```

