# Qt


```text
simpleicons-6/Q/Qt
```

```text
include('simpleicons-6/Q/Qt')
```



| Illustration | Qt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Qt.png) | ![illustration for Qt](../../simpleicons-6/Q/Qt.Local.png) |




## Qt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Qt
include('simpleicons-6/Q/Qt')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Qt
include('simpleicons-6/Q/Qt')

' renders the element
Qt('Qt', 'Qt', 'an optional tech label')
@enduml
```

