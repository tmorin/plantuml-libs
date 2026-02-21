# Netim


```text
simpleicons/N/Netim
```

```text
include('simpleicons/N/Netim')
```



| Illustration | Netim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Netim.png) | ![illustration for Netim](../../simpleicons/N/Netim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetimXs>`
- `<$NetimSm>`
- `<$NetimMd>`
- `<$NetimLg>`





## Netim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netim
include('simpleicons/N/Netim')

' renders the element
Netim('Netim', 'Netim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Netim
include('simpleicons/N/Netim')

' renders the element
Netim('Netim', 'Netim', 'an optional tech label', 'an optional description')
@enduml
```

