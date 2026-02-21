# DomainVerification


```text
material/Communication/DomainVerification
```

```text
include('material/Communication/DomainVerification')
```



| Illustration | DomainVerification |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/DomainVerification.png) | ![illustration for DomainVerification](../../material/Communication/DomainVerification.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DomainVerificationXs>`
- `<$DomainVerificationSm>`
- `<$DomainVerificationMd>`
- `<$DomainVerificationLg>`





## DomainVerification

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DomainVerification
include('material/Communication/DomainVerification')

' renders the element
DomainVerification('DomainVerification', 'Domain Verification', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DomainVerification
include('material/Communication/DomainVerification')

' renders the element
DomainVerification('DomainVerification', 'Domain Verification', 'an optional tech label', 'an optional description')
@enduml
```

