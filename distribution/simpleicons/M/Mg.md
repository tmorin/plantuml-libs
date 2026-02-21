# Mg


```text
simpleicons/M/Mg
```

```text
include('simpleicons/M/Mg')
```



| Illustration | Mg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mg.png) | ![illustration for Mg](../../simpleicons/M/Mg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MgXs>`
- `<$MgSm>`
- `<$MgMd>`
- `<$MgLg>`





## Mg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mg
include('simpleicons/M/Mg')

' renders the element
Mg('Mg', 'Mg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mg
include('simpleicons/M/Mg')

' renders the element
Mg('Mg', 'Mg', 'an optional tech label', 'an optional description')
@enduml
```

