# Ted


```text
simpleicons-7/T/Ted
```

```text
include('simpleicons-7/T/Ted')
```



| Illustration | Ted |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Ted.png) | ![illustration for Ted](../../simpleicons-7/T/Ted.Local.png) |




## Ted

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ted
include('simpleicons-7/T/Ted')

' renders the element
Ted('Ted', 'Ted', 'an optional tech label')
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

' loads the Item which embeds the element Ted
include('simpleicons-7/T/Ted')

' renders the element
Ted('Ted', 'Ted', 'an optional tech label')
@enduml
```
