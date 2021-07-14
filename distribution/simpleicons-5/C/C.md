# C


```text
simpleicons-5/C/C
```

```text
include('simpleicons-5/C/C')
```



| Illustration | C |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/C.png) | ![illustration for C](../../simpleicons-5/C/C.Local.png) |




## C

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element C
include('simpleicons-5/C/C')

' renders the element
C('C', 'C', 'an optional tech label')
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

' loads the Item which embeds the element C
include('simpleicons-5/C/C')

' renders the element
C('C', 'C', 'an optional tech label')
@enduml
```

