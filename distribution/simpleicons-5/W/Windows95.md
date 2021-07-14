# Windows95


```text
simpleicons-5/W/Windows95
```

```text
include('simpleicons-5/W/Windows95')
```



| Illustration | Windows95 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Windows95.png) | ![illustration for Windows95](../../simpleicons-5/W/Windows95.Local.png) |




## Windows95

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Windows95
include('simpleicons-5/W/Windows95')

' renders the element
Windows95('Windows95', 'Windows95', 'an optional tech label')
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

' loads the Item which embeds the element Windows95
include('simpleicons-5/W/Windows95')

' renders the element
Windows95('Windows95', 'Windows95', 'an optional tech label')
@enduml
```

