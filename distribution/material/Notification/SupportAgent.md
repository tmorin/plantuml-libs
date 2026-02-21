# SupportAgent


```text
material/Notification/SupportAgent
```

```text
include('material/Notification/SupportAgent')
```



| Illustration | SupportAgent |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/SupportAgent.png) | ![illustration for SupportAgent](../../material/Notification/SupportAgent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupportAgentXs>`
- `<$SupportAgentSm>`
- `<$SupportAgentMd>`
- `<$SupportAgentLg>`





## SupportAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SupportAgent
include('material/Notification/SupportAgent')

' renders the element
SupportAgent('SupportAgent', 'Support Agent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SupportAgent
include('material/Notification/SupportAgent')

' renders the element
SupportAgent('SupportAgent', 'Support Agent', 'an optional tech label', 'an optional description')
@enduml
```

