# PhoneCallback


```text
material-4/Notification/PhoneCallback
```

```text
include('material-4/Notification/PhoneCallback')
```



| Illustration | PhoneCallback |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PhoneCallback.png) | ![illustration for PhoneCallback](../../material-4/Notification/PhoneCallback.Local.png) |




## PhoneCallback

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneCallback
include('material-4/Notification/PhoneCallback')

' renders the element
PhoneCallback('PhoneCallback', 'Phone Callback', 'an optional tech label')
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

' loads the Item which embeds the element PhoneCallback
include('material-4/Notification/PhoneCallback')

' renders the element
PhoneCallback('PhoneCallback', 'Phone Callback', 'an optional tech label')
@enduml
```

