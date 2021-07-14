# PhoneMissed


```text
material-4/Notification/PhoneMissed
```

```text
include('material-4/Notification/PhoneMissed')
```



| Illustration | PhoneMissed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PhoneMissed.png) | ![illustration for PhoneMissed](../../material-4/Notification/PhoneMissed.Local.png) |




## PhoneMissed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneMissed
include('material-4/Notification/PhoneMissed')

' renders the element
PhoneMissed('PhoneMissed', 'Phone Missed', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneMissed
include('material-4/Notification/PhoneMissed')

' renders the element
PhoneMissed('PhoneMissed', 'Phone Missed', 'an optional tech label')
@enduml
```

