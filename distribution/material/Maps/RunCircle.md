# RunCircle


```text
material/Maps/RunCircle
```

```text
include('material/Maps/RunCircle')
```



| Illustration | RunCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/RunCircle.png) | ![illustration for RunCircle](../../material/Maps/RunCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RunCircleXs>`
- `<$RunCircleSm>`
- `<$RunCircleMd>`
- `<$RunCircleLg>`





## RunCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RunCircle
include('material/Maps/RunCircle')

' renders the element
RunCircle('RunCircle', 'Run Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RunCircle
include('material/Maps/RunCircle')

' renders the element
RunCircle('RunCircle', 'Run Circle', 'an optional tech label', 'an optional description')
@enduml
```

