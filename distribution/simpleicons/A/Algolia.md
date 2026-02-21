# Algolia


```text
simpleicons/A/Algolia
```

```text
include('simpleicons/A/Algolia')
```



| Illustration | Algolia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Algolia.png) | ![illustration for Algolia](../../simpleicons/A/Algolia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlgoliaXs>`
- `<$AlgoliaSm>`
- `<$AlgoliaMd>`
- `<$AlgoliaLg>`





## Algolia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Algolia
include('simpleicons/A/Algolia')

' renders the element
Algolia('Algolia', 'Algolia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Algolia
include('simpleicons/A/Algolia')

' renders the element
Algolia('Algolia', 'Algolia', 'an optional tech label', 'an optional description')
@enduml
```

