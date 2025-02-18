# Airbnb


```text
simpleicons-14/A/Airbnb
```

```text
include('simpleicons-14/A/Airbnb')
```



| Illustration | Airbnb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airbnb.png) | ![illustration for Airbnb](../../simpleicons-14/A/Airbnb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirbnbXs>`
- `<$AirbnbSm>`
- `<$AirbnbMd>`
- `<$AirbnbLg>`





## Airbnb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airbnb
include('simpleicons-14/A/Airbnb')

' renders the element
Airbnb('Airbnb', 'Airbnb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airbnb
include('simpleicons-14/A/Airbnb')

' renders the element
Airbnb('Airbnb', 'Airbnb', 'an optional tech label', 'an optional description')
@enduml
```

