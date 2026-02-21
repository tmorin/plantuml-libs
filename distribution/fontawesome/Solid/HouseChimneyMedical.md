# HouseChimneyMedical


```text
fontawesome/Solid/HouseChimneyMedical
```

```text
include('fontawesome/Solid/HouseChimneyMedical')
```



| Illustration | HouseChimneyMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseChimneyMedical.png) | ![illustration for HouseChimneyMedical](../../fontawesome/Solid/HouseChimneyMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseChimneyMedicalXs>`
- `<$HouseChimneyMedicalSm>`
- `<$HouseChimneyMedicalMd>`
- `<$HouseChimneyMedicalLg>`





## HouseChimneyMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseChimneyMedical
include('fontawesome/Solid/HouseChimneyMedical')

' renders the element
HouseChimneyMedical('HouseChimneyMedical', 'House Chimney Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseChimneyMedical
include('fontawesome/Solid/HouseChimneyMedical')

' renders the element
HouseChimneyMedical('HouseChimneyMedical', 'House Chimney Medical', 'an optional tech label', 'an optional description')
@enduml
```

