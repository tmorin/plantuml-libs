# LinkOff


```text
material/Content/LinkOff
```

```text
include('material/Content/LinkOff')
```



| Illustration | LinkOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/LinkOff.png) | ![illustration for LinkOff](../../material/Content/LinkOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkOffXs>`
- `<$LinkOffSm>`
- `<$LinkOffMd>`
- `<$LinkOffLg>`





## LinkOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LinkOff
include('material/Content/LinkOff')

' renders the element
LinkOff('LinkOff', 'Link Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinkOff
include('material/Content/LinkOff')

' renders the element
LinkOff('LinkOff', 'Link Off', 'an optional tech label', 'an optional description')
@enduml
```

