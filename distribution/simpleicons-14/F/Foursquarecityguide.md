# Foursquarecityguide


```text
simpleicons-14/F/Foursquarecityguide
```

```text
include('simpleicons-14/F/Foursquarecityguide')
```



| Illustration | Foursquarecityguide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Foursquarecityguide.png) | ![illustration for Foursquarecityguide](../../simpleicons-14/F/Foursquarecityguide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoursquarecityguideXs>`
- `<$FoursquarecityguideSm>`
- `<$FoursquarecityguideMd>`
- `<$FoursquarecityguideLg>`





## Foursquarecityguide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Foursquarecityguide
include('simpleicons-14/F/Foursquarecityguide')

' renders the element
Foursquarecityguide('Foursquarecityguide', 'Foursquarecityguide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Foursquarecityguide
include('simpleicons-14/F/Foursquarecityguide')

' renders the element
Foursquarecityguide('Foursquarecityguide', 'Foursquarecityguide', 'an optional tech label', 'an optional description')
@enduml
```

