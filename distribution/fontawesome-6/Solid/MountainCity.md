# MountainCity


```text
fontawesome-6/Solid/MountainCity
```

```text
include('fontawesome-6/Solid/MountainCity')
```



| Illustration | MountainCity |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MountainCity.png) | ![illustration for MountainCity](../../fontawesome-6/Solid/MountainCity.Local.png) |




## MountainCity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MountainCity
include('fontawesome-6/Solid/MountainCity')

' renders the element
MountainCity('MountainCity', 'Mountain City', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MountainCity
include('fontawesome-6/Solid/MountainCity')

' renders the element
MountainCity('MountainCity', 'Mountain City', 'an optional tech label', 'an optional description')
@enduml
```

