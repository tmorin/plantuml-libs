# Coop


```text
simpleicons-6/C/Coop
```

```text
include('simpleicons-6/C/Coop')
```



| Illustration | Coop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Coop.png) | ![illustration for Coop](../../simpleicons-6/C/Coop.Local.png) |




## Coop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Coop
include('simpleicons-6/C/Coop')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Coop
include('simpleicons-6/C/Coop')

' renders the element
Coop('Coop', 'Coop', 'an optional tech label')
@enduml
```

