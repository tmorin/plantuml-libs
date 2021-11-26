# SettingsInputComposite


```text
material-4/Action/SettingsInputComposite
```

```text
include('material-4/Action/SettingsInputComposite')
```



| Illustration | SettingsInputComposite |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsInputComposite.png) | ![illustration for SettingsInputComposite](../../material-4/Action/SettingsInputComposite.Local.png) |




## SettingsInputComposite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsInputComposite
include('material-4/Action/SettingsInputComposite')

' renders the element
SettingsInputComposite('SettingsInputComposite', 'Settings Input Composite', 'an optional tech label')
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

' loads the Item which embeds the element SettingsInputComposite
include('material-4/Action/SettingsInputComposite')

' renders the element
SettingsInputComposite('SettingsInputComposite', 'Settings Input Composite', 'an optional tech label')
@enduml
```

