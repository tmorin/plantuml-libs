# Delta


```text
simpleicons-5/D/Delta
```

```text
include('simpleicons-5/D/Delta')
```



| Illustration | Delta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Delta.png) | ![illustration for Delta](../../simpleicons-5/D/Delta.Local.png) |




## Delta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Delta
include('simpleicons-5/D/Delta')

' renders the element
Delta('Delta', 'Delta', 'an optional tech label')
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

' loads the Item which embeds the element Delta
include('simpleicons-5/D/Delta')

' renders the element
Delta('Delta', 'Delta', 'an optional tech label')
@enduml
```

