# Files


```text
simpleicons-7/F/Files
```

```text
include('simpleicons-7/F/Files')
```



| Illustration | Files |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Files.png) | ![illustration for Files](../../simpleicons-7/F/Files.Local.png) |




## Files

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Files
include('simpleicons-7/F/Files')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Files
include('simpleicons-7/F/Files')

' renders the element
Files('Files', 'Files', 'an optional tech label')
@enduml
```

