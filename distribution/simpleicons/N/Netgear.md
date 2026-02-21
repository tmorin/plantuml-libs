# Netgear


```text
simpleicons/N/Netgear
```

```text
include('simpleicons/N/Netgear')
```



| Illustration | Netgear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Netgear.png) | ![illustration for Netgear](../../simpleicons/N/Netgear.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netgear
include('simpleicons/N/Netgear')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netgear
include('simpleicons/N/Netgear')

' renders the element
Netgear('Netgear', 'Netgear', 'an optional tech label', 'an optional description')
@enduml
```

