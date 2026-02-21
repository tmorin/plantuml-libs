# Dhl


```text
simpleicons/D/Dhl
```

```text
include('simpleicons/D/Dhl')
```



| Illustration | Dhl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dhl.png) | ![illustration for Dhl](../../simpleicons/D/Dhl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DhlXs>`
- `<$DhlSm>`
- `<$DhlMd>`
- `<$DhlLg>`





## Dhl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dhl
include('simpleicons/D/Dhl')

' renders the element
Dhl('Dhl', 'Dhl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dhl
include('simpleicons/D/Dhl')

' renders the element
Dhl('Dhl', 'Dhl', 'an optional tech label', 'an optional description')
@enduml
```

