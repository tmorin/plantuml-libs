# HouseMedicalFlag


```text
fontawesome/Solid/HouseMedicalFlag
```

```text
include('fontawesome/Solid/HouseMedicalFlag')
```



| Illustration | HouseMedicalFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseMedicalFlag.png) | ![illustration for HouseMedicalFlag](../../fontawesome/Solid/HouseMedicalFlag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseMedicalFlagXs>`
- `<$HouseMedicalFlagSm>`
- `<$HouseMedicalFlagMd>`
- `<$HouseMedicalFlagLg>`





## HouseMedicalFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseMedicalFlag
include('fontawesome/Solid/HouseMedicalFlag')

' renders the element
HouseMedicalFlag('HouseMedicalFlag', 'House Medical Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseMedicalFlag
include('fontawesome/Solid/HouseMedicalFlag')

' renders the element
HouseMedicalFlag('HouseMedicalFlag', 'House Medical Flag', 'an optional tech label', 'an optional description')
@enduml
```

