# Tuta


```text
simpleicons/T/Tuta
```

```text
include('simpleicons/T/Tuta')
```



| Illustration | Tuta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tuta.png) | ![illustration for Tuta](../../simpleicons/T/Tuta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TutaXs>`
- `<$TutaSm>`
- `<$TutaMd>`
- `<$TutaLg>`





## Tuta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tuta
include('simpleicons/T/Tuta')

' renders the element
Tuta('Tuta', 'Tuta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tuta
include('simpleicons/T/Tuta')

' renders the element
Tuta('Tuta', 'Tuta', 'an optional tech label', 'an optional description')
@enduml
```

