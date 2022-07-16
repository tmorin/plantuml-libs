# Basecamp


```text
simpleicons-7/B/Basecamp
```

```text
include('simpleicons-7/B/Basecamp')
```



| Illustration | Basecamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Basecamp.png) | ![illustration for Basecamp](../../simpleicons-7/B/Basecamp.Local.png) |




## Basecamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Basecamp
include('simpleicons-7/B/Basecamp')

' renders the element
Basecamp('Basecamp', 'Basecamp', 'an optional tech label')
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

' loads the Item which embeds the element Basecamp
include('simpleicons-7/B/Basecamp')

' renders the element
Basecamp('Basecamp', 'Basecamp', 'an optional tech label')
@enduml
```

