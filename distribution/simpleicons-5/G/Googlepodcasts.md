# Googlepodcasts


```text
simpleicons-5/G/Googlepodcasts
```

```text
include('simpleicons-5/G/Googlepodcasts')
```



| Illustration | Googlepodcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlepodcasts.png) | ![illustration for Googlepodcasts](../../simpleicons-5/G/Googlepodcasts.Local.png) |




## Googlepodcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-5/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label')
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

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-5/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label')
@enduml
```

