# _99Designs


```text
simpleicons/_/_99Designs
```

```text
include('simpleicons/_/_99Designs')
```



| Illustration | _99Designs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/_/_99Designs.png) | ![illustration for _99Designs](../../simpleicons/_/_99Designs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_99DesignsXs>`
- `<$_99DesignsSm>`
- `<$_99DesignsMd>`
- `<$_99DesignsLg>`





## _99Designs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element _99Designs
include('simpleicons/_/_99Designs')

' renders the element
_99Designs('99designs', '99designs', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element _99Designs
include('simpleicons/_/_99Designs')

' renders the element
_99Designs('99designs', '99designs', 'an optional tech label', 'an optional description')
@enduml
```

