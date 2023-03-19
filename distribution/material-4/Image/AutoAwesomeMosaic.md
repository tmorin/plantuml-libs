# AutoAwesomeMosaic


```text
material-4/Image/AutoAwesomeMosaic
```

```text
include('material-4/Image/AutoAwesomeMosaic')
```



| Illustration | AutoAwesomeMosaic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AutoAwesomeMosaic.png) | ![illustration for AutoAwesomeMosaic](../../material-4/Image/AutoAwesomeMosaic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoAwesomeMosaicXs>`
- `<$AutoAwesomeMosaicSm>`
- `<$AutoAwesomeMosaicMd>`
- `<$AutoAwesomeMosaicLg>`





## AutoAwesomeMosaic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoAwesomeMosaic
include('material-4/Image/AutoAwesomeMosaic')

' renders the element
AutoAwesomeMosaic('AutoAwesomeMosaic', 'Auto Awesome Mosaic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AutoAwesomeMosaic
include('material-4/Image/AutoAwesomeMosaic')

' renders the element
AutoAwesomeMosaic('AutoAwesomeMosaic', 'Auto Awesome Mosaic', 'an optional tech label', 'an optional description')
@enduml
```

