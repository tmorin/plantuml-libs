# Criticalrole


```text
simpleicons/C/Criticalrole
```

```text
include('simpleicons/C/Criticalrole')
```



| Illustration | Criticalrole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Criticalrole.png) | ![illustration for Criticalrole](../../simpleicons/C/Criticalrole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CriticalroleXs>`
- `<$CriticalroleSm>`
- `<$CriticalroleMd>`
- `<$CriticalroleLg>`





## Criticalrole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Criticalrole
include('simpleicons/C/Criticalrole')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Criticalrole
include('simpleicons/C/Criticalrole')

' renders the element
Criticalrole('Criticalrole', 'Criticalrole', 'an optional tech label', 'an optional description')
@enduml
```

