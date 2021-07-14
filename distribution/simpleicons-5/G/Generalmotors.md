# Generalmotors


```text
simpleicons-5/G/Generalmotors
```

```text
include('simpleicons-5/G/Generalmotors')
```



| Illustration | Generalmotors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Generalmotors.png) | ![illustration for Generalmotors](../../simpleicons-5/G/Generalmotors.Local.png) |




## Generalmotors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Generalmotors
include('simpleicons-5/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label')
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

' loads the Item which embeds the element Generalmotors
include('simpleicons-5/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label')
@enduml
```

