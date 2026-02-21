# Quinscape


```text
fontawesome/Brands/Quinscape
```

```text
include('fontawesome/Brands/Quinscape')
```



| Illustration | Quinscape |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Quinscape.png) | ![illustration for Quinscape](../../fontawesome/Brands/Quinscape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuinscapeXs>`
- `<$QuinscapeSm>`
- `<$QuinscapeMd>`
- `<$QuinscapeLg>`





## Quinscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Quinscape
include('fontawesome/Brands/Quinscape')

' renders the element
Quinscape('Quinscape', 'Quinscape', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quinscape
include('fontawesome/Brands/Quinscape')

' renders the element
Quinscape('Quinscape', 'Quinscape', 'an optional tech label', 'an optional description')
@enduml
```

