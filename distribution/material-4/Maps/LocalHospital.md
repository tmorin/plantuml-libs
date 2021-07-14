# LocalHospital


```text
material-4/Maps/LocalHospital
```

```text
include('material-4/Maps/LocalHospital')
```



| Illustration | LocalHospital |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalHospital.png) | ![illustration for LocalHospital](../../material-4/Maps/LocalHospital.Local.png) |




## LocalHospital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalHospital
include('material-4/Maps/LocalHospital')

' renders the element
LocalHospital('LocalHospital', 'Local Hospital', 'an optional tech label')
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

' loads the Item which embeds the element LocalHospital
include('material-4/Maps/LocalHospital')

' renders the element
LocalHospital('LocalHospital', 'Local Hospital', 'an optional tech label')
@enduml
```

