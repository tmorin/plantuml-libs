# Hackerrank


```text
fontawesome/Brands/Hackerrank
```

```text
include('fontawesome/Brands/Hackerrank')
```



| Illustration | Hackerrank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Hackerrank.png) | ![illustration for Hackerrank](../../fontawesome/Brands/Hackerrank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackerrankXs>`
- `<$HackerrankSm>`
- `<$HackerrankMd>`
- `<$HackerrankLg>`





## Hackerrank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hackerrank
include('fontawesome/Brands/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackerrank
include('fontawesome/Brands/Hackerrank')

' renders the element
Hackerrank('Hackerrank', 'Hackerrank', 'an optional tech label', 'an optional description')
@enduml
```

