# MobileVibrate


```text
fontawesome/Solid/MobileVibrate
```

```text
include('fontawesome/Solid/MobileVibrate')
```



| Illustration | MobileVibrate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileVibrate.png) | ![illustration for MobileVibrate](../../fontawesome/Solid/MobileVibrate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileVibrateXs>`
- `<$MobileVibrateSm>`
- `<$MobileVibrateMd>`
- `<$MobileVibrateLg>`





## MobileVibrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileVibrate
include('fontawesome/Solid/MobileVibrate')

' renders the element
MobileVibrate('MobileVibrate', 'Mobile Vibrate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileVibrate
include('fontawesome/Solid/MobileVibrate')

' renders the element
MobileVibrate('MobileVibrate', 'Mobile Vibrate', 'an optional tech label', 'an optional description')
@enduml
```

