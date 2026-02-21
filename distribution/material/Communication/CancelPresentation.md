# CancelPresentation


```text
material/Communication/CancelPresentation
```

```text
include('material/Communication/CancelPresentation')
```



| Illustration | CancelPresentation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/CancelPresentation.png) | ![illustration for CancelPresentation](../../material/Communication/CancelPresentation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CancelPresentationXs>`
- `<$CancelPresentationSm>`
- `<$CancelPresentationMd>`
- `<$CancelPresentationLg>`





## CancelPresentation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CancelPresentation
include('material/Communication/CancelPresentation')

' renders the element
CancelPresentation('CancelPresentation', 'Cancel Presentation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CancelPresentation
include('material/Communication/CancelPresentation')

' renders the element
CancelPresentation('CancelPresentation', 'Cancel Presentation', 'an optional tech label', 'an optional description')
@enduml
```

