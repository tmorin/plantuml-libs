# Vibration


```text
material/Notification/Vibration
```

```text
include('material/Notification/Vibration')
```



| Illustration | Vibration |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/Vibration.png) | ![illustration for Vibration](../../material/Notification/Vibration.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VibrationXs>`
- `<$VibrationSm>`
- `<$VibrationMd>`
- `<$VibrationLg>`





## Vibration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Vibration
include('material/Notification/Vibration')

' renders the element
Vibration('Vibration', 'Vibration', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Vibration
include('material/Notification/Vibration')

' renders the element
Vibration('Vibration', 'Vibration', 'an optional tech label', 'an optional description')
@enduml
```

