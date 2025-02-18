# Beijingsubway


```text
simpleicons-14/B/Beijingsubway
```

```text
include('simpleicons-14/B/Beijingsubway')
```



| Illustration | Beijingsubway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Beijingsubway.png) | ![illustration for Beijingsubway](../../simpleicons-14/B/Beijingsubway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeijingsubwayXs>`
- `<$BeijingsubwaySm>`
- `<$BeijingsubwayMd>`
- `<$BeijingsubwayLg>`





## Beijingsubway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Beijingsubway
include('simpleicons-14/B/Beijingsubway')

' renders the element
Beijingsubway('Beijingsubway', 'Beijingsubway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beijingsubway
include('simpleicons-14/B/Beijingsubway')

' renders the element
Beijingsubway('Beijingsubway', 'Beijingsubway', 'an optional tech label', 'an optional description')
@enduml
```

