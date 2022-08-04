# HandHoldingMedical


```text
fontawesome-6/Solid/HandHoldingMedical
```

```text
include('fontawesome-6/Solid/HandHoldingMedical')
```



| Illustration | HandHoldingMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandHoldingMedical.png) | ![illustration for HandHoldingMedical](../../fontawesome-6/Solid/HandHoldingMedical.Local.png) |




## HandHoldingMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHoldingMedical
include('fontawesome-6/Solid/HandHoldingMedical')

' renders the element
HandHoldingMedical('HandHoldingMedical', 'Hand Holding Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingMedical
include('fontawesome-6/Solid/HandHoldingMedical')

' renders the element
HandHoldingMedical('HandHoldingMedical', 'Hand Holding Medical', 'an optional tech label', 'an optional description')
@enduml
```

