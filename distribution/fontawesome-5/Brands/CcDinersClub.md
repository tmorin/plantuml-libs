# CcDinersClub


```text
fontawesome-5/Brands/CcDinersClub
```

```text
include('fontawesome-5/Brands/CcDinersClub')
```



| Illustration | CcDinersClub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CcDinersClub.png) | ![illustration for CcDinersClub](../../fontawesome-5/Brands/CcDinersClub.Local.png) |




## CcDinersClub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CcDinersClub
include('fontawesome-5/Brands/CcDinersClub')

' renders the element
CcDinersClub('CcDinersClub', 'Cc Diners Club', 'an optional tech label')
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

' loads the Item which embeds the element CcDinersClub
include('fontawesome-5/Brands/CcDinersClub')

' renders the element
CcDinersClub('CcDinersClub', 'Cc Diners Club', 'an optional tech label')
@enduml
```

