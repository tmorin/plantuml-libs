# ArrowsToEye


```text
fontawesome-6/Solid/ArrowsToEye
```

```text
include('fontawesome-6/Solid/ArrowsToEye')
```



| Illustration | ArrowsToEye |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsToEye.png) | ![illustration for ArrowsToEye](../../fontawesome-6/Solid/ArrowsToEye.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsToEyeXs>`
- `<$ArrowsToEyeSm>`
- `<$ArrowsToEyeMd>`
- `<$ArrowsToEyeLg>`





## ArrowsToEye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsToEye
include('fontawesome-6/Solid/ArrowsToEye')

' renders the element
ArrowsToEye('ArrowsToEye', 'Arrows To Eye', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsToEye
include('fontawesome-6/Solid/ArrowsToEye')

' renders the element
ArrowsToEye('ArrowsToEye', 'Arrows To Eye', 'an optional tech label', 'an optional description')
@enduml
```

