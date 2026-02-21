# Dji


```text
simpleicons/D/Dji
```

```text
include('simpleicons/D/Dji')
```



| Illustration | Dji |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dji.png) | ![illustration for Dji](../../simpleicons/D/Dji.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DjiXs>`
- `<$DjiSm>`
- `<$DjiMd>`
- `<$DjiLg>`





## Dji

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dji
include('simpleicons/D/Dji')

' renders the element
Dji('Dji', 'Dji', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dji
include('simpleicons/D/Dji')

' renders the element
Dji('Dji', 'Dji', 'an optional tech label', 'an optional description')
@enduml
```

