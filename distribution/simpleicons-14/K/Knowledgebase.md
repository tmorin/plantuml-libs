# Knowledgebase


```text
simpleicons-14/K/Knowledgebase
```

```text
include('simpleicons-14/K/Knowledgebase')
```



| Illustration | Knowledgebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Knowledgebase.png) | ![illustration for Knowledgebase](../../simpleicons-14/K/Knowledgebase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KnowledgebaseXs>`
- `<$KnowledgebaseSm>`
- `<$KnowledgebaseMd>`
- `<$KnowledgebaseLg>`





## Knowledgebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Knowledgebase
include('simpleicons-14/K/Knowledgebase')

' renders the element
Knowledgebase('Knowledgebase', 'Knowledgebase', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Knowledgebase
include('simpleicons-14/K/Knowledgebase')

' renders the element
Knowledgebase('Knowledgebase', 'Knowledgebase', 'an optional tech label', 'an optional description')
@enduml
```

