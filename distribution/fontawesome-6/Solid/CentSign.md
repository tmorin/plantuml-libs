# CentSign


```text
fontawesome-6/Solid/CentSign
```

```text
include('fontawesome-6/Solid/CentSign')
```



| Illustration | CentSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CentSign.png) | ![illustration for CentSign](../../fontawesome-6/Solid/CentSign.Local.png) |




## CentSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CentSign
include('fontawesome-6/Solid/CentSign')

' renders the element
CentSign('CentSign', 'Cent Sign', 'an optional tech label')
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

' loads the Item which embeds the element CentSign
include('fontawesome-6/Solid/CentSign')

' renders the element
CentSign('CentSign', 'Cent Sign', 'an optional tech label')
@enduml
```

