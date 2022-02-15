# Microsoft


```text
simpleicons-6/M/Microsoft
```

```text
include('simpleicons-6/M/Microsoft')
```



| Illustration | Microsoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microsoft.png) | ![illustration for Microsoft](../../simpleicons-6/M/Microsoft.Local.png) |




## Microsoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microsoft
include('simpleicons-6/M/Microsoft')

' renders the element
Microsoft('Microsoft', 'Microsoft', 'an optional tech label')
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

' loads the Item which embeds the element Microsoft
include('simpleicons-6/M/Microsoft')

' renders the element
Microsoft('Microsoft', 'Microsoft', 'an optional tech label')
@enduml
```

