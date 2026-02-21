# AspectRatio


```text
material/Action/AspectRatio
```

```text
include('material/Action/AspectRatio')
```



| Illustration | AspectRatio |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AspectRatio.png) | ![illustration for AspectRatio](../../material/Action/AspectRatio.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element AspectRatio
include('material/Action/AspectRatio')

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
include('material/bootstrap')

' loads the Item which embeds the element AspectRatio
include('material/Action/AspectRatio')

' renders the element
AspectRatio('AspectRatio', 'Aspect Ratio', 'an optional tech label', 'an optional description')
@enduml
```

