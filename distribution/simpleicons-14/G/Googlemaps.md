# Googlemaps


```text
simpleicons-14/G/Googlemaps
```

```text
include('simpleicons-14/G/Googlemaps')
```



| Illustration | Googlemaps |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlemaps.png) | ![illustration for Googlemaps](../../simpleicons-14/G/Googlemaps.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglemapsXs>`
- `<$GooglemapsSm>`
- `<$GooglemapsMd>`
- `<$GooglemapsLg>`





## Googlemaps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlemaps
include('simpleicons-14/G/Googlemaps')

' renders the element
Googlemaps('Googlemaps', 'Googlemaps', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlemaps
include('simpleicons-14/G/Googlemaps')

' renders the element
Googlemaps('Googlemaps', 'Googlemaps', 'an optional tech label', 'an optional description')
@enduml
```

