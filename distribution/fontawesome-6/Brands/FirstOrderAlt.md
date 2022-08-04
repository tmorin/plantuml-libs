# FirstOrderAlt


```text
fontawesome-6/Brands/FirstOrderAlt
```

```text
include('fontawesome-6/Brands/FirstOrderAlt')
```



| Illustration | FirstOrderAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FirstOrderAlt.png) | ![illustration for FirstOrderAlt](../../fontawesome-6/Brands/FirstOrderAlt.Local.png) |




## FirstOrderAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome-6/Brands/FirstOrderAlt')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome-6/Brands/FirstOrderAlt')

' renders the element
FirstOrderAlt('FirstOrderAlt', 'First Order Alt', 'an optional tech label', 'an optional description')
@enduml
```

