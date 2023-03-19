# TruckDroplet


```text
fontawesome-6/Solid/TruckDroplet
```

```text
include('fontawesome-6/Solid/TruckDroplet')
```



| Illustration | TruckDroplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckDroplet.png) | ![illustration for TruckDroplet](../../fontawesome-6/Solid/TruckDroplet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckDropletXs>`
- `<$TruckDropletSm>`
- `<$TruckDropletMd>`
- `<$TruckDropletLg>`





## TruckDroplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckDroplet
include('fontawesome-6/Solid/TruckDroplet')

' renders the element
TruckDroplet('TruckDroplet', 'Truck Droplet', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckDroplet
include('fontawesome-6/Solid/TruckDroplet')

' renders the element
TruckDroplet('TruckDroplet', 'Truck Droplet', 'an optional tech label', 'an optional description')
@enduml
```

