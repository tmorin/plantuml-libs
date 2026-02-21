# FirstOrderAlt


```text
fontawesome/Brands/FirstOrderAlt
```

```text
include('fontawesome/Brands/FirstOrderAlt')
```



| Illustration | FirstOrderAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/FirstOrderAlt.png) | ![illustration for FirstOrderAlt](../../fontawesome/Brands/FirstOrderAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirstOrderAltXs>`
- `<$FirstOrderAltSm>`
- `<$FirstOrderAltMd>`
- `<$FirstOrderAltLg>`





## FirstOrderAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome/Brands/FirstOrderAlt')

' renders the element
FirstOrderAlt('FirstOrderAlt', 'First Order Alt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome/Brands/FirstOrderAlt')

' renders the element
FirstOrderAlt('FirstOrderAlt', 'First Order Alt', 'an optional tech label', 'an optional description')
@enduml
```

