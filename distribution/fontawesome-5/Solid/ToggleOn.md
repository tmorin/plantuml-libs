# ToggleOn


```text
fontawesome-5/Solid/ToggleOn
```

```text
include('fontawesome-5/Solid/ToggleOn')
```



| Illustration | ToggleOn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ToggleOn.png) | ![illustration for ToggleOn](../../fontawesome-5/Solid/ToggleOn.Local.png) |




## ToggleOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ToggleOn
include('fontawesome-5/Solid/ToggleOn')

' renders the element
ToggleOn('ToggleOn', 'Toggle On', 'an optional tech label')
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

' loads the Item which embeds the element ToggleOn
include('fontawesome-5/Solid/ToggleOn')

' renders the element
ToggleOn('ToggleOn', 'Toggle On', 'an optional tech label')
@enduml
```

