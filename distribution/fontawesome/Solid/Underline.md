# Underline


```text
fontawesome/Solid/Underline
```

```text
include('fontawesome/Solid/Underline')
```



| Illustration | Underline |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Underline.png) | ![illustration for Underline](../../fontawesome/Solid/Underline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnderlineXs>`
- `<$UnderlineSm>`
- `<$UnderlineMd>`
- `<$UnderlineLg>`





## Underline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Underline
include('fontawesome/Solid/Underline')

' renders the element
Underline('Underline', 'Underline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Underline
include('fontawesome/Solid/Underline')

' renders the element
Underline('Underline', 'Underline', 'an optional tech label', 'an optional description')
@enduml
```

