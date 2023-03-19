# Widgets


```text
material-4/Device/Widgets
```

```text
include('material-4/Device/Widgets')
```



| Illustration | Widgets |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Widgets.png) | ![illustration for Widgets](../../material-4/Device/Widgets.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WidgetsXs>`
- `<$WidgetsSm>`
- `<$WidgetsMd>`
- `<$WidgetsLg>`





## Widgets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Widgets
include('material-4/Device/Widgets')

' renders the element
Widgets('Widgets', 'Widgets', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Widgets
include('material-4/Device/Widgets')

' renders the element
Widgets('Widgets', 'Widgets', 'an optional tech label', 'an optional description')
@enduml
```

