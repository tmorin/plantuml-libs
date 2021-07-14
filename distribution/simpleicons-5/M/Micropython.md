# Micropython


```text
simpleicons-5/M/Micropython
```

```text
include('simpleicons-5/M/Micropython')
```



| Illustration | Micropython |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Micropython.png) | ![illustration for Micropython](../../simpleicons-5/M/Micropython.Local.png) |




## Micropython

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Micropython
include('simpleicons-5/M/Micropython')

' renders the element
Micropython('Micropython', 'Micropython', 'an optional tech label')
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

' loads the Item which embeds the element Micropython
include('simpleicons-5/M/Micropython')

' renders the element
Micropython('Micropython', 'Micropython', 'an optional tech label')
@enduml
```

