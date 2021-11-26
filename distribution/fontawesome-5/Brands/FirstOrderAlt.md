# FirstOrderAlt


```text
fontawesome-5/Brands/FirstOrderAlt
```

```text
include('fontawesome-5/Brands/FirstOrderAlt')
```



| Illustration | FirstOrderAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FirstOrderAlt.png) | ![illustration for FirstOrderAlt](../../fontawesome-5/Brands/FirstOrderAlt.Local.png) |




## FirstOrderAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome-5/Brands/FirstOrderAlt')

' renders the element
FirstOrderAlt('FirstOrderAlt', 'First Order Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FirstOrderAlt
include('fontawesome-5/Brands/FirstOrderAlt')

' renders the element
FirstOrderAlt('FirstOrderAlt', 'First Order Alt', 'an optional tech label')
@enduml
```

