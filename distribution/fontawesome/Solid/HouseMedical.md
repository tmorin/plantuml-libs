# HouseMedical


```text
fontawesome/Solid/HouseMedical
```

```text
include('fontawesome/Solid/HouseMedical')
```



| Illustration | HouseMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseMedical.png) | ![illustration for HouseMedical](../../fontawesome/Solid/HouseMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseMedicalXs>`
- `<$HouseMedicalSm>`
- `<$HouseMedicalMd>`
- `<$HouseMedicalLg>`





## HouseMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseMedical
include('fontawesome/Solid/HouseMedical')

' renders the element
HouseMedical('HouseMedical', 'House Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseMedical
include('fontawesome/Solid/HouseMedical')

' renders the element
HouseMedical('HouseMedical', 'House Medical', 'an optional tech label', 'an optional description')
@enduml
```

