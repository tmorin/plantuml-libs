# PhoneCallback


```text
material/Notification/PhoneCallback
```

```text
include('material/Notification/PhoneCallback')
```



| Illustration | PhoneCallback |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhoneCallback.png) | ![illustration for PhoneCallback](../../material/Notification/PhoneCallback.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneCallbackXs>`
- `<$PhoneCallbackSm>`
- `<$PhoneCallbackMd>`
- `<$PhoneCallbackLg>`





## PhoneCallback

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneCallback
include('material/Notification/PhoneCallback')

' renders the element
PhoneCallback('PhoneCallback', 'Phone Callback', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PhoneCallback
include('material/Notification/PhoneCallback')

' renders the element
PhoneCallback('PhoneCallback', 'Phone Callback', 'an optional tech label', 'an optional description')
@enduml
```

