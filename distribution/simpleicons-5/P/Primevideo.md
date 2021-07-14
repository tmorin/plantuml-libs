# Primevideo


```text
simpleicons-5/P/Primevideo
```

```text
include('simpleicons-5/P/Primevideo')
```



| Illustration | Primevideo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Primevideo.png) | ![illustration for Primevideo](../../simpleicons-5/P/Primevideo.Local.png) |




## Primevideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Primevideo
include('simpleicons-5/P/Primevideo')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Primevideo
include('simpleicons-5/P/Primevideo')

' renders the element
Primevideo('Primevideo', 'Primevideo', 'an optional tech label')
@enduml
```

