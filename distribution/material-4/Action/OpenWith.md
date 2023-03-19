# OpenWith


```text
material-4/Action/OpenWith
```

```text
include('material-4/Action/OpenWith')
```



| Illustration | OpenWith |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OpenWith.png) | ![illustration for OpenWith](../../material-4/Action/OpenWith.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenWithXs>`
- `<$OpenWithSm>`
- `<$OpenWithMd>`
- `<$OpenWithLg>`





## OpenWith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OpenWith
include('material-4/Action/OpenWith')

' renders the element
OpenWith('OpenWith', 'Open With', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OpenWith
include('material-4/Action/OpenWith')

' renders the element
OpenWith('OpenWith', 'Open With', 'an optional tech label', 'an optional description')
@enduml
```

