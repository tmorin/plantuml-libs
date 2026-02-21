# Pfsense


```text
simpleicons/P/Pfsense
```

```text
include('simpleicons/P/Pfsense')
```



| Illustration | Pfsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pfsense.png) | ![illustration for Pfsense](../../simpleicons/P/Pfsense.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PfsenseXs>`
- `<$PfsenseSm>`
- `<$PfsenseMd>`
- `<$PfsenseLg>`





## Pfsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pfsense
include('simpleicons/P/Pfsense')

' renders the element
Pfsense('Pfsense', 'Pfsense', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pfsense
include('simpleicons/P/Pfsense')

' renders the element
Pfsense('Pfsense', 'Pfsense', 'an optional tech label', 'an optional description')
@enduml
```

