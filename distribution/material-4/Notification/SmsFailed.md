# SmsFailed


```text
material-4/Notification/SmsFailed
```

```text
include('material-4/Notification/SmsFailed')
```



| Illustration | SmsFailed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SmsFailed.png) | ![illustration for SmsFailed](../../material-4/Notification/SmsFailed.Local.png) |




## SmsFailed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SmsFailed
include('material-4/Notification/SmsFailed')

' renders the element
SmsFailed('SmsFailed', 'Sms Failed', 'an optional tech label')
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

' loads the Item which embeds the element SmsFailed
include('material-4/Notification/SmsFailed')

' renders the element
SmsFailed('SmsFailed', 'Sms Failed', 'an optional tech label')
@enduml
```

