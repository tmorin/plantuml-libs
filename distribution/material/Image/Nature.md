# Nature


```text
material/Image/Nature
```

```text
include('material/Image/Nature')
```



| Illustration | Nature |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Nature.png) | ![illustration for Nature](../../material/Image/Nature.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NatureXs>`
- `<$NatureSm>`
- `<$NatureMd>`
- `<$NatureLg>`





## Nature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Nature
include('material/Image/Nature')

' renders the element
Nature('Nature', 'Nature', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nature
include('material/Image/Nature')

' renders the element
Nature('Nature', 'Nature', 'an optional tech label', 'an optional description')
@enduml
```

