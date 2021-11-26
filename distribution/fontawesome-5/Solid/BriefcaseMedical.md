# BriefcaseMedical


```text
fontawesome-5/Solid/BriefcaseMedical
```

```text
include('fontawesome-5/Solid/BriefcaseMedical')
```



| Illustration | BriefcaseMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BriefcaseMedical.png) | ![illustration for BriefcaseMedical](../../fontawesome-5/Solid/BriefcaseMedical.Local.png) |




## BriefcaseMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BriefcaseMedical
include('fontawesome-5/Solid/BriefcaseMedical')

' renders the element
BriefcaseMedical('BriefcaseMedical', 'Briefcase Medical', 'an optional tech label')
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

' loads the Item which embeds the element BriefcaseMedical
include('fontawesome-5/Solid/BriefcaseMedical')

' renders the element
BriefcaseMedical('BriefcaseMedical', 'Briefcase Medical', 'an optional tech label')
@enduml
```

