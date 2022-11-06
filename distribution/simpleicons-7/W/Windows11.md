# Windows11


```text
simpleicons-7/W/Windows11
```

```text
include('simpleicons-7/W/Windows11')
```



| Illustration | Windows11 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Windows11.png) | ![illustration for Windows11](../../simpleicons-7/W/Windows11.Local.png) |




## Windows11

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Windows11
include('simpleicons-7/W/Windows11')

' renders the element
Windows11('Windows11', 'Windows11', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Windows11
include('simpleicons-7/W/Windows11')

' renders the element
Windows11('Windows11', 'Windows11', 'an optional tech label', 'an optional description')
@enduml
```

