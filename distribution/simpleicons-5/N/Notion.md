# Notion


```text
simpleicons-5/N/Notion
```

```text
include('simpleicons-5/N/Notion')
```



| Illustration | Notion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Notion.png) | ![illustration for Notion](../../simpleicons-5/N/Notion.Local.png) |




## Notion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Notion
include('simpleicons-5/N/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Notion
include('simpleicons-5/N/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label')
@enduml
```

