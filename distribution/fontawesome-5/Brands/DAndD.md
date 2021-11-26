# DAndD


```text
fontawesome-5/Brands/DAndD
```

```text
include('fontawesome-5/Brands/DAndD')
```



| Illustration | DAndD |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/DAndD.png) | ![illustration for DAndD](../../fontawesome-5/Brands/DAndD.Local.png) |




## DAndD

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DAndD
include('fontawesome-5/Brands/DAndD')

' renders the element
DAndD('DAndD', 'D And D', 'an optional tech label')
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

' loads the Item which embeds the element DAndD
include('fontawesome-5/Brands/DAndD')

' renders the element
DAndD('DAndD', 'D And D', 'an optional tech label')
@enduml
```

