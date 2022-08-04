# Openwrt


```text
simpleicons-7/O/Openwrt
```

```text
include('simpleicons-7/O/Openwrt')
```



| Illustration | Openwrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openwrt.png) | ![illustration for Openwrt](../../simpleicons-7/O/Openwrt.Local.png) |




## Openwrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openwrt
include('simpleicons-7/O/Openwrt')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openwrt
include('simpleicons-7/O/Openwrt')

' renders the element
Openwrt('Openwrt', 'Openwrt', 'an optional tech label', 'an optional description')
@enduml
```

