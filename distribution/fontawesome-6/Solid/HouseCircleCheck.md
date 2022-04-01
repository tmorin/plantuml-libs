# HouseCircleCheck


```text
fontawesome-6/Solid/HouseCircleCheck
```

```text
include('fontawesome-6/Solid/HouseCircleCheck')
```



| Illustration | HouseCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseCircleCheck.png) | ![illustration for HouseCircleCheck](../../fontawesome-6/Solid/HouseCircleCheck.Local.png) |




## HouseCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseCircleCheck
include('fontawesome-6/Solid/HouseCircleCheck')

' renders the element
HouseCircleCheck('HouseCircleCheck', 'House Circle Check', 'an optional tech label')
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

' loads the Item which embeds the element HouseCircleCheck
include('fontawesome-6/Solid/HouseCircleCheck')

' renders the element
HouseCircleCheck('HouseCircleCheck', 'House Circle Check', 'an optional tech label')
@enduml
```

