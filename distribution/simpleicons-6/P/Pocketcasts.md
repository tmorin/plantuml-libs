# Pocketcasts


```text
simpleicons-6/P/Pocketcasts
```

```text
include('simpleicons-6/P/Pocketcasts')
```



| Illustration | Pocketcasts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pocketcasts.png) | ![illustration for Pocketcasts](../../simpleicons-6/P/Pocketcasts.Local.png) |




## Pocketcasts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pocketcasts
include('simpleicons-6/P/Pocketcasts')

' renders the element
Pocketcasts('Pocketcasts', 'Pocketcasts', 'an optional tech label')
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

' loads the Item which embeds the element Pocketcasts
include('simpleicons-6/P/Pocketcasts')

' renders the element
Pocketcasts('Pocketcasts', 'Pocketcasts', 'an optional tech label')
@enduml
```

