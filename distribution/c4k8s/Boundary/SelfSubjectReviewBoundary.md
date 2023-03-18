# SelfSubjectReviewBoundary


```text
c4k8s/Boundary/SelfSubjectReviewBoundary
```

```text
include('c4k8s/Boundary/SelfSubjectReviewBoundary')
```



| SelfSubjectReviewBoundary |
| :---: |
| ![illustration for SelfSubjectReviewBoundary](../../c4k8s/Boundary/SelfSubjectReviewBoundary.Local.png) |




## SelfSubjectReviewBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element SelfSubjectReviewBoundary
include('c4k8s/Boundary/SelfSubjectReviewBoundary')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectReviewBoundary('SelfSubjectReviewBoundary', 'Self Subject Review Boundary') {
  note as note
  the content of the boundary
  end note
}
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

' loads the Item which embeds the element SelfSubjectReviewBoundary
include('c4k8s/Boundary/SelfSubjectReviewBoundary')

' load the c4model package
include('c4model/bootstrap')
SelfSubjectReviewBoundary('SelfSubjectReviewBoundary', 'Self Subject Review Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

