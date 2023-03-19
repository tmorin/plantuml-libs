# Cast


```text
material-4/Hardware/Cast
```

```text
include('material-4/Hardware/Cast')
```



| Illustration | Cast |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Cast.png) | ![illustration for Cast](../../material-4/Hardware/Cast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CastXs>`
- `<$CastSm>`
- `<$CastMd>`
- `<$CastLg>`





## Cast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Cast
include('material-4/Hardware/Cast')

' renders the element
Cast('Cast', 'Cast', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Cast
include('material-4/Hardware/Cast')

' renders the element
Cast('Cast', 'Cast', 'an optional tech label', 'an optional description')
@enduml
```

