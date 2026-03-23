# ListDots


```text
fontawesome/Solid/ListDots
```

```text
include('fontawesome/Solid/ListDots')
```



| Illustration | ListDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ListDots.png) | ![illustration for ListDots](../../fontawesome/Solid/ListDots.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListDotsXs>`
- `<$ListDotsSm>`
- `<$ListDotsMd>`
- `<$ListDotsLg>`





## ListDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListDots
include('fontawesome/Solid/ListDots')

' renders the element
ListDots('ListDots', 'List Dots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListDots
include('fontawesome/Solid/ListDots')

' renders the element
ListDots('ListDots', 'List Dots', 'an optional tech label', 'an optional description')
@enduml
```

