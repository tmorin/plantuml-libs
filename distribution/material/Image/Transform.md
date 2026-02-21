# Transform


```text
material/Image/Transform
```

```text
include('material/Image/Transform')
```



| Illustration | Transform |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Transform.png) | ![illustration for Transform](../../material/Image/Transform.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransformXs>`
- `<$TransformSm>`
- `<$TransformMd>`
- `<$TransformLg>`





## Transform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Transform
include('material/Image/Transform')

' renders the element
Transform('Transform', 'Transform', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transform
include('material/Image/Transform')

' renders the element
Transform('Transform', 'Transform', 'an optional tech label', 'an optional description')
@enduml
```

