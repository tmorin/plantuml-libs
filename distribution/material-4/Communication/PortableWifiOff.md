# PortableWifiOff


```text
material-4/Communication/PortableWifiOff
```

```text
include('material-4/Communication/PortableWifiOff')
```



| Illustration | PortableWifiOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PortableWifiOff.png) | ![illustration for PortableWifiOff](../../material-4/Communication/PortableWifiOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PortableWifiOffXs>`
- `<$PortableWifiOffSm>`
- `<$PortableWifiOffMd>`
- `<$PortableWifiOffLg>`





## PortableWifiOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PortableWifiOff
include('material-4/Communication/PortableWifiOff')

' renders the element
PortableWifiOff('PortableWifiOff', 'Portable Wifi Off', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PortableWifiOff
include('material-4/Communication/PortableWifiOff')

' renders the element
PortableWifiOff('PortableWifiOff', 'Portable Wifi Off', 'an optional tech label', 'an optional description')
@enduml
```

