# Readme


```text
fontawesome/Brands/Readme
```

```text
include('fontawesome/Brands/Readme')
```



| Illustration | Readme |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Readme.png) | ![illustration for Readme](../../fontawesome/Brands/Readme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReadmeXs>`
- `<$ReadmeSm>`
- `<$ReadmeMd>`
- `<$ReadmeLg>`





## Readme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Readme
include('fontawesome/Brands/Readme')

' renders the element
Readme('Readme', 'Readme', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Readme
include('fontawesome/Brands/Readme')

' renders the element
Readme('Readme', 'Readme', 'an optional tech label', 'an optional description')
@enduml
```

