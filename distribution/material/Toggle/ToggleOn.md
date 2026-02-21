# ToggleOn


```text
material/Toggle/ToggleOn
```

```text
include('material/Toggle/ToggleOn')
```



| Illustration | ToggleOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Toggle/ToggleOn.png) | ![illustration for ToggleOn](../../material/Toggle/ToggleOn.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element ToggleOn
include('material/Toggle/ToggleOn')

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
include('material/bootstrap')

' loads the Item which embeds the element ToggleOn
include('material/Toggle/ToggleOn')

' renders the element
ToggleOn('ToggleOn', 'Toggle On', 'an optional tech label', 'an optional description')
@enduml
```

