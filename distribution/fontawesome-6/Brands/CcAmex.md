# CcAmex


```text
fontawesome-6/Brands/CcAmex
```

```text
include('fontawesome-6/Brands/CcAmex')
```



| Illustration | CcAmex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CcAmex.png) | ![illustration for CcAmex](../../fontawesome-6/Brands/CcAmex.Local.png) |




## CcAmex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CcAmex
include('fontawesome-6/Brands/CcAmex')

' renders the element
CcAmex('CcAmex', 'Cc Amex', 'an optional tech label')
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

' loads the Item which embeds the element CcAmex
include('fontawesome-6/Brands/CcAmex')

' renders the element
CcAmex('CcAmex', 'Cc Amex', 'an optional tech label')
@enduml
```

