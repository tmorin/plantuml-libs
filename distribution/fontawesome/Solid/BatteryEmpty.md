# BatteryEmpty


```text
fontawesome/Solid/BatteryEmpty
```

```text
include('fontawesome/Solid/BatteryEmpty')
```



| Illustration | BatteryEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BatteryEmpty.png) | ![illustration for BatteryEmpty](../../fontawesome/Solid/BatteryEmpty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryEmptyXs>`
- `<$BatteryEmptySm>`
- `<$BatteryEmptyMd>`
- `<$BatteryEmptyLg>`





## BatteryEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BatteryEmpty
include('fontawesome/Solid/BatteryEmpty')

' renders the element
BatteryEmpty('BatteryEmpty', 'Battery Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryEmpty
include('fontawesome/Solid/BatteryEmpty')

' renders the element
BatteryEmpty('BatteryEmpty', 'Battery Empty', 'an optional tech label', 'an optional description')
@enduml
```

