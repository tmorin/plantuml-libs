# LiveHelp


```text
material/Communication/LiveHelp
```

```text
include('material/Communication/LiveHelp')
```



| Illustration | LiveHelp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/LiveHelp.png) | ![illustration for LiveHelp](../../material/Communication/LiveHelp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiveHelpXs>`
- `<$LiveHelpSm>`
- `<$LiveHelpMd>`
- `<$LiveHelpLg>`





## LiveHelp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LiveHelp
include('material/Communication/LiveHelp')

' renders the element
LiveHelp('LiveHelp', 'Live Help', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LiveHelp
include('material/Communication/LiveHelp')

' renders the element
LiveHelp('LiveHelp', 'Live Help', 'an optional tech label', 'an optional description')
@enduml
```

