# Osmc


```text
simpleicons-8/O/Osmc
```

```text
include('simpleicons-8/O/Osmc')
```



| Illustration | Osmc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Osmc.png) | ![illustration for Osmc](../../simpleicons-8/O/Osmc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsmcXs>`
- `<$OsmcSm>`
- `<$OsmcMd>`
- `<$OsmcLg>`





## Osmc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Osmc
include('simpleicons-8/O/Osmc')

' renders the element
Osmc('Osmc', 'Osmc', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Osmc
include('simpleicons-8/O/Osmc')

' renders the element
Osmc('Osmc', 'Osmc', 'an optional tech label', 'an optional description')
@enduml
```

