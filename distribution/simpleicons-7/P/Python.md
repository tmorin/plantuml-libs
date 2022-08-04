# Python


```text
simpleicons-7/P/Python
```

```text
include('simpleicons-7/P/Python')
```



| Illustration | Python |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Python.png) | ![illustration for Python](../../simpleicons-7/P/Python.Local.png) |




## Python

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Python
include('simpleicons-7/P/Python')

' renders the element
Python('Python', 'Python', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Python
include('simpleicons-7/P/Python')

' renders the element
Python('Python', 'Python', 'an optional tech label', 'an optional description')
@enduml
```

