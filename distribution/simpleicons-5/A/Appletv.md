# Appletv


```text
simpleicons-5/A/Appletv
```

```text
include('simpleicons-5/A/Appletv')
```



| Illustration | Appletv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appletv.png) | ![illustration for Appletv](../../simpleicons-5/A/Appletv.Local.png) |




## Appletv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appletv
include('simpleicons-5/A/Appletv')

' renders the element
Appletv('Appletv', 'Appletv', 'an optional tech label')
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

' loads the Item which embeds the element Appletv
include('simpleicons-5/A/Appletv')

' renders the element
Appletv('Appletv', 'Appletv', 'an optional tech label')
@enduml
```

