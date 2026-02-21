# MultipleStop


```text
material/Maps/MultipleStop
```

```text
include('material/Maps/MultipleStop')
```



| Illustration | MultipleStop |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/MultipleStop.png) | ![illustration for MultipleStop](../../material/Maps/MultipleStop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MultipleStopXs>`
- `<$MultipleStopSm>`
- `<$MultipleStopMd>`
- `<$MultipleStopLg>`





## MultipleStop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MultipleStop
include('material/Maps/MultipleStop')

' renders the element
MultipleStop('MultipleStop', 'Multiple Stop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MultipleStop
include('material/Maps/MultipleStop')

' renders the element
MultipleStop('MultipleStop', 'Multiple Stop', 'an optional tech label', 'an optional description')
@enduml
```

