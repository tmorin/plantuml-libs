# HouseMedical


```text
fontawesome-6/Solid/HouseMedical
```

```text
include('fontawesome-6/Solid/HouseMedical')
```



| Illustration | HouseMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseMedical.png) | ![illustration for HouseMedical](../../fontawesome-6/Solid/HouseMedical.Local.png) |




## HouseMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseMedical
include('fontawesome-6/Solid/HouseMedical')

' renders the element
HouseMedical('HouseMedical', 'House Medical', 'an optional tech label')
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

' loads the Item which embeds the element HouseMedical
include('fontawesome-6/Solid/HouseMedical')

' renders the element
HouseMedical('HouseMedical', 'House Medical', 'an optional tech label')
@enduml
```

