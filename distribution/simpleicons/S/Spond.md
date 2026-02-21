# Spond


```text
simpleicons/S/Spond
```

```text
include('simpleicons/S/Spond')
```



| Illustration | Spond |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spond.png) | ![illustration for Spond](../../simpleicons/S/Spond.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpondXs>`
- `<$SpondSm>`
- `<$SpondMd>`
- `<$SpondLg>`





## Spond

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spond
include('simpleicons/S/Spond')

' renders the element
Spond('Spond', 'Spond', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spond
include('simpleicons/S/Spond')

' renders the element
Spond('Spond', 'Spond', 'an optional tech label', 'an optional description')
@enduml
```

