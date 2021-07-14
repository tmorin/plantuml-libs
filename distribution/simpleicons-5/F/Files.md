# Files


```text
simpleicons-5/F/Files
```

```text
include('simpleicons-5/F/Files')
```



| Illustration | Files |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Files.png) | ![illustration for Files](../../simpleicons-5/F/Files.Local.png) |




## Files

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Files
include('simpleicons-5/F/Files')

' renders the element
Files('Files', 'Files', 'an optional tech label')
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

' loads the Item which embeds the element Files
include('simpleicons-5/F/Files')

' renders the element
Files('Files', 'Files', 'an optional tech label')
@enduml
```

