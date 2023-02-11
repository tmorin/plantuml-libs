# Thealgorithms


```text
simpleicons-8/T/Thealgorithms
```

```text
include('simpleicons-8/T/Thealgorithms')
```



| Illustration | Thealgorithms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Thealgorithms.png) | ![illustration for Thealgorithms](../../simpleicons-8/T/Thealgorithms.Local.png) |




## Thealgorithms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Thealgorithms
include('simpleicons-8/T/Thealgorithms')

' renders the element
Thealgorithms('Thealgorithms', 'Thealgorithms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thealgorithms
include('simpleicons-8/T/Thealgorithms')

' renders the element
Thealgorithms('Thealgorithms', 'Thealgorithms', 'an optional tech label', 'an optional description')
@enduml
```

