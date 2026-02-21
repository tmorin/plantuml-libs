# Obtainium


```text
simpleicons/O/Obtainium
```

```text
include('simpleicons/O/Obtainium')
```



| Illustration | Obtainium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Obtainium.png) | ![illustration for Obtainium](../../simpleicons/O/Obtainium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ObtainiumXs>`
- `<$ObtainiumSm>`
- `<$ObtainiumMd>`
- `<$ObtainiumLg>`





## Obtainium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Obtainium
include('simpleicons/O/Obtainium')

' renders the element
Obtainium('Obtainium', 'Obtainium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Obtainium
include('simpleicons/O/Obtainium')

' renders the element
Obtainium('Obtainium', 'Obtainium', 'an optional tech label', 'an optional description')
@enduml
```

