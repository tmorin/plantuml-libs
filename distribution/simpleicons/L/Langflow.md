# Langflow


```text
simpleicons/L/Langflow
```

```text
include('simpleicons/L/Langflow')
```



| Illustration | Langflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Langflow.png) | ![illustration for Langflow](../../simpleicons/L/Langflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LangflowXs>`
- `<$LangflowSm>`
- `<$LangflowMd>`
- `<$LangflowLg>`





## Langflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Langflow
include('simpleicons/L/Langflow')

' renders the element
Langflow('Langflow', 'Langflow', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Langflow
include('simpleicons/L/Langflow')

' renders the element
Langflow('Langflow', 'Langflow', 'an optional tech label', 'an optional description')
@enduml
```

