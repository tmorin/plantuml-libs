# Moo


```text
simpleicons-8/M/Moo
```

```text
include('simpleicons-8/M/Moo')
```



| Illustration | Moo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Moo.png) | ![illustration for Moo](../../simpleicons-8/M/Moo.Local.png) |




## Moo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Moo
include('simpleicons-8/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moo
include('simpleicons-8/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label', 'an optional description')
@enduml
```

