# Sumup


```text
simpleicons/S/Sumup
```

```text
include('simpleicons/S/Sumup')
```



| Illustration | Sumup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sumup.png) | ![illustration for Sumup](../../simpleicons/S/Sumup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SumupXs>`
- `<$SumupSm>`
- `<$SumupMd>`
- `<$SumupLg>`





## Sumup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sumup
include('simpleicons/S/Sumup')

' renders the element
Sumup('Sumup', 'Sumup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sumup
include('simpleicons/S/Sumup')

' renders the element
Sumup('Sumup', 'Sumup', 'an optional tech label', 'an optional description')
@enduml
```

