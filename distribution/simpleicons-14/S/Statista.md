# Statista


```text
simpleicons-14/S/Statista
```

```text
include('simpleicons-14/S/Statista')
```



| Illustration | Statista |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Statista.png) | ![illustration for Statista](../../simpleicons-14/S/Statista.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StatistaXs>`
- `<$StatistaSm>`
- `<$StatistaMd>`
- `<$StatistaLg>`





## Statista

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Statista
include('simpleicons-14/S/Statista')

' renders the element
Statista('Statista', 'Statista', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Statista
include('simpleicons-14/S/Statista')

' renders the element
Statista('Statista', 'Statista', 'an optional tech label', 'an optional description')
@enduml
```

