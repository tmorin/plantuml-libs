# Klm


```text
simpleicons/K/Klm
```

```text
include('simpleicons/K/Klm')
```



| Illustration | Klm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Klm.png) | ![illustration for Klm](../../simpleicons/K/Klm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KlmXs>`
- `<$KlmSm>`
- `<$KlmMd>`
- `<$KlmLg>`





## Klm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Klm
include('simpleicons/K/Klm')

' renders the element
Klm('Klm', 'Klm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Klm
include('simpleicons/K/Klm')

' renders the element
Klm('Klm', 'Klm', 'an optional tech label', 'an optional description')
@enduml
```

