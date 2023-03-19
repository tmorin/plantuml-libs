# Backward


```text
fontawesome-6/Solid/Backward
```

```text
include('fontawesome-6/Solid/Backward')
```



| Illustration | Backward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Backward.png) | ![illustration for Backward](../../fontawesome-6/Solid/Backward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackwardXs>`
- `<$BackwardSm>`
- `<$BackwardMd>`
- `<$BackwardLg>`





## Backward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Backward
include('fontawesome-6/Solid/Backward')

' renders the element
Backward('Backward', 'Backward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backward
include('fontawesome-6/Solid/Backward')

' renders the element
Backward('Backward', 'Backward', 'an optional tech label', 'an optional description')
@enduml
```

