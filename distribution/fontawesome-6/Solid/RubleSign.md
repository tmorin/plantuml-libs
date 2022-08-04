# RubleSign


```text
fontawesome-6/Solid/RubleSign
```

```text
include('fontawesome-6/Solid/RubleSign')
```



| Illustration | RubleSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RubleSign.png) | ![illustration for RubleSign](../../fontawesome-6/Solid/RubleSign.Local.png) |




## RubleSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RubleSign
include('fontawesome-6/Solid/RubleSign')

' renders the element
RubleSign('RubleSign', 'Ruble Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RubleSign
include('fontawesome-6/Solid/RubleSign')

' renders the element
RubleSign('RubleSign', 'Ruble Sign', 'an optional tech label', 'an optional description')
@enduml
```

