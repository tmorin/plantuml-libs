# Osmand


```text
simpleicons/O/Osmand
```

```text
include('simpleicons/O/Osmand')
```



| Illustration | Osmand |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Osmand.png) | ![illustration for Osmand](../../simpleicons/O/Osmand.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsmandXs>`
- `<$OsmandSm>`
- `<$OsmandMd>`
- `<$OsmandLg>`





## Osmand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Osmand
include('simpleicons/O/Osmand')

' renders the element
Osmand('Osmand', 'Osmand', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Osmand
include('simpleicons/O/Osmand')

' renders the element
Osmand('Osmand', 'Osmand', 'an optional tech label', 'an optional description')
@enduml
```

