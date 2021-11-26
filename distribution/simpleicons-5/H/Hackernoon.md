# Hackernoon


```text
simpleicons-5/H/Hackernoon
```

```text
include('simpleicons-5/H/Hackernoon')
```



| Illustration | Hackernoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackernoon.png) | ![illustration for Hackernoon](../../simpleicons-5/H/Hackernoon.Local.png) |




## Hackernoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackernoon
include('simpleicons-5/H/Hackernoon')

' renders the element
Hackernoon('Hackernoon', 'Hackernoon', 'an optional tech label')
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

' loads the Item which embeds the element Hackernoon
include('simpleicons-5/H/Hackernoon')

' renders the element
Hackernoon('Hackernoon', 'Hackernoon', 'an optional tech label')
@enduml
```

