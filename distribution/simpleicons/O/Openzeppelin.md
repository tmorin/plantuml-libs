# Openzeppelin


```text
simpleicons/O/Openzeppelin
```

```text
include('simpleicons/O/Openzeppelin')
```



| Illustration | Openzeppelin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openzeppelin.png) | ![illustration for Openzeppelin](../../simpleicons/O/Openzeppelin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenzeppelinXs>`
- `<$OpenzeppelinSm>`
- `<$OpenzeppelinMd>`
- `<$OpenzeppelinLg>`





## Openzeppelin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openzeppelin
include('simpleicons/O/Openzeppelin')

' renders the element
Openzeppelin('Openzeppelin', 'Openzeppelin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openzeppelin
include('simpleicons/O/Openzeppelin')

' renders the element
Openzeppelin('Openzeppelin', 'Openzeppelin', 'an optional tech label', 'an optional description')
@enduml
```

