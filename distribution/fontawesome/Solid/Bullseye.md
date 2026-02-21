# Bullseye


```text
fontawesome/Solid/Bullseye
```

```text
include('fontawesome/Solid/Bullseye')
```



| Illustration | Bullseye |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bullseye.png) | ![illustration for Bullseye](../../fontawesome/Solid/Bullseye.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BullseyeXs>`
- `<$BullseyeSm>`
- `<$BullseyeMd>`
- `<$BullseyeLg>`





## Bullseye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bullseye
include('fontawesome/Solid/Bullseye')

' renders the element
Bullseye('Bullseye', 'Bullseye', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bullseye
include('fontawesome/Solid/Bullseye')

' renders the element
Bullseye('Bullseye', 'Bullseye', 'an optional tech label', 'an optional description')
@enduml
```

