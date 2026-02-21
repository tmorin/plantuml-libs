# HandHoldingMedical


```text
fontawesome/Solid/HandHoldingMedical
```

```text
include('fontawesome/Solid/HandHoldingMedical')
```



| Illustration | HandHoldingMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandHoldingMedical.png) | ![illustration for HandHoldingMedical](../../fontawesome/Solid/HandHoldingMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingMedicalXs>`
- `<$HandHoldingMedicalSm>`
- `<$HandHoldingMedicalMd>`
- `<$HandHoldingMedicalLg>`





## HandHoldingMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingMedical
include('fontawesome/Solid/HandHoldingMedical')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandHoldingMedical
include('fontawesome/Solid/HandHoldingMedical')

' renders the element
HandHoldingMedical('HandHoldingMedical', 'Hand Holding Medical', 'an optional tech label', 'an optional description')
@enduml
```

