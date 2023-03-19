# HouseSignal


```text
fontawesome-6/Solid/HouseSignal
```

```text
include('fontawesome-6/Solid/HouseSignal')
```



| Illustration | HouseSignal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseSignal.png) | ![illustration for HouseSignal](../../fontawesome-6/Solid/HouseSignal.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseSignal
include('fontawesome-6/Solid/HouseSignal')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseSignal
include('fontawesome-6/Solid/HouseSignal')

' renders the element
HouseSignal('HouseSignal', 'House Signal', 'an optional tech label', 'an optional description')
@enduml
```

