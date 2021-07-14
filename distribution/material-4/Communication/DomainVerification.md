# DomainVerification


```text
material-4/Communication/DomainVerification
```

```text
include('material-4/Communication/DomainVerification')
```



| Illustration | DomainVerification |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/DomainVerification.png) | ![illustration for DomainVerification](../../material-4/Communication/DomainVerification.Local.png) |




## DomainVerification

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DomainVerification
include('material-4/Communication/DomainVerification')

' renders the element
DomainVerification('DomainVerification', 'Domain Verification', 'an optional tech label')
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

' loads the Item which embeds the element DomainVerification
include('material-4/Communication/DomainVerification')

' renders the element
DomainVerification('DomainVerification', 'Domain Verification', 'an optional tech label')
@enduml
```

