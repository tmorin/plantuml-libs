# Generalmotors


```text
simpleicons-7/G/Generalmotors
```

```text
include('simpleicons-7/G/Generalmotors')
```



| Illustration | Generalmotors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Generalmotors.png) | ![illustration for Generalmotors](../../simpleicons-7/G/Generalmotors.Local.png) |




## Generalmotors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Generalmotors
include('simpleicons-7/G/Generalmotors')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Generalmotors
include('simpleicons-7/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label')
@enduml
```

