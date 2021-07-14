# Oracle


```text
simpleicons-5/O/Oracle
```

```text
include('simpleicons-5/O/Oracle')
```



| Illustration | Oracle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Oracle.png) | ![illustration for Oracle](../../simpleicons-5/O/Oracle.Local.png) |




## Oracle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Oracle
include('simpleicons-5/O/Oracle')

' renders the element
Oracle('Oracle', 'Oracle', 'an optional tech label')
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

' loads the Item which embeds the element Oracle
include('simpleicons-5/O/Oracle')

' renders the element
Oracle('Oracle', 'Oracle', 'an optional tech label')
@enduml
```

