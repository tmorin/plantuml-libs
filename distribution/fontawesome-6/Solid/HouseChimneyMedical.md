# HouseChimneyMedical


```text
fontawesome-6/Solid/HouseChimneyMedical
```

```text
include('fontawesome-6/Solid/HouseChimneyMedical')
```



| Illustration | HouseChimneyMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseChimneyMedical.png) | ![illustration for HouseChimneyMedical](../../fontawesome-6/Solid/HouseChimneyMedical.Local.png) |




## HouseChimneyMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseChimneyMedical
include('fontawesome-6/Solid/HouseChimneyMedical')

' renders the element
HouseChimneyMedical('HouseChimneyMedical', 'House Chimney Medical', 'an optional tech label')
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

' loads the Item which embeds the element HouseChimneyMedical
include('fontawesome-6/Solid/HouseChimneyMedical')

' renders the element
HouseChimneyMedical('HouseChimneyMedical', 'House Chimney Medical', 'an optional tech label')
@enduml
```

