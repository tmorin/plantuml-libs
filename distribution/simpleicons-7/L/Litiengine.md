# Litiengine


```text
simpleicons-7/L/Litiengine
```

```text
include('simpleicons-7/L/Litiengine')
```



| Illustration | Litiengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Litiengine.png) | ![illustration for Litiengine](../../simpleicons-7/L/Litiengine.Local.png) |




## Litiengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Litiengine
include('simpleicons-7/L/Litiengine')

' renders the element
Litiengine('Litiengine', 'Litiengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Litiengine
include('simpleicons-7/L/Litiengine')

' renders the element
Litiengine('Litiengine', 'Litiengine', 'an optional tech label', 'an optional description')
@enduml
```

