# Poetry


```text
simpleicons-7/P/Poetry
```

```text
include('simpleicons-7/P/Poetry')
```



| Illustration | Poetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Poetry.png) | ![illustration for Poetry](../../simpleicons-7/P/Poetry.Local.png) |




## Poetry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Poetry
include('simpleicons-7/P/Poetry')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Poetry
include('simpleicons-7/P/Poetry')

' renders the element
Poetry('Poetry', 'Poetry', 'an optional tech label')
@enduml
```

