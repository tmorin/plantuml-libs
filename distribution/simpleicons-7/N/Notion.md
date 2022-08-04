# Notion


```text
simpleicons-7/N/Notion
```

```text
include('simpleicons-7/N/Notion')
```



| Illustration | Notion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Notion.png) | ![illustration for Notion](../../simpleicons-7/N/Notion.Local.png) |




## Notion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Notion
include('simpleicons-7/N/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Notion
include('simpleicons-7/N/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label', 'an optional description')
@enduml
```

