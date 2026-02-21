# HdrOn


```text
material/Image/HdrOn
```

```text
include('material/Image/HdrOn')
```



| Illustration | HdrOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/HdrOn.png) | ![illustration for HdrOn](../../material/Image/HdrOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HdrOnXs>`
- `<$HdrOnSm>`
- `<$HdrOnMd>`
- `<$HdrOnLg>`





## HdrOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HdrOn
include('material/Image/HdrOn')

' renders the element
HdrOn('HdrOn', 'Hdr On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrOn
include('material/Image/HdrOn')

' renders the element
HdrOn('HdrOn', 'Hdr On', 'an optional tech label', 'an optional description')
@enduml
```

