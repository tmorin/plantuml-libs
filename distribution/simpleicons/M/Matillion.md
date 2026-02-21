# Matillion


```text
simpleicons/M/Matillion
```

```text
include('simpleicons/M/Matillion')
```



| Illustration | Matillion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Matillion.png) | ![illustration for Matillion](../../simpleicons/M/Matillion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MatillionXs>`
- `<$MatillionSm>`
- `<$MatillionMd>`
- `<$MatillionLg>`





## Matillion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Matillion
include('simpleicons/M/Matillion')

' renders the element
Matillion('Matillion', 'Matillion', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Matillion
include('simpleicons/M/Matillion')

' renders the element
Matillion('Matillion', 'Matillion', 'an optional tech label', 'an optional description')
@enduml
```

