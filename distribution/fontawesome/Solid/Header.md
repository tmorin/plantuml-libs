# Header


```text
fontawesome/Solid/Header
```

```text
include('fontawesome/Solid/Header')
```



| Illustration | Header |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Header.png) | ![illustration for Header](../../fontawesome/Solid/Header.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeaderXs>`
- `<$HeaderSm>`
- `<$HeaderMd>`
- `<$HeaderLg>`





## Header

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Header
include('fontawesome/Solid/Header')

' renders the element
Header('Header', 'Header', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Header
include('fontawesome/Solid/Header')

' renders the element
Header('Header', 'Header', 'an optional tech label', 'an optional description')
@enduml
```

