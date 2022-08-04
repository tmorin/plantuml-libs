# RupeeSign


```text
fontawesome-6/Solid/RupeeSign
```

```text
include('fontawesome-6/Solid/RupeeSign')
```



| Illustration | RupeeSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RupeeSign.png) | ![illustration for RupeeSign](../../fontawesome-6/Solid/RupeeSign.Local.png) |




## RupeeSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RupeeSign
include('fontawesome-6/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RupeeSign
include('fontawesome-6/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label', 'an optional description')
@enduml
```

