# Windows


```text
simpleicons-5/W/Windows
```

```text
include('simpleicons-5/W/Windows')
```



| Illustration | Windows |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Windows.png) | ![illustration for Windows](../../simpleicons-5/W/Windows.Local.png) |




## Windows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Windows
include('simpleicons-5/W/Windows')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Windows
include('simpleicons-5/W/Windows')

' renders the element
Windows('Windows', 'Windows', 'an optional tech label')
@enduml
```

