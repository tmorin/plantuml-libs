# Eclipseadoptium


```text
simpleicons-14/E/Eclipseadoptium
```

```text
include('simpleicons-14/E/Eclipseadoptium')
```



| Illustration | Eclipseadoptium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eclipseadoptium.png) | ![illustration for Eclipseadoptium](../../simpleicons-14/E/Eclipseadoptium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EclipseadoptiumXs>`
- `<$EclipseadoptiumSm>`
- `<$EclipseadoptiumMd>`
- `<$EclipseadoptiumLg>`





## Eclipseadoptium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eclipseadoptium
include('simpleicons-14/E/Eclipseadoptium')

' renders the element
Eclipseadoptium('Eclipseadoptium', 'Eclipseadoptium', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eclipseadoptium
include('simpleicons-14/E/Eclipseadoptium')

' renders the element
Eclipseadoptium('Eclipseadoptium', 'Eclipseadoptium', 'an optional tech label', 'an optional description')
@enduml
```

