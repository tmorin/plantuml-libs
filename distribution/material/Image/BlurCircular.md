# BlurCircular


```text
material/Image/BlurCircular
```

```text
include('material/Image/BlurCircular')
```



| Illustration | BlurCircular |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/BlurCircular.png) | ![illustration for BlurCircular](../../material/Image/BlurCircular.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element BlurCircular
include('material/Image/BlurCircular')

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
include('material/bootstrap')

' loads the Item which embeds the element BlurCircular
include('material/Image/BlurCircular')

' renders the element
BlurCircular('BlurCircular', 'Blur Circular', 'an optional tech label', 'an optional description')
@enduml
```

