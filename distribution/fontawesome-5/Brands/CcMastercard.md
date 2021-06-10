# CcMastercard


```text
fontawesome-5/Brands/CcMastercard
```

```text
include('fontawesome-5/Brands/CcMastercard')
```



| Illustration | CcMastercard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CcMastercard.png) | ![illustration for CcMastercard](../../fontawesome-5/Brands/CcMastercard.Local.png) |




## CcMastercard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcMastercard
include('fontawesome-5/Brands/CcMastercard')

' renders the element
CcMastercard('CcMastercard', 'Cc Mastercard', 'an optional tech label')
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

' loads the Item which embeds the element CcMastercard
include('fontawesome-5/Brands/CcMastercard')

' renders the element
CcMastercard('CcMastercard', 'Cc Mastercard', 'an optional tech label')
@enduml
```

