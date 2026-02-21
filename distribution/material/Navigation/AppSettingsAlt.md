# AppSettingsAlt


```text
material/Navigation/AppSettingsAlt
```

```text
include('material/Navigation/AppSettingsAlt')
```



| Illustration | AppSettingsAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/AppSettingsAlt.png) | ![illustration for AppSettingsAlt](../../material/Navigation/AppSettingsAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppSettingsAltXs>`
- `<$AppSettingsAltSm>`
- `<$AppSettingsAltMd>`
- `<$AppSettingsAltLg>`





## AppSettingsAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AppSettingsAlt
include('material/Navigation/AppSettingsAlt')

' renders the element
AppSettingsAlt('AppSettingsAlt', 'App Settings Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AppSettingsAlt
include('material/Navigation/AppSettingsAlt')

' renders the element
AppSettingsAlt('AppSettingsAlt', 'App Settings Alt', 'an optional tech label', 'an optional description')
@enduml
```

