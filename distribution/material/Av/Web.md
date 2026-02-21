# Web


```text
material/Av/Web
```

```text
include('material/Av/Web')
```



| Illustration | Web |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Web.png) | ![illustration for Web](../../material/Av/Web.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebXs>`
- `<$WebSm>`
- `<$WebMd>`
- `<$WebLg>`





## Web

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Web
include('material/Av/Web')

' renders the element
Web('Web', 'Web', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Web
include('material/Av/Web')

' renders the element
Web('Web', 'Web', 'an optional tech label', 'an optional description')
@enduml
```

