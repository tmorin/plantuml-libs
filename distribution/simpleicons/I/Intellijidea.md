# Intellijidea


```text
simpleicons/I/Intellijidea
```

```text
include('simpleicons/I/Intellijidea')
```



| Illustration | Intellijidea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Intellijidea.png) | ![illustration for Intellijidea](../../simpleicons/I/Intellijidea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IntellijideaXs>`
- `<$IntellijideaSm>`
- `<$IntellijideaMd>`
- `<$IntellijideaLg>`





## Intellijidea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Intellijidea
include('simpleicons/I/Intellijidea')

' renders the element
Intellijidea('Intellijidea', 'Intellijidea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Intellijidea
include('simpleicons/I/Intellijidea')

' renders the element
Intellijidea('Intellijidea', 'Intellijidea', 'an optional tech label', 'an optional description')
@enduml
```

