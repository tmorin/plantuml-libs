# FileMedicalAlt


```text
fontawesome-5/Solid/FileMedicalAlt
```

```text
include('fontawesome-5/Solid/FileMedicalAlt')
```



| Illustration | FileMedicalAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileMedicalAlt.png) | ![illustration for FileMedicalAlt](../../fontawesome-5/Solid/FileMedicalAlt.Local.png) |




## FileMedicalAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileMedicalAlt
include('fontawesome-5/Solid/FileMedicalAlt')

' renders the element
FileMedicalAlt('FileMedicalAlt', 'File Medical Alt', 'an optional tech label')
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

' loads the Item which embeds the element FileMedicalAlt
include('fontawesome-5/Solid/FileMedicalAlt')

' renders the element
FileMedicalAlt('FileMedicalAlt', 'File Medical Alt', 'an optional tech label')
@enduml
```

