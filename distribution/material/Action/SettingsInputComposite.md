# SettingsInputComposite


```text
material/Action/SettingsInputComposite
```

```text
include('material/Action/SettingsInputComposite')
```



| Illustration | SettingsInputComposite |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsInputComposite.png) | ![illustration for SettingsInputComposite](../../material/Action/SettingsInputComposite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsInputCompositeXs>`
- `<$SettingsInputCompositeSm>`
- `<$SettingsInputCompositeMd>`
- `<$SettingsInputCompositeLg>`





## SettingsInputComposite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsInputComposite
include('material/Action/SettingsInputComposite')

' renders the element
SettingsInputComposite('SettingsInputComposite', 'Settings Input Composite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsInputComposite
include('material/Action/SettingsInputComposite')

' renders the element
SettingsInputComposite('SettingsInputComposite', 'Settings Input Composite', 'an optional tech label', 'an optional description')
@enduml
```

