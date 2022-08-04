# PermPhoneMsg


```text
material-4/Action/PermPhoneMsg
```

```text
include('material-4/Action/PermPhoneMsg')
```



| Illustration | PermPhoneMsg |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PermPhoneMsg.png) | ![illustration for PermPhoneMsg](../../material-4/Action/PermPhoneMsg.Local.png) |




## PermPhoneMsg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PermPhoneMsg
include('material-4/Action/PermPhoneMsg')

' renders the element
PermPhoneMsg('PermPhoneMsg', 'Perm Phone Msg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermPhoneMsg
include('material-4/Action/PermPhoneMsg')

' renders the element
PermPhoneMsg('PermPhoneMsg', 'Perm Phone Msg', 'an optional tech label', 'an optional description')
@enduml
```

