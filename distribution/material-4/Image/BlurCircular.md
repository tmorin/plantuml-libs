# BlurCircular


```text
material-4/Image/BlurCircular
```

```text
include('material-4/Image/BlurCircular')
```



| Illustration | BlurCircular |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BlurCircular.png) | ![illustration for BlurCircular](../../material-4/Image/BlurCircular.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlurCircularXs>`
- `<$BlurCircularSm>`
- `<$BlurCircularMd>`
- `<$BlurCircularLg>`





## BlurCircular

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BlurCircular
include('material-4/Image/BlurCircular')

' renders the element
BlurCircular('BlurCircular', 'Blur Circular', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BlurCircular
include('material-4/Image/BlurCircular')

' renders the element
BlurCircular('BlurCircular', 'Blur Circular', 'an optional tech label', 'an optional description')
@enduml
```

