# Koding


```text
simpleicons-5/K/Koding
```

```text
include('simpleicons-5/K/Koding')
```



| Illustration | Koding |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Koding.png) | ![illustration for Koding](../../simpleicons-5/K/Koding.Local.png) |




## Koding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Koding
include('simpleicons-5/K/Koding')

' renders the element
Koding('Koding', 'Koding', 'an optional tech label')
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

' loads the Item which embeds the element Koding
include('simpleicons-5/K/Koding')

' renders the element
Koding('Koding', 'Koding', 'an optional tech label')
@enduml
```

