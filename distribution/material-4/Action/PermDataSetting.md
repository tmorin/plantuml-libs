# PermDataSetting


```text
material-4/Action/PermDataSetting
```

```text
include('material-4/Action/PermDataSetting')
```



| Illustration | PermDataSetting |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PermDataSetting.png) | ![illustration for PermDataSetting](../../material-4/Action/PermDataSetting.Local.png) |




## PermDataSetting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PermDataSetting
include('material-4/Action/PermDataSetting')

' renders the element
PermDataSetting('PermDataSetting', 'Perm Data Setting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermDataSetting
include('material-4/Action/PermDataSetting')

' renders the element
PermDataSetting('PermDataSetting', 'Perm Data Setting', 'an optional tech label', 'an optional description')
@enduml
```

