# Animation


```text
material-4/Image/Animation
```

```text
include('material-4/Image/Animation')
```



| Illustration | Animation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Animation.png) | ![illustration for Animation](../../material-4/Image/Animation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnimationXs>`
- `<$AnimationSm>`
- `<$AnimationMd>`
- `<$AnimationLg>`





## Animation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Animation
include('material-4/Image/Animation')

' renders the element
Animation('Animation', 'Animation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Animation
include('material-4/Image/Animation')

' renders the element
Animation('Animation', 'Animation', 'an optional tech label', 'an optional description')
@enduml
```

