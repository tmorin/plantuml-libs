# FontAwesomeLogoFull


```text
fontawesome/Regular/FontAwesomeLogoFull
```

```text
include('fontawesome/Regular/FontAwesomeLogoFull')
```



| Illustration | FontAwesomeLogoFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FontAwesomeLogoFull.png) | ![illustration for FontAwesomeLogoFull](../../fontawesome/Regular/FontAwesomeLogoFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FontAwesomeLogoFullXs>`
- `<$FontAwesomeLogoFullSm>`
- `<$FontAwesomeLogoFullMd>`
- `<$FontAwesomeLogoFullLg>`





## FontAwesomeLogoFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FontAwesomeLogoFull
include('fontawesome/Regular/FontAwesomeLogoFull')

' renders the element
FontAwesomeLogoFull('FontAwesomeLogoFull', 'Font Awesome Logo Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FontAwesomeLogoFull
include('fontawesome/Regular/FontAwesomeLogoFull')

' renders the element
FontAwesomeLogoFull('FontAwesomeLogoFull', 'Font Awesome Logo Full', 'an optional tech label', 'an optional description')
@enduml
```

