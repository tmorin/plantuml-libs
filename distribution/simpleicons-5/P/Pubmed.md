# Pubmed


```text
simpleicons-5/P/Pubmed
```

```text
include('simpleicons-5/P/Pubmed')
```



| Illustration | Pubmed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pubmed.png) | ![illustration for Pubmed](../../simpleicons-5/P/Pubmed.Local.png) |




## Pubmed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pubmed
include('simpleicons-5/P/Pubmed')

' renders the element
Pubmed('Pubmed', 'Pubmed', 'an optional tech label')
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

' loads the Item which embeds the element Pubmed
include('simpleicons-5/P/Pubmed')

' renders the element
Pubmed('Pubmed', 'Pubmed', 'an optional tech label')
@enduml
```

