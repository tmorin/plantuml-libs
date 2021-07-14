# Knowledgebase


```text
simpleicons-5/K/Knowledgebase
```

```text
include('simpleicons-5/K/Knowledgebase')
```



| Illustration | Knowledgebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Knowledgebase.png) | ![illustration for Knowledgebase](../../simpleicons-5/K/Knowledgebase.Local.png) |




## Knowledgebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Knowledgebase
include('simpleicons-5/K/Knowledgebase')

' renders the element
Knowledgebase('Knowledgebase', 'Knowledgebase', 'an optional tech label')
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

' loads the Item which embeds the element Knowledgebase
include('simpleicons-5/K/Knowledgebase')

' renders the element
Knowledgebase('Knowledgebase', 'Knowledgebase', 'an optional tech label')
@enduml
```

