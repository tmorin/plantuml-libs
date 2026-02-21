# At


```text
fontawesome/Solid/At
```

```text
include('fontawesome/Solid/At')
```



| Illustration | At |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/At.png) | ![illustration for At](../../fontawesome/Solid/At.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtXs>`
- `<$AtSm>`
- `<$AtMd>`
- `<$AtLg>`





## At

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element At
include('fontawesome/Solid/At')

' renders the element
At('At', 'At', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element At
include('fontawesome/Solid/At')

' renders the element
At('At', 'At', 'an optional tech label', 'an optional description')
@enduml
```

