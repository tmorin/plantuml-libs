# Meilisearch


```text
simpleicons-14/M/Meilisearch
```

```text
include('simpleicons-14/M/Meilisearch')
```



| Illustration | Meilisearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Meilisearch.png) | ![illustration for Meilisearch](../../simpleicons-14/M/Meilisearch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeilisearchXs>`
- `<$MeilisearchSm>`
- `<$MeilisearchMd>`
- `<$MeilisearchLg>`





## Meilisearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meilisearch
include('simpleicons-14/M/Meilisearch')

' renders the element
Meilisearch('Meilisearch', 'Meilisearch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Meilisearch
include('simpleicons-14/M/Meilisearch')

' renders the element
Meilisearch('Meilisearch', 'Meilisearch', 'an optional tech label', 'an optional description')
@enduml
```

