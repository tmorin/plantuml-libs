# Mtr


```text
simpleicons/M/Mtr
```

```text
include('simpleicons/M/Mtr')
```



| Illustration | Mtr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mtr.png) | ![illustration for Mtr](../../simpleicons/M/Mtr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MtrXs>`
- `<$MtrSm>`
- `<$MtrMd>`
- `<$MtrLg>`





## Mtr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mtr
include('simpleicons/M/Mtr')

' renders the element
Mtr('Mtr', 'Mtr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mtr
include('simpleicons/M/Mtr')

' renders the element
Mtr('Mtr', 'Mtr', 'an optional tech label', 'an optional description')
@enduml
```

