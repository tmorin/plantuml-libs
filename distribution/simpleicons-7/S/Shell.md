# Shell


```text
simpleicons-7/S/Shell
```

```text
include('simpleicons-7/S/Shell')
```



| Illustration | Shell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Shell.png) | ![illustration for Shell](../../simpleicons-7/S/Shell.Local.png) |




## Shell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Shell
include('simpleicons-7/S/Shell')

' renders the element
Shell('Shell', 'Shell', 'an optional tech label')
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

' loads the Item which embeds the element Shell
include('simpleicons-7/S/Shell')

' renders the element
Shell('Shell', 'Shell', 'an optional tech label')
@enduml
```

