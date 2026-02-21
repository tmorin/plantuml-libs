# VpnKey


```text
material/Communication/VpnKey
```

```text
include('material/Communication/VpnKey')
```



| Illustration | VpnKey |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/VpnKey.png) | ![illustration for VpnKey](../../material/Communication/VpnKey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VpnKeyXs>`
- `<$VpnKeySm>`
- `<$VpnKeyMd>`
- `<$VpnKeyLg>`





## VpnKey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VpnKey
include('material/Communication/VpnKey')

' renders the element
VpnKey('VpnKey', 'Vpn Key', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element VpnKey
include('material/Communication/VpnKey')

' renders the element
VpnKey('VpnKey', 'Vpn Key', 'an optional tech label', 'an optional description')
@enduml
```

