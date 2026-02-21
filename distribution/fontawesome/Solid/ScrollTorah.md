# ScrollTorah


```text
fontawesome/Solid/ScrollTorah
```

```text
include('fontawesome/Solid/ScrollTorah')
```



| Illustration | ScrollTorah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ScrollTorah.png) | ![illustration for ScrollTorah](../../fontawesome/Solid/ScrollTorah.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrollTorahXs>`
- `<$ScrollTorahSm>`
- `<$ScrollTorahMd>`
- `<$ScrollTorahLg>`





## ScrollTorah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ScrollTorah
include('fontawesome/Solid/ScrollTorah')

' renders the element
ScrollTorah('ScrollTorah', 'Scroll Torah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScrollTorah
include('fontawesome/Solid/ScrollTorah')

' renders the element
ScrollTorah('ScrollTorah', 'Scroll Torah', 'an optional tech label', 'an optional description')
@enduml
```

