# HouseMedicalFlag


```text
fontawesome-6/Solid/HouseMedicalFlag
```

```text
include('fontawesome-6/Solid/HouseMedicalFlag')
```



| Illustration | HouseMedicalFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseMedicalFlag.png) | ![illustration for HouseMedicalFlag](../../fontawesome-6/Solid/HouseMedicalFlag.Local.png) |




## HouseMedicalFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseMedicalFlag
include('fontawesome-6/Solid/HouseMedicalFlag')

' renders the element
HouseMedicalFlag('HouseMedicalFlag', 'House Medical Flag', 'an optional tech label')
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

' loads the Item which embeds the element HouseMedicalFlag
include('fontawesome-6/Solid/HouseMedicalFlag')

' renders the element
HouseMedicalFlag('HouseMedicalFlag', 'House Medical Flag', 'an optional tech label')
@enduml
```

