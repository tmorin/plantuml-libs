# SelfSubjectAccessReview


```text
c4k8s/Element/SelfSubjectAccessReview
```

```text
include('c4k8s/Element/SelfSubjectAccessReview')
```



| SelfSubjectAccessReview |
| :---: |
| ![illustration for SelfSubjectAccessReview](../../c4k8s/Element/SelfSubjectAccessReview.Local.png) |




## SelfSubjectAccessReview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element SelfSubjectAccessReview
include('c4k8s/Element/SelfSubjectAccessReview')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectAccessReview('SelfSubjectAccessReview', 'Self Subject Access Review', 'an optional description label')
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

' loads the Item which embeds the element SelfSubjectAccessReview
include('c4k8s/Element/SelfSubjectAccessReview')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectAccessReview('SelfSubjectAccessReview', 'Self Subject Access Review', 'an optional description label')
@enduml
```

