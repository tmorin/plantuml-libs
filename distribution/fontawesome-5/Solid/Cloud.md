# Cloud


```text
fontawesome-5/Solid/Cloud
```

```text
include('fontawesome-5/Solid/Cloud')
```



| Illustration | Cloud |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cloud.png) | ![illustration for Cloud](../../fontawesome-5/Solid/Cloud.Local.png) |




## Cloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cloud
include('fontawesome-5/Solid/Cloud')

' renders the element
Cloud('Cloud', 'Cloud', 'an optional tech label')
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

' loads the Item which embeds the element Cloud
include('fontawesome-5/Solid/Cloud')

' renders the element
Cloud('Cloud', 'Cloud', 'an optional tech label')
@enduml
```

