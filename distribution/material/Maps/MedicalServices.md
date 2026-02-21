# MedicalServices


```text
material/Maps/MedicalServices
```

```text
include('material/Maps/MedicalServices')
```



| Illustration | MedicalServices |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/MedicalServices.png) | ![illustration for MedicalServices](../../material/Maps/MedicalServices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MedicalServicesXs>`
- `<$MedicalServicesSm>`
- `<$MedicalServicesMd>`
- `<$MedicalServicesLg>`





## MedicalServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MedicalServices
include('material/Maps/MedicalServices')

' renders the element
MedicalServices('MedicalServices', 'Medical Services', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element MedicalServices
include('material/Maps/MedicalServices')

' renders the element
MedicalServices('MedicalServices', 'Medical Services', 'an optional tech label', 'an optional description')
@enduml
```

