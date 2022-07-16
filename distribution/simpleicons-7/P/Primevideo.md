# Primevideo


```text
simpleicons-7/P/Primevideo
```

```text
include('simpleicons-7/P/Primevideo')
```



| Illustration | Primevideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Primevideo.png) | ![illustration for Primevideo](../../simpleicons-7/P/Primevideo.Local.png) |




## Primevideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Primevideo
include('simpleicons-7/P/Primevideo')

' renders the element
Primevideo('Primevideo', 'Primevideo', 'an optional tech label')
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

' loads the Item which embeds the element Primevideo
include('simpleicons-7/P/Primevideo')

' renders the element
Primevideo('Primevideo', 'Primevideo', 'an optional tech label')
@enduml
```

