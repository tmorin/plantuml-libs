# Applepodcasts


```text
simpleicons-5/A/Applepodcasts
```

```text
include('simpleicons-5/A/Applepodcasts')
```



| Illustration | Applepodcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Applepodcasts.png) | ![illustration for Applepodcasts](../../simpleicons-5/A/Applepodcasts.Local.png) |




## Applepodcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Applepodcasts
include('simpleicons-5/A/Applepodcasts')

' renders the element
Applepodcasts('Applepodcasts', 'Applepodcasts', 'an optional tech label')
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

' loads the Item which embeds the element Applepodcasts
include('simpleicons-5/A/Applepodcasts')

' renders the element
Applepodcasts('Applepodcasts', 'Applepodcasts', 'an optional tech label')
@enduml
```

