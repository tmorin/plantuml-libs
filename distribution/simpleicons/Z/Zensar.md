# Zensar


```text
simpleicons/Z/Zensar
```

```text
include('simpleicons/Z/Zensar')
```



| Illustration | Zensar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zensar.png) | ![illustration for Zensar](../../simpleicons/Z/Zensar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZensarXs>`
- `<$ZensarSm>`
- `<$ZensarMd>`
- `<$ZensarLg>`





## Zensar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zensar
include('simpleicons/Z/Zensar')

' renders the element
Zensar('Zensar', 'Zensar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zensar
include('simpleicons/Z/Zensar')

' renders the element
Zensar('Zensar', 'Zensar', 'an optional tech label', 'an optional description')
@enduml
```

