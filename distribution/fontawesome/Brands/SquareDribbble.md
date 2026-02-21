# SquareDribbble


```text
fontawesome/Brands/SquareDribbble
```

```text
include('fontawesome/Brands/SquareDribbble')
```



| Illustration | SquareDribbble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareDribbble.png) | ![illustration for SquareDribbble](../../fontawesome/Brands/SquareDribbble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareDribbbleXs>`
- `<$SquareDribbbleSm>`
- `<$SquareDribbbleMd>`
- `<$SquareDribbbleLg>`





## SquareDribbble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareDribbble
include('fontawesome/Brands/SquareDribbble')

' renders the element
SquareDribbble('SquareDribbble', 'Square Dribbble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareDribbble
include('fontawesome/Brands/SquareDribbble')

' renders the element
SquareDribbble('SquareDribbble', 'Square Dribbble', 'an optional tech label', 'an optional description')
@enduml
```

