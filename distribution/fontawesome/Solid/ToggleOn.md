# ToggleOn


```text
fontawesome/Solid/ToggleOn
```

```text
include('fontawesome/Solid/ToggleOn')
```



| Illustration | ToggleOn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToggleOn.png) | ![illustration for ToggleOn](../../fontawesome/Solid/ToggleOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToggleOnXs>`
- `<$ToggleOnSm>`
- `<$ToggleOnMd>`
- `<$ToggleOnLg>`





## ToggleOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToggleOn
include('fontawesome/Solid/ToggleOn')

' renders the element
ToggleOn('ToggleOn', 'Toggle On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToggleOn
include('fontawesome/Solid/ToggleOn')

' renders the element
ToggleOn('ToggleOn', 'Toggle On', 'an optional tech label', 'an optional description')
@enduml
```

