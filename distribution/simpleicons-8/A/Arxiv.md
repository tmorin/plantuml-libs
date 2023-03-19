# Arxiv


```text
simpleicons-8/A/Arxiv
```

```text
include('simpleicons-8/A/Arxiv')
```



| Illustration | Arxiv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Arxiv.png) | ![illustration for Arxiv](../../simpleicons-8/A/Arxiv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArxivXs>`
- `<$ArxivSm>`
- `<$ArxivMd>`
- `<$ArxivLg>`





## Arxiv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Arxiv
include('simpleicons-8/A/Arxiv')

' renders the element
Arxiv('Arxiv', 'Arxiv', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Arxiv
include('simpleicons-8/A/Arxiv')

' renders the element
Arxiv('Arxiv', 'Arxiv', 'an optional tech label', 'an optional description')
@enduml
```

