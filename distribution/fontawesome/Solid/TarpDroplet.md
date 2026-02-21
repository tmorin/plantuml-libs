# TarpDroplet


```text
fontawesome/Solid/TarpDroplet
```

```text
include('fontawesome/Solid/TarpDroplet')
```



| Illustration | TarpDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TarpDroplet.png) | ![illustration for TarpDroplet](../../fontawesome/Solid/TarpDroplet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TarpDropletXs>`
- `<$TarpDropletSm>`
- `<$TarpDropletMd>`
- `<$TarpDropletLg>`





## TarpDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TarpDroplet
include('fontawesome/Solid/TarpDroplet')

' renders the element
TarpDroplet('TarpDroplet', 'Tarp Droplet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TarpDroplet
include('fontawesome/Solid/TarpDroplet')

' renders the element
TarpDroplet('TarpDroplet', 'Tarp Droplet', 'an optional tech label', 'an optional description')
@enduml
```

