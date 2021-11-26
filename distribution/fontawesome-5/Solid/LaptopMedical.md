# LaptopMedical


```text
fontawesome-5/Solid/LaptopMedical
```

```text
include('fontawesome-5/Solid/LaptopMedical')
```



| Illustration | LaptopMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LaptopMedical.png) | ![illustration for LaptopMedical](../../fontawesome-5/Solid/LaptopMedical.Local.png) |




## LaptopMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LaptopMedical
include('fontawesome-5/Solid/LaptopMedical')

' renders the element
LaptopMedical('LaptopMedical', 'Laptop Medical', 'an optional tech label')
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

' loads the Item which embeds the element LaptopMedical
include('fontawesome-5/Solid/LaptopMedical')

' renders the element
LaptopMedical('LaptopMedical', 'Laptop Medical', 'an optional tech label')
@enduml
```

