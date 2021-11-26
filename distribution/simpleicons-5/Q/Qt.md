# Qt


```text
simpleicons-5/Q/Qt
```

```text
include('simpleicons-5/Q/Qt')
```



| Illustration | Qt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qt.png) | ![illustration for Qt](../../simpleicons-5/Q/Qt.Local.png) |




## Qt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qt
include('simpleicons-5/Q/Qt')

' renders the element
Qt('Qt', 'Qt', 'an optional tech label')
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

' loads the Item which embeds the element Qt
include('simpleicons-5/Q/Qt')

' renders the element
Qt('Qt', 'Qt', 'an optional tech label')
@enduml
```

