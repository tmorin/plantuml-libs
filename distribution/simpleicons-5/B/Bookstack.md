# Bookstack


```text
simpleicons-5/B/Bookstack
```

```text
include('simpleicons-5/B/Bookstack')
```



| Illustration | Bookstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bookstack.png) | ![illustration for Bookstack](../../simpleicons-5/B/Bookstack.Local.png) |




## Bookstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bookstack
include('simpleicons-5/B/Bookstack')

' renders the element
Bookstack('Bookstack', 'Bookstack', 'an optional tech label')
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

' loads the Item which embeds the element Bookstack
include('simpleicons-5/B/Bookstack')

' renders the element
Bookstack('Bookstack', 'Bookstack', 'an optional tech label')
@enduml
```

