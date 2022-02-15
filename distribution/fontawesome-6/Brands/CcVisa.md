# CcVisa


```text
fontawesome-6/Brands/CcVisa
```

```text
include('fontawesome-6/Brands/CcVisa')
```



| Illustration | CcVisa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CcVisa.png) | ![illustration for CcVisa](../../fontawesome-6/Brands/CcVisa.Local.png) |




## CcVisa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcVisa
include('fontawesome-6/Brands/CcVisa')

' renders the element
CcVisa('CcVisa', 'Cc Visa', 'an optional tech label')
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

' loads the Item which embeds the element CcVisa
include('fontawesome-6/Brands/CcVisa')

' renders the element
CcVisa('CcVisa', 'Cc Visa', 'an optional tech label')
@enduml
```

