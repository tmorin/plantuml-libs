# Budibase


```text
simpleicons-8/B/Budibase
```

```text
include('simpleicons-8/B/Budibase')
```



| Illustration | Budibase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Budibase.png) | ![illustration for Budibase](../../simpleicons-8/B/Budibase.Local.png) |




## Budibase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Budibase
include('simpleicons-8/B/Budibase')

' renders the element
Budibase('Budibase', 'Budibase', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Budibase
include('simpleicons-8/B/Budibase')

' renders the element
Budibase('Budibase', 'Budibase', 'an optional tech label', 'an optional description')
@enduml
```

