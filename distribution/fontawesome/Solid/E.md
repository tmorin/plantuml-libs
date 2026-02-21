# E


```text
fontawesome/Solid/E
```

```text
include('fontawesome/Solid/E')
```



| Illustration | E |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/E.png) | ![illustration for E](../../fontawesome/Solid/E.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EXs>`
- `<$ESm>`
- `<$EMd>`
- `<$ELg>`





## E

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element E
include('fontawesome/Solid/E')

' renders the element
E('E', 'E', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element E
include('fontawesome/Solid/E')

' renders the element
E('E', 'E', 'an optional tech label', 'an optional description')
@enduml
```

