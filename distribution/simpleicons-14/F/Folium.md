# Folium


```text
simpleicons-14/F/Folium
```

```text
include('simpleicons-14/F/Folium')
```



| Illustration | Folium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Folium.png) | ![illustration for Folium](../../simpleicons-14/F/Folium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoliumXs>`
- `<$FoliumSm>`
- `<$FoliumMd>`
- `<$FoliumLg>`





## Folium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Folium
include('simpleicons-14/F/Folium')

' renders the element
Folium('Folium', 'Folium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Folium
include('simpleicons-14/F/Folium')

' renders the element
Folium('Folium', 'Folium', 'an optional tech label', 'an optional description')
@enduml
```

