# Godox


```text
simpleicons/G/Godox
```

```text
include('simpleicons/G/Godox')
```



| Illustration | Godox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Godox.png) | ![illustration for Godox](../../simpleicons/G/Godox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GodoxXs>`
- `<$GodoxSm>`
- `<$GodoxMd>`
- `<$GodoxLg>`





## Godox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Godox
include('simpleicons/G/Godox')

' renders the element
Godox('Godox', 'Godox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Godox
include('simpleicons/G/Godox')

' renders the element
Godox('Godox', 'Godox', 'an optional tech label', 'an optional description')
@enduml
```

