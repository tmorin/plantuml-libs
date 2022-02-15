# Sat1


```text
simpleicons-6/S/Sat1
```

```text
include('simpleicons-6/S/Sat1')
```



| Illustration | Sat1 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sat1.png) | ![illustration for Sat1](../../simpleicons-6/S/Sat1.Local.png) |




## Sat1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sat1
include('simpleicons-6/S/Sat1')

' renders the element
Sat1('Sat1', 'Sat1', 'an optional tech label')
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

' loads the Item which embeds the element Sat1
include('simpleicons-6/S/Sat1')

' renders the element
Sat1('Sat1', 'Sat1', 'an optional tech label')
@enduml
```

