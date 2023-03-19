# Css3


```text
fontawesome-6/Brands/Css3
```

```text
include('fontawesome-6/Brands/Css3')
```



| Illustration | Css3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Css3.png) | ![illustration for Css3](../../fontawesome-6/Brands/Css3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Css3Xs>`
- `<$Css3Sm>`
- `<$Css3Md>`
- `<$Css3Lg>`





## Css3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Css3
include('fontawesome-6/Brands/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Css3
include('fontawesome-6/Brands/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label', 'an optional description')
@enduml
```

