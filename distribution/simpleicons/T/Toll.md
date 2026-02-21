# Toll


```text
simpleicons/T/Toll
```

```text
include('simpleicons/T/Toll')
```



| Illustration | Toll |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Toll.png) | ![illustration for Toll](../../simpleicons/T/Toll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TollXs>`
- `<$TollSm>`
- `<$TollMd>`
- `<$TollLg>`





## Toll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Toll
include('simpleicons/T/Toll')

' renders the element
Toll('Toll', 'Toll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toll
include('simpleicons/T/Toll')

' renders the element
Toll('Toll', 'Toll', 'an optional tech label', 'an optional description')
@enduml
```

