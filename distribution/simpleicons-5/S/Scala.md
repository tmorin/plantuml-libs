# Scala


```text
simpleicons-5/S/Scala
```

```text
include('simpleicons-5/S/Scala')
```



| Illustration | Scala |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scala.png) | ![illustration for Scala](../../simpleicons-5/S/Scala.Local.png) |




## Scala

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scala
include('simpleicons-5/S/Scala')

' renders the element
Scala('Scala', 'Scala', 'an optional tech label')
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

' loads the Item which embeds the element Scala
include('simpleicons-5/S/Scala')

' renders the element
Scala('Scala', 'Scala', 'an optional tech label')
@enduml
```

