# Venus


```text
fontawesome/Solid/Venus
```

```text
include('fontawesome/Solid/Venus')
```



| Illustration | Venus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Venus.png) | ![illustration for Venus](../../fontawesome/Solid/Venus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VenusXs>`
- `<$VenusSm>`
- `<$VenusMd>`
- `<$VenusLg>`





## Venus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Venus
include('fontawesome/Solid/Venus')

' renders the element
Venus('Venus', 'Venus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Venus
include('fontawesome/Solid/Venus')

' renders the element
Venus('Venus', 'Venus', 'an optional tech label', 'an optional description')
@enduml
```

