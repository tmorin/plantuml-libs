# Airtel


```text
simpleicons/A/Airtel
```

```text
include('simpleicons/A/Airtel')
```



| Illustration | Airtel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Airtel.png) | ![illustration for Airtel](../../simpleicons/A/Airtel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirtelXs>`
- `<$AirtelSm>`
- `<$AirtelMd>`
- `<$AirtelLg>`





## Airtel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Airtel
include('simpleicons/A/Airtel')

' renders the element
Airtel('Airtel', 'Airtel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airtel
include('simpleicons/A/Airtel')

' renders the element
Airtel('Airtel', 'Airtel', 'an optional tech label', 'an optional description')
@enduml
```

