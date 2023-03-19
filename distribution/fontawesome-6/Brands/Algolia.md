# Algolia


```text
fontawesome-6/Brands/Algolia
```

```text
include('fontawesome-6/Brands/Algolia')
```



| Illustration | Algolia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Algolia.png) | ![illustration for Algolia](../../fontawesome-6/Brands/Algolia.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Algolia
include('fontawesome-6/Brands/Algolia')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Algolia
include('fontawesome-6/Brands/Algolia')

' renders the element
Algolia('Algolia', 'Algolia', 'an optional tech label', 'an optional description')
@enduml
```

