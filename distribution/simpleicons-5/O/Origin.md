# Origin


```text
simpleicons-5/O/Origin
```

```text
include('simpleicons-5/O/Origin')
```



| Illustration | Origin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Origin.png) | ![illustration for Origin](../../simpleicons-5/O/Origin.Local.png) |




## Origin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Origin
include('simpleicons-5/O/Origin')

' renders the element
Origin('Origin', 'Origin', 'an optional tech label')
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

' loads the Item which embeds the element Origin
include('simpleicons-5/O/Origin')

' renders the element
Origin('Origin', 'Origin', 'an optional tech label')
@enduml
```

