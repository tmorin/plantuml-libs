# FilePrescription


```text
fontawesome-5/Solid/FilePrescription
```

```text
include('fontawesome-5/Solid/FilePrescription')
```



| Illustration | FilePrescription |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FilePrescription.png) | ![illustration for FilePrescription](../../fontawesome-5/Solid/FilePrescription.Local.png) |




## FilePrescription

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FilePrescription
include('fontawesome-5/Solid/FilePrescription')

' renders the element
FilePrescription('FilePrescription', 'File Prescription', 'an optional tech label')
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

' loads the Item which embeds the element FilePrescription
include('fontawesome-5/Solid/FilePrescription')

' renders the element
FilePrescription('FilePrescription', 'File Prescription', 'an optional tech label')
@enduml
```

