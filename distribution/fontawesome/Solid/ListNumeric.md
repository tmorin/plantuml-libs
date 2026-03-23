# ListNumeric


```text
fontawesome/Solid/ListNumeric
```

```text
include('fontawesome/Solid/ListNumeric')
```



| Illustration | ListNumeric |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ListNumeric.png) | ![illustration for ListNumeric](../../fontawesome/Solid/ListNumeric.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListNumericXs>`
- `<$ListNumericSm>`
- `<$ListNumericMd>`
- `<$ListNumericLg>`





## ListNumeric

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListNumeric
include('fontawesome/Solid/ListNumeric')

' renders the element
ListNumeric('ListNumeric', 'List Numeric', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListNumeric
include('fontawesome/Solid/ListNumeric')

' renders the element
ListNumeric('ListNumeric', 'List Numeric', 'an optional tech label', 'an optional description')
@enduml
```

