# Netim


```text
simpleicons-14/N/Netim
```

```text
include('simpleicons-14/N/Netim')
```



| Illustration | Netim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Netim.png) | ![illustration for Netim](../../simpleicons-14/N/Netim.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netim
include('simpleicons-14/N/Netim')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netim
include('simpleicons-14/N/Netim')

' renders the element
Netim('Netim', 'Netim', 'an optional tech label', 'an optional description')
@enduml
```

