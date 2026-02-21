# Acura


```text
simpleicons/A/Acura
```

```text
include('simpleicons/A/Acura')
```



| Illustration | Acura |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Acura.png) | ![illustration for Acura](../../simpleicons/A/Acura.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcuraXs>`
- `<$AcuraSm>`
- `<$AcuraMd>`
- `<$AcuraLg>`





## Acura

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Acura
include('simpleicons/A/Acura')

' renders the element
Acura('Acura', 'Acura', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Acura
include('simpleicons/A/Acura')

' renders the element
Acura('Acura', 'Acura', 'an optional tech label', 'an optional description')
@enduml
```

