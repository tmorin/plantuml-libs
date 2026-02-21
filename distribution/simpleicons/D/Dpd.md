# Dpd


```text
simpleicons/D/Dpd
```

```text
include('simpleicons/D/Dpd')
```



| Illustration | Dpd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dpd.png) | ![illustration for Dpd](../../simpleicons/D/Dpd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DpdXs>`
- `<$DpdSm>`
- `<$DpdMd>`
- `<$DpdLg>`





## Dpd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dpd
include('simpleicons/D/Dpd')

' renders the element
Dpd('Dpd', 'Dpd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dpd
include('simpleicons/D/Dpd')

' renders the element
Dpd('Dpd', 'Dpd', 'an optional tech label', 'an optional description')
@enduml
```

