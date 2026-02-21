# East


```text
material/Navigation/East
```

```text
include('material/Navigation/East')
```



| Illustration | East |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/East.png) | ![illustration for East](../../material/Navigation/East.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EastXs>`
- `<$EastSm>`
- `<$EastMd>`
- `<$EastLg>`





## East

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element East
include('material/Navigation/East')

' renders the element
East('East', 'East', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element East
include('material/Navigation/East')

' renders the element
East('East', 'East', 'an optional tech label', 'an optional description')
@enduml
```

