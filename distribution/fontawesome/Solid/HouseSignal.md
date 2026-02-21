# HouseSignal


```text
fontawesome/Solid/HouseSignal
```

```text
include('fontawesome/Solid/HouseSignal')
```



| Illustration | HouseSignal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseSignal.png) | ![illustration for HouseSignal](../../fontawesome/Solid/HouseSignal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseSignalXs>`
- `<$HouseSignalSm>`
- `<$HouseSignalMd>`
- `<$HouseSignalLg>`





## HouseSignal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseSignal
include('fontawesome/Solid/HouseSignal')

' renders the element
HouseSignal('HouseSignal', 'House Signal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseSignal
include('fontawesome/Solid/HouseSignal')

' renders the element
HouseSignal('HouseSignal', 'House Signal', 'an optional tech label', 'an optional description')
@enduml
```

