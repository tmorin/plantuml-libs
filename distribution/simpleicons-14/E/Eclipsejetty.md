# Eclipsejetty


```text
simpleicons-14/E/Eclipsejetty
```

```text
include('simpleicons-14/E/Eclipsejetty')
```



| Illustration | Eclipsejetty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eclipsejetty.png) | ![illustration for Eclipsejetty](../../simpleicons-14/E/Eclipsejetty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EclipsejettyXs>`
- `<$EclipsejettySm>`
- `<$EclipsejettyMd>`
- `<$EclipsejettyLg>`





## Eclipsejetty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eclipsejetty
include('simpleicons-14/E/Eclipsejetty')

' renders the element
Eclipsejetty('Eclipsejetty', 'Eclipsejetty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eclipsejetty
include('simpleicons-14/E/Eclipsejetty')

' renders the element
Eclipsejetty('Eclipsejetty', 'Eclipsejetty', 'an optional tech label', 'an optional description')
@enduml
```

