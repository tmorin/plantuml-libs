# Pubmed


```text
simpleicons-14/P/Pubmed
```

```text
include('simpleicons-14/P/Pubmed')
```



| Illustration | Pubmed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pubmed.png) | ![illustration for Pubmed](../../simpleicons-14/P/Pubmed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PubmedXs>`
- `<$PubmedSm>`
- `<$PubmedMd>`
- `<$PubmedLg>`





## Pubmed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pubmed
include('simpleicons-14/P/Pubmed')

' renders the element
Pubmed('Pubmed', 'Pubmed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pubmed
include('simpleicons-14/P/Pubmed')

' renders the element
Pubmed('Pubmed', 'Pubmed', 'an optional tech label', 'an optional description')
@enduml
```

