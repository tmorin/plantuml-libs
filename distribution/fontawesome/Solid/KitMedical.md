# KitMedical


```text
fontawesome/Solid/KitMedical
```

```text
include('fontawesome/Solid/KitMedical')
```



| Illustration | KitMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/KitMedical.png) | ![illustration for KitMedical](../../fontawesome/Solid/KitMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KitMedicalXs>`
- `<$KitMedicalSm>`
- `<$KitMedicalMd>`
- `<$KitMedicalLg>`





## KitMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KitMedical
include('fontawesome/Solid/KitMedical')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element KitMedical
include('fontawesome/Solid/KitMedical')

' renders the element
KitMedical('KitMedical', 'Kit Medical', 'an optional tech label', 'an optional description')
@enduml
```

