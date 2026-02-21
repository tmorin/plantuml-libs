# Tailscale


```text
simpleicons/T/Tailscale
```

```text
include('simpleicons/T/Tailscale')
```



| Illustration | Tailscale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tailscale.png) | ![illustration for Tailscale](../../simpleicons/T/Tailscale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TailscaleXs>`
- `<$TailscaleSm>`
- `<$TailscaleMd>`
- `<$TailscaleLg>`





## Tailscale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tailscale
include('simpleicons/T/Tailscale')

' renders the element
Tailscale('Tailscale', 'Tailscale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tailscale
include('simpleicons/T/Tailscale')

' renders the element
Tailscale('Tailscale', 'Tailscale', 'an optional tech label', 'an optional description')
@enduml
```

