# Weekend


```text
material/Content/Weekend
```

```text
include('material/Content/Weekend')
```



| Illustration | Weekend |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Weekend.png) | ![illustration for Weekend](../../material/Content/Weekend.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeekendXs>`
- `<$WeekendSm>`
- `<$WeekendMd>`
- `<$WeekendLg>`





## Weekend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Weekend
include('material/Content/Weekend')

' renders the element
Weekend('Weekend', 'Weekend', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Weekend
include('material/Content/Weekend')

' renders the element
Weekend('Weekend', 'Weekend', 'an optional tech label', 'an optional description')
@enduml
```

