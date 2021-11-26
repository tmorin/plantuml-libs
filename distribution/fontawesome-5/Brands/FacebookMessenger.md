# FacebookMessenger


```text
fontawesome-5/Brands/FacebookMessenger
```

```text
include('fontawesome-5/Brands/FacebookMessenger')
```



| Illustration | FacebookMessenger |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FacebookMessenger.png) | ![illustration for FacebookMessenger](../../fontawesome-5/Brands/FacebookMessenger.Local.png) |




## FacebookMessenger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FacebookMessenger
include('fontawesome-5/Brands/FacebookMessenger')

' renders the element
FacebookMessenger('FacebookMessenger', 'Facebook Messenger', 'an optional tech label')
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

' loads the Item which embeds the element FacebookMessenger
include('fontawesome-5/Brands/FacebookMessenger')

' renders the element
FacebookMessenger('FacebookMessenger', 'Facebook Messenger', 'an optional tech label')
@enduml
```

