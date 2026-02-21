# Termius


```text
simpleicons/T/Termius
```

```text
include('simpleicons/T/Termius')
```



| Illustration | Termius |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Termius.png) | ![illustration for Termius](../../simpleicons/T/Termius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TermiusXs>`
- `<$TermiusSm>`
- `<$TermiusMd>`
- `<$TermiusLg>`





## Termius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Termius
include('simpleicons/T/Termius')

' renders the element
Termius('Termius', 'Termius', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Termius
include('simpleicons/T/Termius')

' renders the element
Termius('Termius', 'Termius', 'an optional tech label', 'an optional description')
@enduml
```

