# Toolbox


```text
fontawesome-6/Solid/Toolbox
```

```text
include('fontawesome-6/Solid/Toolbox')
```



| Illustration | Toolbox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Toolbox.png) | ![illustration for Toolbox](../../fontawesome-6/Solid/Toolbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToolboxXs>`
- `<$ToolboxSm>`
- `<$ToolboxMd>`
- `<$ToolboxLg>`





## Toolbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Toolbox
include('fontawesome-6/Solid/Toolbox')

' renders the element
Toolbox('Toolbox', 'Toolbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toolbox
include('fontawesome-6/Solid/Toolbox')

' renders the element
Toolbox('Toolbox', 'Toolbox', 'an optional tech label', 'an optional description')
@enduml
```

