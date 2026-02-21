# Openwrt


```text
simpleicons/O/Openwrt
```

```text
include('simpleicons/O/Openwrt')
```



| Illustration | Openwrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openwrt.png) | ![illustration for Openwrt](../../simpleicons/O/Openwrt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenwrtXs>`
- `<$OpenwrtSm>`
- `<$OpenwrtMd>`
- `<$OpenwrtLg>`





## Openwrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openwrt
include('simpleicons/O/Openwrt')

' renders the element
Openwrt('Openwrt', 'Openwrt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openwrt
include('simpleicons/O/Openwrt')

' renders the element
Openwrt('Openwrt', 'Openwrt', 'an optional tech label', 'an optional description')
@enduml
```

