# Folium


```text
simpleicons-6/F/Folium
```

```text
include('simpleicons-6/F/Folium')
```



| Illustration | Folium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Folium.png) | ![illustration for Folium](../../simpleicons-6/F/Folium.Local.png) |




## Folium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Folium
include('simpleicons-6/F/Folium')

' renders the element
Folium('Folium', 'Folium', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Folium
include('simpleicons-6/F/Folium')

' renders the element
Folium('Folium', 'Folium', 'an optional tech label')
@enduml
```

