# Poetry


```text
simpleicons-6/P/Poetry
```

```text
include('simpleicons-6/P/Poetry')
```



| Illustration | Poetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Poetry.png) | ![illustration for Poetry](../../simpleicons-6/P/Poetry.Local.png) |




## Poetry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Poetry
include('simpleicons-6/P/Poetry')

' renders the element
Poetry('Poetry', 'Poetry', 'an optional tech label')
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

' loads the Item which embeds the element Poetry
include('simpleicons-6/P/Poetry')

' renders the element
Poetry('Poetry', 'Poetry', 'an optional tech label')
@enduml
```

