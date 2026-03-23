# Boxes


```text
fontawesome/Solid/Boxes
```

```text
include('fontawesome/Solid/Boxes')
```



| Illustration | Boxes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Boxes.png) | ![illustration for Boxes](../../fontawesome/Solid/Boxes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxesXs>`
- `<$BoxesSm>`
- `<$BoxesMd>`
- `<$BoxesLg>`





## Boxes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Boxes
include('fontawesome/Solid/Boxes')

' renders the element
Boxes('Boxes', 'Boxes', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Boxes
include('fontawesome/Solid/Boxes')

' renders the element
Boxes('Boxes', 'Boxes', 'an optional tech label', 'an optional description')
@enduml
```

