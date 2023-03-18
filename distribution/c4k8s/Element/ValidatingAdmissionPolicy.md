# ValidatingAdmissionPolicy


```text
c4k8s/Element/ValidatingAdmissionPolicy
```

```text
include('c4k8s/Element/ValidatingAdmissionPolicy')
```



| ValidatingAdmissionPolicy |
| :---: |
| ![illustration for ValidatingAdmissionPolicy](../../c4k8s/Element/ValidatingAdmissionPolicy.Local.png) |




## ValidatingAdmissionPolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ValidatingAdmissionPolicy
include('c4k8s/Element/ValidatingAdmissionPolicy')

' load the c4model package
include('c4model/bootstrap')
ValidatingAdmissionPolicy('ValidatingAdmissionPolicy', 'Validating Admission Policy', 'an optional description label')
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
include('c4k8s/bootstrap')

' loads the Item which embeds the element ValidatingAdmissionPolicy
include('c4k8s/Element/ValidatingAdmissionPolicy')

' load the c4model package
include('c4model/bootstrap')
ValidatingAdmissionPolicy('ValidatingAdmissionPolicy', 'Validating Admission Policy', 'an optional description label')
@enduml
```

