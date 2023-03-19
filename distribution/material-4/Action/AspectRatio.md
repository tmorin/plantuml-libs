# AspectRatio


```text
material-4/Action/AspectRatio
```

```text
include('material-4/Action/AspectRatio')
```



| Illustration | AspectRatio |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AspectRatio.png) | ![illustration for AspectRatio](../../material-4/Action/AspectRatio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AspectRatioXs>`
- `<$AspectRatioSm>`
- `<$AspectRatioMd>`
- `<$AspectRatioLg>`





## AspectRatio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AspectRatio
include('material-4/Action/AspectRatio')

' renders the element
AspectRatio('AspectRatio', 'Aspect Ratio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AspectRatio
include('material-4/Action/AspectRatio')

' renders the element
AspectRatio('AspectRatio', 'Aspect Ratio', 'an optional tech label', 'an optional description')
@enduml
```

