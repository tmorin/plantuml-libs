# Bookalope


```text
simpleicons/B/Bookalope
```

```text
include('simpleicons/B/Bookalope')
```



| Illustration | Bookalope |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bookalope.png) | ![illustration for Bookalope](../../simpleicons/B/Bookalope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookalopeXs>`
- `<$BookalopeSm>`
- `<$BookalopeMd>`
- `<$BookalopeLg>`





## Bookalope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bookalope
include('simpleicons/B/Bookalope')

' renders the element
Bookalope('Bookalope', 'Bookalope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookalope
include('simpleicons/B/Bookalope')

' renders the element
Bookalope('Bookalope', 'Bookalope', 'an optional tech label', 'an optional description')
@enduml
```

