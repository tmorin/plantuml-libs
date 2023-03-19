# Criticalrole


```text
simpleicons-8/C/Criticalrole
```

```text
include('simpleicons-8/C/Criticalrole')
```



| Illustration | Criticalrole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Criticalrole.png) | ![illustration for Criticalrole](../../simpleicons-8/C/Criticalrole.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Criticalrole
include('simpleicons-8/C/Criticalrole')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Criticalrole
include('simpleicons-8/C/Criticalrole')

' renders the element
Criticalrole('Criticalrole', 'Criticalrole', 'an optional tech label', 'an optional description')
@enduml
```

