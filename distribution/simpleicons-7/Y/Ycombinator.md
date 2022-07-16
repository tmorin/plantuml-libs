# Ycombinator


```text
simpleicons-7/Y/Ycombinator
```

```text
include('simpleicons-7/Y/Ycombinator')
```



| Illustration | Ycombinator |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Y/Ycombinator.png) | ![illustration for Ycombinator](../../simpleicons-7/Y/Ycombinator.Local.png) |




## Ycombinator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ycombinator
include('simpleicons-7/Y/Ycombinator')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ycombinator
include('simpleicons-7/Y/Ycombinator')

' renders the element
Ycombinator('Ycombinator', 'Ycombinator', 'an optional tech label')
@enduml
```

