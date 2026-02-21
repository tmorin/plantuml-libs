# Apper


```text
fontawesome/Brands/Apper
```

```text
include('fontawesome/Brands/Apper')
```



| Illustration | Apper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Apper.png) | ![illustration for Apper](../../fontawesome/Brands/Apper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApperXs>`
- `<$ApperSm>`
- `<$ApperMd>`
- `<$ApperLg>`





## Apper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Apper
include('fontawesome/Brands/Apper')

' renders the element
Apper('Apper', 'Apper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apper
include('fontawesome/Brands/Apper')

' renders the element
Apper('Apper', 'Apper', 'an optional tech label', 'an optional description')
@enduml
```

