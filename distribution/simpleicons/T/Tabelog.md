# Tabelog


```text
simpleicons/T/Tabelog
```

```text
include('simpleicons/T/Tabelog')
```



| Illustration | Tabelog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tabelog.png) | ![illustration for Tabelog](../../simpleicons/T/Tabelog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabelogXs>`
- `<$TabelogSm>`
- `<$TabelogMd>`
- `<$TabelogLg>`





## Tabelog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tabelog
include('simpleicons/T/Tabelog')

' renders the element
Tabelog('Tabelog', 'Tabelog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tabelog
include('simpleicons/T/Tabelog')

' renders the element
Tabelog('Tabelog', 'Tabelog', 'an optional tech label', 'an optional description')
@enduml
```

