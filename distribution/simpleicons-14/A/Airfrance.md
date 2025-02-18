# Airfrance


```text
simpleicons-14/A/Airfrance
```

```text
include('simpleicons-14/A/Airfrance')
```



| Illustration | Airfrance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airfrance.png) | ![illustration for Airfrance](../../simpleicons-14/A/Airfrance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirfranceXs>`
- `<$AirfranceSm>`
- `<$AirfranceMd>`
- `<$AirfranceLg>`





## Airfrance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airfrance
include('simpleicons-14/A/Airfrance')

' renders the element
Airfrance('Airfrance', 'Airfrance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airfrance
include('simpleicons-14/A/Airfrance')

' renders the element
Airfrance('Airfrance', 'Airfrance', 'an optional tech label', 'an optional description')
@enduml
```

