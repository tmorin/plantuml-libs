# Api


```text
material/Action/Api
```

```text
include('material/Action/Api')
```



| Illustration | Api |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Api.png) | ![illustration for Api](../../material/Action/Api.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApiXs>`
- `<$ApiSm>`
- `<$ApiMd>`
- `<$ApiLg>`





## Api

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Api
include('material/Action/Api')

' renders the element
Api('Api', 'Api', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Api
include('material/Action/Api')

' renders the element
Api('Api', 'Api', 'an optional tech label', 'an optional description')
@enduml
```

