# Yaak


```text
simpleicons/Y/Yaak
```

```text
include('simpleicons/Y/Yaak')
```



| Illustration | Yaak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yaak.png) | ![illustration for Yaak](../../simpleicons/Y/Yaak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YaakXs>`
- `<$YaakSm>`
- `<$YaakMd>`
- `<$YaakLg>`





## Yaak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yaak
include('simpleicons/Y/Yaak')

' renders the element
Yaak('Yaak', 'Yaak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yaak
include('simpleicons/Y/Yaak')

' renders the element
Yaak('Yaak', 'Yaak', 'an optional tech label', 'an optional description')
@enduml
```

