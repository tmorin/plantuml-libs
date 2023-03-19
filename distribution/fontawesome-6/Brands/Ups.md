# Ups


```text
fontawesome-6/Brands/Ups
```

```text
include('fontawesome-6/Brands/Ups')
```



| Illustration | Ups |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ups.png) | ![illustration for Ups](../../fontawesome-6/Brands/Ups.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UpsXs>`
- `<$UpsSm>`
- `<$UpsMd>`
- `<$UpsLg>`





## Ups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ups
include('fontawesome-6/Brands/Ups')

' renders the element
Ups('Ups', 'Ups', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ups
include('fontawesome-6/Brands/Ups')

' renders the element
Ups('Ups', 'Ups', 'an optional tech label', 'an optional description')
@enduml
```

