# Http


```text
material/Action/Http
```

```text
include('material/Action/Http')
```



| Illustration | Http |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Http.png) | ![illustration for Http](../../material/Action/Http.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HttpXs>`
- `<$HttpSm>`
- `<$HttpMd>`
- `<$HttpLg>`





## Http

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Http
include('material/Action/Http')

' renders the element
Http('Http', 'Http', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Http
include('material/Action/Http')

' renders the element
Http('Http', 'Http', 'an optional tech label', 'an optional description')
@enduml
```

