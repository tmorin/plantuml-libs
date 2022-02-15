# Medium


```text
simpleicons-6/M/Medium
```

```text
include('simpleicons-6/M/Medium')
```



| Illustration | Medium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Medium.png) | ![illustration for Medium](../../simpleicons-6/M/Medium.Local.png) |




## Medium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Medium
include('simpleicons-6/M/Medium')

' renders the element
Medium('Medium', 'Medium', 'an optional tech label')
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

' loads the Item which embeds the element Medium
include('simpleicons-6/M/Medium')

' renders the element
Medium('Medium', 'Medium', 'an optional tech label')
@enduml
```

