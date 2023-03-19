# Opel


```text
simpleicons-8/O/Opel
```

```text
include('simpleicons-8/O/Opel')
```



| Illustration | Opel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opel.png) | ![illustration for Opel](../../simpleicons-8/O/Opel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpelXs>`
- `<$OpelSm>`
- `<$OpelMd>`
- `<$OpelLg>`





## Opel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opel
include('simpleicons-8/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opel
include('simpleicons-8/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label', 'an optional description')
@enduml
```

