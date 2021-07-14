# Dell


```text
simpleicons-5/D/Dell
```

```text
include('simpleicons-5/D/Dell')
```



| Illustration | Dell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dell.png) | ![illustration for Dell](../../simpleicons-5/D/Dell.Local.png) |




## Dell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dell
include('simpleicons-5/D/Dell')

' renders the element
Dell('Dell', 'Dell', 'an optional tech label')
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

' loads the Item which embeds the element Dell
include('simpleicons-5/D/Dell')

' renders the element
Dell('Dell', 'Dell', 'an optional tech label')
@enduml
```

