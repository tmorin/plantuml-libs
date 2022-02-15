# Appletv


```text
simpleicons-6/A/Appletv
```

```text
include('simpleicons-6/A/Appletv')
```



| Illustration | Appletv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Appletv.png) | ![illustration for Appletv](../../simpleicons-6/A/Appletv.Local.png) |




## Appletv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Appletv
include('simpleicons-6/A/Appletv')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Appletv
include('simpleicons-6/A/Appletv')

' renders the element
Appletv('Appletv', 'Appletv', 'an optional tech label')
@enduml
```

