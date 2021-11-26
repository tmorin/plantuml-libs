# RupeeSign


```text
fontawesome-5/Solid/RupeeSign
```

```text
include('fontawesome-5/Solid/RupeeSign')
```



| Illustration | RupeeSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RupeeSign.png) | ![illustration for RupeeSign](../../fontawesome-5/Solid/RupeeSign.Local.png) |




## RupeeSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RupeeSign
include('fontawesome-5/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label')
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

' loads the Item which embeds the element RupeeSign
include('fontawesome-5/Solid/RupeeSign')

' renders the element
RupeeSign('RupeeSign', 'Rupee Sign', 'an optional tech label')
@enduml
```

