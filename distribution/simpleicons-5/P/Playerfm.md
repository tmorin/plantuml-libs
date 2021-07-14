# Playerfm


```text
simpleicons-5/P/Playerfm
```

```text
include('simpleicons-5/P/Playerfm')
```



| Illustration | Playerfm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Playerfm.png) | ![illustration for Playerfm](../../simpleicons-5/P/Playerfm.Local.png) |




## Playerfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Playerfm
include('simpleicons-5/P/Playerfm')

' renders the element
Playerfm('Playerfm', 'Playerfm', 'an optional tech label')
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

' loads the Item which embeds the element Playerfm
include('simpleicons-5/P/Playerfm')

' renders the element
Playerfm('Playerfm', 'Playerfm', 'an optional tech label')
@enduml
```

