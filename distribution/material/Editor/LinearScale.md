# LinearScale


```text
material/Editor/LinearScale
```

```text
include('material/Editor/LinearScale')
```



| Illustration | LinearScale |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/LinearScale.png) | ![illustration for LinearScale](../../material/Editor/LinearScale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinearScaleXs>`
- `<$LinearScaleSm>`
- `<$LinearScaleMd>`
- `<$LinearScaleLg>`





## LinearScale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LinearScale
include('material/Editor/LinearScale')

' renders the element
LinearScale('LinearScale', 'Linear Scale', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LinearScale
include('material/Editor/LinearScale')

' renders the element
LinearScale('LinearScale', 'Linear Scale', 'an optional tech label', 'an optional description')
@enduml
```

