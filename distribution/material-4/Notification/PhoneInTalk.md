# PhoneInTalk


```text
material-4/Notification/PhoneInTalk
```

```text
include('material-4/Notification/PhoneInTalk')
```



| Illustration | PhoneInTalk |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PhoneInTalk.png) | ![illustration for PhoneInTalk](../../material-4/Notification/PhoneInTalk.Local.png) |




## PhoneInTalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneInTalk
include('material-4/Notification/PhoneInTalk')

' renders the element
PhoneInTalk('PhoneInTalk', 'Phone In Talk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneInTalk
include('material-4/Notification/PhoneInTalk')

' renders the element
PhoneInTalk('PhoneInTalk', 'Phone In Talk', 'an optional tech label', 'an optional description')
@enduml
```

