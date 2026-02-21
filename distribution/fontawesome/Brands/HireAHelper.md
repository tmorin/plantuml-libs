# HireAHelper


```text
fontawesome/Brands/HireAHelper
```

```text
include('fontawesome/Brands/HireAHelper')
```



| Illustration | HireAHelper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/HireAHelper.png) | ![illustration for HireAHelper](../../fontawesome/Brands/HireAHelper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HireAHelperXs>`
- `<$HireAHelperSm>`
- `<$HireAHelperMd>`
- `<$HireAHelperLg>`





## HireAHelper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HireAHelper
include('fontawesome/Brands/HireAHelper')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HireAHelper
include('fontawesome/Brands/HireAHelper')

' renders the element
HireAHelper('HireAHelper', 'Hire A Helper', 'an optional tech label', 'an optional description')
@enduml
```

