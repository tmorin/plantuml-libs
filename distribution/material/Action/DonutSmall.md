# DonutSmall


```text
material/Action/DonutSmall
```

```text
include('material/Action/DonutSmall')
```



| Illustration | DonutSmall |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DonutSmall.png) | ![illustration for DonutSmall](../../material/Action/DonutSmall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DonutSmallXs>`
- `<$DonutSmallSm>`
- `<$DonutSmallMd>`
- `<$DonutSmallLg>`





## DonutSmall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DonutSmall
include('material/Action/DonutSmall')

' renders the element
DonutSmall('DonutSmall', 'Donut Small', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DonutSmall
include('material/Action/DonutSmall')

' renders the element
DonutSmall('DonutSmall', 'Donut Small', 'an optional tech label', 'an optional description')
@enduml
```

