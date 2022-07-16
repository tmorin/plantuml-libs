# Chupachups


```text
simpleicons-7/C/Chupachups
```

```text
include('simpleicons-7/C/Chupachups')
```



| Illustration | Chupachups |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chupachups.png) | ![illustration for Chupachups](../../simpleicons-7/C/Chupachups.Local.png) |




## Chupachups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chupachups
include('simpleicons-7/C/Chupachups')

' renders the element
Chupachups('Chupachups', 'Chupachups', 'an optional tech label')
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

' loads the Item which embeds the element Chupachups
include('simpleicons-7/C/Chupachups')

' renders the element
Chupachups('Chupachups', 'Chupachups', 'an optional tech label')
@enduml
```

