# Googlepodcasts


```text
simpleicons-6/G/Googlepodcasts
```

```text
include('simpleicons-6/G/Googlepodcasts')
```



| Illustration | Googlepodcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlepodcasts.png) | ![illustration for Googlepodcasts](../../simpleicons-6/G/Googlepodcasts.Local.png) |




## Googlepodcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-6/G/Googlepodcasts')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-6/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label')
@enduml
```

