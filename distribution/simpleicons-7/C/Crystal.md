# Crystal


```text
simpleicons-7/C/Crystal
```

```text
include('simpleicons-7/C/Crystal')
```



| Illustration | Crystal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Crystal.png) | ![illustration for Crystal](../../simpleicons-7/C/Crystal.Local.png) |




## Crystal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Crystal
include('simpleicons-7/C/Crystal')

' renders the element
Crystal('Crystal', 'Crystal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crystal
include('simpleicons-7/C/Crystal')

' renders the element
Crystal('Crystal', 'Crystal', 'an optional tech label', 'an optional description')
@enduml
```

