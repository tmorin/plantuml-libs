# Algolia


```text
simpleicons-5/A/Algolia
```

```text
include('simpleicons-5/A/Algolia')
```



| Illustration | Algolia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Algolia.png) | ![illustration for Algolia](../../simpleicons-5/A/Algolia.Local.png) |




## Algolia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Algolia
include('simpleicons-5/A/Algolia')

' renders the element
Algolia('Algolia', 'Algolia', 'an optional tech label')
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

' loads the Item which embeds the element Algolia
include('simpleicons-5/A/Algolia')

' renders the element
Algolia('Algolia', 'Algolia', 'an optional tech label')
@enduml
```

