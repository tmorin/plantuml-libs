# Criticalrole


```text
simpleicons-7/C/Criticalrole
```

```text
include('simpleicons-7/C/Criticalrole')
```



| Illustration | Criticalrole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Criticalrole.png) | ![illustration for Criticalrole](../../simpleicons-7/C/Criticalrole.Local.png) |




## Criticalrole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Criticalrole
include('simpleicons-7/C/Criticalrole')

' renders the element
Criticalrole('Criticalrole', 'Criticalrole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Criticalrole
include('simpleicons-7/C/Criticalrole')

' renders the element
Criticalrole('Criticalrole', 'Criticalrole', 'an optional tech label', 'an optional description')
@enduml
```

