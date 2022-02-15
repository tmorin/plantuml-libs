# React


```text
simpleicons-6/R/React
```

```text
include('simpleicons-6/R/React')
```



| Illustration | React |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/React.png) | ![illustration for React](../../simpleicons-6/R/React.Local.png) |




## React

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element React
include('simpleicons-6/R/React')

' renders the element
React('React', 'React', 'an optional tech label')
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

' loads the Item which embeds the element React
include('simpleicons-6/R/React')

' renders the element
React('React', 'React', 'an optional tech label')
@enduml
```

