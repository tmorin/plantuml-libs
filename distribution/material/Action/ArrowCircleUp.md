# ArrowCircleUp


```text
material/Action/ArrowCircleUp
```

```text
include('material/Action/ArrowCircleUp')
```



| Illustration | ArrowCircleUp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ArrowCircleUp.png) | ![illustration for ArrowCircleUp](../../material/Action/ArrowCircleUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowCircleUpXs>`
- `<$ArrowCircleUpSm>`
- `<$ArrowCircleUpMd>`
- `<$ArrowCircleUpLg>`





## ArrowCircleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArrowCircleUp
include('material/Action/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowCircleUp
include('material/Action/ArrowCircleUp')

' renders the element
ArrowCircleUp('ArrowCircleUp', 'Arrow Circle Up', 'an optional tech label', 'an optional description')
@enduml
```

