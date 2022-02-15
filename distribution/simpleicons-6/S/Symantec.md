# Symantec


```text
simpleicons-6/S/Symantec
```

```text
include('simpleicons-6/S/Symantec')
```



| Illustration | Symantec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Symantec.png) | ![illustration for Symantec](../../simpleicons-6/S/Symantec.Local.png) |




## Symantec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Symantec
include('simpleicons-6/S/Symantec')

' renders the element
Symantec('Symantec', 'Symantec', 'an optional tech label')
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

' loads the Item which embeds the element Symantec
include('simpleicons-6/S/Symantec')

' renders the element
Symantec('Symantec', 'Symantec', 'an optional tech label')
@enduml
```

