# Coop


```text
simpleicons-5/C/Coop
```

```text
include('simpleicons-5/C/Coop')
```



| Illustration | Coop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Coop.png) | ![illustration for Coop](../../simpleicons-5/C/Coop.Local.png) |




## Coop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Coop
include('simpleicons-5/C/Coop')

' renders the element
Coop('Coop', 'Coop', 'an optional tech label')
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

' loads the Item which embeds the element Coop
include('simpleicons-5/C/Coop')

' renders the element
Coop('Coop', 'Coop', 'an optional tech label')
@enduml
```

