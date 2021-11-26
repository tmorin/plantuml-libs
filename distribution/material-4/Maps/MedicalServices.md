# MedicalServices


```text
material-4/Maps/MedicalServices
```

```text
include('material-4/Maps/MedicalServices')
```



| Illustration | MedicalServices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/MedicalServices.png) | ![illustration for MedicalServices](../../material-4/Maps/MedicalServices.Local.png) |




## MedicalServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MedicalServices
include('material-4/Maps/MedicalServices')

' renders the element
MedicalServices('MedicalServices', 'Medical Services', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MedicalServices
include('material-4/Maps/MedicalServices')

' renders the element
MedicalServices('MedicalServices', 'Medical Services', 'an optional tech label')
@enduml
```

