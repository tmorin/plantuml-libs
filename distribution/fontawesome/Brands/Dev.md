# Dev


```text
fontawesome/Brands/Dev
```

```text
include('fontawesome/Brands/Dev')
```



| Illustration | Dev |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Dev.png) | ![illustration for Dev](../../fontawesome/Brands/Dev.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevXs>`
- `<$DevSm>`
- `<$DevMd>`
- `<$DevLg>`





## Dev

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dev
include('fontawesome/Brands/Dev')

' renders the element
Dev('Dev', 'Dev', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dev
include('fontawesome/Brands/Dev')

' renders the element
Dev('Dev', 'Dev', 'an optional tech label', 'an optional description')
@enduml
```

