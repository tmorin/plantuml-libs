# Mclaren


```text
simpleicons-5/M/Mclaren
```

```text
include('simpleicons-5/M/Mclaren')
```



| Illustration | Mclaren |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mclaren.png) | ![illustration for Mclaren](../../simpleicons-5/M/Mclaren.Local.png) |




## Mclaren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mclaren
include('simpleicons-5/M/Mclaren')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mclaren
include('simpleicons-5/M/Mclaren')

' renders the element
Mclaren('Mclaren', 'Mclaren', 'an optional tech label')
@enduml
```

