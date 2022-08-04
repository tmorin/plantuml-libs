# LandmarkFlag


```text
fontawesome-6/Solid/LandmarkFlag
```

```text
include('fontawesome-6/Solid/LandmarkFlag')
```



| Illustration | LandmarkFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LandmarkFlag.png) | ![illustration for LandmarkFlag](../../fontawesome-6/Solid/LandmarkFlag.Local.png) |




## LandmarkFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LandmarkFlag
include('fontawesome-6/Solid/LandmarkFlag')

' renders the element
LandmarkFlag('LandmarkFlag', 'Landmark Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LandmarkFlag
include('fontawesome-6/Solid/LandmarkFlag')

' renders the element
LandmarkFlag('LandmarkFlag', 'Landmark Flag', 'an optional tech label', 'an optional description')
@enduml
```

