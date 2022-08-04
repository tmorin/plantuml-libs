# Texture


```text
material-4/Image/Texture
```

```text
include('material-4/Image/Texture')
```



| Illustration | Texture |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Texture.png) | ![illustration for Texture](../../material-4/Image/Texture.Local.png) |




## Texture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Texture
include('material-4/Image/Texture')

' renders the element
Texture('Texture', 'Texture', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Texture
include('material-4/Image/Texture')

' renders the element
Texture('Texture', 'Texture', 'an optional tech label', 'an optional description')
@enduml
```

