# Netgear


```text
simpleicons-14/N/Netgear
```

```text
include('simpleicons-14/N/Netgear')
```



| Illustration | Netgear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Netgear.png) | ![illustration for Netgear](../../simpleicons-14/N/Netgear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetgearXs>`
- `<$NetgearSm>`
- `<$NetgearMd>`
- `<$NetgearLg>`





## Netgear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netgear
include('simpleicons-14/N/Netgear')

' renders the element
Netgear('Netgear', 'Netgear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Netgear
include('simpleicons-14/N/Netgear')

' renders the element
Netgear('Netgear', 'Netgear', 'an optional tech label', 'an optional description')
@enduml
```

