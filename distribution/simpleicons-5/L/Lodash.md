# Lodash


```text
simpleicons-5/L/Lodash
```

```text
include('simpleicons-5/L/Lodash')
```



| Illustration | Lodash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lodash.png) | ![illustration for Lodash](../../simpleicons-5/L/Lodash.Local.png) |




## Lodash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lodash
include('simpleicons-5/L/Lodash')

' renders the element
Lodash('Lodash', 'Lodash', 'an optional tech label')
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

' loads the Item which embeds the element Lodash
include('simpleicons-5/L/Lodash')

' renders the element
Lodash('Lodash', 'Lodash', 'an optional tech label')
@enduml
```

