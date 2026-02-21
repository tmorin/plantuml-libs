# Pubmed


```text
simpleicons/P/Pubmed
```

```text
include('simpleicons/P/Pubmed')
```



| Illustration | Pubmed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pubmed.png) | ![illustration for Pubmed](../../simpleicons/P/Pubmed.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pubmed
include('simpleicons/P/Pubmed')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pubmed
include('simpleicons/P/Pubmed')

' renders the element
Pubmed('Pubmed', 'Pubmed', 'an optional tech label', 'an optional description')
@enduml
```

