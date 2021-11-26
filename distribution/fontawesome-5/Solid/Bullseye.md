# Bullseye


```text
fontawesome-5/Solid/Bullseye
```

```text
include('fontawesome-5/Solid/Bullseye')
```



| Illustration | Bullseye |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bullseye.png) | ![illustration for Bullseye](../../fontawesome-5/Solid/Bullseye.Local.png) |




## Bullseye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bullseye
include('fontawesome-5/Solid/Bullseye')

' renders the element
Bullseye('Bullseye', 'Bullseye', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bullseye
include('fontawesome-5/Solid/Bullseye')

' renders the element
Bullseye('Bullseye', 'Bullseye', 'an optional tech label')
@enduml
```

