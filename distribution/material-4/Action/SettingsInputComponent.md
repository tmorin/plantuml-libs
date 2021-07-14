# SettingsInputComponent


```text
material-4/Action/SettingsInputComponent
```

```text
include('material-4/Action/SettingsInputComponent')
```



| Illustration | SettingsInputComponent |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsInputComponent.png) | ![illustration for SettingsInputComponent](../../material-4/Action/SettingsInputComponent.Local.png) |




## SettingsInputComponent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsInputComponent
include('material-4/Action/SettingsInputComponent')

' renders the element
SettingsInputComponent('SettingsInputComponent', 'Settings Input Component', 'an optional tech label')
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

' loads the Item which embeds the element SettingsInputComponent
include('material-4/Action/SettingsInputComponent')

' renders the element
SettingsInputComponent('SettingsInputComponent', 'Settings Input Component', 'an optional tech label')
@enduml
```

