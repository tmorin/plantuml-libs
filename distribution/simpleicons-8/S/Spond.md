# Spond


```text
simpleicons-8/S/Spond
```

```text
include('simpleicons-8/S/Spond')
```



| Illustration | Spond |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Spond.png) | ![illustration for Spond](../../simpleicons-8/S/Spond.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spond
include('simpleicons-8/S/Spond')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spond
include('simpleicons-8/S/Spond')

' renders the element
Spond('Spond', 'Spond', 'an optional tech label', 'an optional description')
@enduml
```

