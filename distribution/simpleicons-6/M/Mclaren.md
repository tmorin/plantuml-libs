# Mclaren


```text
simpleicons-6/M/Mclaren
```

```text
include('simpleicons-6/M/Mclaren')
```



| Illustration | Mclaren |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mclaren.png) | ![illustration for Mclaren](../../simpleicons-6/M/Mclaren.Local.png) |




## Mclaren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mclaren
include('simpleicons-6/M/Mclaren')

' renders the element
Mclaren('Mclaren', 'Mclaren', 'an optional tech label')
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

' loads the Item which embeds the element Mclaren
include('simpleicons-6/M/Mclaren')

' renders the element
Mclaren('Mclaren', 'Mclaren', 'an optional tech label')
@enduml
```

