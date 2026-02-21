# Filter


```text
fontawesome/Solid/Filter
```

```text
include('fontawesome/Solid/Filter')
```



| Illustration | Filter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Filter.png) | ![illustration for Filter](../../fontawesome/Solid/Filter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilterXs>`
- `<$FilterSm>`
- `<$FilterMd>`
- `<$FilterLg>`





## Filter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Filter
include('fontawesome/Solid/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filter
include('fontawesome/Solid/Filter')

' renders the element
Filter('Filter', 'Filter', 'an optional tech label', 'an optional description')
@enduml
```

