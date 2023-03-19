# VideoLabel


```text
material-4/Av/VideoLabel
```

```text
include('material-4/Av/VideoLabel')
```



| Illustration | VideoLabel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VideoLabel.png) | ![illustration for VideoLabel](../../material-4/Av/VideoLabel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideoLabelXs>`
- `<$VideoLabelSm>`
- `<$VideoLabelMd>`
- `<$VideoLabelLg>`





## VideoLabel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VideoLabel
include('material-4/Av/VideoLabel')

' renders the element
VideoLabel('VideoLabel', 'Video Label', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideoLabel
include('material-4/Av/VideoLabel')

' renders the element
VideoLabel('VideoLabel', 'Video Label', 'an optional tech label', 'an optional description')
@enduml
```

