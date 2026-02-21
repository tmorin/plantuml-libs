# PhoneInTalk


```text
material/Notification/PhoneInTalk
```

```text
include('material/Notification/PhoneInTalk')
```



| Illustration | PhoneInTalk |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhoneInTalk.png) | ![illustration for PhoneInTalk](../../material/Notification/PhoneInTalk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneInTalkXs>`
- `<$PhoneInTalkSm>`
- `<$PhoneInTalkMd>`
- `<$PhoneInTalkLg>`





## PhoneInTalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneInTalk
include('material/Notification/PhoneInTalk')

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
include('material/bootstrap')

' loads the Item which embeds the element PhoneInTalk
include('material/Notification/PhoneInTalk')

' renders the element
PhoneInTalk('PhoneInTalk', 'Phone In Talk', 'an optional tech label', 'an optional description')
@enduml
```

