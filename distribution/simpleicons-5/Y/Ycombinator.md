# Ycombinator


```text
simpleicons-5/Y/Ycombinator
```

```text
include('simpleicons-5/Y/Ycombinator')
```



| Illustration | Ycombinator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Y/Ycombinator.png) | ![illustration for Ycombinator](../../simpleicons-5/Y/Ycombinator.Local.png) |




## Ycombinator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ycombinator
include('simpleicons-5/Y/Ycombinator')

' renders the element
Ycombinator('Ycombinator', 'Ycombinator', 'an optional tech label')
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

' loads the Item which embeds the element Ycombinator
include('simpleicons-5/Y/Ycombinator')

' renders the element
Ycombinator('Ycombinator', 'Ycombinator', 'an optional tech label')
@enduml
```

