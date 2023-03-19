# AssistantPhoto


```text
material-4/Image/AssistantPhoto
```

```text
include('material-4/Image/AssistantPhoto')
```



| Illustration | AssistantPhoto |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AssistantPhoto.png) | ![illustration for AssistantPhoto](../../material-4/Image/AssistantPhoto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssistantPhotoXs>`
- `<$AssistantPhotoSm>`
- `<$AssistantPhotoMd>`
- `<$AssistantPhotoLg>`





## AssistantPhoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AssistantPhoto
include('material-4/Image/AssistantPhoto')

' renders the element
AssistantPhoto('AssistantPhoto', 'Assistant Photo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AssistantPhoto
include('material-4/Image/AssistantPhoto')

' renders the element
AssistantPhoto('AssistantPhoto', 'Assistant Photo', 'an optional tech label', 'an optional description')
@enduml
```

