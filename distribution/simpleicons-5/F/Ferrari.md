# Ferrari


```text
simpleicons-5/F/Ferrari
```

```text
include('simpleicons-5/F/Ferrari')
```



| Illustration | Ferrari |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Ferrari.png) | ![illustration for Ferrari](../../simpleicons-5/F/Ferrari.Local.png) |




## Ferrari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ferrari
include('simpleicons-5/F/Ferrari')

' renders the element
Ferrari('Ferrari', 'Ferrari', 'an optional tech label')
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

' loads the Item which embeds the element Ferrari
include('simpleicons-5/F/Ferrari')

' renders the element
Ferrari('Ferrari', 'Ferrari', 'an optional tech label')
@enduml
```

