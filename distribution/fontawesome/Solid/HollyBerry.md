# HollyBerry


```text
fontawesome/Solid/HollyBerry
```

```text
include('fontawesome/Solid/HollyBerry')
```



| Illustration | HollyBerry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HollyBerry.png) | ![illustration for HollyBerry](../../fontawesome/Solid/HollyBerry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HollyBerryXs>`
- `<$HollyBerrySm>`
- `<$HollyBerryMd>`
- `<$HollyBerryLg>`





## HollyBerry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HollyBerry
include('fontawesome/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HollyBerry
include('fontawesome/Solid/HollyBerry')

' renders the element
HollyBerry('HollyBerry', 'Holly Berry', 'an optional tech label', 'an optional description')
@enduml
```

