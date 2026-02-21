# Spider


```text
fontawesome/Solid/Spider
```

```text
include('fontawesome/Solid/Spider')
```



| Illustration | Spider |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Spider.png) | ![illustration for Spider](../../fontawesome/Solid/Spider.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpiderXs>`
- `<$SpiderSm>`
- `<$SpiderMd>`
- `<$SpiderLg>`





## Spider

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Spider
include('fontawesome/Solid/Spider')

' renders the element
Spider('Spider', 'Spider', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Spider
include('fontawesome/Solid/Spider')

' renders the element
Spider('Spider', 'Spider', 'an optional tech label', 'an optional description')
@enduml
```

