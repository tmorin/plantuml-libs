# Bitcoinsv


```text
simpleicons-7/B/Bitcoinsv
```

```text
include('simpleicons-7/B/Bitcoinsv')
```



| Illustration | Bitcoinsv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bitcoinsv.png) | ![illustration for Bitcoinsv](../../simpleicons-7/B/Bitcoinsv.Local.png) |




## Bitcoinsv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bitcoinsv
include('simpleicons-7/B/Bitcoinsv')

' renders the element
Bitcoinsv('Bitcoinsv', 'Bitcoinsv', 'an optional tech label')
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

' loads the Item which embeds the element Bitcoinsv
include('simpleicons-7/B/Bitcoinsv')

' renders the element
Bitcoinsv('Bitcoinsv', 'Bitcoinsv', 'an optional tech label')
@enduml
```

