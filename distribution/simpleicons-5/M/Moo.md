# Moo


```text
simpleicons-5/M/Moo
```

```text
include('simpleicons-5/M/Moo')
```



| Illustration | Moo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Moo.png) | ![illustration for Moo](../../simpleicons-5/M/Moo.Local.png) |




## Moo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Moo
include('simpleicons-5/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label')
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

' loads the Item which embeds the element Moo
include('simpleicons-5/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label')
@enduml
```

