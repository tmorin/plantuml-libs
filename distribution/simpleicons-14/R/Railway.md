# Railway


```text
simpleicons-14/R/Railway
```

```text
include('simpleicons-14/R/Railway')
```



| Illustration | Railway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Railway.png) | ![illustration for Railway](../../simpleicons-14/R/Railway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RailwayXs>`
- `<$RailwaySm>`
- `<$RailwayMd>`
- `<$RailwayLg>`





## Railway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Railway
include('simpleicons-14/R/Railway')

' renders the element
Railway('Railway', 'Railway', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Railway
include('simpleicons-14/R/Railway')

' renders the element
Railway('Railway', 'Railway', 'an optional tech label', 'an optional description')
@enduml
```

