# KitMedical


```text
fontawesome-6/Solid/KitMedical
```

```text
include('fontawesome-6/Solid/KitMedical')
```



| Illustration | KitMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/KitMedical.png) | ![illustration for KitMedical](../../fontawesome-6/Solid/KitMedical.Local.png) |




## KitMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element KitMedical
include('fontawesome-6/Solid/KitMedical')

' renders the element
KitMedical('KitMedical', 'Kit Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KitMedical
include('fontawesome-6/Solid/KitMedical')

' renders the element
KitMedical('KitMedical', 'Kit Medical', 'an optional tech label', 'an optional description')
@enduml
```

