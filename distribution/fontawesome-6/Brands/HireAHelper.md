# HireAHelper


```text
fontawesome-6/Brands/HireAHelper
```

```text
include('fontawesome-6/Brands/HireAHelper')
```



| Illustration | HireAHelper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/HireAHelper.png) | ![illustration for HireAHelper](../../fontawesome-6/Brands/HireAHelper.Local.png) |




## HireAHelper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HireAHelper
include('fontawesome-6/Brands/HireAHelper')

' renders the element
HireAHelper('HireAHelper', 'Hire A Helper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HireAHelper
include('fontawesome-6/Brands/HireAHelper')

' renders the element
HireAHelper('HireAHelper', 'Hire A Helper', 'an optional tech label', 'an optional description')
@enduml
```

