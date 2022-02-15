# RupiahSign


```text
fontawesome-6/Solid/RupiahSign
```

```text
include('fontawesome-6/Solid/RupiahSign')
```



| Illustration | RupiahSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RupiahSign.png) | ![illustration for RupiahSign](../../fontawesome-6/Solid/RupiahSign.Local.png) |




## RupiahSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RupiahSign
include('fontawesome-6/Solid/RupiahSign')

' renders the element
RupiahSign('RupiahSign', 'Rupiah Sign', 'an optional tech label')
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

' loads the Item which embeds the element RupiahSign
include('fontawesome-6/Solid/RupiahSign')

' renders the element
RupiahSign('RupiahSign', 'Rupiah Sign', 'an optional tech label')
@enduml
```

