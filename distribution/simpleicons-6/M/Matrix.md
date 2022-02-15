# Matrix


```text
simpleicons-6/M/Matrix
```

```text
include('simpleicons-6/M/Matrix')
```



| Illustration | Matrix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Matrix.png) | ![illustration for Matrix](../../simpleicons-6/M/Matrix.Local.png) |




## Matrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Matrix
include('simpleicons-6/M/Matrix')

' renders the element
Matrix('Matrix', 'Matrix', 'an optional tech label')
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

' loads the Item which embeds the element Matrix
include('simpleicons-6/M/Matrix')

' renders the element
Matrix('Matrix', 'Matrix', 'an optional tech label')
@enduml
```

