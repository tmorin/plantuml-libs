# Googlepodcasts


```text
simpleicons-7/G/Googlepodcasts
```

```text
include('simpleicons-7/G/Googlepodcasts')
```



| Illustration | Googlepodcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlepodcasts.png) | ![illustration for Googlepodcasts](../../simpleicons-7/G/Googlepodcasts.Local.png) |




## Googlepodcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-7/G/Googlepodcasts')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlepodcasts
include('simpleicons-7/G/Googlepodcasts')

' renders the element
Googlepodcasts('Googlepodcasts', 'Googlepodcasts', 'an optional tech label')
@enduml
```

