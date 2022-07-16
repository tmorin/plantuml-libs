# Expensify


```text
simpleicons-7/E/Expensify
```

```text
include('simpleicons-7/E/Expensify')
```



| Illustration | Expensify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Expensify.png) | ![illustration for Expensify](../../simpleicons-7/E/Expensify.Local.png) |




## Expensify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Expensify
include('simpleicons-7/E/Expensify')

' renders the element
Expensify('Expensify', 'Expensify', 'an optional tech label')
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

' loads the Item which embeds the element Expensify
include('simpleicons-7/E/Expensify')

' renders the element
Expensify('Expensify', 'Expensify', 'an optional tech label')
@enduml
```

