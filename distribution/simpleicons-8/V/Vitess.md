# Vitess


```text
simpleicons-8/V/Vitess
```

```text
include('simpleicons-8/V/Vitess')
```



| Illustration | Vitess |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vitess.png) | ![illustration for Vitess](../../simpleicons-8/V/Vitess.Local.png) |




## Vitess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vitess
include('simpleicons-8/V/Vitess')

' renders the element
Vitess('Vitess', 'Vitess', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vitess
include('simpleicons-8/V/Vitess')

' renders the element
Vitess('Vitess', 'Vitess', 'an optional tech label', 'an optional description')
@enduml
```

