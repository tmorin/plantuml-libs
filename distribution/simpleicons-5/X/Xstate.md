# Xstate


```text
simpleicons-5/X/Xstate
```

```text
include('simpleicons-5/X/Xstate')
```



| Illustration | Xstate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xstate.png) | ![illustration for Xstate](../../simpleicons-5/X/Xstate.Local.png) |




## Xstate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xstate
include('simpleicons-5/X/Xstate')

' renders the element
Xstate('Xstate', 'Xstate', 'an optional tech label')
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

' loads the Item which embeds the element Xstate
include('simpleicons-5/X/Xstate')

' renders the element
Xstate('Xstate', 'Xstate', 'an optional tech label')
@enduml
```

