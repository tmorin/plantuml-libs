# Deliveroo


```text
simpleicons-5/D/Deliveroo
```

```text
include('simpleicons-5/D/Deliveroo')
```



| Illustration | Deliveroo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Deliveroo.png) | ![illustration for Deliveroo](../../simpleicons-5/D/Deliveroo.Local.png) |




## Deliveroo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Deliveroo
include('simpleicons-5/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label')
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

' loads the Item which embeds the element Deliveroo
include('simpleicons-5/D/Deliveroo')

' renders the element
Deliveroo('Deliveroo', 'Deliveroo', 'an optional tech label')
@enduml
```

