# Xbox


```text
simpleicons-6/X/Xbox
```

```text
include('simpleicons-6/X/Xbox')
```



| Illustration | Xbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xbox.png) | ![illustration for Xbox](../../simpleicons-6/X/Xbox.Local.png) |




## Xbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xbox
include('simpleicons-6/X/Xbox')

' renders the element
Xbox('Xbox', 'Xbox', 'an optional tech label')
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

' loads the Item which embeds the element Xbox
include('simpleicons-6/X/Xbox')

' renders the element
Xbox('Xbox', 'Xbox', 'an optional tech label')
@enduml
```

