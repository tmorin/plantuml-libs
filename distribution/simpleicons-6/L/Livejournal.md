# Livejournal


```text
simpleicons-6/L/Livejournal
```

```text
include('simpleicons-6/L/Livejournal')
```



| Illustration | Livejournal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Livejournal.png) | ![illustration for Livejournal](../../simpleicons-6/L/Livejournal.Local.png) |




## Livejournal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Livejournal
include('simpleicons-6/L/Livejournal')

' renders the element
Livejournal('Livejournal', 'Livejournal', 'an optional tech label')
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

' loads the Item which embeds the element Livejournal
include('simpleicons-6/L/Livejournal')

' renders the element
Livejournal('Livejournal', 'Livejournal', 'an optional tech label')
@enduml
```

