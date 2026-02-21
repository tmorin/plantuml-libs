# Height


```text
material/Editor/Height
```

```text
include('material/Editor/Height')
```



| Illustration | Height |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Height.png) | ![illustration for Height](../../material/Editor/Height.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeightXs>`
- `<$HeightSm>`
- `<$HeightMd>`
- `<$HeightLg>`





## Height

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Height
include('material/Editor/Height')

' renders the element
Height('Height', 'Height', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Height
include('material/Editor/Height')

' renders the element
Height('Height', 'Height', 'an optional tech label', 'an optional description')
@enduml
```

