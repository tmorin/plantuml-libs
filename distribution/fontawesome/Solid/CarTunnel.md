# CarTunnel


```text
fontawesome/Solid/CarTunnel
```

```text
include('fontawesome/Solid/CarTunnel')
```



| Illustration | CarTunnel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarTunnel.png) | ![illustration for CarTunnel](../../fontawesome/Solid/CarTunnel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarTunnelXs>`
- `<$CarTunnelSm>`
- `<$CarTunnelMd>`
- `<$CarTunnelLg>`





## CarTunnel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarTunnel
include('fontawesome/Solid/CarTunnel')

' renders the element
CarTunnel('CarTunnel', 'Car Tunnel', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarTunnel
include('fontawesome/Solid/CarTunnel')

' renders the element
CarTunnel('CarTunnel', 'Car Tunnel', 'an optional tech label', 'an optional description')
@enduml
```

