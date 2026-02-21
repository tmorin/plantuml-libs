# Sort


```text
fontawesome/Solid/Sort
```

```text
include('fontawesome/Solid/Sort')
```



| Illustration | Sort |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sort.png) | ![illustration for Sort](../../fontawesome/Solid/Sort.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SortXs>`
- `<$SortSm>`
- `<$SortMd>`
- `<$SortLg>`





## Sort

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sort
include('fontawesome/Solid/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sort
include('fontawesome/Solid/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label', 'an optional description')
@enduml
```

