# LaptopMedical


```text
fontawesome/Solid/LaptopMedical
```

```text
include('fontawesome/Solid/LaptopMedical')
```



| Illustration | LaptopMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LaptopMedical.png) | ![illustration for LaptopMedical](../../fontawesome/Solid/LaptopMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaptopMedicalXs>`
- `<$LaptopMedicalSm>`
- `<$LaptopMedicalMd>`
- `<$LaptopMedicalLg>`





## LaptopMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaptopMedical
include('fontawesome/Solid/LaptopMedical')

' renders the element
LaptopMedical('LaptopMedical', 'Laptop Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaptopMedical
include('fontawesome/Solid/LaptopMedical')

' renders the element
LaptopMedical('LaptopMedical', 'Laptop Medical', 'an optional tech label', 'an optional description')
@enduml
```

