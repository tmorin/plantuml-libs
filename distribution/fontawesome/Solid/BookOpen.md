# BookOpen


```text
fontawesome/Solid/BookOpen
```

```text
include('fontawesome/Solid/BookOpen')
```



| Illustration | BookOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookOpen.png) | ![illustration for BookOpen](../../fontawesome/Solid/BookOpen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookOpenXs>`
- `<$BookOpenSm>`
- `<$BookOpenMd>`
- `<$BookOpenLg>`





## BookOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookOpen
include('fontawesome/Solid/BookOpen')

' renders the element
BookOpen('BookOpen', 'Book Open', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookOpen
include('fontawesome/Solid/BookOpen')

' renders the element
BookOpen('BookOpen', 'Book Open', 'an optional tech label', 'an optional description')
@enduml
```

