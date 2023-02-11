# Generalmotors


```text
simpleicons-8/G/Generalmotors
```

```text
include('simpleicons-8/G/Generalmotors')
```



| Illustration | Generalmotors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Generalmotors.png) | ![illustration for Generalmotors](../../simpleicons-8/G/Generalmotors.Local.png) |




## Generalmotors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Generalmotors
include('simpleicons-8/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Generalmotors
include('simpleicons-8/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label', 'an optional description')
@enduml
```

