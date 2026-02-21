# J


```text
fontawesome/Solid/J
```

```text
include('fontawesome/Solid/J')
```



| Illustration | J |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/J.png) | ![illustration for J](../../fontawesome/Solid/J.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JXs>`
- `<$JSm>`
- `<$JMd>`
- `<$JLg>`





## J

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element J
include('fontawesome/Solid/J')

' renders the element
J('J', 'J', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element J
include('fontawesome/Solid/J')

' renders the element
J('J', 'J', 'an optional tech label', 'an optional description')
@enduml
```

