# Windows


```text
simpleicons-6/W/Windows
```

```text
include('simpleicons-6/W/Windows')
```



| Illustration | Windows |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Windows.png) | ![illustration for Windows](../../simpleicons-6/W/Windows.Local.png) |




## Windows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Windows
include('simpleicons-6/W/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label')
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

' loads the Item which embeds the element Windows
include('simpleicons-6/W/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label')
@enduml
```

