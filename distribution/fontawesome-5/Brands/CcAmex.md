# CcAmex


```text
fontawesome-5/Brands/CcAmex
```

```text
include('fontawesome-5/Brands/CcAmex')
```



| Illustration | CcAmex |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CcAmex.png) | ![illustration for CcAmex](../../fontawesome-5/Brands/CcAmex.Local.png) |




## CcAmex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcAmex
include('fontawesome-5/Brands/CcAmex')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcAmex
include('fontawesome-5/Brands/CcAmex')

' renders the element
CcAmex('CcAmex', 'Cc Amex', 'an optional tech label')
@enduml
```

