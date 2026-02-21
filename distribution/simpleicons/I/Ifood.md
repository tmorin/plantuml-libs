# Ifood


```text
simpleicons/I/Ifood
```

```text
include('simpleicons/I/Ifood')
```



| Illustration | Ifood |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Ifood.png) | ![illustration for Ifood](../../simpleicons/I/Ifood.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IfoodXs>`
- `<$IfoodSm>`
- `<$IfoodMd>`
- `<$IfoodLg>`





## Ifood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ifood
include('simpleicons/I/Ifood')

' renders the element
Ifood('Ifood', 'Ifood', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ifood
include('simpleicons/I/Ifood')

' renders the element
Ifood('Ifood', 'Ifood', 'an optional tech label', 'an optional description')
@enduml
```

