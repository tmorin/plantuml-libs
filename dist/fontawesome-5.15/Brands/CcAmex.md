# Cc Amex

```text
fontawesome-5.15/Brands/CcAmex
```

```text
include('fontawesome-5.15/Brands/CcAmex')
```

|icon|element|
|---|---|
|![](CcAmex.png)|![](CcAmex.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the CcAmex element
include('fontawesome-5.15/Brands/CcAmex')
CcAmex('cc_amex', 'Cc Amex', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the CcAmex element
include('fontawesome-5.15/Brands/CcAmex')
CcAmex('cc_amex', 'Cc Amex', 'an optional tech field')
@enduml
```

