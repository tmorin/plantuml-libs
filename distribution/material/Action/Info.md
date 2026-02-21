# Info


```text
material/Action/Info
```

```text
include('material/Action/Info')
```



| Illustration | Info |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Info.png) | ![illustration for Info](../../material/Action/Info.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfoXs>`
- `<$InfoSm>`
- `<$InfoMd>`
- `<$InfoLg>`





## Info

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Info
include('material/Action/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Info
include('material/Action/Info')

' renders the element
Info('Info', 'Info', 'an optional tech label', 'an optional description')
@enduml
```

