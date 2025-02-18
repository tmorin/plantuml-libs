# Python


```text
simpleicons-14/P/Python
```

```text
include('simpleicons-14/P/Python')
```



| Illustration | Python |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Python.png) | ![illustration for Python](../../simpleicons-14/P/Python.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PythonXs>`
- `<$PythonSm>`
- `<$PythonMd>`
- `<$PythonLg>`





## Python

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Python
include('simpleicons-14/P/Python')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Python
include('simpleicons-14/P/Python')

' renders the element
Python('Python', 'Python', 'an optional tech label', 'an optional description')
@enduml
```

