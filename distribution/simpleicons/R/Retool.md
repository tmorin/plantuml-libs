# Retool


```text
simpleicons/R/Retool
```

```text
include('simpleicons/R/Retool')
```



| Illustration | Retool |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Retool.png) | ![illustration for Retool](../../simpleicons/R/Retool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RetoolXs>`
- `<$RetoolSm>`
- `<$RetoolMd>`
- `<$RetoolLg>`





## Retool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Retool
include('simpleicons/R/Retool')

' renders the element
Retool('Retool', 'Retool', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Retool
include('simpleicons/R/Retool')

' renders the element
Retool('Retool', 'Retool', 'an optional tech label', 'an optional description')
@enduml
```

