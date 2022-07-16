# First


```text
simpleicons-7/F/First
```

```text
include('simpleicons-7/F/First')
```



| Illustration | First |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/First.png) | ![illustration for First](../../simpleicons-7/F/First.Local.png) |




## First

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element First
include('simpleicons-7/F/First')

' renders the element
First('First', 'First', 'an optional tech label')
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

' loads the Item which embeds the element First
include('simpleicons-7/F/First')

' renders the element
First('First', 'First', 'an optional tech label')
@enduml
```

