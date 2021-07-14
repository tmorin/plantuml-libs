# Hey


```text
simpleicons-5/H/Hey
```

```text
include('simpleicons-5/H/Hey')
```



| Illustration | Hey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hey.png) | ![illustration for Hey](../../simpleicons-5/H/Hey.Local.png) |




## Hey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hey
include('simpleicons-5/H/Hey')

' renders the element
Hey('Hey', 'Hey', 'an optional tech label')
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

' loads the Item which embeds the element Hey
include('simpleicons-5/H/Hey')

' renders the element
Hey('Hey', 'Hey', 'an optional tech label')
@enduml
```

