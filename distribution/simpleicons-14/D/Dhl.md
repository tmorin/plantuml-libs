# Dhl


```text
simpleicons-14/D/Dhl
```

```text
include('simpleicons-14/D/Dhl')
```



| Illustration | Dhl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dhl.png) | ![illustration for Dhl](../../simpleicons-14/D/Dhl.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dhl
include('simpleicons-14/D/Dhl')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dhl
include('simpleicons-14/D/Dhl')

' renders the element
Dhl('Dhl', 'Dhl', 'an optional tech label', 'an optional description')
@enduml
```

