# CcMastercard


```text
fontawesome-6/Brands/CcMastercard
```

```text
include('fontawesome-6/Brands/CcMastercard')
```



| Illustration | CcMastercard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CcMastercard.png) | ![illustration for CcMastercard](../../fontawesome-6/Brands/CcMastercard.Local.png) |




## CcMastercard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcMastercard
include('fontawesome-6/Brands/CcMastercard')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcMastercard
include('fontawesome-6/Brands/CcMastercard')

' renders the element
CcMastercard('CcMastercard', 'Cc Mastercard', 'an optional tech label')
@enduml
```

