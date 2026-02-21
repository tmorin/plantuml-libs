# RemoveCircle


```text
material/Content/RemoveCircle
```

```text
include('material/Content/RemoveCircle')
```



| Illustration | RemoveCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/RemoveCircle.png) | ![illustration for RemoveCircle](../../material/Content/RemoveCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveCircleXs>`
- `<$RemoveCircleSm>`
- `<$RemoveCircleMd>`
- `<$RemoveCircleLg>`





## RemoveCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RemoveCircle
include('material/Content/RemoveCircle')

' renders the element
RemoveCircle('RemoveCircle', 'Remove Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveCircle
include('material/Content/RemoveCircle')

' renders the element
RemoveCircle('RemoveCircle', 'Remove Circle', 'an optional tech label', 'an optional description')
@enduml
```

