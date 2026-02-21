# SearchOff


```text
material/Action/SearchOff
```

```text
include('material/Action/SearchOff')
```



| Illustration | SearchOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SearchOff.png) | ![illustration for SearchOff](../../material/Action/SearchOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SearchOffXs>`
- `<$SearchOffSm>`
- `<$SearchOffMd>`
- `<$SearchOffLg>`





## SearchOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SearchOff
include('material/Action/SearchOff')

' renders the element
SearchOff('SearchOff', 'Search Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SearchOff
include('material/Action/SearchOff')

' renders the element
SearchOff('SearchOff', 'Search Off', 'an optional tech label', 'an optional description')
@enduml
```

