# BookOpen


```text
fontawesome-6/Solid/BookOpen
```

```text
include('fontawesome-6/Solid/BookOpen')
```



| Illustration | BookOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookOpen.png) | ![illustration for BookOpen](../../fontawesome-6/Solid/BookOpen.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookOpen
include('fontawesome-6/Solid/BookOpen')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookOpen
include('fontawesome-6/Solid/BookOpen')

' renders the element
BookOpen('BookOpen', 'Book Open', 'an optional tech label', 'an optional description')
@enduml
```

