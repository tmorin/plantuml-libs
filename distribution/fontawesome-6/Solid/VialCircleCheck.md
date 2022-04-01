# VialCircleCheck


```text
fontawesome-6/Solid/VialCircleCheck
```

```text
include('fontawesome-6/Solid/VialCircleCheck')
```



| Illustration | VialCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VialCircleCheck.png) | ![illustration for VialCircleCheck](../../fontawesome-6/Solid/VialCircleCheck.Local.png) |




## VialCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VialCircleCheck
include('fontawesome-6/Solid/VialCircleCheck')

' renders the element
VialCircleCheck('VialCircleCheck', 'Vial Circle Check', 'an optional tech label')
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

' loads the Item which embeds the element VialCircleCheck
include('fontawesome-6/Solid/VialCircleCheck')

' renders the element
VialCircleCheck('VialCircleCheck', 'Vial Circle Check', 'an optional tech label')
@enduml
```

