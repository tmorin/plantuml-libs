# Hospital


```text
fontawesome-5/Solid/Hospital
```

```text
include('fontawesome-5/Solid/Hospital')
```



| Illustration | Hospital |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hospital.png) | ![illustration for Hospital](../../fontawesome-5/Solid/Hospital.Local.png) |




## Hospital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hospital
include('fontawesome-5/Solid/Hospital')

' renders the element
Hospital('Hospital', 'Hospital', 'an optional tech label')
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

' loads the Item which embeds the element Hospital
include('fontawesome-5/Solid/Hospital')

' renders the element
Hospital('Hospital', 'Hospital', 'an optional tech label')
@enduml
```

