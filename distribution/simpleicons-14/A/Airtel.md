# Airtel


```text
simpleicons-14/A/Airtel
```

```text
include('simpleicons-14/A/Airtel')
```



| Illustration | Airtel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airtel.png) | ![illustration for Airtel](../../simpleicons-14/A/Airtel.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airtel
include('simpleicons-14/A/Airtel')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airtel
include('simpleicons-14/A/Airtel')

' renders the element
Airtel('Airtel', 'Airtel', 'an optional tech label', 'an optional description')
@enduml
```

