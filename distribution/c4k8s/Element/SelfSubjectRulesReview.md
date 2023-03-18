# SelfSubjectRulesReview


```text
c4k8s/Element/SelfSubjectRulesReview
```

```text
include('c4k8s/Element/SelfSubjectRulesReview')
```



| SelfSubjectRulesReview |
| :---: |
| ![illustration for SelfSubjectRulesReview](../../c4k8s/Element/SelfSubjectRulesReview.Local.png) |




## SelfSubjectRulesReview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element SelfSubjectRulesReview
include('c4k8s/Element/SelfSubjectRulesReview')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectRulesReview('SelfSubjectRulesReview', 'Self Subject Rules Review', 'an optional description label')
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

' loads the Item which embeds the element SelfSubjectRulesReview
include('c4k8s/Element/SelfSubjectRulesReview')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectRulesReview('SelfSubjectRulesReview', 'Self Subject Rules Review', 'an optional description label')
@enduml
```

